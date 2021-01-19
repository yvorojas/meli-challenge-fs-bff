import { setRoutes, listenServer, setMiddleware } from './infrastructure/server'
import {
  registerRoutes,
  registerRoute,
  getRegisteredRoutes,
} from './infrastructure/server/router'
import controllers from './gateways/controllers'
import apiDocsRoute from './infrastructure/drivers/apiDocsRoute'
import handleErrors from './infrastructure/middlewares/handleErrors'
import { initialize } from './infrastructure/drivers/clientCall'

const API_URL = process.env.API_URL
const PORT = process.env.PORT || 3000

initialize(API_URL)
registerRoutes(controllers)
registerRoute('/docs', apiDocsRoute)
setRoutes(getRegisteredRoutes())
setMiddleware(handleErrors)

const server = listenServer(PORT)

console.log(`server listening on port ${PORT}`)

export default server
