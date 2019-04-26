<template>
    <div class="todoapp">
        <the-header v-bind:todos.sync="todos"></the-header>
        <todo-list v-bind:todos.sync="todos" v-bind:filter.sync="filter"></todo-list>
        <the-footer v-bind:todos.sync="todos" v-bind:filter.sync="filter" v-on:changeFilter="changeFilter"></the-footer>
    </div>
</template>

<script>
    import TheFooter from "./components/TheFooter";
    import TodoList from "./components/TodoList";
    import TheHeader from "./components/TheHeader";

    export default {
        components: {TheHeader, TodoList, TheFooter},
        data() {
            return {
                filter: "all",
                todos: [{
                    id: 0,
                    title: '代办 一',
                    completed: true,
                    editing: false,
                }, {
                    id: 1,
                    title: '代办 二',
                    completed: false,
                    editing: true,
                }, {
                    id: 2,
                    title: '代办 三',
                    completed: false,
                    editing: false,
                }]
            }
        },
        methods: {
            changeFilter: function(val){
                this.filter = val
            }
        }
    }
</script>

<style>
    /*#app {*/
    /*    font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*    -webkit-font-smoothing: antialiased;*/
    /*    -moz-osx-font-smoothing: grayscale;*/
    /*    text-align: center;*/
    /*    color: #2c3e50;*/
    /*    margin-top: 60px;*/
    /*}*/
</style>
