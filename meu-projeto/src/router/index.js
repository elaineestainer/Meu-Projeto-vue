import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue'
import Pokemon from '../views/Pokemon'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PaginaInicial',
    component: PaginaInicial
  },
  {
    path: '/Pokemon',
    name: 'Pokemon',
    component: Pokemon
  }
  
]

const router = new VueRouter({
  routes
})

export default router
