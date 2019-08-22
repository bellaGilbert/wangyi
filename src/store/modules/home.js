import {GET_FIRST_DATA,GET_SMALL_DATA,GET_PERSON_DATA,GET_SHOP_DATA,GET_NEW_DATA} from '../mutation-types'

import {reqFirst} from '../../api'
const state ={ 
  homeArr:{},
  imgArr:{},
  person:{},
  goShop:{},
  newShop:{}
}
const actions = {
  async getHomeData({commit}){
    let result = await reqFirst()
    const homeArr = result.data
    // console.log(homeArr.policyDescList)
    commit(GET_FIRST_DATA,{homeArr})

    },
   
  async getSmallData({commit}){
    let result = await reqFirst()
    const imgArr = result.data
    // console.log(imgArr.kingKongModule)
    commit(GET_SMALL_DATA,{imgArr})
  },
  async getPersonData({commit}){
    let result = await reqFirst()
    const person = result.data
    commit(GET_PERSON_DATA,{person})
  },
  async getShopData({commit}){
    let result = await reqFirst()
    // console.log(result.data)
    const goShop = result.data
    commit(GET_SHOP_DATA,{goShop})
  },
  async getNewData({commit}){
    let result = await reqFirst()
    // console.log(result.data)
    const newShop = result.data
    commit(GET_NEW_DATA,{newShop})
  }

    
}
const mutations ={
   [GET_FIRST_DATA](state,{homeArr}){
     state.homeArr= homeArr
   },
  [GET_SMALL_DATA](state,{imgArr}){
    state.imgArr = imgArr
  },
  [GET_PERSON_DATA](state,{person}){
    state.person = person
    
  },
  [GET_SHOP_DATA](state,{goShop}){
    // console.log(111,goShop)
    state.goShop = goShop
  },
  [GET_NEW_DATA](state,{newShop}){
    state.newShop = newShop
  }


}
const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}