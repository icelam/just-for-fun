var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequiree857;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,i.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},t.parcelRequiree857=i),i.register("kOHZq",function(t,e){"use strict";var n,i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,a){function s(t){try{c(i.next(t))}catch(t){a(t)}}function r(t){try{c(i.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):((e=t.value)instanceof n?e:new n(function(t){t(e)})).then(s,r)}c((i=i.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,i,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(r){return function(c){return function(r){if(n)throw TypeError("Generator is already executing.");for(;a&&(a=0,r[0]&&(s=0)),s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}},a=function(){function t(t,e,n,i){this.isDrawing=!1,this.checkDebounceDuration=100,this.hasWon=!1;var o=t?document.querySelector(t):null,a=e?document.querySelector(e):null,s=n?document.querySelector(n):null;if(!o)throw Error("NULLISH_CANVAS");if(!a)throw Error("NULLISH_PRIZE_TEXT");if(!s)throw Error("NULLISH_RESET_BUTTON");this.canvas=o,this.prizeText=a,this.resetButton=s;var r=this.canvas.getContext("2d",{willReadFrequently:!0});if(!r)throw Error("NULLISH_CONTEXT");this.context=r,this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,this.removableLayerColor=i,this.canvasAnimation=this.canvas.animate([{opacity:"1"},{opacity:"0"}],{duration:200,easing:"ease-in-out",iterations:1,fill:"forwards"}),this.canvasAnimation.cancel(),this.prizeTextAnimation=this.prizeText.animate([{transform:"none"},{transform:"scale(1.125)"},{transform:"none"}],{duration:600,easing:"ease-in-out",iterations:1,fill:"forwards"}),this.prizeTextAnimation.cancel()}return t.prototype.getMousePosition=function(t){var e=this.canvas.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}},t.prototype.getTouchPosition=function(t){var e=document.documentElement,n=this.canvas.getBoundingClientRect(),i=n.top+window.pageYOffset-e.clientTop,o=n.left+window.pageXOffset-e.clientLeft,a=t.targetTouches[0]||t.changedTouches[0];return{touchX:a.pageX-o,touchY:a.pageY-i}},t.prototype.canvasMouseDown=function(t){this.isDrawing=!0;var e=this.getMousePosition(t),n=e.x,i=e.y;this.context.beginPath(),this.context.moveTo(n,i)},t.prototype.canvasMouseMove=function(t){if(this.isDrawing){var e=this.getMousePosition(t),n=e.x,i=e.y;this.context.lineTo(n,i),this.context.stroke()}},t.prototype.canvasMouseUp=function(t){if(this.isDrawing){var e=this.getMousePosition(t),n=e.x,i=e.y;return this.context.lineTo(n,i),this.context.stroke(),this.isDrawing=!1,!0}return!1},t.prototype.canvasTouchStart=function(t){if(t.preventDefault(),!this.isDrawing){this.isDrawing=!0;var e=this.getTouchPosition(t),n=e.touchX,i=e.touchY;return this.context.beginPath(),this.context.moveTo(n,i),!0}return!1},t.prototype.canvasTouchMove=function(t){if(t.preventDefault(),this.isDrawing){var e=this.getTouchPosition(t),n=e.touchX,i=e.touchY;this.context.lineTo(n,i),this.context.stroke()}},t.prototype.canvasTouchEnd=function(t){var e=this.getTouchPosition(t),n=e.touchX,i=e.touchY;this.context.lineTo(n,i),this.context.stroke(),this.isDrawing=!1},t.prototype.addRemovableLayer=function(){this.context.globalCompositeOperation="source-over",this.context.fillStyle=this.removableLayerColor,this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.context.globalCompositeOperation="destination-out"},t.prototype.isPrizeTextVisible=function(){for(var t=this.prizeText.clientWidth,e=this.prizeText.clientHeight,n=this.context.getImageData((this.canvasWidth-t)/2,(this.canvasHeight-e)/2,t,e).data,i=0,o=0;o<n.length;o+=4){var a=n[o],s=n[o+1],r=n[o+2],c=n[o+3];0===a&&0===s&&0===r&&0===c&&i++}return 100*i/(t*e)>=90},t.prototype.showWinningAnimation=function(){return i(this,void 0,void 0,function(){return o(this,function(t){return this.hasWon||(this.hasWon=!0,this.canvasAnimation.play(),this.prizeTextAnimation.play()),[2]})})},t.prototype.reset=function(){this.canvasAnimation.cancel(),this.prizeTextAnimation.cancel(),this.addRemovableLayer(),this.hasWon=!1},t.prototype.init=function(){var t=this;this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=30,this.context.strokeStyle="#000000",this.addRemovableLayer();var e=void 0;this.canvas.addEventListener("mousedown",function(e){t.canvasMouseDown(e)}),window.addEventListener("mousemove",function(e){t.canvasMouseMove(e)}),window.addEventListener("mouseup",function(e){t.canvasMouseUp(e)&&t.isPrizeTextVisible()&&t.showWinningAnimation()}),this.canvas.addEventListener("touchstart",function(n){window.clearTimeout(e),t.canvasTouchStart(n)}),this.canvas.addEventListener("touchmove",function(e){t.canvasTouchMove(e)}),this.canvas.addEventListener("touchend",function(n){t.canvasTouchEnd(n),window.clearTimeout(e),e=window.setTimeout(function(){t.isPrizeTextVisible()&&t.showWinningAnimation()},t.checkDebounceDuration)}),this.resetButton.addEventListener("click",this.reset.bind(this))},t}();null===(n=null==t?void 0:t.hot)||void 0===n||n.dispose(function(){window.location.reload()}),new a("#scratch-canvas","#prize-text","#scratch-reset-button","#B7B7B7").init()}),i("kOHZq");
//# sourceMappingURL=index.df949aa2.js.map
