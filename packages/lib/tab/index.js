"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_classNames3=_interopRequireDefault(require("../helpers/libs/classNames")),_getDefaultContext=require("../helpers/shared/getDefaultContext"),_useDOM=require("../helpers/hooks/useDOM"),_props=require("../tabs/props");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}var defaultContext=(0,_getDefaultContext.getDefaultContext)(_props.props,["scroll","theme","direction","activeLineMode"]);(0,_baseComponent.default)({relations:{"../tabs/index":{type:"parent"}},properties:{prefixCls:{type:String,value:"wux-tabs__tab"},key:{type:String,value:""},title:{type:String,value:""},disabled:{type:Boolean,value:!1}},data:{current:!1,context:defaultContext},computed:{classes:["prefixCls, disabled, current, context",function(e,t,r,o){var n=o.direction,i=o.scroll,a=o.theme,o=o.activeLineMode;return{wrap:(0,_classNames3.default)(e,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"".concat(e,"--").concat(n),n),"".concat(e,"--").concat(a),a),"".concat(e,"--scroll"),i),"".concat(e,"--current"),r),"".concat(e,"--disabled"),t)),title:"".concat(e,"-title"),bar:(0,_classNames3.default)("".concat(e,"-bar"),_defineProperty({},"".concat(e,"-bar--").concat(o),o))}}]},methods:{activeTabRef:function(){var t=this;return new Promise(function(n){var e=t.data.prefixCls;(0,_useDOM.useRect)(".".concat(e),t).then(function(e){var t=e.left,r=e.width,o=e.top,e=e.height;n({activeTabLeft:t,activeTabWidth:r,activeTabTop:o,activeTabHeight:e})})})},changeCurrent:function(e){var t=e.current,e=e.context;this.setData({current:t,context:void 0===e?defaultContext:e})},onTap:function(){var e=this.data,t=e.key,e=e.disabled,r=this.getRelationsByName("../tabs/index")[0];!e&&r&&(this.triggerEvent("click",{key:t}),r.setActiveKey(t))}}});