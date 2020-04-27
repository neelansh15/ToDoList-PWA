<template>
  <v-list-item @click="changeState">
    <v-list-item-icon>
        <v-icon v-if="completed">mdi-checkbox-marked</v-icon>
        <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
    </v-list-item-icon>
      
    <v-list-item-content>
        <v-list-item-title>
            {{ title }}
        </v-list-item-title>
        <v-spacer></v-spacer>
    </v-list-item-content>

    <v-list-item-action @click="remove">
        <v-btn icon>
            <v-icon color="grey lighten-1">mdi-close</v-icon>
        </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
    props:{
        id: Number,
        title: String,
        completed: Boolean,
    },
    methods:{
        changeState(){
            this.$store.dispatch('changeState', this.id)
        },
        remove(){
            this.$store.dispatch('remove', this.id)
        }
    }
}
</script>

<style>

</style>