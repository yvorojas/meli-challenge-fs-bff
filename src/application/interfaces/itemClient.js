import {
  searchItemsByQuery,
  searchItemById,
} from '../../gateways/clients/searchApi'

const searchByQuery = (query) => Promise.resolve(searchItemsByQuery(query))

const searchById = (id) => Promise.resolve(searchItemById(id))

export { searchByQuery, searchById }
