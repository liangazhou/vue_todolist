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
                todos: this.$store.state.todos,
            }
        },
        computed:{
            filter: {
                get: function () {
                    return this.$route.params.id
                },
                set: function (data) {
                    this.$store.state.filter = data
                },
            }
        }
    }
</script>

<style scoped>
</style>