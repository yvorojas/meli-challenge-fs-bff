import { getWithQueryParam, get } from '../interfaces/client'
import {
  SEARCH_BY_QUERY_URI,
  DEFAULT_PAGE_LIMIT,
  SEARCH_BY_ID_URI,
  SEARCH_DESCRIPTION_BY_ID_URI,
  SEARCH_CATEGORY_BY_ID_URI,
} from './constants'

const searchItemsByQuery = async (query) => {
  const queryParams = { q: query, limit: DEFAULT_PAGE_LIMIT }
  return await getWithQueryParam(SEARCH_BY_QUERY_URI, queryParams)
}

const getDescription = ({ value, status }) => {
  return status === 'rejected' ? null : value
}

const searchItemById = async (id) => {
  const searchByIdFormattedURI = SEARCH_BY_ID_URI.replace('{0}', id)
  const searchDescriptionByIdFormattedURI = SEARCH_DESCRIPTION_BY_ID_URI.replace(
    '{0}',
    id
  )
  try {
    const queryResult = await Promise.allSettled([
      get(searchByIdFormattedURI),
      get(searchDescriptionByIdFormattedURI),
    ])
    if (queryResult[0].status === 'rejected') {
      throw 'not_found'
    }
    return {
      item: queryResult[0].value,
      description: getDescription(queryResult[1]),
    }
  } catch {
    return null
  }
}

const searchCategoryById = async (id) => {
  const searchCategoryByIdFormattedURI = SEARCH_CATEGORY_BY_ID_URI.replace(
    '{0}',
    id
  )
  return await get(searchCategoryByIdFormattedURI)
}

export { searchItemsByQuery, searchItemById, searchCategoryById }
