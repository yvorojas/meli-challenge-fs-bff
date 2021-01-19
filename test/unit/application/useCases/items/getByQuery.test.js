import getByQuery from '../../../../../src/application/useCases/items/getByQuery'
import {
  searchItemsByQuery,
  searchCategoryById,
} from '../../../../../src/gateways/clients/searchApi'
import itemsByQueryServiceResponse from '../../../../samples/itemsByQueryServiceResponse'
import itemsByQueryUseCaseResponse from '../../../../samples/itemByQueryUseCaseResponse'
import itemsByQueryServiceResponseWithAvailableFilter from '../../../../samples/itemsByQueryServiceResponseWithAvailableFilter'
import categoryByIdServiceResponse from '../../../../samples/categoryByIdServiceResponse'
import itemsByQueryUseCaseResponseWithAvailableFilter from '../../../../samples/itemsByQueryUseCaseResponseWithAvailableFilter'

jest.mock('../../../../../src/gateways/clients/searchApi')

describe('get by query use case test', () => {
  beforeEach(() => {
    searchItemsByQuery.mockClear()
    searchCategoryById.mockClear()
  })

  it('returns mapped response given a query', async () => {
    searchItemsByQuery.mockResolvedValue(itemsByQueryServiceResponse)

    const useCaseResponse = await getByQuery('query')

    expect(useCaseResponse).toStrictEqual(itemsByQueryUseCaseResponse)
    expect(searchItemsByQuery).toHaveBeenCalledTimes(1)
    expect(searchItemsByQuery).toHaveBeenCalledWith('query')
  })

  it('returns null when service response has no results', async () => {
    searchItemsByQuery.mockResolvedValue({
      ...itemsByQueryServiceResponse,
      results: [],
    })

    const useCaseResponse = await getByQuery('query')

    expect(useCaseResponse).toBeNull()
  })

  it('returns mapped response given a query and a service response with category available filters', async () => {
    searchItemsByQuery.mockResolvedValue(
      itemsByQueryServiceResponseWithAvailableFilter
    )
    searchCategoryById.mockResolvedValue(categoryByIdServiceResponse)

    const useCaseResponse = await getByQuery('query')

    expect(useCaseResponse).toStrictEqual(
      itemsByQueryUseCaseResponseWithAvailableFilter
    )
    expect(searchItemsByQuery).toHaveBeenCalledTimes(1)
    expect(searchItemsByQuery).toHaveBeenCalledWith('query')
    expect(searchCategoryById).toHaveBeenCalledTimes(1)
    expect(searchCategoryById).toHaveBeenCalledWith('MLA79224')
  })
})
