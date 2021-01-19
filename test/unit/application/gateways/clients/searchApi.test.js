import {
  searchItemsByQuery,
  searchItemById,
  searchCategoryById,
} from '../../../../../src/gateways/clients/searchApi'
import {
  getWithQueryParam,
  get,
} from '../../../../../src/infrastructure/drivers/clientCall'
import itemsByQueryServiceResponse from '../../../../samples/itemsByQueryServiceResponse'
import itemByIdServiceResponse from '../../../../samples/itemByIdServiceResponse'
import itemByIdDescriptionServiceResponse from '../../../../samples/itemByIdDescriptionServiceResponse'
import itemByIdGatewayResponse from '../../../../samples/itemByIdGatewayResponse'
import categoryByIdServiceResponse from '../../../../samples/categoryByIdServiceResponse'

jest.mock('../../../../../src/infrastructure/drivers/clientCall')

describe('search api gateway tests', () => {
  beforeEach(() => {
    getWithQueryParam.mockClear()
    get.mockClear()
  })
  it('returns search by query gateway response', async () => {
    getWithQueryParam.mockResolvedValue(itemsByQueryServiceResponse)

    const gatewayResponse = await searchItemsByQuery('query')

    expect(gatewayResponse).toStrictEqual(itemsByQueryServiceResponse)
    expect(getWithQueryParam).toHaveBeenCalledTimes(1)
    expect(getWithQueryParam).toHaveBeenCalledWith('/sites/MLA/search', {
      limit: 4,
      q: 'query',
    })
  })

  it('returns search by id gateway response', async () => {
    get.mockResolvedValueOnce(itemByIdServiceResponse)
    get.mockResolvedValueOnce(itemByIdDescriptionServiceResponse)

    const gatewayResponse = await searchItemById('id')

    expect(gatewayResponse).toStrictEqual(itemByIdGatewayResponse)
    expect(get).toHaveBeenCalledTimes(2)
    expect(get).toHaveBeenCalledWith('/items/id')
    expect(get).toHaveBeenCalledWith('/items/id/description')
  })

  it('returns search by id gateway response with null description when description service is rejected', async () => {
    get.mockResolvedValueOnce(itemByIdServiceResponse)
    get.mockRejectedValueOnce()

    const gatewayResponse = await searchItemById('id')

    expect(gatewayResponse).toStrictEqual({
      ...itemByIdGatewayResponse,
      description: null,
    })
  })

  it('returns null when item by id service response with rejected value', async () => {
    get.mockRejectedValueOnce()
    get.mockResolvedValueOnce(itemByIdDescriptionServiceResponse)

    const gatewayResponse = await searchItemById('id')

    expect(gatewayResponse).toStrictEqual(null)
  })

  it('returns category by id', async () => {
    get.mockResolvedValue(categoryByIdServiceResponse)

    const gatewayResponse = await searchCategoryById('id')

    expect(gatewayResponse).toStrictEqual(categoryByIdServiceResponse)
    expect(get).toHaveBeenCalledTimes(1)
    expect(get).toHaveBeenCalledWith('/categories/id')
  })
})
