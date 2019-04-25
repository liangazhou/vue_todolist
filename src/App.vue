<template>
    <div class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" @keyup.enter="addTodo" v-model="newTodo">
        </header>
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li class="todo" v-for="(item, index) in todos" :key="index" :class="{completed: item.completed, editing: editTodo == index}"><!--TODO-->
                    <div class="view">
                        <input class="toggle" type="checkbox" v-model="item.completed">
                        <label @dblclick="editingLabel({'index': index}, $event)">{{ item.title }}</label>
                        <button class="destroy" @click="deleteTodo({'index': index}, $event)"></button>
                    </div>
                    <input v-todo-focus class="edit" type="text" v-model="item.title" @blur.prevent="finishEditLabel" @keyup.enter="finishEditLabel" @keyup.esc="cancelEditLabel({'index': index}, $event)">
                </li>
            </ul>
        </section>
        <footer class="footer">
            <span class="todo-count">
                <strong>{{allTodo}}</strong> todo
            </span>
            <ul class="filters">
                <li><a href="#/all" class="selected">All</a></li>
                <li><a href="#/active">Active</a></li>
                <li><a href="#/completed">Completed</a></li>
            </ul>
            <button class="clear-completed" @click="deleteAllCompleted">Clear completed</button>
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
                newTodo:"",
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
            'cancelEditLabel': function(data, event) {
                this.todos[data.index].title = this.beforeEditCache
                this.finishEditLabel(event)
            },
            'addTodo': function(event) {
                if( this.newTodo.trim().length !== 0)
                {
                    this.todos.push({
                            id: this.todos.length + 1,
                            title: this.newTodo,
                            completed: false,
                            editing: false,
                        }
                    )
                    this.newTodo = ""
                }else{
                    alert('You mush enter a task title')
                }
            },
            'deleteTodo': function(data, event){
                this.todos.splice(data.index, 1)

            },
            'deleteAllCompleted': function(event){
                this.todos.forEach(item => {
                    if ( item.completed == true ){
                        this.todos.splice(this.todos.findIndex(item => item.id === item.id), 1)
                    }
                })
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
            },
            allTodo: {
                get: function () {
                    let todoCount = 0
                    this.todos.forEach(item => {
                        if ( item.completed == false ){
                            todoCount++
                        }
                    })
                    return todoCount
                },
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
