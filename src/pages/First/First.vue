<template>
<div>
	<div class="header">
			<!-- 头部 -->
			<div class="head">
					<a class="logo" href="##">
							<img src="../../../public/images/aa.png" alt="">
					</a>
					<div class="middle1">            
					<div class="middle-input">
						<div class="iconfont icon-fangdajing2"></div>
						<span>搜索商品，共21613款好物</span>
					</div>  
					</div>
					<div class="right">
							<button class="btn">登录</button> 
					</div>       
			</div> 
			<!--横着导航  -->
			<div class="nav wrapper">
					<ul class="tabWrap ">
							<li class="navItem active">推荐</li>  
							<li class="navItem">家具生活</li>
							<li class="navItem">服饰箱包</li>
							<li class="navItem">美食酒水</li>
							<li class="navItem">美食酒水</li>           
							<li class="navItem">美食酒水</li>
							<li class="navItem">美食酒水</li>            
							<li class="navItem">美食酒水</li>
							<li class="navItem">美食酒水</li>            

							<i class="iconfont icon-xiala"></i>            
					</ul>
				
			</div>
	</div>
	<div class="content">       
		<!--轮播图  -->
				<Swper/> 
		<!-- 三个标志 -->
		<div class="grow">
				<ul class="grow-w">
						<li class="item">
								<a href="##">
										<i class="iconfont icon-wangyi2"></i>
										<span>网易自营品牌</span>
								</a>    
						</li>
						<li class="item">
								<a href="">
										<i class="iconfont icon-duihao"></i>
										<span>30天无忧退货</span>
								</a>    
						</li>
						<li class="item">
								<a href="">
										<i class="iconfont icon-qian"></i>
										<span>48小时快速退款</span>
								</a>    
						</li>
				</ul>
		</div> 
		<!-- 商品分类 -->
		<div class="shop">
				<ul class="shop-all">
						<li class="shopItem">
								<img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif">
								<span>新品发布</span>
						</li>
						<li class="shopItem">
										<img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png">
										<span>居家生活</span>
						</li>
						<li class="shopItem">
								<img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png">
								<span>服饰箱包</span>
						</li>
						<li class="shopItem">
								<img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png">
								<span>美食酒水</span>
						</li>
						<li class="shopItem">
								<img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png">
								<span>个护清洁</span>
						</li>
				</ul>
				<ul class="shop-all">
								<li class="shopItem">
										<img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png">
										<span>母婴亲子</span>
								</li>
								<li class="shopItem">
												<img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png">
												<span>运动旅行</span>
								</li>
								<li class="shopItem">
										<img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png">
										<span>数码家电</span>
								</li>
								<li class="shopItem">
										<img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png">
										<span>全球特色</span>
								</li>
								<li class="shopItem">
										<img src="http://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif">
										<span>超级会员</span>
								</li>
				</ul>
		</div>  
		<!-- 固定图片 -->
		<div class="fixed">
				<img src="https://yanxuan.nosdn.127.net/f4e55920102eef630232f0f34b75cf2e.gif">
		</div>  
		<!-- 4个广告 -->
		<div class="middle">
				<ul class="middleItem">
						<li class="item">
								<p class="pItem-one">9.9超值专区首发</p>
								<p class="pItem">180款爆品新特价</p>
								<div>
										<img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
										<img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
								</div>
						</li>
						<li class="item">
								<p class="pItem-one">9.9超值专区首发</p>
								<p class="pItem">180款爆品新特价</p>
								<div>
										<img src="https://yanxuan-item.nosdn.127.net/384c689de50380bbd5094d3c51e9a688.png?imageView&thumbnail=150x150&quality=75" alt="">
										<img src="https://yanxuan-item.nosdn.127.net/0fe562392cd8af853a565fb5c302fe3f.png?imageView&thumbnail=150x150&quality=75" alt="">
								</div>
						</li>
						<li class="item">
								<p class="pItem-one">9.9超值专区首发</p>
								<p class="pItem">180款爆品新特价</p>
								<div>
										<img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
										<img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
								</div>
						</li>
						<li class="item">
								<p class="pItem-one">福利社</p>
								<p class="pItem">每日新折扣</p>
								<div>
										<img src="https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="">
										<img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
								</div>
						</li>
				</ul>
		</div>  
		<!-- 私人定制 -->
		<div class="person">
				<p>私人定制</p>
				<div class="personAll">
						<ul class="personItem">
										<li class="item">
												<img src="https://yanxuan-item.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330" alt="">
										</li>
										<span class="text">浓缩即食燕窝70克...</span>
										<span class="paric">328￥</span>
						</ul>
						<ul class="personItem">
								<li class="item">
										<img src="https://yanxuan-item.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330" alt="">
								</li>
						<span class="text">浓缩即食燕窝70克.......</span>
						<span class="paric">328￥</span>
						</ul>
						<ul class="personItem">
								<li class="item">
										<img src="https://yanxuan-item.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330" alt="">
								</li>
								<span class="text">浓缩即食燕窝70克缩即食燕缩即食燕</span>
								<span class="paric">328￥</span>                        
						</ul>                  
					</div>              
				<div class="kong"> </div> 
		</div>
		<!-- 限时购 -->
		<div class="xianshi">
				<div class="time">
								<div class="left">
										<p>限时购</p>
										<span>00</span>:
										<span>00</span>:  
										<span>01</span>  
								</div>
								<div class="right">
										<p>更多</p>
										<p class="itemp">></p>
								</div>                  
					</div>
				<div class="photo">
						<ul class="photoItem">
								<li class="item">
										<img src="https://yanxuan-item.nosdn.127.net/e2af336789e2462f16efc9c2c0e19e48.png?imageView&thumbnail=216x216&quality=75">
										<div class="price">
												<p>￥30 </p>
												<del>66.5</del>
										</div>                            
								</li>
								<li class="item">
										<img src="https://yanxuan-item.nosdn.127.net/e2af336789e2462f16efc9c2c0e19e48.png?imageView&thumbnail=216x216&quality=75">
										<div class="price">
												<p>￥30 </p>
												<del>66.5</del>
										</div>                            
								</li>
								<li class="item">
										<img src="https://yanxuan-item.nosdn.127.net/e2af336789e2462f16efc9c2c0e19e48.png?imageView&thumbnail=216x216&quality=75">
										<div class="price">
												<p>￥30 </p>
												<del>66.5</del>
										</div>                            
									</li>
								<li class="item">
										<img src="https://yanxuan-item.nosdn.127.net/e2af336789e2462f16efc9c2c0e19e48.png?imageView&thumbnail=216x216&quality=75">
										<div class="price">
												<p>￥30 </p>
												<del>66.5</del>
										</div>                            
									</li>
								<li class="item">
										<img src="https://yanxuan-item.nosdn.127.net/e2af336789e2462f16efc9c2c0e19e48.png?imageView&thumbnail=216x216&quality=75">
										<div class="price">
												<p>￥30 </p>
												<del>66.5</del>
										</div>                            
								</li>
								<li class="item">
										<img src="https://yanxuan-item.nosdn.127.net/e2af336789e2462f16efc9c2c0e19e48.png?imageView&thumbnail=216x216&quality=75">
										<div class="price">
												<p>￥30 </p>
												<del>66.5</del>
										</div>                            
								</li>
						</ul>
						<div class="kong"></div>
				</div>       
		</div>
			<!-- 新品首发 -->
		<div class="xianshi">
			<div class="time">
					<div class="left">
						<p>新品首发</p>
				</div>
				<div class="right">
						<p>更多</p>
						<p class="itemp">></p>
				</div>                  
				</div>
			<div class="photo">
					<ul class="photoItem">
							<li class="item">
									<img src="https://yanxuan-item.nosdn.127.net/4a40896fe879f999e370da8fd3619511.png?imageView&quality=65&thumbnail=330x330">
									<div class="price">
											<p>￥30 </p>
											<del>66.5</del>
									</div>                            
							</li>
							<li class="item">
									<img src="https://yanxuan.nosdn.127.net/ae8c3cda95b2a807d0b8518f7145eda4.png?imageView&quality=65&thumbnail=330x330">
									<div class="price">
											<p>￥30 </p>
											<del>66.5</del>
									</div>                            
							</li>
							<li class="item">
									<img src="https://yanxuan-item.nosdn.127.net/f26a286cd4c26e7b1e33b844b494a908.png?imageView&thumbnail=216x216&quality=75">
									<div class="price">
											<p>￥30 </p>
											<del>66.5</del>
									</div>                            
									</li>
							<li class="item">
									<img src="https://yanxuan-item.nosdn.127.net/f0fb8d25330a9287c4ceed84d1054f1b.png?imageView&quality=65&thumbnail=330x330">
									<div class="price">
											<p>￥30 </p>
											<del>66.5</del>
									</div>                            
									</li>
							<li class="item">
									<img src="https://yanxuan-item.nosdn.127.net/d6a3ff3894437578b137ccbd6be32132.png?imageView&quality=65&thumbnail=330x330">
									<div class="price">
											<p>￥30 </p>
											<del>66.5</del>
									</div>                            
							</li>
							<li class="item">
									<img src="https://yanxuan-item.nosdn.127.net/6754e5a5ea2005b11849d42e7f27ce3d.png?imageView&quality=65&thumbnail=330x330">
									<div class="price">
											<p>￥30 </p>
											<del>66.5</del>
									</div>                            
							</li>
					</ul>
					<div class="kong"></div>
			</div>       
		</div>
		<!--人气推荐  -->
		<div class="tuijian">
				<div class="time">
						<div class="left">
								<p>人气推荐</p>
						</div>
						<div class="right">
								<p>更多</p>
								<p class="itemp">></p>
						</div>                  
				</div>
				<div class="foot">
						<a href="##" class="left">
								<img src="https://yanxuan-item.nosdn.127.net/89d86a4e463115e366daf841b9bcff46.png?imageView&quality=65&thumbnail=280x280" >
						</a>
						<div class="right">
								<span>抄底特惠</span>
								<span>新色奢华水牛皮枕头</span>
								<span>三峡水牛头</span>
								<span></span>
						</div>
				</div>
		</div>
	</div>
	
