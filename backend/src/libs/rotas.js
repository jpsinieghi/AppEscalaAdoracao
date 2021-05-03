const express = require('express');
var cors = require('cors');
const logger = require('morgan');

//Criação das Rotas
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
app.use(express.json())
app.use(logger('dev'));
app.use('/api', require("../routes")),
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));