const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router()

router.post('/', (req, res)=>{
    console.log('on register fetch: ', req.body)
    controller.addUser({
        userNick: req.body.userNick,
        password: req.body.password,
        repass: req.body.repass,
        questionNum: req.body.questionNum,
        answer:  req.body.questionNum,
    })
    .then((usersucces)=>{
        response.success(req, res, usersucces, 200)
    })
    .catch(e => response.error(req, res, e, 400))
})

module.exports = router