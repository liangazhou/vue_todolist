<template>
    <footer class="footer">
            <span class="todo-count">
                <strong>{{allTodo}}</strong> todo
            </span>
        <ul class="filters">
            <li><a href="#/all" :class="{selected: filter === 'all'}" @click="changeFilter('all')">All</a></li>
            <li><a href="#/active" :class="{selected: filter === 'active'}"
                   @click="changeFilter('active')">Active</a></li>
            <li><a href="#/completed" :class="{selected: filter === 'completed'}"
                   @click="changeFilter('completed')">Completed</a></li>
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
                this.todos.forEach(item => {
                    if (item.completed === true) {
                        this.todos.splice(this.todos.indexOf(item), 1)
                    }
                })
            },
            'changeFilter': function (data) {
                this.$emit('changeFilter',data);
            },
        },
        computed:{
            allTodo: {
                get: function () {
                    let todoCount = 0;
                    this.todos.forEach(item => {
                        if (item.completed === false) {
                            todoCount++
                        }
                    });
                    return todoCount
                },
            },
        }
    }
</script>

<style scoped>

</style>