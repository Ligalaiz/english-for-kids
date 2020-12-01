/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.routes.js":
/*!***************************!*\
  !*** ./app/app.routes.js ***!
  \***************************/
/*! exports provided: pageTypeRoutes, templatesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageTypeRoutes", function() { return pageTypeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templatesRoutes", function() { return templatesRoutes; });
/* harmony import */ var _pages_index_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.pages */ "./app/pages/index.pages.js");
var _templatesRoutes;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var pageTypeRoutes = {
  defaultPageType: 'category',
  categoryPageType: 'category',
  statisticsPageType: 'statistics'
};
var templatesRoutes = (_templatesRoutes = {}, _defineProperty(_templatesRoutes, pageTypeRoutes.defaultPageType, _pages_index_pages__WEBPACK_IMPORTED_MODULE_0__["categoryPageTemplate"]), _defineProperty(_templatesRoutes, pageTypeRoutes.categoryPageType, _pages_index_pages__WEBPACK_IMPORTED_MODULE_0__["categoryPageTemplate"]), _defineProperty(_templatesRoutes, pageTypeRoutes.statisticsPageType, _pages_index_pages__WEBPACK_IMPORTED_MODULE_0__["statisticsPageTemplate"]), _templatesRoutes);
Object(_pages_index_pages__WEBPACK_IMPORTED_MODULE_0__["commonPageTemplate"])(document.querySelector('body'));

/***/ }),

/***/ "./app/constants/constants.js":
/*!************************************!*\
  !*** ./app/constants/constants.js ***!
  \************************************/
/*! exports provided: DELAY, DELAY_MS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELAY", function() { return DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELAY_MS", function() { return DELAY_MS; });
// game
var DELAY = 3;
var DELAY_MS = 5000;


/***/ }),

/***/ "./app/data/animal.data.js":
/*!*********************************!*\
  !*** ./app/data/animal.data.js ***!
  \*********************************/
/*! exports provided: animalData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animalData", function() { return animalData; });
var animalData = [{
  title: 'bear',
  cardName: 'bear',
  translate: 'медведь',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'cat',
  cardName: 'cat',
  translate: 'кошка',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'eagle',
  cardName: 'eagle',
  translate: 'орёл',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'human',
  cardName: 'human',
  translate: 'человек',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'killer whale',
  cardName: 'killerWhale',
  translate: 'касатка',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'purgatorius',
  cardName: 'purgatorius',
  translate: 'пургаториус',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'dog',
  cardName: 'animal',
  translate: 'собака',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'tiger',
  cardName: 'tiger',
  translate: 'тигр',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}];

/***/ }),

/***/ "./app/data/cars.data.js":
/*!*******************************!*\
  !*** ./app/data/cars.data.js ***!
  \*******************************/
/*! exports provided: carsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carsData", function() { return carsData; });
var carsData = [{
  title: 'buick',
  cardName: 'buick',
  translate: 'бьюик',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'cadillac',
  cardName: 'cadillac',
  translate: 'кадиллак',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'chevy',
  cardName: 'chevy',
  translate: 'шеврлет',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'dodge',
  cardName: 'dodge',
  translate: 'додж',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'ford',
  cardName: 'ford',
  translate: 'форд',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'freightliner',
  cardName: 'freightliner',
  translate: 'фрейтлайнер',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'l-atv',
  cardName: 'l-atv',
  translate: 'л-атв',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'tesla',
  cardName: 'tesla',
  translate: 'тесла',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}];

/***/ }),

/***/ "./app/data/category.data.js":
/*!***********************************!*\
  !*** ./app/data/category.data.js ***!
  \***********************************/
/*! exports provided: categoryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryData", function() { return categoryData; });
var categoryData = [{
  title: 'City',
  cardName: 'city'
}, {
  title: 'Home',
  cardName: 'home'
}, {
  title: 'Tehnology',
  cardName: 'it'
}, {
  title: 'Weather',
  cardName: 'weather'
}, {
  title: 'Sport',
  cardName: 'sport'
}, {
  title: 'Health',
  cardName: 'health'
}, {
  title: 'Animal',
  cardName: 'animal'
}, {
  title: 'Cars',
  cardName: 'cars'
}];

/***/ }),

/***/ "./app/data/city.data.js":
/*!*******************************!*\
  !*** ./app/data/city.data.js ***!
  \*******************************/
/*! exports provided: cityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityData", function() { return cityData; });
var cityData = [{
  title: 'brussels',
  cardName: 'brussels',
  translate: 'брюссель',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'los-angeles',
  cardName: 'losAngeles',
  translate: 'лос-анджелес',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'london',
  cardName: 'london',
  translate: 'лондон',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'minsk',
  cardName: 'minsk',
  translate: 'минск',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'madrid',
  cardName: 'madrid',
  translate: 'мадрид',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'new-york',
  cardName: 'newYork',
  translate: 'нью-йорк',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'paris',
  cardName: 'paris',
  translate: 'париж',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'singapore',
  cardName: 'singapore',
  translate: 'сингапур',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}];

/***/ }),

/***/ "./app/data/health.data.js":
/*!*********************************!*\
  !*** ./app/data/health.data.js ***!
  \*********************************/
