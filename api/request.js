const baseURL = 'http://47.103.152.26:9089/api';
// 参数： url:请求地址  param：请求参数  way：请求方式 res：回调函数
 /**
  *  @name 请求
  */
 import global from '../static/js/global.js'
 async function apiPost(url,params){
 	if(!params)console.warn("没有传入参数params");
 	return await new Promise((resolve,reject)=>{
 		uni.request({
 			url:baseURL+url,
 			method :"POST",
 			header:{
 				// 'Token': token,
 				'Accept': 'application/json',
				'Authorization':'Bearer '+uni.getStorageSync('Authorization'),
 				// "content-type":"application/x-www-form-urlencoded"
 			},
 			data:params,
			sslVerify:false,
 			success(res) {
 				resolve(res.data)
 			},
 			fail(err) {
				global.hideLoading()
 				reject(err)
 			}
 		})
 	})
 }
 
 async function apiGet(url,params){
 	if(!params)console.warn("没有传入参数params");
 	return await new Promise((resolve,reject)=>{
 		uni.request({
 			url:baseURL+url,
 			method :"GET",
 			header:{
				'Authorization':'Bearer '+uni.getStorageSync('Authorization'),
 				'Accept': 'application/json',
 				// "content-type":"application/x-www-form-urlencoded"
 			},
 			timeout:6000,
			sslVerify:false,
 			data:params,
 			success(res) {
 				resolve(res.data)
 			},
 			fail(err) {
				global.hideLoading()
 				reject(err)
 			}
 		})
 	})
 }
 
 
 
 // 登录
 async function login(params,s,f){
 	// return await new Promise((resolve,reject)=>{
 		uni.request({
 			url:baseURL+'/login',
 			method :"GET",
 			data:params,
			sslVerify:false,
 			success(res) {
				s(res.data)
				 // global.showToast(res.data)
 				// resolve(res.data)
 			},
 			fail(err) {
				global.hideLoading()
				f(err)
 				// reject(err)
 			}
 		})
 	// })
 }

export default {
    baseURL,
	apiPost,
	apiGet,
	login
}