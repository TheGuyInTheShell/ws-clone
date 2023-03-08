exports.success = function(req, res, body, status){
    
    setTimeout(()=>{
        try {
            res.status(status || 200)
            .header({
                "custom-header": "value send"
            })
            .send(
                {
                    err: "",
                    body: body
                }
                )
            console.log('[Respuesta enviada a] ' + req.ip)
            } catch (error) {
                res.status(status || 500)
                .header({
                    "custom-header": "value send"
                })
                .send({
                    err: "Error",
                })
            }
    }, 0)
    
}

exports.error = function(req, res, err, status) {
    setTimeout(()=>{
            res.status(status || 500)
            .header({
                "custom-header": "value send"
            })
            .send(
                {
                   err: "Unexpected Error"
                }
            )
            console.log('[Error desde respuesta] '+ err)
    }, 0)
}