/*! exports provided: healthData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthData", function() { return healthData; });
var healthData = [{
  title: 'pressure',
  cardName: 'pressure',
  translate: 'давление',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'fitness',
  cardName: 'fitness',
  translate: 'фитнес',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'food',
  cardName: 'food',
  translate: 'еда',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'vitamins',
  cardName: 'vitamins',
  translate: 'витамины',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'meditation',
  cardName: 'meditation',
  translate: 'медитация',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'water',
  cardName: 'water',
  translate: 'вода',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'happiness',
  cardName: 'happiness',
  translate: 'счастье',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'sleep',
  cardName: 'sleep',
  translate: 'сон',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}];

/***/ }),

/***/ "./app/data/home.data.js":
/*!*******************************!*\
  !*** ./app/data/home.data.js ***!
  \*******************************/
/*! exports provided: homeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeData", function() { return homeData; });
var homeData = [{
  title: 'living-room',
  cardName: 'livingRoom',
  translate: 'гостиная',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'house',
  cardName: 'house',
  translate: 'дом',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'backyard',
  cardName: 'backyard',
  translate: 'двор',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'pool',
  cardName: 'pool',
  translate: 'бассейн',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'kitchen',
  cardName: 'kitchen',
  translate: 'кухня',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'hall',
  cardName: 'hall',
  translate: 'зал',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'fireplace',
  cardName: 'fireplace',
  translate: 'камин',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'bedroom',
  cardName: 'bedroom',
  translate: 'спальня',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}];

/***/ }),

/***/ "./app/data/index.data.js":
/*!********************************!*\
  !*** ./app/data/index.data.js ***!
  \********************************/
/*! exports provided: cityData, homeData, itData, weatherData, sportData, healthData, animalData, carsData, categoryData, statisticsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _city_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city.data */ "./app/data/city.data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cityData", function() { return _city_data__WEBPACK_IMPORTED_MODULE_0__["cityData"]; });

/* harmony import */ var _home_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.data */ "./app/data/home.data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "homeData", function() { return _home_data__WEBPACK_IMPORTED_MODULE_1__["homeData"]; });

/* harmony import */ var _it_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./it.data */ "./app/data/it.data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itData", function() { return _it_data__WEBPACK_IMPORTED_MODULE_2__["itData"]; });

/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather.data */ "./app/data/weather.data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "weatherData", function() { return _weather_data__WEBPACK_IMPORTED_MODULE_3__["weatherData"]; });

/* harmony import */ var _sport_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sport.data */ "./app/data/sport.data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sportData", function() { return _sport_data__WEBPACK_IMPORTED_MODULE_4__["sportData"]; });

/* harmony import */ var _health_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./health.data */ "./app/data/health.data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "healthData", function() { return _health_data__WEBPACK_IMPORTED_MODULE_5__["healthData"]; });

/* harmony import */ var _animal_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animal.data */ "./app/data/animal.data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animalData", function() { return _animal_data__WEBPACK_IMPORTED_MODULE_6__["animalData"]; });

/* harmony import */ var _cars_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cars.data */ "./app/data/cars.data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "carsData", function() { return _cars_data__WEBPACK_IMPORTED_MODULE_7__["carsData"]; });

/* harmony import */ var _category_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category.data */ "./app/data/category.data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categoryData", function() { return _category_data__WEBPACK_IMPORTED_MODULE_8__["categoryData"]; });

/* harmony import */ var _statistics_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./statistics.data */ "./app/data/statistics.data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statisticsData", function() { return _statistics_data__WEBPACK_IMPORTED_MODULE_9__["statisticsData"]; });













/***/ }),

/***/ "./app/data/it.data.js":
/*!*****************************!*\
  !*** ./app/data/it.data.js ***!
  \*****************************/
/*! exports provided: itData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itData", function() { return itData; });
var itData = [{
  title: 'processor',
  cardName: 'tehnology',
  translate: 'процессор',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'collider',
  cardName: 'collider',
  translate: 'коллайдер',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'lidar',
  cardName: 'lidar',
  translate: 'лидар',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'сomputer',
  cardName: 'сomputer',
  translate: 'компьютер',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'spacex',
  cardName: 'spacex',
  translate: 'пространство x',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'starlink',
  cardName: 'starlink',
  translate: 'звездочка',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'server',
  cardName: 'server',
  translate: 'сервер',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'telescope',
  cardName: 'telescope',
  translate: 'телескоп',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}];

/***/ }),

/***/ "./app/data/sport.data.js":
/*!********************************!*\
  !*** ./app/data/sport.data.js ***!
  \********************************/
/*! exports provided: sportData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sportData", function() { return sportData; });
var sportData = [{
  title: 'cycle race',
  cardName: 'cycleRace',
  translate: 'велогонка',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'run',
  cardName: 'run',
  translate: 'бег',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'skiing',
  cardName: 'skiing',
  translate: 'горные лыжи',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'skydiving',
  cardName: 'skydiving',
  translate: 'прыжки с парашютом',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'swimming',
  cardName: 'swimming',
  translate: 'плавание',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'box',
  cardName: 'box',
  translate: 'бокс',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'mountaineering',
  cardName: 'mountaineering',
  translate: 'альпинизм',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'fmx',
  cardName: 'fmx',
  translate: 'фмх',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}];

/***/ }),

/***/ "./app/data/statistics.data.js":
/*!*************************************!*\
  !*** ./app/data/statistics.data.js ***!
  \*************************************/
