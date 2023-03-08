const Model = require('./model');

async function login(userNick, password) {
    const user = await Model.findOne({userNick: userNick})
    if (!user) return {msg: 'Usuario o clave erronea'}
    if (user.password !== password) return {msg: 'Usuario o clave erronea'}
    return user.userNick
}

module.exports = {
    login
}