class GeneralSuccess {
  status;
  payload;

  build() {
    return {
      status: this.status,
      body: this.payload,
    };
  }
}

export class Created extends GeneralSuccess {
  status = 201;
  payload;

  constructor(payload) {
    super();
    this.payload = payload;
  }
}

export class OK extends GeneralSuccess {
  status = 200;
  payload;

  constructor(payload) {
    super();
    this.payload = payload;
  }
}

module.exports = ServiceSuccess = Object.freeze({
  Created: (payload) => new Created(payload).build(),
  OK: (payload) => new OK(payload).build(),
});
