<template>
    <div>
        <the-header v-bind:todos.sync="todos"></the-header>
        <todo-list v-bind:todos.sync="todos" v-bind:filter.sync="filter"></todo-list>
        <the-footer v-bind:todos.sync="todos" v-bind:filter.sync="filter"></the-footer>
    </div>
</template>

<script>
    import TheFooter from "../components/TheFooter";
    import TodoList from "../components/TodoList";
    import TheHeader from "../components/TheHeader";
    export default {
        name: "Todos",
        components: {TheHeader, TodoList, TheFooter},
        data() {
            return {
                // filter: "all",
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
        computed:{
            filter: {
                get: function () {
                    return this.$route.params.id
                }
            }
        }
    }
</script>

<style scoped>
</style>