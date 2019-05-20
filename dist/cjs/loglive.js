module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** ./src/components/App.vue ***!
  \********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_babelrc_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(/*! !babel-loader?{"cacheDirectory":true,"babelrc":true}!../../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e6912740_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-e6912740","hasScoped":false}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue */ 21);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":true,"minimize":false}!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-e6912740","scoped":false,"hasInlineConfig":true}!github-markdown-css/github-markdown.css */ 9)
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":true,"minimize":false}!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-e6912740","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=1!./App.vue */ 10)
}
var normalizeComponent = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 11)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_babelrc_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e6912740_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 1 */
/*!**************************!*\
  !*** external "marked3" ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("marked3");

/***/ }),
/* 2 */
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ridaamirini/WebstormProjects/loglive/src/index.js */3);


/***/ }),
/* 3 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./LogLive */ 4).default;

module.exports.LogLive = __webpack_require__(/*! ./components/App.vue */ 0).default;

/***/ }),
/* 4 */
/*!************************!*\
  !*** ./src/LogLive.js ***!
  \************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(/*! ./polyfills */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(/*! vue */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App_vue__ = __webpack_require__(/*! ./components/App.vue */ 0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// eslint-disable-next-line import/no-unassigned-import




var LogLive = function LogLive() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      el = _ref.el,
      changelog = _ref.changelog,
      colors = _ref.colors;

  _classCallCheck(this, LogLive);

  var h = this.$createElement;

  return new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
    el: el,
    render: function render() {
      var h = arguments[0];

      return h(
        __WEBPACK_IMPORTED_MODULE_2__components_App_vue__["default"],
        {
          attrs: { colors: colors, changelog: changelog }
        },
        []
      );
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LogLive);

/***/ }),
/* 5 */
/*!**************************!*\
  !*** ./src/polyfills.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.assign = Object.assign || __webpack_require__(/*! nano-assign */ 6);

if (typeof window !== 'undefined') {
  window.Promise = window.Promise || __webpack_require__(/*! promise-polyfill */ 7);
}

/***/ }),
/* 6 */
/*!******************************!*\
  !*** external "nano-assign" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("nano-assign");

/***/ }),
/* 7 */
/*!***********************************!*\
  !*** external "promise-polyfill" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("promise-polyfill");

/***/ }),
/* 8 */
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 9 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":true,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-e6912740","scoped":false,"hasInlineConfig":true}!./node_modules/github-markdown-css/github-markdown.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":true,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-e6912740","scoped":false,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/components/App.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/*!*************************************************************!*\
  !*** ./node_modules/vue-loader/lib/component-normalizer.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"cacheDirectory":true,"babelrc":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/App.vue ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unfetch__ = __webpack_require__(/*! unfetch */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_front_matter__ = __webpack_require__(/*! ../utils/front-matter */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_markdown__ = __webpack_require__(/*! ../utils/markdown */ 16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'LogLive',

  props: ['changelog', 'colors'],

  data: function data() {
    return {
      html: '',
      site: null,
      url: location.origin + location.pathname
    };
  },
  created: function created() {
    this.fetchFile();
  },


  methods: {
    fetchFile: function fetchFile() {
      var _this = this;

      var changelog = this.changelog || '/CHANGELOG.md';
      __WEBPACK_IMPORTED_MODULE_0_unfetch___default()(changelog).then(function (res) {
        return res.text();
      }).then(function (res) {
        var _fm = Object(__WEBPACK_IMPORTED_MODULE_1__utils_front_matter__["a" /* default */])(res),
            body = _fm.body,
            attributes = _fm.attributes;

        _this.site = attributes;
        _this.html = Object(__WEBPACK_IMPORTED_MODULE_2__utils_markdown__["a" /* default */])(body, {
          site: _this.site,
          colors: Object.assign({
            Fix: '#b26cee',
            New: '#3778ff',
            Breaking: '#ff9800'
          }, _this.colors || {})
        });
      });
    },
    getDomain: function getDomain(url) {
      return url.replace(/^https?:\/\//, '');
    }
  }
});

/***/ }),
/* 13 */
/*!**************************!*\
  !*** external "unfetch" ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("unfetch");

/***/ }),
/* 14 */
/*!***********************************!*\
  !*** ./src/utils/front-matter.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__yaml__ = __webpack_require__(/*! ./yaml */ 15);
/* eslint-disable */


