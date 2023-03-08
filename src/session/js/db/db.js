class Database {
    constructor(db){
        this.db = db
        this.localUser = 'Elieser' // buscar en localstorage
        this.contacts = ['Pepinillo', 'pepito']
    }


    #contactsSearch(name){
        if (this.contacts.indexOf(e => e === name) === -1) {
            return true
        }
        return false
    }

    #newSlotDb(content, db){
        const newUserSlot = {
            userSlotName: content.userNick,
            porfilePhoto: db.name === 'unknows' ? 'userProfiles/unknow.jpg' : `userProfiles/${content.userNick}`, 
            messages: [content],
        }
        db.put(newUserSlot)
    }

    #unknowContact(content){
        const tempDb = new PouchDB('unknows')
        this.#searchAndPost(content.userNick, content, tempDb)
    }

    #searchAndPost(name, content, db){

        db.query(function(doc){
            if (doc.userSlotName === name) {
                doc.messages.push(content)
                db.put(doc)
                return 
            }
            if(this.#contactsSearch(name) && db.name !== 'unknows') {
                this.#unknowContact(content)
                return
            }
            this.#newSlotDb(content, this.db)
            
        }, {
            key: name,
            include_docs: true,
        });

    }

    #postMsg(content){
        if(content.destinatary === this.localUser){
            this.#searchAndPost(content.userNick, content, this.db)
            return
        }
        this.#searchAndPost(content.destinatary, content)
    }

    newStateUp(content){
        this.#postMyMsg(content)
    }
    newStateDown(content){
        this.#postMsg(content)
    }
}