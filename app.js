const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");
const paytmurl = require("./src/middleware/PaytmURL");
const app = express();
const port = 5000;
const letdasrouter = require("./src/router/dsaRouter");

app.use(cors());
app.use("/dsa", letdasrouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
