(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-workorder-editOrder"],{4855:function(t,e,i){"use strict";var l=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=l(i("9364")),s={components:{uniIcon:a.default},data:function(){return{order_no:"",select_item:"",price_type:"common_price",product_name:"",product_image1:"",price:0,price1:0,price2:0,price3:0,activeIndex:-1,desc:"",index:0,items:[],indexSex:0,arraySex:[{sexname:"男"},{sexname:"女"}],indexOld:40,seller_id:0,consultant:"",consultant_id:0,consultant_phone:"",buyer:"",buyer_phone:"",buyer_collector:"",remark:"",imageList:[],sourceTypeIndex:2,sizeTypeIndex:2,countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},methods:{}};e.default=s},"700b":function(t,e,i){var l=i("78c2");"string"===typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);var a=i("4f06").default;a("7fa20473",l,!0,{sourceMap:!1,shadowMode:!1})},"78c2":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-5d3206f2]{background:#dcdcdc;padding-bottom:%?100?%}.goods-section[data-v-5d3206f2]{margin-top:%?0?%;background:#fff;padding-bottom:1px}.goods-section .g-item[data-v-5d3206f2]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?0?% %?40?%}.goods-section .g-item uni-image[data-v-5d3206f2]{-webkit-flex-shrink:0;flex-shrink:0;display:block;width:%?180?%;height:%?180?%;border-radius:%?4?%;margin-top:%?30?%}.goods-section .g-item .right[data-v-5d3206f2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?24?%;overflow:hidden;margin-top:%?30?%}.goods-section .g-item .title[data-v-5d3206f2]{font-size:%?30?%;color:#000}.goods-section .g-item .spec[data-v-5d3206f2]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?15?%;font-size:%?26?%;color:#a9a9a9}.goods-section .g-item .price-box[data-v-5d3206f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#000;padding-top:%?20?%}.goods-section .g-item .price-box .price[data-v-5d3206f2]{margin-bottom:%?4?%}.goods-section .g-item .step-box[data-v-5d3206f2]{position:relative}.yt-list[data-v-5d3206f2]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-5d3206f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-5d3206f2]{background:#fafafa}.yt-list-cell.b-b[data-v-5d3206f2]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-5d3206f2]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-5d3206f2]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-5d3206f2]{background:#3ab54a}.yt-list-cell .cell-tit[data-v-5d3206f2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#696969;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-5d3206f2]{font-size:%?26?%;color:#f85e52}.yt-list-cell .cell-tip.disabled[data-v-5d3206f2]{color:#f85e52}.yt-list-cell .cell-tip.active[data-v-5d3206f2]{color:#f85e52}.yt-list-cell .cell-tip.red[data-v-5d3206f2]{color:#f85e52}.yt-list-cell.desc-cell .cell-tit[data-v-5d3206f2]{max-width:%?140?%}.yt-list-cell .desc[data-v-5d3206f2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#a9a9a9}.yt-list-cell uni-switch[data-v-5d3206f2]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}.footer[data-v-5d3206f2]{position:fixed;left:0;bottom:0;z-index:995;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?90?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-5d3206f2]{padding-left:%?30?%}.footer .price-tip[data-v-5d3206f2]{color:#f85e52;margin-left:%?8?%}.footer .price[data-v-5d3206f2]{font-size:%?36?%;color:#f85e52}.footer .submit[data-v-5d3206f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#00ced1}.footer .cell-pd[data-v-5d3206f2]{padding:%?22?% %?30?%}.footer .list-pd[data-v-5d3206f2]{margin-top:%?50?%}body.?%PAGE?%[data-v-5d3206f2]{background:#dcdcdc}',""])},"98f0":function(t,e,i){"use strict";i.r(e);var l=i("4855"),a=i.n(l);for(var s in l)"default"!==s&&function(t){i.d(e,t,function(){return l[t]})}(s);e["default"]=a.a},b5ea:function(t,e,i){"use strict";var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("工单编号")]),i("v-uni-text",{staticClass:"cell-tip",model:{value:t.price,callback:function(e){t.price=e},expression:"price"}},[t._v("33312312")])],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("处置记录:")]),i("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"输入处置过程或记录","placeholder-class":"placeholder"}})],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("执行人:")]),i("v-uni-text",[t._v("张三")])],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("执行时间:")]),i("v-uni-text",[t._v("2019-3-3")])],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("派工地点:")]),i("v-uni-text",[t._v("无锡-滨湖区")])],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("任务内容:")]),i("v-uni-text",[t._v("维修设备")])],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("最迟时间:")]),i("v-uni-text",[t._v("2019-3-20")])],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("完成时间:")]),i("v-uni-text",[t._v("2019-3-11")])],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("派工人:")]),i("v-uni-text",[t._v("李四")])],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("派工时间:")]),i("v-uni-text",[t._v("2019-3-5")])],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"uni-list list-pd"},[i("v-uni-view",{staticClass:"uni-list-cell cell-pd"},[i("v-uni-view",{staticClass:"uni-uploader"},[i("v-uni-view",{staticClass:"uni-uploader-head"},[i("v-uni-view",{staticClass:"uni-uploader-title"},[t._v("相关资料图片")])],1),i("v-uni-view",{staticClass:"uni-uploader-body"},[i("v-uni-view",{staticClass:"uni-uploader__files"},[i("v-uni-view",{staticClass:"uni-uploader__file"},[i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:"/static/emptyCart.jpg","data-src":"/static/emptyCart.jpg"}})],1)],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("备注")]),i("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写备注信息","placeholder-class":"placeholder"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"price-content"},[i("v-uni-text",[t._v("工单状态：")]),i("v-uni-text",{staticClass:"price-tip"},[t._v("新建")])],1),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:""==t.order_no,expression:"order_no==''"}],staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交工单")])],1)],1)},a=[];i.d(e,"a",function(){return l}),i.d(e,"b",function(){return a})},cd7e:function(t,e,i){"use strict";var l=i("700b"),a=i.n(l);a.a},fef3:function(t,e,i){"use strict";i.r(e);var l=i("b5ea"),a=i("98f0");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("cd7e");var c=i("2877"),n=Object(c["a"])(a["default"],l["a"],l["b"],!1,null,"5d3206f2",null);e["default"]=n.exports}}]);