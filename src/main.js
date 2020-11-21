import Vue from 'vue'
import App from './App.vue'
import router from './router'

//  全局 css 样式
import './assets/global.css'
import './mock/mock'
Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
