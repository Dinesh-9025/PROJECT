// eslint-disable-next-line
/* eslint-disable */

import { createStore } from 'vuex'

export default createStore({
  state: {
    layout: 'empty-layout'
  },
  mutations: {
    SET_LAYOUT (state, payload) {
      state.layout = payload
    }
  },
  getters: {
    layout (state) {
      return state.layout
    }
  },
  actions: {
  },
  modules: {
  }
})