var optionalByteOrderMark = '\\ufeff?';
var pattern = '^(' + optionalByteOrderMark + '(= yaml =|---)' + '$([\\s\\S]*?)' + '(?:\\2|\\.\\.\\.)' + '$' + '\\r?' + '(?:\\n)?)';
// NOTE: If this pattern uses the 'g' flag the `regex` variable definition will
// need to be moved down into the functions that use it.
var regex = new RegExp(pattern, 'm');

function extractor(string) {
  string = string || '';
  var lines = string.split(/(\r?\n)/);
  if (lines[0] && /= yaml =|---/.test(lines[0])) {
    return parse(string);
  } else {
    return { attributes: {}, body: string };
  }
}

function parse(string) {
  var match = regex.exec(string);

  if (!match) {
    return {
      attributes: {},
      body: string
    };
  }

  var yaml = match[match.length - 1].replace(/^\s+|\s+$/g, '');
  var attributes = Object(__WEBPACK_IMPORTED_MODULE_0__yaml__["a" /* default */])(yaml) || {};
  var body = string.replace(match[0], '');

  return { attributes: attributes, body: body, frontmatter: yaml };
}

function test(string) {
  string = string || '';

  return regex.test(string);
}

/* harmony default export */ __webpack_exports__["a"] = (extractor);

/***/ }),
/* 15 */
/*!***************************!*\
  !*** ./src/utils/yaml.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable */
/*
YAML parser for Javascript
Author: Diogo Costa

This program is released under the MIT License as follows:

Copyright (c) 2011 Diogo Costa (costa.h4evr@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/**
 * @name YAML
 * @namespace
*/

var errors = [],
    reference_blocks = [],
    processing_time = 0,
    regex = {
    "regLevel": new RegExp("^([\\s\\-]+)"),
    "invalidLine": new RegExp("^\\-\\-\\-|^\\.\\.\\.|^\\s*#.*|^\\s*$"),
    "dashesString": new RegExp("^\\s*\\\"([^\\\"]*)\\\"\\s*$"),
    "quotesString": new RegExp("^\\s*\\\'([^\\\']*)\\\'\\s*$"),
    "float": new RegExp("^[+-]?[0-9]+\\.[0-9]+(e[+-]?[0-9]+(\\.[0-9]+)?)?$"),
    "integer": new RegExp("^[+-]?[0-9]+$"),
    "array": new RegExp("\\[\\s*(.*)\\s*\\]"),
    "map": new RegExp("\\{\\s*(.*)\\s*\\}"),
    "key_value": new RegExp("([a-z0-9_-][ a-z0-9_-]*):( .+)", "i"),
    "single_key_value": new RegExp("^([a-z0-9_-][ a-z0-9_-]*):( .+?)$", "i"),
    "key": new RegExp("([a-z0-9_-][ a-z0-9_-]+):( .+)?", "i"),
    "item": new RegExp("^-\\s+"),
    "trim": new RegExp("^\\s+|\\s+$"),
    "comment": new RegExp("([^\\\'\\\"#]+([\\\'\\\"][^\\\'\\\"]*[\\\'\\\"])*)*(#.*)?")
};

/**
* @class A block of lines of a given level.
* @param {int} lvl The block's level.
* @private
*/
function Block(lvl) {
    return {
        /* The block's parent */
        parent: null,
        /* Number of children */
        length: 0,
        /* Block's level */
        level: lvl,
        /* Lines of code to process */
        lines: [],
        /* Blocks with greater level */
        children: [],
        /* Add a block to the children collection */
        addChild: function addChild(obj) {
            this.children.push(obj);
            obj.parent = this;
            ++this.length;
        }
    };
}

