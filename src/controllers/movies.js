const Movie = require('../models/Movie')

const findAllMovies = (req, res) => {
    const searchName = req.query.title
    if (req.query.title) {
        Movie.find({title: {$regex: searchName, $options: '$i'}}, (err, movies) => {
            err && res.sendStatus(500).send(err.message)
            res.status(200).json(movies)
        })
    } else {
        Movie.find((err, movies) => {
            err && res.sendStatus(500).send(err.message)
            res.status(200).json(movies)
        })
    }
}

const findById = (req, res) => {
    Movie.findById(req.params.id, (err, movie) => {
        err && res.sendStatus(500).send(err.message)
        res.status(200).json(movie)
    })
}

const addMovie = (req, res) => {
    let movie = new Movie({
        title: req.body.title,
        release: req.body.release,
        director: req.body.director,
        rating: req.body.rating,
        img: req.body.img,
    })

    movie.save((err, newMovie) => {
        err && res.sendStatus(500).send(err.message)
        res.status(200).json(newMovie)
    })
}

module.exports = { findAllMovies, findById, addMovie }