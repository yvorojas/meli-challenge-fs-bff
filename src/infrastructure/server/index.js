import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import handleErrors from '../middlewares/handleErrors'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.options('*', cors())
app.use(handleErrors)

export const setRoutes = (routes) => {
  app.use(routes)
}

export const listenServer = (port) => app.listen(port)

export const setMiddleware = (middleware) => {
  app.use(middleware)
}
