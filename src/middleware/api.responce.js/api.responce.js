const apiResponse = {};

apiResponse.successResponse = function (res, msg) {
  var data = {
    success: true,
    message: msg,
  };
  return res.status(200).json(data);
};

apiResponse.successResponseWithData = function (res, msg, data) {
  var resData = {
    success: true,
    message: msg,
    data: data,
  };
  return res.status(200).json(resData);
};
apiResponse.successResponseWithDataPagination = function (
  res,
  msg,
  data,
  count,
  pagination,
  total
) {
  var resData = {
    success: true,
    message: msg,
    data: data,
    count: count,
    pagination: pagination,
    total,
  };
  return res.status(200).json(resData);
};

apiResponse.ErrorResponse = function (res, msg) {
  let data = {
    success: false,
    message: msg,
  };
  return res.status(500).json(data);
};

apiResponse.notFoundResponse = function (res, msg) {
  var data = {
    success: false,
    message: msg,
  };
  return res.status(404).json(data);
};

apiResponse.badRequestResponse = function (res, msg, data) {
  var resData = {
    success: false,
    message: msg,
  };
  return res.status(500).json(resData);
};

apiResponse.unauthorizedResponse = function (res, msg) {
  var data = {
    status: false,
    message: msg,
  };
  return res.status(401).json(data);
};

apiResponse.forbiddenResponse = function (res, msg) {
  let data = {
    status: false,
    message: msg,
  };
  return res.status(403).json(data);
};

apiResponse.conflictResponse = function (res, msg) {
  let data = {
    status: false,
    message: msg,
  };

  return res.status(409).json(data);
};

apiResponse.unprocessableEntityResponse = function (res, msg) {
  let data = {
    success: false,
    message: msg,
  };
  return res.status(422).json(data);
};
apiResponse.createdResponse = function (res, msg, data) {
  let resData = {
    success: true,
    message: msg,
    data: data,
  };
  return res.status(401).json(resData);
};


apiResponse.sendSuccess=(res, message)=>{
  res.send({status:"success", message:message})
}


apiResponse.sendError=(statusCode, res, message)=>{
  res.status(statusCode).send({status:"error", message:message});
}

apiResponse.sendData=(res, data)=>{
  res.send({status:"success", data:data})
}


module.exports = apiResponse;
