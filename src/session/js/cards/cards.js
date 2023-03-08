export default class Cards{
    constructor(cardsArea){
        this.cardsArea = cardsArea
    }
    #lastMessage(message){
        console.log(message)
        if(!message.text) return 
        this.partMsg = message.text
        if(message.text.length > 45){
            this.partMsg = `${message.text.slice(0, 40)}...` 
        }
        const inbox = $('#inbox')
        const partArea = inbox.querySelector(`#${message.destinatary}`)
        partArea.innerHTML = `
        <h2>${message.destinatary}</h2>
        <h4>${message.userNick}:</h4><p>${this.partMsg}</p>`
        return this
    }
    #notification(userNick){
        // cambiar el attr a n++ para actualiozar el content del estilo
    }
    newStateUp(content){ // {destinatary: 'pepito', message: {sender, text}}
        this.#lastMessage(content)
    }
    newStateDown(content){
        this.#lastMessage(content)
        this.#notification(content)
    }
}
