const mysql = require('mysql')

let conn = mysql.createConnection({
    host:"",
    user:"",
    password:""
})

conn.connect((err)=>{
    if(err) throw err
    console.log("connected")
})

