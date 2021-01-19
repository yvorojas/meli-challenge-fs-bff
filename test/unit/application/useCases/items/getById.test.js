import getById from '../../../../../src/application/useCases/items/getById'
import {
  searchItemById,
  searchCategoryById,
} from '../../../../../src/gateways/clients/searchApi'
import categoryByIdServiceResponse from '../../../../samples/categoryByIdServiceResponse'
import itemByIdGatewayResponse from '../../../../samples/itemByIdGatewayResponse'
import itemByIdUseCaseResponse from '../../../../samples/itemByIdUseCaseResponse'

jest.mock('../../../../../src/gateways/clients/searchApi')

describe('get by id use case test', () => {
  beforeEach(() => {
    searchItemById.mockClear()
    searchCategoryById.mockClear()
  })

  it('returns mapped response given a id', async () => {
    searchItemById.mockResolvedValue(itemByIdGatewayResponse)
    searchCategoryById.mockResolvedValue(categoryByIdServiceResponse)

    const useCaseResponse = await getById('id')

    expect(useCaseResponse).toStrictEqual(itemByIdUseCaseResponse)
    expect(searchItemById).toHaveBeenCalledTimes(1)
    expect(searchItemById).toHaveBeenCalledWith('id')
    expect(searchCategoryById).toHaveBeenCalledTimes(1)
    expect(searchCategoryById).toHaveBeenCalledWith('MLA120350')
  })

  it('returns null when gateway responses with null', async () => {
    searchItemById.mockResolvedValue(null)

    const useCaseResponse = await getById('id')

    expect(useCaseResponse).toBeNull()
  })
})
