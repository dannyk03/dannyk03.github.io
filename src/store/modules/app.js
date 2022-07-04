/** THIS IS COMMON CODE. PLEASE DO NOT CHANGE WITHOUT DISCUSSION WITH THE TEAM **/
// eslint-disable-next-line
import { api } from '@/api'

// initial state
const state = {
  loading: false,
  appData: {},
}

// getters
const getters = {
  loading: state => state.loading,
  appData: state => state.appData,
}

// actions
const actions = {
  async initApp ({ commit, dispatch }, state) {
    dispatch('app/initData', null, { root: true })
  },

  async initData ({ commit, dispatch }, state) {
    commit('setLoading', true)
    commit('setLoading', false)
  }
}

// mutations
const mutations = {
  setLoading (state, loading) {
    state.loading = loading
  },
  setAppData (state, data) {
    state.appData = data
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
