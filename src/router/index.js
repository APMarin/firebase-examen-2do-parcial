import { createRouter, createWebHashHistory } from 'vue-router'
import TodoList from '@/components/TodoList'
import TodoCreate from '@/components/TodoCreate'
import TodoEdit from '@/components/TodoEdit'
import TodoShow from '@/components/TodoShow'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/create',
    name: 'TodoCreate',
    component: TodoCreate
  },
  {
    path: '/edit:id',
    name: 'TodoEdit',
    component: TodoEdit
  },
  {
    path: '/show:id',
    name: 'TodoShow',
    component: TodoShow
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
