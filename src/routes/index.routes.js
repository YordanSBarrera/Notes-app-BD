const { Router } = require('express')
const router = Router();

const { rederIndex, rederAbout,prueba } = require('../controllers/index.controller')

router.get('/', rederIndex);

router.get('/About', rederAbout);

router.get('/notas',prueba);



module.exports = router;