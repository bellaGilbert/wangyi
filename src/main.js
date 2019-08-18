import Vue from 'vue'
import App from './App.vue'
import router from './pages/router'



import Footer from './components/Footer/Footer.vue'

Vue.component('Footer',Footer)
new Vue ({
    render:h=>h(App),
    router
})
