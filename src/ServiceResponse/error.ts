class GeneralError {
  status: any;
  msg: any;
  type: any;

  constructor(status?: number, msg?: string) {
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
  type: string;
  msg: string;

  constructor(msg: string, type = "user.not.found") {
    super();
    this.msg = msg;
    this.type = type;
  }
}

export class BadRequest extends GeneralError {
  status = 400;
  type: string;
  msg: string;

  constructor(msg: string, type = "bad.request") {
    super();
    this.msg = msg;
    this.type = type;
  }
}

export class Conflict extends GeneralError {
  status = 409;
  type: string;
  msg: string;
  constructor(msg: string, type = "conflict") {
    super();
    this.msg = msg;
    this.type = type;
  }
}

export class UnexpectedError extends GeneralError {
  status = 500;
  type: string;
  msg: string;
  constructor(msg: string, type = "unexpected.service.error") {
    super();
    this.msg = msg;
    this.type = type;
  }
}
