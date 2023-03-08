/*  <article class="message">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p>Quae, repellendus omnis! Cupiditate, molestiae officia suscipit maxime obcaecati numquam.</p>
                <p>Dignissimos ratione alias inventore, repudiandae cumque culpa nam quia ipsum assumenda ullam.</p>
            </article>
            */
    // selecionar un contacto
    // hacer busqueda en la base de datos 
    // 

/*
    messages.insertBefore(msg, messages.firstChild)
*/



export default class Chat{
    constructor(domMessages){
        this.messagesArea = domMessages
    }
    dumbChat(){
        this.messagesArea.innerHTML = ''
    }
    putMessage(message, {mine = false, top = false }){
        const msg = document.createElement('article')
        const classes = ['message']
        if(mine) classes.push('mine')
        msg.classList.add(...classes)
        const text = document.createElement('p')
        text.textContent = message.text 
        msg.appendChild(text)
        top ? this.messagesArea.insertBefore(msg, this.messagesArea.firstChild) :  this.messagesArea.appendChild(msg)
    }
    newStateUp(content){
        this.putMessage(content, {mine: true})
    }
    newStateDown(content){
        this.putMessage(content)
    }
}