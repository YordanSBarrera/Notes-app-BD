const notesCtrl = {};

const Note = require("../models/note");
// const note = require('../models/note');
// //const note = require('../models/note');

notesCtrl.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

notesCtrl.createNewNote = async (req, res) => {
  console.log("form :", req.body);
  const newNote = new Note({
    title: req.body.title,
    description: req.body.description,
  });
  //console.log(newNote);
  await newNote.save();
  res.redirect("/notes/all");
};

notesCtrl.renderNote = async (req, res) => {
  const notes = await Note.find().lean();
  res.render("notes/all-notes", { notes });
  //res.send('render nota');
};

notesCtrl.renderNoteEdit = async (req, res) => {
  console.log("entro en metodosRNE ->" + req.params.id);
  const note = await Note.findById(req.params.id).lean();
  console.log(note);
  res.render("notes/edit-note", { note });
};

// notesCtrl.updateNote = (req, res) => { 
//   console.log(req.body)
//   res.send("UPDATE");
//   console.log( "   er");
// };

notesCtrl.updateNote = async(req, res) => {
  console.log("**********NE************")
  console.log(req.body);
  const {title,description}=req.body;
  await Note.findByIdAndUpdate(req.params.id,{title,description});
  res.redirect("/notes/all");
};

notesCtrl.deleteNote = async (req, res) => {
  console.log("ID ->" + req.params.id);
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/notes/all");
};

module.exports = notesCtrl;
