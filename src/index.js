import { setRoutes, listenServer, setMiddleware } from './infrastructure/server'
import {
  registerRoutes,
  getRegisteredRoutes,
} from './infrastructure/server/router'
import controllers from './gateways/controllers'
import { initialize } from './infrastructure/drivers/clientCall'

const API_URL = process.env.API_URL
const PORT = process.env.PORT || 3000

initialize(API_URL)
registerRoutes(controllers)
setRoutes(getRegisteredRoutes())

const server = listenServer(PORT)

console.log(`server listening on port ${PORT}`)

export default server
