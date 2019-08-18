/* 
路由器对象模块
*/
import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"

// 声明使用vue插件
Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes//配置项目中所有路由
})

