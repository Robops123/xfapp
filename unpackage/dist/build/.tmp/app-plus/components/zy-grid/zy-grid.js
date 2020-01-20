(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/zy-grid/zy-grid"],{"1ced":function(t,e,n){"use strict";var a=n("9253"),r=n.n(a);r.a},"20f2":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},"37b9":function(t,e,n){"use strict";n.r(e);var a=n("20f2"),r=n("4e71");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("1ced");var s,o=n("f0c5"),u=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"a951c48e",null,!1,a["a"],s);e["default"]=u.exports},"4e71":function(t,e,n){"use strict";n.r(e);var a=n("9f35"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},9253:function(t,e,n){},"9f35":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"zy-grid",props:{col:{type:Number,value:3},showTip:{type:Boolean,value:!0}},data:function(){return{gridList:[{name:"巡检记录",imgUrl:"../../static/img/xcjl.png",tips:"巡检记录随时查",rote:"/pages/startPatrol/startPatrolList"},{name:"隐患上报",imgUrl:"../../static/img/yhsb.png",tips:"发现隐患随手报",rote:"/pages/hidTrouble/hidTroubleList?p=asd&s=dsds"},{name:"告警信息",imgUrl:"../../static/img/gj.png",tips:"随时查看告警情况",rote:"/pages/message/message?p=asd&s=dsds"}]}},methods:{gridClick:function(e,n){t.navigateTo({url:e.rote})},topatrol:function(){t.navigateTo({url:"/pages/startPatrol/startPatrol"})}}};e.default=n}).call(this,n("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/zy-grid/zy-grid-create-component',
    {
        'components/zy-grid/zy-grid-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("37b9"))
        })
    },
    [['components/zy-grid/zy-grid-create-component']]
]);
