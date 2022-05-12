const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

// Settings
require('dotenv').config()

app.set('port', process.env.PORT || 5000)

mongoose.connect(process.env.MONGOO_DB)

app.use(cors())

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const Movies = require('./api/movies')
app.use('/api/movies', Movies)

app.get('/', (req, res) => {
    res.send('CORS solved')
})

// Starting Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})