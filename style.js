(function (blink) {
	'use strict';

	var OxfordTDL2Dev = function() {
		blink.theme.styles.basic.apply(this, arguments);
	}

	OxfordTDL2Dev.prototype = {
		bodyClassName: 'content_type_clase_oxford-tdl-2-dev',
		ckEditorStyles: {
			name: 'oxford-tdl-2-dev',
			styles: [
				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis'} }
			]
		},

		init: function() {
			var parent = blink.theme.styles.basic.prototype;
			parent.init.call(this);

			// Ejemplo carga de datos de la clase en una actividad.
			blink.getActivity(idcurso, idclase).done((function(data) {
				this.onActivityDataLoaded(data);
			}).bind(this));

			// Ejemplo carga de datos del libro en una actividad.
			blink.getCourse(idcurso).done((function(data) {
				this.onCourseDataLoaded(data);
			}).bind(this));
		},

		onActivityDataLoaded: function(data) {
			console.log('onActivityDataLoaded:');
			console.log(data);
			console.log(JSON.stringify(data));
		},

		onCourseDataLoaded: function(data) {
			console.log('onCourseDataLoaded:');
			console.log(data);
			console.log(JSON.stringify(data));
			oupTdlApp.init();
		}
	};

	OxfordTDL2Dev.prototype = _.extend({}, new blink.theme.styles.basic(), OxfordTDL2Dev.prototype);

	blink.theme.styles['oxford-tdl-2-dev'] = OxfordTDL2Dev;

	blink.events.on('loadSeguimientoCurso', function() {
		// Ejemplo carga de datos del libro en el toc del curso.
		blink.getCourse(idcurso).done(function(data) {
			var style = new OxfordTDL2Dev;
			style.onCourseDataLoaded(data);
		});
	})

})(blink);


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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var config = {
		dev: true,
		navBarMarginTop: 44,
		navBarMarginBottom: 0
	};
	exports.default = config;
	
	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	__webpack_require__(2);
	
	var _main = __webpack_require__(3);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var oupTdlApp = new _main2.default();
	
	
	/***/ }),
	/* 2 */
	/***/ (function(module, exports) {
	
	// removed by extract-text-webpack-plugin
	
	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	//Pantallas
	
	
	var _config = __webpack_require__(0);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _loadData = __webpack_require__(4);
	
	var _loadData2 = _interopRequireDefault(_loadData);
	
	var _loadingScreen = __webpack_require__(5);
	
	var _loadingScreen2 = _interopRequireDefault(_loadingScreen);
	
	var _splashScreen = __webpack_require__(6);
	
	var _splashScreen2 = _interopRequireDefault(_splashScreen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OupTdl = function () {
		function OupTdl() {
			_classCallCheck(this, OupTdl);
		}
	
		_createClass(OupTdl, [{
			key: 'init',
			value: function init() {
				var state = {
					loading: true,
					mainData: { //Datos vacíos a la espera de ser cargados
						title: '',
						units: []
					}
				};
	
				//Escribimos DOM
				var htmlDOM = '\n            <div id="oup_tdl_container">\n                <div id="oup_tdl_splash_screen">\n                    <div class="oup_splash__logo_oup"></div>\n                    <div class="oup_splash__logo_tdl oup_splash__logo_tdl--primary"></div>\n                    <div class="oup_splash__content">\n                        <h1 class="oup_splash__main_title"></h1>\n                        <div class="oup_splash__enter-btn clickable"><span>Enter</span></div>\n                    </div>\n                    <div class="oup_splash__footer">\xA9 Oxford University Press</div>\n                </div>\n            </div>\n        ';
				document.write(htmlDOM);
	
				var loadingScreen = new _loadingScreen2.default();
				var splashScreen = new _splashScreen2.default();
	
				//Cargamos datos
				(0, _loadData2.default)(function (data) {
					state.mainData = data;
					if (_config2.default.dev) console.log('Datos Cargados:', state.mainData);
					state.loading = false;
					loadingScreen.update(state.loading);
					splashScreen.init({ title: state.mainData.title });
				});
			}
		}]);
	
		return OupTdl;
	}();
	
	exports.default = OupTdl;
	
	/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _config = __webpack_require__(0);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loadData = function loadData(callback) {
		if (_config2.default.dev) console.log('Function loadData()');
		//Temp
		var data = { "url": "/coursePlayer/curso2.php?idcurso=512644", "isbn": "", "title": "Oxford TDL 2", "type": "Alemán", "description": "", "image": "", "show_go_to_page": false, "style_name": "oxford-tdl-2-dev", "units": [{ "number": 1, "id": "5484160", "isReview": false, "title": "Tema de prueba", "image": "../themes/responsive/images/libro/verde.png", "description": "Para desarrollo", "subunits": [{ "id": "31945387", "idExt": "", "title": "Libro Digital", "description": "", "level": "1", "contentStyle": "oxford-tdl-2-dev", "type": "libro", "image": "/images/common/activity_digitalbook.png", "url": "https://test20.blinklearning.com/coursePlayer/librodigital_html.php?idclase=31945387&idcurso=512644", "onclickTitle": "redireccionar('https://test20.blinklearning.com/coursePlayer/librodigital_html.php?idclase=31945387&idcurso=512644', false, undefined);", "ocultar": false, "reviewInFullScreen": false, "pags": "4", "slides": [], "lock": 16, "typeInt": 6, "evalType": 0, "onlyVisibleTeachers": false, "objJSON": "/coursePlayer/librodigital_json.php?idclase=31945387&idcurso=512644", "offset": 0, "start_side": "left" }], "resources": [] }] };
		callback(data);
	};
	exports.default = loadData;
	
	/***/ }),
	/* 5 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _config = __webpack_require__(0);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoadingScreen = function () {
		function LoadingScreen() {
			_classCallCheck(this, LoadingScreen);
		}
	
		_createClass(LoadingScreen, [{
			key: "init",
			value: function init() {
				if (_config2.default.dev) console.log("Iniciando LoadingScreen");
			}
		}, {
			key: "update",
			value: function update(loading) {
				if (loading) {
					if (_config2.default.dev) console.log("LoadingScreen.update(true)");
				} else {
					if (_config2.default.dev) console.log("LoadingScreen.update(false)");
				}
			}
		}]);
	
		return LoadingScreen;
	}();
	
	exports.default = LoadingScreen;
	
	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _config = __webpack_require__(0);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _animations = __webpack_require__(7);
	
	var _animations2 = _interopRequireDefault(_animations);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var animations = new _animations2.default();
	
	//DOM elements
	
	var SplashScreen = function () {
		function SplashScreen() {
			_classCallCheck(this, SplashScreen);
	
			this.state = {
				title: '',
				active: false
			};
			this.domElements = {
				screenDiv: document.getElementById('oup_tdl_splash_screen'),
				title: document.getElementsByClassName('oup_splash__main_title')[0]
			};
		}
	
		_createClass(SplashScreen, [{
			key: 'init',
			value: function init(data) {
				this.state = data;
				//Title
				document.getElementsByClassName('oup_splash__main_title')[0].textContent = 'fefefef';
	
				this.domElements.title.textContent = this.state.title;
				this.show();
	
				if (_config2.default.dev) {
					console.log("SplashScreen.init()");
					console.log(this.state);
				}
			}
		}, {
			key: 'show',
			value: function show() {
				this.state.active = true;
				animations.showOpacityScale(this.domElements.screenDiv);
				if (_config2.default.dev) console.log("SplashScreen.update(true)");
			}
		}, {
			key: 'hide',
			value: function hide() {
				this.state.active = true;
				screenDiv.classList.remove('active');
				if (_config2.default.dev) console.log("SplashScreen.update", data);
			}
		}]);
	
		return SplashScreen;
	}();
	
	exports.default = SplashScreen;
	
	/***/ }),
	/* 7 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _config = __webpack_require__(0);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Animations = function () {
		function Animations() {
			_classCallCheck(this, Animations);
		}
	
		_createClass(Animations, [{
			key: 'init',
	
			// constructor(){
			//     console.log("Animations");
			// }
	
			value: function init(data) {
				this.state = data;
				//Title
				domElements.title.textContent = this.state.title;
				this.show();
	
				if (_config2.default.dev) {
					console.log("SplashScreen.init()");
					console.log(this.state);
				}
			}
		}, {
			key: 'showOpacityScale',
			value: function showOpacityScale(element, callback) {
				element.classList.add('active_show');
				//Para activar el display: block
				var temp = element.scrollHeight;
				var transitionEvent = whichTransitionEvent();
				transitionEvent && element.addEventListener(transitionEvent, callback);
				element.classList.add('active_animate');
			}
		}, {
			key: 'hideOpacityScale',
			value: function hideOpacityScale() {}
		}]);
	
		return Animations;
	}();
	
	exports.default = Animations;
	
	
	function whichTransitionEvent() {
		var t;
		var el = document.createElement('fakeelement');
		var transitions = {
			'transition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'MozTransition': 'transitionend',
			'WebkitTransition': 'webkitTransitionEnd'
		};
	
		for (t in transitions) {
			if (el.style[t] !== undefined) {
				return transitions[t];
			}
		}
	}
	
	/***/ })
	/******/ ]);
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGI3MGUzNTgwYmNiMjQzOWE4MjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvYWREYXRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fbG9hZGluZ1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX3NwbGFzaFNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbWF0aW9ucy5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJkZXYiLCJuYXZCYXJNYXJnaW5Ub3AiLCJuYXZCYXJNYXJnaW5Cb3R0b20iLCJvdXBUZGxBcHAiLCJpbml0IiwiT3VwVGRsIiwic3RhdGUiLCJsb2FkaW5nIiwibWFpbkRhdGEiLCJ0aXRsZSIsInVuaXRzIiwiaHRtbERPTSIsImRvY3VtZW50Iiwid3JpdGUiLCJsb2FkaW5nU2NyZWVuIiwic3BsYXNoU2NyZWVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJsb2FkRGF0YSIsImNhbGxiYWNrIiwiTG9hZGluZ1NjcmVlbiIsImFuaW1hdGlvbnMiLCJTcGxhc2hTY3JlZW4iLCJhY3RpdmUiLCJkb21FbGVtZW50cyIsInNjcmVlbkRpdiIsImdldEVsZW1lbnRCeUlkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRleHRDb250ZW50Iiwic2hvdyIsInNob3dPcGFjaXR5U2NhbGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJBbmltYXRpb25zIiwiZWxlbWVudCIsImFkZCIsInRlbXAiLCJzY3JvbGxIZWlnaHQiLCJ0cmFuc2l0aW9uRXZlbnQiLCJ3aGljaFRyYW5zaXRpb25FdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0IiwiZWwiLCJjcmVhdGVFbGVtZW50IiwidHJhbnNpdGlvbnMiLCJzdHlsZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7QUFDQSxJQUFNQSxTQUFTO0FBQ1hDLFNBQUssSUFETTtBQUVYQyxxQkFBaUIsRUFGTjtBQUdYQyx3QkFBb0I7QUFIVCxDQUFmO2tCQUtlSCxNOzs7Ozs7Ozs7QUNOZjs7QUFDQTs7Ozs7O0FBRUEsSUFBSUksWUFBWSxvQkFBaEI7QUFDQUEsVUFBVUMsSUFBVixHOzs7Ozs7QUNKQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDR0E7OztBQUhBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7OztJQUVNQyxNO0FBQ0Ysc0JBQWE7QUFBQTtBQUVaOzs7OytCQUVLO0FBQ0YsZ0JBQUlDLFFBQVE7QUFDUkMseUJBQVMsSUFERDtBQUVSQywwQkFBVSxFQUFFO0FBQ1JDLDJCQUFPLEVBREQ7QUFFTkMsMkJBQU87QUFGRDtBQUZGLGFBQVo7O0FBUUE7QUFDQSxnQkFBTUMsb29CQUFOO0FBYUFDLHFCQUFTQyxLQUFULENBQWVGLE9BQWY7O0FBRUEsZ0JBQU1HLGdCQUFnQiw2QkFBdEI7QUFDQSxnQkFBTUMsZUFBZSw0QkFBckI7O0FBR0E7QUFDQSxvQ0FBUyxVQUFDQyxJQUFELEVBQVU7QUFDZlYsc0JBQU1FLFFBQU4sR0FBaUJRLElBQWpCO0FBQ0Esb0JBQUcsaUJBQU9oQixHQUFWLEVBQ0lpQixRQUFRQyxHQUFSLENBQVksaUJBQVosRUFBK0JaLE1BQU1FLFFBQXJDO0FBQ0pGLHNCQUFNQyxPQUFOLEdBQWdCLEtBQWhCO0FBQ0FPLDhCQUFjSyxNQUFkLENBQXFCYixNQUFNQyxPQUEzQjtBQUNBUSw2QkFBYVgsSUFBYixDQUFrQixFQUFDSyxPQUFPSCxNQUFNRSxRQUFOLENBQWVDLEtBQXZCLEVBQWxCO0FBQ0gsYUFQRDtBQVFIOzs7Ozs7a0JBSVVKLE07Ozs7Ozs7Ozs7Ozs7QUN0RGY7Ozs7OztBQUNBLElBQU1lLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxRQUFELEVBQWM7QUFDM0IsUUFBRyxpQkFBT3JCLEdBQVYsRUFDSWlCLFFBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNKO0FBQ0EsUUFBSUYsT0FBSyxFQUFDLE9BQU0seUNBQVAsRUFBaUQsUUFBTyxFQUF4RCxFQUEyRCxTQUFRLGNBQW5FLEVBQWtGLFFBQU8sUUFBekYsRUFBa0csZUFBYyxFQUFoSCxFQUFtSCxTQUFRLEVBQTNILEVBQThILG1CQUFrQixLQUFoSixFQUFzSixjQUFhLGtCQUFuSyxFQUFzTCxTQUFRLENBQUMsRUFBQyxVQUFTLENBQVYsRUFBWSxNQUFLLFNBQWpCLEVBQTJCLFlBQVcsS0FBdEMsRUFBNEMsU0FBUSxnQkFBcEQsRUFBcUUsU0FBUSw2Q0FBN0UsRUFBMkgsZUFBYyxpQkFBekksRUFBMkosWUFBVyxDQUFDLEVBQUMsTUFBSyxVQUFOLEVBQWlCLFNBQVEsRUFBekIsRUFBNEIsU0FBUSxlQUFwQyxFQUFvRCxlQUFjLEVBQWxFLEVBQXFFLFNBQVEsR0FBN0UsRUFBaUYsZ0JBQWUsa0JBQWhHLEVBQW1ILFFBQU8sT0FBMUgsRUFBa0ksU0FBUSx5Q0FBMUksRUFBb0wsT0FBTSxxR0FBMUwsRUFBZ1MsZ0JBQWUseUlBQS9TLEVBQXliLFdBQVUsS0FBbmMsRUFBeWMsc0JBQXFCLEtBQTlkLEVBQW9lLFFBQU8sR0FBM2UsRUFBK2UsVUFBUyxFQUF4ZixFQUEyZixRQUFPLEVBQWxnQixFQUFxZ0IsV0FBVSxDQUEvZ0IsRUFBaWhCLFlBQVcsQ0FBNWhCLEVBQThoQix1QkFBc0IsS0FBcGpCLEVBQTBqQixXQUFVLHFFQUFwa0IsRUFBMG9CLFVBQVMsQ0FBbnBCLEVBQXFwQixjQUFhLE1BQWxxQixFQUFELENBQXRLLEVBQWsxQixhQUFZLEVBQTkxQixFQUFELENBQTlMLEVBQVQ7QUFDQUssYUFBU0wsSUFBVDtBQUNILENBTkQ7a0JBT2VJLFE7Ozs7Ozs7Ozs7Ozs7OztBQ1JmOzs7Ozs7OztJQUNNRSxhOzs7Ozs7OytCQUNJO0FBQ0YsZ0JBQUcsaUJBQU90QixHQUFWLEVBQ0lpQixRQUFRQyxHQUFSLENBQVkseUJBQVo7QUFDUDs7OytCQUNNWCxPLEVBQVE7QUFDWCxnQkFBR0EsT0FBSCxFQUFXO0FBQ1Asb0JBQUcsaUJBQU9QLEdBQVYsRUFDSWlCLFFBQVFDLEdBQVIsQ0FBWSw0QkFBWjtBQUNQLGFBSEQsTUFHTztBQUNILG9CQUFHLGlCQUFPbEIsR0FBVixFQUNJaUIsUUFBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ1A7QUFDSjs7Ozs7O2tCQUdVSSxhOzs7Ozs7Ozs7Ozs7Ozs7QUNqQmY7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQyxhQUFhLDBCQUFuQjs7QUFFQTs7SUFFTUMsWTtBQUNGLDRCQUFhO0FBQUE7O0FBQ1QsYUFBS2xCLEtBQUwsR0FBYTtBQUNURyxtQkFBTyxFQURFO0FBRVRnQixvQkFBUTtBQUZDLFNBQWI7QUFJQSxhQUFLQyxXQUFMLEdBQW1CO0FBQ2ZDLHVCQUFXZixTQUFTZ0IsY0FBVCxDQUF3Qix1QkFBeEIsQ0FESTtBQUVmbkIsbUJBQU9HLFNBQVNpQixzQkFBVCxDQUFnQyx3QkFBaEMsRUFBMEQsQ0FBMUQ7QUFGUSxTQUFuQjtBQUlIOzs7OzZCQUVJYixJLEVBQUs7QUFDTixpQkFBS1YsS0FBTCxHQUFhVSxJQUFiO0FBQ0E7QUFDQUoscUJBQVNpQixzQkFBVCxDQUFnQyx3QkFBaEMsRUFBMEQsQ0FBMUQsRUFBNkRDLFdBQTdELEdBQTJFLFNBQTNFOztBQUVBLGlCQUFLSixXQUFMLENBQWlCakIsS0FBakIsQ0FBdUJxQixXQUF2QixHQUFxQyxLQUFLeEIsS0FBTCxDQUFXRyxLQUFoRDtBQUNBLGlCQUFLc0IsSUFBTDs7QUFFQSxnQkFBRyxpQkFBTy9CLEdBQVYsRUFBYztBQUNWaUIsd0JBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCx3QkFBUUMsR0FBUixDQUFZLEtBQUtaLEtBQWpCO0FBQ0g7QUFFSjs7OytCQUNLO0FBQ0YsaUJBQUtBLEtBQUwsQ0FBV21CLE1BQVgsR0FBb0IsSUFBcEI7QUFDQUYsdUJBQVdTLGdCQUFYLENBQTRCLEtBQUtOLFdBQUwsQ0FBaUJDLFNBQTdDO0FBQ0EsZ0JBQUcsaUJBQU8zQixHQUFWLEVBQ0lpQixRQUFRQyxHQUFSLENBQVksMkJBQVo7QUFDUDs7OytCQUNLO0FBQ0YsaUJBQUtaLEtBQUwsQ0FBV21CLE1BQVgsR0FBb0IsSUFBcEI7QUFDQUUsc0JBQVVNLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLFFBQTNCO0FBQ0EsZ0JBQUcsaUJBQU9sQyxHQUFWLEVBQ0lpQixRQUFRQyxHQUFSLENBQVkscUJBQVosRUFBbUNGLElBQW5DO0FBRVA7Ozs7OztrQkFHVVEsWTs7Ozs7Ozs7Ozs7Ozs7O0FDaERmOzs7Ozs7OztJQUVNVyxVOzs7Ozs7OztBQUNGO0FBQ0E7QUFDQTs7NkJBRUtuQixJLEVBQUs7QUFDTixpQkFBS1YsS0FBTCxHQUFhVSxJQUFiO0FBQ0E7QUFDQVUsd0JBQVlqQixLQUFaLENBQWtCcUIsV0FBbEIsR0FBZ0MsS0FBS3hCLEtBQUwsQ0FBV0csS0FBM0M7QUFDQSxpQkFBS3NCLElBQUw7O0FBRUEsZ0JBQUcsaUJBQU8vQixHQUFWLEVBQWM7QUFDVmlCLHdCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQUQsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLWixLQUFqQjtBQUNIO0FBRUo7Ozt5Q0FDZ0I4QixPLEVBQVNmLFEsRUFBUztBQUMvQmUsb0JBQVFILFNBQVIsQ0FBa0JJLEdBQWxCLENBQXNCLGFBQXRCO0FBQ0E7QUFDQSxnQkFBSUMsT0FBT0YsUUFBUUcsWUFBbkI7QUFDQSxnQkFBSUMsa0JBQWtCQyxzQkFBdEI7QUFDQUQsK0JBQW1CSixRQUFRTSxnQkFBUixDQUF5QkYsZUFBekIsRUFBMENuQixRQUExQyxDQUFuQjtBQUNBZSxvQkFBUUgsU0FBUixDQUFrQkksR0FBbEIsQ0FBc0IsZ0JBQXRCO0FBQ0g7OzsyQ0FDaUIsQ0FFakI7Ozs7OztrQkFHVUYsVTs7O0FBRWYsU0FBU00sb0JBQVQsR0FBK0I7QUFDM0IsUUFBSUUsQ0FBSjtBQUNBLFFBQUlDLEtBQUtoQyxTQUFTaUMsYUFBVCxDQUF1QixhQUF2QixDQUFUO0FBQ0EsUUFBSUMsY0FBYztBQUNoQixzQkFBYSxlQURHO0FBRWhCLHVCQUFjLGdCQUZFO0FBR2hCLHlCQUFnQixlQUhBO0FBSWhCLDRCQUFtQjtBQUpILEtBQWxCOztBQU9BLFNBQUlILENBQUosSUFBU0csV0FBVCxFQUFxQjtBQUNqQixZQUFJRixHQUFHRyxLQUFILENBQVNKLENBQVQsTUFBZ0JLLFNBQXBCLEVBQStCO0FBQzNCLG1CQUFPRixZQUFZSCxDQUFaLENBQVA7QUFDSDtBQUNKO0FBQ0osQyIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGI3MGUzNTgwYmNiMjQzOWE4MjYiLCIndXNlIHN0cmljdCdcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBkZXY6IHRydWUsXG4gICAgbmF2QmFyTWFyZ2luVG9wOiA0NCxcbiAgICBuYXZCYXJNYXJnaW5Cb3R0b206IDAsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb25maWcuanMiLCJpbXBvcnQgJy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MnO1xuaW1wb3J0IE91cFRkbCBmcm9tICcuL2Fzc2V0cy9qcy9tYWluJztcblxubGV0IG91cFRkbEFwcCA9IG5ldyBPdXBUZGw7XG5vdXBUZGxBcHAuaW5pdCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBsb2FkRGF0YSBmcm9tICcuL2xvYWREYXRhJztcblxuLy9QYW50YWxsYXNcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gJy4vX2xvYWRpbmdTY3JlZW4nO1xuaW1wb3J0IFNwbGFzaFNjcmVlbiBmcm9tICcuL19zcGxhc2hTY3JlZW4nO1xuXG5jbGFzcyBPdXBUZGwge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBpbml0KCl7XG4gICAgICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBtYWluRGF0YTogeyAvL0RhdG9zIHZhY8Otb3MgYSBsYSBlc3BlcmEgZGUgc2VyIGNhcmdhZG9zXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVuaXRzOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9Fc2NyaWJpbW9zIERPTVxuICAgICAgICBjb25zdCBodG1sRE9NID0gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIm91cF90ZGxfY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm91cF90ZGxfc3BsYXNoX3NjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3NwbGFzaF9fbG9nb19vdXBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9zcGxhc2hfX2xvZ29fdGRsIG91cF9zcGxhc2hfX2xvZ29fdGRsLS1wcmltYXJ5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfc3BsYXNoX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJvdXBfc3BsYXNoX19tYWluX3RpdGxlXCI+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfc3BsYXNoX19lbnRlci1idG4gY2xpY2thYmxlXCI+PHNwYW4+RW50ZXI8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3NwbGFzaF9fZm9vdGVyXCI+wqkgT3hmb3JkIFVuaXZlcnNpdHkgUHJlc3M8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC53cml0ZShodG1sRE9NKTtcblxuICAgICAgICBjb25zdCBsb2FkaW5nU2NyZWVuID0gbmV3IExvYWRpbmdTY3JlZW47XG4gICAgICAgIGNvbnN0IHNwbGFzaFNjcmVlbiA9IG5ldyBTcGxhc2hTY3JlZW47XG5cblxuICAgICAgICAvL0NhcmdhbW9zIGRhdG9zXG4gICAgICAgIGxvYWREYXRhKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5tYWluRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRvcyBDYXJnYWRvczonLCBzdGF0ZS5tYWluRGF0YSk7XG4gICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBsb2FkaW5nU2NyZWVuLnVwZGF0ZShzdGF0ZS5sb2FkaW5nKTtcbiAgICAgICAgICAgIHNwbGFzaFNjcmVlbi5pbml0KHt0aXRsZTogc3RhdGUubWFpbkRhdGEudGl0bGV9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBPdXBUZGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL21haW4uanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmNvbnN0IGxvYWREYXRhID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgY29uc29sZS5sb2coJ0Z1bmN0aW9uIGxvYWREYXRhKCknKTtcbiAgICAvL1RlbXBcbiAgICB2YXIgZGF0YT17XCJ1cmxcIjpcIi9jb3Vyc2VQbGF5ZXIvY3Vyc28yLnBocD9pZGN1cnNvPTUxMjY0NFwiLFwiaXNiblwiOlwiXCIsXCJ0aXRsZVwiOlwiT3hmb3JkIFRETCAyXCIsXCJ0eXBlXCI6XCJBbGVtw6FuXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJpbWFnZVwiOlwiXCIsXCJzaG93X2dvX3RvX3BhZ2VcIjpmYWxzZSxcInN0eWxlX25hbWVcIjpcIm94Zm9yZC10ZGwtMi1kZXZcIixcInVuaXRzXCI6W3tcIm51bWJlclwiOjEsXCJpZFwiOlwiNTQ4NDE2MFwiLFwiaXNSZXZpZXdcIjpmYWxzZSxcInRpdGxlXCI6XCJUZW1hIGRlIHBydWViYVwiLFwiaW1hZ2VcIjpcIi4uL3RoZW1lcy9yZXNwb25zaXZlL2ltYWdlcy9saWJyby92ZXJkZS5wbmdcIixcImRlc2NyaXB0aW9uXCI6XCJQYXJhIGRlc2Fycm9sbG9cIixcInN1YnVuaXRzXCI6W3tcImlkXCI6XCIzMTk0NTM4N1wiLFwiaWRFeHRcIjpcIlwiLFwidGl0bGVcIjpcIkxpYnJvIERpZ2l0YWxcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcImxldmVsXCI6XCIxXCIsXCJjb250ZW50U3R5bGVcIjpcIm94Zm9yZC10ZGwtMi1kZXZcIixcInR5cGVcIjpcImxpYnJvXCIsXCJpbWFnZVwiOlwiL2ltYWdlcy9jb21tb24vYWN0aXZpdHlfZGlnaXRhbGJvb2sucG5nXCIsXCJ1cmxcIjpcImh0dHBzOi8vdGVzdDIwLmJsaW5rbGVhcm5pbmcuY29tL2NvdXJzZVBsYXllci9saWJyb2RpZ2l0YWxfaHRtbC5waHA/aWRjbGFzZT0zMTk0NTM4NyZpZGN1cnNvPTUxMjY0NFwiLFwib25jbGlja1RpdGxlXCI6XCJyZWRpcmVjY2lvbmFyKCdodHRwczovL3Rlc3QyMC5ibGlua2xlYXJuaW5nLmNvbS9jb3Vyc2VQbGF5ZXIvbGlicm9kaWdpdGFsX2h0bWwucGhwP2lkY2xhc2U9MzE5NDUzODcmaWRjdXJzbz01MTI2NDQnLCBmYWxzZSwgdW5kZWZpbmVkKTtcIixcIm9jdWx0YXJcIjpmYWxzZSxcInJldmlld0luRnVsbFNjcmVlblwiOmZhbHNlLFwicGFnc1wiOlwiNFwiLFwic2xpZGVzXCI6W10sXCJsb2NrXCI6MTYsXCJ0eXBlSW50XCI6NixcImV2YWxUeXBlXCI6MCxcIm9ubHlWaXNpYmxlVGVhY2hlcnNcIjpmYWxzZSxcIm9iakpTT05cIjpcIi9jb3Vyc2VQbGF5ZXIvbGlicm9kaWdpdGFsX2pzb24ucGhwP2lkY2xhc2U9MzE5NDUzODcmaWRjdXJzbz01MTI2NDRcIixcIm9mZnNldFwiOjAsXCJzdGFydF9zaWRlXCI6XCJsZWZ0XCJ9XSxcInJlc291cmNlc1wiOltdfV19XG4gICAgY2FsbGJhY2soZGF0YSk7XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkRGF0YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbG9hZERhdGEuanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmNsYXNzIExvYWRpbmdTY3JlZW4ge1xuICAgIGluaXQoKXtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5pY2lhbmRvIExvYWRpbmdTY3JlZW5cIik7XG4gICAgfVxuICAgIHVwZGF0ZShsb2FkaW5nKXtcbiAgICAgICAgaWYobG9hZGluZyl7XG4gICAgICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZ1NjcmVlbi51cGRhdGUodHJ1ZSlcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nU2NyZWVuLnVwZGF0ZShmYWxzZSlcIilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1NjcmVlbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvX2xvYWRpbmdTY3JlZW4uanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBBbmltYXRpb25zIGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbmNvbnN0IGFuaW1hdGlvbnMgPSBuZXcgQW5pbWF0aW9ucztcblxuLy9ET00gZWxlbWVudHNcblxuY2xhc3MgU3BsYXNoU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgc2NyZWVuRGl2OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3VwX3RkbF9zcGxhc2hfc2NyZWVuJyksXG4gICAgICAgICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3VwX3NwbGFzaF9fbWFpbl90aXRsZScpWzBdLFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGluaXQoZGF0YSl7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBkYXRhO1xuICAgICAgICAvL1RpdGxlXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF9zcGxhc2hfX21haW5fdGl0bGUnKVswXS50ZXh0Q29udGVudCA9ICdmZWZlZmVmJztcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5zdGF0ZS50aXRsZTtcbiAgICAgICAgdGhpcy5zaG93KClcblxuICAgICAgICBpZihjb25maWcuZGV2KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3BsYXNoU2NyZWVuLmluaXQoKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGFuaW1hdGlvbnMuc2hvd09wYWNpdHlTY2FsZSh0aGlzLmRvbUVsZW1lbnRzLnNjcmVlbkRpdik7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNwbGFzaFNjcmVlbi51cGRhdGUodHJ1ZSlcIilcbiAgICB9XG4gICAgaGlkZSgpe1xuICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHNjcmVlbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3BsYXNoU2NyZWVuLnVwZGF0ZVwiLCBkYXRhKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsYXNoU2NyZWVuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9fc3BsYXNoU2NyZWVuLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmNsYXNzIEFuaW1hdGlvbnMge1xuICAgIC8vIGNvbnN0cnVjdG9yKCl7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQW5pbWF0aW9uc1wiKTtcbiAgICAvLyB9XG4gICAgXG4gICAgaW5pdChkYXRhKXtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGRhdGE7XG4gICAgICAgIC8vVGl0bGVcbiAgICAgICAgZG9tRWxlbWVudHMudGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnN0YXRlLnRpdGxlO1xuICAgICAgICB0aGlzLnNob3coKVxuXG4gICAgICAgIGlmKGNvbmZpZy5kZXYpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTcGxhc2hTY3JlZW4uaW5pdCgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbiAgICBzaG93T3BhY2l0eVNjYWxlKGVsZW1lbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfc2hvdycpO1xuICAgICAgICAvL1BhcmEgYWN0aXZhciBlbCBkaXNwbGF5OiBibG9ja1xuICAgICAgICB2YXIgdGVtcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKTtcbiAgICAgICAgdHJhbnNpdGlvbkV2ZW50ICYmIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYW5pbWF0ZScpO1xuICAgIH1cbiAgICBoaWRlT3BhY2l0eVNjYWxlKCl7XG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9ucztcblxuZnVuY3Rpb24gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKXtcbiAgICB2YXIgdDtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmYWtlZWxlbWVudCcpO1xuICAgIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICAgICd0cmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXG4gICAgICAnT1RyYW5zaXRpb24nOidvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAnTW96VHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxuICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nOid3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICAgIH1cblxuICAgIGZvcih0IGluIHRyYW5zaXRpb25zKXtcbiAgICAgICAgaWYoIGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQgKXtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYW5pbWF0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=