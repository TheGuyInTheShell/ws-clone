const store = require('./store')

function login(userNick, password) {
    return new Promise((res, rej)=>{
        if (!(userNick && password)) {
            console.error('[Login] data erronea', userNick + ' ' + password)
            rej('Empty data')
            return ;
        }
        res(store.login({userNick, password}))
    })
}

module.exports = {
    login
}