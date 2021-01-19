import { ServerError } from '../../common/exceptions/ServerError'

const handleErrors = (err, req, res, next) => {
  if (err instanceof ServerError) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message,
    })
  }

  return res.status(500).json({
    status: 'error',
    message: err.message,
  })
}

export default handleErrors
