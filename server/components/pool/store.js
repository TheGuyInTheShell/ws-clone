const Model = require('./model');
const MsgStore = require('../message/store');

async function addMsgsPool({destinatary, message}) { 
    const sendToMsg = async ()=>{
        await MsgStore.add({
            user: message.sender,
            toBy: destinatary, 
            message: message.text,
            date: message.createAt, 
        })
    }

    if (!(await Model.findOne({userNick: destinatary}))) {
        const newPool = new Model({userNick: destinatary, messages: [message]})
        await newPool.save()
        await sendToMsg()
    }else{
        const user = await Model.findOne({userNick: destinatary})
        user.messages.push(message)
        await user.save()
        await sendToMsg()
    }
        return {msg: 'Mensaje enviado'}
}

async function getMsgsPool(userNick) {
    const userPool = await Model.findOne({userNick: userNick}) 
    if (userPool) {
        userPool.messages.forEach(({sender ,text, createAt}) => {
            setTimeout(()=>{
                MsgStore.add({
                    user: userNick,
                    toBy: sender,
                    message: text,
                    date: createAt, 
                })
            })
        });
        let res = [...userPool.messages]
        userPool.messages = []
        userPool.save()
        return res
    }else{
        return {msg: 'No message'}
    }
}

module.exports = {
    getMsgsPool,
    addMsgsPool,
}