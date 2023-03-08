const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./network/routes');

const connectDb  = require('./db');
connectDb('mongodb://localhost/telegrom', true)

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

routes(app)

// statics
app.use('/', express.static(`${__dirname}/../build/public`))

// finish
app.listen(3030)
console.log('app is running on port 3030')