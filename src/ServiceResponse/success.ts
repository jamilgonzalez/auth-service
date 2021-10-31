class GeneralSuccess {
  status: any;
  payload: any;

  build() {
    return {
      status: this.status,
      body: this.payload,
    };
  }
}

export class Created extends GeneralSuccess {
  status = 201;
  payload: any;

  constructor(payload?: string) {
    super();
    this.payload = payload;
  }
}

export class OK extends GeneralSuccess {
  status = 200;
  payload: any;

  constructor(payload?: any) {
    super();
    this.payload = payload;
  }
}

export const ServiceSuccess = Object.freeze({
  Created: (payload?: any) => new Created(payload).build(),
  OK: (payload?: any) => new OK(payload).build(),
});
