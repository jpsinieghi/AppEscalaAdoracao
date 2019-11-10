// /backend/membros.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataMembro = new Schema(
    {
      sid: Number,
      nome: String
    },
    { collection: 'membros' }
  );

  module.exports = mongoose.model("Membro", DataMembro);