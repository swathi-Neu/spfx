define("a8b9102d-df13-412f-98a9-aac721cd68ad_0.0.1",["@microsoft/decorators","@microsoft/sp-core-library","@microsoft/sp-application-base","AddcustomfilesApplicationCustomizerStrings"],function(t,e,r,o){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(e,r){e.exports=t},function(t,r){t.exports=e},function(t,e){t.exports=r},,function(t,e){t.exports=o},,function(t,e,r){"use strict";r.r(e);var o,n=r(0),i=r(1),u=r(2),c=r(4),f=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),p=function(t,e,r,o){var n,i=arguments.length,u=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(u=(i<3?n(u):i>3?n(e,r,u):n(e,r))||u);return i>3&&u&&Object.defineProperty(e,r,u),u},l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f(e,t),e.prototype.onInit=function(){return i.Log.info("AddcustomfilesApplicationCustomizer","Initialized "+c.Title),Promise.resolve()},p([n.override],e.prototype,"onInit",null),e}(u.BaseApplicationCustomizer);e.default=l}])});