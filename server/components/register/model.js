const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    userNick: String,
    password: String,
    questionNum: Number,
    answer: String,
    contacts: Array,
    profilePhoto: String,
    createAt: String,
})

const model = mongoose.model('Users', userSchema)

module.exports = model