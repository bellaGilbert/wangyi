<template>
<div>
	<div class="header">
			<!-- 头部 -->
			<div class="head">
					<a class="logo" href="##">
							<img src="../../../public/images/aa.png" alt="">
					</a>
					<div class="middle1">            
					<div class="middle-input" @click="del">
						<div class="iconfont icon-fangdajing2"></div>
						<span>搜索商品，共21613款好物</span>
					</div>  
					</div>
					<div class="right" @click="login">
							<button class="btn">登录</button> 
					</div>       
			</div> 
			<!--横着导航  -->
			<div class="nav wrapper">
				<ul class="tabWrap ">
					<li class="navItem active" @click="toGo(index)"  v-for="(item, index) in arr" 
					:key="index">{{item}}</li>  
				</ul>
					<div class="kkk" @click="show">
						<i class="iconfont icon-xiala"></i>	
					</div>					
					
			</div>
			<!--下拉框-->
			<div class="up" v-show="isShower" @click="none">
				<div class="one">
				 <span>全部频道</span>
					<i class="iconfont icon-shangsanjiao"></i>
				</div>
				<ul class="two">
					<li class="three">推荐</li>
					<li class="three">居家服饰</li>
					<li class="three">服饰鞋包</li>
					<li class="three">美食酒水</li>
					<li class="three">个护清洁</li>
					<li class="three">母婴亲子</li>
					<li class="three">运动旅行</li>
					<li class="three">数码家电</li>
				</ul>
			</div>
		
     
	</div>
	<div class="headerqq"></div>
	<div class="content">       
		<!--轮播图  -->
				<Swper/> 
		<!-- 三个标志 -->
		<div class="grow ">
				<ul class="grow-w" >
						<li class="item" v-for="(item, index) in homeArr" :key="index">
								<a href="##">
										<i class="iconfont icon-wangyi2"></i>
										<span>{{item.desc}}</span>
								</a>    
						</li>
					
				</ul>
		</div> 
		<!-- 商品分类 -->
		<div class="shop">
			<ul class="shop-all">
				<li class="shopItem" v-for="(item, index) in kingKongModule.kingKongModule.kingKongList" :key="index">							
					<img :src="item.picUrl">
					<span>{{item.text}}</span>
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
							<li class="item"  v-for="(item, index) in isPerson" :key="index">
									<img :src="item.listPicUrl" alt="">
									<span class="text">{{item.simpleDesc}}</span>
									<span class="paric">{{item.counterPrice}}</span>
							</li>
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
								<li class="item" v-for="(item, index) in first" :key="index">
										<img :src="item.picUrl">
										<div class="price">
												<p>{{item.activityPrice}} </p>
												<del>{{item.originPrice}}</del>
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
							<li class="item" v-for="(item, index) in isNewShop" :key="index">
									<img :src="item.primaryPicUrl">
									<div class="price">
											<p>{{item.name}}</p>
											<p>￥{{item.counterPrice}}</p>
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
import {mapState} from 'vuex'
  export default {
		data(){
			return{
				isLogin:true,
				arr:[],
				isShower:false,
				// isShow:true
			}     
		},
		components:{
			Swper
		},
		mounted(){
      console.log(this.isPerson)           
      let wrapper = document.querySelector('.wrapper')
      let scroll = new BScroll(wrapper,{
				pullUpLoad: true,
				click:true,
        scrollX:true,
        scrollY:false
		}) ;
		this.arr=["推荐","居家生活","服饰鞋包","美食酒水","个护清洁"]   
    },
    computed:{
      ...mapState({
        homeArr:state=>state.home.homeArr.policyDescList,
        // imgArr:state=>state.home.imgArr,
        isPerson:state=>state.home.person.personalShop,
        shop:state=>state.home.goShop,
				isNewShop:state=>state.home.newShop.newItemList,
				kingKongModule:state=>state.home.imgArr
        
    }) ,
    first(){
      return this.shop.flashSaleModule?this.shop.flashSaleModule.itemList:[];
    },
    flashSaleModule(){
      if(this.isNewShop){
        return this.isNewShop.flashSaleModule
      }   
    },
    },
    
    methods:{
      login(){
        this.$router.push('person')		
      },
      del(){
        this.$router.push('/search')
		},	
		toGo(index){
			console.log(index)
      this.$router.replace(`/first/${index}`)
		},
		none(){
			this.isShower = !this.isShower
		},
		show(){
			this.isShower = !this.isShower
		}
	},
	
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
	.header
		position relative
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
			width 70% 
			justify-content space-around     
			.tabWrap
				display flex
				margin -9px
				background #fff
				&.active
					color red
					border-bottom 1px solid red
				.navItem
					width 56px
					font-size 14px
					padding 16px 
			.kkk  		   
				.icon-xiala 
					position fixed
					top 55px
					right 22px
					width 20px
					height 20px
					font-size 34px
					color #999
		.up
			width 96%
			position absolute
			top 67px
			left 15px
			background #fff
			.one
				display flex
				justify-content space-between
				font-size 14px
				.icon-shangsanjiao
					font-size 30px
			.two		 
				display flex
				flex-wrap wrap
				.three 
					border 1px solid #999
					width 100px
					height 24px
					text-align center
					line-height 24px
					font-size 14px
					margin 3px 2px
	.headerqq
		height 100px
	.content
		overflow hidden
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
				flex-wrap wrap
				margin 9px
				width 100%
				height 70px
				flex-wrap wrap
				.shopItem 
					width 20% 
					flex-direction column
					align-items center   
					display flex
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
					display flex
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
				width 113px
				height 120px
				margin 5px 6px
				.price
					display flex 
					color #333 
					font-size 12px 					    
			img 
				width 107px
				height 107px
				background #eee
			.kong
				height 10px
				width 100%
				background #eee        
	</style>
