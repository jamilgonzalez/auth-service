class HttpResponse {
  format(status, body, message, error) {
    const responseItems = { status, body, message, error };
    return responseItems;
  }

  success(message, body) {
    return this.format(200, body, message, false);
  }

  created(message, body) {
    return this.format(201, body, message, false);
  }

  badRequest(message, body) {
    return this.format(400, body, message, true);
  }

  notFound(message, body) {
    return this.format(404, body, message, true);
  }

  conflict(message, body) {
    return this.format(409, body, message, true);
  }

  unexpectedError(message, body) {
    return this.format(500, body, message, true);
  }
}

module.exports = Format = new HttpResponse();
