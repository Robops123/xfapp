(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hidTrouble-hidTroubleEdit~pages-hidTrouble-hidTroubleList~pages-index-index~pages-login-login~~313906f4"],{"3b8d":function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return a});var n=r("795b"),o=r.n(n);function i(t,e,r,n,i,a,u){try{var c=t[a](u),s=c.value}catch(f){return void r(f)}c.done?e(s):o.a.resolve(s).then(n,i)}function a(t){return function(){var e=this,r=arguments;return new o.a(function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)})}}},"62a8":function(t,e,r){"use strict";var n=r("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("3b8d"));if(!i)var i={};function a(){return u.apply(this,arguments)}function u(){return u=(0,o.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:uni.showLoading({title:"请等待",mask:!0});case 1:case"end":return t.stop()}},t,this)})),u.apply(this,arguments)}function c(){return s.apply(this,arguments)}function s(){return s=(0,o.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:uni.hideLoading();case 1:case"end":return t.stop()}},t,this)})),s.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=(0,o.default)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:uni.showToast({title:e||e.msg,mask:!0,icon:0==e.status?"success":"",duration:1500});case 1:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}i.PATH="http://47.103.152.26/api";var l={showLoading:a,hideLoading:c,showToast:f};e.default=l},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"===typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=e.regeneratorRuntime=s?t.exports:{},f.wrap=x;var h="suspendedStart",l="suspendedYield",p="executing",d="completed",y={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(S([])));w&&w!==n&&o.call(w,a)&&(v=w);var m=_.prototype=b.prototype=Object.create(v);E.prototype=m.constructor=_,_.constructor=E,_[c]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[u]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,r,n){var o=new j(x(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},k(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=S,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function x(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=R(t,r,a),i}function L(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function b(){}function E(){}function _(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){function e(r,n,i,a){var u=L(t[r],t,n);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function R(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return A()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var u=T(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=L(t,e,r);if("normal"===c.type){if(n=r.done?d:l,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function T(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,T(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:A}}function A(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},f0e2:function(t,e,r){"use strict";var n=r("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("795b"));r("96cf");var i=n(r("3b8d")),a=n(r("62a8")),u="http://47.103.152.26:9089/api";function c(t,e){return s.apply(this,arguments)}function s(){return s=(0,i.default)(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r||console.warn("没有传入参数params"),t.next=3,new o.default(function(t,n){uni.request({url:u+e,method:"POST",header:{Accept:"application/json",Authorization:"Bearer "+uni.getStorageSync("Authorization"),"content-type":"application/x-www-form-urlencoded"},data:r,success:function(e){t(e.data)},fail:function(t){a.default.hideLoading(),n(t)}})});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)})),s.apply(this,arguments)}function f(t,e){return h.apply(this,arguments)}function h(){return h=(0,i.default)(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r||console.warn("没有传入参数params"),t.next=3,new o.default(function(t,n){uni.request({url:u+e,method:"GET",header:{Authorization:"Bearer "+uni.getStorageSync("Authorization"),Accept:"application/json","content-type":"application/x-www-form-urlencoded"},timeout:6e3,data:r,success:function(e){t(e.data)},fail:function(t){a.default.hideLoading(),n(t)}})});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return p=(0,i.default)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new o.default(function(t,r){uni.request({url:u+"/login",method:"GET",data:e,success:function(e){t(e.data)},fail:function(t){a.default.hideLoading(),r(t)}})});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)})),p.apply(this,arguments)}var d={baseURL:u,apiPost:c,apiGet:f,login:l};e.default=d}}]);