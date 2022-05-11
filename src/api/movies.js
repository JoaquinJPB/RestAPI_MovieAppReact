const MovieController = require('../controllers/movies')
const express = require('express')

const router = express.Router()

router.get('/', MovieController.findAllMovies)

router.get('/:id', MovieController.findById)

router.post('/add', MovieController.addMovie)

module.exports = router