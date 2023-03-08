const mongoose = require('mongoose');

const Schema = mongoose.Schema

const sessionSchema = new Schema({
    userNick: String,
    token: String,
})

const model = mongoose.model('sessions', sessionSchema)

module.exports = model