// function to create an XMLHttpClient in a cross-browser manner
function createXMLHTTPRequest() {
    var xmlhttp;

    try {
        // Mozilla / Safari / IE7
        xmlhttp = new XMLHttpRequest();
    } catch (e) {
        // IE
        var XMLHTTP_IDS = new Array('MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        var success = false;
        for (var i = 0; i < XMLHTTP_IDS.length && !success; i++) {
            try {
                xmlhttp = new ActiveXObject(XMLHTTP_IDS[i]);
                success = true;
            } catch (e) {}
        }
        if (!success) {
            throw new Error('Unable to create XMLHttpRequest.');
        }
    }

    return xmlhttp;
}

function parser(str) {
    var regLevel = regex["regLevel"];
    var invalidLine = regex["invalidLine"];
    var lines = str.split("\n");
    var m;
    var level = 0,
        curLevel = 0;

    var blocks = [];

    var result = new Block(-1);
    var currentBlock = new Block(0);
    result.addChild(currentBlock);
    var levels = [];
    var line = "";

    blocks.push(currentBlock);
    levels.push(level);

    for (var i = 0, len = lines.length; i < len; ++i) {
        line = lines[i];

        if (line.match(invalidLine)) {
            continue;
        }

        if (m = regLevel.exec(line)) {
            level = m[1].length;
        } else level = 0;

        if (level > curLevel) {
            var oldBlock = currentBlock;
            currentBlock = new Block(level);
            oldBlock.addChild(currentBlock);
            blocks.push(currentBlock);
            levels.push(level);
        } else if (level < curLevel) {
            var added = false;

            var k = levels.length - 1;
            for (; k >= 0; --k) {
                if (levels[k] == level) {
                    currentBlock = new Block(level);
                    blocks.push(currentBlock);
                    levels.push(level);
                    if (blocks[k].parent != null) blocks[k].parent.addChild(currentBlock);
                    added = true;
                    break;
                }
            }

            if (!added) {
                errors.push("Error: Invalid indentation at line " + i + ": " + line);
                return;
            }
        }

        currentBlock.lines.push(line.replace(regex["trim"], ""));
        curLevel = level;
    }

    return result;
}

function processValue(val) {
    val = val.replace(regex["trim"], "");
    var m = null;

    if (val == 'true') {
        return true;
    } else if (val == 'false') {
        return false;
    } else if (val == '.NaN') {
        return Number.NaN;
    } else if (val == 'null') {
        return null;
    } else if (val == '.inf') {
        return Number.POSITIVE_INFINITY;
    } else if (val == '-.inf') {
        return Number.NEGATIVE_INFINITY;
    } else if (m = val.match(regex["dashesString"])) {
        return m[1];
    } else if (m = val.match(regex["quotesString"])) {
        return m[1];
    } else if (m = val.match(regex["float"])) {
        return parseFloat(m[0]);
    } else if (m = val.match(regex["integer"])) {
        return parseInt(m[0]);
    } else if (!isNaN(m = Date.parse(val))) {
        return new Date(m);
    } else if (m = val.match(regex["single_key_value"])) {
        var res = {};
        res[m[1]] = processValue(m[2]);
        return res;
    } else if (m = val.match(regex["array"])) {
        var count = 0,
            c = ' ';
        var res = [];
        var content = "";
        var str = false;
        for (var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
            c = m[1][j];
            if (c == '\'' || c == '"') {
                if (str === false) {
                    str = c;
                    content += c;
                    continue;
                } else if (c == '\'' && str == '\'' || c == '"' && str == '"') {
                    str = false;
                    content += c;
                    continue;
                }
            } else if (str === false && (c == '[' || c == '{')) {
                ++count;
            } else if (str === false && (c == ']' || c == '}')) {
                --count;
            } else if (str === false && count == 0 && c == ',') {
                res.push(processValue(content));
                content = "";
                continue;
            }

            content += c;
        }

        if (content.length > 0) res.push(processValue(content));
        return res;
    } else if (m = val.match(regex["map"])) {
        var count = 0,
            c = ' ';
        var res = [];
        var content = "";
        var str = false;
        for (var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
            c = m[1][j];
            if (c == '\'' || c == '"') {
                if (str === false) {
                    str = c;
                    content += c;
                    continue;
                } else if (c == '\'' && str == '\'' || c == '"' && str == '"') {
                    str = false;
                    content += c;
                    continue;
                }
            } else if (str === false && (c == '[' || c == '{')) {
                ++count;
            } else if (str === false && (c == ']' || c == '}')) {
                --count;
            } else if (str === false && count == 0 && c == ',') {
                res.push(content);
                content = "";
                continue;
            }

            content += c;
        }

        if (content.length > 0) res.push(content);

        var newRes = {};
        for (var j = 0, lenJ = res.length; j < lenJ; ++j) {
            if (m = res[j].match(regex["key_value"])) {
                newRes[m[1]] = processValue(m[2]);
            }
        }

        return newRes;
    } else return val;
}

function processFoldedBlock(block) {
    var lines = block.lines;
    var children = block.children;
    var str = lines.join(" ");
    var chunks = [str];
    for (var i = 0, len = children.length; i < len; ++i) {
        chunks.push(processFoldedBlock(children[i]));
    }
    return chunks.join("\n");
}

function processLiteralBlock(block) {
    var lines = block.lines;
    var children = block.children;
    var str = lines.join("\n");
    for (var i = 0, len = children.length; i < len; ++i) {
        str += processLiteralBlock(children[i]);
    }
    return str;
}

function processBlock(blocks) {
    var m = null;
    var res = {};
    var lines = null;
    var children = null;
    var currentObj = null;

    var level = -1;

    var processedBlocks = [];

    var isMap = true;

    for (var j = 0, lenJ = blocks.length; j < lenJ; ++j) {

        if (level != -1 && level != blocks[j].level) continue;

        processedBlocks.push(j);

        level = blocks[j].level;
        lines = blocks[j].lines;
        children = blocks[j].children;
        currentObj = null;

        for (var i = 0, len = lines.length; i < len; ++i) {
            var line = lines[i];

            if (m = line.match(regex["key"])) {
                var key = m[1];

                if (key[0] == '-') {
                    key = key.replace(regex["item"], "");
                    if (isMap) {
                        isMap = false;
                        if (typeof res.length === "undefined") {
                            res = [];
                        }
                    }
                    if (currentObj != null) res.push(currentObj);
                    currentObj = {};
                    isMap = true;
                }

                if (typeof m[2] != "undefined") {
                    var value = m[2].replace(regex["trim"], "");
                    if (value[0] == '&') {
                        var nb = processBlock(children);
                        if (currentObj != null) currentObj[key] = nb;else res[key] = nb;
                        reference_blocks[value.substr(1)] = nb;
                    } else if (value[0] == '|') {
                        if (currentObj != null) currentObj[key] = processLiteralBlock(children.shift());else res[key] = processLiteralBlock(children.shift());
                    } else if (value[0] == '*') {
                        var v = value.substr(1);
                        var no = {};

                        if (typeof reference_blocks[v] == "undefined") {
                            errors.push("Reference '" + v + "' not found!");
                        } else {
                            for (var k in reference_blocks[v]) {
                                no[k] = reference_blocks[v][k];
                            }

                            if (currentObj != null) currentObj[key] = no;else res[key] = no;
                        }
                    } else if (value[0] == '>') {
                        if (currentObj != null) currentObj[key] = processFoldedBlock(children.shift());else res[key] = processFoldedBlock(children.shift());
                    } else {
                        if (currentObj != null) currentObj[key] = processValue(value);else res[key] = processValue(value);
                    }
                } else {
                    if (currentObj != null) currentObj[key] = processBlock(children);else res[key] = processBlock(children);
                }
            } else if (line.match(/^-\s*$/)) {
                if (isMap) {
                    isMap = false;
                    if (typeof res.length === "undefined") {
                        res = [];
                    }
                }
                if (currentObj != null) res.push(currentObj);
                currentObj = {};
                isMap = true;
                continue;
            } else if (m = line.match(/^-\s*(.*)/)) {
                if (currentObj != null) currentObj.push(processValue(m[1]));else {
                    if (isMap) {
                        isMap = false;
                        if (typeof res.length === "undefined") {
                            res = [];
                        }
                    }
                    res.push(processValue(m[1]));
                }
                continue;
            }
        }

        if (currentObj != null) {
            if (isMap) {
                isMap = false;
                if (typeof res.length === "undefined") {
                    res = [];
                }
            }
            res.push(currentObj);
        }
    }

    for (var j = processedBlocks.length - 1; j >= 0; --j) {
        blocks.splice.call(blocks, processedBlocks[j], 1);
    }

    return res;
}

function semanticAnalysis(blocks) {
    var res = processBlock(blocks.children);
    return res;
}

function preProcess(src) {
    var m;
    var lines = src.split("\n");

    var r = regex["comment"];

    for (var i in lines) {
        if (m = lines[i].match(r)) {
            /*                var cmt = "";
                        if(typeof m[3] != "undefined")
                            lines[i] = m[1];
                        else if(typeof m[3] != "undefined")
                            lines[i] = m[3];
                        else
                            lines[i] = "";
                            */
            if (typeof m[3] !== "undefined") {
                lines[i] = m[0].substr(0, m[0].length - m[3].length);
            }
        }
    }

    return lines.join("\n");
}

function load(str) {
    errors = [];
    reference_blocks = [];
    processing_time = new Date().getTime();
    var pre = preProcess(str);
    var doc = parser(pre);
    var res = semanticAnalysis(doc);
    processing_time = new Date().getTime() - processing_time;

    return res;
}

/* harmony default export */ __webpack_exports__["a"] = (load);

/***/ }),
/* 16 */
/*!*******************************!*\
  !*** ./src/utils/markdown.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked3__ = __webpack_require__(/*! marked3 */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__renderer__ = __webpack_require__(/*! ./renderer */ 17);



