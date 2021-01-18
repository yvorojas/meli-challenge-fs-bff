import { setRoutes, listenServer, setMiddleware } from './infrastructure/server'
import { registerRoutes, getRegisteredRoutes } from './infrastructure/router'
import controllers from './gateways/controllers'

const API_URL = process.env.API_URL
const PORT = process.env.PORT || 3000
registerRoutes(controllers)

setRoutes(getRegisteredRoutes())

const server = listenServer(PORT)

console.log(`server listening on port ${PORT}`)

export default server
