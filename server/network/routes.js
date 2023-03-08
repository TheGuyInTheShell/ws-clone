const message = require('../components/message/network')
const loger = require('../components/loger/network')
const register = require('../components/register/network')


const routes = function(server){
    server.use('/message', message)
    server.use('/users/loger', loger)
    server.use('/users/register', register)
}

module.exports = routes