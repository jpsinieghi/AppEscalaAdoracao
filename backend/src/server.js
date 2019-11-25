const mongoose = require('mongoose');
const express = require('express');
const requireDir = require('require-dir')
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');


const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute =
  // 'mongodb+srv://escala:j127px35a@cluster0-ckfvn.mongodb.net/escala';
  'mongodb://localhost/escala';
  //'mongodb://10.0.95.202/escala?replicaSet=rs0';
  // 'mongodb://10.0.95.202/escala';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

requireDir('./models')

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.use(logger('dev'));

// append /api for our http requests
//app.use('/api', router);
app.use('/api', require("./routes")),

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));