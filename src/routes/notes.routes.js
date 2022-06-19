const { Router } = require("express");
const router = Router();
const {
  createNewNote,
  renderNote,
  renderNoteForm,
  renderNoteEdit,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");
const { isUserIn } = require("../helpers/auth");

//show notes
router.get("/notes/new", isUserIn, renderNoteForm);
router.post("/notes/new-note", isUserIn, createNewNote);
router.get("/notes/all", isUserIn, renderNote);

//Edit notes
router.get("/notes/edit/:id", isUserIn, renderNoteEdit);
router.put("/notes/edit/:id", isUserIn, updateNote);

//delete notes
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;
