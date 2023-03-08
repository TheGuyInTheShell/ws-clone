export default class Observer {
    constructor(){
        this.subscribers = []
    }

    subscribe(...obj){
        this.subscribers.push(...obj)
    }
    unsubscribe(ind){
        this.subscribers = this.subscribers.filter( (_, i) => i !== ind)
    }

    up(message){
        this.subscribers.forEach(sub =>{
                setTimeout(()=>{
                    sub.newStateUp(message) 
                })
        })
    }

    down(message){
        this.subscribers.forEach(sub =>{
            setTimeout(()=>{
                sub.newStateDown(message)   
            })
        })
    }
    seen(message){
        this.subscribers.forEach(sub =>{
            setTimeout(()=>{
                sub.newStateSeen(message)   
            })
        })
    }

}