/*! exports provided: statisticsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statisticsData", function() { return statisticsData; });
var statisticsData = [{
  title: 'City'
}, {
  title: 'Home'
}, {
  title: 'IT'
}, {
  title: 'Weather'
}, {
  title: 'Sport'
}, {
  title: 'Health'
}, {
  title: 'Animal'
}, {
  title: 'Cars'
}];

/***/ }),

/***/ "./app/data/weather.data.js":
/*!**********************************!*\
  !*** ./app/data/weather.data.js ***!
  \**********************************/
/*! exports provided: weatherData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherData", function() { return weatherData; });
var weatherData = [{
  title: 'cloudy',
  cardName: 'cloudy',
  translate: 'облачно',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'frosty',
  cardName: 'frosty',
  translate: 'морозно',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'raining',
  cardName: 'raining',
  translate: 'дождливо',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'snowing',
  cardName: 'snowing',
  translate: 'снежно',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'sunny',
  cardName: 'sunny',
  translate: 'солнечно',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'tornados',
  cardName: 'tornados',
  translate: 'торнадо',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'tunderstorm',
  cardName: 'tunderstorm',
  translate: 'шторм',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}, {
  title: 'windy',
  cardName: 'windy',
  translate: 'ветренно',
  guess: 0,
  mistake: 0,
  click: 0,
  percent: 0
}];

/***/ }),

/***/ "./app/pages/category.pages.js":
/*!*************************************!*\
  !*** ./app/pages/category.pages.js ***!
  \*************************************/
/*! exports provided: categoryPageTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryPageTemplate", function() { return categoryPageTemplate; });
/* harmony import */ var _data_index_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/index.data */ "./app/data/index.data.js");

var contentRow = "\n  <div class=\"main__page  page page--{{class}}\">\n    <div class=\"page__row\">\n      {{cards}}\n    </div>\n  </div>\n  ";
var cardTemplate = "\n  <div class=\"page__card  card  card--{{class}}  card--{{cardName}}\" data-card=\"{{cardName}}\">\n    <div class=\"card__content  card__content--{{class}}  card__content--{{cardName}}\">\n      <p class=\"card__title  card__title--{{class}}   card__title--{{cardName}}\">{{title}}</p>\n    </div>\n  </div>";
var cardTemplateExport = '';
_data_index_data__WEBPACK_IMPORTED_MODULE_0__["categoryData"].forEach(function (el) {
  cardTemplateExport += cardTemplate.replace(/\{{(title)}}/g, el['title']).replace(/\{{(cardName)}}/g, el['cardName']);
});
var contentRowExport = contentRow.replace(/\{{(cards)}}/g, cardTemplateExport).replace(/\{{(class)}}/g, 'category');
var categoryPageTemplate = function categoryPageTemplate() {
  return contentRowExport;
};

/***/ }),

/***/ "./app/pages/common.pages.js":
/*!***********************************!*\
  !*** ./app/pages/common.pages.js ***!
  \***********************************/
/*! exports provided: commonPageTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonPageTemplate", function() { return commonPageTemplate; });
/* harmony import */ var _utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement.utils */ "./app/utils/createElement.utils.js");

var commonPageTemplate = function commonPageTemplate(parent) {
  Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'wrap', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('header', 'header', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'header__btn', null, null, ['type', 'button']), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'header__logo', 'English for kids', null, ['href', '#'], ['route', 'category']), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('nav', 'header__nav nav', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('ul', 'nav__list reset-list', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav__item', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'nav__link', 'Category', null, ['href', '#'], ['route', 'category'])], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav__item', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'nav__link', 'City', null, ['href', '#'], ['route', 'city'])], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav__item', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'nav__link', 'Home', null, ['href', '#'], ['route', 'home'])], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav__item', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'nav__link', 'Tehnology', null, ['href', '#'], ['route', 'it'])], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav__item', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'nav__link', 'Weather', null, ['href', '#'], ['route', 'weather'])], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav__item', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'nav__link', 'Sport', null, ['href', '#'], ['route', 'sport'])], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav__item', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'nav__link', 'Health', null, ['href', '#'], ['route', 'health'])], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav__item', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'nav__link', 'Animal', null, ['href', '#'], ['route', 'animal'])], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav__item', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'nav__link', 'Cars', null, ['href', '#'], ['route', 'cars'])], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav__item', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'nav__link', 'Statistics', null, ['href', '#'], ['route', 'statistics'])], null)], null)], null)], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('main', 'main', null, null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'timer__wrap', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'timer', null, null)], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'message__wrap', [Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'message__text', null, null)], null), Object(_utils_createElement_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'overlay', null, null)], parent);
};

/***/ }),

/***/ "./app/pages/index.pages.js":
/*!**********************************!*\
  !*** ./app/pages/index.pages.js ***!
  \**********************************/
/*! exports provided: commonPageTemplate, categoryPageTemplate, statisticsPageTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.pages */ "./app/pages/common.pages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonPageTemplate", function() { return _common_pages__WEBPACK_IMPORTED_MODULE_0__["commonPageTemplate"]; });

/* harmony import */ var _category_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.pages */ "./app/pages/category.pages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categoryPageTemplate", function() { return _category_pages__WEBPACK_IMPORTED_MODULE_1__["categoryPageTemplate"]; });

/* harmony import */ var _statistics_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics.pages */ "./app/pages/statistics.pages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statisticsPageTemplate", function() { return _statistics_pages__WEBPACK_IMPORTED_MODULE_2__["statisticsPageTemplate"]; });






/***/ }),

