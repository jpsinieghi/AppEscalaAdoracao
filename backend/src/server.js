const mongoose = require('mongoose');
const express = require('express');
const requireDir = require('require-dir')
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
requireDir('./models')

//Criação das Rotas
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(express.json())
app.use(logger('dev'));
app.use('/api', require("./routes")),
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

//Conexao com BD
const dbRoute =  'mongodb://localhost/dbEscala';
mongoose.connect(dbRoute, { useNewUrlParser: true,  useUnifiedTopology: true });
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log(db)

