<template>
<div>
  <div class="header">
    <div class="head">
      <a href="##" class="left">
          <i class="iconfont icon-xiaofangzi"></i>
      </a>
      <a href="##" class="middle">
          <img src="../../../public/images/aa.png" alt="">
      </a>
      <div>
      <a href="##" class="right" > 
          <i class="iconfont icon-fangdajing2"></i>                        
      </a>
      <a href="##" class="right" >
        <i class="iconfont icon-dagouwuche"></i>                        
      </a>
     </div>
   </div>        
 </div>
    <div class="line"></div>
   <div class="content">
          <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""> 
   </div>
   <div class="num">
      <input type="text" placeholder="请输入手机号">
  </div>
   <div class="num">
      <input type="text" placeholder="请输入短信验证码">
      <div class="msg">获取验证码</div>
  </div>
  <div class="question">
     <div class="meet">遇到问题?</div>
     <div class="secret">使用密码验证登录</div>
  </div>
  <div class="login">登录</div>
 

   </div>

</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
.line
  height 2px 
  width 100%
  background #eee        
.content
    width 100%
    img 
      width 115px
      padding 22px 128px
.num
  position relative
  width 95%
  height 50px
  border-bottom 1px solid #eee
  margin 22px 28px
  line-height 50px
  font-size 13px
  .msg
    position absolute
    right 25px
    top 0px
    font-size 13px
    border 1px solid #eee
    padding 1px 20px
.question
  display flex
  width 100%
  height 30px
  box-sizing: border-box;
  padding: 4px 20px;
  justify-content: space-between;
  .meet
    font-size 13px
    color #666
.login
  width 85%
  color #fff
  height 44px
  background #DD1A21
  border-radius 8px
  text-align center 
  line-height 44px
  font-size 14px
  color write
  margin 15px 33px
.dui
  height 20px
  width 30px
   
</style>

