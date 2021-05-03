//Conexao com BD
const mongoose = require('mongoose');
const dbRoute =  'mongodb://localhost/dbEscala';
mongoose.connect(dbRoute, { useNewUrlParser: true,  useUnifiedTopology: true });
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
