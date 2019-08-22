<template>
  <div>
    <div class="header"> 
      <div class="head" > 
        <a href="##" @click="glasses">
           <i class="iconfont icon-xiaofangzi"></i>
          </a> 
         <div>
              <span class="find">发现</span>
              <span class="change">甄选家</span>
         </div>                
        <div class="big">
             <a href="##" @click="big('/search')">
                <i class="iconfont icon-fangdajing2"></i>
             </a>            
              <a href="##" @click="shopping">
                  <i class="iconfont icon-gouwuche"></i>
              </a>
              
        </div>               
      </div>
      <div class="header-item">
          <div class="item">盛夏的特别版</div>
          <div class="other">推荐</div>
          <div class="other">好货内部价</div>
          <div class="other">回购榜</div>
          <div class="other">晒单</div>
      </div>
    </div>
      <div class="content">
        <img class="green" src="https://yanxuan.nosdn.127.net/15639572098632760.jpeg" alt="">  
        <img class="gary" src="https://yanxuan.nosdn.127.net/15656868015315337.jpg?_width=750&_height=344" alt=""> 
        <img class="blue" src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" alt="">
        <img class="tea" src="https://yanxuan.nosdn.127.net/15656878289625347.jpg" alt="">
        <ul class="itemHead">
            <li class="itemImg">
                <img class="small" src="https://yanxuan.nosdn.127.net/15640225106613335.png?quality=95&thumbnail=130x130&imageView" alt="">
            </li>
            <li class="itemImg">
                <img class="small" src="https://yanxuan.nosdn.127.net/15640225106613335.png?quality=95&thumbnail=130x130&imageView" alt="">
            </li>
            <li class="itemImg">
                <img class="small" src="https://yanxuan.nosdn.127.net/15640225106613335.png?quality=95&thumbnail=130x130&imageView" alt="">
            </li>
            <li class="itemImg">
                <img class="small" src="https://yanxuan.nosdn.127.net/15640225106613335.png?quality=95&thumbnail=130x130&imageView" alt="">
            </li>
            <li class="itemImg">
                <img class="small" src="https://yanxuan.nosdn.127.net/15640225106613335.png?quality=95&thumbnail=130x130&imageView" alt="">
            </li>
            <li class="itemImg">
                <img class="small" src="https://yanxuan.nosdn.127.net/15640225106613335.png?quality=95&thumbnail=130x130&imageView" alt="">
            </li>
            <li class="itemImg">
                <img class="small" src="https://yanxuan.nosdn.127.net/15640225106613335.png?quality=95&thumbnail=130x130&imageView" alt="">
            </li>
        </ul> 
        <img class="skyblue" src="https://yanxuan.nosdn.127.net/15645393458728772.jpeg" alt=""> 
        <img class="deppGreen" src="https://yanxuan.nosdn.127.net/15640407915873725.png" alt=""> 
        <ul class="paper">
            <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li>
            <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li> 
              <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li>  
            <li class="more">
                <a href="##" class="look">查看更多</a>
                <i class="iconfont "></i>
            </li>                  
        </ul> 
        <img class="deppGreen" src="https://yanxuan.nosdn.127.net/15640408122983726.png" alt=""> 
        <ul class="paper">
            <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li>
            <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li> 
              <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li>  
            <li class="more">
                <a href="##" class="look">查看更多</a>
                <i class="iconfont "></i>
            </li>                  
        </ul>
        <img class="deppGreen" src="https://yanxuan.nosdn.127.net/15640408194743727.png" alt=""> 
        <ul class="paper">
            <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li>
            <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li> 
              <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li>  
            <li class="more">
                <a href="##" class="look">查看更多</a>
                <i class="iconfont "></i>
            </li>                  
        </ul> 
        <img class="deppGreen" src="https://yanxuan.nosdn.127.net/15640408256673728.png" alt=""> 
        <ul class="paper">
            <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li>
            <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li> 
              <li class="paperItem">
                <img class="item" src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                <p class="bag">6包每提清风</p>
                <span class="new">新人专享价</span>
                <div class="money">
                    <span class="paric">￥83.6</span>
                    <span class="old">￥88</span>
                </div>                    
                <a class="pay" href="">立即抢购</a>
            </li>  
            <li class="more">
                <a href="##" class="look">查看更多</a>
                <i class="iconfont "></i>
            </li>                  
        </ul>
        <img  class="spring" src="https://yanxuan.nosdn.127.net/15656874181415345.jpeg" alt=""> 
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { constants } from 'crypto'
  export default {
    data(){
      return{
         isHouse:true 
      }
    },
    methods:{
      glasses(){
        console.log('222')
        this.$router.push('/first')
      },  
      shopping(){
        console.log(3)
        this.$router.push('/person')
      },
      big(path){
        console.log(5)
        this.$router.push(path)
      } 
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  position relative
  z-index 999
  width 100%
  background #fff
  .head
    z-index 1000
    display flex
    justify-content space-between
    width 100%
    height 41px    	
    border-bottom 1px solid #eee
    position fixed
    top 0px
   .icon-gouwuche
      margin-right 15px
    .iconfont
      font-size 27px
    .find
      font-size 21px
      font-weight 700
      color #b4282d
    .change	
      font-size 13px
      color #666
  .header-item
    background #fff	
    height 30px	  
    width 100%
    padding 60px 0px 10px 0
    display flex	
    justify-content space-around
    position fixed
    top 0
    left 0
    .item
      font-size 14px
      color red
      padding 0px 6px
    .other
      font-size 14px
      color #666
.content
  .green
    height 206px
    width 100%
  .gary
    height 170px
    width 100%
  .blue
    height 91px		
    width 100%
  .tea
    height 215px
    width 100%
  .itemHead
    width 100%
    display flex
    .itemImg	
      .small
        height 72px
        width 72px
        border-radius 15px
        padding 5px 2px
  .skyblue
    width 100%
    height 82px 
  .deppGreen
    width 100%
    height 92px
  .paper
    display flex
  .paperItem
    margin 1px -8px
    .item
      width 102px
      height 100px
      margin 6px 10px
      border-radius 5px
    .bag
      font-size 13px
      color #666
      padding 1px 16px
    .new
      color orange
      font-size 12px
      border 1px solid
      margin 1px 19px
    .money
      display flex
      .paric
        color red
        font-weight 700
        font-size 15px
        display block
        padding 2px 16px
      .old	
        font-size 12px
        line-height 12px
        color #9b9b9b
        text-decoration: line-through;
    .pay
      color #fff
      background-color #dc4516
      font-size 13px
      font-weight 700
      padding 2px 13px
      margin 3px 12px
      border-radius 10px
      border 1px solid
	.more 
    width 30px
    height 50px
    color pink
	.look
		color #7e8c8d
		text-decoration none
		color #fff
		background-color green
		border-radius 5px
		width 47px
		height 176px
		display inline-block
		text-align center
		margin 9px 3px
.spring
	width 100%
	height 90px	     

</style>
