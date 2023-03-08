const mongoose = require('mongoose');

const MsgStore = require('./components/message/store')

mongoose.Promise = global.Promise
mongoose.set('strictQuery', false)
// 127.0.0.1:27017 
mongoose.connect('mongodb://localhost/telegrom')
    .catch(e => console.log(e))

const Schema = mongoose.Schema