/* harmony default export */ __webpack_exports__["a"] = (function (text, opts) {
  return __WEBPACK_IMPORTED_MODULE_0_marked3___default()(text, {
    renderer: Object(__WEBPACK_IMPORTED_MODULE_1__renderer__["a" /* default */])(opts),
    linksInNewTab: true
  });
});

/***/ }),
/* 17 */
/*!*******************************!*\
  !*** ./src/utils/renderer.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked3__ = __webpack_require__(/*! marked3 */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__ = __webpack_require__(/*! date-fns/distance_in_words_to_now */ 18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_parse__ = __webpack_require__(/*! date-fns/parse */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_locale_de__ = __webpack_require__(/*! date-fns/locale/de */ 20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_locale_de___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_locale_de__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();






var COLORS = ['#9e0734', '#016b18', '#4e6d00', '#42890c', '#457c0b', '#d1b908', '#a000d1', '#458704', '#0a1172', '#4c0172', '#377705', '#10a870', '#047531', '#870004', '#149903', '#01722c', '#073870', '#0f0d87', '#bf07bf', '#af0002'];

var randomColor = function randomColor() {
  return COLORS[Math.floor(Math.random() * 20)];
};

var TITLE_REGEX = /^([^(]+)(?:\(([^)]+)\))?$/;

var matchChangelogTitle = function matchChangelogTitle(title) {
  return TITLE_REGEX.exec(title);
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      site = _ref.site,
      colors = _ref.colors;

  var renderer = new __WEBPACK_IMPORTED_MODULE_0_marked3___default.a.Renderer();

  var originalHeading = renderer.heading.bind(renderer);

  renderer.heading = function (text, level, raw) {
    if (level === 1) {
      site.title = text;
      return '';
    }

    if (level === 2) {
      var matched = matchChangelogTitle(raw);
      if (matched) {
        var _matched = _slicedToArray(matched, 3),
            title = _matched[1],
            _matched$ = _matched[2],
            date = _matched$ === undefined ? '' : _matched$;

        title = title.trim();
        return '<div class="loglive-logtitle">' + originalHeading(title, level, title) + '<time class="loglive-date" datetime="' + (date && __WEBPACK_IMPORTED_MODULE_2_date_fns_parse___default()(date)) + '">' + (date && __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default()(date, { addSuffix: true, locale: __WEBPACK_IMPORTED_MODULE_3_date_fns_locale_de___default.a })) + '</time></div>';
      }
    }

    if (level === 3) {
      var res = '<div class="loglive-sep"></div>';
      var color = colors[raw.trim()] || randomColor();
      res += originalHeading(text, level, raw).replace(/^<h3/, '<h3 style="background-color: ' + color + '" class="loglive-h3"') + '<div class="clearfix"></div>';
      return res;
    }

    return originalHeading(text, level, raw);
  };

  return renderer;
});

/***/ }),
/* 18 */
/*!****************************************************!*\
  !*** external "date-fns/distance_in_words_to_now" ***!
  \****************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("date-fns/distance_in_words_to_now");

/***/ }),
/* 19 */
/*!*********************************!*\
  !*** external "date-fns/parse" ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("date-fns/parse");

/***/ }),
/* 20 */
/*!*************************************!*\
  !*** external "date-fns/locale/de" ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/de");

/***/ }),
/* 21 */
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e6912740","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/App.vue ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"loglive-app"}},[(_vm.site)?_c('header',{staticClass:"loglive-header"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"loglive-title"},[_c('a',{attrs:{"href":_vm.url}},[_c('strong',[_vm._v(_vm._s(_vm.site.title)+" ")]),_vm._v(" changelog")])]),_vm._v(" "),(_vm.site.website)?_c('div',{staticClass:"loglive-website"},[_c('a',{attrs:{"href":_vm.site.website}},[_vm._v(_vm._s(_vm.getDomain(_vm.site.website)))])]):_vm._e()])]):_c('div',{staticClass:"loglive-loading"},[_vm._v("\n    Loading...\n  ")]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.html)?_c('div',{staticClass:"loglive-body"},[_c('div',{staticClass:"markdown-body container",domProps:{"innerHTML":_vm._s(_vm.html)}})]):_vm._e()])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
//# sourceMappingURL=loglive.js.map