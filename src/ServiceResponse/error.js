class GeneralError {
  status;
  msg;
  type;

  constructor(status, msg) {
    this.status = status;
    this.msg = msg;
  }

  format() {
    return {
      status: this.status,
      body: {
        error: {
          type: this.type,
          desciption: this.msg,
        },
      },
    };
  }
}

export class NotFoundError extends GeneralError {
  status = 404;
  type;
  msg;

  constructor(msg, type = "user.not.found") {
    super();
    this.msg = msg;
    this.type = type;
  }
}

export class BadRequest extends GeneralError {
  status = 400;
  type;
  msg;

  constructor(msg, type = "bad.request") {
    super();
    this.msg = msg;
    this.type = type;
  }
}

export class Conflict extends GeneralError {
  status = 409;
  type;
  msg;
  constructor(msg, type = "conflict") {
    super();
    this.msg = msg;
    this.type = type;
  }
}

export class UnexpectedError extends GeneralError {
  status = 500;
  type;
  msg;
  constructor(msg, type = "unexpected.service.error") {
    super();
    this.msg = msg;
    this.type = type;
  }
}

class HttpResponse {
  format(status, body, message, error) {
    return {
      status,
      body,
      message,
      error,
    };
  }

  success(status = 200, body, message, error = false) {
    this.format(status, body, message, error);
  }
}
