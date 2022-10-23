/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/checkDocumentIsReady.js":
/*!*********************************************!*\
  !*** ./src/helpers/checkDocumentIsReady.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDocumentIsReady": () => (/* binding */ checkDocumentIsReady)
/* harmony export */ });
var checkDocumentIsReady = function checkDocumentIsReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

/***/ }),

/***/ "./src/helpers/getColumnsSizeClasses.js":
/*!**********************************************!*\
  !*** ./src/helpers/getColumnsSizeClasses.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getColumnsSizeClasses": () => (/* binding */ getColumnsSizeClasses)
/* harmony export */ });
/**
 * @param {array} sizes An array of columns sizes like: 50_50, 25_50_25, 25_25_25_25
 * @param {string} screenSize Screen size prefix: xxl, xl, lg, md, sm
 *
 * @returns {array} An array of bootstrap classes
 */
var getColumnsSizeClasses = function getColumnsSizeClasses(sizes, screenSize) {
  var sizesArr = sizes.split("_");
  var classes = [];
  sizesArr.map(function (size) {
    switch (size) {
      case "16":
        classes.push("col-".concat(screenSize, "-2"));
        break;

      case "25":
        classes.push("col-".concat(screenSize, "-3"));
        break;

      case "33":
        classes.push("col-".concat(screenSize, "-4"));
        break;

      case "50":
        classes.push("col-".concat(screenSize, "-6"));
        break;

      case "67":
        classes.push("col-".concat(screenSize, "-8"));
        break;

      case "75":
        classes.push("col-".concat(screenSize, "-9"));
        break;

      case "100":
        classes.push("col-".concat(screenSize, "-12"));
        break;

      default:
        break;
    }
  });
  return classes;
};

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDocumentIsReady": () => (/* reexport safe */ _checkDocumentIsReady__WEBPACK_IMPORTED_MODULE_0__.checkDocumentIsReady),
/* harmony export */   "getColumnsSizeClasses": () => (/* reexport safe */ _getColumnsSizeClasses__WEBPACK_IMPORTED_MODULE_3__.getColumnsSizeClasses),
/* harmony export */   "remoteYoutubeVideoStringParser": () => (/* reexport safe */ _remoteYoutubeVideoStringParser__WEBPACK_IMPORTED_MODULE_1__.remoteYoutubeVideoStringParser),
/* harmony export */   "removeElementOnClick": () => (/* reexport safe */ _removeElementOnClick__WEBPACK_IMPORTED_MODULE_2__.removeElementOnClick)
/* harmony export */ });
/* harmony import */ var _checkDocumentIsReady__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkDocumentIsReady */ "./src/helpers/checkDocumentIsReady.js");
/* harmony import */ var _remoteYoutubeVideoStringParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remoteYoutubeVideoStringParser */ "./src/helpers/remoteYoutubeVideoStringParser.js");
/* harmony import */ var _removeElementOnClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeElementOnClick */ "./src/helpers/removeElementOnClick.js");
/* harmony import */ var _getColumnsSizeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getColumnsSizeClasses */ "./src/helpers/getColumnsSizeClasses.js");





/***/ }),

/***/ "./src/helpers/remoteYoutubeVideoStringParser.js":
/*!*******************************************************!*\
  !*** ./src/helpers/remoteYoutubeVideoStringParser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "remoteYoutubeVideoStringParser": () => (/* binding */ remoteYoutubeVideoStringParser)
/* harmony export */ });
var remoteYoutubeVideoStringParser = function remoteYoutubeVideoStringParser(videoLink) {
  var src = videoLink.split('&');
  return src[0].replace('watch?v=', 'embed/');
};

/***/ }),

/***/ "./src/helpers/removeElementOnClick.js":
/*!*********************************************!*\
  !*** ./src/helpers/removeElementOnClick.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeElementOnClick": () => (/* binding */ removeElementOnClick)
/* harmony export */ });
var removeElementOnClick = function removeElementOnClick(clickedElementId, elementToRemoveId) {
  document.getElementById(clickedElementId).addEventListener('click', function (event) {
    document.getElementById(elementToRemoveId).style.display = 'none';
  });
};

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************************************************!*\
  !*** ./src/components/organisms/block/remoteYoutubeVideoBlock/remoteYoutubeVideoBlock.js ***!
  \*******************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers */ "./src/helpers/index.js");

(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.checkDocumentIsReady)(function () {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.removeElementOnClick)('thumb_wrapper', 'thumb_wrapper');
});
})();

/******/ })()
;