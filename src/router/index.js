import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Widget from '../views/Widget.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/widget',
			name: 'widget',
			component: Widget
		}
	]
})

export default router