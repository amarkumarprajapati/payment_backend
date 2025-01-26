const { response } = require('express')
const morgan = require('morgan')
const { loggers } = require('winston')
const morganFormat = ':method :url :status :response-time ms'

let morganlog = morgan(morganFormat,{
    stream:{
        write:(message)=>{
            const logobject = {
                method:message.split('')[0],
                URL: message.split('')[1],
                status:message.split('')[2],
                responseTime:message.split('')[3]
            }
            loggers.info(JSON.stringify(logobject))
        }

    }
})