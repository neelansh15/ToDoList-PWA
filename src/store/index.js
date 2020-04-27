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
    ],
    latestID: 3
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

      //Need to sort by id, but descending so that new items are at the top
      obliviousToDos.sort(function(obj1, obj2){
        return obj2.id - obj1.id
      })
      
      state.todos = obliviousToDos
    },
    addItem(state, payload){
      // payload.id = state.todos[state.todos.length - 1].id + 1
      payload.id = state.latestID + 1
      state.latestID++

      state.todos.push(payload)
      //Need to sort by id, but descending so that new items are at the top
      state.todos.sort(function(obj1, obj2){
        return obj2.id - obj1.id
      })
    },
    remove(state, id){
      state.todos = state.todos.filter(item => item.id != id)
    },
    init(state){
      //Need to sort by id, but descending so that new items are at the top
      state.todos.sort(function(obj1, obj2){
        return obj2.id - obj1.id
      })
    }
  },
  actions: {
    init(context){
      context.commit('init')
    },
    changeState(context, id){
      context.commit('changeState', id)
    },
    addItem(context, payload){
      context.commit('addItem', payload)
    },
    remove(context, id){
      context.commit('remove', id)
    }
  },
  modules: {
  }
})
