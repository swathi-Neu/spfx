define("98f88d43-be34-48a7-93d8-05de5aa4a9d9_0.0.1", ["@microsoft/decorators","@microsoft/sp-application-base","@microsoft/sp-core-library","SpfxcssApplicationCustomizerStrings"], function(__WEBPACK_EXTERNAL_MODULE__microsoft_decorators__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_application_base__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__, __WEBPACK_EXTERNAL_MODULE_SpfxcssApplicationCustomizerStrings__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/extensions/spfxcss/SpfxcssApplicationCustomizer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/extensions/spfxcss/SpfxcssApplicationCustomizer.js":
/*!****************************************************************!*\
  !*** ./lib/extensions/spfxcss/SpfxcssApplicationCustomizer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/decorators */ "@microsoft/decorators");
/* harmony import */ var _microsoft_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "@microsoft/sp-core-library");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-application-base */ "@microsoft/sp-application-base");
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var SpfxcssApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! SpfxcssApplicationCustomizerStrings */ "SpfxcssApplicationCustomizerStrings");
/* harmony import */ var SpfxcssApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(SpfxcssApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import * as $ from 'jquery';

var LOG_SOURCE = 'SpfxcssApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var SpfxcssApplicationCustomizer = /** @class */ (function (_super) {
    __extends(SpfxcssApplicationCustomizer, _super);
    function SpfxcssApplicationCustomizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._externalJsUrl = "https://neudesicresearch.sharepoint.com/Style%20Library/plugins/jquery.js";
        _this._externalJsUrl1 = "https://neudesicresearch.sharepoint.com/Style%20Library/test.js";
        return _this;
    }
    //private _externalCss: string = "https://neudesicresearch.sharepoint.com/Style%20Library/pageStyles.css";
    SpfxcssApplicationCustomizer.prototype.onInit = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Log"].info(LOG_SOURCE, "Initialized " + SpfxcssApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__["Title"]);
        var cssUrl = this.properties.cssurl;
        var cssUrl1 = this.properties.pagecss;
        if (cssUrl) {
            // inject the style sheet
            var head_1 = document.getElementsByTagName("head")[0] || document.documentElement;
            var customStyle_1 = document.createElement("link");
            customStyle_1.href = cssUrl;
            customStyle_1.rel = "stylesheet";
            customStyle_1.type = "text/css";
            head_1.insertAdjacentElement("beforeEnd", customStyle_1);
        }
        var scriptTag = document.createElement("script");
        scriptTag.src = this._externalJsUrl;
        scriptTag.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(scriptTag);
        console.log("Added jquery script link.");
        var scriptTag1 = document.createElement("script");
        scriptTag1.src = this._externalJsUrl1;
        scriptTag1.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(scriptTag1);
        console.log("Added jquery script link.");
        var head = document.getElementsByTagName("head")[0] || document.documentElement;
        var customStyle = document.createElement("link");
        customStyle.href = cssUrl1;
        customStyle.rel = "stylesheet";
        customStyle.type = "text/css";
        head.insertAdjacentElement("beforeEnd", customStyle);
        // let message: string = this.properties.testMessage;
        // if (!message) {
        //   message = '(No properties were provided.)';
        // }
        // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
        return Promise.resolve();
    };
    __decorate([
        _microsoft_decorators__WEBPACK_IMPORTED_MODULE_0__["override"]
    ], SpfxcssApplicationCustomizer.prototype, "onInit", null);
    return SpfxcssApplicationCustomizer;
}(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2__["BaseApplicationCustomizer"]));
/* harmony default export */ __webpack_exports__["default"] = (SpfxcssApplicationCustomizer);


/***/ }),

/***/ "@microsoft/decorators":
/*!****************************************!*\
  !*** external "@microsoft/decorators" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_decorators__;

/***/ }),

/***/ "@microsoft/sp-application-base":
/*!*************************************************!*\
  !*** external "@microsoft/sp-application-base" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_application_base__;

/***/ }),

/***/ "@microsoft/sp-core-library":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__;

/***/ }),

/***/ "SpfxcssApplicationCustomizerStrings":
/*!******************************************************!*\
  !*** external "SpfxcssApplicationCustomizerStrings" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_SpfxcssApplicationCustomizerStrings__;

/***/ })

/******/ })});;
//# sourceMappingURL=spfxcss-application-customizer.js.map