/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/button.js":
/*!*************************************!*\
  !*** ./src/js/components/button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonClick": () => (/* binding */ buttonClick)
/* harmony export */ });
/* harmony import */ var _manipulateData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manipulateData */ "./src/js/components/manipulateData.js");

let clickedOnce = false;

const buttonClick = () => {
  // const button = document.getElementById('button');
  button.addEventListener('click', () => { // Holy shit. does it find the elementID by default
    if (!clickedOnce) {
      _manipulateData__WEBPACK_IMPORTED_MODULE_0__.manipulateData.getTitles();
      clickedOnce = !clickedOnce;
    } else {
      _manipulateData__WEBPACK_IMPORTED_MODULE_0__.manipulateData.getAuthors();
      clickedOnce = !clickedOnce;
    }
  });
};




/***/ }),

/***/ "./src/js/components/data.js":
/*!***********************************!*\
  !*** ./src/js/components/data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = () => {
  const newsData = localStorage.getItem('newsData');

  if (!newsData) {
    console.log('getting news');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://newsapi.org/v2/everything?q="joe rogan"&sortBy=popularity&from=2022-02-01&to=2022-02-14&apiKey=dce83e83cc0d425aaeefdba5ba3d329f',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => localStorage.setItem('newsData', result))
      .catch((error) => console.log('error', error));
  } else {
    console.log('no new news');
  }
};




/***/ }),

/***/ "./src/js/components/manipulateData.js":
/*!*********************************************!*\
  !*** ./src/js/components/manipulateData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manipulateData": () => (/* binding */ manipulateData)
/* harmony export */ });
function DataManipulator() {
  const newsData = JSON.parse(localStorage.getItem('newsData'));

  console.log(newsData);

  this.getTitles = () => {
    const { articles } = newsData;
    articles.forEach((items) => {
      const { title } = items;
      console.log(title);
    });
  };
  this.getAuthors = () => {
    const { articles } = newsData;
    articles.forEach((items) => {
      const { author } = items;
      console.log(author);
    });
  };
}

const manipulateData = new DataManipulator();




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
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/data */ "./src/js/components/data.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button */ "./src/js/components/button.js");


 // import * as manipulatedData from './components/manipulateData';
// import {testFunction, testFunctionTwo} from './components/test';

document.addEventListener('DOMContentLoaded', function () {
  _components_data__WEBPACK_IMPORTED_MODULE_1__.data();
  _components_button__WEBPACK_IMPORTED_MODULE_2__.buttonClick();
});
})();

/******/ })()
;
//# sourceMappingURL=app.js.map