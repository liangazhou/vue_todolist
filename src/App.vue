<template>
    <div class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?">
        </header>
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li class="todo" v-for="(item, index) in todos" :key="index" :class="{completed: item.completed, editing: editTodo == index}"><!--TODO-->
                    <div class="view">
                        <input class="toggle" type="checkbox" v-model="item.completed">
                        <label @dblclick="editingLabel({'index': index}, $event)">{{ item.title }}</label>
                        <button class="destroy"></button>
                    </div>
                    <input v-todo-focus class="edit" type="text" v-model="item.title" @blur.prevent="finishEditLabel" @keyup.enter="finishEditLabel" @keyup.esc="cancelEditLabel">
                </li>
            </ul>
        </section>
        <footer class="footer">
            <span class="todo-count">
                <strong>3</strong> todo
            </span>
            <ul class="filters">
                <li><a href="#/all" class="selected">All</a></li>
                <li><a href="#/active">Active</a></li>
                <li><a href="#/completed">Completed</a></li>
            </ul>
            <button class="clear-completed">Clear completed</button>
        </footer>
<!--        <footer class="info">-->
<!--            <p>Double-click to edit a todo</p>-->
<!--            <p>Written by <a href="http://evanyou.me">Evan You</a></p>-->
<!--            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>-->
<!--        </footer>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                beforeEditCache:null,
                editTodo:null,
                todos: [{
                    // id: 0,
                    title: '代办 一',
                    completed: true,
                    editing: false,
                }, {
                    // id: 1,
                    title: '代办 二',
                    completed: false,
                    editing: true,
                }, {
                    // id: 2,
                    title: '代办 三',
                    completed: false,
                    editing: false,
                }]
            }
        },
        methods:{
            'editingLabel': function (data, event) {
                //When click on the label,call the edit label function
                //Save the former text
                this.beforeEditCache = event.target.innerText
                this.editTodo = data.index
                //Focus the input
            },
            'finishEditLabel': function(event) {
                this.editTodo = null
                event.target.parentElement.classList.remove('editing')
            },
            'cancelEditLabel': function(event) {
                //FIXME: if cancel then press enter, the value will remain the former
                event.target.value = this.beforeEditCache
            }
        },
        directives: {
            'todo-focus': function(el, binding) {
                if(binding.value){
                    el.focus();
                }
            },
        },
        computed: {
            allDone: {
                get: function () {
                    return this.todos.every(data => data.completed)
                },
                set: function(newValue) {
                    this.todos.forEach(item => {
                        item.completed = newValue
                    })
                }
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
