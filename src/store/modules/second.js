import {GET_SECOND_DATA} from '../mutation-types'
import {reqSecond} from '../../api'


const state={
   black:[]
}
const actions  = {
	async getSecond({commit},data){
		let result = await reqSecond(data)
		let datas= result.data
		console.log(datas)
		commit(GET_SECOND_DATA,datas)
	}
	
}


const mutations = {
	[GET_SECOND_DATA](state,datas){
		state.black = datas
	
 }
}
const getters ={

}
export default{
	state,
	actions,
	mutations,
	getters
} 