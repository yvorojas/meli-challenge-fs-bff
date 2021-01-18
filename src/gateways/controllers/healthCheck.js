import { StatusCodes } from 'http-status-codes'
import { createRouterInstance } from '../../infrastructure/router'
import packageInfo from '../../../package'

const router = createRouterInstance()

router.get('/', (param, res, next) => {
  res.status = StatusCodes.OK
  return res.jsonp({ version: packageInfo.version })
})

export default router
