(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hidTrouble-hidTroubleList"],{"0b6e":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("f0e2")),n=(a(i("62a8")),{data:function(){return{source:0,total:0,page:1,addressList:[]}},onLoad:function(t){this.getList()},methods:{checkAddress:function(t){1==this.source&&(this.$api.prePage().addressData=t,uni.navigateBack())},getList:function(){var t=this,e=this,i={tenantId:uni.getStorageSync("tenantId"),current:this.page,size:10};s.default.apiGet("/hazard",i).then(function(i){console.log(i),200==i.code&&(1==t.page?e.addressList=i.data.records:e.addressList=e.addressList.concat(i.data.records),e.total=i.data.total)})},getLatestList:function(t){var e=this,i=this,a={tenantId:uni.getStorageSync("tenantId"),current:t,size:10};s.default.apiGet("/hazard",a).then(function(t){if(console.log(t),200==t.code){if(1==e.page)i.addressList=t.data.records;else{var a=t.data.records.length;i.addressList=i.addressList.concat(t.data.records[a-1])}i.total=t.data.total}})},addAddress:function(t,e){var i=this;uni.$on("troubleListUpdate",function(){console.log("刷新"),i.total%10==0&&i.page++,i.getLatestList(i.page),uni.$off("troubleListUpdate")}),uni.navigateTo({url:"/pages/hidTrouble/hidTroubleEdit"})},refreshList:function(t,e){this.addressList.unshift(t),console.log(t,e)},scrolltolower:function(){this.addressList.length<this.total&&(this.page++,this.getList())}}});e.default=n},"19e9":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-42f392f9]{padding-bottom:%?120?%}.content[data-v-42f392f9]{position:relative}.list[data-v-42f392f9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;background:#fff;position:relative}.wrapper[data-v-42f392f9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.address-box[data-v-42f392f9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-box .tag[data-v-42f392f9]{font-size:%?24?%;color:#fa436a;margin-right:%?10?%;background:#fffafb;border:1px solid #ffb4c7;border-radius:%?4?%;padding:%?4?% %?10?%;line-height:1}.address-box .address[data-v-42f392f9]{font-size:%?30?%;color:#303133}.u-box[data-v-42f392f9]{font-size:%?28?%;color:#909399;margin-top:%?16?%}.u-box .name[data-v-42f392f9]{margin-right:%?30?%}.icon-bianji[data-v-42f392f9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?40?%;color:#909399;padding-left:%?30?%}.add-btn[data-v-42f392f9]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}',""])},5160:function(t,e,i){var a=i("19e9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("59116cae",a,!0,{sourceMap:!1,shadowMode:!1})},"59f8":function(t,e,i){"use strict";i.r(e);var a=i("9a9b"),s=i("7053");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("7a4d");var o=i("2877"),d=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"42f392f9",null);e["default"]=d.exports},7053:function(t,e,i){"use strict";i.r(e);var a=i("0b6e"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},"7a4d":function(t,e,i){"use strict";var a=i("5160"),s=i.n(a);s.a},"9a9b":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content b-t"},[i("v-uni-scroll-view",{staticClass:"purchase-body",staticStyle:{"max-height":"calc(100vh - 260upx)"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrolltolower.apply(void 0,arguments)}}},t._l(t.addressList,function(e,a){return i("v-uni-view",{key:a,staticClass:"list b-b",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkAddress(e)}}},[i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"address-box"},[i("v-uni-text",{staticClass:"address"},[t._v(t._s(e.content))])],1),i("v-uni-view",{staticClass:"u-box"},[i("v-uni-text",{staticClass:"name"},[t._v("上报人: "+t._s(e.userName))]),i("v-uni-text",{staticClass:"mobile"},[t._v("上报时间: "+t._s(e.createTime))])],1),i("v-uni-view",{staticClass:"u-box"},[i("v-uni-text",{staticClass:"name"},[t._v("地点: "+t._s(e.address))])],1)],1)],1)}),1),i("v-uni-text",{staticStyle:{display:"block",padding:"16upx 30upx 10upx","lihe-height":"1.6",color:"#fa436a","font-size":"24upx"}},[t._v("重要：")]),i("v-uni-button",{staticClass:"add-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addAddress("add")}}},[t._v("新增上报隐患")])],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})}}]);