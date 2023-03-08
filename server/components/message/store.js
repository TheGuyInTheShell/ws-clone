
const Model = require('./model');

/*
db.createUser({
    user: "telegrom",
    pwd: "1234",
    roles:[{role: "root", db: "admin"}]
})
*/

function addMessage(msg){
    const myMessage = new Model(msg)
    myMessage.save()
}

async function getMessages(userSearch) {
    return  userSearch ? await Model.find({user: userSearch}) : await Model.find() 
}

async function updateMessage(id, message) {
    const foundMsg = await Model.findById(id)
    foundMsg.message = message
    return await foundMsg.save()
}   

async function getMessageId(id){
    return await Model.findById(id)
}

async function deleteMsg(id) {
    let msgToDelete = await Model.findById(id)
    await Model.deleteOne({_id: id})
    return msgToDelete !==  null ? [msgToDelete] : "none"
}

module.exports = {
    add: addMessage,
    messages: getMessages,
    messageId: getMessageId,
    upMessage: updateMessage,
    deleteMsg
   
}