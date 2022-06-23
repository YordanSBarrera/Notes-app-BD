const { Schema, model } = require("mongoose");

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  idUser: {
    type: String,
    require: true
  }
}, {
  timestamps: true
});

module.exports = model("Note", NoteSchema);