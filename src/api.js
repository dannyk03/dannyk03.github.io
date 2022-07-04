/** THIS IS COMMON CODE. PLEASE DO NOT CHANGE WITHOUT DISCUSSION WITH THE TEAM **/
import axios from 'axios'
import store from '@/store'
import router from '@/router'

import {
  API_BASE_URL,
} from '@/constants'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 0,
  params: {}, // do not remove this, its added to add params later in the config
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (conf, request) => {
    // const token = store.getters['auth/accessToken']

    // if (token) {
    //   conf.headers.common.authorization = `Bearer ${token}`
    // }
    return conf
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(null, function (error) {
  const originalRequest = error.config
  if (error.response && error.response.status === 401 ) {
    store.dispatch('auth/logout')
    router.push({ name: 'Login' })
  }
  return Promise.reject(error)
})

export const api = {
  axiosInstance,

  /**
   * get - get request to the api
   *
   * @param {string} resource
   * @param {any} params
   * @returns {Promise<AxiosResponse>}
   * @memberof api
   */
  async get (resource, params, options = {}) {
    return axiosInstance.get(resource, params)
  },

  /**
   * post - post request to the api
   *
   * @param {string} resource
   * @param {any} body
   * @returns {Promise<AxiosResponse>}
   * @memberof api
   */
  async post (resource, body) {
    return axiosInstance.post(resource, body)
  },

  /**
   * patch - patch request to the api
   *
   * @param {string} resource
   * @param {any} body
   * @returns {Promise<AxiosResponse>}
   * @memberof api
   */
  async patch (resource, body) {
    return axiosInstance.patch(resource, body)
  },

  /**
   * put - put request to the api
   *
   * @param {string} resource
   * @param {any} body
   * @returns {Promise<AxiosResponse>}
   * @memberof api
   */
  async put (resource, body) {
    options = Object.assign({}, defaultOption, options)
    return axiosInstance.put(resource, body)
  },

  /**
   * delete - delete request to the api
   *
   * @param {string} resource
   * @returns {Promise<AxiosResponse>}
   * @memberof api
   */
  async delete (resource) {
    return axiosInstance.delete(resource)
  },

  /**
   * upload - post multipart from
   *
   * @param {string} resource
   * @param {any} body
   * @returns {Promise<AxiosResponse>}
   * @memberof api
   */
  async upload (resource, body, progressCallback) {
    return axiosInstance.post(resource, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const uploadPercentage = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100), 10)

        progressCallback && progressCallback(uploadPercentage)
      },
    })
  },
}
