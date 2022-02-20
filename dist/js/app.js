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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/components/data.js");
/* harmony import */ var _manipulateData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manipulateData */ "./src/js/components/manipulateData.js");



function ButtonClick() {
  let clickedOnce = false;
  this.buttonClick = () => {
    // const button = document.getElementById('button');
    button.addEventListener('click', () => {
      // Holy shit--does it find the elementID by default?
      // Get the titles on first click, then authors
      if (!clickedOnce) {
        const localNewsData = JSON.parse(localStorage.getItem('newsData'));
        if (!localNewsData) {
          (0,_data__WEBPACK_IMPORTED_MODULE_0__.data)();
        } else {
          _manipulateData__WEBPACK_IMPORTED_MODULE_1__.manipulateData.listData(localNewsData);
        }
        clickedOnce = !clickedOnce;
      } else {
        clickedOnce = !clickedOnce;
      }
    });
  };
}

const buttonClick = new ButtonClick();




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
/* harmony import */ var _manipulateData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manipulateData */ "./src/js/components/manipulateData.js");


const data = (localNewsData) => {
  console.log('getting news');
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(
    'https://newsapi.org/v2/everything?q="joe rogan"&sortBy=popularity&from=2022-02-01&to=2022-02-14&pageSize=100&apiKey=dce83e83cc0d425aaeefdba5ba3d329f',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      localStorage.setItem('newsData', result);
      const data = JSON.parse(localStorage.getItem('newsData'));
      _manipulateData__WEBPACK_IMPORTED_MODULE_0__.manipulateData.listData(data);
    })
    .catch((error) => console.log('error', error));
};




/***/ }),

/***/ "./src/js/components/elements/list.js":
/*!********************************************!*\
  !*** ./src/js/components/elements/list.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function CreateElement() {
  this.createElement = (tag, classes, content) => {
    const newElement = document.createElement(tag);
    newElement.classList += classes;
    newElement.textContent = content;
    document.querySelector('#swup').append(newElement);
    window.getComputedStyle(newElement).opacity;
    newElement.classList.remove('opacity-0');
  };
}

const createElement = new CreateElement();




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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/components/data.js");
/* harmony import */ var _elements_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/list */ "./src/js/components/elements/list.js");



function DataManipulator() {
  this.listData = (data) => {
    const returnData = manipulateData.getTitles(data);
    const interval = 30;
    returnData.forEach((item, index) => {
      setTimeout(() => {
        _elements_list__WEBPACK_IMPORTED_MODULE_1__.createElement.createElement(
          'div',
          'lowercase text-rose-500 opacity-0 transition duration-500',
          item
        );
      }, index * interval);
    });
  };

  this.getTitles = (data) => {
    const { articles } = data;
    let titles = [];
    articles.forEach((items) => {
      const { title } = items;
      titles.push(title);
    });
    return titles;
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


 // Needed because js is running before button element is acutally rendered

document.addEventListener('DOMContentLoaded', function () {
  // Data.data();
  _components_button__WEBPACK_IMPORTED_MODULE_2__.buttonClick.buttonClick();
});
})();

/******/ })()
;
//# sourceMappingURL=app.js.map