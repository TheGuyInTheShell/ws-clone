const mongoose = require('mongoose');

const Schema = mongoose.Schema

const poolSchema = new Schema({
    userNick: String,
    messages: [{
        sender: String,
        text: String,
        createAt: String,
    }],
})

const model = mongoose.model('Pool', poolSchema)

module.exports = model