const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router()


router.get('/', (req, res)=>{
    controller.login(
        req.query.userNick ?? null,
        req.query.password ?? null
     )
        .then((loginMsg)=>{
            response.success(req, res, loginMsg, 200)
        })
        .catch(e => response.error(req, res, e, 400))
})

module.exports = router