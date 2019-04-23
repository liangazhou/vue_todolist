<template>
    <div class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?">
        </header>
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li class="todo" v-for="item in todos" :key="item.index" :class="{completed: item.completed}"><!--TODO-->
                    <div class="view">
                        <input class="toggle" type="checkbox">
                        <label>{{ item.title }}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" type="text">
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
    /*#app {*/
    /*    font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*    -webkit-font-smoothing: antialiased;*/
    /*    -moz-osx-font-smoothing: grayscale;*/
    /*    text-align: center;*/
    /*    color: #2c3e50;*/
    /*    margin-top: 60px;*/
    /*}*/
</style>
