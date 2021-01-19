import { StatusCodes } from 'http-status-codes'
import { createRouter } from '../interfaces/server'
import packageInfo from '../../../package'

const router = createRouter()

router.get('/', (param, res, next) => {
  res.status = StatusCodes.OK
  return res.jsonp({ version: packageInfo.version })
})

export default router
