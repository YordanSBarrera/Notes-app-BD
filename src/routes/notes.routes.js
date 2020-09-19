const { Router } = require('express')
const router = Router()
const {
    createNewNote,
    renderNote,
    renderNoteForm,
    renderNoteEdit,
    deleteNote
} = require('../controllers/notes.controller');

router.get('/123', renderNoteForm);
router.post('/notas/new-nota', createNewNote);
router.get('/todo', renderNote);

router.get('/notas/edit/:id',renderNoteEdit);

router.delete('/notas/delete/:id', deleteNote);

module.exports = router