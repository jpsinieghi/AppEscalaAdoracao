const mongoose = require("mongoose");
const DataMembro = new mongoose.Schema(
    {
      sid: Number,
      nome: String,
      status: Boolean
    },
    { collection: 'cnMembros' }
  );

  module.exports = mongoose.model("Members", DataMembro);