/***/ "./app/pages/statistics.pages.js":
/*!***************************************!*\
  !*** ./app/pages/statistics.pages.js ***!
  \***************************************/
/*! exports provided: statisticsPageTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statisticsPageTemplate", function() { return statisticsPageTemplate; });
/* harmony import */ var _data_index_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/index.data */ "./app/data/index.data.js");

var contentRow = "\n  <div class=\"main__page  page page--{{class}}\">\n    <div class=\"page__row\">\n      {{cards}}\n    </div>\n  </div>\n  ";
var cardTemplate = "\n  <div class=\"page__card  card\">\n    <div class=\"card__content\">\n      <p class=\"card__title\">{{title}}</p>\n      <button class=\"card__btn\"></button>\n    </div>\n  </div>";
var cardTemplateExport = '';
_data_index_data__WEBPACK_IMPORTED_MODULE_0__["statisticsData"].forEach(function (el) {
  cardTemplateExport += cardTemplate.replace(/\{{(title)}}/g, el['title']);
});
var contentRowExport = contentRow.replace(/\{{(class)}}/g, 'statistics').replace(/\{{(cards)}}/g, cardTemplateExport);
var statisticsPageTemplate = function statisticsPageTemplate() {
  return contentRowExport;
};

/***/ }),

/***/ "./app/utils/cardsRender.utils.js":
/*!****************************************!*\
  !*** ./app/utils/cardsRender.utils.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cardsRenderUtils; });
/* harmony import */ var _data_index_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/index.data */ "./app/data/index.data.js");
/* harmony import */ var _cardsShuffle_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardsShuffle.utils */ "./app/utils/cardsShuffle.utils.js");
/* harmony import */ var _storage_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.utils */ "./app/utils/storage.utils.js");




function addCards(_ref) {
  var target = _ref.target,
      page = _ref.page;
  var tempData;
  var value = page ? page : target.dataset.route || target.dataset.card;

  switch (value) {
    case 'city':
      tempData = _data_index_data__WEBPACK_IMPORTED_MODULE_0__["cityData"];
      break;

    case 'home':
      tempData = _data_index_data__WEBPACK_IMPORTED_MODULE_0__["homeData"];
      break;

    case 'it':
      tempData = _data_index_data__WEBPACK_IMPORTED_MODULE_0__["itData"];
      break;

    case 'weather':
      tempData = _data_index_data__WEBPACK_IMPORTED_MODULE_0__["weatherData"];
      break;

    case 'sport':
      tempData = _data_index_data__WEBPACK_IMPORTED_MODULE_0__["sportData"];
      break;

    case 'health':
      tempData = _data_index_data__WEBPACK_IMPORTED_MODULE_0__["healthData"];
      break;

    case 'animal':
      tempData = _data_index_data__WEBPACK_IMPORTED_MODULE_0__["animalData"];
      break;

    case 'cars':
      tempData = _data_index_data__WEBPACK_IMPORTED_MODULE_0__["carsData"];
      break;
  }

  Object(_cardsShuffle_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(tempData);
  var contentRow = "\n    <label class=\"switch\">\n      <input id=\"checkbox\" type=\"checkbox\" data-control=\"checkbox\">\n      <span class=\"slider round\"></span>\n    </label>\n    <div class=\"main__page  page page--{{class}}\" data-page=\"{{class}}\">\n      <div class=\"page__stars  stars\"></div>\n      <div class=\"page__row\">\n        {{cards}}\n      </div>\n      <button class=\"repeat__btn\" type=\"button\">repeat</button>\n    </div>";
  var cardTemplate = "\n    <div class=\"page__card  card  card--{{class}}  card--{{cardName}}\" data-sound=\"{{cardName}}\" data-category=\"{{class}}\" data-name=\"{{cardName}}\">\n      <div class=\"card__content  card__content--{{class}}  card__content--{{cardName}}\">\n        <button class=\"card__btn\" data-btn=\"btn\"></button>\n        <p class=\"card__title  card__title--{{class}}   card__title--{{cardName}}\">{{title}}</p>\n      </div>\n    </div>";
  var cardTemplateExport = '';
  tempData.forEach(function (el) {
    cardTemplateExport += cardTemplate.replace(/\{{(title)}}/g, el['title']).replace(/\{{(cardName)}}/g, el['cardName']);
  });
  var contentRowExport = contentRow.replace(/\{{(cards)}}/g, cardTemplateExport).replace(/\{{(class)}}/g, value);
  document.body.querySelector('.main').innerHTML = contentRowExport;
}

function cardsRenderUtils(_ref2) {
  var target = _ref2.target,
      routerUtils = _ref2.routerUtils,
      page = _ref2.page;

  if (!page) {
    if (target.classList.contains('nav__link') || target.classList.contains('header__logo') || target.classList.contains('card--category')) {
      if (target.dataset.route === 'category' || target.dataset.route === 'statistics') {
        routerUtils.set(target.dataset.route);
      } else {
        addCards({
          target: target
        });
      }

      Object(_storage_utils__WEBPACK_IMPORTED_MODULE_2__["set"])('page', target.dataset.route || target.dataset.card);
    }
  } else {
    addCards({
      page: page
    });
  }
}

/***/ }),

/***/ "./app/utils/cardsRotate.utils.js":
/*!****************************************!*\
  !*** ./app/utils/cardsRotate.utils.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cardsRotateUtils; });
/* harmony import */ var _data_index_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/index.data */ "./app/data/index.data.js");

