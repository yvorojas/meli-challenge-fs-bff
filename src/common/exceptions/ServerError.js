const NOT_FOUND_STATUS_CODE = 404
const INTERNAL_SERVER_ERROR_CODE = 500
const DEFAULT_INTERNAL_SERVER_ERROR_MESSAGE = 'Error interno de servidor'

class ServerError extends Error {
  constructor(message) {
    super()
    this.message = message
  }

  getCode() {
    if (this instanceof NotFound) {
      return NOT_FOUND_STATUS_CODE
    }
    return INTERNAL_SERVER_ERROR_CODE
  }
}

class NotFound extends ServerError {}
class InternalServerError extends ServerError {
  constructor() {
    super(DEFAULT_INTERNAL_SERVER_ERROR_MESSAGE)
  }
}

export { ServerError, NotFound, InternalServerError }
