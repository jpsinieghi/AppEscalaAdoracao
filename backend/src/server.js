const mongoose = require('mongoose');
const express = require('express');
const requireDir = require('require-dir')
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
requireDir('./models')
require('./libs/rotas')
require('./libs/bd')





