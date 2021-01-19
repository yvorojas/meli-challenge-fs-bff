import {
  mapToItemByIdResponse,
  mapToQueryResponse,
} from '../../../../src/application/mappers/items'
import itemByIdGatewayResponse from '../../../samples/itemByIdGatewayResponse'
import itemByIdMappedResponse from '../../../samples/itemByIdMappedResponse'
import itemsByQueryServiceResponse from '../../../samples/itemsByQueryServiceResponse'
import itemsByQueryMappedResponse from '../../../samples/itemsByQueryMappedResponse'

describe('items mapper test', () => {
  const categories = [
    { id: 'category_1', name: 'ropas y prendas' },
    { id: 'category_2', name: 'mochilas' },
  ]
  describe('item by id', () => {
    it('maps service response to item by id response format', () => {
      const mappedResult = mapToItemByIdResponse(
        itemByIdGatewayResponse,
        categories
      )

      expect(mappedResult).toStrictEqual(itemByIdMappedResponse)
    })

    it('maps service response to item by id response format with null description', () => {
      const mappedResult = mapToItemByIdResponse(
        { ...itemByIdGatewayResponse, description: null },
        categories
      )

      expect(mappedResult).toStrictEqual({
        ...itemByIdMappedResponse,
        item: { ...itemByIdMappedResponse.item, description: null },
      })
    })

    it('maps service response to item by id response format with null picture', () => {
      const mappedResult = mapToItemByIdResponse(
        {
          ...itemByIdGatewayResponse,
          item: { ...itemByIdGatewayResponse.item, pictures: [] },
        },
        categories
      )

      expect(mappedResult).toStrictEqual({
        ...itemByIdMappedResponse,
        item: { ...itemByIdMappedResponse.item, picture: null },
      })
    })

    it('maps service response to item by id response format with null address', () => {
      const mappedResult = mapToItemByIdResponse(
        {
          ...itemByIdGatewayResponse,
          item: { ...itemByIdGatewayResponse.item, address: null },
        },
        categories
      )

      expect(mappedResult).toStrictEqual({
        ...itemByIdMappedResponse,
        item: { ...itemByIdMappedResponse.item, address: null },
      })
    })

    it('maps service response to item by id response format with decimal value', () => {
      const mappedResult = mapToItemByIdResponse(
        {
          ...itemByIdGatewayResponse,
          item: { ...itemByIdGatewayResponse.item, price: 1300.68 },
        },
        categories
      )

      expect(mappedResult).toStrictEqual({
        ...itemByIdMappedResponse,
        item: {
          ...itemByIdMappedResponse.item,
          price: {
            ...itemByIdMappedResponse.item.price,
            decimals: 68,
          },
        },
      })
    })
  })

  describe('items by query', () => {
    it('maps service response to items by query response format', () => {
      const mappedResult = mapToQueryResponse(
        itemsByQueryServiceResponse,
        categories
      )

      expect(mappedResult).toStrictEqual(itemsByQueryMappedResponse)
    })
  })
})
