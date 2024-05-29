/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/admin-new-product.js":
/*!*************************************!*\
  !*** ./src/js/admin-new-product.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility-modules.js */ \"./src/js/utility-modules.js\");\n\r\n//esential imports\r\n\r\n\r\n\r\n//getting elems from dom \r\nconst primary_image_upload = document.getElementById('primary_image-upload');\r\nconst sec1_image_upload = document.getElementById('sec-1_image-upload');\r\nconst sec2_image_upload = document.getElementById('sec-2_image-upload');\r\n\r\n// variables, arrays and objects\r\nconst imageDropAreas = [primary_image_upload, sec1_image_upload, sec2_image_upload];\r\n// functions \r\n\r\n// to handle files \r\nfunction handleFiles(files, dropArea){\r\n  ([...files]).forEach(file => {\r\n    previewFile(file, dropArea)\r\n  });\r\n}\r\n// once something is dropped \r\nconst handleDrop = function(e, area){\r\n  const data = e.dataTransfer;\r\n  const files = data.files\r\n  handleFiles(files, area)\r\n}\r\n//previwing file before uploading them\r\nconst previewFile = function(file, dropArea){\r\n  // elems the need to be hiden when preview img is displayed\r\n   const hidePreviewElem = dropArea.querySelectorAll('[data-hideOnImagePreview]');\r\n  // elems the need to be visible when preview img is displayed\r\n   const showPreviewElem = dropArea.querySelectorAll('[data-showOnImagePreview]');\r\n   //hiding those elems\r\n   hidePreviewElem.forEach((elem)=>{\r\n    elem.classList.add('hidden')\r\n   })\r\n   //make visible those elems\r\n   showPreviewElem.forEach((elem)=>{\r\n    elem.classList.remove('hidden')\r\n   })\r\n  //  elem where img will be displayed \r\n   const previewDisplay = dropArea.querySelector('.preview-img')\r\n   const inpt_elem = dropArea.querySelector('.input_file');\r\n   //reading the file using filereader api to display it\r\n    let reader = new FileReader();\r\n    reader.readAsDataURL(file);\r\n\r\n    reader.onloadend = function(){\r\n      previewDisplay.src = reader.result;\r\n      // to check latter whether the elem is empty or not\r\n      inpt_elem.setAttribute(\"data-role_fullfilled\",\"true\")\r\n      inpt_elem.dataset.role_fullfilled = 'true';\r\n    }\r\n}\r\n\r\n// eventlistners\r\n\r\n//to prevent (Drag n drop) default actions\r\nimageDropAreas.forEach((area)=>{\r\n  // events \r\n  const preventDefaultEvents = ['dragenter', 'dragover', 'dragleave', 'drop'];\r\n  const highlightEvents = ['dragenter', 'dragover'];\r\n  const unHighlightEvents = ['dragleave', 'drop'];\r\n\r\n  //preventing defaults\r\n  preventDefaultEvents.forEach(event => {\r\n    area.addEventListener(event, _utility_modules_js__WEBPACK_IMPORTED_MODULE_0__.preventDefaults)\r\n  });\r\n\r\n  // highlighting \r\n  highlightEvents.forEach(event => {\r\n    area.addEventListener(event, ()=>{\r\n      (0,_utility_modules_js__WEBPACK_IMPORTED_MODULE_0__.classAdder)(area, \"highlight\")\r\n    })\r\n  })\r\n  // unhighlighting\r\n  unHighlightEvents.forEach(event =>{\r\n    area.addEventListener(event, ()=>{\r\n      ;(0,_utility_modules_js__WEBPACK_IMPORTED_MODULE_0__.classRemover)(area, \"highlight\")\r\n    })\r\n  }) \r\n\r\n  // once something is dropped\r\n  area.addEventListener('drop', (e)=>{\r\n    handleDrop(e,area)\r\n  }, false)\r\n\r\n  //removing img (cancel) btn eventlistners\r\n  area.addEventListener('click',()=>{\r\n    area.querySelector('.input_file').click()\r\n  })\r\n\r\n  //on any chnage (inp upload mainly)\r\n  area.addEventListener(\"change\",(e)=>{\r\n    if (e.target.files[0]) {\r\n        previewFile(e.target.files[0], area)\r\n    }\r\n})\r\n})\r\n  \n\n//# sourceURL=webpack://Al_zehra_perfumes/./src/js/admin-new-product.js?");

/***/ }),

/***/ "./src/js/utility-modules.js":
/*!***********************************!*\
  !*** ./src/js/utility-modules.js ***!
  \***********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (50:27)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|     showConfirmButton: false,\\n|     timer: duration,\\n>     timerProgressBar: true,,\\n|     \\n|   });\");\n\n//# sourceURL=webpack://Al_zehra_perfumes/./src/js/utility-modules.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/admin-new-product.js");
/******/ 	
/******/ })()
;