import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[
      {
        id: 1,
        title: 'Learn Vuetify',
        completed: true
      },
      {
        id: 2,
        title: 'Learn Vuex',
        completed: false
      },
      {
        id: 3,
        title: 'Sail the Ocean',
        completed: false
      }
    ]
  },
  getters:{
    todos(state){
      return state.todos
    }
  },
  mutations: {
    changeState(state, id){
      let currentToDo = state.todos.filter(item => item.id == id)
      let obliviousToDos = state.todos.filter(item => item.id != id)
      currentToDo[0].completed = !currentToDo[0].completed
      obliviousToDos.push(currentToDo[0])
      state.todos = obliviousToDos
    }
  },
  actions: {
    changeState(context, id){
      context.commit('changeState', id)
    }
  },
  modules: {
  }
})
