const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
const Log = require('./log');
const Membro = require('./membros');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute =
  // 'mongodb+srv://escala:j127px35a@cluster0-ckfvn.mongodb.net/escala';
  'mongodb://localhost/escala';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
router.get('/getData/:dataEscolhida',(req, res) => {
  Data.find({dia : req.params.dataEscolhida},(err, data) => {
    if (err) return res.json({ success: false, error: err });
    // return res.json({ success: true, data: data });
    console.log(req.params)
    return res.json({ success: true, data: data });
  }).sort({ hora: 1});
});

router.get('/getMembro/',(req, res) => {
  Membro.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    // return res.json({ success: true, data: data });
    console.log(req.params)
    return res.json({ success: true, data: data });
  }).sort({nome: 1});
});
// router.get('/getMembro/:sid',(req, res) => {
//   Membro.find({sid : req.params.sid},(err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     // return res.json({ success: true, data: data });
//     console.log(req.params)
//     return res.json({ success: true, data: data });
//   });
// });

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData/:_id', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post('/putData', (req, res) => {
  let data = new Data();
  
  const { dia, hora, sid, status } = req.body;

  data.dia = dia;
  data.hora = hora;
  data.sid = sid;
  data.status = status;
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post('/putLog', (req, res) => {
  let data = new Log();
  
  const { dia, hora, sid, status } = req.body;

  data.dia = dia;
  data.hora = hora;
  data.sid = sid;
  data.status = status;
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));