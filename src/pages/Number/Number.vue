<template>
<div>
  <div class="header">
    <div class="head">
      <a href="##" class="left" @click="jump">
          <i class="iconfont icon-xiaofangzi"></i>
      </a>
      <a href="##" class="middle">
          <img src="../../../public/images/aa.png" alt="">
      </a>
      <div class="glass" v-show="!isphone">
        <a href="##" class="right" @click="search"> 
            <i class="iconfont icon-fangdajing2"></i>                        
        </a>
        <a href="##" class="right" @click="car">
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
      <input type="text" v-model="phonevalue" ref="phoneArr" class="number" @blur="reqRule(1)" placeholder="请输入手机号">
  </div>
     
   <div class="num">
      <input type="text" v-model="msgvalue" ref="msgArr"  class="phone" @blur="reqRule(2)" placeholder="请输入短信验证码">
      
      <div @click="message" >获取短信验证22</div>
   </div>
  <div class="question">
     <div class="meet">遇到问题?</div>
     <div class="secret">使用密码验证登录</div>
  </div>nom
  <div class="login">登录</div>
  <div class="footer">
    <span class="dui">
      <input type="checkbox">
    </span>
    <div class="agree">我同意<a href="##" class="serve">《服务条款》</a>和<a href="##"  class="serve">《网易隐私政策》</a></div>
  </div>
  <div class="other">其他登录方式</div>
  <i class="iconfont icon-yousanjiao"></i>
   </div>
</template>
<script type="text/ecmascript-6">
import { setInterval, clearInterval } from 'timers';
import {Toast,MessageBox} from "mint-ui"
import {reqSendCode} from '../../api'
 export default {
   
   data(){
      return {
      //  切换选择登录页面和手机邮箱登录 true是手机登录 false是邮箱登录
     selectlogin:true,
      // 手机登录
     isphone:true,
     // 手机号
     phonevalue:"",
    //  短信验证码
      msgvalue:"",
      // 验证码倒计时
      timeCount:0,
      // 按钮可点击
      phoneNumber:true,
      codeNumber:true,
      // 复选框是否选中
      ischecked:true

      }
   },
  
    methods:{
      // 切换登录的方式
      changeloginway(loginway){
          
      },
      jump(){
        this.$router.push('/person')
      },
      message(){
        // console.log(22222222)
      },
      car(){
        this.$router.push('/person')
      },
      search(){
        this.$router.push('/search')
      },
      //正则验证
      reqRule(type){
        if(type==1){
          // 手机验证
          let phones = this.$refs.phoneArr

        }
      }
  }
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
        padding 1xp 52px 
    .glass
      padding 1px 100px    
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
  display flex
  position relative
  width 95%
  height 50px
  border-bottom 1px solid #eee
  margin 22px 28px
  line-height 50px
  font-size 13px
  .phone
    height 50px
    width 80%
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
.footer
  height 40px
  width 90%
  display flex   
  margin 195px 53px 
  .agree
    .serve
      color blue
.other
  font-size 13px
  padding 55px 133px
  color #333      
</style>
