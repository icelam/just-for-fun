parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L4MM":[function(require,module,exports) {

},{}],"dVcS":[function(require,module,exports) {
"use strict";function t(){throw new Error("Cycle detected")}function i(){if(s>1)s--;else{for(var t,i=!1;void 0!==n;){var o=n;for(n=void 0,f++;void 0!==o;){var r=o.o;if(o.o=void 0,o.f&=-3,!(8&o.f)&&d(o))try{o.c()}catch(o){i||(t=o,i=!0)}o=r}}if(f=0,s--,i)throw t}}function o(t){if(s>0)return t();s++;try{return t()}finally{i()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Signal=v,exports.batch=o,exports.computed=y,exports.effect=b,exports.signal=u;var r=void 0,n=void 0,s=0,f=0,h=0;function e(t){if(void 0!==r){var i=t.n;if(void 0===i||i.t!==r)return i={i:0,S:t,p:r.s,n:void 0,t:r,e:void 0,x:void 0,r:i},void 0!==r.s&&(r.s.n=i),r.s=i,t.n=i,32&r.f&&t.S(i),i;if(-1===i.i)return i.i=0,void 0!==i.n&&(i.n.p=i.p,void 0!==i.p&&(i.p.n=i.n),i.p=r.s,i.n=void 0,r.s.n=i,r.s=i),i}}function v(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function u(t){return new v(t)}function d(t){for(var i=t.s;void 0!==i;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function c(t){for(var i=t.s;void 0!==i;i=i.n){var o=i.S.n;if(void 0!==o&&(i.r=o),i.S.n=i,i.i=-1,void 0===i.n){t.s=i;break}}}function p(t){for(var i=t.s,o=void 0;void 0!==i;){var r=i.p;-1===i.i?(i.S.U(i),void 0!==r&&(r.n=i.n),void 0!==i.n&&(i.n.p=r)):o=i,i.S.n=i.r,void 0!==i.r&&(i.r=void 0),i=r}t.s=o}function a(t){v.call(this,void 0),this.x=t,this.s=void 0,this.g=h-1,this.f=4}function y(t){return new a(t)}function l(t){var o=t.u;if(t.u=void 0,"function"==typeof o){s++;var n=r;r=void 0;try{o()}catch(i){throw t.f&=-2,t.f|=8,S(t),i}finally{r=n,i()}}}function S(t){for(var i=t.s;void 0!==i;i=i.n)i.S.U(i);t.x=void 0,t.s=void 0,l(t)}function x(t){if(r!==this)throw new Error("Out-of-order effect");p(this),r=t,this.f&=-2,8&this.f&&S(this),i()}function w(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function b(t){var i=new w(t);try{i.c()}catch(t){throw i.d(),t}return i.d.bind(i)}v.prototype.h=function(){return!0},v.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},v.prototype.U=function(t){if(void 0!==this.t){var i=t.e,o=t.x;void 0!==i&&(i.x=o,t.e=void 0),void 0!==o&&(o.e=i,t.x=void 0),t===this.t&&(this.t=o)}},v.prototype.subscribe=function(t){var i=this;return b(function(){var o=i.value,r=32&this.f;this.f&=-33;try{t(o)}finally{this.f|=r}})},v.prototype.valueOf=function(){return this.value},v.prototype.toString=function(){return this.value+""},v.prototype.toJSON=function(){return this.value},v.prototype.peek=function(){return this.v},Object.defineProperty(v.prototype,"value",{get:function(){var t=e(this);return void 0!==t&&(t.i=this.i),this.v},set:function(o){if(r instanceof a&&function(){throw new Error("Computed cannot have side-effects")}(),o!==this.v){f>100&&t(),this.v=o,this.i++,h++,s++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{i()}}}}),(a.prototype=new v).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===h)return!0;if(this.g=h,this.f|=1,this.i>0&&!d(this))return this.f&=-2,!0;var t=r;try{c(this),r=this;var i=this.x();(16&this.f||this.v!==i||0===this.i)&&(this.v=i,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return r=t,p(this),this.f&=-2,!0},a.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var i=this.s;void 0!==i;i=i.n)i.S.S(i)}v.prototype.S.call(this,t)},a.prototype.U=function(t){if(void 0!==this.t&&(v.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var i=this.s;void 0!==i;i=i.n)i.S.U(i)}},a.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},a.prototype.peek=function(){if(this.h()||t(),16&this.f)throw this.v;return this.v},Object.defineProperty(a.prototype,"value",{get:function(){1&this.f&&t();var i=e(this);if(this.h(),void 0!==i&&(i.i=this.i),16&this.f)throw this.v;return this.v}}),w.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var i=this.x();"function"==typeof i&&(this.u=i)}finally{t()}},w.prototype.S=function(){1&this.f&&t(),this.f|=1,this.f&=-9,l(this),c(this),s++;var i=r;return r=this,x.bind(this,i)},w.prototype.N=function(){2&this.f||(this.f|=2,this.o=n,n=this)},w.prototype.d=function(){this.f|=8,1&this.f||S(this)};
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./styles/index.scss");var t=require("@preact/signals-core");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(){r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(P){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,c=Object.create(o.prototype),a=new O(n||[]);return i(c,"_invoke",{value:S(t,r,a)}),c}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var y={};function v(){}function p(){}function d(){}var m={};f(m,a,function(){return this});var g=Object.getPrototypeOf,w=g&&g(g(j([])));w&&w!==n&&o.call(w,a)&&(m=w);var b=d.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function L(t,r){var n;i(this,"_invoke",{value:function(i,c){function a(){return new r(function(n,a){!function n(i,c,a,u){var l=h(t[i],t,c);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==e(s)&&o.call(s,"__await")?r.resolve(s.__await).then(function(t){n("next",t,a,u)},function(t){n("throw",t,a,u)}):r.resolve(s).then(function(t){f.value=t,a(f)},function(t){return n("throw",t,a,u)})}u(l.arg)}(i,c,n,a)})}return n=n?n.then(a,a):a()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=q(c,r);if(a){if(a===y)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function q(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,q(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,i(b,"constructor",{value:d,configurable:!0}),i(d,"constructor",{value:p,configurable:!0}),p.displayName=f(d,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,f(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),f(L.prototype,u,function(){return this}),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then(function(t){return t.done?t.value:c.next()})},x(b),f(b,l,"Generator"),f(b,a,function(){return this}),f(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),y}},t}function n(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(l){return void r(l)}a.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)})}}var i=document.querySelector("#counter-ten-cents"),c=document.querySelector("#counter-twenty-cents"),a=document.querySelector("#counter-fifty-cents"),u=document.querySelector("#counter-one-dollar"),l=document.querySelector("#counter-two-dollars"),f=document.querySelector("#counter-five-dollars"),s=document.querySelector("#counter-ten-dollars"),h=(0,t.signal)(0),y=(0,t.signal)(0),v=(0,t.signal)(0),p=(0,t.signal)(0),d=(0,t.signal)(0),m=(0,t.signal)(0),g=(0,t.signal)(0),w=(0,t.computed)(function(){return(1*h+2*y+5*v+10*p+20*d+50*m+100*g)/10}),b=(0,t.computed)(function(){return h+y+v+p+d+m+g});(0,t.effect)(function(){i.querySelector(".quantity").textContent=h.value}),(0,t.effect)(function(){c.querySelector(".quantity").textContent=y.value}),(0,t.effect)(function(){a.querySelector(".quantity").textContent=v.value}),(0,t.effect)(function(){u.querySelector(".quantity").textContent=p.value}),(0,t.effect)(function(){l.querySelector(".quantity").textContent=d.value}),(0,t.effect)(function(){f.querySelector(".quantity").textContent=m.value}),(0,t.effect)(function(){s.querySelector(".quantity").textContent=g.value});var x,L=document.querySelector(".toast"),S=L.animate([{bottom:0,opacity:0},{bottom:"1.5rem",opacity:1}],{duration:300,easing:"ease-in-out",iterations:1});S.cancel();var q=!1;(0,t.effect)(function(){clearTimeout(x),L.textContent="You have ".concat(b," coins with a total value of HK$").concat(w),q&&(S.cancel(),q=!1),("visible"!==L.style.visibility||q)&&(S.playbackRate=1,S.play()),L.style.visibility="visible",x=setTimeout(o(r().mark(function t(){var e;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return q=!0,e=new Promise(function(t){S.onfinish=t}),S.playbackRate=-1,S.play(),t.next=6,e;case 6:L.style.visibility="hidden",q=!1;case 8:case"end":return t.stop()}},t)})),2e3)});var E=[{element:i,counter:h},{element:c,counter:y},{element:a,counter:v},{element:u,counter:p},{element:l,counter:d},{element:f,counter:m},{element:s,counter:g}];E.forEach(function(t){var e=t.element,r=t.counter;e.querySelector(".plus-button").addEventListener("click",function(){r.value++}),e.querySelector(".minus-button").addEventListener("click",function(){r.value>0&&r.value--})});
},{"./styles/index.scss":"L4MM","@preact/signals-core":"dVcS"}]},{},["Focm"], null)
//# sourceMappingURL=/src.702ea807.js.map