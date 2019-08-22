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
               <li class="item" v-for="(item, index) in blacks" :key="index" >{{item.name}}</li>            
            </ul>              
           </div>
          <div class="right">
            <div class="photo" v-for="(item, index) in blacks" :key="index">
              <img  class="up"  :src="item.bannerUrl" alt="">
            </div>            
            <ul class="content">
                <li class="contentItem">                       
                    <img  class="down" src="https://yanxuan.nosdn.127.net/6091911dc74d9968c54a50915c68f153.png?imageView&quality=85&thumbnail=144x144">
                    <p>夏日母婴好物价</p>                                                     
                </li>
                <li class="contentItem">                       
                    <img  class="down" src="https://yanxuan.nosdn.127.net/6091911dc74d9968c54a50915c68f153.png?imageView&quality=85&thumbnail=144x144">
                    <p>夏日母婴好物价</p>                                                     
                </li>
                <li class="contentItem">                       
                    <img  class="down" src="https://yanxuan.nosdn.127.net/6091911dc74d9968c54a50915c68f153.png?imageView&quality=85&thumbnail=144x144">
                    <p>夏日母婴好物价</p>                                                     
                </li>
                <li class="contentItem">                       
                    <img  class="down" src="https://yanxuan.nosdn.127.net/6091911dc74d9968c54a50915c68f153.png?imageView&quality=85&thumbnail=144x144">
                    <p>夏日母婴好物价</p>                                                     
                </li>
                <li class="contentItem">                       
                    <img  class="down" src="https://yanxuan.nosdn.127.net/6091911dc74d9968c54a50915c68f153.png?imageView&quality=85&thumbnail=144x144">
                    <p>夏日母婴好物价</p>                                                     
                </li>
                <li class="contentItem">                       
                    <img  class="down" src="https://yanxuan.nosdn.127.net/6091911dc74d9968c54a50915c68f153.png?imageView&quality=85&thumbnail=144x144">
                        <p>夏日母婴好物价</p>                                                     
                </li>
                <li class="contentItem">                       
                    <img  class="down" src="https://yanxuan.nosdn.127.net/6091911dc74d9968c54a50915c68f153.png?imageView&quality=85&thumbnail=144x144">
                    <p>夏日母婴好物价</p>                                                     
                </li>
                 <li class="contentItem">                       
                    <img  class="down" src="https://yanxuan.nosdn.127.net/6091911dc74d9968c54a50915c68f153.png?imageView&quality=85&thumbnail=144x144">
                    <p>夏日母婴好物价</p>                                                     
                </li>
                 <li class="contentItem">                       
                    <img  class="down" src="https://yanxuan.nosdn.127.net/6091911dc74d9968c54a50915c68f153.png?imageView&quality=85&thumbnail=144x144">
                    <p>夏日母婴好物价</p>                                                     
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
	mounted(){
    console.log(this.isPerson)           
     new BScroll('.wrapper',{
      pullUpLoad: true,
      scrollX:false,
      scrollY:true
    });
    setTimeout(() => {
       this.$store.dispatch('getSecond')
      //  console.log()
    }, 1000);

     
  },
    computed:{
       ...mapState({
         blacks:state=>state.second.black
       }) 
    },
    methods:{
      toDo(){
        this.$router.push('/search')
      }
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
        padding 15px 0px
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
