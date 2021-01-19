import { StatusCodes } from 'http-status-codes'
import { createRouter } from '../interfaces/server'
import itemsUseCases from '../../application/useCases/items'
import { NotFound } from './exceptions/ServerError'
import { InternalServerError } from 'http-errors'

const router = createRouter()

const { getByQuery, getById } = itemsUseCases

const handleErrors = (error, next) => {
  if (error instanceof NotFound) {
    next(error)
  } else {
    next(new InternalServerError())
  }
}

router.get('/', async ({ query: { q: query } }, res, next) => {
  try {
    const searchResponse = await getByQuery(query)
    if (!searchResponse) {
      throw new NotFound('Productos no encontrados')
    }
    res.status = StatusCodes.OK
    return res.jsonp(searchResponse)
  } catch (error) {
    console.log(error)
    handleErrors(error, next)
  }
})

router.get('/:id', async ({ params: { id } }, res, next) => {
  try {
    const searchResponse = await getById(id)
    if (!searchResponse) {
      throw new NotFound('Producto no encontrado')
    }
    res.status = StatusCodes.OK
    return res.jsonp(searchResponse)
  } catch (error) {
    handleErrors(error, next)
  }
})

export default router
