function errorHandler(res, statusCode, err) {
  switch(statusCode) {
  case 400:
    res.status(statusCode).send({
      message: 'Server error',
      err
    });
    break;
  case 401:
    res.status(statusCode).send({
      message: 'Unauthorized',
      err
    });
    break;
  case 404:
    res.status(statusCode).send({
      message: 'Unable to find resource',
      err
    });
    break;
  default: 
    res.status(statusCode).send({
      message: 'Server error',
      err
    });
  }
}

module.exports = errorHandler;