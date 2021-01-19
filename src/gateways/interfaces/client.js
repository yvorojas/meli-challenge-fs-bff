import {
  getWithQueryParam as getWithQueryParamFromClient,
  get as getFromClient,
} from '../../infrastructure/drivers/clientCall'

const getWithQueryParam = (uri, param) =>
  Promise.resolve(getWithQueryParamFromClient(uri, param))

const get = (uri) => Promise.resolve(getFromClient(uri))

export { getWithQueryParam, get }
