const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");
const app = express();
const port = 5000;
const letdasrouter = require("./src/router/User_Router");
const logger = require("logger");
const morgan = require("morgan");
const mongodbconnect = require("./src/service/db.connect");
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("i am runnig");
});

mongodbconnect();

app.use(cors());
app.use("/auth", letdasrouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
