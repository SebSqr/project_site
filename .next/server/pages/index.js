module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/Seb/Desktop/project_site/components/Layout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// components/Layout.js\n\n\n\n\nconst Layout = props => __jsx(\"div\", {\n  className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.layoutStyle,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }\n}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }\n}, __jsx(\"title\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 13\n  }\n}, \"Projects\")), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }\n}), __jsx(\"div\", {\n  className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.contentStyle,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }\n}, props.children), __jsx(\"div\", {\n  className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.animationArea,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }\n}, __jsx(\"ul\", {\n  className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boxArea,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 13\n  }\n}, __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 17\n  }\n}), __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 17\n  }\n}), __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 17\n  }\n}), __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 17\n  }\n}), __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 17\n  }\n}), __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 17\n  }\n}))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwic3R5bGVzIiwibGF5b3V0U3R5bGUiLCJjb250ZW50U3R5bGUiLCJjaGlsZHJlbiIsImFuaW1hdGlvbkFyZWEiLCJib3hBcmVhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsS0FBSyxJQUNoQjtBQUFLLFdBQVMsRUFBRUMseURBQU0sQ0FBQ0MsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixDQURKLEVBSUksTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSkosRUFNSTtBQUFLLFdBQVMsRUFBRUQseURBQU0sQ0FBQ0UsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNLSCxLQUFLLENBQUNJLFFBRFgsQ0FOSixFQVVJO0FBQUssV0FBUyxFQUFFSCx5REFBTSxDQUFDSSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBSSxXQUFTLEVBQUVKLHlEQUFNLENBQUNLLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTkosQ0FESixDQVZKLENBREo7O0FBd0JlUCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9MYXlvdXQuanNcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9OYXZCYXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXlvdXQubW9kdWxlLmNzcydcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0U3R5bGV9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5Qcm9qZWN0czwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRTdHlsZX0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59IFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5pbWF0aW9uQXJlYX0+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuYm94QXJlYX0+XG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/Layout.module.css":
/*!**************************************!*\
  !*** ./components/Layout.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layoutStyle\": \"Layout_layoutStyle__2h30L\",\n\t\"contentStyle\": \"Layout_contentStyle__fH4Pr\",\n\t\"animationArea\": \"Layout_animationArea__1ebYB\",\n\t\"boxArea\": \"Layout_boxArea__2tBEs\",\n\t\"animate\": \"Layout_animate__2P1o_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5tb2R1bGUuY3NzP2Y1NDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYXlvdXRTdHlsZVwiOiBcIkxheW91dF9sYXlvdXRTdHlsZV9fMmgzMExcIixcblx0XCJjb250ZW50U3R5bGVcIjogXCJMYXlvdXRfY29udGVudFN0eWxlX19mSDRQclwiLFxuXHRcImFuaW1hdGlvbkFyZWFcIjogXCJMYXlvdXRfYW5pbWF0aW9uQXJlYV9fMWViWUJcIixcblx0XCJib3hBcmVhXCI6IFwiTGF5b3V0X2JveEFyZWFfXzJ0QkVzXCIsXG5cdFwiYW5pbWF0ZVwiOiBcIkxheW91dF9hbmltYXRlX18yUDFvX1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.module.css\n");

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.css */ \"./components/NavBar.module.css\");\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Seb/Desktop/project_site/components/NavBar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// components/NavBar.js\n\n\nconst NavBar = () => __jsx(\"div\", {\n  className: _NavBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navBarStyle,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}, \"Projects\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci5qcz9lYjI0Il0sIm5hbWVzIjpbIk5hdkJhciIsInN0eWxlcyIsIm5hdkJhclN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUUsTUFBTUEsTUFBTSxHQUFHLE1BQ2I7QUFBSyxXQUFTLEVBQUVDLHlEQUFNLENBQUNDLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjs7QUFNZUYscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvTmF2QmFyLmpzXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2QmFyLm1vZHVsZS5jc3MnXG5cbiAgY29uc3QgTmF2QmFyID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2QmFyU3R5bGV9PlxuICAgICAgUHJvamVjdHNcbiAgICA8L2Rpdj5cbiAgKTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ }),

