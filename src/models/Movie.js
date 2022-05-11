const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    title: { type: String },
    release: {type: String},
    director: {type: String},
    img: {type: String},
},  
{   collection:'movies',
    versionKey: false
}
)

let MOVIE = mongoose.model('Movie', MovieSchema)
module.exports = MOVIE