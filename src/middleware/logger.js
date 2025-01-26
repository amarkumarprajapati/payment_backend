const {createLogger,format,transports} = require('winston')
const {combine,timestamp,json,colorize} = format
const mainlogger = {}


mainlogger.logformat = format.combine(
    format.colorize(),
    format.printf(({level,message,timestamp})=>{
        return `${level}:${message}`
    })
)

mainlogger.logger = createLogger({
    level: 'into',
    format: combine(
        colorize(),
        timestamp(),
        json()
    ),
    transports:[
        new transports.Console({
            format: consoleLogFormat
        }),
        new transports.File({filename: 'app.log'})
    ]
})


module.exports = mainlogger