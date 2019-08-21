import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: null,
    articleid: null
  },
  mutations: {
    setKeyword (state, keyword) {
      state.keyword = keyword
    },
    setArticleid (state, id) {
      state.articleid = id
    }
  }
})