/***/ "./components/NavBar.module.css":
/*!**************************************!*\
  !*** ./components/NavBar.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"navBarStyle\": \"NavBar_navBarStyle__1Lhvg\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci5tb2R1bGUuY3NzP2U1OWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2QmFyU3R5bGVcIjogXCJOYXZCYXJfbmF2QmFyU3R5bGVfXzFMaHZnXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.module.css\n");

/***/ }),

/***/ "./components/Tile.js":
/*!****************************!*\
  !*** ./components/Tile.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Tile_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile.module.css */ \"./components/Tile.module.css\");\n/* harmony import */ var _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tile_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Seb/Desktop/project_site/components/Tile.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// components/Tile.js\n\n\nconst Tile = props => __jsx(\"div\", {\n  className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tileStyle,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}, __jsx(\"div\", {\n  className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.topHalf,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }\n}, __jsx(\"img\", {\n  className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo,\n  src: props.src,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 13\n  }\n})), __jsx(\"div\", {\n  className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bottomHalf,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 7\n  }\n}, __jsx(\"div\", {\n  className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 11\n  }\n}, __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 13\n  }\n}, props.title)), __jsx(\"div\", {\n  className: _Tile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 11\n  }\n}, __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 13\n  }\n}, props.text))), props.children);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpbGUuanM/NTkxMSJdLCJuYW1lcyI6WyJUaWxlIiwicHJvcHMiLCJzdHlsZXMiLCJ0aWxlU3R5bGUiLCJ0b3BIYWxmIiwicGhvdG8iLCJzcmMiLCJib3R0b21IYWxmIiwidGl0bGUiLCJwYXJhZ3JhcGgiLCJ0ZXh0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFRSxNQUFNQSxJQUFJLEdBQUlDLEtBQUQsSUFDWDtBQUFLLFdBQVMsRUFBRUMsdURBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUVJO0FBQUssV0FBUyxFQUFFRCx1REFBTSxDQUFDRSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBSyxXQUFTLEVBQUVGLHVEQUFNLENBQUNHLEtBQXZCO0FBQThCLEtBQUcsRUFBRUosS0FBSyxDQUFDSyxHQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREosQ0FGSixFQU1FO0FBQUssV0FBUyxFQUFFSix1REFBTSxDQUFDSyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBSyxXQUFTLEVBQUVMLHVEQUFNLENBQUNNLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUtQLEtBQUssQ0FBQ08sS0FBWCxDQURGLENBREosRUFJSTtBQUFLLFdBQVMsRUFBRU4sdURBQU0sQ0FBQ08sU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSVIsS0FBSyxDQUFDUyxJQUFWLENBREYsQ0FKSixDQU5GLEVBZ0JHVCxLQUFLLENBQUNVLFFBaEJULENBREY7O0FBc0JlWCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvVGlsZS5qc1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RpbGUubW9kdWxlLmNzcydcblxuICBjb25zdCBUaWxlID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWxlU3R5bGV9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wSGFsZn0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfSBzcmM9e3Byb3BzLnNyY30+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbUhhbGZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgIDxwPntwcm9wcy50ZXh0fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgIDwvZGl2PlxuICApO1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgVGlsZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Tile.js\n");

/***/ }),