function cardsRotateUtils(target, type) {
  var targetObj = null;

  if (type.match(/mousedown/)) {
    if (!target.dataset) return;

    if (target.dataset.btn) {
      var targetName = target.closest('.card').dataset.name,
          targetCategoryArray = _data_index_data__WEBPACK_IMPORTED_MODULE_0__["".concat(target.closest('.card').dataset.category, "Data")];
      target.classList.add('card__btn--hidden');
      target.closest('.card').classList.add('card--rotate');
      target.closest('.card').querySelector('.card__title').classList.add('card__title--rotate');

      try {
        targetObj = targetCategoryArray.find(function (item) {
          return item['cardName'] === targetName;
        });
      } catch (e) {
        console.error(e);
      }

      target.closest('.card').querySelector('.card__title').innerText = "".concat(targetObj['translate']);
      target.closest('.card').addEventListener('mouseleave', function (_ref) {
        var target = _ref.target;
        target.closest('.card').querySelector('.card__title').classList.remove('card__title--rotate');
        target.closest('.card').querySelector('.card__title').innerText = "".concat(targetObj['title']);
        target.closest('.card').querySelector('.card__btn').classList.remove('card__btn--hidden');
        target.classList.remove('card--rotate');
      });
    }

    if (type.match(/mouseup/)) {
      target.classList.remove('card__btn--active');
    }
  }
}

/***/ }),

/***/ "./app/utils/cardsShuffle.utils.js":
/*!*****************************************!*\
  !*** ./app/utils/cardsShuffle.utils.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cardsShuffleUtils; });
function cardsShuffleUtils(tempData) {
  var j, temporary;

  for (var i = tempData.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temporary = tempData[j];
    tempData[j] = tempData[i];
    tempData[i] = temporary;
  }
}

/***/ }),

/***/ "./app/utils/cardsSound.utils.js":
/*!***************************************!*\
  !*** ./app/utils/cardsSound.utils.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cardsSoundUtils; });
function cardsSoundUtils(_ref) {
  var target = _ref.target,
      sound = _ref.sound,
      path = _ref.path;
  var audio = new Audio();
  audio.src = sound ? "".concat(path, "/").concat(sound, ".mp3") : "".concat(target.dataset.category, "/").concat(target.dataset.sound, ".mp3");
  audio.play();
}

/***/ }),

/***/ "./app/utils/changeCardsStyle.utils.js":
/*!*********************************************!*\
  !*** ./app/utils/changeCardsStyle.utils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return changeCardsStyleUtils; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function changeCardsStyleUtils() {
  var cards = _toConsumableArray(document.querySelectorAll('.card'));

  var cardsContent = _toConsumableArray(document.querySelectorAll('.card__content'));

  cards.forEach(function (item) {
    item.classList.toggle('card--game');
  });
  cardsContent.forEach(function (item) {
    item.classList.toggle('card__content--game');
  });
}

/***/ }),

/***/ "./app/utils/checkState.utils.js":
/*!***************************************!*\
  !*** ./app/utils/checkState.utils.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkStateUtils; });
/* harmony import */ var _storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.utils */ "./app/utils/storage.utils.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.routes */ "./app/app.routes.js");
/* harmony import */ var _router_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.utils */ "./app/utils/router.utils.js");
/* harmony import */ var _cardsRender_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardsRender.utils */ "./app/utils/cardsRender.utils.js");
/* harmony import */ var _changeCardsStyle_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changeCardsStyle.utils */ "./app/utils/changeCardsStyle.utils.js");
/* harmony import */ var _data_index_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/index.data */ "./app/data/index.data.js");






function checkStateUtils() {
  if (!Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('page')) {
    Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["set"])('page', 'category');
    Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["set"])('game', 'off');
  }

  if (!Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('gameProgress')) {
    var gameProgress = [];

    for (var key in _data_index_data__WEBPACK_IMPORTED_MODULE_5__) {
      gameProgress.push(_data_index_data__WEBPACK_IMPORTED_MODULE_5__[key]);
    }

    var tempArr = gameProgress.flat();
    Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["set"])('gameProgress', tempArr);
  }

  if (Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('page') === 'category') {
    _router_utils__WEBPACK_IMPORTED_MODULE_2__["routerUtils"].set(_app_routes__WEBPACK_IMPORTED_MODULE_1__["pageTypeRoutes"].defaultPageType);
  } else if (Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('page') === 'statistics') {
    _router_utils__WEBPACK_IMPORTED_MODULE_2__["routerUtils"].set('statistics');
  } else {
    var page = Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('page');
    Object(_cardsRender_utils__WEBPACK_IMPORTED_MODULE_3__["default"])({
      page: page
    });
    setTimeout(function () {
      document.getElementById('checkbox').checked = Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('game') === 'on' ? true : false;
    }, 0);

    if (Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('game') === 'on') {
      Object(_changeCardsStyle_utils__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }
  } // set('page', 'category');


  location.hash = Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('page');
}

/***/ }),

