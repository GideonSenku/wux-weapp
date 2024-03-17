"use strict";function _typeof(r){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _shallowEqual=_interopRequireDefault(require("../libs/shallowEqual")),_isEmpty=require("../shared/isEmpty");function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function ownKeys(e,r){var t,o=Object.keys(e);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(e),r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)),o}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(r,e,t){return(e=_toPropertyKey(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function _toPropertyKey(r){r=_toPrimitive(r,"string");return"symbol"==_typeof(r)?r:String(r)}function _toPrimitive(r,e){if("object"!=_typeof(r)||!r)return r;var t=r[Symbol.toPrimitive];if(void 0===t)return("string"===e?String:Number)(r);t=t.call(r,e||"default");if("object"!=_typeof(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){var t;if(r)return"string"==typeof r?_arrayLikeToArray(r,e):"Map"===(t="Object"===(t=Object.prototype.toString.call(r).slice(8,-1))&&r.constructor?r.constructor.name:t)||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function _iterableToArrayLimit(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var o,n,i,a,u=[],l=!0,y=!1;try{if(i=(t=t.call(r)).next,0===e){if(Object(t)!==t)return;l=!1}else for(;!(l=(o=i.call(t)).done)&&(u.push(o.value),u.length!==e);l=!0);}catch(r){y=!0,n=r}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(y)throw n}}return u}}function _arrayWithHoles(r){if(Array.isArray(r))return r}var ALL_DATA_KEY="**",trim=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").replace(/\s/g,"")},_default=exports.default=Behavior({lifetimes:{attached:function(){this.initComputed()}},definitionFilter:function(r){var e=r.computed,o=void 0===e?{}:e,n=Object.keys(o).reduce(function(r,i){var e=_slicedToArray(Array.isArray(o[i])?o[i]:[ALL_DATA_KEY,o[i]],2),t=e[0],a=e[1];return _objectSpread(_objectSpread({},r),{},_defineProperty({},t,function(){if("function"==typeof a){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o=a.apply(this,e),n=this.data[i];(0,_isEmpty.isEmpty)(o)||(0,_shallowEqual.default)(o,n)||this.setData(_defineProperty({},i,o))}}))},{});Object.assign(r.observers=r.observers||{},n),Object.assign(r.methods=r.methods||{},{initComputed:function(){var t,o,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};(!this.runInitComputed||1<arguments.length&&void 0!==arguments[1]&&arguments[1])&&(this.runInitComputed=!1,o=_objectSpread(_objectSpread({},(t=this).data),r),Object.keys(n).forEach(function(r){var e=trim(r).split(",").reduce(function(r,e){return[].concat(_toConsumableArray(r),[o[e]])},[]);n[r].apply(t,e)}),this.runInitComputed=!0)}})}});