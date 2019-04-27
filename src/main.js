import Vue from 'vue'
import App from './App.vue'
import "./assets/index.css"
import "./assets/base.css"
import VueRouter from 'vue-router'
import Todos from './pages/Todos'


Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Root',
    component: Todos,
  },{
    path: '/:id',
    name: 'Filter',
    component: Todos,
  }]
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

export default router


