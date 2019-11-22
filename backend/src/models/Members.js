const mongoose = require("mongoose");
const DataMembro = new mongoose.Schema(
    {
      sid: Number,
      nome: String
    },
    { collection: 'membros' }
  );

  module.exports = mongoose.model("Members", DataMembro);