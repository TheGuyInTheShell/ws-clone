const mongoose = require('mongoose');

mongoose.Promise = global.Promise

async function connectDb(url, strict) {
    await mongoose.set('strictQuery', strict)
    await mongoose.connect(url)
    .then( _ => console.log('[db] conectada con exito'))
    .catch(e => console.log(e))
}


module.exports = connectDb
