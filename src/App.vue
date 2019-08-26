<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from './components/Footer/Footer.vue'
  export default {
     components:{
       Footer
     },
     mounted(){
      //  提交首页中的数据
      // console.log(this.$store)
       this.$store.dispatch('getHomeData')
       this.$store.dispatch('getSmallData')
       this.$store.dispatch('getPersonData')
       this.$store.dispatch('getShopData')
       this.$store.dispatch('getNewData')
       this.$store.dispatch('getThree')
      
     }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
