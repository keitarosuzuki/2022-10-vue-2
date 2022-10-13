import { createRouter, createWebHistory } from 'vue-router'
import TableView from '../views/TableView.vue'

const routes = [
  {
    path: '/',
    name: 'table',
    component: TableView
  },
  {
    path: '/add',
    name: 'add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
