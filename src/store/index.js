import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
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
        }],
        filter: 'all',
    },
    getters: {
        todosCount: (state) => {
            let todoCount = 0;
            state.todos.forEach(item => {
                if (item.completed === false) {
                    todoCount++
                }
            });
            return todoCount
        },
    },
    mutations: {
        changeFilter (state, filter) {
            state.filter = filter
        },
        addTodo (state, todo) {
            state.todos.push(todo)
        },
        removeCompleted (state) {
            state.todos = state.todos.filter(data => !data.completed)
        },
        setAllCompleted (state) {
            state.todos.forEach(item => {
                if (item.completed === true) {
                    state.todos.splice(state.todos.indexOf(item), 1)
                }
            })
        }
    },
    actions: {
        setAllCompleted (context) {
            context.commit('setAllCompleted')
        }
    }
});

export default store