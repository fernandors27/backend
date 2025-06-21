const auth = require('../middleware/auth');

const express = require('express');
const router = express.Router();
const controller = require('../controllers/filmController');

router.get('/', controller.getAllFilms);
router.post('/', auth, controller.createFilm);
router.put('/:id', auth, controller.updateFilm);
router.delete('/:id', auth, controller.deleteFilm);

module.exports = router;