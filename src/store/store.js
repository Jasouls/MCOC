import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
  state: {
    isTopbarShow: true,
    isBackTopShow: false
  },
  mutations: {
    isTopShow(state, data) {
      state.isTopbarShow = data
    },
    backTopShow(state, data) {
      state.isBackTopShow = data
    }
  }
})
