(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/startPatrol/report"],{"0214":function(e,t,n){"use strict";n.r(t);var i=n("7aba"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=r.a},"0f9c":function(e,t,n){"use strict";n.r(t);var i=n("848f"),r=n("0214");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("200e");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=c.exports},"200e":function(e,t,n){"use strict";var i=n("5df8"),r=n.n(i);r.a},"342a":function(e,t,n){"use strict";(function(e){n("d53d"),n("921b");i(n("66fd"));var t=i(n("0f9c"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"5df8":function(e,t,n){},"7aba":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),a=u(n("f40e")),o=u(n("d429")),s=n("bb60"),c=n("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,i,r,a,o){try{var s=e[a](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(i,r)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(i,r){var a=e.apply(t,n);function o(e){l(a,i,r,o,s,"next",e)}function s(e){l(a,i,r,o,s,"throw",e)}o(void 0)})}}function d(e,t){return g(e)||h(e,t)||p()}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function h(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)if(n.push(o.value),t&&n.length===t)break}catch(c){r=!0,a=c}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw a}}return n}function g(e){if(Array.isArray(e))return e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){v(e,t,n[t])})}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=[["camera"],["album"],["camera","album"]],y=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"256b"))},I={mixins:[s.Common],components:{uniIcons:y},onLoad:function(t){var n=this;if(this.number=t.index,console.log(e(this.number," at pages\\startPatrol\\report.vue:100")),this.form.tenantId=i.getStorageSync("tenantId"),this.name=i.getStorageSync("userName"),t.params){this.editable=!1;var r=JSON.parse(t.params);if(this.form.content=r.content,this.date=r.createTime,null!=r.filePath){var a=[];a=r.filePath.split(","),a.forEach(function(e){""!=e&&n.imageList.push(r.picServer+e)})}}else this.findTrouble(i.getStorageSync("activityId"),this.number,function(t){if(""!=t)if(n.isNew=!1,n.form=t[0],""==t[0].pictures||void 0==t[0].pictures)n.form.pictures=[];else{var i=[];i=t[0].pictures.split(","),n.form.pictures=i,n.imageList=i}else n.isNew=!0,console.log(e("无记录"," at pages\\startPatrol\\report.vue:145"))},function(){console.log(e("未见表"," at pages\\startPatrol\\report.vue:148")),n.isNew=!0})},data:function(){var e=this.getDate({format:!0});return{uploading:!1,isNew:!1,order_no:"",select_item:"",price_type:"common_price",product_name:"",product_image1:"",price:0,number:null,date:e,price1:0,price2:0,price3:0,activeIndex:-1,desc:"",items:[],devList:[],devListAll:[],indexSex:0,indexOld:40,seller:"",seller_id:0,consultant:"",consultant_id:0,consultant_phone:"",buyer:"",buyer_phone:"",buyer_collector:"",editable:!0,remark:"",imageList:[],sourceTypeIndex:2,sizeTypeIndex:2,countIndex:8,count:[1,2,3,4,5,6,7,8,9],choosedImg:[],tempImgList:[],offlineImgList:[],uploaded:0,name:"",offline:!1,form:{content:"",pictures:[],createTime:e,tenantId:"",checkId:i.getStorageSync("activityId")}}},computed:m({},(0,c.mapState)(["userRole"]),{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}}),methods:{checkboxChange:function(e){this.select_item=e.detail.value},consoleform:function(){console.log(e(this.form," at pages\\startPatrol\\report.vue:225"))},submit:function(){""==this.form.devId&&(this.form.devId=this.devListAll[0].devId),this.form.order=this.number,this.isNew?this.saveTrouble(this.form,function(e){200==e&&(o.default.showToast("保存成功"),setTimeout(function(){i.navigateBack({delta:2})},1e3))}):this.updateTrouble(this.form,function(e){200==e&&(o.default.showToast("更新成功"),setTimeout(function(){i.navigateBack({delta:2})},1e3))})},loadCollectTypes:function(){var e=this;this.$api.getCategory("collector_type",0).then(function(t){var n=d(t,2),i=n[0],r=n[1];if(null==i){var a=r.data;for(var o in a)e.items.push({value:o,name:a[o]})}})},bindSexChange:function(e){this.indexSex=e.target.value},bindOldChange:function(e){this.indexOld=e.target.value},wxscan:function(e){var t=this;wx.config(e),wx.ready(function(){wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(e){var n=e.resultStr,i=n.split(",")[1];if(0==t.buyer_collector.length)t.buyer_collector=i;else{var r=t.buyer_collector.split(",");r.includes(i)||(t.buyer_collector+=","+i)}}})})},switchActive:function(e){var t=this;this.activeIndex=e,setTimeout(function(){t.activeIndex=-1},500);var n={debug:!1,json:!0,apis:"scanQRCode",url:window.location.href.split("#")[0]},i=JSON.parse(sessionStorage.getItem("userToken"));this.$api.getJsSDKConfig(n,i).then(function(e){var n=d(e,2),i=n[0],r=n[1];null==i&&t.wxscan(r.data)})},switchChange:function(e){this.price==this.price1?("representative"==this.userRole?this.price=this.price2:this.price=this.price3,this.price_type="special_price"):(this.price_type="common_price",this.price=this.price1)},sourceTypeChange:function(e){this.sourceTypeIndex=e.target.value},sizeTypeChange:function(e){this.sizeTypeIndex=e.target.value},countChange:function(e){this.countIndex=e.target.value},chooseImage:function(){var e=f(r.default.mark(function e(){var t,n,a=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,9!==this.imageList.length){e.next=7;break}return e.next=4,this.isFullImg();case 4:if(n=e.sent,n){e.next=7;break}return e.abrupt("return");case 7:i.chooseImage({sourceType:b[this.sourceTypeIndex],sizeType:["compressed"],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){a.imageList=a.imageList.concat(e.tempFilePaths),t.compressImage(e.tempFilePaths)}});case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),compressImage:function(e){var t=this;t.uploading=!0,e.forEach(function(e,n){var i=e.split("/"),r=i[i.length-1];plus.zip.compressImage({src:e,dst:"_doc/"+r,quality:10},function(e){t.uploadImg(e.target)},function(e){o.default.showToast("图片压缩失败")})})},uploadImg:function(e){var t=this.imageList.length,n=this;0!=t&&i.saveFile({tempFilePath:e,success:function(e){n.form.pictures.push(e.savedFilePath),n.form.pictures.length==t&&(n.uploading=!1,n.imageList=n.form.pictures)}})},uploadImgBeforeSubmit:function(t){var n=0,r=t.length,s=this;0!=r&&(s.uploading=!0,t.forEach(function(t,c){console.log(e(t," at pages\\startPatrol\\report.vue:502")),i.uploadFile({url:a.default.baseURL+"/hazard/upload",filePath:t,name:"file",header:{Accept:"application/json",Authorization:"Bearer "+i.getStorageSync("Authorization")},success:function(t){console.log(e(t," at pages\\startPatrol\\report.vue:514"));var a=JSON.parse(t.data);200==a.code&&(n++,n<r?s.form.pictures+=a.data+",":n==r&&(s.form.pictures+=a.data,i.setStorageSync("report"+s.number,s.form),s.uploading=!1,s.offline=!1,s.submit()))},fail:function(e){s.uploading=!1,o.default.showToast("请检查网络连接")}})}))},upload:function(t){console.log(e(t," at pages\\startPatrol\\report.vue:538"))},isFullImg:function(){var e=this;return new Promise(function(t){i.showModal({content:"是否清空现有图片？",success:function(n){n.confirm?(e.imageList=[],t(!0)):t(!1)},fail:function(){t(!1)}})})},previewImage:function(e){var t=e.target.dataset.src;i.previewImage({current:t,urls:this.imageList})},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate(),a=t.getHours(),o=t.getMinutes()+1,s=t.getSeconds();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,a=a>9?a:"0"+a,o=o>9?o:"0"+o,s=s>9?s:"0"+s,"".concat(n,"-").concat(i,"-").concat(r," ").concat(a,":").concat(o,":").concat(s)},bindPickerChange:function(e){var t=this;this.form.index=e.target.value,t.form.devId=t.devListAll[e.target.value].devId},bindPickerChange2:function(e){this.date=e.target.value,this.form.createTime=e.target.value},imgchange:function(){console.log(e(this.imageList," at pages\\startPatrol\\report.vue:601"))},deleteimg:function(t){console.log(e(t,this.imageList," at pages\\startPatrol\\report.vue:604")),this.imageList.splice(t,1)}}};t.default=I}).call(this,n("0de9")["default"],n("6e42")["default"])},"848f":function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return i})}},[["342a","common/runtime","common/vendor"]]]);