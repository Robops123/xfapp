(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-faultReport-faultReportEdit"],{"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o});var i=n("795b"),r=n.n(i);function a(t,e,n,i,a,o,c){try{var l=t[o](c),s=l.value}catch(u){return void n(u)}l.done?e(s):r.a.resolve(s).then(i,a)}function o(t){return function(){var e=this,n=arguments;return new r.a(function(i,r){var o=t.apply(e,n);function c(t){a(o,i,r,c,l,"next",t)}function l(t){a(o,i,r,c,l,"throw",t)}c(void 0)})}}},4484:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-007b74e7]{background:#dcdcdc;padding-bottom:%?100?%}.yt-list[data-v-007b74e7]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-007b74e7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-007b74e7]{background:#fafafa}.yt-list-cell.b-b[data-v-007b74e7]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-007b74e7]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-007b74e7]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-007b74e7]{background:#3ab54a}.yt-list-cell .cell-tit[data-v-007b74e7]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#696969;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-007b74e7]{font-size:%?26?%;color:#f85e52}.yt-list-cell .cell-tip.disabled[data-v-007b74e7]{color:#f85e52}.yt-list-cell .cell-tip.active[data-v-007b74e7]{color:#f85e52}.yt-list-cell .cell-tip.red[data-v-007b74e7]{color:#f85e52}.yt-list-cell.desc-cell .cell-tit[data-v-007b74e7]{max-width:%?160?%}.yt-list-cell .desc[data-v-007b74e7]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#a9a9a9}.yt-list-cell uni-switch[data-v-007b74e7]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}.add-btn[data-v-007b74e7]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}body.?%PAGE?%[data-v-007b74e7]{background:#dcdcdc}',""])},"469f":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("7d7b")},"53da":function(t,e,n){"use strict";n.r(e);var i=n("6bd5"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},"5d73":function(t,e,n){t.exports=n("469f")},6329:function(t,e,n){"use strict";n.r(e);var i=n("642f"),r=n("53da");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("f4f9");var o=n("2877"),c=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"007b74e7",null);e["default"]=c.exports},"642f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"yt-list"},[n("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[n("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("记录编号")]),n("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写故障编号","placeholder-class":"placeholder"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),n("v-uni-view",{staticClass:"yt-list"},[n("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[n("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("上报人")]),n("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写故障上报人姓名","placeholder-class":"placeholder"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),n("v-uni-view",{staticClass:"yt-list"},[n("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[n("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("故障设备")]),n("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写故障设备","placeholder-class":"placeholder"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),n("v-uni-view",{staticClass:"yt-list"},[n("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[n("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("故障地点")]),n("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写故障信息","placeholder-class":"placeholder"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),n("v-uni-view",{staticClass:"yt-list"},[n("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[n("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("故障内容")]),n("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写故障信息","placeholder-class":"placeholder"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),n("v-uni-view",{staticClass:"yt-list"},[n("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[n("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("故障时间")]),n("v-uni-text",[t._v("2019-10-10 15:11")])],1)],1),n("v-uni-view",{staticClass:"yt-list"},[n("v-uni-view",{staticClass:"uni-list list-pd"},[n("v-uni-view",{staticClass:"uni-list-cell cell-pd"},[n("v-uni-view",{staticClass:"uni-uploader"},[n("v-uni-view",{staticClass:"uni-uploader-head",staticStyle:{"margin-left":"40upx"}},[n("v-uni-view",{staticClass:"uni-uploader-title"},[t._v("故障记录图片（最多9张）")]),n("v-uni-view",{staticClass:"uni-uploader-info"},[t._v(t._s(t.imageList.length)+"/9")])],1),n("v-uni-view",{staticClass:"uni-uploader-body",staticStyle:{"margin-left":"30upx"}},[n("v-uni-view",{staticClass:"uni-uploader__files"},[t._l(t.imageList,function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"uni-uploader__file"},[n("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:e,"data-src":e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage.apply(void 0,arguments)}}})],1)]}),n("v-uni-view",{staticClass:"uni-uploader__input-box"},[n("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}})],1)],2)],1)],1)],1)],1)],1),n("v-uni-button",{staticClass:"add-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("上报故障记录")])],1)},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"6bd5":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("795b"));n("96cf");var a=i(n("3b8d"));n("6762"),n("2fdb"),n("28a5");var o=i(n("768b")),c=i(n("cebc")),l=i(n("9364")),s=n("2f62"),u=[["camera"],["album"],["camera","album"]],f=[["compressed"],["original"],["compressed","original"]],d={components:{uniIcons:l.default},data:function(){return{order_no:"",select_item:"",price_type:"common_price",product_name:"",product_image1:"",price:0,price1:0,price2:0,price3:0,activeIndex:-1,desc:"",index:0,items:[],indexSex:0,indexOld:40,seller:"",seller_id:0,consultant:"",consultant_id:0,consultant_phone:"",buyer:"",buyer_phone:"",buyer_collector:"",remark:"",imageList:[],sourceTypeIndex:2,sizeTypeIndex:2,countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},computed:(0,c.default)({},(0,s.mapState)(["userRole"])),methods:{checkboxChange:function(t){this.select_item=t.detail.value},loadCollectTypes:function(){var t=this;this.$api.getCategory("collector_type",0).then(function(e){var n=(0,o.default)(e,2),i=n[0],r=n[1];if(null==i){var a=r.data;for(var c in a)t.items.push({value:c,name:a[c]})}})},bindSexChange:function(t){this.indexSex=t.target.value},bindOldChange:function(t){this.indexOld=t.target.value},wxscan:function(t){var e=this;wx.config(t),wx.ready(function(){wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(t){var n=t.resultStr,i=n.split(",")[1];if(0==e.buyer_collector.length)e.buyer_collector=i;else{var r=e.buyer_collector.split(",");r.includes(i)||(e.buyer_collector+=","+i)}}})})},switchActive:function(t){var e=this;this.activeIndex=t,setTimeout(function(){e.activeIndex=-1},500);var n={debug:!1,json:!0,apis:"scanQRCode",url:window.location.href.split("#")[0]},i=JSON.parse(sessionStorage.getItem("userToken"));this.$api.getJsSDKConfig(n,i).then(function(t){var n=(0,o.default)(t,2),i=n[0],r=n[1];null==i&&e.wxscan(r.data)})},switchChange:function(t){this.price==this.price1?("representative"==this.userRole?this.price=this.price2:this.price=this.price3,this.price_type="special_price"):(this.price_type="common_price",this.price=this.price1)},sourceTypeChange:function(t){this.sourceTypeIndex=t.target.value},sizeTypeChange:function(t){this.sizeTypeIndex=t.target.value},countChange:function(t){this.countIndex=t.target.value},chooseImage:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(9!==this.imageList.length){t.next=6;break}return t.next=3,this.isFullImg();case 3:if(e=t.sent,e){t.next=6;break}return t.abrupt("return");case 6:uni.chooseImage({sourceType:u[this.sourceTypeIndex],sizeType:f[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(t){n.imageList=n.imageList.concat(t.tempFilePaths[0])}});case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),isFullImg:function(){var t=this;return new r.default(function(e){uni.showModal({content:"是否清空现有图片？",success:function(n){n.confirm?(t.imageList=[],e(!0)):e(!1)},fail:function(){e(!1)}})})},previewImage:function(t){var e=t.target.dataset.src;uni.previewImage({current:e,urls:this.imageList})}}};e.default=d},"768b":function(t,e,n){"use strict";n.r(e);var i=n("a745"),r=n.n(i);function a(t){if(r()(t))return t}var o=n("5d73"),c=n.n(o);function l(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,l=c()(t);!(i=(o=l.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(s){r=!0,a=s}finally{try{i||null==l["return"]||l["return"]()}finally{if(r)throw a}}return n}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){return a(t)||l(t,e)||s()}n.d(e,"default",function(){return u})},"7d7b":function(t,e,n){var i=n("e4ae"),r=n("7cd6");t.exports=n("584a").getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},"969f":function(t,e,n){var i=n("4484");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("7469e9aa",i,!0,{sourceMap:!1,shadowMode:!1})},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag",s="object"===typeof t,u=e.regeneratorRuntime;if(u)s&&(t.exports=u);else{u=e.regeneratorRuntime=s?t.exports:{},u.wrap=w;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={},y={};y[o]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(z([])));m&&m!==i&&r.call(m,o)&&(y=m);var b=C.prototype=k.prototype=Object.create(y);_.prototype=b.constructor=C,C.constructor=_,C[l]=_.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[c]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,n,i){var r=new E(w(t,e,n,i));return u.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},L(b),b[l]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},u.values=z,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return c.type="throw",c.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:z(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,i){var r=e&&e.prototype instanceof k?e:k,a=Object.create(r.prototype),o=new S(i||[]);return a._invoke=I(t,n,o),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function k(){}function _(){}function C(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(n,i,a,o){var c=x(t[n],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"===typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(s).then(function(t){l.value=t,a(l)},function(t){return e("throw",t,a,o)})}o(c.arg)}var n;function i(t,i){function r(){return new Promise(function(n,r){e(t,i,n,r)})}return n=n?n.then(r,r):r()}this._invoke=i}function I(t,e,n){var i=f;return function(r,a){if(i===h)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw a;return R()}n.method=r,n.arg=a;while(1){var o=n.delegate;if(o){var c=T(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=h;var l=x(t,e,n);if("normal"===l.type){if(i=n.done?p:d,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=p,n.method="throw",n.arg=l.arg)}}}function T(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=x(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function z(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},f4f9:function(t,e,n){"use strict";var i=n("969f"),r=n.n(i);r.a}}]);