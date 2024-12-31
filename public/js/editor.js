/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/extensions/disable-block-types.js":
/*!********************************************************!*\
  !*** ./resources/js/extensions/disable-block-types.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);


var blacklist = ['bcn/', 'core/archive', 'core/audio', 'core/avatar', 'core/calendar', 'core/categories', 'core/comment-author-name', 'core/comment-content', 'core/comment-date', 'core/comment-edit-link', 'core/comment-reply-link', 'core/comment-template', 'core/comments-pagination-next', 'core/comments-pagination-numbers', 'core/comments-pagination-previous', 'core/comments-pagination', 'core/comments-query-loop', 'core/comments-title', 'core/comments', 'core/embed', 'core/file', 'core/gallery', 'core/home-link', 'core/latest-comments', 'core/latest-posts', 'core/legacy-widget', 'core/loginout', 'core/more', 'core/navigation', 'core/nextpage', 'core/page-list', 'core/post-author-biography', 'core/post-author', 'core/post-comments-form', 'core/post-comments', 'core/post-content', 'core/post-date', 'core/post-excerpt', 'core/post-featured-image', 'core/post-navigation-link', 'core/post-template', 'core/post-terms', 'core/post-title', 'core/query-no-results', 'core/query-pagination-next', 'core/query-pagination-numbers', 'core/query-pagination-previous', 'core/query-pagination', 'core/query-title', 'core/query', 'core/read-more', 'core/rss', 'core/search', 'core/site-logo', 'core/site-tagline', 'core/site-title', 'core/social-link', 'core/tag-cloud', 'core/details', 'core/template-part', 'core/term-description', 'core/verse', 'core/widget-area', 'core/footnotes', 'editorskit/', 'html-forms/', 'monsterinsights/', 'mv/', 'page-generator-pro/', 'rank-math/howto-block', 'rank-math/rich-snippet', 'safe-svg/', 'yoast-seo/breadcrumbs', 'yoast-seo/estimated-reading-time', 'yoast-seo/related-links', 'yoast-seo/table-of-contents', 'yoast-seo/siblings', 'yoast-seo/subpages'];
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockTypes)().forEach(function (block) {
    return blacklist.some(function (x) {
      return block.name.includes(x);
    }) && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockType)(block.name);
  });
});

/***/ }),

/***/ "./resources/js/extensions/disable-fullscreen.js":
/*!*******************************************************!*\
  !*** ./resources/js/extensions/disable-fullscreen.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


var disableFullscreen = (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('disable-fullscreen', {
  render: function render() {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/edit-post').isFeatureActive('fullscreenMode') && (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/edit-post').toggleFeature('fullscreenMode');
    return null;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (disableFullscreen);

/***/ }),

/***/ "./resources/js/extensions/disable-welcome-guide.js":
/*!**********************************************************!*\
  !*** ./resources/js/extensions/disable-welcome-guide.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


var disableWelcomeGuide = (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('disable-welcome-guide', {
  render: function render() {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/edit-post').isFeatureActive('welcomeGuide') && (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/edit-post').toggleFeature('welcomeGuide');
    return null;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (disableWelcomeGuide);

/***/ }),

/***/ "./resources/js/hooks/block-styles.js":
/*!********************************************!*\
  !*** ./resources/js/hooks/block-styles.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerBlockStyles: function() { return /* binding */ registerBlockStyles; },
/* harmony export */   unregisterBlockStyles: function() { return /* binding */ unregisterBlockStyles; }
/* harmony export */ });
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Register specified styles.
 *
 * @param  {object} styles
 * @return {void}
 */
var registerBlockStyles = function registerBlockStyles(styles) {
  styles.forEach(function (_ref) {
    var block = _ref.block,
      styles = _ref.styles;
    return styles.forEach(function (style) {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockStyle)(block, style);
    });
  });
};

/**
 * Unregister specified styles.
 *
 * @param  {object} styles
 * @return {void}
 */
var unregisterBlockStyles = function unregisterBlockStyles(styles) {
  styles.forEach(function (_ref2) {
    var block = _ref2.block,
      styles = _ref2.styles;
    return styles.forEach(function (style) {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockStyle)(block, style);
    });
  });
};


/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["plugins"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************!*\
  !*** ./resources/js/editor.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _extensions_disable_block_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/disable-block-types */ "./resources/js/extensions/disable-block-types.js");
/* harmony import */ var _extensions_disable_welcome_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/disable-welcome-guide */ "./resources/js/extensions/disable-welcome-guide.js");
/* harmony import */ var _extensions_disable_fullscreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensions/disable-fullscreen */ "./resources/js/extensions/disable-fullscreen.js");
/* harmony import */ var _hooks_block_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/block-styles */ "./resources/js/hooks/block-styles.js");







/**
 * Document Ready
 * @see https://www.npmjs.com/package/@wordpress/dom-ready
 */
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  /**
   * Unregister existing block styles.
   */
  (0,_hooks_block_styles__WEBPACK_IMPORTED_MODULE_5__.unregisterBlockStyles)([{
    block: 'core/button',
    styles: ['outline', 'fill']
  }, {
    block: 'core/image',
    styles: ['circle-mask']
  }, {
    block: 'core/pullquote',
    styles: ['solid-color']
  }, {
    block: 'core/table',
    styles: ['stripes']
  }, {
    block: 'core/quote',
    styles: ['large']
  }]);

  /**
   * Register new block styles.
   */
  (0,_hooks_block_styles__WEBPACK_IMPORTED_MODULE_5__.registerBlockStyles)([{
    block: 'core/button',
    styles: [{
      name: 'fill',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Solid', 'gutentweaks')
    }, {
      name: 'outline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Outline', 'gutentweaks')
    }]
  }, {
    block: 'core/list',
    styles: [{
      name: 'check',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Check', 'gutentweaks')
    }, {
      name: 'check-circle',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Check (Circle)', 'gutentweaks')
    }, {
      name: 'times',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Times', 'gutentweaks')
    }, {
      name: 'chevron-r',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Chevron (Right)', 'gutentweaks')
    }, {
      name: 'caret-r',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Caret (Right)', 'gutentweaks')
    }, {
      name: 'arrow-r',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Arrow (Right)', 'gutentweaks')
    }, {
      name: 'numeric',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Numeric', 'gutentweaks')
    }, {
      name: 'star',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Star', 'gutentweaks')
    }, {
      name: 'dash',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dash', 'gutentweaks')
    }]
  }]);
});
}();
/******/ })()
;