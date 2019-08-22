import axios from 'axios'
import qs from 'qs'
// 添加请求拦截器
axios.interceptors.request.use((config)=>{
   // 将携带的数据转换成url格式
    const {method,data} = config
    if(method.toLowerCase()==='post'){
        config.data = qs.stringify(data)
    }
    return config
})
// 添加一个响应拦截器
axios.interceptors.response.use(response=>{
    // 返回response中的data数据,这样请求成功好的数据就是data了
    return response.data
},
error=>{
    console.log(error.message,"2222222")
}
)



// export default function ajax (url, data = {}, method = 'GET') {
//     return new Promise((resolve, reject) => {
//       let promise;
//       if (method === 'GET') {
//        promise = axios.get(url, {
//           params: data
//         })
//       } else {
//        promise = axios.post(url, data);
//       }
//       promise
//         .then(response => {
//           resolve(response.data);
//         })
//         .catch(error => {
//           alert('请求失败' + error.msg);
//         })
//     });
//   }
 

export default axios