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

	// blink.events.on('loadSeguimientoCurso', function() {
	// 	// Ejemplo carga de datos del libro en el toc del curso.
	// 	blink.getCourse(idcurso).done(function(data) {
	// 		var style = new OxfordTDL2Dev;
	// 		style.onCourseDataLoaded(data);
	// 	});
	// });
	blink.events.on('digitalbook:bpdfloaded', function() {
		// Ejemplo carga de datos del curso desde un libro digital.
		blink.getCourse(idcurso).done(function(data) {
				var style = new OxfordTDL2Dev;
				style.onCourseDataLoaded(data);
		});
	});


	

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
    dev: window.location.hash == '#dev'
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
                        //pageHtmlString += `<div class="oup__slider__slide__item--no_content"></div>`;
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

//Muestra el loading si no es un libro
if (window.location.href.indexOf('editar=1') == -1) {
    document.write('<div id="oup_tdl_loading_screen--basic"></div>');
}

//console.log("update_26");

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
			splashBackground: '',
			unitMenuBakground: '',
			lessonMenuBakground: '',
			plusConeCategoriesBakground: '',
			plusZoneResourcesBakground: ''
		};
		this.screens = {};
	}

	_createClass(OupTdl, [{
		key: 'init',
		value: function init(data) {
			if (_config2.default.dev) {
				console.log('Datos Cargados:', data);
				console.log('Unit 1:', data.units[0]);
				console.log(JSON.stringify(data));
			}
			//Quitamos la primera unidad, y de ahí tomamos la primera imagen
			//Mira si la actividad actual es la primera antes de lanzar el menú
			if (idclase == data.units[0].subunits[0].id) {
				if (_config2.default.dev) console.log('Es la actividad Portada');
				//Mira los fondos
				if (data.units[0]) {
					if (data.units[0].image) {
						this.state.splashBackground = data.units[0].image;
					}
				}
				if (data.units[0].subunits.length >= 1) {
					if (data.units[0].subunits[0].image) {
						this.state.unitMenuBakground = data.units[0].subunits[0].image;
						this.state.lessonMenuBakground = this.state.unitMenuBakground;
						this.state.plusConeCategoriesBakground = this.state.unitMenuBakground;
						this.state.plusZoneResourcesBakground = this.state.unitMenuBakground;
					}
				}
				//Bora la primera unidad
				data.units.shift();
				//ahora aliminamos las subunidades que solo sean visible para el profesor, si el usuario no es profesor
				if ((typeof blink === 'undefined' ? 'undefined' : _typeof(blink)) == 'object') {
					if (!blink.user.esProfesor()) {
						data.units.forEach(function (unit) {
							var i = unit.subunits.length;
							while (i--) {
								if (unit.subunits[i].onlyVisibleTeachers) {
									unit.subunits.splice(i, 1);
								}
							}
							i = unit.resources.length;
							while (i--) {
								if (unit.resources[i].onlyVisibleTeachers) {
									unit.resources.splice(i, 1);
								}
							}
						});
					}
				}

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

			var oxfordButtonsHtml = '\n\t\t\t<div class="oup_tdl__breadcrumb__oup_buttons">\n\t\t\t\t<a href="http://inicia.oupe.es/servicios" class="oup_buttons--nube ouptdl_external_link"></a>';
			if ((typeof blink === 'undefined' ? 'undefined' : _typeof(blink)) == 'object') {
				if (blink.user.esProfesor()) {
					oxfordButtonsHtml += '<a href="http://inicia.oupe.es/opremium" class="oup_buttons--premium ouptdl_external_link"></a>';
				}
			}
			oxfordButtonsHtml += '</div>';

			var htmlDOM = '\n\t\t\t<div id="oup_tdl_container">\n\t\t\t\t<div id="oup_tdl_splash_screen" style="background-image: url(' + this.state.splashBackground + ')">\n\t\t\t\t\t<div class="oup_splash__logo_oup"></div>\n\t\t\t\t\t<div class="oup_splash__logo_tdl"></div>\n\t\t\t\t\t<div class="oup_splash__content">\n\t\t\t\t\t\t<h1 class="oup_splash__main_title"></h1>\n\t\t\t\t\t\t<div class="oup_splash__enter"><span>Enter</span></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="oup_splash__footer">\xA9 Oxford University Press</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_unit_menu_screen" style="background-image: url(' + this.state.unitMenuBakground + ')">\n\t\t\t\t\t<div class="oup_unit_menu__content">\n\t\t\t\t\t\t<div class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<h2 class="oup_unit_menu__main_title"></h2>\n\t\t\t\t\t\t\t' + oxfordButtonsHtml + '\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="oup_unit_menu__unit_slider_container"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_lesson_menu_screen" style="background-image: url(' + this.state.lessonMenuBakground + ')">\n\t\t\t\t\t<div class="oup_lesson_menu__content">\n\t\t\t\t\t\t<h2 class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<div class="oup_lesson_menu__main_title oup_tdl__breadcrumb__level1">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t' + oxfordButtonsHtml + '\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<div class="oup_lesson_menu__lesson_slider_container">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_plus_zone_categories_menu_screen" style="background-image: url(' + this.state.plusConeCategoriesBakground + ')">\n\t\t\t\t\t<div class="oup_plus_zone_categories_menu__content">\n\t\t\t\t\t\t<h2 class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<div class="oup_plus_zone_categories_menu__main_title oup_tdl__breadcrumb__level1">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__level2">PlusZone</div>\n\t\t\t\t\t\t\t' + oxfordButtonsHtml + '\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<div class="oup_plus_zone_categories_menu__container">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_plus_zone_resources_menu_screen" style="background-image: url(' + this.state.plusZoneResourcesBakground + ')">\n\t\t\t\t\t<div class="oup_plus_zone_resources_menu__content">\n\t\t\t\t\t\t<h2 class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<div class="oup_plus_zone_resources_menu__main_title oup_tdl__breadcrumb__level1">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__level2">PlusZone</div>\n\t\t\t\t\t\t\t' + oxfordButtonsHtml + '\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<div class="oup_plus_zone_resources_menu__resource_slider_container">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';

			$('body').append(htmlDOM);

			//Check if is desktop
			if ((typeof blink === 'undefined' ? 'undefined' : _typeof(blink)) == 'object') {
				if (!blink.isApp || blink.isOfflinePC) {
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

			//Añade la funcion openURL a los enlaces de Oxford
			$('a.ouptdl_external_link').click(function (e) {
				e.preventDefault();
				blink.rest.openUrl('viewer', $(this).prop('href'), 0);
			});

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
				var hasLessons = lessons.length > 0;
				var hasResources = selectedUnit.resources.length > 0;
				// Si no tiene lecciones, pero sí recursos, va directamente a la pluszone
				if (!hasLessons && hasResources) {
					this.urlHelper.updateUrlHash({
						stateName: 'pluszone',
						unit: unitNumber
					});
				} else {
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
				var hasLessons = selectedUnit.subunits.length > 0;
				var resources = selectedUnit.resources;
				var categories = [];
				resources.forEach(function (resource) {
					//excepcion de categoria actividad->interactive
					var type = (0, _helpers.getResourceType)(resource);
					if (categories.indexOf(type) < 0) {
						categories.push(type);
					}
				});

				var backAction = void 0;
				if (!hasLessons) {
					backAction = function backAction() {
						return _this3.urlHelper.updateUrlHash({
							stateName: 'unitmenu'
						});
					};
				} else {
					backAction = function backAction() {
						return _this3.urlHelper.updateUrlHash({
							stateName: 'unit',
							unit: unitNumber
						});
					};
				}

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
					onBackAction: backAction
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
            this.domElements.screenDiv.onclick = onEnterAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGU2ZjRiNWVjMTZkNWViMjUzZmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2xpZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXJsSGVscGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fc3BsYXNoU2NyZWVuLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fdW5pdE1lbnVTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVzcG9uc2l2ZVN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX2xlc3Nvbk1lbnVTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL19wbHVzWm9uZUNhdGVnb3JpZXNNZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fcGx1c1pvbmVSZXNvdXJjZXNNZW51LmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImRldiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsIkFuaW1hdGlvbnMiLCJzaG93VGltZW91dCIsImRhdGEiLCJzdGF0ZSIsImRvbUVsZW1lbnRzIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsInNob3ciLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsImNhbGxiYWNrIiwiY2xhc3NMaXN0IiwiYWRkIiwidGVtcCIsInNjcm9sbEhlaWdodCIsInRyYW5zaXRpb25FdmVudCIsIndoaWNoVHJhbnNpdGlvbkV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ0IiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFuc2l0aW9ucyIsInN0eWxlIiwidW5kZWZpbmVkIiwiZ2V0TGVzc29uQnlJZCIsImdldFJlc291cmNlQnlJZCIsImdldFJlc291cmNlVHlwZSIsImxlc3NvbklkIiwibWFpbkRhdGEiLCJzZWxlY3RlZExlc3NvbiIsInVuaXRzIiwiZm9yRWFjaCIsInVuaXQiLCJzdWJ1bml0cyIsImxlc3NvbiIsImlkIiwicmVzb3VyY2VJZCIsInNlbGVjdGVkUmVzb3VyY2UiLCJyZXNvdXJjZXMiLCJyZXNvdXJjZSIsInNlbGVjdGVkVHlwZSIsInR5cGUiLCJ0YWciLCJpbmRleE9mIiwic2VhcmNoIiwiQXNwZWNSYXRpb0JvZHlDbGFzcyIsInVzZWRfZWxlbWVudCIsImNoZWNrIiwiX3RoaXMiLCIkIiwicmVzaXplIiwiZGlzcGxheVN0eWxlIiwiY3NzIiwieCIsIm91dGVyV2lkdGgiLCJ5Iiwib3V0ZXJIZWlnaHQiLCJlbGVtZW5kVG9DbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJTbGlkZXIiLCJlbGVtZW50cyIsIm9uRWxlbWVudENsaWNrQWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJlbGVtZW50TWluV2lkdGgiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiZWxlbWVudE1pbkhlaWdodCIsInNsaWRlckN1cnJlbnRQYWdlIiwicmFuZG9tSWQiLCJyZXNpemVTdGFydGVkIiwic2xpY2tTdGFydGVkIiwicHJvcHMiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJodG1sIiwiZWxlbWVudHNSZWZyZXNoIiwiYmluZCIsIiRzbGlkZXIiLCJoYXNDbGFzcyIsInNsaWNrIiwiZmluZCIsImhlaWdodCIsImNvbHMiLCJmbG9vciIsIndpZHRoIiwiZWxlbWVudFdpZHRoIiwicm93cyIsImVsZW1lbnRIZWlnaHQiLCJlbGVtZW50c1BlclBhZ2UiLCJwYWdlc051bWJlciIsImNlaWwiLCJsZW5ndGgiLCJodG1sU3RyaW5nIiwicGFnZSIsInBhZ2VIdG1sU3RyaW5nIiwiaW5kZXgiLCJjaGlsZHJlbiIsImNsaWNrIiwib24iLCJlbGVtZW50c1Jlc2l6ZSIsImV2ZW50Iiwic2xpZGVyIiwiY3VycmVudFNsaWRlIiwiaW5maW5pdGUiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJkb3RzIiwiYXBwZW5kRG90cyIsImluaXRpYWxTbGlkZSIsIm91cFRkbEFwcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0IiwiaHJlZiIsIndyaXRlIiwiT3VwVGRsIiwic3BsYXNoQmFja2dyb3VuZCIsInVuaXRNZW51QmFrZ3JvdW5kIiwibGVzc29uTWVudUJha2dyb3VuZCIsInBsdXNDb25lQ2F0ZWdvcmllc0Jha2dyb3VuZCIsInBsdXNab25lUmVzb3VyY2VzQmFrZ3JvdW5kIiwic2NyZWVucyIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZGNsYXNlIiwiaW1hZ2UiLCJzaGlmdCIsImJsaW5rIiwidXNlciIsImVzUHJvZmVzb3IiLCJpIiwib25seVZpc2libGVUZWFjaGVycyIsInNwbGljZSIsImluaXRNZW51Iiwib3hmb3JkQnV0dG9uc0h0bWwiLCJodG1sRE9NIiwiYXBwZW5kIiwiaXNBcHAiLCJpc09mZmxpbmVQQyIsImdldEVsZW1lbnRCeUlkIiwiYm90dG9tIiwic3BsYXNoU2NyZWVuIiwidW5pdE1lbnVTY3JlZW4iLCJsZXNzb25NZW51U2NyZWVuIiwicGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbiIsInBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbiIsInVybEhlbHBlciIsIm9uRW50ZXJBY3Rpb24iLCJ1cGRhdGVVcmxIYXNoIiwic3RhdGVOYW1lIiwib25Vbml0QWN0aW9uIiwib25CYWNrQWN0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzdCIsIm9wZW5VcmwiLCJwcm9wIiwiZ29Ub1NwbGFzaCIsImdvVG9Vbml0TWVudSIsImdvVG9MZXNzb25NZW51IiwiZ29Ub1BsdXNab25lQ2F0ZWdvcmllc01lbnUiLCJnb1RvUGx1c1pvbmVSZXNvdXJjZXNNZW51IiwiaGlkZSIsInVuaXROdW1iZXIiLCJzZWxlY3RlZFVuaXQiLCJudW1iZXIiLCJ1bml0VGl0bGUiLCJsZXNzb25zIiwiaGFzTGVzc29ucyIsImhhc1Jlc291cmNlcyIsInVwZGF0ZSIsIm9uUGx1c1pvbmVBY3Rpb24iLCJvbkxlc3NvbkFjdGlvbiIsImdvVG9MZXNzb24iLCJoYXNQbHVzWm9uZSIsImV2YWwiLCJvbmNsaWNrVGl0bGUiLCJjYXRlZ29yaWVzIiwicHVzaCIsImJhY2tBY3Rpb24iLCJvbkNhdGVnb3J5QWN0aW9uIiwiY2F0ZWdvcnkiLCJjZXJyYXJJZnJhbWUiLCJvblJlc291cmNlQWN0aW9uIiwiZ29Ub1BsdXNab25lUmVzb3VyY2UiLCJVcmxIZWxwZXIiLCJ1cmxTdGF0ZSIsImFjdGlvbnMiLCJvbmhhc2hjaGFuZ2UiLCJnb1RvU3RhdGUiLCJoYXNoTmFtZSIsImhhc2hQYXJ0cyIsInNwbGl0IiwidXBkYXRlQ3VycmVudFN0YXRlIiwidXJsSGFzaCIsImFuaW1hdGlvbnMiLCJTcGxhc2hTY3JlZW4iLCJhY3RpdmUiLCJzY3JlZW5EaXYiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZW50ZXJCdG4iLCJvbmNsaWNrIiwic2hvd09wYWNpdHlTY2FsZSIsImhpZGVPcGFjaXR5U2NhbGUiLCJVbml0TWVudVNjcmVlbiIsImJhY2tCdXR0b24iLCJnZXQiLCJzbGlkZXJIaWRkZW5FbGVtZW50cyIsInVuaXRIdG1sRWxlbWVudHMiLCJnZXRNZW51VW5pdEVsZW1lbnRTdHJpbmdIdG1sIiwidW5iaW5kIiwib25Vbml0Q2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiYXR0ciIsInJlc3BvbnNpdmVTdGF0dXMiLCJpbm5lcldpZHRoIiwiTGVzc29uTWVudVNjcmVlbiIsImxlc3Nvbkh0bWxFbGVtZW50cyIsImJhY2tncm91bmRJbWFnZSIsImdldE1lbnVQbHVzWm9uZUVsZW1lbnRTdHJpbmdIdG1sIiwiZ2V0TWVudUxlc3NvbkVsZW1lbnRTdHJpbmdIdG1sIiwib25MZXNzb25DbGljayIsImJhY2tncm91bmRTdHlsZSIsIlBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4iLCJodG1sRWxlbWVudHMiLCJnZXRNZW51Q2F0ZWdvcnlTdHJpbmdIdG1sIiwib25DYXRlZ29yeUNsaWNrIiwib25CYWNrQ2xpY2siLCJhc3BlY1JhdGlvQm9keUNsYXNzIiwiYW5jaG8iLCJwYXJzZUludCIsImFsdG8iLCJtaW4iLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuIiwicmVzb3VyY2VIdG1sRWxlbWVudHMiLCJnZXRNZW51UmVzb3VyY2VTdHJpbmdIdG1sIiwib25SZXNvdXJjZUNsaWNrIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOzs7OztBQUNBLElBQU1BLFNBQVM7QUFDWEMsU0FBS0MsT0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsSUFBd0I7QUFEbEIsQ0FBZjtrQkFHZUosTTs7Ozs7Ozs7Ozs7Ozs7O0FDSmY7Ozs7Ozs7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QW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFhOztBQUViLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWIsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQixpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUNBQWlDLDZCQUE2Qjs7QUFFOUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQkFBaUI7QUFDckQsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0Esb0NBQW9DLHVCQUF1QjtBQUMzRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYTs7QUFFYjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQSxhQUFhOzs7QUFHYixTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEMsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUNBQW1DO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjtBQUNBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhOztBQUViOztBQUVBOztBQUVBOztBQUVBOztB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LENBQVcwTSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjs7O2tEQUN5QmpLLFEsRUFBUztBQUMvQixnQkFBSTBMLGtCQUFrQixFQUF0QjtBQUNDLGdCQUFJbEksNEZBQzZEeEQsU0FBU0osRUFEdEUscUlBR2lDLDhCQUFnQkksUUFBaEIsQ0FIakMsK0NBSWVBLFNBQVN2QyxLQUp4QixnSkFPZXVDLFNBQVMyTSxXQVB4QixzRUFBSjtBQVdELG1CQUFPbkosVUFBUDtBQUNIOzs7d0NBRWU0RCxDLEVBQUU7QUFDZDtBQUNBLGdCQUFJeEgsS0FBS2MsRUFBRTBHLEVBQUU0RCxhQUFKLEVBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFUO0FBQ0EsaUJBQUsxTixLQUFMLENBQVc0TCxnQkFBWCxDQUE0QixFQUFDcEIsWUFBWSxLQUFLeEssS0FBTCxDQUFXMEssTUFBeEIsRUFBZ0NwSSxZQUFZRCxFQUE1QyxFQUE1QjtBQUNIOzs7c0NBRVk7QUFDVCxnQkFBRyxpQkFBTzVDLEdBQVYsRUFDSVksUUFBUUMsR0FBUixDQUFZLDJDQUFaOztBQUVKLGlCQUFLTixLQUFMLENBQVc0SixZQUFYLENBQXdCLEtBQUs1SixLQUFMLENBQVcwSyxNQUFuQztBQUNIOzs7Ozs7a0JBR1VzRSwyQiIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGU2ZjRiNWVjMTZkNWViMjUzZmQiLCIndXNlIHN0cmljdCdcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBkZXY6IHdpbmRvdy5sb2NhdGlvbi5oYXNoID09ICcjZGV2Jyxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5jbGFzcyBBbmltYXRpb25zIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnNob3dUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gICAgaW5pdChkYXRhKXtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGRhdGE7XG4gICAgICAgIC8vVGl0bGVcbiAgICAgICAgZG9tRWxlbWVudHMudGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnN0YXRlLnRpdGxlO1xuICAgICAgICB0aGlzLnNob3coKVxuXG4gICAgICAgIGlmKGNvbmZpZy5kZXYpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTcGxhc2hTY3JlZW4uaW5pdCgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbiAgICBzaG93T3BhY2l0eVNjYWxlKGVsZW1lbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfc2hvdycpO1xuICAgICAgICAvL1BhcmEgYWN0aXZhciBlbCBkaXNwbGF5OiBibG9ja1xuICAgICAgICB2YXIgdGVtcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKTtcbiAgICAgICAgdHJhbnNpdGlvbkV2ZW50ICYmIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYW5pbWF0ZScpO1xuICAgIH1cbiAgICBoaWRlT3BhY2l0eVNjYWxlKGVsZW1lbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYW5pbWF0ZScpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG93VGltZW91dCk7XG4gICAgICAgIHRoaXMuc2hvd1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9zaG93Jyk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgICAgIC8vUGFyYSBhY3RpdmFyIGVsIGRpc3BsYXk6IGJsb2NrXG4gICAgICAgIC8vIHZhciB0ZW1wID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIC8vIHZhciB0cmFuc2l0aW9uRXZlbnQgPSB3aGljaFRyYW5zaXRpb25FdmVudCgpO1xuICAgICAgICAvLyB0cmFuc2l0aW9uRXZlbnQgJiYgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FdmVudCwgY2FsbGJhY2spO1xuICAgICAgICAvLyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9hbmltYXRlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25zO1xuXG5mdW5jdGlvbiB3aGljaFRyYW5zaXRpb25FdmVudCgpe1xuICAgIHZhciB0O1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG4gICAgdmFyIHRyYW5zaXRpb25zID0ge1xuICAgICAgJ3RyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcbiAgICAgICdPVHJhbnNpdGlvbic6J29UcmFuc2l0aW9uRW5kJyxcbiAgICAgICdNb3pUcmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXG4gICAgICAnV2Via2l0VHJhbnNpdGlvbic6J3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgfVxuXG4gICAgZm9yKHQgaW4gdHJhbnNpdGlvbnMpe1xuICAgICAgICBpZiggZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25zW3RdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9hbmltYXRpb25zLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMZXNzb25CeUlkKHtsZXNzb25JZCwgbWFpbkRhdGF9KSB7XG4gICAgbGV0IHNlbGVjdGVkTGVzc29uID0gZmFsc2U7XG4gICAgbWFpbkRhdGEudW5pdHMuZm9yRWFjaCh1bml0ID0+IHsgIFxuICAgICAgICB1bml0LnN1YnVuaXRzLmZvckVhY2gobGVzc29uID0+IHtcbiAgICAgICAgICAgIGlmKGxlc3Nvbi5pZCoxID09IGxlc3NvbklkKXtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExlc3NvbiA9IGxlc3NvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0ZWRMZXNzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNvdXJjZUJ5SWQoe3Jlc291cmNlSWQsIG1haW5EYXRhfSkge1xuICAgIGxldCBzZWxlY3RlZFJlc291cmNlID0gZmFsc2U7XG4gICAgbWFpbkRhdGEudW5pdHMuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgdW5pdC5yZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiB7XG4gICAgICAgICAgICBpZihyZXNvdXJjZS5pZCA9PSByZXNvdXJjZUlkKXtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJlc291cmNlID0gcmVzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkUmVzb3VyY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNvdXJjZVR5cGUocmVzb3VyY2UpIHtcbiAgICBsZXQgc2VsZWN0ZWRUeXBlID0gcmVzb3VyY2UudHlwZTtcbiAgICBpZihzZWxlY3RlZFR5cGUgPT0gJ2FjdGl2aWRhZCcpe1xuICAgICAgICBjb25zdCB0YWcgPSByZXNvdXJjZS50YWc7XG4gICAgICAgIGlmKHRhZyl7XG4gICAgICAgICAgICAvL1NpIGVzIHRhZ3MgZXMgdW4gYXJyYXkgbyBzdHJpbmdcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0YWcgIT0gJ3N0cmluZycpe1xuICAgICAgICAgICAgICAgIGlmKHRhZy5pbmRleE9mKCdpbnRlcmFjdGl2ZScpPj0wKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUeXBlID0gJ2FjdGl2aWRhZC1pbnRlcmFjdGl2ZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKHRhZy5zZWFyY2goJ2ludGVyYWN0aXZlJyk+PTApe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVHlwZSA9ICdhY3RpdmlkYWQtaW50ZXJhY3RpdmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFR5cGU7XG59XG5cbmV4cG9ydCBjbGFzcyBBc3BlY1JhdGlvQm9keUNsYXNzIHtcbiAgIFxuICAgIGluaXQoZWxlbWVudCwgY2FsbGJhY2spe1xuICAgICAgICB2YXIgdXNlZF9lbGVtZW50ID0gZWxlbWVudCB8fCBkb2N1bWVudDtcbiAgICAgICAgdGhpcy5jaGVjayh1c2VkX2VsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgX3RoaXMuY2hlY2sodXNlZF9lbGVtZW50LCBjYWxsYmFjaylcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoZWNrKHVzZWRfZWxlbWVudCwgY2FsbGJhY2spe1xuICAgICAgICB2YXIgZGlzcGxheVN0eWxlO1xuICAgICAgICBpZih1c2VkX2VsZW1lbnQgIT0gZG9jdW1lbnQpe1xuICAgICAgICAgICAgZGlzcGxheVN0eWxlID0gJCh1c2VkX2VsZW1lbnQgKyAnPionKS5jc3MoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICQodXNlZF9lbGVtZW50ICsgJz4qJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeD0kKHVzZWRfZWxlbWVudCkub3V0ZXJXaWR0aCgpLFxuICAgICAgICB5PSQodXNlZF9lbGVtZW50KS5vdXRlckhlaWdodCgpO1xuICAgICAgICBpZih1c2VkX2VsZW1lbnQgIT0gZG9jdW1lbnQpe1xuICAgICAgICAgICAgJCh1c2VkX2VsZW1lbnQgKyAnPionKS5jc3MoJ2Rpc3BsYXknLCBkaXNwbGF5U3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbGVtZW5kVG9DbGFzcyA9IHVzZWRfZWxlbWVudCA9PSBkb2N1bWVudCA/ICdib2R5JyA6IHVzZWRfZWxlbWVudDtcbiAgICAgICAgaWYoeDx5KXtcbiAgICAgICAgICAgICQoZWxlbWVuZFRvQ2xhc3MpLmFkZENsYXNzKCdvdXB0ZGwtcG9ydHJhaXQnKS5yZW1vdmVDbGFzcygnb3VwdGRsLWxhbmRzY2FwZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChlbGVtZW5kVG9DbGFzcykucmVtb3ZlQ2xhc3MoJ291cHRkbC1wb3J0cmFpdCcpLmFkZENsYXNzKCdvdXB0ZGwtbGFuZHNjYXBlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9oZWxwZXJzLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCByZXNwb25zaXZlU3RhdHVzIGZyb20gJy4vcmVzcG9uc2l2ZVN0YXR1cyc7XG5cbmNsYXNzIFNsaWRlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVsZW1lbnRzOiBbXSxcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrQWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6IG51bGwsXG4gICAgICAgICAgICBlbGVtZW50TWluV2lkdGg6IHtcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDAsXG4gICAgICAgICAgICAgICAgdGFibGV0OiAwLFxuICAgICAgICAgICAgICAgIGRlc2t0b3A6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxlbWVudE1pbkhlaWdodDoge1xuICAgICAgICAgICAgICAgIG1vYmlsZTogMCxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDAsXG4gICAgICAgICAgICAgICAgZGVza3RvcDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzbGlkZXJDdXJyZW50UGFnZTogMCxcbiAgICAgICAgICAgIHJhbmRvbUlkOiAnJyxcbiAgICAgICAgICAgIHJlc2l6ZVN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2xpY2tTdGFydGVkOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpbml0KHByb3BzKXtcbiAgICAgICAgdmFyIHsgb25FbGVtZW50Q2xpY2tBY3Rpb24sIGVsZW1lbnRzLCBjb250YWluZXJTZWxlY3RvciwgZWxlbWVudE1pbldpZHRoLCBlbGVtZW50TWluSGVpZ2h0IH0gPSBwcm9wcztcbiAgICAgICAgLy9UaXRsZVxuICAgICAgICB0aGlzLnN0YXRlLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgICAgIHRoaXMuc3RhdGUub25FbGVtZW50Q2xpY2tBY3Rpb24gPSBvbkVsZW1lbnRDbGlja0FjdGlvbjtcbiAgICAgICAgdGhpcy5zdGF0ZS5jb250YWluZXJTZWxlY3RvciA9IGNvbnRhaW5lclNlbGVjdG9yO1xuICAgICAgICB0aGlzLnN0YXRlLmVsZW1lbnRNaW5XaWR0aCA9IGVsZW1lbnRNaW5XaWR0aDtcbiAgICAgICAgdGhpcy5zdGF0ZS5lbGVtZW50TWluSGVpZ2h0ID0gZWxlbWVudE1pbkhlaWdodDtcblxuICAgICAgICBpZihjb25maWcuZGV2KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2xpZGVyLmluaXQoKVwiKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5yYW5kb21JZCA9ICdpZF8nICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjk5OTk5KTtcbiAgICAgICAgJChjb250YWluZXJTZWxlY3RvcikuYWRkQ2xhc3MoJ291cF9zbGlkZXInKS5odG1sKGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfc2xpZGVyX19jb250ZW50X2FuZF9kb3RzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5zdGF0ZS5yYW5kb21JZH1fX2NvbnRlbnRcIiBjbGFzcz1cIm91cF9zbGlkZXJfX2NvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3NsaWRlcl9fZG90c1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3NsaWRlcl9fYXJyb3dzXCI+PC9kaXY+XG4gICAgICAgIGApO1xuICAgICAgICBpZighdGhpcy5zdGF0ZS5yZXNpemVTdGFydGVkKXtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucmVzaXplU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKHRoaXMuZWxlbWVudHNSZWZyZXNoLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3coKXtcbiAgICAgICAgLy8gc2V0VGltZW91dCh0aGlzLmVsZW1lbnRzUmVmcmVzaC5iaW5kKHRoaXMpLCAwKTtcbiAgICAgICAgdGhpcy5lbGVtZW50c1JlZnJlc2goKTtcbiAgICB9XG4gICAgXG4gICAgZWxlbWVudHNSZWZyZXNoKCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNsaWRlci5lbGVtZW50c1JlZnJlc2goKVwiKVxuICAgICAgICB2YXIgJHNsaWRlciA9ICQoJyMnICsgdGhpcy5zdGF0ZS5yYW5kb21JZCArICdfX2NvbnRlbnQnKTsgLy8kKHRoaXMuc3RhdGUuY29udGFpbmVyU2VsZWN0b3IgKyAnIC5vdXBfc2xpZGVyX19jb250ZW50Jyk7XG4gICAgICAgIC8vRGVzdHJveVxuICAgICAgICBpZigkc2xpZGVyLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKXtcbiAgICAgICAgICAgICRzbGlkZXIuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgfVxuICAgICAgICAkc2xpZGVyLmh0bWwoJycpO1xuICAgICAgICAkc2xpZGVyLmNzcygnaGVpZ2h0JywgKCQodGhpcy5zdGF0ZS5jb250YWluZXJTZWxlY3RvcikuZmluZCgnLm91cF9zbGlkZXJfX2NvbnRlbnRfYW5kX2RvdHMnKS5oZWlnaHQoKSAtICQodGhpcy5zdGF0ZS5jb250YWluZXJTZWxlY3RvcikuZmluZCgnLm91cF9zbGlkZXJfX2RvdHMnKS5oZWlnaHQoKSkgKyAncHgnKTtcbiAgICAgICAgdmFyIGNvbHMgPSBNYXRoLmZsb29yKCRzbGlkZXIud2lkdGgoKSAvIHRoaXMuc3RhdGUuZWxlbWVudE1pbldpZHRoW3Jlc3BvbnNpdmVTdGF0dXMoKV0pIHx8IDE7XG4gICAgICAgIHRoaXMuc3RhdGUuZWxlbWVudFdpZHRoID0gTWF0aC5mbG9vcigkc2xpZGVyLndpZHRoKCkgLyBjb2xzKTtcbiAgICAgICAgdmFyIHJvd3MgPSBNYXRoLmZsb29yKCRzbGlkZXIuaGVpZ2h0KCkgLyB0aGlzLnN0YXRlLmVsZW1lbnRNaW5IZWlnaHRbcmVzcG9uc2l2ZVN0YXR1cygpXSkgfHwgMTtcbiAgICAgICAgdGhpcy5zdGF0ZS5lbGVtZW50SGVpZ2h0ID0gTWF0aC5mbG9vcigkc2xpZGVyLmhlaWdodCgpIC8gcm93cyk7XG4gICAgICAgIFxuICAgICAgICB2YXIgZWxlbWVudHNQZXJQYWdlID0gY29scypyb3dzO1xuICAgICAgICB2YXIgcGFnZXNOdW1iZXIgPSBNYXRoLmNlaWwodGhpcy5zdGF0ZS5lbGVtZW50cy5sZW5ndGggLyBlbGVtZW50c1BlclBhZ2UpO1xuICAgICAgICAvLyBpZihjb25maWcuZGV2KXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiU2xpZGVyIGNhbGN1bGF0aW9uczpcIik7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNpdmVTdGF0dXM6IFwiLCByZXNwb25zaXZlU3RhdHVzKCkpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJyb3dzXCIsIHJvd3MpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjb2xzXCIsIGNvbHMpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0aGlzLnN0YXRlLmVsZW1lbnRIZWlnaHRcIiwgdGhpcy5zdGF0ZS5lbGVtZW50SGVpZ2h0W3Jlc3BvbnNpdmVTdGF0dXMoKV0pO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJlbGVtZW50c1BlclBhZ2VcIiwgZWxlbWVudHNQZXJQYWdlKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwidGhpcy5zdGF0ZS5lbGVtZW50cy5sZW5ndGhcIiwgdGhpcy5zdGF0ZS5lbGVtZW50cy5sZW5ndGgpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJwYWdlc051bWJlclwiLCBwYWdlc051bWJlcik7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiRzbGlkZXIuaGVpZ2h0KCkgLyByb3dzXCIsICRzbGlkZXIuaGVpZ2h0KCkgKycvJyArIHJvd3MsICRzbGlkZXIuaGVpZ2h0KCkgLyByb3dzKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicm93cyAqIHRoaXMuc3RhdGUuZWxlbWVudEhlaWdodFwiLCByb3dzICsnKicrIHRoaXMuc3RhdGUuZWxlbWVudEhlaWdodFtyZXNwb25zaXZlU3RhdHVzKCldLCByb3dzICogdGhpcy5zdGF0ZS5lbGVtZW50SGVpZ2h0W3Jlc3BvbnNpdmVTdGF0dXMoKV0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICB2YXIgaHRtbFN0cmluZyA9ICcnO1xuICAgICAgICBmb3IgKGxldCBwYWdlID0gMDsgcGFnZSA8IHBhZ2VzTnVtYmVyOyBwYWdlKyspIHtcbiAgICAgICAgICAgIHZhciBwYWdlSHRtbFN0cmluZyA9ICc8ZGl2IGNsYXNzPVwib3VwX19zbGlkZXJfX3NsaWRlXCI+JztcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50c1BlclBhZ2U7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmVsZW1lbnRzW3BhZ2UgKiBlbGVtZW50c1BlclBhZ2UgKyBpbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICBwYWdlSHRtbFN0cmluZyArPSB0aGlzLnN0YXRlLmVsZW1lbnRzW3BhZ2UgKiBlbGVtZW50c1BlclBhZ2UgKyBpbmRleF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9wYWdlSHRtbFN0cmluZyArPSBgPGRpdiBjbGFzcz1cIm91cF9fc2xpZGVyX19zbGlkZV9faXRlbS0tbm9fY29udGVudFwiPjwvZGl2PmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFnZUh0bWxTdHJpbmcgKz0gJzwvZGl2Pic7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYWdlSHRtbFN0cmluZyk7XG4gICAgICAgICAgICBodG1sU3RyaW5nICs9IHBhZ2VIdG1sU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgICRzbGlkZXIuaHRtbChodG1sU3RyaW5nKTtcbiAgICAgICAgJHNsaWRlci5maW5kKCcub3VwX19zbGlkZXJfX3NsaWRlJykuY2hpbGRyZW4oKS5jbGljaygoZWxlbWVudCkgPT4gdGhpcy5zdGF0ZS5vbkVsZW1lbnRDbGlja0FjdGlvbihlbGVtZW50KSk7XG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLnNsaWNrU3RhcnRlZCl7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNsaWNrU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAkc2xpZGVyLm9uKCdpbml0JywgdGhpcy5lbGVtZW50c1Jlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAkc2xpZGVyLm9uKCdhZnRlckNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGlkZXIsIGN1cnJlbnRTbGlkZSl7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhdGUuc2xpZGVyQ3VycmVudFBhZ2UgPSBjdXJyZW50U2xpZGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIGN1cnJlbnRTbGlkZSA9IHRoaXMuc3RhdGUuc2xpZGVyQ3VycmVudFBhZ2UgPCBwYWdlc051bWJlciA/IHRoaXMuc3RhdGUuc2xpZGVyQ3VycmVudFBhZ2UgOiBwYWdlc051bWJlci0xO1xuICAgICAgICAkc2xpZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGFwcGVuZEFycm93czogdGhpcy5zdGF0ZS5jb250YWluZXJTZWxlY3RvciArICcgLm91cF9zbGlkZXJfX2Fycm93cycsXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwib3VwX3NsaWRlcl9fYXJyb3cgb3VwX3NsaWRlcl9fYXJyb3ctLWxlZnRcIj48L2Rpdj4nLFxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cIm91cF9zbGlkZXJfX2Fycm93IG91cF9zbGlkZXJfX2Fycm93LS1yaWdodFwiPjwvZGl2PicsXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXBwZW5kRG90czogdGhpcy5zdGF0ZS5jb250YWluZXJTZWxlY3RvciArICcgLm91cF9zbGlkZXJfX2RvdHMnLFxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiBjdXJyZW50U2xpZGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbGVtZW50c1Jlc2l6ZSgpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTbGlkZXIuZWxlbWVudHNSZXNpemUoKVwiKVxuICAgICAgICAkKCcjJyArIHRoaXMuc3RhdGUucmFuZG9tSWQgKyAnX19jb250ZW50IC5vdXBfX3NsaWRlcl9fc2xpZGUnKS5jaGlsZHJlbigpLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5lbGVtZW50V2lkdGggKyAncHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmVsZW1lbnRIZWlnaHQgKyAncHgnLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvc2xpZGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MnO1xuaW1wb3J0IE91cFRkbCBmcm9tICcuL2Fzc2V0cy9qcy9tYWluJztcbmNvbnN0IG91cFRkbEFwcCA9IG5ldyBPdXBUZGw7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBzaG93TG9hZGluZzogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBvdXBUZGxBcHAuc2hvd0xvYWRpbmcoKTtcbiAgICAvLyB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIG91cFRkbEFwcC5pbml0KGRhdGEpO1xuICAgIH1cbn07XG5cbi8vTXVlc3RyYSBlbCBsb2FkaW5nIHNpIG5vIGVzIHVuIGxpYnJvXG5pZih3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdlZGl0YXI9MScpID09IC0xKSB7XG4gICAgZG9jdW1lbnQud3JpdGUoJzxkaXYgaWQ9XCJvdXBfdGRsX2xvYWRpbmdfc2NyZWVuLS1iYXNpY1wiPjwvZGl2PicpO1xufVxuXG4vL2NvbnNvbGUubG9nKFwidXBkYXRlXzI2XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgZ2V0TGVzc29uQnlJZCwgZ2V0UmVzb3VyY2VCeUlkLCBnZXRSZXNvdXJjZVR5cGUgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IFVybEhlbHBlciBmcm9tICcuL3VybEhlbHBlcic7XG4vLyBpbXBvcnQgbG9hZERhdGEgZnJvbSAnLi9sb2FkRGF0YSc7XG5cbi8vUGFudGFsbGFzXG4vL2ltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gJy4vX2xvYWRpbmdTY3JlZW4nO1xuaW1wb3J0IFNwbGFzaFNjcmVlbiBmcm9tICcuL19zcGxhc2hTY3JlZW4nO1xuaW1wb3J0IFVuaXRNZW51U2NyZWVuIGZyb20gJy4vX3VuaXRNZW51U2NyZWVuJztcbmltcG9ydCBMZXNzb25NZW51U2NyZWVuIGZyb20gJy4vX2xlc3Nvbk1lbnVTY3JlZW4nO1xuaW1wb3J0IFBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4gZnJvbSAnLi9fcGx1c1pvbmVDYXRlZ29yaWVzTWVudSc7XG5pbXBvcnQgUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuIGZyb20gJy4vX3BsdXNab25lUmVzb3VyY2VzTWVudSc7XG5cbmNsYXNzIE91cFRkbCB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1haW5EYXRhOiB7fSxcblx0XHRcdHNwbGFzaEJhY2tncm91bmQ6ICcnLFxuXHRcdFx0dW5pdE1lbnVCYWtncm91bmQ6ICcnLFxuXHRcdFx0bGVzc29uTWVudUJha2dyb3VuZDogJycsXG5cdFx0XHRwbHVzQ29uZUNhdGVnb3JpZXNCYWtncm91bmQ6ICcnLFxuXHRcdFx0cGx1c1pvbmVSZXNvdXJjZXNCYWtncm91bmQ6ICcnLFxuXHRcdH07XG5cdFx0dGhpcy5zY3JlZW5zID0ge307XG5cdH1cblx0XG5cdGluaXQoZGF0YSl7XG5cdFx0aWYoY29uZmlnLmRldil7XG5cdFx0XHRjb25zb2xlLmxvZygnRGF0b3MgQ2FyZ2Fkb3M6JywgZGF0YSk7XG5cdFx0XHRjb25zb2xlLmxvZygnVW5pdCAxOicsIGRhdGEudW5pdHNbMF0pO1xuXHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdH1cblx0XHQvL1F1aXRhbW9zIGxhIHByaW1lcmEgdW5pZGFkLCB5IGRlIGFow60gdG9tYW1vcyBsYSBwcmltZXJhIGltYWdlblxuXHRcdC8vTWlyYSBzaSBsYSBhY3RpdmlkYWQgYWN0dWFsIGVzIGxhIHByaW1lcmEgYW50ZXMgZGUgbGFuemFyIGVsIG1lbsO6XG5cdFx0aWYoaWRjbGFzZT09ZGF0YS51bml0c1swXS5zdWJ1bml0c1swXS5pZCl7XG5cdFx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0XHRjb25zb2xlLmxvZygnRXMgbGEgYWN0aXZpZGFkIFBvcnRhZGEnKTtcblx0XHRcdC8vTWlyYSBsb3MgZm9uZG9zXG5cdFx0XHRpZihkYXRhLnVuaXRzWzBdKXtcblx0XHRcdFx0aWYoZGF0YS51bml0c1swXS5pbWFnZSl7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5zcGxhc2hCYWNrZ3JvdW5kID0gZGF0YS51bml0c1swXS5pbWFnZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBcblx0XHRcdGlmKGRhdGEudW5pdHNbMF0uc3VidW5pdHMubGVuZ3RoPj0xKXtcblx0XHRcdFx0aWYoZGF0YS51bml0c1swXS5zdWJ1bml0c1swXS5pbWFnZSl7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS51bml0TWVudUJha2dyb3VuZCA9IGRhdGEudW5pdHNbMF0uc3VidW5pdHNbMF0uaW1hZ2U7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5sZXNzb25NZW51QmFrZ3JvdW5kID0gdGhpcy5zdGF0ZS51bml0TWVudUJha2dyb3VuZDtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLnBsdXNDb25lQ2F0ZWdvcmllc0Jha2dyb3VuZCA9IHRoaXMuc3RhdGUudW5pdE1lbnVCYWtncm91bmQ7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5wbHVzWm9uZVJlc291cmNlc0Jha2dyb3VuZCA9IHRoaXMuc3RhdGUudW5pdE1lbnVCYWtncm91bmQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vQm9yYSBsYSBwcmltZXJhIHVuaWRhZFxuXHRcdFx0ZGF0YS51bml0cy5zaGlmdCgpO1xuXHRcdFx0Ly9haG9yYSBhbGltaW5hbW9zIGxhcyBzdWJ1bmlkYWRlcyBxdWUgc29sbyBzZWFuIHZpc2libGUgcGFyYSBlbCBwcm9mZXNvciwgc2kgZWwgdXN1YXJpbyBubyBlcyBwcm9mZXNvclxuXHRcdFx0aWYodHlwZW9mIGJsaW5rID09ICdvYmplY3QnKXtcblx0XHRcdFx0aWYoIWJsaW5rLnVzZXIuZXNQcm9mZXNvcigpKXtcblx0XHRcdFx0XHRkYXRhLnVuaXRzLmZvckVhY2godW5pdCA9PiB7XG5cdFx0XHRcdFx0XHR2YXIgaSA9IHVuaXQuc3VidW5pdHMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHRcdFx0XHRpZiAodW5pdC5zdWJ1bml0c1tpXS5vbmx5VmlzaWJsZVRlYWNoZXJzKSB7IFxuXHRcdFx0XHRcdFx0XHRcdHVuaXQuc3VidW5pdHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aSA9IHVuaXQucmVzb3VyY2VzLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0XHRcdFx0aWYgKHVuaXQucmVzb3VyY2VzW2ldLm9ubHlWaXNpYmxlVGVhY2hlcnMpIHsgXG5cdFx0XHRcdFx0XHRcdFx0dW5pdC5yZXNvdXJjZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUubWFpbkRhdGEgPSBkYXRhO1xuXHRcdFx0dGhpcy5pbml0TWVudSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0XHRjb25zb2xlLmxvZygnTk8gZXMgbGEgYWN0aXZpZGFkIFBvcnRhZGEnKTtcblx0XHRcdC8vVnVlbHZlIGEgYWN0aXZhciBlbCBjb250ZW5pZG9cblx0XHR9XG5cdFx0Ly9Cb3JyYSBsb2FkaW5nXG5cdFx0JCgnI291cF90ZGxfbG9hZGluZ19zY3JlZW4tLWJhc2ljJykucmVtb3ZlKCk7XG5cdH1cblx0aW5pdE1lbnUoKXtcblxuXHRcdGxldCBveGZvcmRCdXR0b25zSHRtbCA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iX19vdXBfYnV0dG9uc1wiPlxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL2luaWNpYS5vdXBlLmVzL3NlcnZpY2lvc1wiIGNsYXNzPVwib3VwX2J1dHRvbnMtLW51YmUgb3VwdGRsX2V4dGVybmFsX2xpbmtcIj48L2E+YDtcblx0XHRpZih0eXBlb2YgYmxpbmsgPT0gJ29iamVjdCcpe1xuXHRcdFx0aWYoYmxpbmsudXNlci5lc1Byb2Zlc29yKCkpe1xuXHRcdFx0XHRveGZvcmRCdXR0b25zSHRtbCArPSBgPGEgaHJlZj1cImh0dHA6Ly9pbmljaWEub3VwZS5lcy9vcHJlbWl1bVwiIGNsYXNzPVwib3VwX2J1dHRvbnMtLXByZW1pdW0gb3VwdGRsX2V4dGVybmFsX2xpbmtcIj48L2E+YDtcblx0XHRcdH1cblx0XHR9XG5cdFx0b3hmb3JkQnV0dG9uc0h0bWwgKz0gYDwvZGl2PmA7XG5cdFx0XHRcblxuXHRcdGNvbnN0IGh0bWxET00gPSBgXG5cdFx0XHQ8ZGl2IGlkPVwib3VwX3RkbF9jb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBpZD1cIm91cF90ZGxfc3BsYXNoX3NjcmVlblwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5zdGF0ZS5zcGxhc2hCYWNrZ3JvdW5kfSlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3NwbGFzaF9fbG9nb19vdXBcIj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3NwbGFzaF9fbG9nb190ZGxcIj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3NwbGFzaF9fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzPVwib3VwX3NwbGFzaF9fbWFpbl90aXRsZVwiPjwvaDE+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3NwbGFzaF9fZW50ZXJcIj48c3Bhbj5FbnRlcjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3NwbGFzaF9fZm9vdGVyXCI+wqkgT3hmb3JkIFVuaXZlcnNpdHkgUHJlc3M8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBpZD1cIm91cF90ZGxfdW5pdF9tZW51X3NjcmVlblwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5zdGF0ZS51bml0TWVudUJha2dyb3VuZH0pXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF91bml0X21lbnVfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iX19iYWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzcz1cIm91cF91bml0X21lbnVfX21haW5fdGl0bGVcIj48L2gyPlxuXHRcdFx0XHRcdFx0XHQke294Zm9yZEJ1dHRvbnNIdG1sfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3VuaXRfbWVudV9fdW5pdF9zbGlkZXJfY29udGFpbmVyXCI+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgaWQ9XCJvdXBfdGRsX2xlc3Nvbl9tZW51X3NjcmVlblwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5zdGF0ZS5sZXNzb25NZW51QmFrZ3JvdW5kfSlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iX19iYWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfbGVzc29uX21lbnVfX21haW5fdGl0bGUgb3VwX3RkbF9fYnJlYWRjcnVtYl9fbGV2ZWwxXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+PC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQke294Zm9yZEJ1dHRvbnNIdG1sfVxuXHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfbGVzc29uX21lbnVfX2xlc3Nvbl9zbGlkZXJfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgaWQ9XCJvdXBfdGRsX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfc2NyZWVuXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt0aGlzLnN0YXRlLnBsdXNDb25lQ2F0ZWdvcmllc0Jha2dyb3VuZH0pXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iX19iYWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fbWFpbl90aXRsZSBvdXBfdGRsX19icmVhZGNydW1iX19sZXZlbDFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz48L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iX19sZXZlbDJcIj5QbHVzWm9uZTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQke294Zm9yZEJ1dHRvbnNIdG1sfVxuXHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgaWQ9XCJvdXBfdGRsX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9zY3JlZW5cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3RoaXMuc3RhdGUucGx1c1pvbmVSZXNvdXJjZXNCYWtncm91bmR9KVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iX19iYWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19tYWluX3RpdGxlIG91cF90ZGxfX2JyZWFkY3J1bWJfX2xldmVsMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPjwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJfX2xldmVsMlwiPlBsdXNab25lPC9kaXY+XG5cdFx0XHRcdFx0XHRcdCR7b3hmb3JkQnV0dG9uc0h0bWx9XG5cdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX3Jlc291cmNlX3NsaWRlcl9jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXHRcdFxuXHRcdCQoJ2JvZHknKS5hcHBlbmQoIGh0bWxET00gKTtcblxuXHRcdC8vQ2hlY2sgaWYgaXMgZGVza3RvcFxuXHRcdGlmKHR5cGVvZiBibGluayA9PSAnb2JqZWN0Jyl7XG5cdFx0XHRpZighYmxpbmsuaXNBcHAgfHwgYmxpbmsuaXNPZmZsaW5lUEMpe1xuXHRcdFx0XHQvL0FjdGl2YXRlIGJhciBob2xlIGlmIGlzIG5vdCBBcHBcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291cF90ZGxfY29udGFpbmVyJykuc3R5bGUuYm90dG9tID0gJzQ0cHgnO1xuXHRcdFx0XHQvL1JlbW92ZSB1c2VsZXNzIGJ1dHRvbnMgb2YgbmF2YmFyXG5cdFx0XHRcdC8vJCgnLm5hdmJhciAjYm90b25fcmVpbmljaWFyLCAubmF2YmFyICNib3Rvbl9yb3R1bGFkb3IsIC5uYXZiYXIgI2JvdG9uX3N1YnJheWFkb3IsIC5uYXZiYXIgI2JvdG9uX2JvcnJhZG9yLCAubmF2YmFyICNib3Rvbl9ub3RlcywgLm5hdmJhciAjYm90b25fYnVzY2FyLCAubmF2YmFyICNlbnRlci1lZGl0LW1vZGUnKS5yZW1vdmUoKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0XHR0aGlzLnNjcmVlbnMgPSB7XG5cdFx0XHQvL2xvYWRpbmdTY3JlZW46IG5ldyBMb2FkaW5nU2NyZWVuLFxuXHRcdFx0c3BsYXNoU2NyZWVuOiBuZXcgU3BsYXNoU2NyZWVuLFxuXHRcdFx0dW5pdE1lbnVTY3JlZW46IG5ldyBVbml0TWVudVNjcmVlbixcblx0XHRcdGxlc3Nvbk1lbnVTY3JlZW46IG5ldyBMZXNzb25NZW51U2NyZWVuLFxuXHRcdFx0cGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbjogbmV3IFBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4sXG5cdFx0XHRwbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW46IG5ldyBQbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4sXG5cdFx0fSBcblxuXHRcdHRoaXMudXJsSGVscGVyID0gbmV3IFVybEhlbHBlcjtcblx0XHRcblxuXHRcdC8vdGhpcy5zY3JlZW5zLmxvYWRpbmdTY3JlZW4udXBkYXRlKHRoaXMuc3RhdGUubG9hZGluZyk7XG5cdFx0dGhpcy5zY3JlZW5zLnNwbGFzaFNjcmVlbi5pbml0KHtcblx0XHRcdHRpdGxlOiB0aGlzLnN0YXRlLm1haW5EYXRhLnRpdGxlLFxuXHRcdFx0Ly8gb25FbnRlckFjdGlvbjogdGhpcy5nb1RvVW5pdE1lbnUuYmluZCh0aGlzKSxcblx0XHRcdG9uRW50ZXJBY3Rpb246ICgpID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRzdGF0ZU5hbWU6ICd1bml0bWVudScsXG5cdFx0XHR9KSxcblx0XHRcdFxuXHRcdH0pO1xuXHRcdHRoaXMuc2NyZWVucy51bml0TWVudVNjcmVlbi5pbml0KHtcblx0XHRcdHRpdGxlOiB0aGlzLnN0YXRlLm1haW5EYXRhLnRpdGxlLFxuXHRcdFx0dW5pdHM6IHRoaXMuc3RhdGUubWFpbkRhdGEudW5pdHMsXG5cdFx0XHQvLyBvblVuaXRBY3Rpb246ICh1bml0KSA9PiB0aGlzLmdvVG9MZXNzb25NZW51KHVuaXQpLFxuXHRcdFx0b25Vbml0QWN0aW9uOiAodW5pdCkgPT4gdGhpcy51cmxIZWxwZXIudXBkYXRlVXJsSGFzaCh7XG5cdFx0XHRcdHN0YXRlTmFtZTogJ3VuaXQnLFxuXHRcdFx0XHR1bml0XG5cdFx0XHR9KSxcblx0XHRcdC8vIG9uQmFja0FjdGlvbjogdGhpcy5nb1RvU3BsYXNoLmJpbmQodGhpcyksXG5cdFx0XHRvbkJhY2tBY3Rpb246ICh1bml0KSA9PiB0aGlzLnVybEhlbHBlci51cGRhdGVVcmxIYXNoKHtcblx0XHRcdFx0c3RhdGVOYW1lOiAnc3BsYXNoJyxcblx0XHRcdH0pLFxuXHRcdH0pO1xuXHRcdHRoaXMuc2NyZWVucy5sZXNzb25NZW51U2NyZWVuLmluaXQoKTtcblx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5pbml0KCk7XG5cdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5pbml0KCk7XG5cdFx0XG5cdFx0Ly9Bw7FhZGUgbGEgZnVuY2lvbiBvcGVuVVJMIGEgbG9zIGVubGFjZXMgZGUgT3hmb3JkXG5cdFx0JCgnYS5vdXB0ZGxfZXh0ZXJuYWxfbGluaycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0YmxpbmsucmVzdC5vcGVuVXJsKCd2aWV3ZXInLCQodGhpcykucHJvcCgnaHJlZicpLDApO1xuXHRcdH0pXG5cblx0XHR0aGlzLnVybEhlbHBlci5pbml0KHtcblx0XHRcdGdvVG9TcGxhc2g6IHRoaXMuZ29Ub1NwbGFzaC5iaW5kKHRoaXMpLFxuXHRcdFx0Z29Ub1VuaXRNZW51OiB0aGlzLmdvVG9Vbml0TWVudS5iaW5kKHRoaXMpLFxuXHRcdFx0Z29Ub0xlc3Nvbk1lbnU6IHRoaXMuZ29Ub0xlc3Nvbk1lbnUuYmluZCh0aGlzKSxcblx0XHRcdGdvVG9QbHVzWm9uZUNhdGVnb3JpZXNNZW51OiB0aGlzLmdvVG9QbHVzWm9uZUNhdGVnb3JpZXNNZW51LmJpbmQodGhpcyksXG5cdFx0XHRnb1RvUGx1c1pvbmVSZXNvdXJjZXNNZW51OiB0aGlzLmdvVG9QbHVzWm9uZVJlc291cmNlc01lbnUuYmluZCh0aGlzKSxcblxuXHRcdH0pO1xuXHR9XG5cdGdvVG9TcGxhc2goKXtcblx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0Y29uc29sZS5sb2coJ091cFRkbC5nb1RvU3BsYXNoKCknKTtcblx0XHR0aGlzLnNjcmVlbnMubGVzc29uTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0dGhpcy5zY3JlZW5zLnVuaXRNZW51U2NyZWVuLmhpZGUoKTtcblx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0dGhpcy5zY3JlZW5zLnNwbGFzaFNjcmVlbi5zaG93KCk7XG5cdH1cblx0Z29Ub1VuaXRNZW51KCl7XG5cdFx0aWYoY29uZmlnLmRldilcblx0XHRcdGNvbnNvbGUubG9nKCdPdXBUZGwuZ29Ub1VuaXRNZW51KCknKTtcblx0XHR0aGlzLnNjcmVlbnMubGVzc29uTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdHRoaXMuc2NyZWVucy5wbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdHRoaXMuc2NyZWVucy5zcGxhc2hTY3JlZW4uaGlkZSgpO1xuXHRcdHRoaXMuc2NyZWVucy51bml0TWVudVNjcmVlbi5zaG93KCk7XG5cdH1cblx0Z29Ub0xlc3Nvbk1lbnUodW5pdE51bWJlcil7XG5cdFx0aWYoY29uZmlnLmRldilcblx0XHRcdGNvbnNvbGUubG9nKCdPdXBUZGwuZ29Ub0xlc3Nvbk1lbnUoKScsIHVuaXROdW1iZXIpO1xuXHRcdGxldCBzZWxlY3RlZFVuaXQ7XG5cdFx0dGhpcy5zdGF0ZS5tYWluRGF0YS51bml0cy5mb3JFYWNoKHVuaXQgPT4ge1xuXHRcdFx0aWYodW5pdC5udW1iZXIgPT0gdW5pdE51bWJlcil7XG5cdFx0XHRcdHNlbGVjdGVkVW5pdCA9IHVuaXQ7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9KTtcblx0XHRpZihzZWxlY3RlZFVuaXQpe1xuXHRcdFx0bGV0IHVuaXRUaXRsZSA9IHNlbGVjdGVkVW5pdC50aXRsZTtcblx0XHRcdGxldCBpbWFnZSA9IHNlbGVjdGVkVW5pdC5pbWFnZTtcblx0XHRcdGxldCBsZXNzb25zID0gc2VsZWN0ZWRVbml0LnN1YnVuaXRzO1xuXHRcdFx0bGV0IGhhc0xlc3NvbnMgPSBsZXNzb25zLmxlbmd0aCA+IDA7XG5cdFx0XHRsZXQgaGFzUmVzb3VyY2VzID0gc2VsZWN0ZWRVbml0LnJlc291cmNlcy5sZW5ndGggPiAwO1xuXHRcdFx0Ly8gU2kgbm8gdGllbmUgbGVjY2lvbmVzLCBwZXJvIHPDrSByZWN1cnNvcywgdmEgZGlyZWN0YW1lbnRlIGEgbGEgcGx1c3pvbmVcblx0XHRcdGlmKCFoYXNMZXNzb25zICYmIGhhc1Jlc291cmNlcyl7XG5cdFx0XHRcdHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRcdHN0YXRlTmFtZTogJ3BsdXN6b25lJyxcblx0XHRcdFx0XHR1bml0OiB1bml0TnVtYmVyXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNjcmVlbnMubGVzc29uTWVudVNjcmVlbi51cGRhdGUoe1xuXHRcdFx0XHRcdHRpdGxlOiB1bml0VGl0bGUsXG5cdFx0XHRcdFx0bnVtYmVyOiB1bml0TnVtYmVyLFxuXHRcdFx0XHRcdGltYWdlOiBpbWFnZSxcblx0XHRcdFx0XHRsZXNzb25zOiBsZXNzb25zLFxuXHRcdFx0XHRcdC8vIG9uUGx1c1pvbmVBY3Rpb246ICh1bml0KSA9PiB0aGlzLmdvVG9QbHVzWm9uZUNhdGVnb3JpZXNNZW51KHVuaXQpLFxuXHRcdFx0XHRcdC8vIG9uTGVzc29uQWN0aW9uOiAoZGF0YSkgPT4gdGhpcy5nb1RvTGVzc29uKGRhdGEpLFxuXHRcdFx0XHRcdG9uUGx1c1pvbmVBY3Rpb246ICh1bml0KSA9PiB0aGlzLnVybEhlbHBlci51cGRhdGVVcmxIYXNoKHtcblx0XHRcdFx0XHRcdHN0YXRlTmFtZTogJ3BsdXN6b25lJyxcblx0XHRcdFx0XHRcdHVuaXRcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRvbkxlc3NvbkFjdGlvbjogKGRhdGEpID0+IHRoaXMuZ29Ub0xlc3NvbihkYXRhKSxcblx0XHRcdFx0XHQvLyBvbkJhY2tBY3Rpb246IHRoaXMuZ29Ub1VuaXRNZW51LmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25CYWNrQWN0aW9uOiAoKSA9PiB0aGlzLnVybEhlbHBlci51cGRhdGVVcmxIYXNoKHtcblx0XHRcdFx0XHRcdHN0YXRlTmFtZTogJ3VuaXRtZW51Jyxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRoYXNQbHVzWm9uZTogaGFzUmVzb3VyY2VzLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5zY3JlZW5zLnNwbGFzaFNjcmVlbi5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuc2NyZWVucy51bml0TWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuc2NyZWVucy5sZXNzb25NZW51U2NyZWVuLnNob3coKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Z29Ub0xlc3Nvbih7dW5pdE51bWJlciwgbGVzc29uSWR9KXtcblx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0Y29uc29sZS5sb2coJ091cFRkbC5nb1RvTGVzc29uTWVudSgpJywgdW5pdE51bWJlciwgbGVzc29uSWQpO1xuXHRcdHZhciBzZWxlY3RlZExlc3NvbiA9IG51bGw7XG5cdFx0c2VsZWN0ZWRMZXNzb24gPSBnZXRMZXNzb25CeUlkKHtsZXNzb25JZCwgbWFpbkRhdGE6IHRoaXMuc3RhdGUubWFpbkRhdGF9KTtcblx0XHRpZihzZWxlY3RlZExlc3Nvbil7XG5cdFx0XHRldmFsKHNlbGVjdGVkTGVzc29uLm9uY2xpY2tUaXRsZSk7XG5cdFx0fVxuXHR9XG5cdGdvVG9QbHVzWm9uZUNhdGVnb3JpZXNNZW51KHVuaXROdW1iZXIpe1xuXHRcdGlmKGNvbmZpZy5kZXYpXG5cdFx0XHRjb25zb2xlLmxvZygnT3VwVGRsLmdvVG9QbHVzWm9uZUNhdGVnb3JpZXNNZW51KCknLCB1bml0TnVtYmVyKTtcblx0XHRsZXQgc2VsZWN0ZWRVbml0O1xuXHRcdHRoaXMuc3RhdGUubWFpbkRhdGEudW5pdHMuZm9yRWFjaCh1bml0ID0+IHtcblx0XHRcdGlmKHVuaXQubnVtYmVyID09IHVuaXROdW1iZXIpe1xuXHRcdFx0XHRzZWxlY3RlZFVuaXQgPSB1bml0O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdFxuXHRcdC8vIGJ1c2NhciB0YWcgJ2ludGVyYWN0aXZlJ1xuXHRcdGlmKHNlbGVjdGVkVW5pdCl7XG5cdFx0XHRjb25zdCB1bml0VGl0bGUgPSBzZWxlY3RlZFVuaXQudGl0bGU7XG5cdFx0XHRjb25zdCBpbWFnZSA9IHNlbGVjdGVkVW5pdC5pbWFnZTtcblx0XHRcdGNvbnN0IGhhc0xlc3NvbnMgPSBzZWxlY3RlZFVuaXQuc3VidW5pdHMubGVuZ3RoID4gMDtcblx0XHRcdGNvbnN0IHJlc291cmNlcyA9IHNlbGVjdGVkVW5pdC5yZXNvdXJjZXM7XG5cdFx0XHRsZXQgY2F0ZWdvcmllcyA9IFtdO1xuXHRcdFx0cmVzb3VyY2VzLmZvckVhY2gocmVzb3VyY2UgPT4ge1xuXHRcdFx0XHQvL2V4Y2VwY2lvbiBkZSBjYXRlZ29yaWEgYWN0aXZpZGFkLT5pbnRlcmFjdGl2ZVxuXHRcdFx0XHRsZXQgdHlwZSA9IGdldFJlc291cmNlVHlwZShyZXNvdXJjZSk7XG5cdFx0XHRcdGlmKGNhdGVnb3JpZXMuaW5kZXhPZih0eXBlKTwwKXtcblx0XHRcdFx0XHRjYXRlZ29yaWVzLnB1c2godHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHRsZXQgYmFja0FjdGlvbjtcblx0XHRcdGlmKCFoYXNMZXNzb25zKXtcblx0XHRcdFx0YmFja0FjdGlvbiA9ICgpID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRcdHN0YXRlTmFtZTogJ3VuaXRtZW51Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRiYWNrQWN0aW9uID0gKCkgPT4gdGhpcy51cmxIZWxwZXIudXBkYXRlVXJsSGFzaCh7XG5cdFx0XHRcdFx0c3RhdGVOYW1lOiAndW5pdCcsXG5cdFx0XHRcdFx0dW5pdDogdW5pdE51bWJlclxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4udXBkYXRlKHtcblx0XHRcdFx0dGl0bGU6IHVuaXRUaXRsZSxcblx0XHRcdFx0aW1hZ2U6IGltYWdlLFxuXHRcdFx0XHRudW1iZXI6IHVuaXROdW1iZXIsXG5cdFx0XHRcdGNhdGVnb3JpZXM6IGNhdGVnb3JpZXMsXG5cdFx0XHRcdC8vb25DYXRlZ29yeUFjdGlvbjogKGRhdGEpID0+IHRoaXMuZ29Ub1BsdXNab25lUmVzb3VyY2VzTWVudShkYXRhKSxcblx0XHRcdFx0b25DYXRlZ29yeUFjdGlvbjogKHt1bml0TnVtYmVyLCBjYXRlZ29yeX0pID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRcdHN0YXRlTmFtZTogJ3BsdXNjYXRlZ29yeScsXG5cdFx0XHRcdFx0dW5pdDogdW5pdE51bWJlcixcblx0XHRcdFx0XHRjYXRlZ29yeVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0b25CYWNrQWN0aW9uOiBiYWNrQWN0aW9uLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuc2NyZWVucy5wbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0dGhpcy5zY3JlZW5zLnNwbGFzaFNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMudW5pdE1lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0dGhpcy5zY3JlZW5zLmxlc3Nvbk1lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uc2hvdygpO1xuXHRcdH1cblx0XHQvL0NpZXJyYSBlbCByZXByb2R1Y3RvciBkZSBibGlua1xuXHRcdGlmKGNvbmZpZy5kZXYpXG5cdFx0XHRjb25zb2xlLmxvZygnY2VycmFySWZyYW1lKCknKTtcblx0XHRpZih0eXBlb2YgY2VycmFySWZyYW1lID09ICdmdW5jdGlvbicpe1xuXHRcdFx0Y2VycmFySWZyYW1lKCk7XG5cdFx0fVxuXHR9XG5cdGdvVG9QbHVzWm9uZVJlc291cmNlc01lbnUoe3VuaXROdW1iZXIsIGNhdGVnb3J5fSl7XG5cdFx0aWYoY29uZmlnLmRldilcblx0XHRcdGNvbnNvbGUubG9nKCdPdXBUZGwuZ29Ub1BsdXNab25lUmVzb3VyY2VzTWVudSgpJywgdW5pdE51bWJlciwgY2F0ZWdvcnkpO1xuXHRcdGxldCBzZWxlY3RlZFVuaXQ7XG5cdFx0dGhpcy5zdGF0ZS5tYWluRGF0YS51bml0cy5mb3JFYWNoKHVuaXQgPT4ge1xuXHRcdFx0aWYodW5pdC5udW1iZXIgPT0gdW5pdE51bWJlcil7XG5cdFx0XHRcdHNlbGVjdGVkVW5pdCA9IHVuaXQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZihzZWxlY3RlZFVuaXQpe1xuXHRcdFx0Y29uc3QgdW5pdFRpdGxlID0gc2VsZWN0ZWRVbml0LnRpdGxlO1xuXHRcdFx0Y29uc3QgaW1hZ2UgPSBzZWxlY3RlZFVuaXQuaW1hZ2U7XG5cdFx0XHRsZXQgcmVzb3VyY2VzID0gW107XG5cdFx0XHRzZWxlY3RlZFVuaXQucmVzb3VyY2VzLmZvckVhY2goKHJlc291cmNlKT0+e1xuXHRcdFx0XHRpZihnZXRSZXNvdXJjZVR5cGUocmVzb3VyY2UpID09IGNhdGVnb3J5KXtcblx0XHRcdFx0XHRyZXNvdXJjZXMucHVzaChyZXNvdXJjZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi51cGRhdGUoe1xuXHRcdFx0XHR0aXRsZTogdW5pdFRpdGxlLFxuXHRcdFx0XHRpbWFnZTogaW1hZ2UsXG5cdFx0XHRcdG51bWJlcjogdW5pdE51bWJlcixcblx0XHRcdFx0cmVzb3VyY2VzOiByZXNvdXJjZXMsXG5cdFx0XHRcdG9uUmVzb3VyY2VBY3Rpb246IChkYXRhKSA9PiB0aGlzLmdvVG9QbHVzWm9uZVJlc291cmNlKGRhdGEpLFxuXHRcdFx0XHQvLyBvbkJhY2tBY3Rpb246IChudW1iZXIpID0+IHRoaXMuZ29Ub1BsdXNab25lQ2F0ZWdvcmllc01lbnUobnVtYmVyKSxcblx0XHRcdFx0b25CYWNrQWN0aW9uOiAodW5pdCkgPT4gdGhpcy51cmxIZWxwZXIudXBkYXRlVXJsSGFzaCh7XG5cdFx0XHRcdFx0c3RhdGVOYW1lOiAncGx1c3pvbmUnLFxuXHRcdFx0XHRcdHVuaXRcblx0XHRcdFx0fSksXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5zY3JlZW5zLnNwbGFzaFNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMudW5pdE1lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0dGhpcy5zY3JlZW5zLmxlc3Nvbk1lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5zaG93KCk7XG5cdFx0fVxuXHR9XG5cdGdvVG9QbHVzWm9uZVJlc291cmNlKHt1bml0TnVtYmVyLCByZXNvdXJjZUlkfSl7XG5cdFx0aWYoY29uZmlnLmRldilcblx0XHRcdGNvbnNvbGUubG9nKCdPdXBUZGwuZ29Ub1BsdXNab25lUmVzb3VyY2UoKScsIHVuaXROdW1iZXIsIHJlc291cmNlSWQpO1xuXG5cdFx0bGV0IHNlbGVjdGVkUmVzb3VyY2UgPSBnZXRSZXNvdXJjZUJ5SWQoe3Jlc291cmNlSWQsIG1haW5EYXRhOiB0aGlzLnN0YXRlLm1haW5EYXRhfSk7XG5cdFx0aWYoc2VsZWN0ZWRSZXNvdXJjZSl7XG5cblx0XHRcdC8vQ2llcnJhIGVsIHJlcHJvZHVjdG9yIGRlIGJsaW5rXG5cdFx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0XHRjb25zb2xlLmxvZygnY2VycmFySWZyYW1lKCknKTtcblx0XHRcdGlmKHR5cGVvZiBjZXJyYXJJZnJhbWUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdGNlcnJhcklmcmFtZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvL0VqZWN1dGEgbGEgZnVuY2nDs24gcXVlIHZpZW5lIGVuIGVsIG9iamV0byBkZSBsaWJyb1xuXHRcdFx0ZXZhbChzZWxlY3RlZFJlc291cmNlLm9uY2xpY2tUaXRsZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE91cFRkbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbWFpbi5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG4vL0VzdGEgZnVuY2nDs24gc29sbyBzZSBkZWJlIGVqZWN1dGFyIGFsIGluaWNpb1xuXG5cblxuXG5jbGFzcyBVcmxIZWxwZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudXJsU3RhdGUgPSB7XG4gICAgICAgICAgICBzdGF0ZU5hbWU6ICcnLCAvLyAnc3BsYXNoJywgJ3VuaXRtZW51JywgJ3VuaXQnLCAncGx1c3pvbmUnLCAncGx1c2NhdGVnb3J5J1xuICAgICAgICAgICAgdW5pdDogLTEsXG4gICAgICAgICAgICBjYXRlZ29yeTogJycsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IHt9O1xuICAgICAgICBcbiAgICB9XG5cbiAgICBpbml0KGFjdGlvbnMpe1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcmxIZWxwZXIuaW5pdCgpXCIpO1xuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cub25oYXNoY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5nb1RvU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdvVG9TdGF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVDdXJyZW50U3RhdGUoKSB7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVybEhlbHBlci51cGRhdGVDdXJyZW50U3RhdGUoKVwiKTtcbiAgICAgICAgbGV0IHVybFN0YXRlID0ge307XG4gICAgICAgIGNvbnN0IGhhc2hOYW1lPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgY29uc3QgaGFzaFBhcnRzID0gaGFzaE5hbWUuc3BsaXQoJ18nKTsgLy9QYXJhIGRpdmlkaXIgbGFzIHBhcnRlcyBkZWwgaGFzaFxuICAgICAgICAvL0VsIGhhc2ggcHVlZGUgc2VyXG4gICAgICAgIC8vIFwiI1wiIG8gXCIjXCIgPT4gU3BsYXNoXG4gICAgICAgIC8vIFwiI3VuaXRtZW51XCIgPT4gTWVuw7ogZGUgdW5pZGFkZXNcbiAgICAgICAgLy8gXCIjdW5pdF9YXCIgPT4gVW5pZGFkIFhcbiAgICAgICAgLy8gXCIjcGx1c3pvbmVfWFwiID0+IFBsdXN6b25lIGRlIHVuaWRhZCBYXG4gICAgICAgIC8vIFwiI3BsdXNjYXRlZ29yeV9YX0NBVEVHT1JZXCIgPT4gUGx1c3pvbmUgZW4gY2F0ZWdvcsOtYSBDQVRFR09SWSB5IHVuaWRhZCBYXG4gICAgICAgIGlmKGhhc2hQYXJ0c1swXSA9PSAnI3VuaXRtZW51JyAmJiBoYXNoUGFydHMubGVuZ3RoID09IDEpe1xuICAgICAgICAgICAgdXJsU3RhdGUuc3RhdGVOYW1lID0gJ3VuaXRtZW51JztcbiAgICAgICAgfSBlbHNlIGlmKGhhc2hQYXJ0c1swXSA9PSAnI3VuaXQnICYmIGhhc2hQYXJ0cy5sZW5ndGggPT0gMil7XG4gICAgICAgICAgICB1cmxTdGF0ZS5zdGF0ZU5hbWUgPSAndW5pdCc7XG4gICAgICAgICAgICB1cmxTdGF0ZS51bml0ID0gaGFzaFBhcnRzWzFdO1xuICAgICAgICB9IGVsc2UgaWYoaGFzaFBhcnRzWzBdID09ICcjcGx1c3pvbmUnICYmIGhhc2hQYXJ0cy5sZW5ndGggPT0gMil7XG4gICAgICAgICAgICB1cmxTdGF0ZS5zdGF0ZU5hbWUgPSAncGx1c3pvbmUnO1xuICAgICAgICAgICAgdXJsU3RhdGUudW5pdCA9IGhhc2hQYXJ0c1sxXTtcbiAgICAgICAgfSBlbHNlIGlmKGhhc2hQYXJ0c1swXSA9PSAnI3BsdXNjYXRlZ29yeScgJiYgaGFzaFBhcnRzLmxlbmd0aCA9PSAzKXtcbiAgICAgICAgICAgIHVybFN0YXRlLnN0YXRlTmFtZSA9ICdwbHVzY2F0ZWdvcnknO1xuICAgICAgICAgICAgdXJsU3RhdGUudW5pdCA9IGhhc2hQYXJ0c1sxXTtcbiAgICAgICAgICAgIHVybFN0YXRlLmNhdGVnb3J5ID0gaGFzaFBhcnRzWzJdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsU3RhdGUuc3RhdGVOYW1lID0gJ3NwbGFzaCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cmxTdGF0ZSA9IHVybFN0YXRlO1xuICAgIH1cblxuICAgIGdvVG9TdGF0ZSgpe1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRTdGF0ZSgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMudXJsU3RhdGUuc3RhdGVOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdzcGxhc2gnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5nb1RvU3BsYXNoKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FzZSAndW5pdG1lbnUnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5nb1RvVW5pdE1lbnUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgICAgICBjYXNlICd1bml0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMuZ29Ub0xlc3Nvbk1lbnUodGhpcy51cmxTdGF0ZS51bml0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgICAgICBjYXNlICdwbHVzem9uZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmdvVG9QbHVzWm9uZUNhdGVnb3JpZXNNZW51KHRoaXMudXJsU3RhdGUudW5pdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FzZSAncGx1c2NhdGVnb3J5JzpcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMuZ29Ub1BsdXNab25lUmVzb3VyY2VzTWVudSh7dW5pdE51bWJlcjogdGhpcy51cmxTdGF0ZS51bml0LCBjYXRlZ29yeTogdGhpcy51cmxTdGF0ZS5jYXRlZ29yeX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlVXJsSGFzaCh1cmxTdGF0ZSl7XG4gICAgICAgIGxldCB1cmxIYXNoID0gJyc7XG4gICAgICAgIHN3aXRjaCAodXJsU3RhdGUuc3RhdGVOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdzcGxhc2gnOlxuICAgICAgICAgICAgICAgIHVybEhhc2ggPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndW5pdG1lbnUnOlxuICAgICAgICAgICAgICAgIHVybEhhc2ggPSBgI3VuaXRtZW51YDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgICAgICBjYXNlICd1bml0JzpcbiAgICAgICAgICAgICAgICB1cmxIYXNoID0gYCN1bml0XyR7dXJsU3RhdGUudW5pdH1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSAncGx1c3pvbmUnOlxuICAgICAgICAgICAgICAgIHVybEhhc2ggPSBgI3BsdXN6b25lXyR7dXJsU3RhdGUudW5pdH1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ3BsdXNjYXRlZ29yeSc6XG4gICAgICAgICAgICAgICAgdXJsSGFzaCA9IGAjcGx1c2NhdGVnb3J5XyR7dXJsU3RhdGUudW5pdH1fJHt1cmxTdGF0ZS5jYXRlZ29yeX1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmxIYXNoO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXJsSGVscGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91cmxIZWxwZXIuanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBBbmltYXRpb25zIGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbmNvbnN0IGFuaW1hdGlvbnMgPSBuZXcgQW5pbWF0aW9ucztcblxuLy9ET00gZWxlbWVudHNcblxuY2xhc3MgU3BsYXNoU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgc2NyZWVuRGl2OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3VwX3RkbF9zcGxhc2hfc2NyZWVuJyksXG4gICAgICAgICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3VwX3NwbGFzaF9fbWFpbl90aXRsZScpWzBdLFxuICAgICAgICAgICAgZW50ZXJCdG46IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF9zcGxhc2hfX2VudGVyJylbMF0sXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW5pdChwcm9wcyl7XG4gICAgICAgIHZhciB7IHRpdGxlLCBvbkVudGVyQWN0aW9uIH0gPSBwcm9wcztcbiAgICAgICAgLy9UaXRsZVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2Lm9uY2xpY2sgPSBvbkVudGVyQWN0aW9uO1xuICAgICAgICBcbiAgICAgICAgaWYoY29uZmlnLmRldil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNwbGFzaFNjcmVlbi5pbml0KClcIik7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTcGxhc2hTY3JlZW4uc2hvdygpXCIpXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFjdGl2ZSl7XG4gICAgICAgICAgICBhbmltYXRpb25zLnNob3dPcGFjaXR5U2NhbGUodGhpcy5kb21FbGVtZW50cy5zY3JlZW5EaXYpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBoaWRlKCl7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3BsYXNoU2NyZWVuLmhpZGUoKVwiKTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5oaWRlT3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwbGFzaFNjcmVlbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvX3NwbGFzaFNjcmVlbi5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IEFuaW1hdGlvbnMgZnJvbSAnLi9hbmltYXRpb25zJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuXG5jb25zdCBhbmltYXRpb25zID0gbmV3IEFuaW1hdGlvbnM7XG5cbi8vRE9NIGVsZW1lbnRzXG5cbmNsYXNzIFVuaXRNZW51U2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyB0aGlzLnN0YXRlID0ge1xuICAgICAgICAvLyAgICAgdGl0bGU6ICcnLFxuICAgICAgICAvLyAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2xpZGVyOiBudWxsLFxuICAgICAgICAgICAgb25Vbml0QWN0aW9uOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgc2NyZWVuRGl2OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3VwX3RkbF91bml0X21lbnVfc2NyZWVuJyksXG4gICAgICAgICAgICBiYWNrQnV0dG9uOiAkKCcjb3VwX3RkbF91bml0X21lbnVfc2NyZWVuIC5vdXBfdGRsX19icmVhZGNydW1iX19iYWNrJykuZ2V0KDApLFxuICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF91bml0X21lbnVfX21haW5fdGl0bGUnKVswXSxcbiAgICAgICAgICAgIHNsaWRlckhpZGRlbkVsZW1lbnRzOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdXBfdW5pdF9tZW51X19zbGlkZXJfaGlkZGVuX2VsZW1lbnRzJylbMF0sXG4gICAgICAgICAgICBzbGlkZXI6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF91bml0X21lbnVfX3VuaXRfc2xpZGVyJylbMF0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bml0SHRtbEVsZW1lbnRzID0gW107XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuaXRNZW51U2NyZWVuLmNvbnN0cnVjdG9yKClcIilcbiAgICB9XG4gICAgXG4gICAgaW5pdChwcm9wcyl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbml0TWVudVNjcmVlbi5pbml0KClcIik7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB7IHRpdGxlLCBvblVuaXRBY3Rpb24sIHVuaXRzLCBvbkJhY2tBY3Rpb259ID0gcHJvcHM7XG4gICAgICAgIHRoaXMuc3RhdGUub25Vbml0QWN0aW9uID0gb25Vbml0QWN0aW9uO1xuICAgICAgICAvL1RpdGxlXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMudGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgdW5pdHMuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgICAgIHRoaXMudW5pdEh0bWxFbGVtZW50cy5wdXNoKHRoaXMuZ2V0TWVudVVuaXRFbGVtZW50U3RyaW5nSHRtbCh1bml0KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgJCh0aGlzLmRvbUVsZW1lbnRzLmJhY2tCdXR0b24pLnVuYmluZCgnY2xpY2snKS5vbignY2xpY2snLG9uQmFja0FjdGlvbik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlLnNsaWRlciA9IG5ldyBTbGlkZXI7XG4gICAgICAgIHRoaXMuc3RhdGUuc2xpZGVyLmluaXQoe1xuICAgICAgICAgICAgZWxlbWVudHM6IHRoaXMudW5pdEh0bWxFbGVtZW50cyxcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrQWN0aW9uOiAobnVtYmVyKSA9PiB0aGlzLm9uVW5pdENsaWNrKG51bWJlciksXG4gICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogJy5vdXBfdW5pdF9tZW51X191bml0X3NsaWRlcl9jb250YWluZXInLFxuICAgICAgICAgICAgZWxlbWVudE1pbldpZHRoOiB7XG4gICAgICAgICAgICAgICAgbW9iaWxlOiAyNDAsXG4gICAgICAgICAgICAgICAgdGFibGV0OiAyNjAsXG4gICAgICAgICAgICAgICAgZGVza3RvcDogMzAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnRNaW5IZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDEwMCxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDExMCxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAxMjAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vICQod2luZG93KS5yZXNpemUodGhpcy5yZWZyZXNoU2xpZGVyU2l6ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbml0TWVudVNjcmVlbi5zaG93KClcIilcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYWN0aXZlKXtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMuc2hvd09wYWNpdHlTY2FsZSh0aGlzLmRvbUVsZW1lbnRzLnNjcmVlbkRpdik7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNsaWRlci5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGlkZSgpe1xuICAgICAgICAvL3RoaXMuc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5pdE1lbnVTY3JlZW4uaGlkZSgpXCIsIHRoaXMuc3RhdGUuYWN0aXZlKTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5oaWRlT3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWVudVVuaXRFbGVtZW50U3RyaW5nSHRtbCh1bml0KXtcbiAgICAgICAgdmFyIGh0bWxTdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3VuaXRfbWVudV9fdW5pdC1idG5cIiBudW1iZXI9XCIke3VuaXQubnVtYmVyfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfdW5pdF9tZW51X191bml0X19udW1iZXJcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3VuaXQuaW1hZ2V9KTtcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3VuaXRfbWVudV9fdW5pdF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt1bml0LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICByZXR1cm4gaHRtbFN0cmluZztcbiAgICB9XG4gICAgb25Vbml0Q2xpY2soZSl7XG4gICAgICAgIHZhciBudW1iZXIgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignbnVtYmVyJyk7XG4gICAgICAgIHRoaXMuc3RhdGUub25Vbml0QWN0aW9uKG51bWJlcik7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBVbml0TWVudVNjcmVlbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvX3VuaXRNZW51U2NyZWVuLmpzIiwiLypcbiAgICAgXyBfICAgICAgXyAgICAgICBfXG4gX19ffCAoXykgX19ffCB8IF9fICAoXylfX19cbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcblxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXG58X19fL198X3xcXF9fX3xffFxcXyhfKS8gfF9fXy9cbiAgICAgICAgICAgICAgICAgICB8X18vXG5cbiBWZXJzaW9uOiAxLjguMVxuICBBdXRob3I6IEtlbiBXaGVlbGVyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXG4gICAgRG9jczogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xuICBJc3N1ZXM6IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2svaXNzdWVzXG5cbiAqL1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGRlZmluZSwgalF1ZXJ5LCBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCAqL1xuOyhmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cblxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBTbGljayA9IHdpbmRvdy5TbGljayB8fCB7fTtcblxuICAgIFNsaWNrID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBpbnN0YW5jZVVpZCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHtcblxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7XG5cbiAgICAgICAgICAgIF8uZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPk5leHQ8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dChpICsgMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICBlZGdlRnJpY3Rpb246IDAuMzUsXG4gICAgICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Eb3RzSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbmRUbzogJ3dpbmRvdycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcbiAgICAgICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0b3VjaFRocmVzaG9sZDogNSxcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlVHJhbnNmb3JtOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhaXRGb3JBbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudExlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMSxcbiAgICAgICAgICAgICAgICAkZG90czogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICAkcHJldkFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVDb3VudDogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZVRyYWNrOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgc3dpcGVMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIHN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICRsaXN0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5zbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscyk7XG5cbiAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5icmVha3BvaW50cyA9IFtdO1xuICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3MgPSBbXTtcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XG4gICAgICAgICAgICBfLnJvd0NvdW50ID0gMTtcbiAgICAgICAgICAgIF8uc2hvdWxkQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAwO1xuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgIGRhdGFTZXR0aW5ncyA9ICQoZWxlbWVudCkuZGF0YSgnc2xpY2snKSB8fCB7fTtcblxuICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8uZGVmYXVsdHMsIHNldHRpbmdzLCBkYXRhU2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG5cbiAgICAgICAgICAgIF8ub3JpZ2luYWxTZXR0aW5ncyA9IF8ub3B0aW9ucztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnbW96SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUNsZWFyID0gJC5wcm94eShfLmF1dG9QbGF5Q2xlYXIsIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUl0ZXJhdG9yID0gJC5wcm94eShfLmF1dG9QbGF5SXRlcmF0b3IsIF8pO1xuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XG4gICAgICAgICAgICBfLmNsaWNrSGFuZGxlciA9ICQucHJveHkoXy5jbGlja0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZWxlY3RIYW5kbGVyID0gJC5wcm94eShfLnNlbGVjdEhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XG4gICAgICAgICAgICBfLnN3aXBlSGFuZGxlciA9ICQucHJveHkoXy5zd2lwZUhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5kcmFnSGFuZGxlciA9ICQucHJveHkoXy5kcmFnSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XG5cbiAgICAgICAgICAgIF8uaW5zdGFuY2VVaWQgPSBpbnN0YW5jZVVpZCsrO1xuXG4gICAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgICAgICAgICAgLy8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKG11c3Qgc3RhcnQgd2l0aCA8KVxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxuICAgICAgICAgICAgXy5odG1sRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLztcblxuXG4gICAgICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcbiAgICAgICAgICAgIF8uaW5pdCh0cnVlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNsaWNrO1xuXG4gICAgfSgpKTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hY3RpdmF0ZUFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stYWN0aXZlJykuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhZGRCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID49IF8uc2xpZGVDb3VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgXy4kc2xpZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEJlZm9yZShfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEFmdGVyKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFkZEJlZm9yZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodFxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlID0gZnVuY3Rpb24odGFyZ2V0TGVmdCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXG4gICAgICAgICAgICBfID0gdGhpcztcblxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50TGVmdCA9IC0oXy5jdXJyZW50TGVmdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IF8uY3VycmVudExlZnRcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IF8ub3B0aW9ucy5lYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHRhcmdldExlZnQgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAmJiBhc05hdkZvciAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgYXNOYXZGb3IuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5zbGljaygnZ2V0U2xpY2snKTtcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2xpZGVIYW5kbGVyKGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gXy50cmFuc2Zvcm1UeXBlICsgJyAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnb3BhY2l0eSAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoIF8uYXV0b1BsYXlJdGVyYXRvciwgXy5vcHRpb25zLmF1dG9wbGF5U3BlZWQgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmF1dG9QbGF5VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8uZGlyZWN0aW9uID09PSAxICYmICggXy5jdXJyZW50U2xpZGUgKyAxICkgPT09ICggXy5zbGlkZUNvdW50IC0gMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggXy5kaXJlY3Rpb24gPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlVG8gKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgPSAkKF8ub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcblxuICAgICAgICAgICAgaWYoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucHJlcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkKCBfLiRuZXh0QXJyb3cgKVxuXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZERvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBkb3Q7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICAgICAgZG90ID0gJCgnPHVsIC8+JykuYWRkQ2xhc3MoXy5vcHRpb25zLmRvdHNDbGFzcyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCQoJzxsaSAvPicpLmFwcGVuZChfLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcywgXywgaSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kZG90cyA9IGRvdC5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kRG90cyk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkT3V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oIF8ub3B0aW9ucy5zbGlkZSArICc6bm90KC5zbGljay1jbG9uZWQpJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjayA9IChfLnNsaWRlQ291bnQgPT09IDApID9cbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcbiAgICAgICAgICAgIF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7XG5cbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKTtcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoJ29wYWNpdHknLCAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyKS5ub3QoJ1tzcmNdJykuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcblxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG5cbiAgICAgICAgXy5idWlsZERvdHMoKTtcblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcblxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGEsIGIsIGMsIG5ld1NsaWRlcywgbnVtT2ZTbGlkZXMsIG9yaWdpbmFsU2xpZGVzLHNsaWRlc1BlclNlY3Rpb247XG5cbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMubGVuZ3RoIC8gc2xpZGVzUGVyU2VjdGlvblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKyl7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobmV3U2xpZGVzKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOigxMDAgLyBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gXy4kc2xpZGVyLndpZHRoKCk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHNsaWRlcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoID4gXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IF8uYWN0aXZlQnJlYWtwb2ludCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYnJlYWtwb2ludCcsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoYW5nZVNsaWRlID0gZnVuY3Rpb24oZXZlbnQsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBsaW5rLCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLlxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cbiAgICAgICAgaWYoISR0YXJnZXQuaXMoJ2xpJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xuXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGF0YS5pbmRleCA9PT0gMCA/IDAgOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY2hlY2tOYXZpZ2FibGUoaW5kZXgpLCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcblxuICAgICAgICBuYXZpZ2FibGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCk7XG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzICYmIF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xuXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgb3JpZ2luYWxTbGlkZXM7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG9yaWdpbmFsU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5zaG91bGRDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZWZyZXNoKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICBfLmNsZWFuVXBFdmVudHMoKTtcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5kZXRhY2goKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zbGljay1pbmRleCcpXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJGxpc3QuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJyc7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxuICAgICAgICAgICAgLm9uKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJywgJyonLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5wYXVzZU9uRm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9jdXNzZWQgPSAkc2YuaXMoJzpmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldEN1cnJlbnQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tDdXJyZW50U2xpZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBfLmN1cnJlbnRTbGlkZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0RG90Q291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHZhciBwYWdlclF0eSA9IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxuICAgICAgICAgICAgdGFyZ2V0U2xpZGUsXG4gICAgICAgICAgICBjb2VmO1xuXG4gICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICB2ZXJ0aWNhbEhlaWdodCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IChfLnNsaWRlV2lkdGggKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xuICAgICAgICAgICAgICAgIGNvZWYgPSAtMVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0xLjU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAodmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIGNvZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkgLyAyKSAtICgoXy5zbGlkZVdpZHRoICogXy5zbGlkZUNvdW50KSAvIDIpO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSAtIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiBfLnNsaWRlV2lkdGgpICogLTEpICsgXy5zbGlkZU9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMSkgKyB2ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCArPSAoXy4kbGlzdC53aWR0aCgpIC0gdGFyZ2V0U2xpZGUub3V0ZXJXaWR0aCgpKSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0TGVmdDtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0T3B0aW9uID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBfLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSAwLFxuICAgICAgICAgICAgY291bnRlciA9IDAsXG4gICAgICAgICAgICBpbmRleGVzID0gW10sXG4gICAgICAgICAgICBtYXg7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIGNvdW50ZXIgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudCAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IG1heCkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkLCBzd2lwZWRTbGlkZSwgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlID8gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLm9mZnNldExlZnQgLSBjZW50ZXJPZmZzZXQgKyAoJChzbGlkZSkub3V0ZXJXaWR0aCgpIC8gMikgPiAoXy5zd2lwZUxlZnQgKiAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQgPSBNYXRoLmFicygkKHN3aXBlZFNsaWRlKS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykgLSBfLmN1cnJlbnRTbGlkZSkgfHwgMTtcblxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1RyYXZlcnNlZDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uKHNsaWRlLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChzbGlkZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZG9udEFuaW1hdGUpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oY3JlYXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCEkKF8uJHNsaWRlcikuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcblxuICAgICAgICAgICAgJChfLiRzbGlkZXIpLmFkZENsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuXG4gICAgICAgICAgICBfLmJ1aWxkUm93cygpO1xuICAgICAgICAgICAgXy5idWlsZE91dCgpO1xuICAgICAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICAgICAgXy5zdGFydExvYWQoKTtcbiAgICAgICAgICAgIF8ubG9hZFNsaWRlcigpO1xuICAgICAgICAgICAgXy5pbml0aWFsaXplRXZlbnRzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSh0cnVlKTtcbiAgICAgICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjcmVhdGlvbikge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2luaXQnLCBbX10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLmluaXRBREEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbnVtRG90R3JvdXBzID0gTWF0aC5jZWlsKF8uc2xpZGVDb3VudCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLFxuICAgICAgICAgICAgICAgIHRhYkNvbnRyb2xJbmRleGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCkuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCA+PSAwKSAmJiAodmFsIDwgXy5zbGlkZUNvdW50KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuYWRkKF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVDb250cm9sSW5kZXggPSB0YWJDb250cm9sSW5kZXhlcy5pbmRleE9mKGkpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFicGFuZWwnLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgdmFyIGFyaWFCdXR0b25Db250cm9sID0gJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIHNsaWRlQ29udHJvbEluZGV4XG4gICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgYXJpYUJ1dHRvbkNvbnRyb2wpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGFyaWFCdXR0b25Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuYXR0cigncm9sZScsICd0YWJsaXN0JykuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkU2xpZGVJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzW2ldO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS5maXJzdCgpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWInLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIG1hcHBlZFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogKGkgKyAxKSArICcgb2YgJyArIG51bURvdEdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLmVxKF8uY3VycmVudFNsaWRlKS5maW5kKCdidXR0b24nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgICAgIH0pLmVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaT1fLmN1cnJlbnRTbGlkZSwgbWF4PWkrXy5vcHRpb25zLnNsaWRlc1RvU2hvdzsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkuYXR0cih7J3RhYmluZGV4JzogJzAnfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uYWN0aXZhdGVBREEoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0RG90RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XG5cbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcblxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vbignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcbiAgICAgICAgJChfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICAgLy9Eb250IHNsaWRlIGlmIHRoZSBjdXJzb3IgaXMgaW5zaWRlIHRoZSBmb3JtIGZpZWxkcyBhbmQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxuICAgICAgICBpZighZXZlbnQudGFyZ2V0LnRhZ05hbWUubWF0Y2goJ1RFWFRBUkVBfElOUFVUfFNFTEVDVCcpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxhenlMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbG9hZFJhbmdlLCBjbG9uZVJhbmdlLCByYW5nZVN0YXJ0LCByYW5nZUVuZDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlc1Njb3BlKSB7XG5cbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNpemVzICA9ICQodGhpcykuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIHJhbmdlRW5kID0gTWF0aC5jZWlsKHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZUVuZCA8PSBfLnNsaWRlQ291bnQpIHJhbmdlRW5kKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSByYW5nZUVuZCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTbGlkZSA8IDApIHByZXZTbGlkZSA9IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShuZXh0U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUtLTtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRJbWFnZXMobG9hZFJhbmdlKTtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKDAsIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubG9hZFNsaWRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLmluaXRVSSgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdwcm9ncmVzc2l2ZScpIHtcbiAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm5leHQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tOZXh0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhZnRlckNoYW5nZScsIFtfLCBpbmRleF0pO1xuXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY3VycmVudFNsaWRlID0gJChfLiRzbGlkZXMuZ2V0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUuYXR0cigndGFiaW5kZXgnLCAwKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24oIHRyeUNvdW50ICkge1xuXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZSxcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxuICAgICAgICAgICAgaW1hZ2VTaXplcyxcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkO1xuXG4gICAgICAgIGlmICggJGltZ3NUb0xvYWQubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XG4gICAgICAgICAgICBpbWFnZVNvdXJjZSA9IGltYWdlLmF0dHIoJ2RhdGEtbGF6eScpO1xuICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSBpbWFnZS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIGltYWdlU291cmNlIClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG4gICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmICggdHJ5Q291bnQgPCAzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiB0cnkgdG8gbG9hZCB0aGUgaW1hZ2UgMyB0aW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICogbGVhdmUgYSBzbGlnaHQgZGVsYXkgc28gd2UgZG9uJ3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhbGxJbWFnZXNMb2FkZWQnLCBbIF8gXSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oIGluaXRpYWxpemluZyApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcblxuICAgICAgICBsYXN0VmlzaWJsZUluZGV4ID0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcblxuICAgICAgICAvLyBpbiBub24taW5maW5pdGUgc2xpZGVycywgd2UgZG9uJ3Qgd2FudCB0byBnbyBwYXN0IHRoZVxuICAgICAgICAvLyBsYXN0IHZpc2libGUgaW5kZXguXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gbGFzdFZpc2libGVJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGxlc3Mgc2xpZGVzIHRoYW4gdG8gc2hvdywgZ28gdG8gc3RhcnQuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcblxuICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzLCB7IGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlIH0pO1xuXG4gICAgICAgIF8uaW5pdCgpO1xuXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBjdXJyZW50U2xpZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWdpc3RlckJyZWFrcG9pbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmVTZXR0aW5ncyA9IF8ub3B0aW9ucy5yZXNwb25zaXZlIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IF8ub3B0aW9ucy5yZXNwb25kVG8gfHwgJ3dpbmRvdyc7XG5cbiAgICAgICAgICAgIGZvciAoIGJyZWFrcG9pbnQgaW4gcmVzcG9uc2l2ZVNldHRpbmdzICkge1xuXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZVNldHRpbmdzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBicmVha3BvaW50cyBhbmQgY3V0IG91dCBhbnkgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8uYnJlYWtwb2ludHNbbF0gJiYgXy5icmVha3BvaW50c1tsXSA9PT0gY3VycmVudEJyZWFrcG9pbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIF8ub3B0aW9ucy5tb2JpbGVGaXJzdCApID8gYS1iIDogYi1hO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2tcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgJiYgXy5jdXJyZW50U2xpZGUgIT09IDApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuXG4gICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcbiAgICAgICAgXy5idWlsZERvdHMoKTtcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKGZhbHNlLCB0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcbiAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBfLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XG4gICAgICAgICAgICBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHsgXy5zZXRQb3NpdGlvbigpOyB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJlbW92ZUJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldENTUyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgeCA9IF8ucG9zaXRpb25Qcm9wID09ICdsZWZ0JyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG5cbiAgICAgICAgcG9zaXRpb25Qcm9wc1tfLnBvc2l0aW9uUHJvcF0gPSBwb3NpdGlvbjtcblxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9O1xuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoJzBweCAnICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTtcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcblxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbCgoXy5zbGlkZVdpZHRoICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoNTAwMCAqIF8uc2xpZGVDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGgpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKHRydWUpIC0gXy4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQ7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy5zbGlkZVdpZHRoICogaW5kZXgpICogLTE7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcbiAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5jc3MoJ2hlaWdodCcsIHRhcmdldEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cbiAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWNjZXB0cyBhcmd1bWVudHMgaW4gZm9ybWF0IG9mOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgJ3Jlc3BvbnNpdmUnLCBbe30sIC4uLl0sIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIHsgJ29wdGlvbic6IHZhbHVlLCAuLi4gfSwgcmVmcmVzaCApXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgbCwgaXRlbSwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCA9IGZhbHNlLCB0eXBlO1xuXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB0eXBlID0gJ211bHRpcGxlJztcblxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyZXNwb25zaXZlJztcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcblxuICAgICAgICAgICAgXy5vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XG5cbiAgICAgICAgICAgICQuZWFjaCggb3B0aW9uICwgZnVuY3Rpb24oIG9wdCwgdmFsICkge1xuXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xuXG4gICAgICAgICAgICBmb3IgKCBpdGVtIGluIHZhbHVlICkge1xuXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UobCwxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCByZWZyZXNoICkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNldEZhZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzZXRQb3NpdGlvbicsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd0b3AnIDogJ2xlZnQnO1xuXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUuTW96VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy56SW5kZXggPCAzICkge1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ09UcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdNb3pUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUuTW96UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnd2Via2l0VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnbXNUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcbiAgICB9O1xuXG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcblxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgZXZlbkNvZWYgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICUgMiA9PT0gMCA/IDEgOiAwO1xuXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNlbnRlck9mZnNldCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gMSkgLSBjZW50ZXJPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEgKyBldmVuQ29lZiwgaW5kZXhPZmZzZXQgKyBjZW50ZXJPZmZzZXQgKyAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShhbGxTbGlkZXMubGVuZ3RoIC0gMSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gXy5zbGlkZUNvdW50IC0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkge1xuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCwgaW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbFNsaWRlcy5sZW5ndGggPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4IDogaW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgKF8uc2xpZGVDb3VudCAtIGluZGV4KSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQsIGluZGV4T2Zmc2V0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdvbmRlbWFuZCcgfHwgXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBzbGlkZUluZGV4LCBpbmZpbml0ZUNvdW50O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLmNlbnRlck1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBfLnNsaWRlQ291bnQ7IGkgPiAoXy5zbGlkZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQpOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5maW5pdGVDb3VudCAgKyBfLnNsaWRlQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggKyBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKS5maW5kKCdbaWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRvZ2dsZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2VsZWN0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cbiAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5pcygnLnNsaWNrLXNsaWRlJykgP1xuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KSA6XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuYXR0cignZGF0YS1zbGljay1pbmRleCcpKTtcblxuICAgICAgICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24oaW5kZXgsIHN5bmMsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxuICAgICAgICAgICAgXyA9IHRoaXMsIG5hdlRhcmdldDtcblxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcbiAgICAgICAgdGFyZ2V0TGVmdCA9IF8uZ2V0TGVmdCh0YXJnZXRTbGlkZSk7XG4gICAgICAgIHNsaWRlTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLmdldERvdENvdW50KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCAtIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xuXG4gICAgICAgIG9sZFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hc05hdkZvciApIHtcblxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljaygnZ2V0U2xpY2snKTtcblxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICAgICAgbmF2VGFyZ2V0LnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZShhbmltU2xpZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmFuaW1hdGVTbGlkZSh0YXJnZXRMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN0YXJ0TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5oaWRlKCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZSwgXyA9IHRoaXM7XG5cbiAgICAgICAgeERpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAtIF8udG91Y2hPYmplY3QuY3VyWDtcbiAgICAgICAgeURpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSAtIF8udG91Y2hPYmplY3QuY3VyWTtcbiAgICAgICAgciA9IE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcblxuICAgICAgICBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIGlmIChzd2lwZUFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDQ1KSAmJiAoc3dpcGVBbmdsZSA+PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSAzNjApICYmIChzd2lwZUFuZ2xlID49IDMxNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMTM1KSAmJiAoc3dpcGVBbmdsZSA8PSAyMjUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMTM1KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZG93bic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZUNvdW50LFxuICAgICAgICAgICAgZGlyZWN0aW9uO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgXy5zd2lwaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uc2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICBfLnNob3VsZENsaWNrID0gKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgKSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuY3VyWCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZWRnZScsIFtfLCBfLnN3aXBlRGlyZWN0aW9uKCkgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPj0gXy50b3VjaE9iamVjdC5taW5Td2lwZSApIHtcblxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBkaXJlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gIT0gJ3ZlcnRpY2FsJyApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZUNvdW50ICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzd2lwZScsIFtfLCBkaXJlY3Rpb24gXSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3RhcnRYICE9PSBfLnRvdWNoT2JqZWN0LmN1clggKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggXy5jdXJyZW50U2xpZGUgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgoXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkgfHwgKCdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCAmJiBfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgPSBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggOiAxO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RXaWR0aCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0SGVpZ2h0IC8gXy5vcHRpb25zXG4gICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikge1xuXG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZVN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZU1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVFbmQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBlZGdlV2FzSGl0ID0gZmFsc2UsXG4gICAgICAgICAgICBjdXJMZWZ0LCBzd2lwZURpcmVjdGlvbiwgc3dpcGVMZW5ndGgsIHBvc2l0aW9uT2Zmc2V0LCB0b3VjaGVzLCB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBudWxsO1xuXG4gICAgICAgIGlmICghXy5kcmFnZ2luZyB8fCBfLnNjcm9sbGluZyB8fCB0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJYIC0gXy50b3VjaE9iamVjdC5zdGFydFgsIDIpKSk7XG5cbiAgICAgICAgdmVydGljYWxTd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XG5cbiAgICAgICAgaWYgKCFfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nICYmICFfLnN3aXBpbmcgJiYgdmVydGljYWxTd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gdmVydGljYWxTd2lwZUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlRGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc3dpcGluZyA9IHRydWU7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKChfLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKF8uY3VycmVudFNsaWRlID49IF8uZ2V0RG90Q291bnQoKSAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgKHN3aXBlTGVuZ3RoICogKF8uJGxpc3QuaGVpZ2h0KCkgLyBfLmxpc3RXaWR0aCkpICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnRvdWNoTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRDU1MoXy5zd2lwZUxlZnQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0b3VjaGVzO1xuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFkgPSBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcbiAgICAgICAgXy5kZXN0cm95KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcbiAgICAgICAgICAgICFfLm9wdGlvbnMuaW5maW5pdGUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSAxICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuZW5kKCk7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgIC5lcShNYXRoLmZsb29yKF8uY3VycmVudFNsaWRlIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLnNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHJldDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBfW2ldLnNsaWNrID0gbmV3IFNsaWNrKF9baV0sIG9wdCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF87XG4gICAgfTtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuZnVuY3Rpb24gcmVzcG9uc2l2ZVN0YXR1cygpIHtcbiAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBpZih3aWR0aCA8IDc2OCl7XG4gICAgICAgIHJldHVybiAnbW9iaWxlJztcbiAgICB9IGVsc2UgaWYod2lkdGggPCAxMDI0KXtcbiAgICAgICAgcmV0dXJuICd0YWJsZXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnZGVza3RvcCc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXNwb25zaXZlU3RhdHVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yZXNwb25zaXZlU3RhdHVzLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgQW5pbWF0aW9ucyBmcm9tICcuL2FuaW1hdGlvbnMnO1xuaW1wb3J0IFNsaWRlciBmcm9tICcuL3NsaWRlcic7XG5cbmNvbnN0IGFuaW1hdGlvbnMgPSBuZXcgQW5pbWF0aW9ucztcblxuLy9ET00gZWxlbWVudHNcblxuY2xhc3MgTGVzc29uTWVudVNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLy8gICAgIHRpdGxlOiAnJyxcbiAgICAgICAgLy8gICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNsaWRlcjogbnVsbCxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBudW1iZXI6IDAsXG4gICAgICAgICAgICBvbkxlc3NvbkFjdGlvbjogbnVsbCxcbiAgICAgICAgICAgIG9uUGx1c1pvbmVBY3Rpb246IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMgPSB7XG4gICAgICAgICAgICBzY3JlZW5EaXY6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXBfdGRsX2xlc3Nvbl9tZW51X3NjcmVlbicpLFxuICAgICAgICAgICAgYmFja0J1dHRvbjogJCgnI291cF90ZGxfbGVzc29uX21lbnVfc2NyZWVuIC5vdXBfdGRsX19icmVhZGNydW1iX19iYWNrJykuZ2V0KDApLFxuICAgICAgICAgICAgdGl0bGU6ICQoJy5vdXBfbGVzc29uX21lbnVfX21haW5fdGl0bGU+c3Ryb25nJykuZ2V0KDApLFxuICAgICAgICAgICAgbnVtYmVyOiAkKCcub3VwX2xlc3Nvbl9tZW51X19tYWluX3RpdGxlPnNwYW4nKS5nZXQoMCksXG4gICAgICAgICAgICBzbGlkZXJIaWRkZW5FbGVtZW50czogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3VwX2xlc3Nvbl9tZW51X19zbGlkZXJfaGlkZGVuX2VsZW1lbnRzJylbMF0sXG4gICAgICAgICAgICBzbGlkZXI6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF9sZXNzb25fbWVudV9fdW5pdF9zbGlkZXInKVswXSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlc3Nvbkh0bWxFbGVtZW50cyA9IFtdO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZXNzb25NZW51U2NyZWVuLmNvbnN0cnVjdG9yKClcIilcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZXNzb25NZW51U2NyZWVuLmluaXQoKVwiKTtcbiAgICB9XG4gICAgdXBkYXRlKHByb3BzKXtcbiAgICAgICAgaWYoY29uZmlnLmRldil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlc3Nvbk1lbnVTY3JlZW4udXBkYXRlKClcIiwgcHJvcHMpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeyB0aXRsZSwgbnVtYmVyLCBpbWFnZSwgb25QbHVzWm9uZUFjdGlvbiwgb25MZXNzb25BY3Rpb24sIGxlc3NvbnMsIG9uQmFja0FjdGlvbiwgaGFzUGx1c1pvbmUgfSA9IHByb3BzO1xuICAgICAgICAvL1RpdGxlXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMudGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cy5udW1iZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlfSlgO1xuICAgICAgICB0aGlzLnN0YXRlLm51bWJlciA9IG51bWJlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS5vblBsdXNab25lQWN0aW9uID0gb25QbHVzWm9uZUFjdGlvbjtcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkxlc3NvbkFjdGlvbiA9IG9uTGVzc29uQWN0aW9uO1xuICAgICAgICB0aGlzLmxlc3Nvbkh0bWxFbGVtZW50cyA9IFtdO1xuICAgICAgICBpZihoYXNQbHVzWm9uZSl7XG4gICAgICAgICAgICB0aGlzLmxlc3Nvbkh0bWxFbGVtZW50cy5wdXNoKHRoaXMuZ2V0TWVudVBsdXNab25lRWxlbWVudFN0cmluZ0h0bWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGVzc29ucy5mb3JFYWNoKGxlc3NvbiA9PiB7XG4gICAgICAgICAgICBpZihsZXNzb24udHlwZSA9PSAnbGlicm8nKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxlc3Nvbkh0bWxFbGVtZW50cy5wdXNoKHRoaXMuZ2V0TWVudUxlc3NvbkVsZW1lbnRTdHJpbmdIdG1sKGxlc3NvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgJCh0aGlzLmRvbUVsZW1lbnRzLmJhY2tCdXR0b24pLnVuYmluZCgnY2xpY2snKS5vbignY2xpY2snLG9uQmFja0FjdGlvbik7XG4gICAgICAgIHRoaXMuc3RhdGUuc2xpZGVyID0gbmV3IFNsaWRlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZXIuaW5pdCh7XG4gICAgICAgICAgICBlbGVtZW50czogdGhpcy5sZXNzb25IdG1sRWxlbWVudHMsXG4gICAgICAgICAgICBvbkVsZW1lbnRDbGlja0FjdGlvbjogKGUpID0+IHRoaXMub25MZXNzb25DbGljayhlKSwgLy90aGlzLm9uVW5pdENsaWNrLFxuICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6ICcub3VwX2xlc3Nvbl9tZW51X19sZXNzb25fc2xpZGVyX2NvbnRhaW5lcicsXG4gICAgICAgICAgICBlbGVtZW50TWluV2lkdGg6IHtcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDE2MCArIDUgKyA1LFxuICAgICAgICAgICAgICAgIHRhYmxldDogMTc4ICsgOCArIDgsXG4gICAgICAgICAgICAgICAgZGVza3RvcDogMTc4ICsgOCArIDgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxlbWVudE1pbkhlaWdodDoge1xuICAgICAgICAgICAgICAgIG1vYmlsZTogMTYwICsgNSArIDUsXG4gICAgICAgICAgICAgICAgdGFibGV0OiAxNzggKyA4ICsgOCxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAxNzggKyA4ICsgOCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gJCh3aW5kb3cpLnJlc2l6ZSh0aGlzLnJlZnJlc2hTbGlkZXJTaXplLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzaG93KCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlc3Nvbk1lbnVTY3JlZW4uc2hvdygpXCIpXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFjdGl2ZSl7XG4gICAgICAgICAgICBhbmltYXRpb25zLnNob3dPcGFjaXR5U2NhbGUodGhpcy5kb21FbGVtZW50cy5zY3JlZW5EaXYpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZXIuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhpZGUoKXtcbiAgICAgICAgLy90aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vc2NyZWVuRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZXNzb25NZW51U2NyZWVuLmhpZGUoKVwiKTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5oaWRlT3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWVudUxlc3NvbkVsZW1lbnRTdHJpbmdIdG1sKGxlc3Nvbil7XG4gICAgICAgIHZhciBiYWNrZ3JvdW5kU3R5bGUgPSAnJztcbiAgICAgICAgaWYobGVzc29uLmltYWdlLmxlbmd0aD4zKXtcbiAgICAgICAgICAgIGJhY2tncm91bmRTdHlsZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtsZXNzb24uaW1hZ2V9KWA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGh0bWxTdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19sZXNzb24tYnRuXCIgaWQ9XCIke2xlc3Nvbi5pZH1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19sZXNzb25fX2ltYWdlXCIgc3R5bGU9XCIke2JhY2tncm91bmRTdHlsZX1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19sZXNzb25fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7bGVzc29uLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIGh0bWxTdHJpbmc7XG4gICAgfVxuICAgIGdldE1lbnVQbHVzWm9uZUVsZW1lbnRTdHJpbmdIdG1sKCl7XG4gICAgICAgIHZhciBodG1sU3RyaW5nID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9sZXNzb25fbWVudV9fbGVzc29uLWJ0biBvdXBfbGVzc29uX21lbnVfX2xlc3Nvbi0tcGx1cy16b25lLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfbGVzc29uX21lbnVfX2xlc3Nvbl9faW1hZ2VcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19sZXNzb25fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPitab25lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICByZXR1cm4gaHRtbFN0cmluZztcbiAgICB9XG4gICAgb25MZXNzb25DbGljayhlKXtcbiAgICAgICAgLy9JZiBpcyArWm9uZVxuICAgICAgICBpZigkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ291cF9sZXNzb25fbWVudV9fbGVzc29uLS1wbHVzLXpvbmUtYnRuJykpe1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vblBsdXNab25lQWN0aW9uKHRoaXMuc3RhdGUubnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIHsgLy9JcyBpcyBsZXNzb24sIG9wZW4gbGVzc29uXG4gICAgICAgICAgICB2YXIgaWQgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignaWQnKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25MZXNzb25BY3Rpb24oe3VuaXROdW1iZXI6IHRoaXMuc3RhdGUubnVtYmVyLCBsZXNzb25JZDogaWR9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVzc29uTWVudVNjcmVlbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvX2xlc3Nvbk1lbnVTY3JlZW4uanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBBbmltYXRpb25zIGZyb20gJy4vYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBc3BlY1JhdGlvQm9keUNsYXNzIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY29uc3QgYW5pbWF0aW9ucyA9IG5ldyBBbmltYXRpb25zO1xuXG4vL0RPTSBlbGVtZW50c1xuXG5jbGFzcyBQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyB0aGlzLnN0YXRlID0ge1xuICAgICAgICAvLyAgICAgdGl0bGU6ICcnLFxuICAgICAgICAvLyAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG51bWJlcjogMCxcbiAgICAgICAgICAgIG9uQ2F0ZWdvcnlBY3Rpb246IG51bGwsXG4gICAgICAgICAgICBvbkJhY2tBY3Rpb246IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMgPSB7XG4gICAgICAgICAgICBzY3JlZW5EaXY6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXBfdGRsX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfc2NyZWVuJyksXG4gICAgICAgICAgICBiYWNrQnV0dG9uOiAkKCcjb3VwX3RkbF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X3NjcmVlbiAub3VwX3RkbF9fYnJlYWRjcnVtYl9fYmFjaycpLmdldCgwKSxcbiAgICAgICAgICAgIHRpdGxlOiAkKCcub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX21haW5fdGl0bGU+c3Ryb25nJykuZ2V0KDApLFxuICAgICAgICAgICAgbnVtYmVyOiAkKCcub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX21haW5fdGl0bGU+c3BhbicpLmdldCgwKSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50cyA9ICcnO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLmNvbnN0cnVjdG9yKClcIilcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLmluaXQoKVwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vVGhpcyBhZGQgYSBjbGFzcyB0byBib2R5IG9yIGVsZW1lbnQ6IG91cHRkbC1wb3J0cmFpdCBvciBvdXB0ZGwtbGFuZHNjYXBlXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgdXBkYXRlKHByb3BzKXtcbiAgICAgICAgaWYoY29uZmlnLmRldil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uaW5pdCgpXCIpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeyB0aXRsZSwgbnVtYmVyLCBpbWFnZSwgb25DYXRlZ29yeUFjdGlvbiwgY2F0ZWdvcmllcywgb25CYWNrQWN0aW9uIH0gPSBwcm9wcztcbiAgICAgICAgLy9UaXRsZVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMubnVtYmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZX0pYDtcbiAgICAgICAgdGhpcy5zdGF0ZS5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgIHRoaXMuc3RhdGUub25DYXRlZ29yeUFjdGlvbiA9IG9uQ2F0ZWdvcnlBY3Rpb247XG4gICAgICAgIHRoaXMuc3RhdGUub25CYWNrQWN0aW9uID0gb25CYWNrQWN0aW9uO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50cyA9ICcnO1xuXG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50cyArPSB0aGlzLmdldE1lbnVDYXRlZ29yeVN0cmluZ0h0bWwoY2F0ZWdvcnkpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jb250YWluZXInKS5odG1sKHRoaXMuaHRtbEVsZW1lbnRzKTtcbiAgICAgICAgJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jb250YWluZXIgLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG4nKS5jbGljaygoZWxlbWVudCkgPT4gdGhpcy5vbkNhdGVnb3J5Q2xpY2soZWxlbWVudCkpO1xuICAgICAgIFxuICAgICAgICAkKHRoaXMuZG9tRWxlbWVudHMuYmFja0J1dHRvbikudW5iaW5kKCdjbGljaycpLm9uKCdjbGljaycsdGhpcy5vbkJhY2tDbGljay5iaW5kKHRoaXMpKTtcblxuICAgICAgICB2YXIgYXNwZWNSYXRpb0JvZHlDbGFzcyA9IG5ldyBBc3BlY1JhdGlvQm9keUNsYXNzKCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFzcGVjUmF0aW9Cb2R5Q2xhc3MuaW5pdCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG4nLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuPionKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvID0gJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG4nKS5vdXRlcldpZHRoKCkgLSBwYXJzZUludCgkKCcub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5LWJ0bicpLmNzcygncGFkZGluZy1sZWZ0JyksIDEwKSAtIHBhcnNlSW50KCQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuJykuY3NzKCdwYWRkaW5nLXJpZ2h0JyksIDEwKSxcbiAgICAgICAgICAgICAgICBhbHRvID0gJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG4nKS5vdXRlckhlaWdodCgpIC0gcGFyc2VJbnQoJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG4nKS5jc3MoJ3BhZGRpbmctdG9wJykgLCAxMCkgLSBwYXJzZUludCgkKCcub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5LWJ0bicpLmNzcygncGFkZGluZy1ib3R0b20nKSwgMTApO1xuICAgICAgICAgICAgICAgIHZhciBtaW4gPSBhbmNobyA8IGFsdG8gPyBhbmNobyA6IGFsdG87XG4gICAgICAgICAgICAgICAgdmFyIG1hcmdpblRvcCA9IDAuNSAqIChhbHRvIC0gbWluKTtcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSBtYXJnaW5Ub3AgPiAwID8gbWFyZ2luVG9wIDogMDtcbiAgICAgICAgICAgICAgICAkKCcub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5LWJ0bj4qJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1pbiArICdweCcsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogbWluICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi10b3AnOiBtYXJnaW5Ub3AgKyAncHgnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbiAgICBzaG93KCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uc2hvdygpXCIpXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFjdGl2ZSl7XG4gICAgICAgICAgICBhbmltYXRpb25zLnNob3dPcGFjaXR5U2NhbGUodGhpcy5kb21FbGVtZW50cy5zY3JlZW5EaXYpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9XG4gICAgaGlkZSgpe1xuICAgICAgICAvL3RoaXMuc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy9zY3JlZW5EaXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uaGlkZSgpXCIpO1xuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZSl7XG4gICAgICAgICAgICBhbmltYXRpb25zLmhpZGVPcGFjaXR5U2NhbGUodGhpcy5kb21FbGVtZW50cy5zY3JlZW5EaXYpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNZW51Q2F0ZWdvcnlTdHJpbmdIdG1sKGNhdGVnb3J5KXtcbiAgICAgICAgdmFyIGJhY2tncm91bmRTdHlsZSA9ICcnO1xuICAgICAgICAgdmFyIGh0bWxTdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5LWJ0blwiIGRhdGEtY2F0ZWdvcnk9XCIke2NhdGVnb3J5fVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnlfX2JveCByZXNvdXJjZS0ke2NhdGVnb3J5fVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICByZXR1cm4gaHRtbFN0cmluZztcbiAgICB9XG4gICAgXG4gICAgb25DYXRlZ29yeUNsaWNrKGUpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLm9uQ2F0ZWdvcnlDbGljaygpXCIsIHRoaXMuc3RhdGUubnVtYmVyLCAkKGUuY3VycmVudFRhcmdldCkuZGF0YSgnY2F0ZWdvcnknKSk7XG4gICAgICAgIHRoaXMuc3RhdGUub25DYXRlZ29yeUFjdGlvbih7dW5pdE51bWJlcjogdGhpcy5zdGF0ZS5udW1iZXIsIGNhdGVnb3J5OiAkKGUuY3VycmVudFRhcmdldCkuZGF0YSgnY2F0ZWdvcnknKX0pXG4gICAgfVxuICAgIFxuICAgIG9uQmFja0NsaWNrKCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4ub25CYWNrQ2xpY2soKVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlLm9uQmFja0FjdGlvbih0aGlzLnN0YXRlLm51bWJlcik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9fcGx1c1pvbmVDYXRlZ29yaWVzTWVudS5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IEFuaW1hdGlvbnMgZnJvbSAnLi9hbmltYXRpb25zJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuaW1wb3J0IHsgZ2V0UmVzb3VyY2VUeXBlIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY29uc3QgYW5pbWF0aW9ucyA9IG5ldyBBbmltYXRpb25zO1xuXG4vL0RPTSBlbGVtZW50c1xuXG5jbGFzcyBQbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC8vICAgICB0aXRsZTogJycsXG4gICAgICAgIC8vICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzbGlkZXI6IG51bGwsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbnVtYmVyOiAwLFxuICAgICAgICAgICAgb25SZXNvdXJjZUFjdGlvbjogbnVsbCxcbiAgICAgICAgICAgIG9uQmFja0FjdGlvbjogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cyA9IHtcbiAgICAgICAgICAgIHNjcmVlbkRpdjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291cF90ZGxfcGx1c196b25lX3Jlc291cmNlc19tZW51X3NjcmVlbicpLFxuICAgICAgICAgICAgYmFja0J1dHRvbjogJCgnI291cF90ZGxfcGx1c196b25lX3Jlc291cmNlc19tZW51X3NjcmVlbiAub3VwX3RkbF9fYnJlYWRjcnVtYl9fYmFjaycpLmdldCgwKSxcbiAgICAgICAgICAgIHRpdGxlOiAkKCcub3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fbWFpbl90aXRsZT5zdHJvbmcnKS5nZXQoMCksXG4gICAgICAgICAgICBudW1iZXI6ICQoJy5vdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19tYWluX3RpdGxlPnNwYW4nKS5nZXQoMCksXG4gICAgICAgICAgICBzbGlkZXJIaWRkZW5FbGVtZW50czogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fc2xpZGVyX2hpZGRlbl9lbGVtZW50cycpWzBdLFxuICAgICAgICAgICAgc2xpZGVyOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X191bml0X3NsaWRlcicpWzBdLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzb3VyY2VIdG1sRWxlbWVudHMgPSBbXTtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLmNvbnN0cnVjdG9yKClcIilcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4uaW5pdCgpXCIpO1xuICAgIH1cbiAgICB1cGRhdGUocHJvcHMpe1xuICAgICAgICBpZihjb25maWcuZGV2KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLmluaXQoKVwiKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHsgdGl0bGUsIG51bWJlciwgaW1hZ2UsIG9uUmVzb3VyY2VBY3Rpb24sIHJlc291cmNlcywgb25CYWNrQWN0aW9uIH0gPSBwcm9wcztcbiAgICAgICAgLy9UaXRsZVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMubnVtYmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZX0pYDtcbiAgICAgICAgdGhpcy5zdGF0ZS5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgIHRoaXMuc3RhdGUub25SZXNvdXJjZUFjdGlvbiA9IG9uUmVzb3VyY2VBY3Rpb247XG4gICAgICAgIHRoaXMuc3RhdGUub25CYWNrQWN0aW9uID0gb25CYWNrQWN0aW9uO1xuICAgICAgICB0aGlzLnJlc291cmNlSHRtbEVsZW1lbnRzID0gW107XG4gICAgICAgIHJlc291cmNlcy5mb3JFYWNoKHJlc291cmNlID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VIdG1sRWxlbWVudHMucHVzaCh0aGlzLmdldE1lbnVSZXNvdXJjZVN0cmluZ0h0bWwocmVzb3VyY2UpKTtcbiAgICAgICAgfSk7XG4gICAgICAgXG4gICAgICAgICQodGhpcy5kb21FbGVtZW50cy5iYWNrQnV0dG9uKS51bmJpbmQoJ2NsaWNrJykub24oJ2NsaWNrJyx0aGlzLm9uQmFja0NsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnN0YXRlLnNsaWRlciA9IG5ldyBTbGlkZXI7XG4gICAgICAgIHRoaXMuc3RhdGUuc2xpZGVyLmluaXQoe1xuICAgICAgICAgICAgZWxlbWVudHM6IHRoaXMucmVzb3VyY2VIdG1sRWxlbWVudHMsXG4gICAgICAgICAgICBvbkVsZW1lbnRDbGlja0FjdGlvbjogKGUpID0+IHRoaXMub25SZXNvdXJjZUNsaWNrKGUpLCAvL3RoaXMub25Vbml0Q2xpY2ssXG4gICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogJy5vdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19yZXNvdXJjZV9zbGlkZXJfY29udGFpbmVyJyxcbiAgICAgICAgICAgIGVsZW1lbnRNaW5XaWR0aDoge1xuICAgICAgICAgICAgICAgIG1vYmlsZTogMTYwICsgNSArIDUsXG4gICAgICAgICAgICAgICAgdGFibGV0OiAxNzggKyA4ICsgOCxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAxNzggKyA4ICsgOCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50TWluSGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgbW9iaWxlOiAxNjAgKyA1ICsgNSxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDE3OCArIDggKyA4LFxuICAgICAgICAgICAgICAgIGRlc2t0b3A6IDE3OCArIDggKyA4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyAkKHdpbmRvdykucmVzaXplKHRoaXMucmVmcmVzaFNsaWRlclNpemUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHNob3coKXtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLnNob3coKVwiKVxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5zaG93T3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2xpZGVyLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxuICAgIGhpZGUoKXtcbiAgICAgICAgLy90aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vc2NyZWVuRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4uaGlkZSgpXCIpO1xuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZSl7XG4gICAgICAgICAgICBhbmltYXRpb25zLmhpZGVPcGFjaXR5U2NhbGUodGhpcy5kb21FbGVtZW50cy5zY3JlZW5EaXYpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNZW51UmVzb3VyY2VTdHJpbmdIdG1sKHJlc291cmNlKXtcbiAgICAgICAgdmFyIGJhY2tncm91bmRTdHlsZSA9ICcnO1xuICAgICAgICAgdmFyIGh0bWxTdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fcmVzb3VyY2UtYnRuXCIgaWQ9XCIke3Jlc291cmNlLmlkfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19yZXNvdXJjZV9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInJlc291cmNlLSR7Z2V0UmVzb3VyY2VUeXBlKHJlc291cmNlKX1cIj48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtyZXNvdXJjZS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX3Jlc291cmNlX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke3Jlc291cmNlLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIGh0bWxTdHJpbmc7XG4gICAgfVxuICAgIFxuICAgIG9uUmVzb3VyY2VDbGljayhlKXtcbiAgICAgICAgLy9JZiBpcyArWm9uZVxuICAgICAgICB2YXIgaWQgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignaWQnKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5vblJlc291cmNlQWN0aW9uKHt1bml0TnVtYmVyOiB0aGlzLnN0YXRlLm51bWJlciwgcmVzb3VyY2VJZDogaWR9KTtcbiAgICB9XG4gICAgXG4gICAgb25CYWNrQ2xpY2soKXtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLm9uQmFja0NsaWNrKClcIik7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5vbkJhY2tBY3Rpb24odGhpcy5zdGF0ZS5udW1iZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9fcGx1c1pvbmVSZXNvdXJjZXNNZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==