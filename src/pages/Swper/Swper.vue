<template>
 <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class ="item" src="https://yanxuan.nosdn.127.net/e5c1181a28981ca0b6087d2fb3e7d9d8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <!-- <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/975f983b0314af8da367b781efa5afeb.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div> -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>   
</div>
</template>

<script type="text/ecmascript-6">
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
export default{
  mounted(){

    

             
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
         autoplay:true,//等同于以下设置
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },       
    })    
  }
}
    
  
</script>

<style lang="stylus" rel="stylesheet/stylus">
.swiper-container
  width 100%
  height 186px
  .swiper-wrapper
    width 100%
    .swiper-slide
      width 100%
      height 186px
      .item
        height 186px

  
  
 
</style>
