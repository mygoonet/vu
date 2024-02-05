
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '/src/App.vue'
import AboutView from '/src/About.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },

]
const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router
