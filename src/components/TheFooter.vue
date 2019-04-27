<template>
    <footer class="footer">
            <span class="todo-count">
                <strong>{{allTodo}}</strong> todo
            </span>
        <ul class="filters">
            <li><router-link :to="{name:'Filter', path: '/:id', params: {id: 'all'} }" :class="{selected: filter === 'all'}" @click="changeFilter('all')">All</router-link></li>
            <li><router-link :to="{name:'Filter', path: '/:id', params: {id: 'active'} }" :class="{selected: filter === 'active'}" @click="changeFilter('active')">Active</router-link></li>
            <li><router-link :to="{name:'Filter', path: '/:id', params: {id: 'completed'} }" :class="{selected: filter === 'completed'}" @click="changeFilter('completed')">Completed</router-link></li>
        </ul>
        <button class="clear-completed" @click="deleteAllCompleted">Clear completed</button>
    </footer>
</template>

<script>
    export default {
        name: "TheFooter",
        props: ['todos', 'filter'],
        methods:{
            'deleteAllCompleted': function (event) {
                this.$store.dispatch("setAllCompleted")
            },
            'changeFilter': function (data) {
                this.$emit('update:filter', data);
            },
        },
        computed:{
            allTodo: {
                get: function () {
                    return this.$store.getters.todosCount
                },
            },
        }
    }
</script>

<style scoped>

</style>