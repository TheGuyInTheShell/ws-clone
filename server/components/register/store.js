const Model = require('./model')


async function verifyUser({userNick, password, repass, questionNum, answer}) {
    const user = userNick
    if(questionNum > 4) return false
    if(password !== repass) return false
    if((await Model.findOne({userNick: user})) !== null) return false
    return true
}

async function addUser(userData) {
    const user = new Model(userData)
    await user.save()
    return 'añadido: ' + userData.userNick
}

module.exports = {
    addUser,
    verifyUser
}