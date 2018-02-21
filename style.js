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

			//OupTdlStyle.showLoading();
		},

		onActivityDataLoaded: function(data) {
			// console.log('onActivityDataLoaded:');
			// console.log(data);
			// console.log(JSON.stringify(data));
		},

		onCourseDataLoaded: function(data) {
			// console.log('onCourseDataLoaded:');
			// console.log(data);
			// console.log(JSON.stringify(data));
			OupTdlStyle.init(data);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
    dev: false
};
exports.default = config;

/***/ }),
/* 1 */
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

        this.showTimeout = null;
    }

    _createClass(Animations, [{
        key: 'init',
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
        value: function hideOpacityScale(element, callback) {
            element.classList.remove('active_animate');
            clearTimeout(this.showTimeout);
            this.showTimeout = setTimeout(function () {
                element.classList.remove('active_show');
            }, 400);
            //Para activar el display: block
            // var temp = element.scrollHeight;
            // var transitionEvent = whichTransitionEvent();
            // transitionEvent && element.addEventListener(transitionEvent, callback);
            // element.classList.add('active_animate');
        }
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AspecRatioBodyClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getLessonById = getLessonById;
exports.getResourceById = getResourceById;
exports.getResourceType = getResourceType;

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getLessonById(_ref) {
    var lessonId = _ref.lessonId,
        mainData = _ref.mainData;

    var selectedLesson = false;
    mainData.units.forEach(function (unit) {
        unit.subunits.forEach(function (lesson) {
            if (lesson.id * 1 == lessonId) {
                selectedLesson = lesson;
            }
        });
    });
    return selectedLesson;
}

function getResourceById(_ref2) {
    var resourceId = _ref2.resourceId,
        mainData = _ref2.mainData;

    var selectedResource = false;
    mainData.units.forEach(function (unit) {
        unit.resources.forEach(function (resource) {
            if (resource.id == resourceId) {
                selectedResource = resource;
            }
        });
    });
    return selectedResource;
}

function getResourceType(resource) {
    var selectedType = resource.type;
    if (selectedType == 'actividad') {
        var tag = resource.tag;
        if (tag) {
            //Si es tags es un array o string
            if (typeof tag != 'string') {
                if (tag.indexOf('interactive') >= 0) {
                    selectedType = 'actividad-interactive';
                }
            } else if (tag.search('interactive') >= 0) {
                selectedType = 'actividad-interactive';
            }
        }
    }
    return selectedType;
}

var AspecRatioBodyClass = exports.AspecRatioBodyClass = function () {
    function AspecRatioBodyClass() {
        _classCallCheck(this, AspecRatioBodyClass);
    }

    _createClass(AspecRatioBodyClass, [{
        key: 'init',
        value: function init(element, callback) {
            var used_element = element || document;
            this.check(used_element, callback);
            var _this = this;
            $(window).resize(function () {
                _this.check(used_element, callback);
            });
        }
    }, {
        key: 'check',
        value: function check(used_element, callback) {
            var displayStyle;
            if (used_element != document) {
                displayStyle = $(used_element + '>*').css('display');
                $(used_element + '>*').css('display', 'none');
            }
            var x = $(used_element).outerWidth(),
                y = $(used_element).outerHeight();
            if (used_element != document) {
                $(used_element + '>*').css('display', displayStyle);
            }
            var elemendToClass = used_element == document ? 'body' : used_element;
            if (x < y) {
                $(elemendToClass).addClass('ouptdl-portrait').removeClass('ouptdl-landscape');
            } else {
                $(elemendToClass).removeClass('ouptdl-portrait').addClass('ouptdl-landscape');
            }
            if (typeof callback == 'function') {
                callback();
            }
        }
    }]);

    return AspecRatioBodyClass;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(11);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _responsiveStatus = __webpack_require__(12);

var _responsiveStatus2 = _interopRequireDefault(_responsiveStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
    function Slider() {
        _classCallCheck(this, Slider);

        this.state = {
            elements: [],
            onElementClickAction: null,
            containerSelector: null,
            elementMinWidth: {
                mobile: 0,
                tablet: 0,
                desktop: 0
            },
            elementMinHeight: {
                mobile: 0,
                tablet: 0,
                desktop: 0
            },
            sliderCurrentPage: 0,
            randomId: '',
            resizeStarted: false,
            slickStarted: false
        };
    }

    _createClass(Slider, [{
        key: 'init',
        value: function init(props) {
            var onElementClickAction = props.onElementClickAction,
                elements = props.elements,
                containerSelector = props.containerSelector,
                elementMinWidth = props.elementMinWidth,
                elementMinHeight = props.elementMinHeight;
            //Title

            this.state.elements = elements;
            this.state.onElementClickAction = onElementClickAction;
            this.state.containerSelector = containerSelector;
            this.state.elementMinWidth = elementMinWidth;
            this.state.elementMinHeight = elementMinHeight;

            if (_config2.default.dev) {
                console.log("Slider.init()");
                //console.log(this.state);
            }
            this.state.randomId = 'id_' + Math.round(Math.random() * 99999);
            (0, _jquery2.default)(containerSelector).addClass('oup_slider').html('\n            <div class="oup_slider__content_and_dots">\n                <div id="' + this.state.randomId + '__content" class="oup_slider__content"></div>\n                <div class="oup_slider__dots"></div>\n            </div>\n            <div class="oup_slider__arrows"></div>\n        ');
            if (!this.state.resizeStarted) {
                this.state.resizeStarted = true;
                (0, _jquery2.default)(window).resize(this.elementsRefresh.bind(this));
            }
        }
    }, {
        key: 'show',
        value: function show() {
            // setTimeout(this.elementsRefresh.bind(this), 0);
            this.elementsRefresh();
        }
    }, {
        key: 'elementsRefresh',
        value: function elementsRefresh() {
            var _this2 = this;

            if (_config2.default.dev) console.log("Slider.elementsRefresh()");
            var $slider = (0, _jquery2.default)('#' + this.state.randomId + '__content'); //$(this.state.containerSelector + ' .oup_slider__content');
            //Destroy
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
            $slider.html('');
            $slider.css('height', (0, _jquery2.default)(this.state.containerSelector).find('.oup_slider__content_and_dots').height() - (0, _jquery2.default)(this.state.containerSelector).find('.oup_slider__dots').height() + 'px');
            var cols = Math.floor($slider.width() / this.state.elementMinWidth[(0, _responsiveStatus2.default)()]) || 1;
            this.state.elementWidth = Math.floor($slider.width() / cols);
            var rows = Math.floor($slider.height() / this.state.elementMinHeight[(0, _responsiveStatus2.default)()]) || 1;
            this.state.elementHeight = Math.floor($slider.height() / rows);

            var elementsPerPage = cols * rows;
            var pagesNumber = Math.ceil(this.state.elements.length / elementsPerPage);
            // if(config.dev){
            //     console.log("##################################");
            //     console.log("Slider calculations:");
            //     console.log("responsiveStatus: ", responsiveStatus());
            //     console.log("rows", rows);
            //     console.log("cols", cols);
            //     console.log("this.state.elementHeight", this.state.elementHeight[responsiveStatus()]);
            //     console.log("elementsPerPage", elementsPerPage);
            //     console.log("this.state.elements.length", this.state.elements.length);
            //     console.log("pagesNumber", pagesNumber);
            //     console.log("$slider.height() / rows", $slider.height() +'/' + rows, $slider.height() / rows);
            //     console.log("rows * this.state.elementHeight", rows +'*'+ this.state.elementHeight[responsiveStatus()], rows * this.state.elementHeight[responsiveStatus()]);
            // }

            var htmlString = '';
            for (var page = 0; page < pagesNumber; page++) {
                var pageHtmlString = '<div class="oup__slider__slide">';
                for (var index = 0; index < elementsPerPage; index++) {
                    if (this.state.elements[page * elementsPerPage + index]) {
                        pageHtmlString += this.state.elements[page * elementsPerPage + index];
                    } else {
                        pageHtmlString += '<div></div>';
                    }
                }
                pageHtmlString += '</div>';
                // console.log(pageHtmlString);
                htmlString += pageHtmlString;
            }
            $slider.html(htmlString);
            $slider.find('.oup__slider__slide').children().click(function (element) {
                return _this2.state.onElementClickAction(element);
            });
            if (!this.state.slickStarted) {
                this.state.slickStarted = true;
                $slider.on('init', this.elementsResize.bind(this));
                var _this = this;
                $slider.on('afterChange', function (event, slider, currentSlide) {
                    _this.state.sliderCurrentPage = currentSlide;
                });
            }

            var currentSlide = this.state.sliderCurrentPage < pagesNumber ? this.state.sliderCurrentPage : pagesNumber - 1;
            $slider.slick({
                infinite: false,
                // appendArrows: this.state.containerSelector + ' .oup_slider__arrows',
                prevArrow: '<div class="oup_slider__arrow oup_slider__arrow--left"></div>',
                nextArrow: '<div class="oup_slider__arrow oup_slider__arrow--right"></div>',
                dots: true,
                appendDots: this.state.containerSelector + ' .oup_slider__dots',
                initialSlide: currentSlide
            });
        }
    }, {
        key: 'elementsResize',
        value: function elementsResize() {
            if (_config2.default.dev) console.log("Slider.elementsResize()");
            (0, _jquery2.default)('#' + this.state.randomId + '__content .oup__slider__slide').children().css({
                width: this.state.elementWidth + 'px',
                height: this.state.elementHeight + 'px'
            });
        }
    }]);

    return Slider;
}();

exports.default = Slider;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oupTdlApp = new _main2.default();
module.exports = {
    // showLoading: function () {
    //     oupTdlApp.showLoading();
    // },
    init: function init(data) {
        oupTdlApp.init(data);
    }
};

//Muestra el loading
document.write('<div id="oup_tdl_loading_screen--basic"></div>');

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';

// import loadData from './loadData';

//Pantallas
//import LoadingScreen from './_loadingScreen';


var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _helpers = __webpack_require__(2);

var _urlHelper = __webpack_require__(8);

var _urlHelper2 = _interopRequireDefault(_urlHelper);

var _splashScreen = __webpack_require__(9);

var _splashScreen2 = _interopRequireDefault(_splashScreen);

var _unitMenuScreen = __webpack_require__(10);

var _unitMenuScreen2 = _interopRequireDefault(_unitMenuScreen);

var _lessonMenuScreen = __webpack_require__(13);

var _lessonMenuScreen2 = _interopRequireDefault(_lessonMenuScreen);

var _plusZoneCategoriesMenu = __webpack_require__(14);

var _plusZoneCategoriesMenu2 = _interopRequireDefault(_plusZoneCategoriesMenu);

var _plusZoneResourcesMenu = __webpack_require__(15);

var _plusZoneResourcesMenu2 = _interopRequireDefault(_plusZoneResourcesMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OupTdl = function () {
	function OupTdl() {
		_classCallCheck(this, OupTdl);

		this.state = {
			mainData: {},
			splashBackground: ''
		};
		this.screens = {};
	}

	// showLoading(){
	//     if(config.dev)
	//         console.log("Loading...");
	//     const htmlDOM = `
	//         <div id="oup_tdl_loading_screen">
	//             <div class="oup_tdl_spinner">
	//                 <div class="oup_tdl_bounce1"></div>
	//                 <div class="oup_tdl_bounce2"></div>
	//                 <div class="oup_tdl_bounce3"></div>
	//             </div>
	//         </div>
	//     `;

	//     $('body').append( htmlDOM );
	// }

	_createClass(OupTdl, [{
		key: 'init',
		value: function init(data) {
			if (_config2.default.dev) {
				console.log('Datos Cargados:', this.state.mainData);
				console.log(JSON.stringify(data));
			}
			//Quitamos la primera unidad, y de ahí tomamos la primera imagen
			//Mira si la actividad actual es la primera antes de lanzar el menú
			if (idclase == data.units[0].subunits[0].id) {
				if (_config2.default.dev) console.log('Es la actividad Portada');
				this.state.splashBackground = data.units[0].image;
				//Bora la primera unidad
				data.units.shift();
				this.state.mainData = data;
				this.initMenu();
			} else {
				if (_config2.default.dev) console.log('NO es la actividad Portada');
				//Vuelve a activar el contenido
			}
			//Borra loading
			$('#oup_tdl_loading_screen--basic').remove();
		}
	}, {
		key: 'initMenu',
		value: function initMenu() {
			var _this = this;

			var htmlDOM = '\n\t\t\t<div id="oup_tdl_container">\n\t\t\t\t<div id="oup_tdl_splash_screen" style="background-image: url(' + this.state.splashBackground + ')">\n\t\t\t\t\t<div class="oup_splash__logo_oup"></div>\n\t\t\t\t\t<div class="oup_splash__logo_tdl"></div>\n\t\t\t\t\t<div class="oup_splash__content">\n\t\t\t\t\t\t<h1 class="oup_splash__main_title"></h1>\n\t\t\t\t\t\t<div class="oup_splash__enter"><span>Enter</span></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="oup_splash__footer">\xA9 Oxford University Press</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_unit_menu_screen">\n\t\t\t\t\t<div class="oup_unit_menu__content">\n\t\t\t\t\t\t<div class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<h2 class="oup_unit_menu__main_title"></h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="oup_unit_menu__unit_slider_container"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_lesson_menu_screen">\n\t\t\t\t\t<div class="oup_lesson_menu__content">\n\t\t\t\t\t\t<h2 class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<div class="oup_lesson_menu__main_title oup_tdl__breadcrumb__level1">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<div class="oup_lesson_menu__lesson_slider_container">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_plus_zone_categories_menu_screen">\n\t\t\t\t\t<div class="oup_plus_zone_categories_menu__content">\n\t\t\t\t\t\t<h2 class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<div class="oup_plus_zone_categories_menu__main_title oup_tdl__breadcrumb__level1">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__level2">PlusZone</div>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<div class="oup_plus_zone_categories_menu__container">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_plus_zone_resources_menu_screen">\n\t\t\t\t\t<div class="oup_plus_zone_resources_menu__content">\n\t\t\t\t\t\t<h2 class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<div class="oup_plus_zone_resources_menu__main_title oup_tdl__breadcrumb__level1">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__level2">PlusZone</div>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<div class="oup_plus_zone_resources_menu__resource_slider_container">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';

			$('body').append(htmlDOM);

			//Check if is desktop
			if ((typeof blink === 'undefined' ? 'undefined' : _typeof(blink)) == 'object') {
				if (!blink.isApp) {
					//Activate bar hole if is not App
					document.getElementById('oup_tdl_container').style.bottom = '44px';
					//Remove useless buttons of navbar
					//$('.navbar #boton_reiniciar, .navbar #boton_rotulador, .navbar #boton_subrayador, .navbar #boton_borrador, .navbar #boton_notes, .navbar #boton_buscar, .navbar #enter-edit-mode').remove();
				}
			}

			this.screens = {
				//loadingScreen: new LoadingScreen,
				splashScreen: new _splashScreen2.default(),
				unitMenuScreen: new _unitMenuScreen2.default(),
				lessonMenuScreen: new _lessonMenuScreen2.default(),
				plusZoneCategoriesMenuScreen: new _plusZoneCategoriesMenu2.default(),
				plusZoneResourcesMenuScreen: new _plusZoneResourcesMenu2.default()
			};

			this.urlHelper = new _urlHelper2.default();

			//this.screens.loadingScreen.update(this.state.loading);
			this.screens.splashScreen.init({
				title: this.state.mainData.title,
				// onEnterAction: this.goToUnitMenu.bind(this),
				onEnterAction: function onEnterAction() {
					return _this.urlHelper.updateUrlHash({
						stateName: 'unitmenu'
					});
				}

			});
			this.screens.unitMenuScreen.init({
				title: this.state.mainData.title,
				units: this.state.mainData.units,
				// onUnitAction: (unit) => this.goToLessonMenu(unit),
				onUnitAction: function onUnitAction(unit) {
					return _this.urlHelper.updateUrlHash({
						stateName: 'unit',
						unit: unit
					});
				},
				// onBackAction: this.goToSplash.bind(this),
				onBackAction: function onBackAction(unit) {
					return _this.urlHelper.updateUrlHash({
						stateName: 'splash'
					});
				}
			});
			this.screens.lessonMenuScreen.init();
			this.screens.plusZoneCategoriesMenuScreen.init();
			this.screens.plusZoneResourcesMenuScreen.init();

			this.urlHelper.init({
				goToSplash: this.goToSplash.bind(this),
				goToUnitMenu: this.goToUnitMenu.bind(this),
				goToLessonMenu: this.goToLessonMenu.bind(this),
				goToPlusZoneCategoriesMenu: this.goToPlusZoneCategoriesMenu.bind(this),
				goToPlusZoneResourcesMenu: this.goToPlusZoneResourcesMenu.bind(this)

			});
		}
	}, {
		key: 'goToSplash',
		value: function goToSplash() {
			if (_config2.default.dev) console.log('OupTdl.goToSplash()');
			this.screens.lessonMenuScreen.hide();
			this.screens.unitMenuScreen.hide();
			this.screens.plusZoneCategoriesMenuScreen.hide();
			this.screens.plusZoneResourcesMenuScreen.hide();
			this.screens.splashScreen.show();
		}
	}, {
		key: 'goToUnitMenu',
		value: function goToUnitMenu() {
			if (_config2.default.dev) console.log('OupTdl.goToUnitMenu()');
			this.screens.lessonMenuScreen.hide();
			this.screens.plusZoneCategoriesMenuScreen.hide();
			this.screens.plusZoneResourcesMenuScreen.hide();
			this.screens.splashScreen.hide();
			this.screens.unitMenuScreen.show();
		}
	}, {
		key: 'goToLessonMenu',
		value: function goToLessonMenu(unitNumber) {
			var _this2 = this;

			if (_config2.default.dev) console.log('OupTdl.goToLessonMenu()', unitNumber);
			var selectedUnit = void 0;
			this.state.mainData.units.forEach(function (unit) {
				if (unit.number == unitNumber) {
					selectedUnit = unit;
				}
			});
			if (selectedUnit) {
				var unitTitle = selectedUnit.title;
				var image = selectedUnit.image;
				var lessons = selectedUnit.subunits;
				var hasResources = selectedUnit.resources.length > 0;
				this.screens.lessonMenuScreen.update({
					title: unitTitle,
					number: unitNumber,
					image: image,
					lessons: lessons,
					// onPlusZoneAction: (unit) => this.goToPlusZoneCategoriesMenu(unit),
					// onLessonAction: (data) => this.goToLesson(data),
					onPlusZoneAction: function onPlusZoneAction(unit) {
						return _this2.urlHelper.updateUrlHash({
							stateName: 'pluszone',
							unit: unit
						});
					},
					onLessonAction: function onLessonAction(data) {
						return _this2.goToLesson(data);
					},
					// onBackAction: this.goToUnitMenu.bind(this),
					onBackAction: function onBackAction() {
						return _this2.urlHelper.updateUrlHash({
							stateName: 'unitmenu'
						});
					},
					hasPlusZone: hasResources
				});

				this.screens.plusZoneCategoriesMenuScreen.hide();
				this.screens.plusZoneResourcesMenuScreen.hide();
				this.screens.splashScreen.hide();
				this.screens.unitMenuScreen.hide();
				this.screens.lessonMenuScreen.show();
			}
		}
	}, {
		key: 'goToLesson',
		value: function goToLesson(_ref) {
			var unitNumber = _ref.unitNumber,
			    lessonId = _ref.lessonId;

			if (_config2.default.dev) console.log('OupTdl.goToLessonMenu()', unitNumber, lessonId);
			var selectedLesson = null;
			selectedLesson = (0, _helpers.getLessonById)({ lessonId: lessonId, mainData: this.state.mainData });
			if (selectedLesson) {
				eval(selectedLesson.onclickTitle);
			}
		}
	}, {
		key: 'goToPlusZoneCategoriesMenu',
		value: function goToPlusZoneCategoriesMenu(unitNumber) {
			var _this3 = this;

			if (_config2.default.dev) console.log('OupTdl.goToPlusZoneCategoriesMenu()', unitNumber);
			var selectedUnit = void 0;
			this.state.mainData.units.forEach(function (unit) {
				if (unit.number == unitNumber) {
					selectedUnit = unit;
				}
			});

			// buscar tag 'interactive'
			if (selectedUnit) {
				var unitTitle = selectedUnit.title;
				var image = selectedUnit.image;
				var resources = selectedUnit.resources;
				var categories = [];
				resources.forEach(function (resource) {
					//excepcion de categoria actividad->interactive
					var type = (0, _helpers.getResourceType)(resource);
					if (categories.indexOf(type) < 0) {
						categories.push(type);
					}
				});

				this.screens.plusZoneCategoriesMenuScreen.update({
					title: unitTitle,
					image: image,
					number: unitNumber,
					categories: categories,
					//onCategoryAction: (data) => this.goToPlusZoneResourcesMenu(data),
					onCategoryAction: function onCategoryAction(_ref2) {
						var unitNumber = _ref2.unitNumber,
						    category = _ref2.category;
						return _this3.urlHelper.updateUrlHash({
							stateName: 'pluscategory',
							unit: unitNumber,
							category: category
						});
					},
					//onBackAction: (number) => this.goToLessonMenu(number),
					onBackAction: function onBackAction() {
						return _this3.urlHelper.updateUrlHash({
							stateName: 'unit',
							unit: unitNumber
						});
					}
				});

				this.screens.plusZoneResourcesMenuScreen.hide();
				this.screens.splashScreen.hide();
				this.screens.unitMenuScreen.hide();
				this.screens.lessonMenuScreen.hide();
				this.screens.plusZoneCategoriesMenuScreen.show();
			}
			//Cierra el reproductor de blink
			if (_config2.default.dev) console.log('cerrarIframe()');
			if (typeof cerrarIframe == 'function') {
				cerrarIframe();
			}
		}
	}, {
		key: 'goToPlusZoneResourcesMenu',
		value: function goToPlusZoneResourcesMenu(_ref3) {
			var _this4 = this;

			var unitNumber = _ref3.unitNumber,
			    category = _ref3.category;

			if (_config2.default.dev) console.log('OupTdl.goToPlusZoneResourcesMenu()', unitNumber, category);
			var selectedUnit = void 0;
			this.state.mainData.units.forEach(function (unit) {
				if (unit.number == unitNumber) {
					selectedUnit = unit;
				}
			});

			if (selectedUnit) {
				var unitTitle = selectedUnit.title;
				var image = selectedUnit.image;
				var resources = [];
				selectedUnit.resources.forEach(function (resource) {
					if ((0, _helpers.getResourceType)(resource) == category) {
						resources.push(resource);
					}
				});
				this.screens.plusZoneResourcesMenuScreen.update({
					title: unitTitle,
					image: image,
					number: unitNumber,
					resources: resources,
					onResourceAction: function onResourceAction(data) {
						return _this4.goToPlusZoneResource(data);
					},
					// onBackAction: (number) => this.goToPlusZoneCategoriesMenu(number),
					onBackAction: function onBackAction(unit) {
						return _this4.urlHelper.updateUrlHash({
							stateName: 'pluszone',
							unit: unit
						});
					}
				});

				this.screens.splashScreen.hide();
				this.screens.unitMenuScreen.hide();
				this.screens.lessonMenuScreen.hide();
				this.screens.plusZoneCategoriesMenuScreen.hide();
				this.screens.plusZoneResourcesMenuScreen.show();
			}
		}
	}, {
		key: 'goToPlusZoneResource',
		value: function goToPlusZoneResource(_ref4) {
			var unitNumber = _ref4.unitNumber,
			    resourceId = _ref4.resourceId;

			if (_config2.default.dev) console.log('OupTdl.goToPlusZoneResource()', unitNumber, resourceId);

			var selectedResource = (0, _helpers.getResourceById)({ resourceId: resourceId, mainData: this.state.mainData });
			if (selectedResource) {

				//Cierra el reproductor de blink
				if (_config2.default.dev) console.log('cerrarIframe()');
				if (typeof cerrarIframe == 'function') {
					cerrarIframe();
				}

				//Ejecuta la función que viene en el objeto de libro
				eval(selectedResource.onclickTitle);
			}
		}
	}]);

	return OupTdl;
}();

exports.default = OupTdl;

/***/ }),
/* 8 */
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

//Esta función solo se debe ejecutar al inicio


var UrlHelper = function () {
    function UrlHelper() {
        _classCallCheck(this, UrlHelper);

        this.urlState = {
            stateName: '', // 'splash', 'unitmenu', 'unit', 'pluszone', 'pluscategory'
            unit: -1,
            category: ''
        };
        this.actions = {};
    }

    _createClass(UrlHelper, [{
        key: 'init',
        value: function init(actions) {
            this.actions = actions;
            if (_config2.default.dev) console.log("UrlHelper.init()");
            var _this = this;
            window.onhashchange = function () {
                _this.goToState();
            };
            this.goToState();
        }
    }, {
        key: 'updateCurrentState',
        value: function updateCurrentState() {
            if (_config2.default.dev) console.log("UrlHelper.updateCurrentState()");
            var urlState = {};
            var hashName = window.location.hash;
            var hashParts = hashName.split('_'); //Para dividir las partes del hash
            //El hash puede ser
            // "#" o "#" => Splash
            // "#unitmenu" => Menú de unidades
            // "#unit_X" => Unidad X
            // "#pluszone_X" => Pluszone de unidad X
            // "#pluscategory_X_CATEGORY" => Pluszone en categoría CATEGORY y unidad X
            if (hashParts[0] == '#unitmenu' && hashParts.length == 1) {
                urlState.stateName = 'unitmenu';
            } else if (hashParts[0] == '#unit' && hashParts.length == 2) {
                urlState.stateName = 'unit';
                urlState.unit = hashParts[1];
            } else if (hashParts[0] == '#pluszone' && hashParts.length == 2) {
                urlState.stateName = 'pluszone';
                urlState.unit = hashParts[1];
            } else if (hashParts[0] == '#pluscategory' && hashParts.length == 3) {
                urlState.stateName = 'pluscategory';
                urlState.unit = hashParts[1];
                urlState.category = hashParts[2];
            } else {
                urlState.stateName = 'splash';
            }
            this.urlState = urlState;
        }
    }, {
        key: 'goToState',
        value: function goToState() {
            this.updateCurrentState();
            switch (this.urlState.stateName) {
                case 'splash':
                    this.actions.goToSplash();
                    break;

                case 'unitmenu':
                    this.actions.goToUnitMenu();
                    break;

                case 'unit':
                    this.actions.goToLessonMenu(this.urlState.unit);
                    break;

                case 'pluszone':
                    this.actions.goToPlusZoneCategoriesMenu(this.urlState.unit);
                    break;

                case 'pluscategory':
                    this.actions.goToPlusZoneResourcesMenu({ unitNumber: this.urlState.unit, category: this.urlState.category });
                    break;

                default:
                    break;
            }
        }
    }, {
        key: 'updateUrlHash',
        value: function updateUrlHash(urlState) {
            var urlHash = '';
            switch (urlState.stateName) {
                case 'splash':
                    urlHash = '';
                    break;

                case 'unitmenu':
                    urlHash = '#unitmenu';
                    break;

                case 'unit':
                    urlHash = '#unit_' + urlState.unit;
                    break;

                case 'pluszone':
                    urlHash = '#pluszone_' + urlState.unit;
                    break;

                case 'pluscategory':
                    urlHash = '#pluscategory_' + urlState.unit + '_' + urlState.category;
                    break;

                default:
                    break;
            }
            window.location.hash = urlHash;
        }
    }]);

    return UrlHelper;
}();

exports.default = UrlHelper;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _animations = __webpack_require__(1);

var _animations2 = _interopRequireDefault(_animations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var animations = new _animations2.default();

//DOM elements

var SplashScreen = function () {
    function SplashScreen() {
        _classCallCheck(this, SplashScreen);

        this.state = {
            active: false
        };
        this.domElements = {
            screenDiv: document.getElementById('oup_tdl_splash_screen'),
            title: document.getElementsByClassName('oup_splash__main_title')[0],
            enterBtn: document.getElementsByClassName('oup_splash__enter')[0]
        };
    }

    _createClass(SplashScreen, [{
        key: 'init',
        value: function init(props) {
            var title = props.title,
                onEnterAction = props.onEnterAction;
            //Title

            this.domElements.title.textContent = title;
            this.domElements.enterBtn.onclick = onEnterAction;

            if (_config2.default.dev) {
                console.log("SplashScreen.init()");
                //console.log(this.state);
            }
        }
    }, {
        key: 'show',
        value: function show() {
            if (_config2.default.dev) console.log("SplashScreen.show()");
            if (!this.state.active) {
                animations.showOpacityScale(this.domElements.screenDiv);
                this.state.active = true;
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            // this.state.active = true;
            if (_config2.default.dev) console.log("SplashScreen.hide()");
            if (this.state.active) {
                animations.hideOpacityScale(this.domElements.screenDiv);
                this.state.active = false;
            }
        }
    }]);

    return SplashScreen;
}();

exports.default = SplashScreen;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _animations = __webpack_require__(1);

var _animations2 = _interopRequireDefault(_animations);

var _slider = __webpack_require__(3);

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var animations = new _animations2.default();

//DOM elements

var UnitMenuScreen = function () {
    function UnitMenuScreen() {
        _classCallCheck(this, UnitMenuScreen);

        // this.state = {
        //     title: '',
        //     active: false,
        // }
        this.state = {
            slider: null,
            onUnitAction: null
        };
        this.domElements = {
            screenDiv: document.getElementById('oup_tdl_unit_menu_screen'),
            backButton: $('#oup_tdl_unit_menu_screen .oup_tdl__breadcrumb__back').get(0),
            title: document.getElementsByClassName('oup_unit_menu__main_title')[0],
            sliderHiddenElements: document.getElementsByClassName('oup_unit_menu__slider_hidden_elements')[0],
            slider: document.getElementsByClassName('oup_unit_menu__unit_slider')[0]
        };
        this.unitHtmlElements = [];
        if (_config2.default.dev) console.log("UnitMenuScreen.constructor()");
    }

    _createClass(UnitMenuScreen, [{
        key: 'init',
        value: function init(props) {
            var _this = this;

            if (_config2.default.dev) {
                console.log("UnitMenuScreen.init()");
                //console.log(this.state);
            }
            var title = props.title,
                onUnitAction = props.onUnitAction,
                units = props.units,
                onBackAction = props.onBackAction;

            this.state.onUnitAction = onUnitAction;
            //Title
            this.domElements.title.textContent = title;
            units.forEach(function (unit) {
                _this.unitHtmlElements.push(_this.getMenuUnitElementStringHtml(unit));
            });

            $(this.domElements.backButton).unbind('click').on('click', onBackAction);

            this.state.slider = new _slider2.default();
            this.state.slider.init({
                elements: this.unitHtmlElements,
                onElementClickAction: function onElementClickAction(number) {
                    return _this.onUnitClick(number);
                },
                containerSelector: '.oup_unit_menu__unit_slider_container',
                elementMinWidth: {
                    mobile: 240,
                    tablet: 260,
                    desktop: 300
                },
                elementMinHeight: {
                    mobile: 100,
                    tablet: 110,
                    desktop: 120
                }
            });

            // $(window).resize(this.refreshSliderSize.bind(this));
        }
    }, {
        key: 'show',
        value: function show() {
            if (_config2.default.dev) console.log("UnitMenuScreen.show()");
            if (!this.state.active) {
                animations.showOpacityScale(this.domElements.screenDiv);
                this.state.slider.show();
                this.state.active = true;
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            //this.state.active = true;
            if (_config2.default.dev) console.log("UnitMenuScreen.hide()", this.state.active);
            if (this.state.active) {
                animations.hideOpacityScale(this.domElements.screenDiv);
                this.state.active = false;
            }
        }
    }, {
        key: 'getMenuUnitElementStringHtml',
        value: function getMenuUnitElementStringHtml(unit) {
            var htmlString = '\n            <div class="oup_unit_menu__unit-btn" number="' + unit.number + '">\n                <div class="oup_unit_menu__unit__number" style="background-image: url(' + unit.image + ');"></div>\n                <div class="oup_unit_menu__unit__title">\n                    ' + unit.title + '\n                </div>\n            </div>\n            ';
            return htmlString;
        }
    }, {
        key: 'onUnitClick',
        value: function onUnitClick(e) {
            var number = $(e.currentTarget).attr('number');
            this.state.onUnitAction(number);
        }
    }]);

    return UnitMenuScreen;
}();

exports.default = UnitMenuScreen;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function responsiveStatus() {
    var width = window.innerWidth;
    if (width < 768) {
        return 'mobile';
    } else if (width < 1024) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}

exports.default = responsiveStatus;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _animations = __webpack_require__(1);

var _animations2 = _interopRequireDefault(_animations);

var _slider = __webpack_require__(3);

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var animations = new _animations2.default();

//DOM elements

var LessonMenuScreen = function () {
    function LessonMenuScreen() {
        _classCallCheck(this, LessonMenuScreen);

        // this.state = {
        //     title: '',
        //     active: false,
        // }
        this.state = {
            slider: null,
            active: false,
            number: 0,
            onLessonAction: null,
            onPlusZoneAction: null
        };
        this.domElements = {
            screenDiv: document.getElementById('oup_tdl_lesson_menu_screen'),
            backButton: $('#oup_tdl_lesson_menu_screen .oup_tdl__breadcrumb__back').get(0),
            title: $('.oup_lesson_menu__main_title>strong').get(0),
            number: $('.oup_lesson_menu__main_title>span').get(0),
            sliderHiddenElements: document.getElementsByClassName('oup_lesson_menu__slider_hidden_elements')[0],
            slider: document.getElementsByClassName('oup_lesson_menu__unit_slider')[0]
        };
        this.lessonHtmlElements = [];
        if (_config2.default.dev) console.log("LessonMenuScreen.constructor()");
    }

    _createClass(LessonMenuScreen, [{
        key: 'init',
        value: function init() {
            if (_config2.default.dev) console.log("LessonMenuScreen.init()");
        }
    }, {
        key: 'update',
        value: function update(props) {
            var _this = this;

            if (_config2.default.dev) {
                console.log("LessonMenuScreen.update()", props);
                //console.log(this.state);
            }
            var title = props.title,
                number = props.number,
                image = props.image,
                onPlusZoneAction = props.onPlusZoneAction,
                onLessonAction = props.onLessonAction,
                lessons = props.lessons,
                onBackAction = props.onBackAction,
                hasPlusZone = props.hasPlusZone;
            //Title

            this.domElements.title.textContent = title;
            this.domElements.number.style.backgroundImage = 'url(' + image + ')';
            this.state.number = number;
            this.state.onPlusZoneAction = onPlusZoneAction;
            this.state.onLessonAction = onLessonAction;
            this.lessonHtmlElements = [];
            if (hasPlusZone) {
                this.lessonHtmlElements.push(this.getMenuPlusZoneElementStringHtml());
            }
            lessons.forEach(function (lesson) {
                if (lesson.type == 'libro') {
                    _this.lessonHtmlElements.push(_this.getMenuLessonElementStringHtml(lesson));
                }
            });

            $(this.domElements.backButton).unbind('click').on('click', onBackAction);
            this.state.slider = new _slider2.default();
            this.state.slider.init({
                elements: this.lessonHtmlElements,
                onElementClickAction: function onElementClickAction(e) {
                    return _this.onLessonClick(e);
                }, //this.onUnitClick,
                containerSelector: '.oup_lesson_menu__lesson_slider_container',
                elementMinWidth: {
                    mobile: 160 + 5 + 5,
                    tablet: 178 + 8 + 8,
                    desktop: 178 + 8 + 8
                },
                elementMinHeight: {
                    mobile: 160 + 5 + 5,
                    tablet: 178 + 8 + 8,
                    desktop: 178 + 8 + 8
                }
            });

            // $(window).resize(this.refreshSliderSize.bind(this));
        }
    }, {
        key: 'show',
        value: function show() {
            if (_config2.default.dev) console.log("LessonMenuScreen.show()");
            if (!this.state.active) {
                animations.showOpacityScale(this.domElements.screenDiv);
                this.state.slider.show();
                this.state.active = true;
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            //this.state.active = true;
            //screenDiv.classList.remove('active');
            if (_config2.default.dev) console.log("LessonMenuScreen.hide()");
            if (this.state.active) {
                animations.hideOpacityScale(this.domElements.screenDiv);
                this.state.active = false;
            }
        }
    }, {
        key: 'getMenuLessonElementStringHtml',
        value: function getMenuLessonElementStringHtml(lesson) {
            var backgroundStyle = '';
            if (lesson.image.length > 3) {
                backgroundStyle = 'background-image: url(' + lesson.image + ')';
            }
            var htmlString = '\n            <div class="oup_lesson_menu__lesson-btn" id="' + lesson.id + '">\n                <div class="oup_lesson_menu__lesson__image" style="' + backgroundStyle + '"></div>\n                <div class="oup_lesson_menu__lesson__title">\n                    <span>' + lesson.title + '</span>\n                </div>\n            </div>\n            ';
            return htmlString;
        }
    }, {
        key: 'getMenuPlusZoneElementStringHtml',
        value: function getMenuPlusZoneElementStringHtml() {
            var htmlString = '\n            <div class="oup_lesson_menu__lesson-btn oup_lesson_menu__lesson--plus-zone-btn">\n                <div class="oup_lesson_menu__lesson__image"></div>\n                <div class="oup_lesson_menu__lesson__title">\n                    <span>+Zone</span>\n                </div>\n            </div>\n            ';
            return htmlString;
        }
    }, {
        key: 'onLessonClick',
        value: function onLessonClick(e) {
            //If is +Zone
            if ($(e.currentTarget).hasClass('oup_lesson_menu__lesson--plus-zone-btn')) {
                this.state.onPlusZoneAction(this.state.number);
            } else {
                //Is is lesson, open lesson
                var id = $(e.currentTarget).attr('id');
                this.state.onLessonAction({ unitNumber: this.state.number, lessonId: id });
            }
        }
    }]);

    return LessonMenuScreen;
}();

exports.default = LessonMenuScreen;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _animations = __webpack_require__(1);

var _animations2 = _interopRequireDefault(_animations);

var _helpers = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var animations = new _animations2.default();

//DOM elements

var PlusZoneCategoriesMenuScreen = function () {
    function PlusZoneCategoriesMenuScreen() {
        _classCallCheck(this, PlusZoneCategoriesMenuScreen);

        // this.state = {
        //     title: '',
        //     active: false,
        // }
        this.state = {
            active: false,
            number: 0,
            onCategoryAction: null,
            onBackAction: null
        };
        this.domElements = {
            screenDiv: document.getElementById('oup_tdl_plus_zone_categories_menu_screen'),
            backButton: $('#oup_tdl_plus_zone_categories_menu_screen .oup_tdl__breadcrumb__back').get(0),
            title: $('.oup_plus_zone_categories_menu__main_title>strong').get(0),
            number: $('.oup_plus_zone_categories_menu__main_title>span').get(0)
        };
        this.htmlElements = '';
        if (_config2.default.dev) console.log("PlusZoneCategoriesMenuScreen.constructor()");
    }

    _createClass(PlusZoneCategoriesMenuScreen, [{
        key: 'init',
        value: function init() {
            if (_config2.default.dev) console.log("PlusZoneCategoriesMenuScreen.init()");

            //This add a class to body or element: ouptdl-portrait or ouptdl-landscape

        }
    }, {
        key: 'update',
        value: function update(props) {
            var _this = this;

            if (_config2.default.dev) {
                console.log("PlusZoneCategoriesMenuScreen.init()");
                //console.log(this.state);
            }
            var title = props.title,
                number = props.number,
                image = props.image,
                onCategoryAction = props.onCategoryAction,
                categories = props.categories,
                onBackAction = props.onBackAction;
            //Title

            this.domElements.title.textContent = title;
            this.domElements.number.style.backgroundImage = 'url(' + image + ')';
            this.state.number = number;
            this.state.onCategoryAction = onCategoryAction;
            this.state.onBackAction = onBackAction;
            this.htmlElements = '';

            categories.forEach(function (category) {
                _this.htmlElements += _this.getMenuCategoryStringHtml(category);
            });
            $('.oup_plus_zone_categories_menu__container').html(this.htmlElements);
            $('.oup_plus_zone_categories_menu__container .oup_plus_zone_categories_menu__category-btn').click(function (element) {
                return _this.onCategoryClick(element);
            });

            $(this.domElements.backButton).unbind('click').on('click', this.onBackClick.bind(this));

            var aspecRatioBodyClass = new _helpers.AspecRatioBodyClass();
            setTimeout(function () {
                aspecRatioBodyClass.init('.oup_plus_zone_categories_menu__category-btn', function () {
                    $('.oup_plus_zone_categories_menu__category-btn>*').hide();

                    var ancho = $('.oup_plus_zone_categories_menu__category-btn').outerWidth() - parseInt($('.oup_plus_zone_categories_menu__category-btn').css('padding-left'), 10) - parseInt($('.oup_plus_zone_categories_menu__category-btn').css('padding-right'), 10),
                        alto = $('.oup_plus_zone_categories_menu__category-btn').outerHeight() - parseInt($('.oup_plus_zone_categories_menu__category-btn').css('padding-top'), 10) - parseInt($('.oup_plus_zone_categories_menu__category-btn').css('padding-bottom'), 10);
                    var min = ancho < alto ? ancho : alto;
                    var marginTop = 0.5 * (alto - min);
                    marginTop = marginTop > 0 ? marginTop : 0;
                    $('.oup_plus_zone_categories_menu__category-btn>*').css({
                        display: 'block',
                        width: min + 'px',
                        height: min + 'px',
                        'margin-top': marginTop + 'px'
                    });
                });
            }, 0);
        }
    }, {
        key: 'show',
        value: function show() {
            if (_config2.default.dev) console.log("PlusZoneCategoriesMenuScreen.show()");
            if (!this.state.active) {
                animations.showOpacityScale(this.domElements.screenDiv);
                this.state.active = true;
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            //this.state.active = true;
            //screenDiv.classList.remove('active');
            if (_config2.default.dev) console.log("PlusZoneCategoriesMenuScreen.hide()");
            if (this.state.active) {
                animations.hideOpacityScale(this.domElements.screenDiv);
                this.state.active = false;
            }
        }
    }, {
        key: 'getMenuCategoryStringHtml',
        value: function getMenuCategoryStringHtml(category) {
            var backgroundStyle = '';
            var htmlString = '\n            <div class="oup_plus_zone_categories_menu__category-btn" data-category="' + category + '">\n                <div class="oup_plus_zone_categories_menu__category__box resource-' + category + '"></div>\n            </div>\n            ';
            return htmlString;
        }
    }, {
        key: 'onCategoryClick',
        value: function onCategoryClick(e) {
            if (_config2.default.dev) console.log("PlusZoneCategoriesMenuScreen.onCategoryClick()", this.state.number, $(e.currentTarget).data('category'));
            this.state.onCategoryAction({ unitNumber: this.state.number, category: $(e.currentTarget).data('category') });
        }
    }, {
        key: 'onBackClick',
        value: function onBackClick() {
            if (_config2.default.dev) console.log("PlusZoneCategoriesMenuScreen.onBackClick()");

            this.state.onBackAction(this.state.number);
        }
    }]);

    return PlusZoneCategoriesMenuScreen;
}();

exports.default = PlusZoneCategoriesMenuScreen;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _animations = __webpack_require__(1);

var _animations2 = _interopRequireDefault(_animations);

var _slider = __webpack_require__(3);

var _slider2 = _interopRequireDefault(_slider);

var _helpers = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var animations = new _animations2.default();

//DOM elements

var PlusZoneResourcesMenuScreen = function () {
    function PlusZoneResourcesMenuScreen() {
        _classCallCheck(this, PlusZoneResourcesMenuScreen);

        // this.state = {
        //     title: '',
        //     active: false,
        // }
        this.state = {
            slider: null,
            active: false,
            number: 0,
            onResourceAction: null,
            onBackAction: null
        };
        this.domElements = {
            screenDiv: document.getElementById('oup_tdl_plus_zone_resources_menu_screen'),
            backButton: $('#oup_tdl_plus_zone_resources_menu_screen .oup_tdl__breadcrumb__back').get(0),
            title: $('.oup_plus_zone_resources_menu__main_title>strong').get(0),
            number: $('.oup_plus_zone_resources_menu__main_title>span').get(0),
            sliderHiddenElements: document.getElementsByClassName('oup_plus_zone_resources_menu__slider_hidden_elements')[0],
            slider: document.getElementsByClassName('oup_plus_zone_resources_menu__unit_slider')[0]
        };
        this.resourceHtmlElements = [];
        if (_config2.default.dev) console.log("PlusZoneResourcesMenuScreen.constructor()");
    }

    _createClass(PlusZoneResourcesMenuScreen, [{
        key: 'init',
        value: function init() {
            if (_config2.default.dev) console.log("PlusZoneResourcesMenuScreen.init()");
        }
    }, {
        key: 'update',
        value: function update(props) {
            var _this = this;

            if (_config2.default.dev) {
                console.log("PlusZoneResourcesMenuScreen.init()");
                //console.log(this.state);
            }
            var title = props.title,
                number = props.number,
                image = props.image,
                onResourceAction = props.onResourceAction,
                resources = props.resources,
                onBackAction = props.onBackAction;
            //Title

            this.domElements.title.textContent = title;
            this.domElements.number.style.backgroundImage = 'url(' + image + ')';
            this.state.number = number;
            this.state.onResourceAction = onResourceAction;
            this.state.onBackAction = onBackAction;
            this.resourceHtmlElements = [];
            resources.forEach(function (resource) {
                _this.resourceHtmlElements.push(_this.getMenuResourceStringHtml(resource));
            });

            $(this.domElements.backButton).unbind('click').on('click', this.onBackClick.bind(this));
            this.state.slider = new _slider2.default();
            this.state.slider.init({
                elements: this.resourceHtmlElements,
                onElementClickAction: function onElementClickAction(e) {
                    return _this.onResourceClick(e);
                }, //this.onUnitClick,
                containerSelector: '.oup_plus_zone_resources_menu__resource_slider_container',
                elementMinWidth: {
                    mobile: 160 + 5 + 5,
                    tablet: 178 + 8 + 8,
                    desktop: 178 + 8 + 8
                },
                elementMinHeight: {
                    mobile: 160 + 5 + 5,
                    tablet: 178 + 8 + 8,
                    desktop: 178 + 8 + 8
                }
            });

            // $(window).resize(this.refreshSliderSize.bind(this));
        }
    }, {
        key: 'show',
        value: function show() {
            if (_config2.default.dev) console.log("PlusZoneResourcesMenuScreen.show()");
            if (!this.state.active) {
                animations.showOpacityScale(this.domElements.screenDiv);
                this.state.slider.show();
                this.state.active = true;
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            //this.state.active = true;
            //screenDiv.classList.remove('active');
            if (_config2.default.dev) console.log("PlusZoneResourcesMenuScreen.hide()");
            if (this.state.active) {
                animations.hideOpacityScale(this.domElements.screenDiv);
                this.state.active = false;
            }
        }
    }, {
        key: 'getMenuResourceStringHtml',
        value: function getMenuResourceStringHtml(resource) {
            var backgroundStyle = '';
            var htmlString = '\n            <div class="oup_plus_zone_resources_menu__resource-btn" id="' + resource.id + '">\n                <div class="oup_plus_zone_resources_menu__resource__image">\n                    <strong class="resource-' + (0, _helpers.getResourceType)(resource) + '"></strong>\n                    <span>' + resource.title + '</span>\n                </div>\n                <div class="oup_plus_zone_resources_menu__resource__title">\n                    <span>' + resource.description + '</span>\n                </div>\n            </div>\n            ';
            return htmlString;
        }
    }, {
        key: 'onResourceClick',
        value: function onResourceClick(e) {
            //If is +Zone
            var id = $(e.currentTarget).attr('id');
            this.state.onResourceAction({ unitNumber: this.state.number, resourceId: id });
        }
    }, {
        key: 'onBackClick',
        value: function onBackClick() {
            if (_config2.default.dev) console.log("PlusZoneResourcesMenuScreen.onBackClick()");

            this.state.onBackAction(this.state.number);
        }
    }]);

    return PlusZoneResourcesMenuScreen;
}();

exports.default = PlusZoneResourcesMenuScreen;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmZhNzM4YWIxNmFkZjVmY2I5ODUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2xpZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXJsSGVscGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fc3BsYXNoU2NyZWVuLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fdW5pdE1lbnVTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVzcG9uc2l2ZVN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX2xlc3Nvbk1lbnVTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL19wbHVzWm9uZUNhdGVnb3JpZXNNZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fcGx1c1pvbmVSZXNvdXJjZXNNZW51LmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImRldiIsIkFuaW1hdGlvbnMiLCJzaG93VGltZW91dCIsImRhdGEiLCJzdGF0ZSIsImRvbUVsZW1lbnRzIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsInNob3ciLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsImNhbGxiYWNrIiwiY2xhc3NMaXN0IiwiYWRkIiwidGVtcCIsInNjcm9sbEhlaWdodCIsInRyYW5zaXRpb25FdmVudCIsIndoaWNoVHJhbnNpdGlvbkV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ0IiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFuc2l0aW9ucyIsInN0eWxlIiwidW5kZWZpbmVkIiwiZ2V0TGVzc29uQnlJZCIsImdldFJlc291cmNlQnlJZCIsImdldFJlc291cmNlVHlwZSIsImxlc3NvbklkIiwibWFpbkRhdGEiLCJzZWxlY3RlZExlc3NvbiIsInVuaXRzIiwiZm9yRWFjaCIsInVuaXQiLCJzdWJ1bml0cyIsImxlc3NvbiIsImlkIiwicmVzb3VyY2VJZCIsInNlbGVjdGVkUmVzb3VyY2UiLCJyZXNvdXJjZXMiLCJyZXNvdXJjZSIsInNlbGVjdGVkVHlwZSIsInR5cGUiLCJ0YWciLCJpbmRleE9mIiwic2VhcmNoIiwiQXNwZWNSYXRpb0JvZHlDbGFzcyIsInVzZWRfZWxlbWVudCIsImNoZWNrIiwiX3RoaXMiLCIkIiwid2luZG93IiwicmVzaXplIiwiZGlzcGxheVN0eWxlIiwiY3NzIiwieCIsIm91dGVyV2lkdGgiLCJ5Iiwib3V0ZXJIZWlnaHQiLCJlbGVtZW5kVG9DbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJTbGlkZXIiLCJlbGVtZW50cyIsIm9uRWxlbWVudENsaWNrQWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJlbGVtZW50TWluV2lkdGgiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiZWxlbWVudE1pbkhlaWdodCIsInNsaWRlckN1cnJlbnRQYWdlIiwicmFuZG9tSWQiLCJyZXNpemVTdGFydGVkIiwic2xpY2tTdGFydGVkIiwicHJvcHMiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJodG1sIiwiZWxlbWVudHNSZWZyZXNoIiwiYmluZCIsIiRzbGlkZXIiLCJoYXNDbGFzcyIsInNsaWNrIiwiZmluZCIsImhlaWdodCIsImNvbHMiLCJmbG9vciIsIndpZHRoIiwiZWxlbWVudFdpZHRoIiwicm93cyIsImVsZW1lbnRIZWlnaHQiLCJlbGVtZW50c1BlclBhZ2UiLCJwYWdlc051bWJlciIsImNlaWwiLCJsZW5ndGgiLCJodG1sU3RyaW5nIiwicGFnZSIsInBhZ2VIdG1sU3RyaW5nIiwiaW5kZXgiLCJjaGlsZHJlbiIsImNsaWNrIiwib24iLCJlbGVtZW50c1Jlc2l6ZSIsImV2ZW50Iiwic2xpZGVyIiwiY3VycmVudFNsaWRlIiwiaW5maW5pdGUiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJkb3RzIiwiYXBwZW5kRG90cyIsImluaXRpYWxTbGlkZSIsIm91cFRkbEFwcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0Iiwid3JpdGUiLCJPdXBUZGwiLCJzcGxhc2hCYWNrZ3JvdW5kIiwic2NyZWVucyIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZGNsYXNlIiwiaW1hZ2UiLCJzaGlmdCIsImluaXRNZW51IiwiaHRtbERPTSIsImFwcGVuZCIsImJsaW5rIiwiaXNBcHAiLCJnZXRFbGVtZW50QnlJZCIsImJvdHRvbSIsInNwbGFzaFNjcmVlbiIsInVuaXRNZW51U2NyZWVuIiwibGVzc29uTWVudVNjcmVlbiIsInBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4iLCJwbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4iLCJ1cmxIZWxwZXIiLCJvbkVudGVyQWN0aW9uIiwidXBkYXRlVXJsSGFzaCIsInN0YXRlTmFtZSIsIm9uVW5pdEFjdGlvbiIsIm9uQmFja0FjdGlvbiIsImdvVG9TcGxhc2giLCJnb1RvVW5pdE1lbnUiLCJnb1RvTGVzc29uTWVudSIsImdvVG9QbHVzWm9uZUNhdGVnb3JpZXNNZW51IiwiZ29Ub1BsdXNab25lUmVzb3VyY2VzTWVudSIsImhpZGUiLCJ1bml0TnVtYmVyIiwic2VsZWN0ZWRVbml0IiwibnVtYmVyIiwidW5pdFRpdGxlIiwibGVzc29ucyIsImhhc1Jlc291cmNlcyIsInVwZGF0ZSIsIm9uUGx1c1pvbmVBY3Rpb24iLCJvbkxlc3NvbkFjdGlvbiIsImdvVG9MZXNzb24iLCJoYXNQbHVzWm9uZSIsImV2YWwiLCJvbmNsaWNrVGl0bGUiLCJjYXRlZ29yaWVzIiwicHVzaCIsIm9uQ2F0ZWdvcnlBY3Rpb24iLCJjYXRlZ29yeSIsImNlcnJhcklmcmFtZSIsIm9uUmVzb3VyY2VBY3Rpb24iLCJnb1RvUGx1c1pvbmVSZXNvdXJjZSIsIlVybEhlbHBlciIsInVybFN0YXRlIiwiYWN0aW9ucyIsIm9uaGFzaGNoYW5nZSIsImdvVG9TdGF0ZSIsImhhc2hOYW1lIiwibG9jYXRpb24iLCJoYXNoIiwiaGFzaFBhcnRzIiwic3BsaXQiLCJ1cGRhdGVDdXJyZW50U3RhdGUiLCJ1cmxIYXNoIiwiYW5pbWF0aW9ucyIsIlNwbGFzaFNjcmVlbiIsImFjdGl2ZSIsInNjcmVlbkRpdiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJlbnRlckJ0biIsIm9uY2xpY2siLCJzaG93T3BhY2l0eVNjYWxlIiwiaGlkZU9wYWNpdHlTY2FsZSIsIlVuaXRNZW51U2NyZWVuIiwiYmFja0J1dHRvbiIsImdldCIsInNsaWRlckhpZGRlbkVsZW1lbnRzIiwidW5pdEh0bWxFbGVtZW50cyIsImdldE1lbnVVbml0RWxlbWVudFN0cmluZ0h0bWwiLCJ1bmJpbmQiLCJvblVuaXRDbGljayIsImUiLCJjdXJyZW50VGFyZ2V0IiwiYXR0ciIsInJlc3BvbnNpdmVTdGF0dXMiLCJpbm5lcldpZHRoIiwiTGVzc29uTWVudVNjcmVlbiIsImxlc3Nvbkh0bWxFbGVtZW50cyIsImJhY2tncm91bmRJbWFnZSIsImdldE1lbnVQbHVzWm9uZUVsZW1lbnRTdHJpbmdIdG1sIiwiZ2V0TWVudUxlc3NvbkVsZW1lbnRTdHJpbmdIdG1sIiwib25MZXNzb25DbGljayIsImJhY2tncm91bmRTdHlsZSIsIlBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4iLCJodG1sRWxlbWVudHMiLCJnZXRNZW51Q2F0ZWdvcnlTdHJpbmdIdG1sIiwib25DYXRlZ29yeUNsaWNrIiwib25CYWNrQ2xpY2siLCJhc3BlY1JhdGlvQm9keUNsYXNzIiwiYW5jaG8iLCJwYXJzZUludCIsImFsdG8iLCJtaW4iLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuIiwicmVzb3VyY2VIdG1sRWxlbWVudHMiLCJnZXRNZW51UmVzb3VyY2VTdHJpbmdIdG1sIiwib25SZXNvdXJjZUNsaWNrIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOzs7OztBQUNBLElBQU1BLFNBQVM7QUFDWEMsU0FBSztBQURNLENBQWY7a0JBR2VELE07Ozs7Ozs7Ozs7Ozs7OztBQ0pmOzs7Ozs7OztJQUVNRSxVO0FBQ0YsMEJBQWE7QUFBQTs7QUFDVCxhQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0g7Ozs7NkJBQ0lDLEksRUFBSztBQUNOLGlCQUFLQyxLQUFMLEdBQWFELElBQWI7QUFDQTtBQUNBRSx3QkFBWUMsS0FBWixDQUFrQkMsV0FBbEIsR0FBZ0MsS0FBS0gsS0FBTCxDQUFXRSxLQUEzQztBQUNBLGlCQUFLRSxJQUFMOztBQUVBLGdCQUFHLGlCQUFPUixHQUFWLEVBQWM7QUFDVlMsd0JBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCx3QkFBUUMsR0FBUixDQUFZLEtBQUtOLEtBQWpCO0FBQ0g7QUFFSjs7O3lDQUNn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Q0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQzs7QUFFbkM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakIsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVB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OztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYixTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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OztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxpQ0FBaUMsNkJBQTZCOztBQUU5RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRCxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQSxvQ0FBb0MsdUJBQXVCO0FBQzNEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhOztBQUViOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQSxTQUFTOztBQUVUOztBQUVBOztBQUVBLGFBQWE7OztBQUdiLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUEsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBLHNDQUFzQztBQUN0Qyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQ0FBbUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhOztBQUViO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjtBQUNBOztB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aUJBQU85TCxHQUFWLEVBQ0lTLFFBQVFDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNKLGdCQUFHLEtBQUtOLEtBQUwsQ0FBVzBMLE1BQWQsRUFBcUI7QUFDakJGLDJCQUFXUSxnQkFBWCxDQUE0QixLQUFLL0wsV0FBTCxDQUFpQjBMLFNBQTdDO0FBQ0EscUJBQUszTCxLQUFMLENBQVcwTCxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjs7O2tEQUN5QmpKLFEsRUFBUztBQUMvQixnQkFBSTJLLGtCQUFrQixFQUF0QjtBQUNDLGdCQUFJbEgsNEZBQzZEekQsU0FBU0osRUFEdEUscUlBR2lDLDhCQUFnQkksUUFBaEIsQ0FIakMsK0NBSWVBLFNBQVN2QyxLQUp4QixnSkFPZXVDLFNBQVM0TCxXQVB4QixzRUFBSjtBQVdELG1CQUFPbkksVUFBUDtBQUNIOzs7d0NBRWV1RyxDLEVBQUU7QUFDZDtBQUNBLGdCQUFJcEssS0FBS2MsRUFBRXNKLEVBQUVDLGFBQUosRUFBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQVQ7QUFDQSxpQkFBSzNNLEtBQUwsQ0FBVzBLLGdCQUFYLENBQTRCLEVBQUNsQixZQUFZLEtBQUt4SixLQUFMLENBQVcwSixNQUF4QixFQUFnQ3BILFlBQVlELEVBQTVDLEVBQTVCO0FBQ0g7OztzQ0FFWTtBQUNULGdCQUFHLGlCQUFPekMsR0FBVixFQUNJUyxRQUFRQyxHQUFSLENBQVksMkNBQVo7O0FBRUosaUJBQUtOLEtBQUwsQ0FBV2lKLFlBQVgsQ0FBd0IsS0FBS2pKLEtBQUwsQ0FBVzBKLE1BQW5DO0FBQ0g7Ozs7OztrQkFHVXVFLDJCIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZmE3MzhhYjE2YWRmNWZjYjk4NSIsIid1c2Ugc3RyaWN0J1xuY29uc3QgY29uZmlnID0ge1xuICAgIGRldjogZmFsc2UsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb25maWcuanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuY2xhc3MgQW5pbWF0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zaG93VGltZW91dCA9IG51bGw7XG4gICAgfVxuICAgIGluaXQoZGF0YSl7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBkYXRhO1xuICAgICAgICAvL1RpdGxlXG4gICAgICAgIGRvbUVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5zdGF0ZS50aXRsZTtcbiAgICAgICAgdGhpcy5zaG93KClcblxuICAgICAgICBpZihjb25maWcuZGV2KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3BsYXNoU2NyZWVuLmluaXQoKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9XG4gICAgc2hvd09wYWNpdHlTY2FsZShlbGVtZW50LCBjYWxsYmFjayl7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Nob3cnKTtcbiAgICAgICAgLy9QYXJhIGFjdGl2YXIgZWwgZGlzcGxheTogYmxvY2tcbiAgICAgICAgdmFyIHRlbXAgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25FdmVudCA9IHdoaWNoVHJhbnNpdGlvbkV2ZW50KCk7XG4gICAgICAgIHRyYW5zaXRpb25FdmVudCAmJiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2FuaW1hdGUnKTtcbiAgICB9XG4gICAgaGlkZU9wYWNpdHlTY2FsZShlbGVtZW50LCBjYWxsYmFjayl7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX2FuaW1hdGUnKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvd1RpbWVvdXQpO1xuICAgICAgICB0aGlzLnNob3dUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfc2hvdycpO1xuICAgICAgICB9LCA0MDApO1xuICAgICAgICAvL1BhcmEgYWN0aXZhciBlbCBkaXNwbGF5OiBibG9ja1xuICAgICAgICAvLyB2YXIgdGVtcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAvLyB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKTtcbiAgICAgICAgLy8gdHJhbnNpdGlvbkV2ZW50ICYmIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgLy8gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYW5pbWF0ZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9ucztcblxuZnVuY3Rpb24gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKXtcbiAgICB2YXIgdDtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmYWtlZWxlbWVudCcpO1xuICAgIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICAgICd0cmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXG4gICAgICAnT1RyYW5zaXRpb24nOidvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAnTW96VHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxuICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nOid3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICAgIH1cblxuICAgIGZvcih0IGluIHRyYW5zaXRpb25zKXtcbiAgICAgICAgaWYoIGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQgKXtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYW5pbWF0aW9ucy5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGVzc29uQnlJZCh7bGVzc29uSWQsIG1haW5EYXRhfSkge1xuICAgIGxldCBzZWxlY3RlZExlc3NvbiA9IGZhbHNlO1xuICAgIG1haW5EYXRhLnVuaXRzLmZvckVhY2godW5pdCA9PiB7ICBcbiAgICAgICAgdW5pdC5zdWJ1bml0cy5mb3JFYWNoKGxlc3NvbiA9PiB7XG4gICAgICAgICAgICBpZihsZXNzb24uaWQqMSA9PSBsZXNzb25JZCl7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRMZXNzb24gPSBsZXNzb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGVzc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzb3VyY2VCeUlkKHtyZXNvdXJjZUlkLCBtYWluRGF0YX0pIHtcbiAgICBsZXQgc2VsZWN0ZWRSZXNvdXJjZSA9IGZhbHNlO1xuICAgIG1haW5EYXRhLnVuaXRzLmZvckVhY2godW5pdCA9PiB7XG4gICAgICAgIHVuaXQucmVzb3VyY2VzLmZvckVhY2gocmVzb3VyY2UgPT4ge1xuICAgICAgICAgICAgaWYocmVzb3VyY2UuaWQgPT0gcmVzb3VyY2VJZCl7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSZXNvdXJjZSA9IHJlc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxlY3RlZFJlc291cmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzb3VyY2VUeXBlKHJlc291cmNlKSB7XG4gICAgbGV0IHNlbGVjdGVkVHlwZSA9IHJlc291cmNlLnR5cGU7XG4gICAgaWYoc2VsZWN0ZWRUeXBlID09ICdhY3RpdmlkYWQnKXtcbiAgICAgICAgY29uc3QgdGFnID0gcmVzb3VyY2UudGFnO1xuICAgICAgICBpZih0YWcpe1xuICAgICAgICAgICAgLy9TaSBlcyB0YWdzIGVzIHVuIGFycmF5IG8gc3RyaW5nXG4gICAgICAgICAgICBpZih0eXBlb2YgdGFnICE9ICdzdHJpbmcnKXtcbiAgICAgICAgICAgICAgICBpZih0YWcuaW5kZXhPZignaW50ZXJhY3RpdmUnKT49MCl7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVHlwZSA9ICdhY3RpdmlkYWQtaW50ZXJhY3RpdmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZih0YWcuc2VhcmNoKCdpbnRlcmFjdGl2ZScpPj0wKXtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFR5cGUgPSAnYWN0aXZpZGFkLWludGVyYWN0aXZlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRUeXBlO1xufVxuXG5leHBvcnQgY2xhc3MgQXNwZWNSYXRpb0JvZHlDbGFzcyB7XG4gICBcbiAgICBpbml0KGVsZW1lbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgdmFyIHVzZWRfZWxlbWVudCA9IGVsZW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuY2hlY2sodXNlZF9lbGVtZW50LCBjYWxsYmFjayk7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIF90aGlzLmNoZWNrKHVzZWRfZWxlbWVudCwgY2FsbGJhY2spXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGVjayh1c2VkX2VsZW1lbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgdmFyIGRpc3BsYXlTdHlsZTtcbiAgICAgICAgaWYodXNlZF9lbGVtZW50ICE9IGRvY3VtZW50KXtcbiAgICAgICAgICAgIGRpc3BsYXlTdHlsZSA9ICQodXNlZF9lbGVtZW50ICsgJz4qJykuY3NzKCdkaXNwbGF5Jyk7XG4gICAgICAgICAgICAkKHVzZWRfZWxlbWVudCArICc+KicpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHg9JCh1c2VkX2VsZW1lbnQpLm91dGVyV2lkdGgoKSxcbiAgICAgICAgeT0kKHVzZWRfZWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgaWYodXNlZF9lbGVtZW50ICE9IGRvY3VtZW50KXtcbiAgICAgICAgICAgICQodXNlZF9lbGVtZW50ICsgJz4qJykuY3NzKCdkaXNwbGF5JywgZGlzcGxheVN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWxlbWVuZFRvQ2xhc3MgPSB1c2VkX2VsZW1lbnQgPT0gZG9jdW1lbnQgPyAnYm9keScgOiB1c2VkX2VsZW1lbnQ7XG4gICAgICAgIGlmKHg8eSl7XG4gICAgICAgICAgICAkKGVsZW1lbmRUb0NsYXNzKS5hZGRDbGFzcygnb3VwdGRsLXBvcnRyYWl0JykucmVtb3ZlQ2xhc3MoJ291cHRkbC1sYW5kc2NhcGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoZWxlbWVuZFRvQ2xhc3MpLnJlbW92ZUNsYXNzKCdvdXB0ZGwtcG9ydHJhaXQnKS5hZGRDbGFzcygnb3VwdGRsLWxhbmRzY2FwZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaGVscGVycy5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgcmVzcG9uc2l2ZVN0YXR1cyBmcm9tICcuL3Jlc3BvbnNpdmVTdGF0dXMnO1xuXG5jbGFzcyBTbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBlbGVtZW50czogW10sXG4gICAgICAgICAgICBvbkVsZW1lbnRDbGlja0FjdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiBudWxsLFxuICAgICAgICAgICAgZWxlbWVudE1pbldpZHRoOiB7XG4gICAgICAgICAgICAgICAgbW9iaWxlOiAwLFxuICAgICAgICAgICAgICAgIHRhYmxldDogMCxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnRNaW5IZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDAsXG4gICAgICAgICAgICAgICAgdGFibGV0OiAwLFxuICAgICAgICAgICAgICAgIGRlc2t0b3A6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2xpZGVyQ3VycmVudFBhZ2U6IDAsXG4gICAgICAgICAgICByYW5kb21JZDogJycsXG4gICAgICAgICAgICByZXNpemVTdGFydGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWNrU3RhcnRlZDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW5pdChwcm9wcyl7XG4gICAgICAgIHZhciB7IG9uRWxlbWVudENsaWNrQWN0aW9uLCBlbGVtZW50cywgY29udGFpbmVyU2VsZWN0b3IsIGVsZW1lbnRNaW5XaWR0aCwgZWxlbWVudE1pbkhlaWdodCB9ID0gcHJvcHM7XG4gICAgICAgIC8vVGl0bGVcbiAgICAgICAgdGhpcy5zdGF0ZS5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgICB0aGlzLnN0YXRlLm9uRWxlbWVudENsaWNrQWN0aW9uID0gb25FbGVtZW50Q2xpY2tBY3Rpb247XG4gICAgICAgIHRoaXMuc3RhdGUuY29udGFpbmVyU2VsZWN0b3IgPSBjb250YWluZXJTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5zdGF0ZS5lbGVtZW50TWluV2lkdGggPSBlbGVtZW50TWluV2lkdGg7XG4gICAgICAgIHRoaXMuc3RhdGUuZWxlbWVudE1pbkhlaWdodCA9IGVsZW1lbnRNaW5IZWlnaHQ7XG5cbiAgICAgICAgaWYoY29uZmlnLmRldil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNsaWRlci5pbml0KClcIik7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUucmFuZG9tSWQgPSAnaWRfJyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo5OTk5OSk7XG4gICAgICAgICQoY29udGFpbmVyU2VsZWN0b3IpLmFkZENsYXNzKCdvdXBfc2xpZGVyJykuaHRtbChgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3NsaWRlcl9fY29udGVudF9hbmRfZG90c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuc3RhdGUucmFuZG9tSWR9X19jb250ZW50XCIgY2xhc3M9XCJvdXBfc2xpZGVyX19jb250ZW50XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9zbGlkZXJfX2RvdHNcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9zbGlkZXJfX2Fycm93c1wiPjwvZGl2PlxuICAgICAgICBgKTtcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUucmVzaXplU3RhcnRlZCl7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJlc2l6ZVN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZSh0aGlzLmVsZW1lbnRzUmVmcmVzaC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93KCl7XG4gICAgICAgIC8vIHNldFRpbWVvdXQodGhpcy5lbGVtZW50c1JlZnJlc2guYmluZCh0aGlzKSwgMCk7XG4gICAgICAgIHRoaXMuZWxlbWVudHNSZWZyZXNoKCk7XG4gICAgfVxuICAgIFxuICAgIGVsZW1lbnRzUmVmcmVzaCgpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTbGlkZXIuZWxlbWVudHNSZWZyZXNoKClcIilcbiAgICAgICAgdmFyICRzbGlkZXIgPSAkKCcjJyArIHRoaXMuc3RhdGUucmFuZG9tSWQgKyAnX19jb250ZW50Jyk7IC8vJCh0aGlzLnN0YXRlLmNvbnRhaW5lclNlbGVjdG9yICsgJyAub3VwX3NsaWRlcl9fY29udGVudCcpO1xuICAgICAgICAvL0Rlc3Ryb3lcbiAgICAgICAgaWYoJHNsaWRlci5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSl7XG4gICAgICAgICAgICAkc2xpZGVyLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgJHNsaWRlci5odG1sKCcnKTtcbiAgICAgICAgJHNsaWRlci5jc3MoJ2hlaWdodCcsICgkKHRoaXMuc3RhdGUuY29udGFpbmVyU2VsZWN0b3IpLmZpbmQoJy5vdXBfc2xpZGVyX19jb250ZW50X2FuZF9kb3RzJykuaGVpZ2h0KCkgLSAkKHRoaXMuc3RhdGUuY29udGFpbmVyU2VsZWN0b3IpLmZpbmQoJy5vdXBfc2xpZGVyX19kb3RzJykuaGVpZ2h0KCkpICsgJ3B4Jyk7XG4gICAgICAgIHZhciBjb2xzID0gTWF0aC5mbG9vcigkc2xpZGVyLndpZHRoKCkgLyB0aGlzLnN0YXRlLmVsZW1lbnRNaW5XaWR0aFtyZXNwb25zaXZlU3RhdHVzKCldKSB8fCAxO1xuICAgICAgICB0aGlzLnN0YXRlLmVsZW1lbnRXaWR0aCA9IE1hdGguZmxvb3IoJHNsaWRlci53aWR0aCgpIC8gY29scyk7XG4gICAgICAgIHZhciByb3dzID0gTWF0aC5mbG9vcigkc2xpZGVyLmhlaWdodCgpIC8gdGhpcy5zdGF0ZS5lbGVtZW50TWluSGVpZ2h0W3Jlc3BvbnNpdmVTdGF0dXMoKV0pIHx8IDE7XG4gICAgICAgIHRoaXMuc3RhdGUuZWxlbWVudEhlaWdodCA9IE1hdGguZmxvb3IoJHNsaWRlci5oZWlnaHQoKSAvIHJvd3MpO1xuICAgICAgICBcbiAgICAgICAgdmFyIGVsZW1lbnRzUGVyUGFnZSA9IGNvbHMqcm93cztcbiAgICAgICAgdmFyIHBhZ2VzTnVtYmVyID0gTWF0aC5jZWlsKHRoaXMuc3RhdGUuZWxlbWVudHMubGVuZ3RoIC8gZWxlbWVudHNQZXJQYWdlKTtcbiAgICAgICAgLy8gaWYoY29uZmlnLmRldil7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlNsaWRlciBjYWxjdWxhdGlvbnM6XCIpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZXNwb25zaXZlU3RhdHVzOiBcIiwgcmVzcG9uc2l2ZVN0YXR1cygpKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicm93c1wiLCByb3dzKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY29sc1wiLCBjb2xzKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwidGhpcy5zdGF0ZS5lbGVtZW50SGVpZ2h0XCIsIHRoaXMuc3RhdGUuZWxlbWVudEhlaWdodFtyZXNwb25zaXZlU3RhdHVzKCldKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudHNQZXJQYWdlXCIsIGVsZW1lbnRzUGVyUGFnZSk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInRoaXMuc3RhdGUuZWxlbWVudHMubGVuZ3RoXCIsIHRoaXMuc3RhdGUuZWxlbWVudHMubGVuZ3RoKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicGFnZXNOdW1iZXJcIiwgcGFnZXNOdW1iZXIpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCIkc2xpZGVyLmhlaWdodCgpIC8gcm93c1wiLCAkc2xpZGVyLmhlaWdodCgpICsnLycgKyByb3dzLCAkc2xpZGVyLmhlaWdodCgpIC8gcm93cyk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJvd3MgKiB0aGlzLnN0YXRlLmVsZW1lbnRIZWlnaHRcIiwgcm93cyArJyonKyB0aGlzLnN0YXRlLmVsZW1lbnRIZWlnaHRbcmVzcG9uc2l2ZVN0YXR1cygpXSwgcm93cyAqIHRoaXMuc3RhdGUuZWxlbWVudEhlaWdodFtyZXNwb25zaXZlU3RhdHVzKCldKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgICAgdmFyIGh0bWxTdHJpbmcgPSAnJztcbiAgICAgICAgZm9yIChsZXQgcGFnZSA9IDA7IHBhZ2UgPCBwYWdlc051bWJlcjsgcGFnZSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZUh0bWxTdHJpbmcgPSAnPGRpdiBjbGFzcz1cIm91cF9fc2xpZGVyX19zbGlkZVwiPic7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHNQZXJQYWdlOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5lbGVtZW50c1twYWdlICogZWxlbWVudHNQZXJQYWdlICsgaW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUh0bWxTdHJpbmcgKz0gdGhpcy5zdGF0ZS5lbGVtZW50c1twYWdlICogZWxlbWVudHNQZXJQYWdlICsgaW5kZXhdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VIdG1sU3RyaW5nICs9IGA8ZGl2PjwvZGl2PmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFnZUh0bWxTdHJpbmcgKz0gJzwvZGl2Pic7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYWdlSHRtbFN0cmluZyk7XG4gICAgICAgICAgICBodG1sU3RyaW5nICs9IHBhZ2VIdG1sU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgICRzbGlkZXIuaHRtbChodG1sU3RyaW5nKTtcbiAgICAgICAgJHNsaWRlci5maW5kKCcub3VwX19zbGlkZXJfX3NsaWRlJykuY2hpbGRyZW4oKS5jbGljaygoZWxlbWVudCkgPT4gdGhpcy5zdGF0ZS5vbkVsZW1lbnRDbGlja0FjdGlvbihlbGVtZW50KSk7XG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLnNsaWNrU3RhcnRlZCl7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNsaWNrU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAkc2xpZGVyLm9uKCdpbml0JywgdGhpcy5lbGVtZW50c1Jlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAkc2xpZGVyLm9uKCdhZnRlckNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGlkZXIsIGN1cnJlbnRTbGlkZSl7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhdGUuc2xpZGVyQ3VycmVudFBhZ2UgPSBjdXJyZW50U2xpZGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIGN1cnJlbnRTbGlkZSA9IHRoaXMuc3RhdGUuc2xpZGVyQ3VycmVudFBhZ2UgPCBwYWdlc051bWJlciA/IHRoaXMuc3RhdGUuc2xpZGVyQ3VycmVudFBhZ2UgOiBwYWdlc051bWJlci0xO1xuICAgICAgICAkc2xpZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGFwcGVuZEFycm93czogdGhpcy5zdGF0ZS5jb250YWluZXJTZWxlY3RvciArICcgLm91cF9zbGlkZXJfX2Fycm93cycsXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwib3VwX3NsaWRlcl9fYXJyb3cgb3VwX3NsaWRlcl9fYXJyb3ctLWxlZnRcIj48L2Rpdj4nLFxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cIm91cF9zbGlkZXJfX2Fycm93IG91cF9zbGlkZXJfX2Fycm93LS1yaWdodFwiPjwvZGl2PicsXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXBwZW5kRG90czogdGhpcy5zdGF0ZS5jb250YWluZXJTZWxlY3RvciArICcgLm91cF9zbGlkZXJfX2RvdHMnLFxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiBjdXJyZW50U2xpZGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbGVtZW50c1Jlc2l6ZSgpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTbGlkZXIuZWxlbWVudHNSZXNpemUoKVwiKVxuICAgICAgICAkKCcjJyArIHRoaXMuc3RhdGUucmFuZG9tSWQgKyAnX19jb250ZW50IC5vdXBfX3NsaWRlcl9fc2xpZGUnKS5jaGlsZHJlbigpLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5lbGVtZW50V2lkdGggKyAncHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmVsZW1lbnRIZWlnaHQgKyAncHgnLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvc2xpZGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MnO1xuaW1wb3J0IE91cFRkbCBmcm9tICcuL2Fzc2V0cy9qcy9tYWluJztcbmNvbnN0IG91cFRkbEFwcCA9IG5ldyBPdXBUZGw7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBzaG93TG9hZGluZzogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBvdXBUZGxBcHAuc2hvd0xvYWRpbmcoKTtcbiAgICAvLyB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIG91cFRkbEFwcC5pbml0KGRhdGEpO1xuICAgIH1cbn07XG5cbi8vTXVlc3RyYSBlbCBsb2FkaW5nXG5kb2N1bWVudC53cml0ZSgnPGRpdiBpZD1cIm91cF90ZGxfbG9hZGluZ19zY3JlZW4tLWJhc2ljXCI+PC9kaXY+Jyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgZ2V0TGVzc29uQnlJZCwgZ2V0UmVzb3VyY2VCeUlkLCBnZXRSZXNvdXJjZVR5cGUgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IFVybEhlbHBlciBmcm9tICcuL3VybEhlbHBlcic7XG4vLyBpbXBvcnQgbG9hZERhdGEgZnJvbSAnLi9sb2FkRGF0YSc7XG5cbi8vUGFudGFsbGFzXG4vL2ltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gJy4vX2xvYWRpbmdTY3JlZW4nO1xuaW1wb3J0IFNwbGFzaFNjcmVlbiBmcm9tICcuL19zcGxhc2hTY3JlZW4nO1xuaW1wb3J0IFVuaXRNZW51U2NyZWVuIGZyb20gJy4vX3VuaXRNZW51U2NyZWVuJztcbmltcG9ydCBMZXNzb25NZW51U2NyZWVuIGZyb20gJy4vX2xlc3Nvbk1lbnVTY3JlZW4nO1xuaW1wb3J0IFBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4gZnJvbSAnLi9fcGx1c1pvbmVDYXRlZ29yaWVzTWVudSc7XG5pbXBvcnQgUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuIGZyb20gJy4vX3BsdXNab25lUmVzb3VyY2VzTWVudSc7XG5cbmNsYXNzIE91cFRkbCB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1haW5EYXRhOiB7fSxcblx0XHRcdHNwbGFzaEJhY2tncm91bmQ6ICcnLFxuXHRcdH07XG5cdFx0dGhpcy5zY3JlZW5zID0ge307XG5cdH1cblxuXHQvLyBzaG93TG9hZGluZygpe1xuXHQvLyAgICAgaWYoY29uZmlnLmRldilcblx0Ly8gICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcuLi5cIik7XG5cdC8vICAgICBjb25zdCBodG1sRE9NID0gYFxuXHQvLyAgICAgICAgIDxkaXYgaWQ9XCJvdXBfdGRsX2xvYWRpbmdfc2NyZWVuXCI+XG5cdC8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfdGRsX3NwaW5uZXJcIj5cblx0Ly8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfdGRsX2JvdW5jZTFcIj48L2Rpdj5cblx0Ly8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfdGRsX2JvdW5jZTJcIj48L2Rpdj5cblx0Ly8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfdGRsX2JvdW5jZTNcIj48L2Rpdj5cblx0Ly8gICAgICAgICAgICAgPC9kaXY+XG5cdC8vICAgICAgICAgPC9kaXY+XG5cdC8vICAgICBgO1xuXHRcdFxuXHQvLyAgICAgJCgnYm9keScpLmFwcGVuZCggaHRtbERPTSApO1xuXHQvLyB9XG5cdFxuXHRpbml0KGRhdGEpe1xuXHRcdGlmKGNvbmZpZy5kZXYpe1xuXHRcdFx0Y29uc29sZS5sb2coJ0RhdG9zIENhcmdhZG9zOicsIHRoaXMuc3RhdGUubWFpbkRhdGEpO1xuXHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdH1cblx0XHQvL1F1aXRhbW9zIGxhIHByaW1lcmEgdW5pZGFkLCB5IGRlIGFow60gdG9tYW1vcyBsYSBwcmltZXJhIGltYWdlblxuXHRcdC8vTWlyYSBzaSBsYSBhY3RpdmlkYWQgYWN0dWFsIGVzIGxhIHByaW1lcmEgYW50ZXMgZGUgbGFuemFyIGVsIG1lbsO6XG5cdFx0aWYoaWRjbGFzZT09ZGF0YS51bml0c1swXS5zdWJ1bml0c1swXS5pZCl7XG5cdFx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0XHRjb25zb2xlLmxvZygnRXMgbGEgYWN0aXZpZGFkIFBvcnRhZGEnKTtcblx0XHRcdHRoaXMuc3RhdGUuc3BsYXNoQmFja2dyb3VuZCA9IGRhdGEudW5pdHNbMF0uaW1hZ2U7XG5cdFx0XHQvL0JvcmEgbGEgcHJpbWVyYSB1bmlkYWRcblx0XHRcdGRhdGEudW5pdHMuc2hpZnQoKTtcblx0XHRcdHRoaXMuc3RhdGUubWFpbkRhdGEgPSBkYXRhO1xuXHRcdFx0dGhpcy5pbml0TWVudSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0XHRjb25zb2xlLmxvZygnTk8gZXMgbGEgYWN0aXZpZGFkIFBvcnRhZGEnKTtcblx0XHRcdC8vVnVlbHZlIGEgYWN0aXZhciBlbCBjb250ZW5pZG9cblx0XHR9XG5cdFx0Ly9Cb3JyYSBsb2FkaW5nXG5cdFx0JCgnI291cF90ZGxfbG9hZGluZ19zY3JlZW4tLWJhc2ljJykucmVtb3ZlKCk7XG5cdH1cblx0aW5pdE1lbnUoKXtcblx0XHRcblx0XHRjb25zdCBodG1sRE9NID0gYFxuXHRcdFx0PGRpdiBpZD1cIm91cF90ZGxfY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgaWQ9XCJvdXBfdGRsX3NwbGFzaF9zY3JlZW5cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3RoaXMuc3RhdGUuc3BsYXNoQmFja2dyb3VuZH0pXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9zcGxhc2hfX2xvZ29fb3VwXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9zcGxhc2hfX2xvZ29fdGRsXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9zcGxhc2hfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzcz1cIm91cF9zcGxhc2hfX21haW5fdGl0bGVcIj48L2gxPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9zcGxhc2hfX2VudGVyXCI+PHNwYW4+RW50ZXI8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9zcGxhc2hfX2Zvb3RlclwiPsKpIE94Zm9yZCBVbml2ZXJzaXR5IFByZXNzPC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgaWQ9XCJvdXBfdGRsX3VuaXRfbWVudV9zY3JlZW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3VuaXRfbWVudV9fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJfX2JhY2tcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzPVwib3VwX3VuaXRfbWVudV9fbWFpbl90aXRsZVwiPjwvaDI+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfdW5pdF9tZW51X191bml0X3NsaWRlcl9jb250YWluZXJcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBpZD1cIm91cF90ZGxfbGVzc29uX21lbnVfc2NyZWVuXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9sZXNzb25fbWVudV9fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzPVwib3VwX3RkbF9fYnJlYWRjcnVtYlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3RkbF9fYnJlYWRjcnVtYl9fYmFja1wiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19tYWluX3RpdGxlIG91cF90ZGxfX2JyZWFkY3J1bWJfX2xldmVsMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPjwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19sZXNzb25fc2xpZGVyX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGlkPVwib3VwX3RkbF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X3NjcmVlblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzPVwib3VwX3RkbF9fYnJlYWRjcnVtYlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3RkbF9fYnJlYWRjcnVtYl9fYmFja1wiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX21haW5fdGl0bGUgb3VwX3RkbF9fYnJlYWRjcnVtYl9fbGV2ZWwxXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+PC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3RkbF9fYnJlYWRjcnVtYl9fbGV2ZWwyXCI+UGx1c1pvbmU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGlkPVwib3VwX3RkbF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfc2NyZWVuXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDxoMiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJfX2JhY2tcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX21haW5fdGl0bGUgb3VwX3RkbF9fYnJlYWRjcnVtYl9fbGV2ZWwxXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+PC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3RkbF9fYnJlYWRjcnVtYl9fbGV2ZWwyXCI+UGx1c1pvbmU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fcmVzb3VyY2Vfc2xpZGVyX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG5cdFx0XG5cdFx0JCgnYm9keScpLmFwcGVuZCggaHRtbERPTSApO1xuXG5cdFx0Ly9DaGVjayBpZiBpcyBkZXNrdG9wXG5cdFx0aWYodHlwZW9mIGJsaW5rID09ICdvYmplY3QnKXtcblx0XHRcdGlmKCFibGluay5pc0FwcCl7XG5cdFx0XHRcdC8vQWN0aXZhdGUgYmFyIGhvbGUgaWYgaXMgbm90IEFwcFxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3VwX3RkbF9jb250YWluZXInKS5zdHlsZS5ib3R0b20gPSAnNDRweCc7XG5cdFx0XHRcdC8vUmVtb3ZlIHVzZWxlc3MgYnV0dG9ucyBvZiBuYXZiYXJcblx0XHRcdFx0Ly8kKCcubmF2YmFyICNib3Rvbl9yZWluaWNpYXIsIC5uYXZiYXIgI2JvdG9uX3JvdHVsYWRvciwgLm5hdmJhciAjYm90b25fc3VicmF5YWRvciwgLm5hdmJhciAjYm90b25fYm9ycmFkb3IsIC5uYXZiYXIgI2JvdG9uX25vdGVzLCAubmF2YmFyICNib3Rvbl9idXNjYXIsIC5uYXZiYXIgI2VudGVyLWVkaXQtbW9kZScpLnJlbW92ZSgpO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9XG5cblxuXHRcdHRoaXMuc2NyZWVucyA9IHtcblx0XHRcdC8vbG9hZGluZ1NjcmVlbjogbmV3IExvYWRpbmdTY3JlZW4sXG5cdFx0XHRzcGxhc2hTY3JlZW46IG5ldyBTcGxhc2hTY3JlZW4sXG5cdFx0XHR1bml0TWVudVNjcmVlbjogbmV3IFVuaXRNZW51U2NyZWVuLFxuXHRcdFx0bGVzc29uTWVudVNjcmVlbjogbmV3IExlc3Nvbk1lbnVTY3JlZW4sXG5cdFx0XHRwbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuOiBuZXcgUGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbixcblx0XHRcdHBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbjogbmV3IFBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbixcblx0XHR9IFxuXG5cdFx0dGhpcy51cmxIZWxwZXIgPSBuZXcgVXJsSGVscGVyO1xuXHRcdFxuXG5cdFx0Ly90aGlzLnNjcmVlbnMubG9hZGluZ1NjcmVlbi51cGRhdGUodGhpcy5zdGF0ZS5sb2FkaW5nKTtcblx0XHR0aGlzLnNjcmVlbnMuc3BsYXNoU2NyZWVuLmluaXQoe1xuXHRcdFx0dGl0bGU6IHRoaXMuc3RhdGUubWFpbkRhdGEudGl0bGUsXG5cdFx0XHQvLyBvbkVudGVyQWN0aW9uOiB0aGlzLmdvVG9Vbml0TWVudS5iaW5kKHRoaXMpLFxuXHRcdFx0b25FbnRlckFjdGlvbjogKCkgPT4gdGhpcy51cmxIZWxwZXIudXBkYXRlVXJsSGFzaCh7XG5cdFx0XHRcdHN0YXRlTmFtZTogJ3VuaXRtZW51Jyxcblx0XHRcdH0pLFxuXHRcdFx0XG5cdFx0fSk7XG5cdFx0dGhpcy5zY3JlZW5zLnVuaXRNZW51U2NyZWVuLmluaXQoe1xuXHRcdFx0dGl0bGU6IHRoaXMuc3RhdGUubWFpbkRhdGEudGl0bGUsXG5cdFx0XHR1bml0czogdGhpcy5zdGF0ZS5tYWluRGF0YS51bml0cyxcblx0XHRcdC8vIG9uVW5pdEFjdGlvbjogKHVuaXQpID0+IHRoaXMuZ29Ub0xlc3Nvbk1lbnUodW5pdCksXG5cdFx0XHRvblVuaXRBY3Rpb246ICh1bml0KSA9PiB0aGlzLnVybEhlbHBlci51cGRhdGVVcmxIYXNoKHtcblx0XHRcdFx0c3RhdGVOYW1lOiAndW5pdCcsXG5cdFx0XHRcdHVuaXRcblx0XHRcdH0pLFxuXHRcdFx0Ly8gb25CYWNrQWN0aW9uOiB0aGlzLmdvVG9TcGxhc2guYmluZCh0aGlzKSxcblx0XHRcdG9uQmFja0FjdGlvbjogKHVuaXQpID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRzdGF0ZU5hbWU6ICdzcGxhc2gnLFxuXHRcdFx0fSksXG5cdFx0fSk7XG5cdFx0dGhpcy5zY3JlZW5zLmxlc3Nvbk1lbnVTY3JlZW4uaW5pdCgpO1xuXHRcdHRoaXMuc2NyZWVucy5wbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLmluaXQoKTtcblx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLmluaXQoKTtcblx0XHRcblxuXHRcdHRoaXMudXJsSGVscGVyLmluaXQoe1xuXHRcdFx0Z29Ub1NwbGFzaDogdGhpcy5nb1RvU3BsYXNoLmJpbmQodGhpcyksXG5cdFx0XHRnb1RvVW5pdE1lbnU6IHRoaXMuZ29Ub1VuaXRNZW51LmJpbmQodGhpcyksXG5cdFx0XHRnb1RvTGVzc29uTWVudTogdGhpcy5nb1RvTGVzc29uTWVudS5iaW5kKHRoaXMpLFxuXHRcdFx0Z29Ub1BsdXNab25lQ2F0ZWdvcmllc01lbnU6IHRoaXMuZ29Ub1BsdXNab25lQ2F0ZWdvcmllc01lbnUuYmluZCh0aGlzKSxcblx0XHRcdGdvVG9QbHVzWm9uZVJlc291cmNlc01lbnU6IHRoaXMuZ29Ub1BsdXNab25lUmVzb3VyY2VzTWVudS5iaW5kKHRoaXMpLFxuXG5cdFx0fSk7XG5cdH1cblx0Z29Ub1NwbGFzaCgpe1xuXHRcdGlmKGNvbmZpZy5kZXYpXG5cdFx0XHRjb25zb2xlLmxvZygnT3VwVGRsLmdvVG9TcGxhc2goKScpO1xuXHRcdHRoaXMuc2NyZWVucy5sZXNzb25NZW51U2NyZWVuLmhpZGUoKTtcblx0XHR0aGlzLnNjcmVlbnMudW5pdE1lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdHRoaXMuc2NyZWVucy5wbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLmhpZGUoKTtcblx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLmhpZGUoKTtcblx0XHR0aGlzLnNjcmVlbnMuc3BsYXNoU2NyZWVuLnNob3coKTtcblx0fVxuXHRnb1RvVW5pdE1lbnUoKXtcblx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0Y29uc29sZS5sb2coJ091cFRkbC5nb1RvVW5pdE1lbnUoKScpO1xuXHRcdHRoaXMuc2NyZWVucy5sZXNzb25NZW51U2NyZWVuLmhpZGUoKTtcblx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0dGhpcy5zY3JlZW5zLnNwbGFzaFNjcmVlbi5oaWRlKCk7XG5cdFx0dGhpcy5zY3JlZW5zLnVuaXRNZW51U2NyZWVuLnNob3coKTtcblx0fVxuXHRnb1RvTGVzc29uTWVudSh1bml0TnVtYmVyKXtcblx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0Y29uc29sZS5sb2coJ091cFRkbC5nb1RvTGVzc29uTWVudSgpJywgdW5pdE51bWJlcik7XG5cdFx0bGV0IHNlbGVjdGVkVW5pdDtcblx0XHR0aGlzLnN0YXRlLm1haW5EYXRhLnVuaXRzLmZvckVhY2godW5pdCA9PiB7XG5cdFx0XHRpZih1bml0Lm51bWJlciA9PSB1bml0TnVtYmVyKXtcblx0XHRcdFx0c2VsZWN0ZWRVbml0ID0gdW5pdDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0pO1xuXHRcdGlmKHNlbGVjdGVkVW5pdCl7XG5cdFx0XHRsZXQgdW5pdFRpdGxlID0gc2VsZWN0ZWRVbml0LnRpdGxlO1xuXHRcdFx0bGV0IGltYWdlID0gc2VsZWN0ZWRVbml0LmltYWdlO1xuXHRcdFx0bGV0IGxlc3NvbnMgPSBzZWxlY3RlZFVuaXQuc3VidW5pdHM7XG5cdFx0XHRsZXQgaGFzUmVzb3VyY2VzID0gc2VsZWN0ZWRVbml0LnJlc291cmNlcy5sZW5ndGggPiAwO1xuXHRcdFx0dGhpcy5zY3JlZW5zLmxlc3Nvbk1lbnVTY3JlZW4udXBkYXRlKHtcblx0XHRcdFx0dGl0bGU6IHVuaXRUaXRsZSxcblx0XHRcdFx0bnVtYmVyOiB1bml0TnVtYmVyLFxuXHRcdFx0XHRpbWFnZTogaW1hZ2UsXG5cdFx0XHRcdGxlc3NvbnM6IGxlc3NvbnMsXG5cdFx0XHRcdC8vIG9uUGx1c1pvbmVBY3Rpb246ICh1bml0KSA9PiB0aGlzLmdvVG9QbHVzWm9uZUNhdGVnb3JpZXNNZW51KHVuaXQpLFxuXHRcdFx0XHQvLyBvbkxlc3NvbkFjdGlvbjogKGRhdGEpID0+IHRoaXMuZ29Ub0xlc3NvbihkYXRhKSxcblx0XHRcdFx0b25QbHVzWm9uZUFjdGlvbjogKHVuaXQpID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRcdHN0YXRlTmFtZTogJ3BsdXN6b25lJyxcblx0XHRcdFx0XHR1bml0XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRvbkxlc3NvbkFjdGlvbjogKGRhdGEpID0+IHRoaXMuZ29Ub0xlc3NvbihkYXRhKSxcblx0XHRcdFx0Ly8gb25CYWNrQWN0aW9uOiB0aGlzLmdvVG9Vbml0TWVudS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRvbkJhY2tBY3Rpb246ICgpID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRcdHN0YXRlTmFtZTogJ3VuaXRtZW51Jyxcblx0XHRcdFx0fSksXG5cdFx0XHRcdGhhc1BsdXNab25lOiBoYXNSZXNvdXJjZXMsXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcblx0XHRcdHRoaXMuc2NyZWVucy51bml0TWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMubGVzc29uTWVudVNjcmVlbi5zaG93KCk7XG5cdFx0fVxuXHR9XG5cdGdvVG9MZXNzb24oe3VuaXROdW1iZXIsIGxlc3NvbklkfSl7XG5cdFx0aWYoY29uZmlnLmRldilcblx0XHRcdGNvbnNvbGUubG9nKCdPdXBUZGwuZ29Ub0xlc3Nvbk1lbnUoKScsIHVuaXROdW1iZXIsIGxlc3NvbklkKTtcblx0XHR2YXIgc2VsZWN0ZWRMZXNzb24gPSBudWxsO1xuXHRcdHNlbGVjdGVkTGVzc29uID0gZ2V0TGVzc29uQnlJZCh7bGVzc29uSWQsIG1haW5EYXRhOiB0aGlzLnN0YXRlLm1haW5EYXRhfSk7XG5cdFx0aWYoc2VsZWN0ZWRMZXNzb24pe1xuXHRcdFx0ZXZhbChzZWxlY3RlZExlc3Nvbi5vbmNsaWNrVGl0bGUpO1xuXHRcdH1cblx0fVxuXHRnb1RvUGx1c1pvbmVDYXRlZ29yaWVzTWVudSh1bml0TnVtYmVyKXtcblx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0Y29uc29sZS5sb2coJ091cFRkbC5nb1RvUGx1c1pvbmVDYXRlZ29yaWVzTWVudSgpJywgdW5pdE51bWJlcik7XG5cdFx0bGV0IHNlbGVjdGVkVW5pdDtcblx0XHR0aGlzLnN0YXRlLm1haW5EYXRhLnVuaXRzLmZvckVhY2godW5pdCA9PiB7XG5cdFx0XHRpZih1bml0Lm51bWJlciA9PSB1bml0TnVtYmVyKXtcblx0XHRcdFx0c2VsZWN0ZWRVbml0ID0gdW5pdDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRcblx0XHQvLyBidXNjYXIgdGFnICdpbnRlcmFjdGl2ZSdcblx0XHRpZihzZWxlY3RlZFVuaXQpe1xuXHRcdFx0Y29uc3QgdW5pdFRpdGxlID0gc2VsZWN0ZWRVbml0LnRpdGxlO1xuXHRcdFx0Y29uc3QgaW1hZ2UgPSBzZWxlY3RlZFVuaXQuaW1hZ2U7XG5cdFx0XHRjb25zdCByZXNvdXJjZXMgPSBzZWxlY3RlZFVuaXQucmVzb3VyY2VzO1xuXHRcdFx0bGV0IGNhdGVnb3JpZXMgPSBbXTtcblx0XHRcdHJlc291cmNlcy5mb3JFYWNoKHJlc291cmNlID0+IHtcblx0XHRcdFx0Ly9leGNlcGNpb24gZGUgY2F0ZWdvcmlhIGFjdGl2aWRhZC0+aW50ZXJhY3RpdmVcblx0XHRcdFx0bGV0IHR5cGUgPSBnZXRSZXNvdXJjZVR5cGUocmVzb3VyY2UpO1xuXHRcdFx0XHRpZihjYXRlZ29yaWVzLmluZGV4T2YodHlwZSk8MCl7XG5cdFx0XHRcdFx0Y2F0ZWdvcmllcy5wdXNoKHR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdFxuXG5cdFx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi51cGRhdGUoe1xuXHRcdFx0XHR0aXRsZTogdW5pdFRpdGxlLFxuXHRcdFx0XHRpbWFnZTogaW1hZ2UsXG5cdFx0XHRcdG51bWJlcjogdW5pdE51bWJlcixcblx0XHRcdFx0Y2F0ZWdvcmllczogY2F0ZWdvcmllcyxcblx0XHRcdFx0Ly9vbkNhdGVnb3J5QWN0aW9uOiAoZGF0YSkgPT4gdGhpcy5nb1RvUGx1c1pvbmVSZXNvdXJjZXNNZW51KGRhdGEpLFxuXHRcdFx0XHRvbkNhdGVnb3J5QWN0aW9uOiAoe3VuaXROdW1iZXIsIGNhdGVnb3J5fSkgPT4gdGhpcy51cmxIZWxwZXIudXBkYXRlVXJsSGFzaCh7XG5cdFx0XHRcdFx0c3RhdGVOYW1lOiAncGx1c2NhdGVnb3J5Jyxcblx0XHRcdFx0XHR1bml0OiB1bml0TnVtYmVyLFxuXHRcdFx0XHRcdGNhdGVnb3J5XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQvL29uQmFja0FjdGlvbjogKG51bWJlcikgPT4gdGhpcy5nb1RvTGVzc29uTWVudShudW1iZXIpLFxuXHRcdFx0XHRvbkJhY2tBY3Rpb246ICgpID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRcdHN0YXRlTmFtZTogJ3VuaXQnLFxuXHRcdFx0XHRcdHVuaXQ6IHVuaXROdW1iZXJcblx0XHRcdFx0fSksXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcblx0XHRcdHRoaXMuc2NyZWVucy51bml0TWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMubGVzc29uTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5zaG93KCk7XG5cdFx0fVxuXHRcdC8vQ2llcnJhIGVsIHJlcHJvZHVjdG9yIGRlIGJsaW5rXG5cdFx0aWYoY29uZmlnLmRldilcblx0XHRcdGNvbnNvbGUubG9nKCdjZXJyYXJJZnJhbWUoKScpO1xuXHRcdGlmKHR5cGVvZiBjZXJyYXJJZnJhbWUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRjZXJyYXJJZnJhbWUoKTtcblx0XHR9XG5cdH1cblx0Z29Ub1BsdXNab25lUmVzb3VyY2VzTWVudSh7dW5pdE51bWJlciwgY2F0ZWdvcnl9KXtcblx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0Y29uc29sZS5sb2coJ091cFRkbC5nb1RvUGx1c1pvbmVSZXNvdXJjZXNNZW51KCknLCB1bml0TnVtYmVyLCBjYXRlZ29yeSk7XG5cdFx0bGV0IHNlbGVjdGVkVW5pdDtcblx0XHR0aGlzLnN0YXRlLm1haW5EYXRhLnVuaXRzLmZvckVhY2godW5pdCA9PiB7XG5cdFx0XHRpZih1bml0Lm51bWJlciA9PSB1bml0TnVtYmVyKXtcblx0XHRcdFx0c2VsZWN0ZWRVbml0ID0gdW5pdDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmKHNlbGVjdGVkVW5pdCl7XG5cdFx0XHRjb25zdCB1bml0VGl0bGUgPSBzZWxlY3RlZFVuaXQudGl0bGU7XG5cdFx0XHRjb25zdCBpbWFnZSA9IHNlbGVjdGVkVW5pdC5pbWFnZTtcblx0XHRcdGxldCByZXNvdXJjZXMgPSBbXTtcblx0XHRcdHNlbGVjdGVkVW5pdC5yZXNvdXJjZXMuZm9yRWFjaCgocmVzb3VyY2UpPT57XG5cdFx0XHRcdGlmKGdldFJlc291cmNlVHlwZShyZXNvdXJjZSkgPT0gY2F0ZWdvcnkpe1xuXHRcdFx0XHRcdHJlc291cmNlcy5wdXNoKHJlc291cmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLnVwZGF0ZSh7XG5cdFx0XHRcdHRpdGxlOiB1bml0VGl0bGUsXG5cdFx0XHRcdGltYWdlOiBpbWFnZSxcblx0XHRcdFx0bnVtYmVyOiB1bml0TnVtYmVyLFxuXHRcdFx0XHRyZXNvdXJjZXM6IHJlc291cmNlcyxcblx0XHRcdFx0b25SZXNvdXJjZUFjdGlvbjogKGRhdGEpID0+IHRoaXMuZ29Ub1BsdXNab25lUmVzb3VyY2UoZGF0YSksXG5cdFx0XHRcdC8vIG9uQmFja0FjdGlvbjogKG51bWJlcikgPT4gdGhpcy5nb1RvUGx1c1pvbmVDYXRlZ29yaWVzTWVudShudW1iZXIpLFxuXHRcdFx0XHRvbkJhY2tBY3Rpb246ICh1bml0KSA9PiB0aGlzLnVybEhlbHBlci51cGRhdGVVcmxIYXNoKHtcblx0XHRcdFx0XHRzdGF0ZU5hbWU6ICdwbHVzem9uZScsXG5cdFx0XHRcdFx0dW5pdFxuXHRcdFx0XHR9KSxcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnNjcmVlbnMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcblx0XHRcdHRoaXMuc2NyZWVucy51bml0TWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMubGVzc29uTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLnNob3coKTtcblx0XHR9XG5cdH1cblx0Z29Ub1BsdXNab25lUmVzb3VyY2Uoe3VuaXROdW1iZXIsIHJlc291cmNlSWR9KXtcblx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0Y29uc29sZS5sb2coJ091cFRkbC5nb1RvUGx1c1pvbmVSZXNvdXJjZSgpJywgdW5pdE51bWJlciwgcmVzb3VyY2VJZCk7XG5cblx0XHRsZXQgc2VsZWN0ZWRSZXNvdXJjZSA9IGdldFJlc291cmNlQnlJZCh7cmVzb3VyY2VJZCwgbWFpbkRhdGE6IHRoaXMuc3RhdGUubWFpbkRhdGF9KTtcblx0XHRpZihzZWxlY3RlZFJlc291cmNlKXtcblxuXHRcdFx0Ly9DaWVycmEgZWwgcmVwcm9kdWN0b3IgZGUgYmxpbmtcblx0XHRcdGlmKGNvbmZpZy5kZXYpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjZXJyYXJJZnJhbWUoKScpO1xuXHRcdFx0aWYodHlwZW9mIGNlcnJhcklmcmFtZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0Y2VycmFySWZyYW1lKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vRWplY3V0YSBsYSBmdW5jacOzbiBxdWUgdmllbmUgZW4gZWwgb2JqZXRvIGRlIGxpYnJvXG5cdFx0XHRldmFsKHNlbGVjdGVkUmVzb3VyY2Uub25jbGlja1RpdGxlKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3VwVGRsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9tYWluLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbi8vRXN0YSBmdW5jacOzbiBzb2xvIHNlIGRlYmUgZWplY3V0YXIgYWwgaW5pY2lvXG5cblxuXG5cbmNsYXNzIFVybEhlbHBlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy51cmxTdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0YXRlTmFtZTogJycsIC8vICdzcGxhc2gnLCAndW5pdG1lbnUnLCAndW5pdCcsICdwbHVzem9uZScsICdwbHVzY2F0ZWdvcnknXG4gICAgICAgICAgICB1bml0OiAtMSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0ge307XG4gICAgICAgIFxuICAgIH1cblxuICAgIGluaXQoYWN0aW9ucyl7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVybEhlbHBlci5pbml0KClcIik7XG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLmdvVG9TdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ29Ub1N0YXRlKCk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZUN1cnJlbnRTdGF0ZSgpIHtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXJsSGVscGVyLnVwZGF0ZUN1cnJlbnRTdGF0ZSgpXCIpO1xuICAgICAgICBsZXQgdXJsU3RhdGUgPSB7fTtcbiAgICAgICAgY29uc3QgaGFzaE5hbWU9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICBjb25zdCBoYXNoUGFydHMgPSBoYXNoTmFtZS5zcGxpdCgnXycpOyAvL1BhcmEgZGl2aWRpciBsYXMgcGFydGVzIGRlbCBoYXNoXG4gICAgICAgIC8vRWwgaGFzaCBwdWVkZSBzZXJcbiAgICAgICAgLy8gXCIjXCIgbyBcIiNcIiA9PiBTcGxhc2hcbiAgICAgICAgLy8gXCIjdW5pdG1lbnVcIiA9PiBNZW7DuiBkZSB1bmlkYWRlc1xuICAgICAgICAvLyBcIiN1bml0X1hcIiA9PiBVbmlkYWQgWFxuICAgICAgICAvLyBcIiNwbHVzem9uZV9YXCIgPT4gUGx1c3pvbmUgZGUgdW5pZGFkIFhcbiAgICAgICAgLy8gXCIjcGx1c2NhdGVnb3J5X1hfQ0FURUdPUllcIiA9PiBQbHVzem9uZSBlbiBjYXRlZ29yw61hIENBVEVHT1JZIHkgdW5pZGFkIFhcbiAgICAgICAgaWYoaGFzaFBhcnRzWzBdID09ICcjdW5pdG1lbnUnICYmIGhhc2hQYXJ0cy5sZW5ndGggPT0gMSl7XG4gICAgICAgICAgICB1cmxTdGF0ZS5zdGF0ZU5hbWUgPSAndW5pdG1lbnUnO1xuICAgICAgICB9IGVsc2UgaWYoaGFzaFBhcnRzWzBdID09ICcjdW5pdCcgJiYgaGFzaFBhcnRzLmxlbmd0aCA9PSAyKXtcbiAgICAgICAgICAgIHVybFN0YXRlLnN0YXRlTmFtZSA9ICd1bml0JztcbiAgICAgICAgICAgIHVybFN0YXRlLnVuaXQgPSBoYXNoUGFydHNbMV07XG4gICAgICAgIH0gZWxzZSBpZihoYXNoUGFydHNbMF0gPT0gJyNwbHVzem9uZScgJiYgaGFzaFBhcnRzLmxlbmd0aCA9PSAyKXtcbiAgICAgICAgICAgIHVybFN0YXRlLnN0YXRlTmFtZSA9ICdwbHVzem9uZSc7XG4gICAgICAgICAgICB1cmxTdGF0ZS51bml0ID0gaGFzaFBhcnRzWzFdO1xuICAgICAgICB9IGVsc2UgaWYoaGFzaFBhcnRzWzBdID09ICcjcGx1c2NhdGVnb3J5JyAmJiBoYXNoUGFydHMubGVuZ3RoID09IDMpe1xuICAgICAgICAgICAgdXJsU3RhdGUuc3RhdGVOYW1lID0gJ3BsdXNjYXRlZ29yeSc7XG4gICAgICAgICAgICB1cmxTdGF0ZS51bml0ID0gaGFzaFBhcnRzWzFdO1xuICAgICAgICAgICAgdXJsU3RhdGUuY2F0ZWdvcnkgPSBoYXNoUGFydHNbMl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxTdGF0ZS5zdGF0ZU5hbWUgPSAnc3BsYXNoJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVybFN0YXRlID0gdXJsU3RhdGU7XG4gICAgfVxuXG4gICAgZ29Ub1N0YXRlKCl7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFN0YXRlKCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy51cmxTdGF0ZS5zdGF0ZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NwbGFzaCc6XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmdvVG9TcGxhc2goKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgICAgICBjYXNlICd1bml0bWVudSc6XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmdvVG9Vbml0TWVudSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ3VuaXQnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5nb1RvTGVzc29uTWVudSh0aGlzLnVybFN0YXRlLnVuaXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ3BsdXN6b25lJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMuZ29Ub1BsdXNab25lQ2F0ZWdvcmllc01lbnUodGhpcy51cmxTdGF0ZS51bml0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgICAgICBjYXNlICdwbHVzY2F0ZWdvcnknOlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5nb1RvUGx1c1pvbmVSZXNvdXJjZXNNZW51KHt1bml0TnVtYmVyOiB0aGlzLnVybFN0YXRlLnVuaXQsIGNhdGVnb3J5OiB0aGlzLnVybFN0YXRlLmNhdGVnb3J5fSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVVcmxIYXNoKHVybFN0YXRlKXtcbiAgICAgICAgbGV0IHVybEhhc2ggPSAnJztcbiAgICAgICAgc3dpdGNoICh1cmxTdGF0ZS5zdGF0ZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NwbGFzaCc6XG4gICAgICAgICAgICAgICAgdXJsSGFzaCA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd1bml0bWVudSc6XG4gICAgICAgICAgICAgICAgdXJsSGFzaCA9IGAjdW5pdG1lbnVgO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ3VuaXQnOlxuICAgICAgICAgICAgICAgIHVybEhhc2ggPSBgI3VuaXRfJHt1cmxTdGF0ZS51bml0fWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlICdwbHVzem9uZSc6XG4gICAgICAgICAgICAgICAgdXJsSGFzaCA9IGAjcGx1c3pvbmVfJHt1cmxTdGF0ZS51bml0fWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FzZSAncGx1c2NhdGVnb3J5JzpcbiAgICAgICAgICAgICAgICB1cmxIYXNoID0gYCNwbHVzY2F0ZWdvcnlfJHt1cmxTdGF0ZS51bml0fV8ke3VybFN0YXRlLmNhdGVnb3J5fWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybEhhc2g7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBVcmxIZWxwZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3VybEhlbHBlci5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IEFuaW1hdGlvbnMgZnJvbSAnLi9hbmltYXRpb25zJztcblxuY29uc3QgYW5pbWF0aW9ucyA9IG5ldyBBbmltYXRpb25zO1xuXG4vL0RPTSBlbGVtZW50c1xuXG5jbGFzcyBTcGxhc2hTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMgPSB7XG4gICAgICAgICAgICBzY3JlZW5EaXY6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXBfdGRsX3NwbGFzaF9zY3JlZW4nKSxcbiAgICAgICAgICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdXBfc3BsYXNoX19tYWluX3RpdGxlJylbMF0sXG4gICAgICAgICAgICBlbnRlckJ0bjogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3VwX3NwbGFzaF9fZW50ZXInKVswXSxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpbml0KHByb3BzKXtcbiAgICAgICAgdmFyIHsgdGl0bGUsIG9uRW50ZXJBY3Rpb24gfSA9IHByb3BzO1xuICAgICAgICAvL1RpdGxlXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMudGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cy5lbnRlckJ0bi5vbmNsaWNrID0gb25FbnRlckFjdGlvbjtcblxuICAgICAgICBpZihjb25maWcuZGV2KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3BsYXNoU2NyZWVuLmluaXQoKVwiKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbiAgICBzaG93KCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNwbGFzaFNjcmVlbi5zaG93KClcIilcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYWN0aXZlKXtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMuc2hvd09wYWNpdHlTY2FsZSh0aGlzLmRvbUVsZW1lbnRzLnNjcmVlbkRpdik7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGhpZGUoKXtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTcGxhc2hTY3JlZW4uaGlkZSgpXCIpO1xuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZSl7XG4gICAgICAgICAgICBhbmltYXRpb25zLmhpZGVPcGFjaXR5U2NhbGUodGhpcy5kb21FbGVtZW50cy5zY3JlZW5EaXYpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsYXNoU2NyZWVuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9fc3BsYXNoU2NyZWVuLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgQW5pbWF0aW9ucyBmcm9tICcuL2FuaW1hdGlvbnMnO1xuaW1wb3J0IFNsaWRlciBmcm9tICcuL3NsaWRlcic7XG5cbmNvbnN0IGFuaW1hdGlvbnMgPSBuZXcgQW5pbWF0aW9ucztcblxuLy9ET00gZWxlbWVudHNcblxuY2xhc3MgVW5pdE1lbnVTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC8vICAgICB0aXRsZTogJycsXG4gICAgICAgIC8vICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzbGlkZXI6IG51bGwsXG4gICAgICAgICAgICBvblVuaXRBY3Rpb246IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMgPSB7XG4gICAgICAgICAgICBzY3JlZW5EaXY6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXBfdGRsX3VuaXRfbWVudV9zY3JlZW4nKSxcbiAgICAgICAgICAgIGJhY2tCdXR0b246ICQoJyNvdXBfdGRsX3VuaXRfbWVudV9zY3JlZW4gLm91cF90ZGxfX2JyZWFkY3J1bWJfX2JhY2snKS5nZXQoMCksXG4gICAgICAgICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3VwX3VuaXRfbWVudV9fbWFpbl90aXRsZScpWzBdLFxuICAgICAgICAgICAgc2xpZGVySGlkZGVuRWxlbWVudHM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF91bml0X21lbnVfX3NsaWRlcl9oaWRkZW5fZWxlbWVudHMnKVswXSxcbiAgICAgICAgICAgIHNsaWRlcjogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3VwX3VuaXRfbWVudV9fdW5pdF9zbGlkZXInKVswXSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuaXRIdG1sRWxlbWVudHMgPSBbXTtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5pdE1lbnVTY3JlZW4uY29uc3RydWN0b3IoKVwiKVxuICAgIH1cbiAgICBcbiAgICBpbml0KHByb3BzKXtcbiAgICAgICAgaWYoY29uZmlnLmRldil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuaXRNZW51U2NyZWVuLmluaXQoKVwiKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHsgdGl0bGUsIG9uVW5pdEFjdGlvbiwgdW5pdHMsIG9uQmFja0FjdGlvbn0gPSBwcm9wcztcbiAgICAgICAgdGhpcy5zdGF0ZS5vblVuaXRBY3Rpb24gPSBvblVuaXRBY3Rpb247XG4gICAgICAgIC8vVGl0bGVcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cy50aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICB1bml0cy5mb3JFYWNoKHVuaXQgPT4ge1xuICAgICAgICAgICAgdGhpcy51bml0SHRtbEVsZW1lbnRzLnB1c2godGhpcy5nZXRNZW51VW5pdEVsZW1lbnRTdHJpbmdIdG1sKHVuaXQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAkKHRoaXMuZG9tRWxlbWVudHMuYmFja0J1dHRvbikudW5iaW5kKCdjbGljaycpLm9uKCdjbGljaycsb25CYWNrQWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUuc2xpZGVyID0gbmV3IFNsaWRlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZXIuaW5pdCh7XG4gICAgICAgICAgICBlbGVtZW50czogdGhpcy51bml0SHRtbEVsZW1lbnRzLFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2tBY3Rpb246IChudW1iZXIpID0+IHRoaXMub25Vbml0Q2xpY2sobnVtYmVyKSxcbiAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiAnLm91cF91bml0X21lbnVfX3VuaXRfc2xpZGVyX2NvbnRhaW5lcicsXG4gICAgICAgICAgICBlbGVtZW50TWluV2lkdGg6IHtcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDI0MCxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDI2MCxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAzMDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxlbWVudE1pbkhlaWdodDoge1xuICAgICAgICAgICAgICAgIG1vYmlsZTogMTAwLFxuICAgICAgICAgICAgICAgIHRhYmxldDogMTEwLFxuICAgICAgICAgICAgICAgIGRlc2t0b3A6IDEyMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gJCh3aW5kb3cpLnJlc2l6ZSh0aGlzLnJlZnJlc2hTbGlkZXJTaXplLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzaG93KCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuaXRNZW51U2NyZWVuLnNob3coKVwiKVxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5zaG93T3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2xpZGVyLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoaWRlKCl7XG4gICAgICAgIC8vdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbml0TWVudVNjcmVlbi5oaWRlKClcIiwgdGhpcy5zdGF0ZS5hY3RpdmUpO1xuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZSl7XG4gICAgICAgICAgICBhbmltYXRpb25zLmhpZGVPcGFjaXR5U2NhbGUodGhpcy5kb21FbGVtZW50cy5zY3JlZW5EaXYpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNZW51VW5pdEVsZW1lbnRTdHJpbmdIdG1sKHVuaXQpe1xuICAgICAgICB2YXIgaHRtbFN0cmluZyA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfdW5pdF9tZW51X191bml0LWJ0blwiIG51bWJlcj1cIiR7dW5pdC5udW1iZXJ9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF91bml0X21lbnVfX3VuaXRfX251bWJlclwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dW5pdC5pbWFnZX0pO1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfdW5pdF9tZW51X191bml0X190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAke3VuaXQudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIHJldHVybiBodG1sU3RyaW5nO1xuICAgIH1cbiAgICBvblVuaXRDbGljayhlKXtcbiAgICAgICAgdmFyIG51bWJlciA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdudW1iZXInKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5vblVuaXRBY3Rpb24obnVtYmVyKTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVuaXRNZW51U2NyZWVuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9fdW5pdE1lbnVTY3JlZW4uanMiLCIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuOC4xXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxuXG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xuXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcblxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcblxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcblxuICAgICAgICBfLmJ1aWxkRG90cygpO1xuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuXG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcblxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG5cbiAgICAgICAgICAgIHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7XG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGMgPSAwOyBjIDwgXy5vcHRpb25zLnNsaWRlc1BlclJvdzsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSBfLm9yaWdpbmFsU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbmx5IHRyaWdnZXIgYnJlYWtwb2ludHMgZHVyaW5nIGFuIGFjdHVhbCBicmVhay4gbm90IG9uIGluaXRpYWxpemUuXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0O1xuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJ2EnKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xuICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVuZXZlbk9mZnNldCA9IChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApO1xuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5tZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBuYXZpZ2FibGVzLCBwcmV2TmF2aWdhYmxlO1xuXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcbiAgICAgICAgcHJldk5hdmlnYWJsZSA9IDA7XG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XG5cbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMucHJldkFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5uZXh0QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLCAnKicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcbiAgICAgICAgICAgIGNvZWY7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTEuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICAgICBudW1Eb3RHcm91cHMgPSBNYXRoLmNlaWwoXy5zbGlkZUNvdW50IC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyksXG4gICAgICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcbiAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBhcmlhQnV0dG9uQ29udHJvbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRTbGlkZUluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXNbaV07XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmZpcnN0KCkuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgbWFwcGVkU2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkuZXEoXy5jdXJyZW50U2xpZGUpLmZpbmQoJ2J1dHRvbicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICAgICAgfSkuZW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpPV8uY3VycmVudFNsaWRlLCBtYXg9aStfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcbiAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHJhbmdlU3RhcnQgLSAxLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxuICAgICAgICAgICAgICAgICRzbGlkZXMgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlIDwgMCkgcHJldlNsaWRlID0gXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEocHJldlNsaWRlKSk7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZS0tO1xuICAgICAgICAgICAgICAgIG5leHRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoMCwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZShfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogLTEpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uaW5pdFVJKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xuICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG4gICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICBfLm9wdGlvbnMuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XG5cbiAgICAgICAgICAgIF8uYW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hdHRyKCd0YWJpbmRleCcsIDApLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XG5cbiAgICAgICAgdHJ5Q291bnQgPSB0cnlDb3VudCB8fCAxO1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICRpbWdzVG9Mb2FkID0gJCggJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyICksXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIGltYWdlU291cmNlLFxuICAgICAgICAgICAgaW1hZ2VTcmNTZXQsXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQ7XG5cbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIGltYWdlID0gJGltZ3NUb0xvYWQuZmlyc3QoKTtcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XG4gICAgICAgICAgICBpbWFnZVNyY1NldCA9IGltYWdlLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICBpbWFnZVNpemVzICA9IGltYWdlLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uYnJlYWtwb2ludDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJyZWFrcG9pbnRzIGFuZCBjdXQgb3V0IGFueSBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmVzIHdpdGggdGhlIHNhbWUgYnJlYWtwb2ludCBudW1iZXIsIHdlIGRvbid0IHdhbnQgZHVwZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNwbGljZShsLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5wdXNoKGN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbY3VycmVudEJyZWFrcG9pbnRdID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLnNldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihfLm9wdGlvbnMuc2xpZGUpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG5cbiAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuICAgICAgICBfLmJ1aWxkRG90cygpO1xuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5O1xuICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3JlSW5pdCcsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfLndpbmRvd0RlbGF5KTtcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVtb3ZlU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tSZW1vdmUgPSBmdW5jdGlvbihpbmRleCwgcmVtb3ZlQmVmb3JlLCByZW1vdmVBbGwpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmVtb3ZlQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAtLWluZGV4IDogaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDwgMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmIChyZW1vdmVBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpbmRleCkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0Q1NTID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge30sXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB4ID0gXy5wb3NpdGlvblByb3AgPT0gJ2xlZnQnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcbiAgICAgICAgeSA9IF8ucG9zaXRpb25Qcm9wID09ICd0b3AnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcblxuICAgICAgICBwb3NpdGlvblByb3BzW18ucG9zaXRpb25Qcm9wXSA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICsgeCArICcsICcgKyB5ICsgJyknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywgJyArIHkgKyAnLCAwcHgpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgnMHB4ICcgKyBfLm9wdGlvbnMuY2VudGVyUGFkZGluZylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJGxpc3QuaGVpZ2h0KF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IChfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArICcgMHB4JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8ubGlzdFdpZHRoID0gXy4kbGlzdC53aWR0aCgpO1xuICAgICAgICBfLmxpc3RIZWlnaHQgPSBfLiRsaXN0LmhlaWdodCgpO1xuXG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aCg1MDAwICogXy5zbGlkZUNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoKF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgodHJ1ZSkgLSBfLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS53aWR0aChfLnNsaWRlV2lkdGggLSBvZmZzZXQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5jc3Moe1xuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPVxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XG5cbiAgICAgICAgaWYoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdvYmplY3QnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3Jlc3BvbnNpdmUnO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xuXG4gICAgICAgICAgICBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcblxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XG5cbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0XSA9IHZhbDtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAncmVzcG9uc2l2ZScgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlID0gWyB2YWx1ZVtpdGVtXSBdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXNwb25zaXZlIG9iamVjdCBhbmQgc3BsaWNlIG91dCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUucHVzaCggdmFsdWVbaXRlbV0gKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgXy5zZXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNldENTUyhfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XG5cbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5tc1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmZhZGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IF8uZGVmYXVsdHMuekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW8tdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1vei10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy13ZWJraXQtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1zLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgXy50cmFuc2Zvcm1zRW5hYmxlZCA9IF8ub3B0aW9ucy51c2VUcmFuc2Zvcm0gJiYgKF8uYW5pbVR5cGUgIT09IG51bGwgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpO1xuICAgIH07XG5cblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xuXG4gICAgICAgIGFsbFNsaWRlcyA9IF8uJHNsaWRlclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gY2VudGVyT2Zmc2V0ICsgMSArIGV2ZW5Db2VmLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJyB8fCBfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0U2xpZGUgPCAwKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50IC0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlID49IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XG4gICAgICAgIH1cblxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JlZm9yZUNoYW5nZScsIFtfLCBfLmN1cnJlbnRTbGlkZSwgYW5pbVNsaWRlXSk7XG5cbiAgICAgICAgb2xkU2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBhbmltU2xpZGU7XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xuXG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBfLmdldE5hdlRhcmdldCgpO1xuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xuXG4gICAgICAgICAgICBpZiAoIG5hdlRhcmdldC5zbGlkZUNvdW50IDw9IG5hdlRhcmdldC5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlT3V0KG9sZFNsaWRlKTtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5zY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IF8uc2Nyb2xsaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clkgLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSwgMikpKTtcblxuICAgICAgICBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS52aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50W18uaGlkZGVuXSApIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsID0gXy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmV0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXztcbiAgICB9O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5mdW5jdGlvbiByZXNwb25zaXZlU3RhdHVzKCkge1xuICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGlmKHdpZHRoIDwgNzY4KXtcbiAgICAgICAgcmV0dXJuICdtb2JpbGUnO1xuICAgIH0gZWxzZSBpZih3aWR0aCA8IDEwMjQpe1xuICAgICAgICByZXR1cm4gJ3RhYmxldCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdkZXNrdG9wJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc3BvbnNpdmVTdGF0dXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3Jlc3BvbnNpdmVTdGF0dXMuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBBbmltYXRpb25zIGZyb20gJy4vYW5pbWF0aW9ucyc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vc2xpZGVyJztcblxuY29uc3QgYW5pbWF0aW9ucyA9IG5ldyBBbmltYXRpb25zO1xuXG4vL0RPTSBlbGVtZW50c1xuXG5jbGFzcyBMZXNzb25NZW51U2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyB0aGlzLnN0YXRlID0ge1xuICAgICAgICAvLyAgICAgdGl0bGU6ICcnLFxuICAgICAgICAvLyAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2xpZGVyOiBudWxsLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG51bWJlcjogMCxcbiAgICAgICAgICAgIG9uTGVzc29uQWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgb25QbHVzWm9uZUFjdGlvbjogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cyA9IHtcbiAgICAgICAgICAgIHNjcmVlbkRpdjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291cF90ZGxfbGVzc29uX21lbnVfc2NyZWVuJyksXG4gICAgICAgICAgICBiYWNrQnV0dG9uOiAkKCcjb3VwX3RkbF9sZXNzb25fbWVudV9zY3JlZW4gLm91cF90ZGxfX2JyZWFkY3J1bWJfX2JhY2snKS5nZXQoMCksXG4gICAgICAgICAgICB0aXRsZTogJCgnLm91cF9sZXNzb25fbWVudV9fbWFpbl90aXRsZT5zdHJvbmcnKS5nZXQoMCksXG4gICAgICAgICAgICBudW1iZXI6ICQoJy5vdXBfbGVzc29uX21lbnVfX21haW5fdGl0bGU+c3BhbicpLmdldCgwKSxcbiAgICAgICAgICAgIHNsaWRlckhpZGRlbkVsZW1lbnRzOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdXBfbGVzc29uX21lbnVfX3NsaWRlcl9oaWRkZW5fZWxlbWVudHMnKVswXSxcbiAgICAgICAgICAgIHNsaWRlcjogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3VwX2xlc3Nvbl9tZW51X191bml0X3NsaWRlcicpWzBdLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGVzc29uSHRtbEVsZW1lbnRzID0gW107XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlc3Nvbk1lbnVTY3JlZW4uY29uc3RydWN0b3IoKVwiKVxuICAgIH1cbiAgICBcbiAgICBpbml0KCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlc3Nvbk1lbnVTY3JlZW4uaW5pdCgpXCIpO1xuICAgIH1cbiAgICB1cGRhdGUocHJvcHMpe1xuICAgICAgICBpZihjb25maWcuZGV2KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVzc29uTWVudVNjcmVlbi51cGRhdGUoKVwiLCBwcm9wcyk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB7IHRpdGxlLCBudW1iZXIsIGltYWdlLCBvblBsdXNab25lQWN0aW9uLCBvbkxlc3NvbkFjdGlvbiwgbGVzc29ucywgb25CYWNrQWN0aW9uLCBoYXNQbHVzWm9uZSB9ID0gcHJvcHM7XG4gICAgICAgIC8vVGl0bGVcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cy50aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzLm51bWJlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2V9KWA7XG4gICAgICAgIHRoaXMuc3RhdGUubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICB0aGlzLnN0YXRlLm9uUGx1c1pvbmVBY3Rpb24gPSBvblBsdXNab25lQWN0aW9uO1xuICAgICAgICB0aGlzLnN0YXRlLm9uTGVzc29uQWN0aW9uID0gb25MZXNzb25BY3Rpb247XG4gICAgICAgIHRoaXMubGVzc29uSHRtbEVsZW1lbnRzID0gW107XG4gICAgICAgIGlmKGhhc1BsdXNab25lKXtcbiAgICAgICAgICAgIHRoaXMubGVzc29uSHRtbEVsZW1lbnRzLnB1c2godGhpcy5nZXRNZW51UGx1c1pvbmVFbGVtZW50U3RyaW5nSHRtbCgpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXNzb25zLmZvckVhY2gobGVzc29uID0+IHtcbiAgICAgICAgICAgIGlmKGxlc3Nvbi50eXBlID09ICdsaWJybycpe1xuICAgICAgICAgICAgICAgIHRoaXMubGVzc29uSHRtbEVsZW1lbnRzLnB1c2godGhpcy5nZXRNZW51TGVzc29uRWxlbWVudFN0cmluZ0h0bWwobGVzc29uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgIFxuICAgICAgICAkKHRoaXMuZG9tRWxlbWVudHMuYmFja0J1dHRvbikudW5iaW5kKCdjbGljaycpLm9uKCdjbGljaycsb25CYWNrQWN0aW9uKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZXIgPSBuZXcgU2xpZGVyO1xuICAgICAgICB0aGlzLnN0YXRlLnNsaWRlci5pbml0KHtcbiAgICAgICAgICAgIGVsZW1lbnRzOiB0aGlzLmxlc3Nvbkh0bWxFbGVtZW50cyxcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrQWN0aW9uOiAoZSkgPT4gdGhpcy5vbkxlc3NvbkNsaWNrKGUpLCAvL3RoaXMub25Vbml0Q2xpY2ssXG4gICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogJy5vdXBfbGVzc29uX21lbnVfX2xlc3Nvbl9zbGlkZXJfY29udGFpbmVyJyxcbiAgICAgICAgICAgIGVsZW1lbnRNaW5XaWR0aDoge1xuICAgICAgICAgICAgICAgIG1vYmlsZTogMTYwICsgNSArIDUsXG4gICAgICAgICAgICAgICAgdGFibGV0OiAxNzggKyA4ICsgOCxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAxNzggKyA4ICsgOCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50TWluSGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgbW9iaWxlOiAxNjAgKyA1ICsgNSxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDE3OCArIDggKyA4LFxuICAgICAgICAgICAgICAgIGRlc2t0b3A6IDE3OCArIDggKyA4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyAkKHdpbmRvdykucmVzaXplKHRoaXMucmVmcmVzaFNsaWRlclNpemUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHNob3coKXtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVzc29uTWVudVNjcmVlbi5zaG93KClcIilcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYWN0aXZlKXtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMuc2hvd09wYWNpdHlTY2FsZSh0aGlzLmRvbUVsZW1lbnRzLnNjcmVlbkRpdik7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNsaWRlci5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbiAgICBoaWRlKCl7XG4gICAgICAgIC8vdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvL3NjcmVlbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVzc29uTWVudVNjcmVlbi5oaWRlKClcIik7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYWN0aXZlKXtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMuaGlkZU9wYWNpdHlTY2FsZSh0aGlzLmRvbUVsZW1lbnRzLnNjcmVlbkRpdik7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1lbnVMZXNzb25FbGVtZW50U3RyaW5nSHRtbChsZXNzb24pe1xuICAgICAgICB2YXIgYmFja2dyb3VuZFN0eWxlID0gJyc7XG4gICAgICAgIGlmKGxlc3Nvbi5pbWFnZS5sZW5ndGg+Myl7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kU3R5bGUgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7bGVzc29uLmltYWdlfSlgO1xuICAgICAgICB9XG4gICAgICAgIHZhciBodG1sU3RyaW5nID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9sZXNzb25fbWVudV9fbGVzc29uLWJ0blwiIGlkPVwiJHtsZXNzb24uaWR9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9sZXNzb25fbWVudV9fbGVzc29uX19pbWFnZVwiIHN0eWxlPVwiJHtiYWNrZ3JvdW5kU3R5bGV9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9sZXNzb25fbWVudV9fbGVzc29uX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2xlc3Nvbi50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIHJldHVybiBodG1sU3RyaW5nO1xuICAgIH1cbiAgICBnZXRNZW51UGx1c1pvbmVFbGVtZW50U3RyaW5nSHRtbCgpe1xuICAgICAgICB2YXIgaHRtbFN0cmluZyA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfbGVzc29uX21lbnVfX2xlc3Nvbi1idG4gb3VwX2xlc3Nvbl9tZW51X19sZXNzb24tLXBsdXMtem9uZS1idG5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19sZXNzb25fX2ltYWdlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9sZXNzb25fbWVudV9fbGVzc29uX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rWm9uZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIGh0bWxTdHJpbmc7XG4gICAgfVxuICAgIG9uTGVzc29uQ2xpY2soZSl7XG4gICAgICAgIC8vSWYgaXMgK1pvbmVcbiAgICAgICAgaWYoJChlLmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdvdXBfbGVzc29uX21lbnVfX2xlc3Nvbi0tcGx1cy16b25lLWJ0bicpKXtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25QbHVzWm9uZUFjdGlvbih0aGlzLnN0YXRlLm51bWJlcik7XG4gICAgICAgIH0gZWxzZSB7IC8vSXMgaXMgbGVzc29uLCBvcGVuIGxlc3NvblxuICAgICAgICAgICAgdmFyIGlkID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uTGVzc29uQWN0aW9uKHt1bml0TnVtYmVyOiB0aGlzLnN0YXRlLm51bWJlciwgbGVzc29uSWQ6IGlkfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IExlc3Nvbk1lbnVTY3JlZW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL19sZXNzb25NZW51U2NyZWVuLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgQW5pbWF0aW9ucyBmcm9tICcuL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQXNwZWNSYXRpb0JvZHlDbGFzcyB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IGFuaW1hdGlvbnMgPSBuZXcgQW5pbWF0aW9ucztcblxuLy9ET00gZWxlbWVudHNcblxuY2xhc3MgUGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLy8gICAgIHRpdGxlOiAnJyxcbiAgICAgICAgLy8gICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBudW1iZXI6IDAsXG4gICAgICAgICAgICBvbkNhdGVnb3J5QWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgb25CYWNrQWN0aW9uOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgc2NyZWVuRGl2OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3VwX3RkbF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X3NjcmVlbicpLFxuICAgICAgICAgICAgYmFja0J1dHRvbjogJCgnI291cF90ZGxfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9zY3JlZW4gLm91cF90ZGxfX2JyZWFkY3J1bWJfX2JhY2snKS5nZXQoMCksXG4gICAgICAgICAgICB0aXRsZTogJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19tYWluX3RpdGxlPnN0cm9uZycpLmdldCgwKSxcbiAgICAgICAgICAgIG51bWJlcjogJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19tYWluX3RpdGxlPnNwYW4nKS5nZXQoMCksXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5odG1sRWxlbWVudHMgPSAnJztcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5jb25zdHJ1Y3RvcigpXCIpXG4gICAgfVxuICAgIFxuICAgIGluaXQoKXtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5pbml0KClcIik7XG4gICAgICAgIFxuICAgICAgICAvL1RoaXMgYWRkIGEgY2xhc3MgdG8gYm9keSBvciBlbGVtZW50OiBvdXB0ZGwtcG9ydHJhaXQgb3Igb3VwdGRsLWxhbmRzY2FwZVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIHVwZGF0ZShwcm9wcyl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLmluaXQoKVwiKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHsgdGl0bGUsIG51bWJlciwgaW1hZ2UsIG9uQ2F0ZWdvcnlBY3Rpb24sIGNhdGVnb3JpZXMsIG9uQmFja0FjdGlvbiB9ID0gcHJvcHM7XG4gICAgICAgIC8vVGl0bGVcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cy50aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzLm51bWJlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2V9KWA7XG4gICAgICAgIHRoaXMuc3RhdGUubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICB0aGlzLnN0YXRlLm9uQ2F0ZWdvcnlBY3Rpb24gPSBvbkNhdGVnb3J5QWN0aW9uO1xuICAgICAgICB0aGlzLnN0YXRlLm9uQmFja0FjdGlvbiA9IG9uQmFja0FjdGlvbjtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudHMgPSAnJztcblxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudHMgKz0gdGhpcy5nZXRNZW51Q2F0ZWdvcnlTdHJpbmdIdG1sKGNhdGVnb3J5KTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY29udGFpbmVyJykuaHRtbCh0aGlzLmh0bWxFbGVtZW50cyk7XG4gICAgICAgICQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY29udGFpbmVyIC5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuJykuY2xpY2soKGVsZW1lbnQpID0+IHRoaXMub25DYXRlZ29yeUNsaWNrKGVsZW1lbnQpKTtcbiAgICAgICBcbiAgICAgICAgJCh0aGlzLmRvbUVsZW1lbnRzLmJhY2tCdXR0b24pLnVuYmluZCgnY2xpY2snKS5vbignY2xpY2snLHRoaXMub25CYWNrQ2xpY2suYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdmFyIGFzcGVjUmF0aW9Cb2R5Q2xhc3MgPSBuZXcgQXNwZWNSYXRpb0JvZHlDbGFzcygpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhc3BlY1JhdGlvQm9keUNsYXNzLmluaXQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKCcub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5LWJ0bj4qJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBhbmNobyA9ICQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuJykub3V0ZXJXaWR0aCgpIC0gcGFyc2VJbnQoJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG4nKS5jc3MoJ3BhZGRpbmctbGVmdCcpLCAxMCkgLSBwYXJzZUludCgkKCcub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5LWJ0bicpLmNzcygncGFkZGluZy1yaWdodCcpLCAxMCksXG4gICAgICAgICAgICAgICAgYWx0byA9ICQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuJykub3V0ZXJIZWlnaHQoKSAtIHBhcnNlSW50KCQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuJykuY3NzKCdwYWRkaW5nLXRvcCcpICwgMTApIC0gcGFyc2VJbnQoJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG4nKS5jc3MoJ3BhZGRpbmctYm90dG9tJyksIDEwKTtcbiAgICAgICAgICAgICAgICB2YXIgbWluID0gYW5jaG8gPCBhbHRvID8gYW5jaG8gOiBhbHRvO1xuICAgICAgICAgICAgICAgIHZhciBtYXJnaW5Ub3AgPSAwLjUgKiAoYWx0byAtIG1pbik7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wID0gbWFyZ2luVG9wID4gMCA/IG1hcmdpblRvcCA6IDA7XG4gICAgICAgICAgICAgICAgJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG4+KicpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtaW4gKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG1pbiArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICdtYXJnaW4tdG9wJzogbWFyZ2luVG9wICsgJ3B4JyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLnNob3coKVwiKVxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5zaG93T3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxuICAgIGhpZGUoKXtcbiAgICAgICAgLy90aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vc2NyZWVuRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLmhpZGUoKVwiKTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5oaWRlT3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWVudUNhdGVnb3J5U3RyaW5nSHRtbChjYXRlZ29yeSl7XG4gICAgICAgIHZhciBiYWNrZ3JvdW5kU3R5bGUgPSAnJztcbiAgICAgICAgIHZhciBodG1sU3RyaW5nID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG5cIiBkYXRhLWNhdGVnb3J5PVwiJHtjYXRlZ29yeX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5X19ib3ggcmVzb3VyY2UtJHtjYXRlZ29yeX1cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIGh0bWxTdHJpbmc7XG4gICAgfVxuICAgIFxuICAgIG9uQ2F0ZWdvcnlDbGljayhlKXtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5vbkNhdGVnb3J5Q2xpY2soKVwiLCB0aGlzLnN0YXRlLm51bWJlciwgJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhdGVnb3J5JykpO1xuICAgICAgICB0aGlzLnN0YXRlLm9uQ2F0ZWdvcnlBY3Rpb24oe3VuaXROdW1iZXI6IHRoaXMuc3RhdGUubnVtYmVyLCBjYXRlZ29yeTogJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhdGVnb3J5Jyl9KVxuICAgIH1cbiAgICBcbiAgICBvbkJhY2tDbGljaygpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLm9uQmFja0NsaWNrKClcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkJhY2tBY3Rpb24odGhpcy5zdGF0ZS5udW1iZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvX3BsdXNab25lQ2F0ZWdvcmllc01lbnUuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBBbmltYXRpb25zIGZyb20gJy4vYW5pbWF0aW9ucyc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vc2xpZGVyJztcbmltcG9ydCB7IGdldFJlc291cmNlVHlwZSB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IGFuaW1hdGlvbnMgPSBuZXcgQW5pbWF0aW9ucztcblxuLy9ET00gZWxlbWVudHNcblxuY2xhc3MgUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyB0aGlzLnN0YXRlID0ge1xuICAgICAgICAvLyAgICAgdGl0bGU6ICcnLFxuICAgICAgICAvLyAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2xpZGVyOiBudWxsLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG51bWJlcjogMCxcbiAgICAgICAgICAgIG9uUmVzb3VyY2VBY3Rpb246IG51bGwsXG4gICAgICAgICAgICBvbkJhY2tBY3Rpb246IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMgPSB7XG4gICAgICAgICAgICBzY3JlZW5EaXY6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXBfdGRsX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9zY3JlZW4nKSxcbiAgICAgICAgICAgIGJhY2tCdXR0b246ICQoJyNvdXBfdGRsX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9zY3JlZW4gLm91cF90ZGxfX2JyZWFkY3J1bWJfX2JhY2snKS5nZXQoMCksXG4gICAgICAgICAgICB0aXRsZTogJCgnLm91cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX21haW5fdGl0bGU+c3Ryb25nJykuZ2V0KDApLFxuICAgICAgICAgICAgbnVtYmVyOiAkKCcub3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fbWFpbl90aXRsZT5zcGFuJykuZ2V0KDApLFxuICAgICAgICAgICAgc2xpZGVySGlkZGVuRWxlbWVudHM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX3NsaWRlcl9oaWRkZW5fZWxlbWVudHMnKVswXSxcbiAgICAgICAgICAgIHNsaWRlcjogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fdW5pdF9zbGlkZXInKVswXSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc291cmNlSHRtbEVsZW1lbnRzID0gW107XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5jb25zdHJ1Y3RvcigpXCIpXG4gICAgfVxuICAgIFxuICAgIGluaXQoKXtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLmluaXQoKVwiKTtcbiAgICB9XG4gICAgdXBkYXRlKHByb3BzKXtcbiAgICAgICAgaWYoY29uZmlnLmRldil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5pbml0KClcIik7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB7IHRpdGxlLCBudW1iZXIsIGltYWdlLCBvblJlc291cmNlQWN0aW9uLCByZXNvdXJjZXMsIG9uQmFja0FjdGlvbiB9ID0gcHJvcHM7XG4gICAgICAgIC8vVGl0bGVcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cy50aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzLm51bWJlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2V9KWA7XG4gICAgICAgIHRoaXMuc3RhdGUubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICB0aGlzLnN0YXRlLm9uUmVzb3VyY2VBY3Rpb24gPSBvblJlc291cmNlQWN0aW9uO1xuICAgICAgICB0aGlzLnN0YXRlLm9uQmFja0FjdGlvbiA9IG9uQmFja0FjdGlvbjtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUh0bWxFbGVtZW50cyA9IFtdO1xuICAgICAgICByZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlSHRtbEVsZW1lbnRzLnB1c2godGhpcy5nZXRNZW51UmVzb3VyY2VTdHJpbmdIdG1sKHJlc291cmNlKSk7XG4gICAgICAgIH0pO1xuICAgICAgIFxuICAgICAgICAkKHRoaXMuZG9tRWxlbWVudHMuYmFja0J1dHRvbikudW5iaW5kKCdjbGljaycpLm9uKCdjbGljaycsdGhpcy5vbkJhY2tDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZXIgPSBuZXcgU2xpZGVyO1xuICAgICAgICB0aGlzLnN0YXRlLnNsaWRlci5pbml0KHtcbiAgICAgICAgICAgIGVsZW1lbnRzOiB0aGlzLnJlc291cmNlSHRtbEVsZW1lbnRzLFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2tBY3Rpb246IChlKSA9PiB0aGlzLm9uUmVzb3VyY2VDbGljayhlKSwgLy90aGlzLm9uVW5pdENsaWNrLFxuICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6ICcub3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fcmVzb3VyY2Vfc2xpZGVyX2NvbnRhaW5lcicsXG4gICAgICAgICAgICBlbGVtZW50TWluV2lkdGg6IHtcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDE2MCArIDUgKyA1LFxuICAgICAgICAgICAgICAgIHRhYmxldDogMTc4ICsgOCArIDgsXG4gICAgICAgICAgICAgICAgZGVza3RvcDogMTc4ICsgOCArIDgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxlbWVudE1pbkhlaWdodDoge1xuICAgICAgICAgICAgICAgIG1vYmlsZTogMTYwICsgNSArIDUsXG4gICAgICAgICAgICAgICAgdGFibGV0OiAxNzggKyA4ICsgOCxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAxNzggKyA4ICsgOCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gJCh3aW5kb3cpLnJlc2l6ZSh0aGlzLnJlZnJlc2hTbGlkZXJTaXplLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzaG93KCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5zaG93KClcIilcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYWN0aXZlKXtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMuc2hvd09wYWNpdHlTY2FsZSh0aGlzLmRvbUVsZW1lbnRzLnNjcmVlbkRpdik7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNsaWRlci5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbiAgICBoaWRlKCl7XG4gICAgICAgIC8vdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvL3NjcmVlbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLmhpZGUoKVwiKTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5oaWRlT3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWVudVJlc291cmNlU3RyaW5nSHRtbChyZXNvdXJjZSl7XG4gICAgICAgIHZhciBiYWNrZ3JvdW5kU3R5bGUgPSAnJztcbiAgICAgICAgIHZhciBodG1sU3RyaW5nID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX3Jlc291cmNlLWJ0blwiIGlkPVwiJHtyZXNvdXJjZS5pZH1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fcmVzb3VyY2VfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJyZXNvdXJjZS0ke2dldFJlc291cmNlVHlwZShyZXNvdXJjZSl9XCI+PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7cmVzb3VyY2UudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19yZXNvdXJjZV9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtyZXNvdXJjZS5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIHJldHVybiBodG1sU3RyaW5nO1xuICAgIH1cbiAgICBcbiAgICBvblJlc291cmNlQ2xpY2soZSl7XG4gICAgICAgIC8vSWYgaXMgK1pvbmVcbiAgICAgICAgdmFyIGlkID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2lkJyk7XG4gICAgICAgIHRoaXMuc3RhdGUub25SZXNvdXJjZUFjdGlvbih7dW5pdE51bWJlcjogdGhpcy5zdGF0ZS5udW1iZXIsIHJlc291cmNlSWQ6IGlkfSk7XG4gICAgfVxuICAgIFxuICAgIG9uQmFja0NsaWNrKCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5vbkJhY2tDbGljaygpXCIpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUub25CYWNrQWN0aW9uKHRoaXMuc3RhdGUubnVtYmVyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvX3BsdXNab25lUmVzb3VyY2VzTWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=