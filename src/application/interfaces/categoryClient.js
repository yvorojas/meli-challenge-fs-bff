import { searchCategoryById } from '../../gateways/clients/searchApi'

const searchById = (query) => Promise.resolve(searchCategoryById(query))

export { searchById }
