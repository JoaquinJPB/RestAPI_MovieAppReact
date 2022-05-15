const Movie = require('../models/Movie')

const findAllMovies = (req, res) => {
    const searchName = req.query.title
    if (req.query.title) {
        Movie.find({title: {$regex: searchName, $options: '$i'}})
            .then(movies => {
                res.json(movies)
            })
            .catch(error => res.sendStatus(400).send(error))
    } else {
        Movie.find()
            .then(movies => {
                res.json(movies)
            })
            .catch(error => res.sendStatus(400).send(error))
    }
}

const findById = (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            console.log({movie})
            res.json(movie)
        })
        .catch(error => res.sendStatus(404).send(error))
}

const addMovie = (req, res) => {
    Movie.create(req.body)
        .then(movie => {
            res.json(movie)
        })
        .catch(error => res.sendStatus(400).send(error))
}

module.exports = { findAllMovies, findById, addMovie }