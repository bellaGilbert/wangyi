<template>
  <div>
      <div class="header">
					<div class="up">
						<div class="shop">购物车</div>
						<div class="logo">领券</div>            
			   	</div>
				  <ul class="down">
						<li class="day">
							<i class="iconfont icon-xiaoyuandian1"></i>
							<span>30天无忧退货</span>
						</li>
						<li class="day">
              <i class="iconfont icon-xiaoyuandian1"></i>
              <span>30天无忧退货</span>
							</li>
						<li class="day">
              <i class="iconfont icon-xiaoyuandian1"></i>
              <span>30天无忧退货</span>
						</li>
					</ul>
    </div> 
     <div class="content">
        <i class="iconfont icon-dagouwuche"></i>
        <div class="add">去添加点什么吧</div>
        <div class="btn">登录</div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  .up
    height 46px
    width 100%
    justify-content space-between
    display flex
    line-height 46px
  .shop
    font-size 18px
    color #666
    margin 1px 16px
  .logo
    font-size 15px
    color #B4282D
    margin 1px 30px
  .down
    background-color #eee
    display flex
    height 35px
    line-height 35px
    justify-content space-around
    .day
      font-size 12px
      color #666
 .content
  width 100%
  text-align center
  margin 200px 1px
  .icon-dagouwuche
    font-size 112px
  .add	
    font-size 12px
    color #999999
    padding 6px 1px
  .btn	
    height 45px
    width 232px
    background-color #b4282d
    font-size 16px
    color #fff
    border-radius 5px
    margin 1px 73px
    line-height 45px      
 
</style>
