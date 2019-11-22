// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    dia: Number,
    hora: Number,
    sid: Number,
    status: Number
  },
  { collection: 'db_escala' }
);



// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