/***/ "./app/utils/createElement.utils.js":
/*!******************************************!*\
  !*** ./app/utils/createElement.utils.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createElementUtils; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createElementUtils(element, className, child, parent) {
  var el = document.createElement(element);

  if (className) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(className.split(' ')));
  }

  if (child && Array.isArray(child)) {
    child.forEach(function (item) {
      return item && el.appendChild(item);
    });
  } else if (child && _typeof(child) === 'object') {
    el.appendChild(child);
  } else if (child && typeof child === 'string') {
    el.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(el);
  }

  for (var _len = arguments.length, dataAttr = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    dataAttr[_key - 4] = arguments[_key];
  }

  if (dataAttr.length) {
    dataAttr.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attrName = _ref2[0],
          attrValue = _ref2[1];

      if (attrValue === '') {
        el.setAttribute(attrName, '');
      } else {
        if (attrName.match(/type|href|id|value|src|placeholder/)) {
          el.setAttribute(attrName, attrValue);
        } else {
          el.dataset[attrName] = attrValue;
        }
      }
    });
  }

  return el;
}

/***/ }),

/***/ "./app/utils/eventHandlers.utils.js":
/*!******************************************!*\
  !*** ./app/utils/eventHandlers.utils.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eventHandlersUtils; });
/* harmony import */ var _cardsSound_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardsSound.utils */ "./app/utils/cardsSound.utils.js");
/* harmony import */ var _cardsRender_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardsRender.utils */ "./app/utils/cardsRender.utils.js");
/* harmony import */ var _cardsRotate_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardsRotate.utils */ "./app/utils/cardsRotate.utils.js");
/* harmony import */ var _menuSwitcher_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuSwitcher.utils */ "./app/utils/menuSwitcher.utils.js");
/* harmony import */ var _storage_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.utils */ "./app/utils/storage.utils.js");
/* harmony import */ var _game_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.utils */ "./app/utils/game.utils.js");
/* harmony import */ var _game_repeatWord_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/repeatWord.utils */ "./app/utils/game/repeatWord.utils.js");








function handler(e, routerUtils) {
  var target = e.target,
      type = e.type;

  if (type.match(/click/)) {
    if (target.classList.value.match(/header__btn/)) {
      Object(_menuSwitcher_utils__WEBPACK_IMPORTED_MODULE_3__["menuSwitcherUtils"])();
    }

    if (target.classList.value.match(/nav__link|header__logo|overlay--active/)) {
      if (document.querySelector('.nav').classList.contains('nav--active')) {
        Object(_menuSwitcher_utils__WEBPACK_IMPORTED_MODULE_3__["menuCloseUtils"])();
      }
    }

    Object(_cardsRender_utils__WEBPACK_IMPORTED_MODULE_1__["default"])({
      target: target,
      routerUtils: routerUtils
    });

    if (target.dataset.sound && Object(_storage_utils__WEBPACK_IMPORTED_MODULE_4__["get"])('game') === 'off') {
      Object(_cardsSound_utils__WEBPACK_IMPORTED_MODULE_0__["default"])({
        target: target
      });
    }

    setTimeout(function () {
      if (document.getElementById('checkbox')) {
        document.getElementById('checkbox').checked = Object(_storage_utils__WEBPACK_IMPORTED_MODULE_4__["get"])('game') === 'on' ? true : false;
      }

      location.hash = Object(_storage_utils__WEBPACK_IMPORTED_MODULE_4__["get"])('page');
    }, 0);
  }

  if (type.match(/mousedown|mouseup|mouseleave/)) {
    Object(_cardsRotate_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(target, type);
    Object(_menuSwitcher_utils__WEBPACK_IMPORTED_MODULE_3__["homeBtnUtils"])(target, type);
    Object(_game_repeatWord_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(target, type);
  }

  if (type.match(/change/)) {
    Object(_game_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(target);
  }
}

function eventHandlersUtils(routerUtils) {
  document.addEventListener('mouseup', function (e) {
    return handler(e);
  });
  document.addEventListener('mousedown', function (e) {
    return handler(e);
  });
  document.addEventListener('change', function (e) {
    return handler(e);
  });
  document.addEventListener('click', function (e) {
    return handler(e, routerUtils);
  });
}

/***/ }),

/***/ "./app/utils/game.utils.js":
/*!*********************************!*\
  !*** ./app/utils/game.utils.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gameUtils; });
/* harmony import */ var _storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.utils */ "./app/utils/storage.utils.js");
/* harmony import */ var _changeCardsStyle_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeCardsStyle.utils */ "./app/utils/changeCardsStyle.utils.js");
/* harmony import */ var _game_gameLogic_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/gameLogic.utils */ "./app/utils/game/gameLogic.utils.js");



function gameUtils(target) {
  var repeatBtn = document.querySelector('.repeat__btn');
  if (!target.dataset) return;

  if (target.dataset.control.match(/checkbox/)) {
    if (Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('game') === 'on') {
      Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["set"])('game', 'off');
      Object(_changeCardsStyle_utils__WEBPACK_IMPORTED_MODULE_1__["default"])();
      repeatBtn.classList.remove('repeat__btn--active');
    } else if (Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('game') === 'off') {
      Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["set"])('game', 'on');
      Object(_changeCardsStyle_utils__WEBPACK_IMPORTED_MODULE_1__["default"])();
      repeatBtn.classList.add('repeat__btn--active');
    }

    Object(_game_gameLogic_utils__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
}

/***/ }),

/***/ "./app/utils/game/clearStarsField.utils.js":
/*!*************************************************!*\
  !*** ./app/utils/game/clearStarsField.utils.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clearStarsFieldUtils; });
function clearStarsFieldUtils(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/***/ }),

