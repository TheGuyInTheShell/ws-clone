window.$ = query => document.querySelector(query)

import Observer from './observer.js';
import Chat from './chat/chat.js';
import Cards from './cards/cards.js';
const observer = new Observer()


document.addEventListener('DOMContentLoaded', ()=>{
    const chat = new Chat($('#messages'))
    const cards = new Cards($('#cards'))
    // const socket = io()
    observer.subscribe(chat, cards)

    // socket.on('sv:newmessage', observer.down)
    // socket.on('sv:seen', observer.seen)

    $('#send').addEventListener('click', e=>{
        e.preventDefault()
        const textMsg = $('#text-message')
        const msg = {
            text:  textMsg.value,
            destinatary : 'pepito',
            userNick: 'Elieser',
        }
        observer.up(msg)
        textMsg.value = ''
    })
})