import {GET_SEARCH_DATA,GET_RED_DATA} from '../mutation-types'
import { reqSearch, reqRed } from '../../api'
const state ={
	searchArr:[],
	reqRed:{}
}
const actions ={
	async getSearch({commit},data){
		let result = await reqSearch(data)
		const searchArr = result.data		
		commit(GET_SEARCH_DATA,searchArr)
		
		
	},
	async getRed({commit}){
		 let  mes = await reqRed()
			console.log(mes)
			commit(GET_RED_DATA,mes)
		}
}
const mutations ={
	[GET_SEARCH_DATA](state,searchArr){
		 console.log(searchArr)
		state.searchArr = searchArr
	},
	[GET_RED_DATA](state,mes){
		console.log(mes)
		state.reqRed = mes
	}
}
const getters ={

}

export default {
	state,
	mutations,
	actions,
	getters
}