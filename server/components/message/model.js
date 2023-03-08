const mongoose = require('mongoose');

const Schema = mongoose.Schema

const mySchema = new Schema({
    user: String,
    toBy: String,
    message: {
        type: String,
        required: true
    },
    date: String,
})

const model = mongoose.model('messages', mySchema)

module.exports = model