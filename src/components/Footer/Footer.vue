<template>
  <div class="footer">
    <div class="line"></div>
        <ul class="footer-all">
            <router-link to="/car">
            <li class="item">
                <i class="iconfont icon-xiaofangzi"></i>
                <span>首页</span>
            </li>
        </router-link>
            <li class="item">
                <i class="iconfont icon-fenlei"></i>
                <span>分类</span>
            </li>
            <li class="item">
                <i class="iconfont icon-shiwu"></i>
                <span>实物</span>
            </li>
            <li class="item">
                <i class="iconfont icon-gouwuche"></i>
                <span>购物车</span>
            </li>
            <li class="item">
                <i class="iconfont icon-gerenzhongxinwoderenwubiaozhuntoumianxing"></i>
                <span>个人</span>                
            </li>
        </ul>
</div>
</template>

<script type="text/ecmascript-6">

  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.footer    
		width 100%
		height 40px
		position fixed
		bottom 0  
		background #fff 
		.line
			height 3px
			width 100%
			background #eee     
		.footer-all 
			justify-content space-between
			align-items: center;
			display flex    
			width 100%
			height 40px
			.item
				display flex             
				flex-direction column    
				width 20%
				margin 0 18px    
				.icon-xiaofangzi
					font-size 21px
					color red
					font-weight 700
				span  
					font-size 14px
					color #666
					
 
</style>
