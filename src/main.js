// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue2-animate/dist/vue2-animate.min.css';
import 'animate.css'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios
// Vue.prototype.storage=Storage

/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
})
