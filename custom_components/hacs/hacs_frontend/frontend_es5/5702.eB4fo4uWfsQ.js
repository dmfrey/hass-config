"use strict";(self.webpackChunkhacs_frontend=self.webpackChunkhacs_frontend||[]).push([[5702],{15702:function(e,t,a){a.r(t),a.d(t,{HaSelectorSelector:function(){return x}});var n,o,l=a(14842),i=a(64599),r=a(91001),s=a(41981),c=a(35806),d=a(71008),u=a(62193),m=a(2816),p=a(27927),h=(a(81027),a(97741),a(50693),a(26098),a(10507),a(9241),a(16891),a(66360)),b=a(29818),v=a(94100),f=a(50880),y=(a(77477),a(88606),{number:{min:1,max:100}}),k={action:[],area:[{name:"multiple",selector:{boolean:{}}}],attribute:[{name:"entity_id",selector:{entity:{}}}],boolean:[],color_temp:[{name:"unit",selector:{select:{options:["kelvin","mired"]}}},{name:"min",selector:{number:{mode:"box"}}},{name:"max",selector:{number:{mode:"box"}}}],condition:[],date:[],datetime:[],device:[{name:"multiple",selector:{boolean:{}}}],duration:[{name:"enable_day",selector:{boolean:{}}}],entity:[{name:"multiple",selector:{boolean:{}}}],floor:[{name:"multiple",selector:{boolean:{}}}],icon:[],location:[],media:[],number:[{name:"min",selector:{number:{mode:"box",step:"any"}}},{name:"max",selector:{number:{mode:"box",step:"any"}}},{name:"step",selector:{number:{mode:"box",step:"any"}}}],object:[],color_rgb:[],select:[{name:"options",selector:{object:{}}},{name:"multiple",selector:{boolean:{}}}],state:[{name:"entity_id",selector:{entity:{}}}],target:[],template:[],text:[{name:"multiple",selector:{boolean:{}}},{name:"multiline",selector:{boolean:{}}},{name:"prefix",selector:{text:{}}},{name:"suffix",selector:{text:{}}}],theme:[],time:[]},x=(0,p.A)([(0,b.EM)("ha-selector-selector")],(function(e,t){var a=function(t){function a(){var t;(0,d.A)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return t=(0,u.A)(this,a,[].concat(o)),e(t),t}return(0,m.A)(a,t),(0,c.A)(a)}(t);return{F:a,d:[{kind:"field",decorators:[(0,b.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.MZ)({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[(0,b.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,b.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,b.MZ)({type:Boolean,reflect:!0})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,b.MZ)({type:Boolean,reflect:!0})],key:"required",value:function(){return!0}},{kind:"field",key:"_yamlMode",value:function(){return!1}},{kind:"method",key:"shouldUpdate",value:function(e){return 1!==e.size||!e.has("hass")}},{kind:"field",key:"_schema",value:function(){return(0,v.A)((function(e,t){return[{name:"type",selector:{select:{mode:"dropdown",required:!0,options:Object.keys(k).concat("manual").map((function(e){return{label:t("ui.components.selectors.selector.types.".concat(e))||e,value:e}}))}}}].concat((0,s.A)("manual"===e?[{name:"manual",selector:{object:{}}}]:[]),(0,s.A)(k[e]?k[e].length>1?[{name:"",type:"expandable",title:t("ui.components.selectors.selector.options"),schema:k[e]}]:k[e]:[]))}))}},{kind:"method",key:"render",value:function(){var e,t;if(this._yamlMode)e={type:t="manual",manual:this.value};else{t=Object.keys(this.value)[0];var a=Object.values(this.value)[0];e=Object.assign({type:t},"object"===(0,r.A)(a)?a:[])}var o=this._schema(t,this.hass.localize);return(0,h.qy)(n||(n=(0,i.A)(['<ha-card> <div class="card-content"> <p>','</p> <ha-form .hass="','" .data="','" .schema="','" .computeLabel="','" @value-changed="','"></ha-form></div></ha-card>'])),this.label?this.label:"",this.hass,e,o,this._computeLabelCallback,this._valueChanged)}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();var t=e.detail.value,a=t.type;if(a&&"object"===(0,r.A)(t)&&0!==Object.keys(t).length){var n,o=Object.keys(this.value)[0];if("manual"===a&&!this._yamlMode)return this._yamlMode=!0,void this.requestUpdate();if("manual"!==a||void 0!==t.manual)"manual"!==a&&(this._yamlMode=!1),delete t.type,n="manual"===a?t.manual:a===o?(0,l.A)({},a,Object.assign({},t.manual?t.manual[o]:t)):(0,l.A)({},a,Object.assign({},y[a])),(0,f.r)(this,"value-changed",{value:n})}}},{kind:"field",key:"_computeLabelCallback",value:function(){var e=this;return function(t){return e.hass.localize("ui.components.selectors.selector.".concat(t.name))||t.name}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.AH)(o||(o=(0,i.A)([":host{--expansion-panel-summary-padding:0 16px}ha-alert{display:block;margin-bottom:16px}ha-card{margin:0 0 16px 0}ha-card.disabled{pointer-events:none;color:var(--disabled-text-color)}.card-content{padding:0px 16px 16px 16px}.title{font-size:16px;padding-top:16px;overflow:hidden;text-overflow:ellipsis;margin-bottom:16px;padding-left:16px;padding-right:4px;padding-inline-start:16px;padding-inline-end:4px;white-space:nowrap}"])))}}]}}),h.WF)}}]);
//# sourceMappingURL=5702.eB4fo4uWfsQ.js.map