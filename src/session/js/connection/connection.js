class Sync{
    constructor(socket){
        this.socket = socket
    }
    #sendMessage(message){        
     this.socket.emit('cli:newmessage', message)
    }
    #sendSeen(){
        this.socket.emit('cli:seenmessage', {seen: true})
    }
    newStateUp(message){
        this.#sendMessage(message)
    }
    newStateDown(message){
        this.#sendSeen()
    }

}