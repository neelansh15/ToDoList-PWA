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

        <v-btn icon>
            <v-icon>mdi-plus</v-icon>
        </v-btn>

      </v-app-bar>

      <v-content>
          <v-container>
              <h1>To Do List</h1>

            
            <v-list>
                <v-list-item-group>
                    <ToDo v-for="todo in todos" :key="todo.id" :title="todo.title" :completed="todo.completed" />
                </v-list-item-group>
            </v-list>
            
          </v-container>
      </v-content>
  </v-app>
</template>

<script>
import ToDo from './ToDo'

export default {
    components:{
        ToDo
    },
    computed: {
        todos(){
            return this.$store.state.todos
        }
    }
}
</script>

<style>

</style>