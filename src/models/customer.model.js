let mongoose = require('mongoose')

const server = ''
const database = ''
const user = ''
const password = ''

//insert your mongodb connect string below.

mongoose.connect(``)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)