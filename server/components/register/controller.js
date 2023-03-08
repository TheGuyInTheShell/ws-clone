const store = require('./store')

function addUser({userNick, password, repass, questionNum, answer}) {
    return new Promise(async (res, rej)=>{
        if(!(userNick && password && repass && questionNum && answer)){
            console.error('[msg controller] datos invalidos')
            rej('Datos invalidos')
            return;
        }
        if (await store.verifyUser({userNick, password, repass, questionNum, answer})) {
            const userData = {
                userNick,
                password,
                questionNum,
                answer,
                profilePhoto: '',
                contacts: [],
                createAt: new Date(),
            }
            store.addUser(userData)
            res({userNick, createAt: userData.createAt})
            return;
        }
        rej('Datos invalidos')
    })
}

module.exports = {
    addUser
}