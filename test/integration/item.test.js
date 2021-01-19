import request from 'supertest'
import main from '../../src'
import {
  getWithQueryParam,
  get,
} from '../../src/infrastructure/drivers/clientCall'
import itemsByQueryServiceResponseWithAvailableFilter from '../samples/itemsByQueryServiceResponseWithAvailableFilter'
import categoryByIdServiceResponse from '../samples/categoryByIdServiceResponse'
import itemByIdServiceResponse from '../samples/itemByIdServiceResponse'
import itemByIdDescriptionServiceResponse from '../samples/itemByIdDescriptionServiceResponse'

jest.mock('../../src/infrastructure/drivers/clientCall')

afterAll(() => {
  main.close()
})

describe('item integration test', () => {
  beforeEach(() => {
    getWithQueryParam.mockClear()
    get.mockClear()
  })

  it('respond OK status when calls to get items by query endpoint', async (done) => {
    getWithQueryParam.mockResolvedValue({
      ...itemsByQueryServiceResponseWithAvailableFilter,
      status: 200,
    })
    get.mockResolvedValue({
      ...categoryByIdServiceResponse,
      status: 200,
    })
    await request(main)
      .get('/api/items?q=query')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
    done()
  })

  it('respond OK status when calls to get items by id endpoint', async (done) => {
    get.mockResolvedValueOnce({
      ...itemByIdServiceResponse,
      status: 200,
    })
    get.mockResolvedValueOnce({
      ...itemByIdDescriptionServiceResponse,
      status: 200,
    })
    get.mockResolvedValueOnce({
      ...categoryByIdServiceResponse,
      status: 200,
    })
    await request(main)
      .get('/api/items/id')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
    done()
  })
})
