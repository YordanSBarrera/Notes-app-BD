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

const { isAuthenticated } = require("../helpers/auth");
//show notes
router.get("/notes/new", isAuthenticated, renderNoteForm);
router.post("/notes/new-note", isAuthenticated, createNewNote);
router.get("/notes/all", isAuthenticated, renderNote);

//Edit notes
router.get("/notes/edit/:id", isAuthenticated, renderNoteEdit);
router.put("/notes/edit/:id", isAuthenticated, updateNote);

//delete notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

module.exports = router;
