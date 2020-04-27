<template>
  <v-app>
      <v-app-bar 
        color="primary"
        dark
        app
        >

        <v-toolbar-title>
            To Do List
        </v-toolbar-title>

        <v-spacer></v-spacer>

        Neelansh Mathur

      </v-app-bar>

      <v-content>
          <v-container class="mt-5">
              <h1>To Do List</h1>

            <v-form @submit.prevent="addItem">
                <v-col cols="6">
                    <v-text-field label="New Item" v-model="newitem" single-line></v-text-field>
                </v-col>

                <v-col cols="6">
                    <v-btn
                    color="primary"
                    small
                    outlined
                    type="submit"
                >Add</v-btn>
                </v-col>
            </v-form>

            <v-list>
                <v-list-item-group>
                    <ToDo v-for="todo in todos" :key="todo.id" :id="todo.id" :title="todo.title" :completed="todo.completed" />
                </v-list-item-group>
            </v-list>
            
          </v-container>
      </v-content>
  </v-app>
</template>

<script>
import ToDo from './ToDo'

export default {
    data(){
        return{
            newitem: ''
        }
    },
    components:{
        ToDo
    },
    computed: {
        todos(){
            return this.$store.getters.todos
        }
    },
    methods:{
        addItem(){
            if(this.newitem != '' && this.newitem != null){
                this.$store.dispatch('addItem', {
                    id: 0,
                    title: this.newitem,
                    completed: false
                })
                this.newitem = ''
            }
        }
    },
    mounted(){
        this.$store.dispatch('init')
    }
}
</script>

<style>

</style>