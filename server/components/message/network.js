const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router()

router.get('/', (req, res)=>{
    console.time('networktest')
    controller.getMsgs(req.query.user ?? null)
        .then((msgList)=>{
            response.success(req, res, msgList, 200)
        })
        .catch(e => response.error(req, res, e, 400))
        console.timeEnd('networktest')
})

router.post('/', (req, res)=>{
    controller.addMsg(req.body.user, req.body.message, req.body.dest)
    .then((fullMessage)=>{
        response.success(req, res, [fullMessage])
    })
    .catch(e => response.error(req, res, e, 400))

})

router.patch('/:id', (req, res)=>{
    controller.updateMsg(req.params.id, req.body.message)
        .then((newMessage)=>{
            response.success(req, res, newMessage, 200)
       })
       .catch(e => response.error(req, res, e, 500))
})

router.delete('/:id', (req, res)=>{
    controller.deleteMsg(req.params.id)
    .then((copyMsg)=>{
        response.success(req, res, copyMsg, 200)
   })
   .catch(e => response.error(req, res, e, 500))
})

module.exports = router
