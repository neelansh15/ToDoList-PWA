<template>
  <v-list-item>
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
  </v-list-item>
</template>

<script>
export default {
    props:{
        title: String,
        completed: Boolean
    }
}
</script>

<style>

</style>