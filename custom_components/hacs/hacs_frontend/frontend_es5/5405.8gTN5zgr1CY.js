"use strict";(self.webpackChunkhacs_frontend=self.webpackChunkhacs_frontend||[]).push([[5405],{1040:function(t,e,n){n.d(e,{A:function(){return i}});n(81027);var a=function(t){return t<10?"0".concat(t):t};function i(t){var e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=Math.floor(t%3600%60);return e>0?"".concat(e,":").concat(a(n),":").concat(a(i)):n>0?"".concat(n,":").concat(a(i)):i>0?""+i:null}},54708:function(t,e,n){n.d(e,{PF:function(){return c},CR:function(){return i},ls:function(){return r}});n(81027),n(26098),n(97741),n(29193),n(16891);var a=n(1040),i=function(t,e){return t.callWS(Object.assign({type:"timer/create"},e))},r=function(t){if(t.attributes.remaining){var e,n,a=(e=t.attributes.remaining,3600*(n=e.split(":").map(Number))[0]+60*n[1]+n[2]);if("active"===t.state){var i=(new Date).getTime(),r=new Date(t.last_changed).getTime();a=Math.max(a-(i-r)/1e3,0)}return a}},c=function(t,e,n){if(!e)return null;if("idle"===e.state||0===n)return t.formatEntityState(e);var i=(0,a.A)(n||0)||"0";return"paused"===e.state&&(i="".concat(i," (").concat(t.formatEntityState(e),")")),i}},5405:function(t,e,n){n.r(e);var a=n(35806),i=n(71008),r=n(62193),c=n(2816),o=n(27927),u=n(14562),l=n(19867),s=(n(81027),n(66360)),d=n(29818),h=n(54708);(0,o.A)([(0,d.EM)("ha-timer-remaining-time")],(function(t,e){var n=function(e){function n(){var e;(0,i.A)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return e=(0,r.A)(this,n,[].concat(c)),t(e),e}return(0,c.A)(n,e),(0,a.A)(n)}(e);return{F:n,d:[{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,d.wk)()],key:"timeRemaining",value:void 0},{kind:"field",key:"_updateRemaining",value:void 0},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(t){var e;(0,u.A)((0,l.A)(n.prototype),"update",this).call(this,t),this.innerHTML=null!==(e=(0,h.PF)(this.hass,this.stateObj,this.timeRemaining))&&void 0!==e?e:"-"}},{kind:"method",key:"connectedCallback",value:function(){(0,u.A)((0,l.A)(n.prototype),"connectedCallback",this).call(this),this.stateObj&&this._startInterval(this.stateObj)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,u.A)((0,l.A)(n.prototype),"disconnectedCallback",this).call(this),this._clearInterval()}},{kind:"method",key:"willUpdate",value:function(t){(0,u.A)((0,l.A)(n.prototype),"willUpdate",this).call(this,t),t.has("stateObj")&&this._startInterval(this.stateObj)}},{kind:"method",key:"_clearInterval",value:function(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=null)}},{kind:"method",key:"_startInterval",value:function(t){var e=this;this._clearInterval(),this._calculateRemaining(t),"active"===t.state&&(this._updateRemaining=setInterval((function(){return e._calculateRemaining(e.stateObj)}),1e3))}},{kind:"method",key:"_calculateRemaining",value:function(t){this.timeRemaining=(0,h.ls)(t)}}]}}),s.mN)}}]);
//# sourceMappingURL=5405.8gTN5zgr1CY.js.map