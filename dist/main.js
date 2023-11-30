/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n    constructor(id, make, model, year) {\n      this.id = id;\n      this.make = make;\n      this.model = model;\n      this.year = year;\n    }\n  }\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\n\nconst carForm = document.getElementById(\"submitForm\");\nconst makeInput = document.getElementById(\"makeInput\");\nconst modelInput = document.getElementById(\"modelInput\");\nconst yearInput = document.getElementById(\"yearInput\");\nconst makePara = document.getElementById(\"car-make\");\nconst modelPara = document.getElementById(\"car-model\");\nconst yearPara = document.getElementById(\"car-year\");\nconst removeBtn = document.querySelector(\"#removeBtn\");\nconst wishlistUl = document.querySelector(\"ul\");\n\nconst myWishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nfunction showCarDetails(car) {\n  makePara.textContent = car.make;\n  modelPara.textContent = car.model;\n  yearPara.textContent = car.year;\n\n  removeBtn.removeAttribute(\"disabled\");\n  removeBtn.setAttribute(\"data-carId\", car.id);\n}\n\nfunction updateDOMList() {\n  wishlistUl.innerHTML = \"\";\n  myWishlist.list.forEach((car) => {\n    const listItem = document.createElement(\"li\");\n    listItem.textContent = `${car.make} ${car.model}`;\n    /* const newMake = document.createElement(\"p\");\n    const newModel = document.createElement(\"p\");\n\n    newMake.textContent = car.make;\n    newModel.textContent = car.model;\n */\n    listItem.addEventListener(\"click\", () => showCarDetails(car));\n\n    //listItem.append(newMake, newModel);\n    wishlistUl.append(listItem);\n  });\n}\nfunction addCar(event) {\n  event.preventDefault();\n\n  const make = makeInput.value;\n  const model = modelInput.value;\n  const year = yearInput.value;\n\n  myWishlist.add(make, model, year);\n  updateDOMList();\n  carForm.reset();\n}\nfunction removeCar() {\n  const carId = Number(removeBtn.getAttribute(\"data-carId\"));\n  myWishlist.remove(carId);\n\n  updateDOMList();\n\n  makePara.textContent = \"\";\n  modelPara.textContent = \"\";\n  yearPara.textContent = \"\";\n\n  removeBtn.setAttribute(\"disabled\", true);\n}\n\ncarForm.addEventListener(\"submit\", addCar);\nremoveBtn.addEventListener(\"click\", removeCar);\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\nclass Wishlist {\n  constructor() {\n    this.list = [];\n    this.nextId = 0;\n  }\n  add(make, model, year) {\n    const car = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\n    this.list.push(car);\n  }\n  remove(carId) {\n    this.list = this.list.filter((car) => car.id !== carId);\n  }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;