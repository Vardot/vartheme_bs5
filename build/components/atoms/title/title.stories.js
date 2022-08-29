/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/drupal-attribute/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/drupal-attribute/src/index.js ***!
  \****************************************************/
/***/ ((module) => {

class DrupalAttribute extends Map {
  constructor(it) {
    super(it);
  }

  /**
   * @param {...String|Array} args
   * @returns {DrupalAttribute}
   */
  addClass(args) {
    let self = this;
    let values = [];

    for (let i = 0; i < arguments.length; i++) {
      values.push(arguments[i]);
    }

    values.forEach(function (value) {
      if (!Array.isArray(value)) {
        value = [value];
      }

      if (!self.has('class')) {
        self.setAttribute('class', []);
      }

      let classes = self.get('class');

      value.forEach(function (d) {
        if (classes.indexOf(d) < 0) {
          classes.push(d);
        }
      });
    });

    return this;
  }

  removeClass(value) {
    let classes = [];

    if (this.has('class')) {
      classes = this.get('class');
    }

    if (!Array.isArray(value)) {
      value = [value];
    }

    value.forEach(function (v) {
      let index = classes.indexOf(v);

      if (index > -1) {
        classes.splice(index, 1);
      }
    });

    return this;
  }

  hasClass(value) {
    let classes = [];

    if (this.has('class')) {
      classes = this.get('class');
    }

    return (classes.indexOf(value) > -1);
  }

  setAttribute(key, value) {
    this.set(key, value);

    return this;
  }

  removeAttribute(key) {
    this.delete(key);

    return this;
  }

  toString() {
    let result = '';
    let components = [];

    this.forEach(function (value, key) {
      if (Array.isArray(value)) {
        value = value.join(' ');
      }

      components.push([key, '"' + value + '"'].join('='));
    });

    let rendered = components.join(' ');

    if (rendered) {
      result += ' ' + rendered;
    }

    return result;
  }
}

module.exports = DrupalAttribute;

/***/ }),

/***/ "./src/components/atoms/title/title.twig":
/*!***********************************************!*\
  !*** ./src/components/atoms/title/title.twig ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '\n' (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {#\n| /**\n|  * @file");

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************************!*\
  !*** ./src/components/atoms/title/title.stories.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _title_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title.twig */ "./src/components/atoms/title/title.twig");
/* harmony import */ var _title_twig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_title_twig__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var drupal_attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drupal-attribute */ "./node_modules/drupal-attribute/src/index.js");
/* harmony import */ var drupal_attribute__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(drupal_attribute__WEBPACK_IMPORTED_MODULE_1__);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'title': 'Atoms/Title'
});


var Title = function Title() {
  return _title_twig__WEBPACK_IMPORTED_MODULE_0___default()({
    title_attributes: new (drupal_attribute__WEBPACK_IMPORTED_MODULE_1___default())(),
    title_prefix: "",
    title_suffix: "",
    titleTag: "h1",
    title: "Lorem Ipsum",
    displaySize: "4",
    title_utility_classes: []
  });
};
})();

/******/ })()
;