"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_utils=require("./utils");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(t,e){var r,o=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)),o}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}(0,_baseComponent.default)({useExport:!0,properties:_objectSpread({height:{type:Number,value:270}},(0,_utils.getDefaultProps)()),data:{scrollTop:0},methods:{onValueChange:function(e){var t=this.data,r=t.max,t=t.multiple,e=e.detail.selectedValue;t&&1<=r&&r<e.length||this.triggerEvent("selectChange",this.getValue(e))},getValue:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.data.value,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.data.options;return this.picker=this.picker||this.querySelector(_utils.POPUP_SELECTOR),this.picker&&this.picker.getValue(e,t)},expose:function(){var n=this;return{scrollToItem:function(o){var e,t;e=function(e){var t,r;t=o,e=e,r=n.data.options.length,-1!==(t=Array.isArray(t)?t[t.length-1]:t)&&void 0!==t||(t=0),e=1<=r?parseFloat(e/r*t):0,n.data.scrollTop!==e&&n.setData({scrollTop:e})},(t=n.querySelector(_utils.POPUP_SELECTOR))&&t.getBoundingClientRect&&t.getBoundingClientRect(e)},getValue:this.getValue.bind(this)}}}});