<template>
    <header class="header">
        <h1>todo</h1>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
               @keyup.enter="addTodo" v-model="newTodo">
    </header>
</template>

<script>
    export default {
        name: "TheHeader.vue",
        props: ['todos'],
        data: function (){
            return{
                newTodo: "",
            }
        },
        methods:{
            'addTodo': function (event) {
                if (this.newTodo.trim().length !== 0) {
                    this.todos.push({
                            id: this.todos[this.todos.length-1].id + 1,//the last add 1
                            title: this.newTodo,
                            completed: false,
                            editing: false,
                        }
                    );
                    this.newTodo = ""
                } else {
                    alert('You mush enter a task title')
                }
            },
        },
    }
</script>

<style scoped>

</style>