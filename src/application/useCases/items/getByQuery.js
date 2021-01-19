import {
  searchItemsByQuery,
  searchCategoryById,
} from '../../../gateways/clients/searchApi.js'
import { mapToQueryResponse } from '../../mappers/items'

const CATEGORY_ID = 'category'

const getCategoryFromFilters = (filters) =>
  filters.find((filter) => filter.id === CATEGORY_ID)

const getMostSearchedCategory = ({ values: categories }) =>
  categories.sort((category) => category.results).reverse()[0]

const getCategoryPathFromRoot = async ({
  filters,
  available_filters: availableFilters,
}) => {
  const categoryAvailableFilters = getCategoryFromFilters(availableFilters)
  if (!categoryAvailableFilters) {
    return await getCategoryFromFilters(filters).values[0].path_from_root
  }
  const { id } = getMostSearchedCategory(categoryAvailableFilters)
  const { path_from_root } = await searchCategoryById(id)
  return path_from_root
}

const execute = async (query) => {
  const searchResponse = await searchItemsByQuery(query)
  if (searchResponse.results.length === 0) {
    return null
  }
  const categories = await getCategoryPathFromRoot(searchResponse)
  return mapToQueryResponse(searchResponse, categories)
}

export default execute
