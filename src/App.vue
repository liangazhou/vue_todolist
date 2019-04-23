<template>
  <div id="app">
      <ul class="todo-list">
        <li class="todo" v-for="item in todos" :key="item" :class="{completed: item.completed, editing: item.editing}"><!--TODO-->
          <div class="view">
            <input class="toggle" type="checkbox">
            <label>{{ item.title }}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" type="text">
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      todos: [{
        title: '代办 一',
        completed: true,
        editing: false,
      }, {
        title: '代办 二',
        completed: false,
        editing: true,
      }, {
        title: '代办 三',
        completed: false,
        editing: false,
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
