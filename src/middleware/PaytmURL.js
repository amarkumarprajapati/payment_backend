let paytmurl = (upiID,payeeName,amount,currency) => {
  let senddata = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(
    payeeName
  )}&am=${amount}&cu=${currency}`;
  return senddata
};

module.exports = paytmurl