/***/ "./app/utils/game/clickHandler.utils.js":
/*!**********************************************!*\
  !*** ./app/utils/game/clickHandler.utils.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clickHandlerUtils; });
/* harmony import */ var _cardsSound_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardsSound.utils */ "./app/utils/cardsSound.utils.js");
/* harmony import */ var _storage_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.utils */ "./app/utils/storage.utils.js");
/* harmony import */ var _createElement_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createElement.utils */ "./app/utils/createElement.utils.js");
/* harmony import */ var _clearStarsField_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearStarsField.utils */ "./app/utils/game/clearStarsField.utils.js");
/* harmony import */ var _changeCardsStyle_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../changeCardsStyle.utils */ "./app/utils/changeCardsStyle.utils.js");
/* harmony import */ var _showGameMessage_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showGameMessage.utils */ "./app/utils/game/showGameMessage.utils.js");






function clickHandlerUtils(_ref) {
  var cards = _ref.cards,
      count = _ref.count,
      songArray = _ref.songArray;
  var starsField = document.querySelector('.stars');
  var repeatBtn = document.querySelector('.repeat__btn');

  function listener(e) {
    e.preventDefault();
    var target = e.target;
    if (!target.closest('.card')) return;

    if (target.closest('.card').dataset.sound === songArray[count]) {
      Object(_createElement_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', 'stars__item stars__item--true', null, starsField);
      target.closest('.card').classList.add('card--disabled');
      console.log('добавляем в score успех');
      Object(_cardsSound_utils__WEBPACK_IMPORTED_MODULE_0__["default"])({
        sound: 'bell',
        path: 'app'
      });
      this.removeEventListener('click', listener);
    } else {
      Object(_cardsSound_utils__WEBPACK_IMPORTED_MODULE_0__["default"])({
        sound: 'error',
        path: 'app'
      });
      Object(_createElement_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', 'stars__item stars__item--false', null, starsField);
      console.log('добавляем в score ошибку');
    }

    songArray.pop();
    Object(_storage_utils__WEBPACK_IMPORTED_MODULE_1__["set"])('gameArray', songArray);
    count--;

    if (count >= 0) {
      setTimeout(function () {
        return Object(_cardsSound_utils__WEBPACK_IMPORTED_MODULE_0__["default"])({
          path: Object(_storage_utils__WEBPACK_IMPORTED_MODULE_1__["get"])('page'),
          sound: songArray[count]
        });
      }, 1000);
    }

    if (count < 0) {
      Object(_clearStarsField_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(starsField);
      Object(_showGameMessage_utils__WEBPACK_IMPORTED_MODULE_5__["default"])();
      repeatBtn.classList.remove('repeat__btn--active');
      setTimeout(function () {
        Object(_storage_utils__WEBPACK_IMPORTED_MODULE_1__["set"])('game', 'off');
        Object(_changeCardsStyle_utils__WEBPACK_IMPORTED_MODULE_4__["default"])();

        if (document.getElementById('checkbox')) {
          document.getElementById('checkbox').checked = Object(_storage_utils__WEBPACK_IMPORTED_MODULE_1__["get"])('game') === 'on' ? true : false;
        }
      }, 3000);
      cards.forEach(function (item) {
        return item.classList.remove('card--disabled');
      });
    }
  }

  cards.forEach(function (item) {
    item.addEventListener('click', listener);
    var intervalId = setInterval(function () {
      if (Object(_storage_utils__WEBPACK_IMPORTED_MODULE_1__["get"])('game') === 'off') {
        item.removeEventListener('click', listener);
        clearInterval(intervalId);
      }
    }, 1000);
  });
}

/***/ }),

/***/ "./app/utils/game/gameLogic.utils.js":
/*!*******************************************!*\
  !*** ./app/utils/game/gameLogic.utils.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gameLogicUtils; });
/* harmony import */ var _storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.utils */ "./app/utils/storage.utils.js");
/* harmony import */ var _gameTimer_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameTimer.utils */ "./app/utils/game/gameTimer.utils.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/constants */ "./app/constants/constants.js");
/* harmony import */ var _cardsSound_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cardsSound.utils */ "./app/utils/cardsSound.utils.js");
/* harmony import */ var _clickHandler_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clickHandler.utils */ "./app/utils/game/clickHandler.utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





 // import repeatWordUtils from './repeatWord.utils';

function toDo() {
  var cards = document.querySelectorAll('.card');

  var songArray = _toConsumableArray(cards).map(function (item) {
    return item.dataset.sound;
  }).sort(function () {
    return Math.random() - 0.5;
  });

  Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["set"])('gameArray', songArray);
  var count = cards.length - 1;
  Object(_cardsSound_utils__WEBPACK_IMPORTED_MODULE_3__["default"])({
    path: Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('page'),
    sound: songArray[count]
  });
  Object(_clickHandler_utils__WEBPACK_IMPORTED_MODULE_4__["default"])({
    cards: cards,
    count: count,
    songArray: songArray
  });
}

function gameLogicUtils() {
  if (Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('game') === 'on') {
    Object(_gameTimer_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["DELAY"]);
    setTimeout(function () {
      return toDo();
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_2__["DELAY_MS"]);
    toDo();
  }
}

/***/ }),

/***/ "./app/utils/game/gameTimer.utils.js":
/*!*******************************************!*\
  !*** ./app/utils/game/gameTimer.utils.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gameTimerUtils; });
/* harmony import */ var _cardsSound_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardsSound.utils */ "./app/utils/cardsSound.utils.js");