/***/ "./components/Tile.module.css":
/*!************************************!*\
  !*** ./components/Tile.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"tileStyle\": \"Tile_tileStyle__1XhKP\",\n\t\"photo\": \"Tile_photo__J6F9C\",\n\t\"topHalf\": \"Tile_topHalf__1a0fg\",\n\t\"bottomHalf\": \"Tile_bottomHalf__29b6I\",\n\t\"paragraph\": \"Tile_paragraph__3ug2w\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpbGUubW9kdWxlLmNzcz9iZDhjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpbGUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpbGVTdHlsZVwiOiBcIlRpbGVfdGlsZVN0eWxlX18xWGhLUFwiLFxuXHRcInBob3RvXCI6IFwiVGlsZV9waG90b19fSjZGOUNcIixcblx0XCJ0b3BIYWxmXCI6IFwiVGlsZV90b3BIYWxmX18xYTBmZ1wiLFxuXHRcImJvdHRvbUhhbGZcIjogXCJUaWxlX2JvdHRvbUhhbGZfXzI5YjZJXCIsXG5cdFwicGFyYWdyYXBoXCI6IFwiVGlsZV9wYXJhZ3JhcGhfXzN1ZzJ3XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Tile.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tile */ \"./components/Tile.js\");\nvar _jsxFileName = \"/Users/Seb/Desktop/project_site/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // components/Tile.js\n\n\n\n\nconst Home = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}, __jsx(\"div\", {\n  className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tileListContainer,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }\n}, __jsx(\"ul\", {\n  className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tileList,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }\n}, __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 13\n  }\n}, __jsx(_components_Tile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  h1: \"Statistics Calculator\",\n  src: \"/ml_learning.jpg\",\n  title: \"Machine Learning\",\n  text: \"Two predictive machine learning models on determining new policyholders' risk  on car insurance claims, and secondly for music taste by location.\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 17\n  }\n})), __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 13\n  }\n}, __jsx(_components_Tile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 17\n  }\n})), __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 13\n  }\n}, __jsx(_components_Tile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 17\n  }\n})))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiLCJ0aWxlTGlzdENvbnRhaW5lciIsInRpbGVMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFDVCxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFLLFdBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDQTtBQUFJLFdBQVMsRUFBRUQsd0RBQU0sQ0FBQ0UsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSSxNQUFDLHdEQUFEO0FBQU0sSUFBRSxFQUFDLHVCQUFUO0FBQWlDLEtBQUcsRUFBRSxrQkFBdEM7QUFBMEQsT0FBSyxFQUFDLGtCQUFoRTtBQUNKLE1BQUksRUFBQyxtSkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQUosQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBSixDQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFKLENBTEosQ0FEQSxDQURKLENBREo7O0FBY2VILG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuLy8gY29tcG9uZW50cy9UaWxlLmpzXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcbmltcG9ydCBUaWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1RpbGVcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbGVMaXN0Q29udGFpbmVyfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnRpbGVMaXN0fT5cbiAgICAgICAgICAgIDxsaT48VGlsZSBoMT1cIlN0YXRpc3RpY3MgQ2FsY3VsYXRvclwiIHNyYz17XCIvbWxfbGVhcm5pbmcuanBnXCJ9IHRpdGxlPVwiTWFjaGluZSBMZWFybmluZ1wiXG4gICAgICAgICAgICB0ZXh0PVwiVHdvIHByZWRpY3RpdmUgbWFjaGluZSBsZWFybmluZyBtb2RlbHMgb24gZGV0ZXJtaW5pbmcgbmV3IHBvbGljeWhvbGRlcnMnIHJpc2sgXG4gICAgICAgICAgICBvbiBjYXIgaW5zdXJhbmNlIGNsYWltcywgYW5kIHNlY29uZGx5IGZvciBtdXNpYyB0YXN0ZSBieSBsb2NhdGlvbi5cIj48L1RpbGU+PC9saT5cbiAgICAgICAgICAgIDxsaT48VGlsZT48L1RpbGU+PC9saT5cbiAgICAgICAgICAgIDxsaT48VGlsZT48L1RpbGU+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"tileListContainer\": \"index_tileListContainer__1Aw5F\",\n\t\"tileList\": \"index_tileList__vdnEw\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzP2RkYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aWxlTGlzdENvbnRhaW5lclwiOiBcImluZGV4X3RpbGVMaXN0Q29udGFpbmVyX18xQXc1RlwiLFxuXHRcInRpbGVMaXN0XCI6IFwiaW5kZXhfdGlsZUxpc3RfX3ZkbkV3XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });