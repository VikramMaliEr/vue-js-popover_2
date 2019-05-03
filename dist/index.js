!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports["vue_js_popover"]=t(require("vue")):e["vue_js_popover"]=t(e.vue)}(window,function(n){return function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=5)}([function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(6).default)("66dcfc90",o,!0,{})},function(e,t){e.exports=n},function(e,t,n){"use strict";var o=n(0);n.n(o).a},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".vue-popover{display:block;position:absolute;background:#fff;box-shadow:0px 4px 20px 0px rgba(52,73,94,0.2);padding:5px;border-radius:5px;z-index:998}.vue-popover:before{display:block;position:absolute;width:0;height:0;content:''}.vue-popover.dropdown-position-bottom:before{border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;top:-6px;left:calc(50% - 6px);filter:drop-shadow(0px -2px 2px rgba(52,73,94,0.1))}.vue-popover.dropdown-position-top:before{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #fff;bottom:-6px;left:calc(50% - 6px);filter:drop-shadow(0px 2px 2px rgba(52,73,94,0.1))}.vue-popover.dropdown-position-left:before{border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid #fff;right:-6px;top:calc(50% - 6px);filter:drop-shadow(2px 0px 2px rgba(52,73,94,0.1))}.vue-popover.dropdown-position-right:before{border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:6px solid #fff;left:-6px;top:calc(50% - 6px);filter:drop-shadow(-2px 0px 2px rgba(52,73,94,0.1))}\n",""])},function(e,t,n){"use strict";e.exports=function(n){var s=[];return s.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var s;return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},s.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(n[r]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&n[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),s.push(i))}},s}},function(e,t,n){"use strict";n.r(t);var o=n(1),g=new(n.n(o).a);var s={left:[-1,0],right:[1,0],top:[0,1],bottom:[0,-1]},r={name:"Popover",render:function(e){if(this.visible)return e("div",{class:this.className,style:this.style,attrs:{"data-popover":this.name},on:{click:function(e){e.stopPropagation()}},ref:"dropdown"},this.$slots.default)},props:{name:{type:String,required:!0},width:{type:Number,default:180},pointer:{type:Boolean,default:!0},event:{type:String,default:"click"},anchor:{type:Number,default:.5,validator:function(e){return 0<=e&&e<=1}}},data:function(){return{visible:!1,positionClass:"",position:{left:0,top:0}}},mounted:function(){g.$on(this.showEventName,this.showEventListener),g.$on(this.hideEventName,this.hideEventListener)},beforeDestroy:function(){g.$off(this.showEventName,this.showEventListener),g.$off(this.hideEventName,this.hideEventListener)},computed:{showEventName:function(){return"show:".concat(this.event)},hideEventName:function(){return"hide:".concat(this.event)},className:function(){return["vue-popover",this.pointer&&this.positionClass]},style:function(){return function(r){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,o;t=r,o=i[n=e],n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o})}return r}({width:"".concat(this.width,"px")},this.position)}},methods:{showEventListener:function(r){var i=this;this.visible?g.$emit(this.hideEventName):this.$nextTick(function(){var t=r.target,e=r.name,n=r.position;if(e===i.name){var o=s[n];i.positionClass="dropdown-position-".concat(n),i.visible=!0,i.$nextTick(function(){i.$emit("show",r),i.$nextTick(function(){var e=i.getDropdownPosition(t,i.$refs.dropdown,o);i.position={left:"".concat(e.left,"px"),top:"".concat(e.top,"px")}})})}})},hideEventListener:function(e){this.visible&&(this.visible=!1,this.$emit("hide",e))},getDropdownPosition:function(e,t,n){var o=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,s=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,a=o.left+s,p=o.top+i,u=.5*(r.height+o.height),c=a-.5*(r.width-o.width),l=p+o.height-u,d=.5*n[0]*(r.width+o.width),f=n[1]*u;return this.pointer&&(d+=6*n[0],f+=6*n[1]),{left:c+d,top:l-f}}}};n(2);function i(e,t,n,o,r,i,s,a){var p,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=p):r&&(p=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),p)if(u.functional){u._injectStyles=p;var c=u.render;u.render=function(e,t){return p.call(t),c(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,p):[p]}return{exports:e,options:u}}var a=i(r,void 0,void 0,!1,null,null,null);a.options.__file="Popover.vue";var p=a.exports,u=i({name:"Tooltip",props:{event:{type:String,default:"hover"},pointer:{type:Boolean,default:!1},width:{type:Number,default:160}},data:function(){return{value:""}}},function(){var t=this,e=t.$createElement;return(t._self._c||e)("popover",{attrs:{name:"tooltip",pointer:t.pointer,width:t.width,event:t.event},on:{show:function(e){t.value=e.value}}},[t._v("\n  "+t._s(t.value)+"\n")])},[],!1,null,null,null);u.options.__file="Tooltip.vue";var c=u.exports;function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(e){l(t,e,n[e])})}return t}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.default={install:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};document.addEventListener("resize",function(e){g.$emit("hide",{srcEvent:e})}),e.component("Popover",p),e.directive("popover",{bind:function(e,t){var n,o,r,i,s,a,p,u,c,l,d,f,v,h,m,b=(o=(n=t).arg,r=void 0===o?"":o,i=n.modifiers,s=void 0===i?{}:i,a=n.value,p=void 0===a?{}:a,u=Object.keys(s),{name:"object"===x(p)&&p.name?p.name:r,position:u[0]||p.position||"bottom",value:p});l=b,d=function(e){g.$emit("show:click",y({},l,{target:c,srcEvent:e})),document.addEventListener("click",function e(t){g.$emit("hide:click",y({},l,{target:c,srcEvent:t})),document.removeEventListener("click",e)}),e.stopPropagation()},(c=e).addEventListener("click",d),c.$popoverRemoveClickHandlers=function(){c.removeEventListener("click",d)},v=b,h=function(e){g.$emit("show:hover",y({},v,{target:f,srcEvent:e}))},m=function(e){g.$emit("hide:hover",y({},v,{target:f,srcEvent:e}))},(f=e).addEventListener("mouseenter",h),f.addEventListener("mouseleave",m),f.$popoverRemoveHoverHandlers=function(){f.removeEventListener("mouseenter",h),f.removeEventListener("mouseleave",m)}},unbind:function(e,t){e.$popoverRemoveHoverHandlers(),e.$popoverRemoveClickHandlers()}}),t.tooltip&&(t.debug&&console.log("vue_js_popover | tooltip active"),e.component("Tooltip",c))}}},function(e,t,n){"use strict";function p(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",function(){return v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u={},r=o&&(document.head||document.getElementsByTagName("head")[0]),i=null,s=0,c=!1,a=function(){},l=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(s,e,t,n){c=t,l=n||{};var a=p(s,e);return h(a),function(e){for(var t=[],n=0;n<a.length;n++){var o=a[n];(r=u[o.id]).refs--,t.push(r)}e?h(a=p(s,e)):a=[];for(n=0;n<t.length;n++){var r;if(0===(r=t[n]).refs){for(var i=0;i<r.parts.length;i++)r.parts[i]();delete u[r.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=u[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(b(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var i=[];for(r=0;r<n.parts.length;r++)i.push(b(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:i}}}}function m(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function b(t){var n,o,e=document.querySelector("style["+d+'~="'+t.id+'"]');if(e){if(c)return a;e.parentNode.removeChild(e)}if(f){var r=s++;e=i||(i=m()),n=x.bind(null,e,r,!1),o=x.bind(null,e,r,!0)}else e=m(),n=function(e,t){var n=t.css,o=t.media,r=t.sourceMap;o&&e.setAttribute("media",o);l.ssrId&&e.setAttribute(d,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,e),o=function(){e.parentNode.removeChild(e)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}var g,y=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}}])});
//# sourceMappingURL=index.js.map
