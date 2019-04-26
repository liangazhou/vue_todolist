<template>
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li class="todo" v-for="(item, index) in showTodo" :key="index"
                :class="{completed: item.completed, editing: editTodo == index}"><!--TODO-->
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="item.completed">
                    <label @dblclick="editingLabel({'index': index}, $event)">{{ item.title }}</label>
                    <button class="destroy" @click="deleteTodo({'index': index}, $event)"></button>
                </div>
                <input v-todo-focus class="edit" type="text" v-model="item.title" @blur.prevent="finishEditLabel"
                       @keyup.enter="finishEditLabel" @keyup.esc="cancelEditLabel({'index': index}, $event)">
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "TodoList",
        props: ['todos', 'filter'],
        data: function () {
            return {
                beforeEditCache: null,
                editTodo: null,
            }
        },
        methods: {
            'editingLabel': function (data, event) {
                //When click on the label,call the edit label function
                //Save the former text
                this.beforeEditCache = event.target.innerText;
                this.editTodo = data.index
            },
            'finishEditLabel': function (event) {
                this.editTodo = null;
                event.target.parentElement.classList.remove('editing')
            },
            'cancelEditLabel': function (data, event) {
                this.todos[data.index].title = this.beforeEditCache;
                this.finishEditLabel(event)
            },
            'deleteTodo': function (data, event) {
                this.todos.splice(data.index, 1)
            },
        },
        directives: {
            'todo-focus': function (el, binding) {
                if (binding.value) {
                    el.focus();
                }
            },
        },
        computed: {
            allDone: {
                get: function () {
                    return this.todos.every(data => data.completed)
                },
                set: function (newValue) {
                    this.todos.forEach(item => {
                        item.completed = newValue
                    })
                }
            },
            showTodo: {
                get: function () {
                    let filter = this.filter;
                    return this.todos.filter(item => {
                        if (filter === 'completed') {
                            return item.completed === true
                        } else if (filter === 'active') {
                            return item.completed === false
                        } else {
                            return true
                        }
                    })
                }
            },
        },
    }
</script>

<style scoped>

</style>