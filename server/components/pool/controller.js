const store = require('./store')


function addMsgPool({destinatary, message}) {
    return new Promise((res, rej)=>{
        if(!(message.sender && destinatary && message.text && message.date)){
            console.error('[pool controller] datos erroeneos en pool')
            rej('Empty data')
            return ;
        }
        const fullMessage = {
            destinatary,
            message,
        }
        store.add(fullMessage)
        res({msg: 'Mensaje enviado'})
    })
}

function getMsgsPool(userNick) {
    return new Promise((res, rej)=>{
        res(store.getMsgsPool(userNick))
    })
}

module.exports = {
    addMsgPool,
    getMsgsPool
}