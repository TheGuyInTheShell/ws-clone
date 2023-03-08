const Model = require('./model')


async function addSession(userNick) {
    const data = {
        userNick,
        token: Math.random()*10<<1
    }
    const session = new Model(data)
    await session.save()
    return data   
}

function destroySession(userNick, token) {
    
}

module.exports = {
    addSession,
    destroySession,
}