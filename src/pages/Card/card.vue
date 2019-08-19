<template>
  <div>
    <div class="header">
      <div class="head">
        <div class="head-item">
            <i class="iconfont icon-fangdajing1"></i>
            <input type="text" placeholder="搜索商品，供21573款好物">
        </div>               
        <div class="line"></div>
      </div>
   </div>
    <div class="middle">
           <div class="left">
               <div class="item">推荐专区</div>
               <div class="item">推荐专区</div>
               <div class="item">推荐专区</div>
               <div class="item">推荐专区</div>
               <div class="item">推荐专区</div>
               <div class="item">推荐专区</div>
               <div class="item">推荐专区</div>
               <div class="item">推荐专区</div>
               <div class="item">推荐专区</div>
               <div class="item">推荐专区</div>
               <div class="item">推荐专区</div>
               <div class="item">推荐专区</div>
           </div>
          <div class="right">
            <div class="photo">
                <img  class="up" src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
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
  export default {
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
    margin 11px 1px
    .item
      font-size 14px
      color #666
      padding 17px
	.right 
		flex-direction column
		.photo
      margin-top 37px
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
