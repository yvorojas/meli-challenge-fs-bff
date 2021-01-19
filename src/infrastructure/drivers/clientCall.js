import axios from 'axios'

let clientCallInstance

const initialize = (url) => {
  const axiosInstance = axios.create({
    baseURL: url,
    timeout: 5000,
  })

  axiosInstance.interceptors.response.use(
    ({ data, status }) => ({
      ...data,
      status,
    }),
    (error) => Promise.reject({ ...error })
  )

  clientCallInstance = axiosInstance
}

const getInstance = () => clientCallInstance

const getWithQueryParam = (uri, params) =>
  clientCallInstance.get(uri, { params })

const get = (uri) => clientCallInstance.get(uri)

export { initialize, getInstance, getWithQueryParam, get }
