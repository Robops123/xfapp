(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-startPatrol-report"],{"0099":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.Common=void 0,i("6b54"),i("a481");var a=n(i("62a8")),s={created:function(){},methods:{networkEnable:function(){var t="";return uni.getNetworkType({success:function(e){"none"==e.networkType||"unknown"==e.networkType?(a.default.showToast("请检查网络连接"),t=!1):t=!0},fail:function(t){a.default.showToast("无法检测")}}),t},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,i="x"==t?e:3&e|8;return i.toString(16)})}}};e.Common=s},"0ae9":function(t,e,i){"use strict";var n=i("a703"),a=i.n(n);a.a},"3bb6":function(t,e,i){"use strict";i.r(e);var n=i("c43f"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"432b":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-302e8914]{background:#dcdcdc;padding-bottom:%?100?%}.yt-list[data-v-302e8914]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-302e8914]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-302e8914]{background:#fafafa}.yt-list-cell.b-b[data-v-302e8914]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-302e8914]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-302e8914]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-302e8914]{background:#3ab54a}.yt-list-cell .cell-tit[data-v-302e8914]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#696969;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-302e8914]{font-size:%?26?%;color:#f85e52}.yt-list-cell .cell-tip.disabled[data-v-302e8914]{color:#f85e52}.yt-list-cell .cell-tip.active[data-v-302e8914]{color:#f85e52}.yt-list-cell .cell-tip.red[data-v-302e8914]{color:#f85e52}.yt-list-cell.desc-cell .cell-tit[data-v-302e8914]{max-width:%?160?%}.yt-list-cell .desc[data-v-302e8914]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#a9a9a9}.yt-list-cell uni-switch[data-v-302e8914]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}.add-btn[data-v-302e8914]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}body.?%PAGE?%[data-v-302e8914]{background:#dcdcdc}',""])},"469f":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("7d7b")},"527b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("上报人")]),i("v-uni-input",{staticClass:"desc",attrs:{type:"text",disabled:"",placeholder:"请填写隐患上报人姓名","placeholder-class":"placeholder"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("隐患设备")]),i("v-uni-picker",{attrs:{value:t.form.index,range:t.devList,mode:"selector"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.devList[t.form.index]))])],1)],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("隐患地点")]),i("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写隐患信息","placeholder-class":"placeholder"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("隐患内容")]),i("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写隐患信息","placeholder-class":"placeholder"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("隐患时间")]),i("v-uni-picker",{attrs:{value:t.date,start:t.startDate,end:t.endDate,mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange2.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.date))])],1)],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"uni-list list-pd"},[i("v-uni-view",{staticClass:"uni-list-cell cell-pd"},[i("v-uni-view",{staticClass:"uni-uploader"},[i("v-uni-view",{staticClass:"uni-uploader-head",staticStyle:{"margin-left":"40upx"}},[i("v-uni-view",{staticClass:"uni-uploader-title"},[t._v("隐患记录图片（最多9张）")]),i("v-uni-view",{staticClass:"uni-uploader-info"},[t._v(t._s(t.imageList.length)+"/9")])],1),i("v-uni-view",{staticClass:"uni-uploader-body",staticStyle:{"margin-left":"30upx"}},[i("v-uni-view",{staticClass:"uni-uploader__files"},[t._l(t.imageList,function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"uni-uploader__file"},[i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:e,"data-src":e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage.apply(void 0,arguments)}}})],1)]}),i("v-uni-view",{staticClass:"uni-uploader__input-box"},[i("v-uni-view",{staticClass:"uni-uploader__input",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}})],1)],2)],1)],1)],1)],1)],1),i("v-uni-button",{staticClass:"add-btn",attrs:{disabled:t.uploading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.uploading?"图片上传中，请等候":"提交隐患记录"))])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"5d73":function(t,e,i){t.exports=i("469f")},7461:function(t,e,i){"use strict";i.r(e);var n=i("527b"),a=i("3bb6");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("0ae9");var l=i("2877"),o=Object(l["a"])(a["default"],n["a"],n["b"],!1,null,"302e8914",null);e["default"]=o.exports},"768b":function(t,e,i){"use strict";i.r(e);var n=i("a745"),a=i.n(n);function s(t){if(a()(t))return t}var l=i("5d73"),o=i.n(l);function c(t,e){var i=[],n=!0,a=!1,s=void 0;try{for(var l,c=o()(t);!(n=(l=c.next()).done);n=!0)if(i.push(l.value),e&&i.length===e)break}catch(r){a=!0,s=r}finally{try{n||null==c["return"]||c["return"]()}finally{if(a)throw s}}return i}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){return s(t)||c(t,e)||r()}i.d(e,"default",function(){return u})},"7d7b":function(t,e,i){var n=i("e4ae"),a=i("7cd6");t.exports=i("584a").getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},a703:function(t,e,i){var n=i("432b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("f774e4f8",n,!0,{sourceMap:!1,shadowMode:!1})},c43f:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("795b"));i("ac6a"),i("96cf");var s=n(i("3b8d"));i("6762"),i("2fdb"),i("28a5");var l=n(i("768b")),o=n(i("cebc")),c=n(i("9364")),r=n(i("f0e2")),u=n(i("62a8")),d=i("0099"),f=i("2f62"),p=[["camera"],["album"],["camera","album"]],v={mixins:[d.Common],components:{uniIcons:c.default},onLoad:function(t){this.number=t.index,0==JSON.parse(t.params).result&&(this.form=uni.getStorageSync("report"+this.number),this.imageList=uni.getStorageSync("pictures"+this.number),this.offlineImgList=uni.getStorageSync("pictures"+this.number),this.offline=!0),this.form.tenantId=uni.getStorageSync("tenantId"),console.log(this.form),this.name=uni.getStorageSync("userName"),this.devList=uni.getStorageSync("devList"),this.devListAll=uni.getStorageSync("devListAll")},data:function(){var t=this.getDate({format:!0});return{uploading:!1,order_no:"",select_item:"",price_type:"common_price",product_name:"",product_image1:"",price:0,number:null,date:t,price1:0,price2:0,price3:0,activeIndex:-1,desc:"",items:[],devList:[],devListAll:[],indexSex:0,indexOld:40,seller:"",seller_id:0,consultant:"",consultant_id:0,consultant_phone:"",buyer:"",buyer_phone:"",buyer_collector:"",remark:"",imageList:[],sourceTypeIndex:2,sizeTypeIndex:2,countIndex:8,count:[1,2,3,4,5,6,7,8,9],choosedImg:[],tempImgList:[],offlineImgList:[],uploaded:0,name:"",offline:!1,form:{index:0,content:"",address:"",pictures:"",createTime:t,devId:"",tenantId:"",checkId:uni.getStorageSync("activityId")}}},computed:(0,o.default)({},(0,f.mapState)(["userRole"]),{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}}),methods:{checkboxChange:function(t){this.select_item=t.detail.value},submit:function(){var t=this;if(""==this.form.devId&&(this.form.devId=this.devListAll[0].devId),this.networkEnable()){var e=this;u.default.showLoading(),e.offline?e.uploadImgBeforeSubmit(e.offlineImgList):(console.log(this.form),r.default.apiPost("/hazard/add/",this.form).then(function(e){u.default.hideLoading(),200==e.code?(u.default.showToast("提交成功"),uni.$emit("submitResult",{index:t.number,result:1}),setTimeout(function(){uni.navigateBack()},1e3)):u.default.showToast("提交失败")}).catch(function(t){u.default.hideLoading(),u.default.showToast("请检查网络")}))}else uni.setStorageSync("report"+this.number,this.form),u.default.showToast("无法连接到网络"),uni.$emit("submitResult",{index:this.number,result:0}),setTimeout(function(){uni.navigateBack()},1e3)},loadCollectTypes:function(){var t=this;this.$api.getCategory("collector_type",0).then(function(e){var i=(0,l.default)(e,2),n=i[0],a=i[1];if(null==n){var s=a.data;for(var o in s)t.items.push({value:o,name:s[o]})}})},bindSexChange:function(t){this.indexSex=t.target.value},bindOldChange:function(t){this.indexOld=t.target.value},wxscan:function(t){var e=this;wx.config(t),wx.ready(function(){wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(t){var i=t.resultStr,n=i.split(",")[1];if(0==e.buyer_collector.length)e.buyer_collector=n;else{var a=e.buyer_collector.split(",");a.includes(n)||(e.buyer_collector+=","+n)}}})})},switchActive:function(t){var e=this;this.activeIndex=t,setTimeout(function(){e.activeIndex=-1},500);var i={debug:!1,json:!0,apis:"scanQRCode",url:window.location.href.split("#")[0]},n=JSON.parse(sessionStorage.getItem("userToken"));this.$api.getJsSDKConfig(i,n).then(function(t){var i=(0,l.default)(t,2),n=i[0],a=i[1];null==n&&e.wxscan(a.data)})},switchChange:function(t){this.price==this.price1?("representative"==this.userRole?this.price=this.price2:this.price=this.price3,this.price_type="special_price"):(this.price_type="common_price",this.price=this.price1)},sourceTypeChange:function(t){this.sourceTypeIndex=t.target.value},sizeTypeChange:function(t){this.sizeTypeIndex=t.target.value},countChange:function(t){this.countIndex=t.target.value},chooseImage:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(){var e,i,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this,9!==this.imageList.length){t.next=7;break}return t.next=4,this.isFullImg();case 4:if(i=t.sent,i){t.next=7;break}return t.abrupt("return");case 7:uni.chooseImage({sourceType:p[this.sourceTypeIndex],sizeType:["compressed"],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(t){n.imageList=n.imageList.concat(t.tempFilePaths),e.compressImage(t.tempFilePaths)}});case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),compressImage:function(t){var e=this;t.forEach(function(t,i){var n=t.split("/"),a=n[n.length-1];plus.zip.compressImage({src:t,dst:"_doc/"+a,quality:10},function(t){e.uploadImg(t.target)},function(t){u.default.showToast("图片压缩失败")})})},uploadImg:function(t){var e=this.imageList.length,i=this;0!=e&&(i.uploading=!0,i.networkEnable()?uni.uploadFile({url:r.default.baseURL+"/hazard/upload",filePath:t,name:"files",header:{Accept:"application/json",Authorization:"Bearer "+uni.getStorageSync("Authorization")},success:function(n){var a=JSON.parse(n.data);200==a.code&&(i.uploaded++,i.tempImgList.push(t),i.uploaded<e?i.form.pictures+=a.data+",":i.uploaded==e&&(i.imageList=i.tempImgList,i.form.pictures+=a.data,i.uploading=!1))},fail:function(t){i.uploading=!1,u.default.showToast("请检查网络连接")}}):uni.saveFile({tempFilePath:t,success:function(t){i.offlineImgList.push(t.savedFilePath),i.offlineImgList.length==e&&(i.uploading=!1,i.imageList=i.offlineImgList,uni.setStorageSync("pictures"+i.number,i.offlineImgList),u.default.showToast("无法连接到网络"))}}))},uploadImgBeforeSubmit:function(t){var e=0,i=t.length,n=this;0!=i&&(n.uploading=!0,t.forEach(function(t,a){console.log(t),uni.uploadFile({url:r.default.baseURL+"/hazard/upload",filePath:t,name:"files",header:{Accept:"application/json",Authorization:"Bearer "+uni.getStorageSync("Authorization")},success:function(t){console.log(t);var a=JSON.parse(t.data);200==a.code&&(e++,e<i?n.form.pictures+=a.data+",":e==i&&(n.form.pictures+=a.data,uni.setStorageSync("report"+n.number,n.form),n.uploading=!1,n.offline=!1,n.submit()))},fail:function(t){n.uploading=!1,u.default.showToast("请检查网络连接")}})}))},upload:function(t){console.log(t)},isFullImg:function(){var t=this;return new a.default(function(e){uni.showModal({content:"是否清空现有图片？",success:function(i){i.confirm?(t.imageList=[],e(!0)):e(!1)},fail:function(){e(!1)}})})},previewImage:function(t){var e=t.target.dataset.src;uni.previewImage({current:e,urls:this.imageList})},getDate:function(t){var e=new Date,i=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(i,"-").concat(n,"-").concat(a)},bindPickerChange:function(t){var e=this;this.form.index=t.target.value,e.form.devId=e.devListAll[t.target.value].devId},bindPickerChange2:function(t){this.date=t.target.value,this.form.createTime=t.target.value}}};e.default=v}}]);