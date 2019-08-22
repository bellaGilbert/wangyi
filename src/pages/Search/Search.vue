<template>
  <div id="app">
    <div class="header">
      <div class="head">
          <i class="iconfont icon-fangdajing2 item"></i>
          <input class="put" type="text" placeholder="口袋打印机，随身任意爱" v-model="sear" @keyup="domn"/>
          <ul class="searchItem">
            <li class="item" v-for="(item, index) in searchArr" :key="index">{{item}}</li>
          </ul>
          <div class="del" @click="quxiao">取消</div>
      </div>       
    </div>    
     <div class="content">
        <h3 class="hot">热门搜索</h3>        
     </div>
     <ul class="shoes" v-if="reqRed" v-show="!sear" >
        <li class="cloud" v-for="(item, index) in reqRed.data.hotKeywordVOList" :key="index">{{item.keyword}}</li>
        </ul>
   </div>
 
</template>

<script type="text/ecmascript-6">
import {reqSearch} from '../../api'
import { mapState } from 'vuex';


  export default {
   data(){
    return{
      sear:'',

    }  
    },
    methods:{
      quxiao(){
        this.$router.push('/first')
      } ,
      domn () {
        this.$store.dispatch('getSearch',this.sear)
      }
    },
        
    mounted(){
      setTimeout(() => {
       this.$store.dispatch('getSearch',{sear:this.sear});
       this.$store.dispatch('getRed')
    }, 1000);
    },
    computed:{
      ...mapState({
         
        reqRed:state=>state.categray.reqRed
      })
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
#app
  padding-top 65px 
  .header
    .head
      width 100%
      height 50px
      display flex
      .put
        height 30px
        width 80%
        background #eee
        border-radius 7px
        margin 10px 20px
        text-align center
      .item
        font-size 14px
        color #666
        height 20px
      .del
        font-size 14px
        margin 10px 3px
        color #333 
    .searchItem
      position absolute   
      left 66px
      top 62px
  .content
    .hot
      font-size 14px
      color #666
      padding 1px 20px 
  .shoes
    display flex
    margin 19px 6px
    flex-wrap wrap
    .cloud
      width 97px
      height 15px
      font-size 12px
      color #b4282d
      border 1px solid #b4282d 
      padding 2px 3px   
      margin 5px 8px 
    .money
      font-size 12px
      color #333
      border 1px solid #999
      padding 0px 8px      
      margin 4px 7px

    



 
</style>
