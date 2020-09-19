const notesCtrl = {};

const Note = require('../models/note');
// const note = require('../models/note');
// //const note = require('../models/note');

notesCtrl.renderNoteEdit = async (req, res) => {
    console.log('entro en metodos ->' + req.params.id);
    const note = await Note.findById(req.params.id).lean();
    console.log(note);
    res.render('notas/edit-nota', { note });
};

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notas/new-nota');
};

notesCtrl.createNewNote = async (req, res) => {
    console.log('form :', req.body);
    const newNote = new Note({
        title: req.body.title,
        description: req.body.description
    });
    console.log(newNote);
    await newNote.save();
    res.redirect('/todo');
};

notesCtrl.renderNote = async (req, res) => {
    const notas = await Note.find().lean();

    res.render('notas/all-notas', { notas });
    //res.send('render nota');
};

// notesCtrl.renderEditForm = (req, res) => {
//    // const nota=Note.findById(req.params.id);
//     res.render('/notas/edit-nota');
// };

notesCtrl.deleteNote = async (req, res) => {
    console.log("ID ->" + req.params.id);
    await Note.findByIdAndDelete(req.params.id);
    console.log('debe de haberse borrado');
    res.redirect('/todo');
};

module.exports = notesCtrl;
