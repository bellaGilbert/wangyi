<template>
  <div>
    <div class="header">
      <div class="head">
        <div class="head-item" @click="toDo">
            <i class="iconfont icon-fangdajing1"></i>
            <input type="text" placeholder="搜索商品，供21573款好物" >
        </div>               
        <div class="line"></div>
      </div>
   </div>
    <div class="middle ">
           <div class="left wrapper">
             <ul class="more">
               <li class="item" :class="{on:currentIndex===index}" v-for="(item, index) in blacks" :key="index" @click="currentIndex=index">{{item.name}}</li>            
            </ul>              
           </div>
          <div class="right">
            <div class="photo">
              <img  class="up" src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
            </div>            
            <ul class="content" v-if="blacks[currentIndex]">
                <li class="contentItem" v-for="(item, index) in blacks[currentIndex].subCateList" :key="index">                       
                    <img  class="down" :src="item.wapBannerUrl">
                        <p>{{item.name}}</p>                                                     
                </li>               
            </ul>        
        </div>
     </div>
  </div>

</template>
<script type="text/ecmascript-6">
import Swper from "../Swper/Swper.vue"
import BScroll from 'better-scroll'
import {getSecond} from '../../api'
import { mapState } from 'vuex';
  export default {
    data () {
      return {
        currentIndex:0
      } 
    },
	mounted(){
    console.log(this.isPerson)           
     new BScroll('.wrapper',{
      pullUpLoad: true,
      scrollX:false,
      scrollY:true,
      click: true
    });
    //setTimeout(() => {
       this.$store.dispatch('getSecond')
    //}, 1000);

  },
    computed:{
       ...mapState({
         blacks:state=>state.second.black,
         
       }) 
    },
    methods:{
      toDo(){
        this.$router.push('/search')
      },
      
      // saveIndex (index) {
      //   this.currentIndex = index
      //   console.log(index)

      // }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.header
  width 100%
  .head 
    position relative
    width 100%
    height 83px 
    .head-item
      height 40px 
      .icon-fangdajing1
        position absolute
        top 10px
        left 52px
        font-size 22px
        color #666
        z-index 100
      input[type="text"]
        height 30px
        position absolute
        top 6px
        left 13px
        font-size 14px
        width 350px
        text-align center
        border-radius 7px
        background-color #eee
    .line
      height 3px
      width 100%
      background-color #eee	
      margin-bottom -39px
.middle
  display: flex;
  .left
    width 320px
    height 528px
    .more
      height:1000px     
      .item
        font-size 14px
        color #666
        padding 17px 24px
        &.on
          color red        
	.right 
		flex-direction column
		.photo
      margin-top 4px
			.up 
				width 100%
				height 100px
				margin 11px -17px
		.content
			display flex
			flex-wrap wrap
			color #333
			.contentItem
				width 70px
				height 100px
				.down
					width 70px
					height 70px
				p 
					font-size 12px    

 
</style>
