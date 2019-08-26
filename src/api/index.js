import Vue from 'vue'
import ajax from './ajax'
const BASE = '/api'
// 首页数据
export const reqFirst =()=>ajax('/mock/home')//请求mocks数据

// 搜索数据
export const reqSearch =(keword)=>ajax.get(
    `${BASE}/xhr/search/searchAutoComplete.json?keywordPrefix=${keword}`)//请求搜索数据

export const reqRed = ()=>ajax(
    `${BASE}/xhr/search/init.json` 
)    //请求搜索下面显示数据

export const reqSecond = ()=>ajax.get('/mock/category/list')//第二页请求


export const reqThree = () =>ajax.get(`${BASE}/topic/v1/find/recAuto.json`)//第三页请求接口数据
// reqFirst().then((result)=>{
//     console.log(result)
// })




