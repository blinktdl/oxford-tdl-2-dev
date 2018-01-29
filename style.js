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
			OupTdlStyle.run();
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


var OupTdlStyle =
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

module.exports = {
    run: function run() {
        var oupTdlApp = new _main2.default();
        oupTdlApp.init();
    }
};

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
            document.body.innerHTML += htmlDOM;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTBkMjdjZjdhMTcyNWM2ZDQ2NmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvYWREYXRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fbG9hZGluZ1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX3NwbGFzaFNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbWF0aW9ucy5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJkZXYiLCJuYXZCYXJNYXJnaW5Ub3AiLCJuYXZCYXJNYXJnaW5Cb3R0b20iLCJtb2R1bGUiLCJleHBvcnRzIiwicnVuIiwib3VwVGRsQXBwIiwiaW5pdCIsIk91cFRkbCIsInN0YXRlIiwibG9hZGluZyIsIm1haW5EYXRhIiwidGl0bGUiLCJ1bml0cyIsImh0bWxET00iLCJkb2N1bWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJsb2FkaW5nU2NyZWVuIiwic3BsYXNoU2NyZWVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJsb2FkRGF0YSIsImNhbGxiYWNrIiwiTG9hZGluZ1NjcmVlbiIsImFuaW1hdGlvbnMiLCJTcGxhc2hTY3JlZW4iLCJhY3RpdmUiLCJkb21FbGVtZW50cyIsInNjcmVlbkRpdiIsImdldEVsZW1lbnRCeUlkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRleHRDb250ZW50Iiwic2hvdyIsInNob3dPcGFjaXR5U2NhbGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJBbmltYXRpb25zIiwiZWxlbWVudCIsImFkZCIsInRlbXAiLCJzY3JvbGxIZWlnaHQiLCJ0cmFuc2l0aW9uRXZlbnQiLCJ3aGljaFRyYW5zaXRpb25FdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0IiwiZWwiLCJjcmVhdGVFbGVtZW50IiwidHJhbnNpdGlvbnMiLCJzdHlsZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7Ozs7O0FBQ0EsSUFBTUEsU0FBUztBQUNYQyxTQUFLLElBRE07QUFFWEMscUJBQWlCLEVBRk47QUFHWEMsd0JBQW9CO0FBSFQsQ0FBZjtrQkFLZUgsTTs7Ozs7Ozs7O0FDTmY7O0FBQ0E7Ozs7OztBQUVBSSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2JDLFNBQUssZUFBWTtBQUNiLFlBQUlDLFlBQVksb0JBQWhCO0FBQ0FBLGtCQUFVQyxJQUFWO0FBQ0g7QUFKWSxDQUFqQixDOzs7Ozs7QUNIQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDR0E7OztBQUhBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7OztJQUVNQyxNO0FBQ0Ysc0JBQWE7QUFBQTtBQUVaOzs7OytCQUVLO0FBQ0YsZ0JBQUlDLFFBQVE7QUFDUkMseUJBQVMsSUFERDtBQUVSQywwQkFBVSxFQUFFO0FBQ1JDLDJCQUFPLEVBREQ7QUFFTkMsMkJBQU87QUFGRDtBQUZGLGFBQVo7O0FBUUE7QUFDQSxnQkFBTUMsb29CQUFOO0FBYUFDLHFCQUFTQyxJQUFULENBQWNDLFNBQWQsSUFBMkJILE9BQTNCOztBQUVBLGdCQUFNSSxnQkFBZ0IsNkJBQXRCO0FBQ0EsZ0JBQU1DLGVBQWUsNEJBQXJCOztBQUdBO0FBQ0Esb0NBQVMsVUFBQ0MsSUFBRCxFQUFVO0FBQ2ZYLHNCQUFNRSxRQUFOLEdBQWlCUyxJQUFqQjtBQUNBLG9CQUFHLGlCQUFPcEIsR0FBVixFQUNJcUIsUUFBUUMsR0FBUixDQUFZLGlCQUFaLEVBQStCYixNQUFNRSxRQUFyQztBQUNKRixzQkFBTUMsT0FBTixHQUFnQixLQUFoQjtBQUNBUSw4QkFBY0ssTUFBZCxDQUFxQmQsTUFBTUMsT0FBM0I7QUFDQVMsNkJBQWFaLElBQWIsQ0FBa0IsRUFBQ0ssT0FBT0gsTUFBTUUsUUFBTixDQUFlQyxLQUF2QixFQUFsQjtBQUNILGFBUEQ7QUFRSDs7Ozs7O2tCQUlVSixNOzs7Ozs7Ozs7Ozs7O0FDdERmOzs7Ozs7QUFDQSxJQUFNZ0IsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBYztBQUMzQixRQUFHLGlCQUFPekIsR0FBVixFQUNJcUIsUUFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0o7QUFDQSxRQUFJRixPQUFLLEVBQUMsT0FBTSx5Q0FBUCxFQUFpRCxRQUFPLEVBQXhELEVBQTJELFNBQVEsY0FBbkUsRUFBa0YsUUFBTyxRQUF6RixFQUFrRyxlQUFjLEVBQWhILEVBQW1ILFNBQVEsRUFBM0gsRUFBOEgsbUJBQWtCLEtBQWhKLEVBQXNKLGNBQWEsa0JBQW5LLEVBQXNMLFNBQVEsQ0FBQyxFQUFDLFVBQVMsQ0FBVixFQUFZLE1BQUssU0FBakIsRUFBMkIsWUFBVyxLQUF0QyxFQUE0QyxTQUFRLGdCQUFwRCxFQUFxRSxTQUFRLDZDQUE3RSxFQUEySCxlQUFjLGlCQUF6SSxFQUEySixZQUFXLENBQUMsRUFBQyxNQUFLLFVBQU4sRUFBaUIsU0FBUSxFQUF6QixFQUE0QixTQUFRLGVBQXBDLEVBQW9ELGVBQWMsRUFBbEUsRUFBcUUsU0FBUSxHQUE3RSxFQUFpRixnQkFBZSxrQkFBaEcsRUFBbUgsUUFBTyxPQUExSCxFQUFrSSxTQUFRLHlDQUExSSxFQUFvTCxPQUFNLHFHQUExTCxFQUFnUyxnQkFBZSx5SUFBL1MsRUFBeWIsV0FBVSxLQUFuYyxFQUF5YyxzQkFBcUIsS0FBOWQsRUFBb2UsUUFBTyxHQUEzZSxFQUErZSxVQUFTLEVBQXhmLEVBQTJmLFFBQU8sRUFBbGdCLEVBQXFnQixXQUFVLENBQS9nQixFQUFpaEIsWUFBVyxDQUE1aEIsRUFBOGhCLHVCQUFzQixLQUFwakIsRUFBMGpCLFdBQVUscUVBQXBrQixFQUEwb0IsVUFBUyxDQUFucEIsRUFBcXBCLGNBQWEsTUFBbHFCLEVBQUQsQ0FBdEssRUFBazFCLGFBQVksRUFBOTFCLEVBQUQsQ0FBOUwsRUFBVDtBQUNBSyxhQUFTTCxJQUFUO0FBQ0gsQ0FORDtrQkFPZUksUTs7Ozs7Ozs7Ozs7Ozs7O0FDUmY7Ozs7Ozs7O0lBQ01FLGE7Ozs7Ozs7K0JBQ0k7QUFDRixnQkFBRyxpQkFBTzFCLEdBQVYsRUFDSXFCLFFBQVFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNQOzs7K0JBQ01aLE8sRUFBUTtBQUNYLGdCQUFHQSxPQUFILEVBQVc7QUFDUCxvQkFBRyxpQkFBT1YsR0FBVixFQUNJcUIsUUFBUUMsR0FBUixDQUFZLDRCQUFaO0FBQ1AsYUFIRCxNQUdPO0FBQ0gsb0JBQUcsaUJBQU90QixHQUFWLEVBQ0lxQixRQUFRQyxHQUFSLENBQVksNkJBQVo7QUFDUDtBQUNKOzs7Ozs7a0JBR1VJLGE7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZjs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1DLGFBQWEsMEJBQW5COztBQUVBOztJQUVNQyxZO0FBQ0YsNEJBQWE7QUFBQTs7QUFDVCxhQUFLbkIsS0FBTCxHQUFhO0FBQ1RHLG1CQUFPLEVBREU7QUFFVGlCLG9CQUFRO0FBRkMsU0FBYjtBQUlBLGFBQUtDLFdBQUwsR0FBbUI7QUFDZkMsdUJBQVdoQixTQUFTaUIsY0FBVCxDQUF3Qix1QkFBeEIsQ0FESTtBQUVmcEIsbUJBQU9HLFNBQVNrQixzQkFBVCxDQUFnQyx3QkFBaEMsRUFBMEQsQ0FBMUQ7QUFGUSxTQUFuQjtBQUlIOzs7OzZCQUVJYixJLEVBQUs7QUFDTixpQkFBS1gsS0FBTCxHQUFhVyxJQUFiO0FBQ0E7QUFDQUwscUJBQVNrQixzQkFBVCxDQUFnQyx3QkFBaEMsRUFBMEQsQ0FBMUQsRUFBNkRDLFdBQTdELEdBQTJFLFNBQTNFOztBQUVBLGlCQUFLSixXQUFMLENBQWlCbEIsS0FBakIsQ0FBdUJzQixXQUF2QixHQUFxQyxLQUFLekIsS0FBTCxDQUFXRyxLQUFoRDtBQUNBLGlCQUFLdUIsSUFBTDs7QUFFQSxnQkFBRyxpQkFBT25DLEdBQVYsRUFBYztBQUNWcUIsd0JBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCx3QkFBUUMsR0FBUixDQUFZLEtBQUtiLEtBQWpCO0FBQ0g7QUFFSjs7OytCQUNLO0FBQ0YsaUJBQUtBLEtBQUwsQ0FBV29CLE1BQVgsR0FBb0IsSUFBcEI7QUFDQUYsdUJBQVdTLGdCQUFYLENBQTRCLEtBQUtOLFdBQUwsQ0FBaUJDLFNBQTdDO0FBQ0EsZ0JBQUcsaUJBQU8vQixHQUFWLEVBQ0lxQixRQUFRQyxHQUFSLENBQVksMkJBQVo7QUFDUDs7OytCQUNLO0FBQ0YsaUJBQUtiLEtBQUwsQ0FBV29CLE1BQVgsR0FBb0IsSUFBcEI7QUFDQUUsc0JBQVVNLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLFFBQTNCO0FBQ0EsZ0JBQUcsaUJBQU90QyxHQUFWLEVBQ0lxQixRQUFRQyxHQUFSLENBQVkscUJBQVosRUFBbUNGLElBQW5DO0FBRVA7Ozs7OztrQkFHVVEsWTs7Ozs7Ozs7Ozs7Ozs7O0FDaERmOzs7Ozs7OztJQUVNVyxVOzs7Ozs7OztBQUNGO0FBQ0E7QUFDQTs7NkJBRUtuQixJLEVBQUs7QUFDTixpQkFBS1gsS0FBTCxHQUFhVyxJQUFiO0FBQ0E7QUFDQVUsd0JBQVlsQixLQUFaLENBQWtCc0IsV0FBbEIsR0FBZ0MsS0FBS3pCLEtBQUwsQ0FBV0csS0FBM0M7QUFDQSxpQkFBS3VCLElBQUw7O0FBRUEsZ0JBQUcsaUJBQU9uQyxHQUFWLEVBQWM7QUFDVnFCLHdCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQUQsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLYixLQUFqQjtBQUNIO0FBRUo7Ozt5Q0FDZ0IrQixPLEVBQVNmLFEsRUFBUztBQUMvQmUsb0JBQVFILFNBQVIsQ0FBa0JJLEdBQWxCLENBQXNCLGFBQXRCO0FBQ0E7QUFDQSxnQkFBSUMsT0FBT0YsUUFBUUcsWUFBbkI7QUFDQSxnQkFBSUMsa0JBQWtCQyxzQkFBdEI7QUFDQUQsK0JBQW1CSixRQUFRTSxnQkFBUixDQUF5QkYsZUFBekIsRUFBMENuQixRQUExQyxDQUFuQjtBQUNBZSxvQkFBUUgsU0FBUixDQUFrQkksR0FBbEIsQ0FBc0IsZ0JBQXRCO0FBQ0g7OzsyQ0FDaUIsQ0FFakI7Ozs7OztrQkFHVUYsVTs7O0FBRWYsU0FBU00sb0JBQVQsR0FBK0I7QUFDM0IsUUFBSUUsQ0FBSjtBQUNBLFFBQUlDLEtBQUtqQyxTQUFTa0MsYUFBVCxDQUF1QixhQUF2QixDQUFUO0FBQ0EsUUFBSUMsY0FBYztBQUNoQixzQkFBYSxlQURHO0FBRWhCLHVCQUFjLGdCQUZFO0FBR2hCLHlCQUFnQixlQUhBO0FBSWhCLDRCQUFtQjtBQUpILEtBQWxCOztBQU9BLFNBQUlILENBQUosSUFBU0csV0FBVCxFQUFxQjtBQUNqQixZQUFJRixHQUFHRyxLQUFILENBQVNKLENBQVQsTUFBZ0JLLFNBQXBCLEVBQStCO0FBQzNCLG1CQUFPRixZQUFZSCxDQUFaLENBQVA7QUFDSDtBQUNKO0FBQ0osQyIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTBkMjdjZjdhMTcyNWM2ZDQ2NmQiLCIndXNlIHN0cmljdCdcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBkZXY6IHRydWUsXG4gICAgbmF2QmFyTWFyZ2luVG9wOiA0NCxcbiAgICBuYXZCYXJNYXJnaW5Cb3R0b206IDAsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb25maWcuanMiLCJpbXBvcnQgJy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MnO1xuaW1wb3J0IE91cFRkbCBmcm9tICcuL2Fzc2V0cy9qcy9tYWluJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcnVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBvdXBUZGxBcHAgPSBuZXcgT3VwVGRsO1xuICAgICAgICBvdXBUZGxBcHAuaW5pdCgpO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IGxvYWREYXRhIGZyb20gJy4vbG9hZERhdGEnO1xuXG4vL1BhbnRhbGxhc1xuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSAnLi9fbG9hZGluZ1NjcmVlbic7XG5pbXBvcnQgU3BsYXNoU2NyZWVuIGZyb20gJy4vX3NwbGFzaFNjcmVlbic7XG5cbmNsYXNzIE91cFRkbCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGluaXQoKXtcbiAgICAgICAgbGV0IHN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIG1haW5EYXRhOiB7IC8vRGF0b3MgdmFjw61vcyBhIGxhIGVzcGVyYSBkZSBzZXIgY2FyZ2Fkb3NcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdW5pdHM6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvL0VzY3JpYmltb3MgRE9NXG4gICAgICAgIGNvbnN0IGh0bWxET00gPSBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwib3VwX3RkbF9jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3VwX3RkbF9zcGxhc2hfc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfc3BsYXNoX19sb2dvX291cFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3NwbGFzaF9fbG9nb190ZGwgb3VwX3NwbGFzaF9fbG9nb190ZGwtLXByaW1hcnlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9zcGxhc2hfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm91cF9zcGxhc2hfX21haW5fdGl0bGVcIj48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9zcGxhc2hfX2VudGVyLWJ0biBjbGlja2FibGVcIj48c3Bhbj5FbnRlcjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfc3BsYXNoX19mb290ZXJcIj7CqSBPeGZvcmQgVW5pdmVyc2l0eSBQcmVzczwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IGh0bWxET007XG5cbiAgICAgICAgY29uc3QgbG9hZGluZ1NjcmVlbiA9IG5ldyBMb2FkaW5nU2NyZWVuO1xuICAgICAgICBjb25zdCBzcGxhc2hTY3JlZW4gPSBuZXcgU3BsYXNoU2NyZWVuO1xuXG5cbiAgICAgICAgLy9DYXJnYW1vcyBkYXRvc1xuICAgICAgICBsb2FkRGF0YSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUubWFpbkRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0b3MgQ2FyZ2Fkb3M6Jywgc3RhdGUubWFpbkRhdGEpO1xuICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbi51cGRhdGUoc3RhdGUubG9hZGluZyk7XG4gICAgICAgICAgICBzcGxhc2hTY3JlZW4uaW5pdCh7dGl0bGU6IHN0YXRlLm1haW5EYXRhLnRpdGxlfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3VwVGRsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9tYWluLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5jb25zdCBsb2FkRGF0YSA9IChjYWxsYmFjaykgPT4ge1xuICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgIGNvbnNvbGUubG9nKCdGdW5jdGlvbiBsb2FkRGF0YSgpJyk7XG4gICAgLy9UZW1wXG4gICAgdmFyIGRhdGE9e1widXJsXCI6XCIvY291cnNlUGxheWVyL2N1cnNvMi5waHA/aWRjdXJzbz01MTI2NDRcIixcImlzYm5cIjpcIlwiLFwidGl0bGVcIjpcIk94Zm9yZCBUREwgMlwiLFwidHlwZVwiOlwiQWxlbcOhblwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwiaW1hZ2VcIjpcIlwiLFwic2hvd19nb190b19wYWdlXCI6ZmFsc2UsXCJzdHlsZV9uYW1lXCI6XCJveGZvcmQtdGRsLTItZGV2XCIsXCJ1bml0c1wiOlt7XCJudW1iZXJcIjoxLFwiaWRcIjpcIjU0ODQxNjBcIixcImlzUmV2aWV3XCI6ZmFsc2UsXCJ0aXRsZVwiOlwiVGVtYSBkZSBwcnVlYmFcIixcImltYWdlXCI6XCIuLi90aGVtZXMvcmVzcG9uc2l2ZS9pbWFnZXMvbGlicm8vdmVyZGUucG5nXCIsXCJkZXNjcmlwdGlvblwiOlwiUGFyYSBkZXNhcnJvbGxvXCIsXCJzdWJ1bml0c1wiOlt7XCJpZFwiOlwiMzE5NDUzODdcIixcImlkRXh0XCI6XCJcIixcInRpdGxlXCI6XCJMaWJybyBEaWdpdGFsXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJsZXZlbFwiOlwiMVwiLFwiY29udGVudFN0eWxlXCI6XCJveGZvcmQtdGRsLTItZGV2XCIsXCJ0eXBlXCI6XCJsaWJyb1wiLFwiaW1hZ2VcIjpcIi9pbWFnZXMvY29tbW9uL2FjdGl2aXR5X2RpZ2l0YWxib29rLnBuZ1wiLFwidXJsXCI6XCJodHRwczovL3Rlc3QyMC5ibGlua2xlYXJuaW5nLmNvbS9jb3Vyc2VQbGF5ZXIvbGlicm9kaWdpdGFsX2h0bWwucGhwP2lkY2xhc2U9MzE5NDUzODcmaWRjdXJzbz01MTI2NDRcIixcIm9uY2xpY2tUaXRsZVwiOlwicmVkaXJlY2Npb25hcignaHR0cHM6Ly90ZXN0MjAuYmxpbmtsZWFybmluZy5jb20vY291cnNlUGxheWVyL2xpYnJvZGlnaXRhbF9odG1sLnBocD9pZGNsYXNlPTMxOTQ1Mzg3JmlkY3Vyc289NTEyNjQ0JywgZmFsc2UsIHVuZGVmaW5lZCk7XCIsXCJvY3VsdGFyXCI6ZmFsc2UsXCJyZXZpZXdJbkZ1bGxTY3JlZW5cIjpmYWxzZSxcInBhZ3NcIjpcIjRcIixcInNsaWRlc1wiOltdLFwibG9ja1wiOjE2LFwidHlwZUludFwiOjYsXCJldmFsVHlwZVwiOjAsXCJvbmx5VmlzaWJsZVRlYWNoZXJzXCI6ZmFsc2UsXCJvYmpKU09OXCI6XCIvY291cnNlUGxheWVyL2xpYnJvZGlnaXRhbF9qc29uLnBocD9pZGNsYXNlPTMxOTQ1Mzg3JmlkY3Vyc289NTEyNjQ0XCIsXCJvZmZzZXRcIjowLFwic3RhcnRfc2lkZVwiOlwibGVmdFwifV0sXCJyZXNvdXJjZXNcIjpbXX1dfVxuICAgIGNhbGxiYWNrKGRhdGEpO1xufVxuZXhwb3J0IGRlZmF1bHQgbG9hZERhdGE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2xvYWREYXRhLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5jbGFzcyBMb2FkaW5nU2NyZWVuIHtcbiAgICBpbml0KCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaWNpYW5kbyBMb2FkaW5nU2NyZWVuXCIpO1xuICAgIH1cbiAgICB1cGRhdGUobG9hZGluZyl7XG4gICAgICAgIGlmKGxvYWRpbmcpe1xuICAgICAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmdTY3JlZW4udXBkYXRlKHRydWUpXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZ1NjcmVlbi51cGRhdGUoZmFsc2UpXCIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTY3JlZW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL19sb2FkaW5nU2NyZWVuLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgQW5pbWF0aW9ucyBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG5jb25zdCBhbmltYXRpb25zID0gbmV3IEFuaW1hdGlvbnM7XG5cbi8vRE9NIGVsZW1lbnRzXG5cbmNsYXNzIFNwbGFzaFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21FbGVtZW50cyA9IHtcbiAgICAgICAgICAgIHNjcmVlbkRpdjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291cF90ZGxfc3BsYXNoX3NjcmVlbicpLFxuICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF9zcGxhc2hfX21haW5fdGl0bGUnKVswXSxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpbml0KGRhdGEpe1xuICAgICAgICB0aGlzLnN0YXRlID0gZGF0YTtcbiAgICAgICAgLy9UaXRsZVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdXBfc3BsYXNoX19tYWluX3RpdGxlJylbMF0udGV4dENvbnRlbnQgPSAnZmVmZWZlZic7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50cy50aXRsZS50ZXh0Q29udGVudCA9IHRoaXMuc3RhdGUudGl0bGU7XG4gICAgICAgIHRoaXMuc2hvdygpXG5cbiAgICAgICAgaWYoY29uZmlnLmRldil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNwbGFzaFNjcmVlbi5pbml0KClcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxuICAgIHNob3coKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBhbmltYXRpb25zLnNob3dPcGFjaXR5U2NhbGUodGhpcy5kb21FbGVtZW50cy5zY3JlZW5EaXYpO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTcGxhc2hTY3JlZW4udXBkYXRlKHRydWUpXCIpXG4gICAgfVxuICAgIGhpZGUoKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBzY3JlZW5EaXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNwbGFzaFNjcmVlbi51cGRhdGVcIiwgZGF0YSk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwbGFzaFNjcmVlbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvX3NwbGFzaFNjcmVlbi5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5jbGFzcyBBbmltYXRpb25zIHtcbiAgICAvLyBjb25zdHJ1Y3Rvcigpe1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkFuaW1hdGlvbnNcIik7XG4gICAgLy8gfVxuICAgIFxuICAgIGluaXQoZGF0YSl7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBkYXRhO1xuICAgICAgICAvL1RpdGxlXG4gICAgICAgIGRvbUVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5zdGF0ZS50aXRsZTtcbiAgICAgICAgdGhpcy5zaG93KClcblxuICAgICAgICBpZihjb25maWcuZGV2KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3BsYXNoU2NyZWVuLmluaXQoKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9XG4gICAgc2hvd09wYWNpdHlTY2FsZShlbGVtZW50LCBjYWxsYmFjayl7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Nob3cnKTtcbiAgICAgICAgLy9QYXJhIGFjdGl2YXIgZWwgZGlzcGxheTogYmxvY2tcbiAgICAgICAgdmFyIHRlbXAgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25FdmVudCA9IHdoaWNoVHJhbnNpdGlvbkV2ZW50KCk7XG4gICAgICAgIHRyYW5zaXRpb25FdmVudCAmJiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2FuaW1hdGUnKTtcbiAgICB9XG4gICAgaGlkZU9wYWNpdHlTY2FsZSgpe1xuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbnM7XG5cbmZ1bmN0aW9uIHdoaWNoVHJhbnNpdGlvbkV2ZW50KCl7XG4gICAgdmFyIHQ7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcbiAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgICAndHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxuICAgICAgJ09UcmFuc2l0aW9uJzonb1RyYW5zaXRpb25FbmQnLFxuICAgICAgJ01velRyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcbiAgICAgICdXZWJraXRUcmFuc2l0aW9uJzond2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICB9XG5cbiAgICBmb3IodCBpbiB0cmFuc2l0aW9ucyl7XG4gICAgICAgIGlmKCBlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2FuaW1hdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9