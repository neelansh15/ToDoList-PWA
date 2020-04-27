import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[
      {
        id: 1,
        'title': 'Learn Vuetify',
        completed: true
      },
      {
        id: 2,
        'title': 'Learn Vuex',
        completed: false
      },
      {
        id: 3,
        'title': 'Sail the Ocean',
        completed: false
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