</div>  
</template>
<script type="text/ecmascript-6">
import Swper from "../Swper/Swper.vue"
import BScroll from 'better-scroll'
  export default {
      components:{
          Swper
      },
       mounted(){           
        let wrapper = document.querySelector('.wrapper')
        let scroll = new BScroll(wrapper,{
            pullUpLoad: true,
            scrollX:true
        })
	}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
	.header
		width 100%
		position fixed
		top 0px 
		background-color #fff
		z-index 100
		.head   
			display flex
			align-items: center;
			width 100%
			height 48px
			background #fff  
			justify-content space-between    
			.logo
				img
					height 20px
					padding 5px 
			.middle1      
				height 34px   
				text-align center
				position relative
				margin-right 20px
				.middle-input   
					padding-top 5px
					display flex           
					border 1px solid #eee
					border-radius 5px
					height 23px
					background-color #eee
					margin-left -100px
					span 
						display block
						width 200px
						font-size 14px         
			.right
				width 55px
				.btn
					font-size 12px
					color: #b4282d
					border: 1px solid #b4282d
					border-radius 5px
					background-color #fff      
					span 
						font-size 10px
						color #666   
						padding 41px      
					input[type="text"]
						width 235px
						height 22px
						border-radius 5px
						text-align center
						margin-top -35px
					.iconfont
						position absolute
						top 4px
						left 18px 
		.nav
			display flex 
			height 16px
			width 100% 
			justify-content space-around     
			.tabWrap
				display flex
				margin -12px
				background #fff
				.active
					color red
					border-bottom 1px solid red
				.navItem
					width 100px
					background red   
					font-size 14px
					padding 16px    
		.icon-xiala 
			width 20px
			height 20px
			font-size 34px
			color #999
	.content  
		.swper
			margin-top 63px
			width 100%
			position relative
			height 222px
			img 
				width 100%
				height 200px
				position absolute
				top 14px
				left 0px
		.grow
			width 100%
			height 30px
			margin 13px
			.grow-w
				display flex
				justify-content space-around 
				flex-del
				.item 
					span 
						font-size 13px
						color #666
					.iconfont
						color red   	
		.shop
			height 170px
			width 100%       
			.shop-all
				display flex
				margin 9px
				width 100%
				height 70px
				.shopItem 
					width 20%     
					img 
						width 60px
						height 60px
					span 
						font-size 13px 
		.fixed
			img
				width 100%
				height 65px
		.middle
			width 100%
			padding 10px 20px
			box-sizing border-box
			.middleItem 
				display flex    
				flex-wrap wrap
				justify-content space-around 
				width 100%
				.item
					width 49%
					height 125px
					background #eee
					.pItem-one
						font-size 16px
						color #333
						margin 8px
					.pItem
						font-size 12px
						color #7f7f7f;
					img 
						width 70px
						height 80px  
		.person
			width 100%
			p 
				font-size 17px  
				color #333
				text-align left
				margin: 8px 15px;
				.personAll 
					display flex 
					.personItem 
						margin 5px 
						width 29%
						.item 
							background #eee
							img 
								height 115px
							p
								font-size 14px
								text-align left 
								.text
									font-size 12px
								.paric
									font-size 12px
									color red   
				.kong
					height 10px
					width 100%
					background #eee       
		.time
			width 100% 
			display flex
			justify-content space-between  
			margin 6px 
			.left
				display flex
				span 
					width 20px
					height 20px
					color #fff
					background-color black 
					margin 0 7px
					border-radius 4px
					text-align center
					line-height 20px
				p
					font-size 15px
					margin 0 12px
					color #333                      
			.right
				display flex
				p
					color #333333
					font-size 13px
				.itemp
					padding 1px 10px 
		.photo
			.photoItem
				display flex 
				flex-wrap wrap
				.item
					margin 10px 9px
					.price               
						display flex 
						margin 0 25px
						p
							color red 
							font-size 15px 
						del
							font-size 12px
							color #666     
					img 
						width 107px
						height 107px
						background #eee
			.kong
				height 10px
				width 100%
				background #eee        
	</style>
