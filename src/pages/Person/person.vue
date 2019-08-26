<template>
  <div>
    <div class="header">
        <div class="head">
          <a href="##" class="left" @click="toGo">
              <i class="iconfont icon-xiaofangzi"></i>
          </a>
          <a href="##" class="middle">
              <img src="../../../public/images/aa.png" alt="">
          </a>
          <div>
          <a href="##" class="right" @click="small('/search')"> 
              <i class="iconfont icon-fangdajing2"></i>                        
          </a>
          <a href="##" class="right" @click="shop">
            <i class="iconfont icon-dagouwuche"></i>                        
          </a>
           </div>
        </div>     
        <div class="content">
          <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""> 
        </div>
        <div class="phone" @click="number('/number')">
          <i class="iconfont icon-shouji"></i>
          <span class="num">手机号快捷登录</span>         
        </div>
        <div class="mail" @click="email('/email')">
          <i class="iconfont icon-youxiang-copy"></i>
          <span class="num">邮箱账号登录</span>          
        </div>
    </div>
    <div class="end">
      <div class="item">
        <i class="iconfont icon-weixin"></i>
        <p class="wei">微信</p>
        <span>|</span>
      </div>
       <div class="item">
        <i class="iconfont icon-qq"></i>
        <p class="qq">QQ</p>
        <span>|</span>
       </div>
       <div class="item">
        <i class="iconfont icon-weibo"></i>
        <p class="bo">微博</p>
       </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Search from '../Search/Search'

  export default {
    data(){
      return{
        home :true,
        isShop:true,
        
    }
    },  
  
 
    methods:{
      toGo(){
        console.log(123)
        this.$router.push('/first')
      },
      shop(){
        console.log(333)
        this.$router.push('/car')
      },
      small(path){
        console.log(1111)
        this.$router.push(path)
      },
      number(path){
        this.$router.push(path)
      },
      email(path){
        this.$router.push(path)
      }     
    },
     components:{
        Search
      }
   
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
.header
  width 100%
  height 50px
  .head
    width 100%
    height 45px
    .left
      .iconfont
        font-size 30px
        margin 1px 14px
    .middle      
      height 22px
      width 80px
      margin 1px 10px
      img 
        height 24px
        width 75px
        padding 1xp 22px 
    .right
      .iconfont
        font-size 27px 
        margin 1px 14px
      .icon-dagouwuche
        font-size 30px
        margin 1px 11px
  .content
    width 100%
    background-color #F2F5F4
    img 
      width 154px
      height 53px
      padding 82px 107px 
  .phone
    height 50px
    width 90%
    color #fff
    border-radius 5px
    margin 11px 20px
    text-align center
    line-height 50px
    background #DD1A21
    .iconfont
      font-size 20px
      padding 1px 20px
  .mail
    height 50px
    width 90%
    color #DD1A21
    border-radius 5px
    margin 11px 20px
    text-align center
    line-height 50px
    border 1px solid red
    z-index 999
     .iconfont
      font-size 20px
      padding 1px 12px
.end
  display flex
  position absolute
  bottom 56px
  left 69px
  .item
    display flex
    padding 5px 18px


</style>
