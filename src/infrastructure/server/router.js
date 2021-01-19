import { Router } from 'express'

const baseRouter = Router()

const createRouterInstance = () => Router()

const registerRoutes = (routes) => baseRouter.use(routes)

const getRegisteredRoutes = () => baseRouter

export { createRouterInstance, registerRoutes, getRegisteredRoutes }
