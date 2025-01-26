const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");
const paytmurl = require("./src/middleware/PaytmURL");
const app = express();
const port = 5000;
const letdasrouter = require("./src/router/dsaRouter");
const logger = require('logger')
const morgan = require('morgan')


app.get('/', async(req,res)=>{
  res.send('i am runnig')
})





app.use(cors());
// app.use(loggermiddleware)
// app.use("/dsa", letdasrouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
