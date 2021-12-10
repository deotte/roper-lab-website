import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Brain from '../views/projects/Brain.vue'
import Eyes from '../views/projects/Eyes.vue'
import Worms from '../views/projects/Worms.vue'
import Bones from '../views/projects/Bones.vue'
import Research from '../views/Research.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/publications',
    name: 'Publications',
    component: () => import('../views/Publications.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/research',
    name: 'Research',
    component: Research,
    children: [
      { path: '', component: Brain },
      { path: 'bones', component: Bones },
      { path: 'eyes', component: Eyes },
      { path: 'worms', component: Worms }
    ]
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
