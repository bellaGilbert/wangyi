import Vue from 'vue'
import App from './App.vue'
import router from './pages/router'
import store from './store'
import './api'
import './mockData/mockServer'


import Footer from './components/Footer/Footer.vue'
import 'lib-flexible/flexible'
Vue.component('Footer',Footer)
new Vue ({
    el:'#app',
    render:h=>h(App),
    router,
    store
})
