const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router()

router.post('/', (req, res)=>{
    controller.addMsgsPool(req.body.destinatary, req.body.message)
    .then((fullMessage)=>{
        response.success(req, res, [fullMessage])
    })
    .catch(e => response.error(req, res, e, 400))
})

router.get('/', (req, res)=>{
    controller.getMsgsPool(req.query.user ?? null)
        .then((msgList)=>{
            response.success(req, res, msgList, 200)
        })
        .catch(e => response.error(req, res, e, 400))
})




module.exports = router