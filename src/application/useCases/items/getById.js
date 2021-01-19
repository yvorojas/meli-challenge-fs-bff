import { searchById } from '../../interfaces/itemClient'
import { searchById as searchCategoryById } from '../../interfaces/categoryClient'
import { mapToItemByIdResponse } from '../../mappers/items'

const execute = async (id) => {
  const searchResponse = await searchById(id)
  if (!searchResponse) {
    return null
  }
  const { path_from_root: categories } = await searchCategoryById(
    searchResponse.item.category_id
  )
  return mapToItemByIdResponse(searchResponse, categories)
}

export default execute
