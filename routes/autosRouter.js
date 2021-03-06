const express = require('express');
const router = express.Router();
 const {index, show, search} = require('../controllers/autosController');



router.get('/', index);
router.get('/show/:id', show);
router.get('/search', search);



module.exports = router;