import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
// import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    // component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/Contact.vue'),
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
