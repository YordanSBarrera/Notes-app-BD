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

//show notes
router.get("/notes/new", renderNoteForm);
router.post("/notes/new-note", createNewNote);
router.get("/notes/all", renderNote);

//Edit notes
router.get("/notes/edit/:id", renderNoteEdit);
router.put("/notes/edit/:id", updateNote);

//delete notes
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;
