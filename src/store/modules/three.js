import {GET_THREE_DATA} from '../mutation-types'
import { reqThree } from '../../api';
const state={
  picture:{}  
}
const actions={
    async getThree({commit},data){
       let result = await reqThree(data)
       console.log(data)
       commit(GET_THREE_DATA,{result})     
    }
}
const mutations={
  [GET_THREE_DATA](state,data){
    state.picture = data
  }
}
const getters={

}
export default {
    state,
    getters,
    actions,
    mutations
}