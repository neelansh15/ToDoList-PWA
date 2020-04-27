<template>
  <div>
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList';

export default {
  name: 'App',

  components: {
    ToDoList,
  },

  data: () => ({
    //
  }),
};
</script>
