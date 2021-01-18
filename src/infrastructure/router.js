import { Router } from 'express'

const baseRouter = Router()

export const createRouterInstance = () => Router()

export const registerRoutes = (routes) => baseRouter.use(routes)

export const getRegisteredRoutes = () => baseRouter
