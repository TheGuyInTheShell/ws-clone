const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    userNick: String,
    password: String,
})

const model = mongoose.model('users', userSchema)

module.exports = model