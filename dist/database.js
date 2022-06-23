const mongoose = require('mongoose');

//const MONGODB_URI = 'mongodb://localhost/notes-app';
const MONGODB_URI = process.env.MONGODB_URI;
//const {PROYECT_HOST,PROYECT_DATABASE} = process.env;
//const MONGODB_URI = 'mongodb://${PROYECT_HOST}/${PROYECT_DATABASE}';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(db => console.log('Database is connected')).catch(err => console.log(err));