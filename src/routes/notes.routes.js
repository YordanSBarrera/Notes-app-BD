const { Router } = require('express')
const router = Router()
const {
    createNewNote,
    renderNote,
    renderNoteForm,
    renderNoteEdit,
    deleteNote
} = require('../controllers/notes.controller');

//new note
router.get('/nuevaNota', renderNoteForm);
router.post('/notas/new-nota', createNewNote);

//get all notes
router.get('/todo', renderNote);

//edit note
router.get('/notas/edit/:id',renderNoteEdit);

//delete note
router.delete('/notas/delete/:id', deleteNote);

module.exports = router