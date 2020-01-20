import  global from './global.js';
 export const Common = {
     created() {
		 
     },
     methods: {
         networkEnable(){
			 var ret=''
			 uni.getNetworkType({
			     success: function (res) {
			 		if(res.networkType=='none' || res.networkType=='unknown'){
			 			global.showToast('请检查网络连接')
			 			ret=false
			 		}else{
			 			ret=true
			 		}
			     },
			 	fail:(reason) =>{
			 		global.showToast('无法检测')
			 	}
			 });
			 return ret;
		 },
		 guid() {
		     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		         var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		         return v.toString(16);
		     });
		 }
     }
 };