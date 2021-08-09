const { Router } = require('express')
const router = Router()
const {
    createNewNote,
    renderNote,
    renderNoteForm,
    renderNoteEdit,
    deleteNote
} = require('../controllers/notes.controller');

//show notes
router.get('/123', renderNoteForm);
router.post('/notes/new-note', createNewNote);
router.get('/todo', renderNote);

//Edit notes
router.get('/notes/edit/:id',renderNoteEdit);
router.put('notes/edit/:id',renderNoteEdit);

//delete notes
router.delete('/notes/delete/:id', deleteNote);

module.exports = router