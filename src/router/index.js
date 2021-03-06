import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
	{
		path: '*',
		name: 'NotFound',
		component: NotFound,
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
