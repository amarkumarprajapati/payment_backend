const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");
const paytmurl = require("./src/middleware/PaytmURL");

const app = express();
const port = 5000;

app.use(cors());
app.get("/", async (req, res) => {
  res.send("i am running");
});

app.get("/get/qr", async (req, res) => {
  try {
    const upiID = "8908013842@pthdfc";
    const payeeName = "Amar Kumar";
    const amount = 1;
    const currency = "INR";
    const qrCodeText = paytmurl(upiID, payeeName, amount, currency);
    const qrCodeDataURL = await QRCode.toDataURL(qrCodeText);
    res.json({
      success: true,
      qrCodeDataURL: qrCodeDataURL,
    });
    console.log(qrCodeDataURL);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to generate QR Code",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