function gameTimerUtils(DELAY) {
  var timer = document.querySelector('.timer__wrap'),
      timerTable = document.querySelector('.timer');
  timer.classList.add('timer__wrap--active');
  timerTable.textContent = DELAY;
  var timerSetInterval = setInterval(function () {
    timerTable.textContent = DELAY--;
    Object(_cardsSound_utils__WEBPACK_IMPORTED_MODULE_0__["default"])({
      sound: 'timer',
      path: 'app'
    });

    if (DELAY < 0) {
      clearInterval(timerSetInterval);
      Object(_cardsSound_utils__WEBPACK_IMPORTED_MODULE_0__["default"])({
        sound: 'bell',
        path: 'app'
      });
      timer.classList.remove('timer__wrap--active');
    }
  }, 1000);
}

/***/ }),

/***/ "./app/utils/game/repeatWord.utils.js":
/*!********************************************!*\
  !*** ./app/utils/game/repeatWord.utils.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return repeatWordUtils; });
/* harmony import */ var _storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.utils */ "./app/utils/storage.utils.js");
/* harmony import */ var _cardsSound_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardsSound.utils */ "./app/utils/cardsSound.utils.js");


function repeatWordUtils(target, type) {
  var repeatBtn = document.querySelector('.repeat__btn');

  function repeat() {
    {
      Object(_cardsSound_utils__WEBPACK_IMPORTED_MODULE_1__["default"])({
        sound: Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('gameArray')[Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('gameArray').length - 1],
        path: Object(_storage_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('page')
      });
    }
  }

  function animationBtn() {
    repeatBtn.classList.toggle('repeat__btn--anime');
  }

  if (target.classList.contains('repeat__btn')) {
    if (type.match(/mousedown/)) {
      animationBtn();
      repeat();
    }

    if (type.match(/mouseup/)) {
      animationBtn();
    }
  }
}

/***/ }),

/***/ "./app/utils/game/showGameMessage.utils.js":
/*!*************************************************!*\
  !*** ./app/utils/game/showGameMessage.utils.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showGameStatusUtils; });
function showGameStatusUtils() {
  var message = document.querySelector('.message__wrap');
  message.classList.add('message__wrap--active');
  setTimeout(function () {
    return message.classList.remove('message__wrap--active');
  }, 3000);
}

/***/ }),

/***/ "./app/utils/menuSwitcher.utils.js":
/*!*****************************************!*\
  !*** ./app/utils/menuSwitcher.utils.js ***!
  \*****************************************/
/*! exports provided: menuCloseUtils, homeBtnUtils, menuSwitcherUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuCloseUtils", function() { return menuCloseUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeBtnUtils", function() { return homeBtnUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuSwitcherUtils", function() { return menuSwitcherUtils; });
var nav = document.querySelector('.nav'),
    overlay = document.querySelector('.overlay'),
    menuBtn = document.querySelector('.header__btn'),
    logoBtn = document.querySelector('.header__logo');
function menuCloseUtils() {
  nav.classList.add('nav--deactive');
  nav.classList.remove('nav--active');
  menuBtn.classList.add('btn--deactive');
  menuBtn.classList.remove('btn--active');
  overlay.classList.remove('overlay--active');
}

function menuOpenUtils() {
  nav.classList.add('nav--active');
  menuBtn.classList.add('btn--active');
  nav.classList.remove('nav--deactive');
  overlay.classList.add('overlay--active');
  menuBtn.classList.remove('btn--deactive');
}

function homeBtnUtils(target, type) {
  if (target.classList.contains('header__logo')) {
    if (type.match(/mousedown/)) {
      logoBtn.classList.toggle('header__logo--active');
    }

    if (type.match(/mouseup/)) {
      logoBtn.classList.toggle('header__logo--active');
    }
  }
}
function menuSwitcherUtils() {
  nav.classList.contains('nav--active') ? menuCloseUtils() : menuOpenUtils();
}

/***/ }),

/***/ "./app/utils/router.utils.js":
/*!***********************************!*\
  !*** ./app/utils/router.utils.js ***!
  \***********************************/
/*! exports provided: routerUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerUtils", function() { return routerUtils; });
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.routes */ "./app/app.routes.js");

var routerUtils = {
  set: function set(routeType) {
    document.body.querySelector('.main').innerHTML = _app_routes__WEBPACK_IMPORTED_MODULE_0__["templatesRoutes"][routeType]();
  }
};

/***/ }),

/***/ "./app/utils/storage.utils.js":
/*!************************************!*\
  !*** ./app/utils/storage.utils.js ***!
  \************************************/
/*! exports provided: set, get, del */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
function set(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value));
}
function get(name) {
  var dafault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return JSON.parse(window.localStorage.getItem(name) || dafault);
}
function del(name) {
  localStorage.removeItem(name);
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_utils_router_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/utils/router.utils */ "./app/utils/router.utils.js");
/* harmony import */ var _app_utils_eventHandlers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/utils/eventHandlers.utils */ "./app/utils/eventHandlers.utils.js");
/* harmony import */ var _app_utils_checkState_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/utils/checkState.utils */ "./app/utils/checkState.utils.js");




Object(_app_utils_checkState_utils__WEBPACK_IMPORTED_MODULE_3__["default"])();
document.addEventListener('DOMContentLoaded', function () {
  return Object(_app_utils_eventHandlers_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(_app_utils_router_utils__WEBPACK_IMPORTED_MODULE_1__["routerUtils"]);
});

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map