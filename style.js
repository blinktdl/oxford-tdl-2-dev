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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
exports.AspecRatioBodyClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getLessonById = getLessonById;
exports.getResourceById = getResourceById;
exports.getResourceType = getResourceType;
exports.encodeHtml = encodeHtml;
exports.setBookColor = setBookColor;

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
                    selectedType = 'actividad_html';
                }
            } else if (tag.search('interactive') >= 0) {
                selectedType = 'actividad_html';
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

function encodeHtml(string) {
    return $('<div/>').text(string).html().replace(/&amp;/g, '&');
};

function setBookColor() {
    var bookColor1 = getStyleRuleValue('color', '.bookcolor1');
    if (bookColor1) {
        var styleColor1 = document.createElement('style');
        styleColor1.type = 'text/css';
        styleColor1.innerHTML = '\n            #oup_tdl_splash_screen .oup_splash__content .oup_splash__main_title, #oup_tdl_unit_menu_screen .oup_unit_menu__content .oup_unit_menu__main_title {\n                -webkit-text-stroke: 1px ' + bookColor1 + ';\n            }\n            @media only screen and (min-width: 768px) {\n                #oup_tdl_splash_screen .oup_splash__content .oup_splash__main_title, #oup_tdl_unit_menu_screen .oup_unit_menu__content .oup_unit_menu__main_title {\n                    -webkit-text-stroke: 2px ' + bookColor1 + ';\n                }\n            }\n            #oup_tdl_container .oup_slider .oup_slider__content_and_dots .oup_slider__dots ul li button:before {\n                background-color: ' + bookColor1 + ';\n                color: ' + bookColor1 + ';\n            }\n            #oup_tdl_container .oup_tdl__breadcrumb .oup_tdl__breadcrumb__level1 > strong {\n                background-color: ' + bookColor1 + ';\n            }\n            #oup_tdl_unit_menu_screen .oup_unit_menu__content .oup_unit_menu__unit-btn .oup_unit_menu__unit__title {\n                background-color: ' + bookColor1 + ';\n            }\n            #oup_tdl_lesson_menu_screen .oup_lesson_menu__content .oup_lesson_menu__lesson-btn .oup_lesson_menu__lesson__image {\n                background-color: ' + bookColor1 + ';\n                border-color: ' + bookColor1 + ';\n            }\n            #oup_tdl_lesson_menu_screen .oup_lesson_menu__content .oup_lesson_menu__lesson-btn .oup_lesson_menu__lesson__title {\n                border-color: ' + bookColor1 + ';\n            }\n            #oup_tdl_plus_zone_categories_menu_screen .oup_plus_zone_categories_menu__content .oup_plus_zone_categories_menu__container .oup_plus_zone_categories_menu__category-btn .oup_plus_zone_categories_menu__category__box {\n                border: 3px solid ' + bookColor1 + ';\n            }\n            #oup_tdl_plus_zone_resources_menu_screen .oup_plus_zone_resources_menu__content .oup_plus_zone_resources_menu__resource-btn .oup_plus_zone_resources_menu__resource__image {\n                border-color: ' + bookColor1 + ';\n            }\n            #oup_tdl_plus_zone_resources_menu_screen .oup_plus_zone_resources_menu__content .oup_plus_zone_resources_menu__resource-btn .oup_plus_zone_resources_menu__resource__title {\n                border-color: ' + bookColor1 + ';\n            }\n            body.body_clase.view-mode .navbar-bottom ol.slider-indicators > li.slider-indicator.active {\n                background-color: ' + bookColor1 + ';\n            }\n        ';
        document.getElementsByTagName('head')[0].appendChild(styleColor1);
    }

    var bookColor2 = getStyleRuleValue('color', '.bookcolor2');
    if (bookColor2) {
        var styleColor2 = document.createElement('style');
        styleColor2.type = 'text/css';
        styleColor2.innerHTML = '\n            \n            #oup_tdl_container .oup_slider .oup_slider__content_and_dots .oup_slider__dots ul li.slick-active button:before {\n                background-color: ' + bookColor2 + ';\n                color: ' + bookColor2 + ';\n            }\n            #oup_tdl_container .oup_tdl__breadcrumb .oup_tdl__breadcrumb__level1 > span {\n                background-color: ' + bookColor2 + ';\n            }\n            #oup_tdl_container .oup_tdl__breadcrumb .oup_tdl__breadcrumb__level2 {\n                background-color: ' + bookColor2 + ';\n            }\n            #oup_tdl_unit_menu_screen .oup_unit_menu__content .oup_unit_menu__unit-btn .oup_unit_menu__unit__number {\n                background-color: ' + bookColor2 + ';\n            }\n            #oup_tdl_plus_zone_resources_menu_screen .oup_plus_zone_resources_menu__content .oup_plus_zone_resources_menu__resource-btn .oup_plus_zone_resources_menu__resource__image > span {\n                color: ' + bookColor2 + ';\n            }\n        ';
        document.getElementsByTagName('head')[0].appendChild(styleColor2);
    }
}

function getStyleRuleValue(style, selector) {

    for (var i = 0; i < document.styleSheets.length; i++) {
        var mysheet = document.styleSheets[i];
        var myrules = null;
        try {
            myrules = mysheet.rules || mysheet.cssRules;
        } catch (e) {
            console.warn("Can't read the css rules of: " + mysheet.href, e);
            continue;
        }
        if (myrules) {
            for (var j = 0; j < myrules.length; j++) {
                if (myrules[j].selectorText && myrules[j].selectorText.toLowerCase() === selector) {
                    return myrules[j].style[style];
                }
            }
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(5);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(13);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _responsiveStatus = __webpack_require__(14);

var _responsiveStatus2 = _interopRequireDefault(_responsiveStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
    function Slider() {
        _classCallCheck(this, Slider);

        this.state = {
            elements: [],
            onElementClickAction: null,
            onResize: null,
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
                elementMinHeight = props.elementMinHeight,
                onResize = props.onResize;
            //Title

            this.state.elements = elements;
            this.state.onElementClickAction = onElementClickAction;
            this.state.onResize = onResize;
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
            if (onResize) {
                setTimeout(onResize, 0);
                (0, _jquery2.default)(window).resize(onResize);
            }
        }
    }, {
        key: 'show',
        value: function show() {
            // setTimeout(this.elementsRefresh.bind(this), 0);
            this.elementsRefresh();
            setTimeout(this.state.onResize, 0);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  shave - Shave is a javascript plugin that truncates multi-line text within a html element based on set max height
  @version v2.2.2
  @link https://github.com/dollarshaveclub/shave#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (jeffry.in)
  @license MIT
**/
function shave(target, maxHeight) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!maxHeight) throw Error('maxHeight is required');
  var els = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!els) return;
  var character = opts.character || '…';
  var classname = opts.classname || 'js-shave';
  var spaces = typeof opts.spaces === 'boolean' ? opts.spaces : true;
  var charHtml = "<span class=\"js-shave-char\">".concat(character, "</span>");
  if (!('length' in els)) els = [els];

  for (var i = 0; i < els.length; i += 1) {
    var el = els[i];
    var styles = el.style;
    var span = el.querySelector(".".concat(classname));
    var textProp = el.textContent === undefined ? 'innerText' : 'textContent'; // If element text has already been shaved

    if (span) {
      // Remove the ellipsis to recapture the original text
      el.removeChild(el.querySelector('.js-shave-char'));
      el[textProp] = el[textProp]; // eslint-disable-line
      // nuke span, recombine text
    }

    var fullText = el[textProp];
    var words = spaces ? fullText.split(' ') : fullText; // If 0 or 1 words, we're done

    if (words.length < 2) continue; // Temporarily remove any CSS height for text height calculation

    var heightStyle = styles.height;
    styles.height = 'auto';
    var maxHeightStyle = styles.maxHeight;
    styles.maxHeight = 'none'; // If already short enough, we're done

    if (el.offsetHeight <= maxHeight) {
      styles.height = heightStyle;
      styles.maxHeight = maxHeightStyle;
      continue;
    } // Binary search for number of words which can fit in allotted height


    var max = words.length - 1;
    var min = 0;
    var pivot = void 0;

    while (min < max) {
      pivot = min + max + 1 >> 1; // eslint-disable-line no-bitwise

      el[textProp] = spaces ? words.slice(0, pivot).join(' ') : words.slice(0, pivot);
      el.insertAdjacentHTML('beforeend', charHtml);
      if (el.offsetHeight > maxHeight) max = spaces ? pivot - 1 : pivot - 2;else min = pivot;
    }

    el[textProp] = spaces ? words.slice(0, max).join(' ') : words.slice(0, max);
    el.insertAdjacentHTML('beforeend', charHtml);
    var diff = spaces ? words.slice(max).join(' ') : words.slice(max);
    el.insertAdjacentHTML('beforeend', "<span class=\"".concat(classname, "\" style=\"display:none;\">").concat(diff, "</span>"));
    styles.height = heightStyle;
    styles.maxHeight = maxHeightStyle;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (shave);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _main = __webpack_require__(8);

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
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
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

var _helpers = __webpack_require__(1);

var _urlHelper = __webpack_require__(9);

var _urlHelper2 = _interopRequireDefault(_urlHelper);

var _imagesPreloadHelper = __webpack_require__(10);

var _imagesPreloadHelper2 = _interopRequireDefault(_imagesPreloadHelper);

var _splashScreen = __webpack_require__(11);

var _splashScreen2 = _interopRequireDefault(_splashScreen);

var _unitMenuScreen = __webpack_require__(12);

var _unitMenuScreen2 = _interopRequireDefault(_unitMenuScreen);

var _lessonMenuScreen = __webpack_require__(15);

var _lessonMenuScreen2 = _interopRequireDefault(_lessonMenuScreen);

var _plusZoneCategoriesMenu = __webpack_require__(16);

var _plusZoneCategoriesMenu2 = _interopRequireDefault(_plusZoneCategoriesMenu);

var _plusZoneResourcesMenu = __webpack_require__(17);

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
				//ahora aliminamos las subunidades que no sean visibles para el alumno, si el usuario es alumno
				if ((typeof blink === 'undefined' ? 'undefined' : _typeof(blink)) == 'object') {
					if (blink.user.esAlumno()) {
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

				//PreloadImages
				var preloadImages = new _imagesPreloadHelper2.default();
				preloadImages.add(this.state.unitMenuBakground);
				preloadImages.add(this.state.lessonMenuBakground);
				var resourcesCategoriesSlug = ['video', 'actividad_html', 'url', 'actividad', 'musica', 'libro', 'archivo'];
				var buttonStates = ['', '--hover', '--active'];
				resourcesCategoriesSlug.forEach(function (categorySlug) {
					buttonStates.forEach(function (buttonState) {
						var divElement = document.createElement("div");
						divElement.className = 'resource-' + categorySlug + '-for-js' + buttonState;
						document.body.appendChild(divElement);
						var backImage = window.getComputedStyle(divElement, null).getPropertyValue('background-image');
						backImage = backImage.replace('url(', '').replace(')', '').replace('\'', '').replace('"', '').replace('\'', '').replace('"', '');
						//divElement.remove();
						divElement.style.display = 'none';
					});
				});

				//Pilla los estilos del libro
				(0, _helpers.setBookColor)();
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

			var htmlDOM = '\n\t\t\t<div id="oup_tdl_container">\n\t\t\t\t<div id="oup_tdl_splash_screen" style="background-image: url(' + this.state.splashBackground + ')">\n\t\t\t\t\t<div class="oup_splash__logo_oup"></div>\n\t\t\t\t\t<div class="oup_splash__logo_tdl"></div>\n\t\t\t\t\t<div class="oup_splash__content">\n\t\t\t\t\t\t<h1 class="oup_splash__main_title"></h1>\n\t\t\t\t\t\t<div class="oup_splash__enter"><span>Enter</span></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="oup_splash__footer">\xA9 Oxford University Press</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_unit_menu_screen" style="background-image: url(' + this.state.unitMenuBakground + ')">\n\t\t\t\t\t<div class="oup_unit_menu__content">\n\t\t\t\t\t\t<div class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<h2 class="oup_unit_menu__main_title"></h2>\n\t\t\t\t\t\t\t' + oxfordButtonsHtml + '\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="oup_unit_menu__unit_slider_container"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_lesson_menu_screen" style="background-image: url(' + this.state.lessonMenuBakground + ')">\n\t\t\t\t\t<div class="oup_lesson_menu__content">\n\t\t\t\t\t\t<h2 class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<div class="oup_lesson_menu__main_title oup_tdl__breadcrumb__level1">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t' + oxfordButtonsHtml + '\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<div class="oup_lesson_menu__lesson_slider_container">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_plus_zone_categories_menu_screen" style="background-image: url(' + this.state.plusConeCategoriesBakground + ')">\n\t\t\t\t\t<div class="oup_plus_zone_categories_menu__content">\n\t\t\t\t\t\t<h2 class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<div class="oup_plus_zone_categories_menu__main_title oup_tdl__breadcrumb__level1">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__level2">Plus Zone</div>\n\t\t\t\t\t\t\t' + oxfordButtonsHtml + '\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<div class="oup_plus_zone_categories_menu__container">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="oup_tdl_plus_zone_resources_menu_screen" style="background-image: url(' + this.state.plusZoneResourcesBakground + ')">\n\t\t\t\t\t<div class="oup_plus_zone_resources_menu__content">\n\t\t\t\t\t\t<h2 class="oup_tdl__breadcrumb">\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__back"></div>\n\t\t\t\t\t\t\t<div class="oup_plus_zone_resources_menu__main_title oup_tdl__breadcrumb__level1">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="oup_tdl__breadcrumb__level2">Plus Zone</div>\n\t\t\t\t\t\t\t' + oxfordButtonsHtml + '\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<div class="oup_plus_zone_resources_menu__resource_slider_container">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';

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
				title: (0, _helpers.encodeHtml)(this.state.mainData.title),
				// onEnterAction: this.goToUnitMenu.bind(this),
				onEnterAction: function onEnterAction() {
					return _this.urlHelper.updateUrlHash({
						stateName: 'unitmenu'
					});
				}

			});
			this.screens.unitMenuScreen.init({
				title: (0, _helpers.encodeHtml)(this.state.mainData.title),
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
			$('.navbar').hide();
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
			$('.navbar').show();
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
			$('.navbar').show();
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
			$('.navbar').show();
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
			$('.navbar').show();
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
			$('.navbar').show();
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
			$('.navbar').show();
		}
	}]);

	return OupTdl;
}();

exports.default = OupTdl;

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
            var hashParts = hashName.split('_', 3); //Para dividir las partes del hash con un máximo de 3 partes
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
                urlState.category = hashName.substring(('#pluscategory_' + hashParts[1] + '_').length);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImagesPreload = function () {
    function ImagesPreload() {
        _classCallCheck(this, ImagesPreload);

        this.image = [];
    }

    _createClass(ImagesPreload, [{
        key: 'add',
        value: function add(imagesToLoad) {
            if (typeof imagesToLoad == 'string') {
                imagesToLoad = [imagesToLoad];
            }
            imagesToLoad.forEach(function (imageToLoad) {
                var newImage = new Image();
                newImage.src = imageToLoad;
            });
        }
    }]);

    return ImagesPreload;
}();

exports.default = ImagesPreload;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _animations = __webpack_require__(2);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _animations = __webpack_require__(2);

var _animations2 = _interopRequireDefault(_animations);

var _slider = __webpack_require__(3);

var _slider2 = _interopRequireDefault(_slider);

var _helpers = __webpack_require__(1);

var _shave = __webpack_require__(4);

var _shave2 = _interopRequireDefault(_shave);

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
                },
                onResize: function onResize() {
                    (0, _shave2.default)(document.querySelectorAll('.oup_unit_menu__unit__title span'), 62);
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
            var htmlString = '\n            <div class="oup_unit_menu__unit-btn" number="' + unit.number + '">\n                <div class="oup_unit_menu__unit__number" style="background-image: url(' + unit.image + ');"></div>\n                <div class="oup_unit_menu__unit__title">\n                    <span>' + (0, _helpers.encodeHtml)(unit.title) + '</span>\n                </div>\n            </div>\n            ';
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
/* 13 */
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
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _animations = __webpack_require__(2);

var _animations2 = _interopRequireDefault(_animations);

var _slider = __webpack_require__(3);

var _slider2 = _interopRequireDefault(_slider);

var _helpers = __webpack_require__(1);

var _shave = __webpack_require__(4);

var _shave2 = _interopRequireDefault(_shave);

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
                },
                onResize: function onResize() {
                    (0, _shave2.default)(document.querySelectorAll('.oup_lesson_menu__lesson__title span'), 58);
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
            var htmlString = '\n            <div class="oup_lesson_menu__lesson-btn" id="' + lesson.id + '">\n                <div class="oup_lesson_menu__lesson__image" style="' + backgroundStyle + '"></div>\n                <div class="oup_lesson_menu__lesson__title">\n                    <span>' + (0, _helpers.encodeHtml)(lesson.title) + '</span>\n                </div>\n            </div>\n            ';
            return htmlString;
        }
    }, {
        key: 'getMenuPlusZoneElementStringHtml',
        value: function getMenuPlusZoneElementStringHtml() {
            var htmlString = '\n            <div class="oup_lesson_menu__lesson-btn oup_lesson_menu__lesson--plus-zone-btn">\n                <div class="oup_lesson_menu__lesson__image"></div>\n                <div class="oup_lesson_menu__lesson__title">\n                    <span>Plus Zone</span>\n                </div>\n            </div>\n            ';
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _animations = __webpack_require__(2);

var _animations2 = _interopRequireDefault(_animations);

var _helpers = __webpack_require__(1);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _animations = __webpack_require__(2);

var _animations2 = _interopRequireDefault(_animations);

var _slider = __webpack_require__(3);

var _slider2 = _interopRequireDefault(_slider);

var _helpers = __webpack_require__(1);

var _shave = __webpack_require__(4);

var _shave2 = _interopRequireDefault(_shave);

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
                },
                onResize: function onResize() {
                    (0, _shave2.default)(document.querySelectorAll('.oup_plus_zone_resources_menu__resource__title span'), 76);
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
            var htmlString = '\n            <div class="oup_plus_zone_resources_menu__resource-btn" id="' + resource.id + '">\n                <div class="oup_plus_zone_resources_menu__resource__image">\n                    <strong class="resource-' + (0, _helpers.getResourceType)(resource) + '"></strong>\n                    <span>' + (0, _helpers.encodeHtml)(resource.title) + '</span>\n                </div>\n                <div class="oup_plus_zone_resources_menu__resource__title">\n                    <span>' + (0, _helpers.encodeHtml)(resource.description) + '</span>\n                </div>\n            </div>\n            ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjNlZGRiZGI0MzFiMjhmMmZiNDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc2hhdmUvZGlzdC9zaGF2ZS5lcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3VybEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW1hZ2VzUHJlbG9hZEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX3NwbGFzaFNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX3VuaXRNZW51U2NyZWVuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Jlc3BvbnNpdmVTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL19sZXNzb25NZW51U2NyZWVuLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fcGx1c1pvbmVDYXRlZ29yaWVzTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX3BsdXNab25lUmVzb3VyY2VzTWVudS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJkZXYiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJnZXRMZXNzb25CeUlkIiwiZ2V0UmVzb3VyY2VCeUlkIiwiZ2V0UmVzb3VyY2VUeXBlIiwiZW5jb2RlSHRtbCIsInNldEJvb2tDb2xvciIsImxlc3NvbklkIiwibWFpbkRhdGEiLCJzZWxlY3RlZExlc3NvbiIsInVuaXRzIiwiZm9yRWFjaCIsInVuaXQiLCJzdWJ1bml0cyIsImxlc3NvbiIsImlkIiwicmVzb3VyY2VJZCIsInNlbGVjdGVkUmVzb3VyY2UiLCJyZXNvdXJjZXMiLCJyZXNvdXJjZSIsInNlbGVjdGVkVHlwZSIsInR5cGUiLCJ0YWciLCJpbmRleE9mIiwic2VhcmNoIiwiQXNwZWNSYXRpb0JvZHlDbGFzcyIsImVsZW1lbnQiLCJjYWxsYmFjayIsInVzZWRfZWxlbWVudCIsImRvY3VtZW50IiwiY2hlY2siLCJfdGhpcyIsIiQiLCJyZXNpemUiLCJkaXNwbGF5U3R5bGUiLCJjc3MiLCJ4Iiwib3V0ZXJXaWR0aCIsInkiLCJvdXRlckhlaWdodCIsImVsZW1lbmRUb0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInN0cmluZyIsInRleHQiLCJodG1sIiwicmVwbGFjZSIsImJvb2tDb2xvcjEiLCJnZXRTdHlsZVJ1bGVWYWx1ZSIsInN0eWxlQ29sb3IxIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJib29rQ29sb3IyIiwic3R5bGVDb2xvcjIiLCJzdHlsZSIsInNlbGVjdG9yIiwiaSIsInN0eWxlU2hlZXRzIiwibGVuZ3RoIiwibXlzaGVldCIsIm15cnVsZXMiLCJydWxlcyIsImNzc1J1bGVzIiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwiaHJlZiIsImoiLCJzZWxlY3RvclRleHQiLCJ0b0xvd2VyQ2FzZSIsIkFuaW1hdGlvbnMiLCJzaG93VGltZW91dCIsImRhdGEiLCJzdGF0ZSIsImRvbUVsZW1lbnRzIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsInNob3ciLCJsb2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZW1wIiwic2Nyb2xsSGVpZ2h0IiwidHJhbnNpdGlvbkV2ZW50Iiwid2hpY2hUcmFuc2l0aW9uRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInQiLCJlbCIsInRyYW5zaXRpb25zIiwidW5kZWZpbmVkIiwiU2xpZGVyIiwiZWxlbWVudHMiLCJvbkVsZW1lbnRDbGlja0FjdGlvbiIsIm9uUmVzaXplIiwiY29udGFpbmVyU2VsZWN0b3IiLCJlbGVtZW50TWluV2lkdGgiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiZWxlbWVudE1pbkhlaWdodCIsInNsaWRlckN1cnJlbnRQYWdlIiwicmFuZG9tSWQiLCJyZXNpemVTdGFydGVkIiwic2xpY2tTdGFydGVkIiwicHJvcHMiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJlbGVtZW50c1JlZnJlc2giLCJiaW5kIiwiJHNsaWRlciIsImhhc0NsYXNzIiwic2xpY2siLCJmaW5kIiwiaGVpZ2h0IiwiY29scyIsImZsb29yIiwid2lkdGgiLCJlbGVtZW50V2lkdGgiLCJyb3dzIiwiZWxlbWVudEhlaWdodCIsImVsZW1lbnRzUGVyUGFnZSIsInBhZ2VzTnVtYmVyIiwiY2VpbCIsImh0bWxTdHJpbmciLCJwYWdlIiwicGFnZUh0bWxTdHJpbmciLCJpbmRleCIsImNoaWxkcmVuIiwiY2xpY2siLCJvbiIsImVsZW1lbnRzUmVzaXplIiwiZXZlbnQiLCJzbGlkZXIiLCJjdXJyZW50U2xpZGUiLCJpbmZpbml0ZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImRvdHMiLCJhcHBlbmREb3RzIiwiaW5pdGlhbFNsaWRlIiwib3VwVGRsQXBwIiwibW9kdWxlIiwiZXhwb3J0cyIsImluaXQiLCJ3cml0ZSIsIk91cFRkbCIsInNwbGFzaEJhY2tncm91bmQiLCJ1bml0TWVudUJha2dyb3VuZCIsImxlc3Nvbk1lbnVCYWtncm91bmQiLCJwbHVzQ29uZUNhdGVnb3JpZXNCYWtncm91bmQiLCJwbHVzWm9uZVJlc291cmNlc0Jha2dyb3VuZCIsInNjcmVlbnMiLCJKU09OIiwic3RyaW5naWZ5IiwiaWRjbGFzZSIsImltYWdlIiwic2hpZnQiLCJibGluayIsInVzZXIiLCJlc0FsdW1ubyIsIm9ubHlWaXNpYmxlVGVhY2hlcnMiLCJzcGxpY2UiLCJwcmVsb2FkSW1hZ2VzIiwicmVzb3VyY2VzQ2F0ZWdvcmllc1NsdWciLCJidXR0b25TdGF0ZXMiLCJkaXZFbGVtZW50IiwiY2xhc3NOYW1lIiwiY2F0ZWdvcnlTbHVnIiwiYnV0dG9uU3RhdGUiLCJib2R5IiwiYmFja0ltYWdlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJkaXNwbGF5IiwiaW5pdE1lbnUiLCJveGZvcmRCdXR0b25zSHRtbCIsImVzUHJvZmVzb3IiLCJodG1sRE9NIiwiYXBwZW5kIiwiaXNBcHAiLCJpc09mZmxpbmVQQyIsImdldEVsZW1lbnRCeUlkIiwiYm90dG9tIiwic3BsYXNoU2NyZWVuIiwidW5pdE1lbnVTY3JlZW4iLCJsZXNzb25NZW51U2NyZWVuIiwicGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbiIsInBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbiIsInVybEhlbHBlciIsIm9uRW50ZXJBY3Rpb24iLCJ1cGRhdGVVcmxIYXNoIiwic3RhdGVOYW1lIiwib25Vbml0QWN0aW9uIiwib25CYWNrQWN0aW9uIiwicHJldmVudERlZmF1bHQiLCJyZXN0Iiwib3BlblVybCIsInByb3AiLCJnb1RvU3BsYXNoIiwiZ29Ub1VuaXRNZW51IiwiZ29Ub0xlc3Nvbk1lbnUiLCJnb1RvUGx1c1pvbmVDYXRlZ29yaWVzTWVudSIsImdvVG9QbHVzWm9uZVJlc291cmNlc01lbnUiLCJoaWRlIiwidW5pdE51bWJlciIsInNlbGVjdGVkVW5pdCIsIm51bWJlciIsInVuaXRUaXRsZSIsImxlc3NvbnMiLCJoYXNMZXNzb25zIiwiaGFzUmVzb3VyY2VzIiwidXBkYXRlIiwib25QbHVzWm9uZUFjdGlvbiIsIm9uTGVzc29uQWN0aW9uIiwiZ29Ub0xlc3NvbiIsImhhc1BsdXNab25lIiwiZXZhbCIsIm9uY2xpY2tUaXRsZSIsImNhdGVnb3JpZXMiLCJwdXNoIiwiYmFja0FjdGlvbiIsIm9uQ2F0ZWdvcnlBY3Rpb24iLCJjYXRlZ29yeSIsImNlcnJhcklmcmFtZSIsIm9uUmVzb3VyY2VBY3Rpb24iLCJnb1RvUGx1c1pvbmVSZXNvdXJjZSIsIlVybEhlbHBlciIsInVybFN0YXRlIiwiYWN0aW9ucyIsIm9uaGFzaGNoYW5nZSIsImdvVG9TdGF0ZSIsImhhc2hOYW1lIiwiaGFzaFBhcnRzIiwic3BsaXQiLCJzdWJzdHJpbmciLCJ1cGRhdGVDdXJyZW50U3RhdGUiLCJ1cmxIYXNoIiwiSW1hZ2VzUHJlbG9hZCIsImltYWdlc1RvTG9hZCIsIm5ld0ltYWdlIiwiSW1hZ2UiLCJzcmMiLCJpbWFnZVRvTG9hZCIsImFuaW1hdGlvbnMiLCJTcGxhc2hTY3JlZW4iLCJhY3RpdmUiLCJzY3JlZW5EaXYiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZW50ZXJCdG4iLCJvbmNsaWNrIiwic2hvd09wYWNpdHlTY2FsZSIsImhpZGVPcGFjaXR5U2NhbGUiLCJVbml0TWVudVNjcmVlbiIsImJhY2tCdXR0b24iLCJnZXQiLCJzbGlkZXJIaWRkZW5FbGVtZW50cyIsInVuaXRIdG1sRWxlbWVudHMiLCJnZXRNZW51VW5pdEVsZW1lbnRTdHJpbmdIdG1sIiwidW5iaW5kIiwib25Vbml0Q2xpY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudFRhcmdldCIsImF0dHIiLCJyZXNwb25zaXZlU3RhdHVzIiwiaW5uZXJXaWR0aCIsIkxlc3Nvbk1lbnVTY3JlZW4iLCJsZXNzb25IdG1sRWxlbWVudHMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJnZXRNZW51UGx1c1pvbmVFbGVtZW50U3RyaW5nSHRtbCIsImdldE1lbnVMZXNzb25FbGVtZW50U3RyaW5nSHRtbCIsIm9uTGVzc29uQ2xpY2siLCJiYWNrZ3JvdW5kU3R5bGUiLCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuIiwiaHRtbEVsZW1lbnRzIiwiZ2V0TWVudUNhdGVnb3J5U3RyaW5nSHRtbCIsIm9uQ2F0ZWdvcnlDbGljayIsIm9uQmFja0NsaWNrIiwiYXNwZWNSYXRpb0JvZHlDbGFzcyIsImFuY2hvIiwicGFyc2VJbnQiLCJhbHRvIiwibWluIiwibWFyZ2luVG9wIiwiUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuIiwicmVzb3VyY2VIdG1sRWxlbWVudHMiLCJnZXRNZW51UmVzb3VyY2VTdHJpbmdIdG1sIiwib25SZXNvdXJjZUNsaWNrIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOzs7OztBQUNBLElBQU1BLFNBQVM7QUFDWEMsU0FBS0MsT0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsSUFBd0I7QUFEbEIsQ0FBZjtrQkFHZUosTTs7Ozs7Ozs7Ozs7Ozs7OztRQ0ZDSyxhLEdBQUFBLGE7UUFhQUMsZSxHQUFBQSxlO1FBYUFDLGUsR0FBQUEsZTtRQW1EQUMsVSxHQUFBQSxVO1FBS0FDLFksR0FBQUEsWTs7QUFwRmhCOzs7Ozs7OztBQUVPLFNBQVNKLGFBQVQsT0FBNkM7QUFBQSxRQUFyQkssUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsUUFBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUNoRCxRQUFJQyxpQkFBaUIsS0FBckI7QUFDQUQsYUFBU0UsS0FBVCxDQUFlQyxPQUFmLENBQXVCLGdC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Q0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNBQW1DOztBQUVuQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFF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QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhOztBQUViLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FB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OztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckIsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGlDQUFpQyw2QkFBNkI7O0FBRTlEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JELGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLG9DQUFvQyx1QkFBdUI7QUFDM0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUEsYUFBYTs7O0FBR2IsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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LDJCIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiM2VkZGJkYjQzMWIyOGYyZmI0NCIsIid1c2Ugc3RyaWN0J1xuY29uc3QgY29uZmlnID0ge1xuICAgIGRldjogd2luZG93LmxvY2F0aW9uLmhhc2ggPT0gJyNkZXYnLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29uZmlnLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMZXNzb25CeUlkKHtsZXNzb25JZCwgbWFpbkRhdGF9KSB7XG4gICAgbGV0IHNlbGVjdGVkTGVzc29uID0gZmFsc2U7XG4gICAgbWFpbkRhdGEudW5pdHMuZm9yRWFjaCh1bml0ID0+IHsgIFxuICAgICAgICB1bml0LnN1YnVuaXRzLmZvckVhY2gobGVzc29uID0+IHtcbiAgICAgICAgICAgIGlmKGxlc3Nvbi5pZCoxID09IGxlc3NvbklkKXtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExlc3NvbiA9IGxlc3NvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0ZWRMZXNzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNvdXJjZUJ5SWQoe3Jlc291cmNlSWQsIG1haW5EYXRhfSkge1xuICAgIGxldCBzZWxlY3RlZFJlc291cmNlID0gZmFsc2U7XG4gICAgbWFpbkRhdGEudW5pdHMuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgdW5pdC5yZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiB7XG4gICAgICAgICAgICBpZihyZXNvdXJjZS5pZCA9PSByZXNvdXJjZUlkKXtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJlc291cmNlID0gcmVzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkUmVzb3VyY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNvdXJjZVR5cGUocmVzb3VyY2UpIHtcbiAgICBsZXQgc2VsZWN0ZWRUeXBlID0gcmVzb3VyY2UudHlwZTtcbiAgICBpZihzZWxlY3RlZFR5cGUgPT0gJ2FjdGl2aWRhZCcpe1xuICAgICAgICBjb25zdCB0YWcgPSByZXNvdXJjZS50YWc7XG4gICAgICAgIGlmKHRhZyl7XG4gICAgICAgICAgICAvL1NpIGVzIHRhZ3MgZXMgdW4gYXJyYXkgbyBzdHJpbmdcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0YWcgIT0gJ3N0cmluZycpe1xuICAgICAgICAgICAgICAgIGlmKHRhZy5pbmRleE9mKCdpbnRlcmFjdGl2ZScpPj0wKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUeXBlID0gJ2FjdGl2aWRhZF9odG1sJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYodGFnLnNlYXJjaCgnaW50ZXJhY3RpdmUnKT49MCl7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUeXBlID0gJ2FjdGl2aWRhZF9odG1sJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRUeXBlO1xufVxuXG5leHBvcnQgY2xhc3MgQXNwZWNSYXRpb0JvZHlDbGFzcyB7XG4gICBcbiAgICBpbml0KGVsZW1lbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgdmFyIHVzZWRfZWxlbWVudCA9IGVsZW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuY2hlY2sodXNlZF9lbGVtZW50LCBjYWxsYmFjayk7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIF90aGlzLmNoZWNrKHVzZWRfZWxlbWVudCwgY2FsbGJhY2spXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGVjayh1c2VkX2VsZW1lbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgdmFyIGRpc3BsYXlTdHlsZTtcbiAgICAgICAgaWYodXNlZF9lbGVtZW50ICE9IGRvY3VtZW50KXtcbiAgICAgICAgICAgIGRpc3BsYXlTdHlsZSA9ICQodXNlZF9lbGVtZW50ICsgJz4qJykuY3NzKCdkaXNwbGF5Jyk7XG4gICAgICAgICAgICAkKHVzZWRfZWxlbWVudCArICc+KicpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHg9JCh1c2VkX2VsZW1lbnQpLm91dGVyV2lkdGgoKSxcbiAgICAgICAgeT0kKHVzZWRfZWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgaWYodXNlZF9lbGVtZW50ICE9IGRvY3VtZW50KXtcbiAgICAgICAgICAgICQodXNlZF9lbGVtZW50ICsgJz4qJykuY3NzKCdkaXNwbGF5JywgZGlzcGxheVN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWxlbWVuZFRvQ2xhc3MgPSB1c2VkX2VsZW1lbnQgPT0gZG9jdW1lbnQgPyAnYm9keScgOiB1c2VkX2VsZW1lbnQ7XG4gICAgICAgIGlmKHg8eSl7XG4gICAgICAgICAgICAkKGVsZW1lbmRUb0NsYXNzKS5hZGRDbGFzcygnb3VwdGRsLXBvcnRyYWl0JykucmVtb3ZlQ2xhc3MoJ291cHRkbC1sYW5kc2NhcGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoZWxlbWVuZFRvQ2xhc3MpLnJlbW92ZUNsYXNzKCdvdXB0ZGwtcG9ydHJhaXQnKS5hZGRDbGFzcygnb3VwdGRsLWxhbmRzY2FwZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVIdG1sKHN0cmluZyl7XG4gICAgcmV0dXJuICQoJzxkaXYvPicpLnRleHQoc3RyaW5nKS5odG1sKCkucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEJvb2tDb2xvcigpe1xuICAgIHZhciBib29rQ29sb3IxID0gZ2V0U3R5bGVSdWxlVmFsdWUoJ2NvbG9yJywgJy5ib29rY29sb3IxJyk7XG4gICAgaWYoYm9va0NvbG9yMSl7XG4gICAgICAgIHZhciBzdHlsZUNvbG9yMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlQ29sb3IxLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICBzdHlsZUNvbG9yMS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAjb3VwX3RkbF9zcGxhc2hfc2NyZWVuIC5vdXBfc3BsYXNoX19jb250ZW50IC5vdXBfc3BsYXNoX19tYWluX3RpdGxlLCAjb3VwX3RkbF91bml0X21lbnVfc2NyZWVuIC5vdXBfdW5pdF9tZW51X19jb250ZW50IC5vdXBfdW5pdF9tZW51X19tYWluX3RpdGxlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggJHtib29rQ29sb3IxfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAjb3VwX3RkbF9zcGxhc2hfc2NyZWVuIC5vdXBfc3BsYXNoX19jb250ZW50IC5vdXBfc3BsYXNoX19tYWluX3RpdGxlLCAjb3VwX3RkbF91bml0X21lbnVfc2NyZWVuIC5vdXBfdW5pdF9tZW51X19jb250ZW50IC5vdXBfdW5pdF9tZW51X19tYWluX3RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICR7Ym9va0NvbG9yMX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI291cF90ZGxfY29udGFpbmVyIC5vdXBfc2xpZGVyIC5vdXBfc2xpZGVyX19jb250ZW50X2FuZF9kb3RzIC5vdXBfc2xpZGVyX19kb3RzIHVsIGxpIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Ym9va0NvbG9yMX07XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7Ym9va0NvbG9yMX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjb3VwX3RkbF9jb250YWluZXIgLm91cF90ZGxfX2JyZWFkY3J1bWIgLm91cF90ZGxfX2JyZWFkY3J1bWJfX2xldmVsMSA+IHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtib29rQ29sb3IxfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNvdXBfdGRsX3VuaXRfbWVudV9zY3JlZW4gLm91cF91bml0X21lbnVfX2NvbnRlbnQgLm91cF91bml0X21lbnVfX3VuaXQtYnRuIC5vdXBfdW5pdF9tZW51X191bml0X190aXRsZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtib29rQ29sb3IxfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNvdXBfdGRsX2xlc3Nvbl9tZW51X3NjcmVlbiAub3VwX2xlc3Nvbl9tZW51X19jb250ZW50IC5vdXBfbGVzc29uX21lbnVfX2xlc3Nvbi1idG4gLm91cF9sZXNzb25fbWVudV9fbGVzc29uX19pbWFnZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtib29rQ29sb3IxfTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7Ym9va0NvbG9yMX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjb3VwX3RkbF9sZXNzb25fbWVudV9zY3JlZW4gLm91cF9sZXNzb25fbWVudV9fY29udGVudCAub3VwX2xlc3Nvbl9tZW51X19sZXNzb24tYnRuIC5vdXBfbGVzc29uX21lbnVfX2xlc3Nvbl9fdGl0bGUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtib29rQ29sb3IxfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNvdXBfdGRsX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfc2NyZWVuIC5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY29udGVudCAub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NvbnRhaW5lciAub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5LWJ0biAub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5X19ib3gge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICR7Ym9va0NvbG9yMX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjb3VwX3RkbF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfc2NyZWVuIC5vdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19jb250ZW50IC5vdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19yZXNvdXJjZS1idG4gLm91cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX3Jlc291cmNlX19pbWFnZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke2Jvb2tDb2xvcjF9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI291cF90ZGxfcGx1c196b25lX3Jlc291cmNlc19tZW51X3NjcmVlbiAub3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fY29udGVudCAub3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fcmVzb3VyY2UtYnRuIC5vdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19yZXNvdXJjZV9fdGl0bGUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtib29rQ29sb3IxfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHkuYm9keV9jbGFzZS52aWV3LW1vZGUgLm5hdmJhci1ib3R0b20gb2wuc2xpZGVyLWluZGljYXRvcnMgPiBsaS5zbGlkZXItaW5kaWNhdG9yLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtib29rQ29sb3IxfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZUNvbG9yMSk7XG4gICAgfVxuXG4gICAgdmFyIGJvb2tDb2xvcjIgPSBnZXRTdHlsZVJ1bGVWYWx1ZSgnY29sb3InLCAnLmJvb2tjb2xvcjInKTtcbiAgICBpZihib29rQ29sb3IyKXtcbiAgICAgICAgdmFyIHN0eWxlQ29sb3IyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGVDb2xvcjIudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIHN0eWxlQ29sb3IyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgI291cF90ZGxfY29udGFpbmVyIC5vdXBfc2xpZGVyIC5vdXBfc2xpZGVyX19jb250ZW50X2FuZF9kb3RzIC5vdXBfc2xpZGVyX19kb3RzIHVsIGxpLnNsaWNrLWFjdGl2ZSBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2Jvb2tDb2xvcjJ9O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke2Jvb2tDb2xvcjJ9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI291cF90ZGxfY29udGFpbmVyIC5vdXBfdGRsX19icmVhZGNydW1iIC5vdXBfdGRsX19icmVhZGNydW1iX19sZXZlbDEgPiBzcGFuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2Jvb2tDb2xvcjJ9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI291cF90ZGxfY29udGFpbmVyIC5vdXBfdGRsX19icmVhZGNydW1iIC5vdXBfdGRsX19icmVhZGNydW1iX19sZXZlbDIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Ym9va0NvbG9yMn07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjb3VwX3RkbF91bml0X21lbnVfc2NyZWVuIC5vdXBfdW5pdF9tZW51X19jb250ZW50IC5vdXBfdW5pdF9tZW51X191bml0LWJ0biAub3VwX3VuaXRfbWVudV9fdW5pdF9fbnVtYmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2Jvb2tDb2xvcjJ9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI291cF90ZGxfcGx1c196b25lX3Jlc291cmNlc19tZW51X3NjcmVlbiAub3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fY29udGVudCAub3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fcmVzb3VyY2UtYnRuIC5vdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19yZXNvdXJjZV9faW1hZ2UgPiBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtib29rQ29sb3IyfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZUNvbG9yMik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdHlsZVJ1bGVWYWx1ZShzdHlsZSwgc2VsZWN0b3IpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG15c2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICAgICAgdmFyIG15cnVsZXMgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbXlydWxlcyA9IG15c2hlZXQucnVsZXMgfHwgbXlzaGVldC5jc3NSdWxlcztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2FuJ3QgcmVhZCB0aGUgY3NzIHJ1bGVzIG9mOiBcIiArIG15c2hlZXQuaHJlZiwgZSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZihteXJ1bGVzKXtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbXlydWxlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChteXJ1bGVzW2pdLnNlbGVjdG9yVGV4dCAmJiBteXJ1bGVzW2pdLnNlbGVjdG9yVGV4dC50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXlydWxlc1tqXS5zdHlsZVtzdHlsZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaGVscGVycy5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5jbGFzcyBBbmltYXRpb25zIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnNob3dUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gICAgaW5pdChkYXRhKXtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGRhdGE7XG4gICAgICAgIC8vVGl0bGVcbiAgICAgICAgZG9tRWxlbWVudHMudGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnN0YXRlLnRpdGxlO1xuICAgICAgICB0aGlzLnNob3coKVxuXG4gICAgICAgIGlmKGNvbmZpZy5kZXYpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTcGxhc2hTY3JlZW4uaW5pdCgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbiAgICBzaG93T3BhY2l0eVNjYWxlKGVsZW1lbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfc2hvdycpO1xuICAgICAgICAvL1BhcmEgYWN0aXZhciBlbCBkaXNwbGF5OiBibG9ja1xuICAgICAgICB2YXIgdGVtcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKTtcbiAgICAgICAgdHJhbnNpdGlvbkV2ZW50ICYmIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYW5pbWF0ZScpO1xuICAgIH1cbiAgICBoaWRlT3BhY2l0eVNjYWxlKGVsZW1lbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYW5pbWF0ZScpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG93VGltZW91dCk7XG4gICAgICAgIHRoaXMuc2hvd1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9zaG93Jyk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgICAgIC8vUGFyYSBhY3RpdmFyIGVsIGRpc3BsYXk6IGJsb2NrXG4gICAgICAgIC8vIHZhciB0ZW1wID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIC8vIHZhciB0cmFuc2l0aW9uRXZlbnQgPSB3aGljaFRyYW5zaXRpb25FdmVudCgpO1xuICAgICAgICAvLyB0cmFuc2l0aW9uRXZlbnQgJiYgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FdmVudCwgY2FsbGJhY2spO1xuICAgICAgICAvLyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9hbmltYXRlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25zO1xuXG5mdW5jdGlvbiB3aGljaFRyYW5zaXRpb25FdmVudCgpe1xuICAgIHZhciB0O1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG4gICAgdmFyIHRyYW5zaXRpb25zID0ge1xuICAgICAgJ3RyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcbiAgICAgICdPVHJhbnNpdGlvbic6J29UcmFuc2l0aW9uRW5kJyxcbiAgICAgICdNb3pUcmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXG4gICAgICAnV2Via2l0VHJhbnNpdGlvbic6J3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgfVxuXG4gICAgZm9yKHQgaW4gdHJhbnNpdGlvbnMpe1xuICAgICAgICBpZiggZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25zW3RdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9hbmltYXRpb25zLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCByZXNwb25zaXZlU3RhdHVzIGZyb20gJy4vcmVzcG9uc2l2ZVN0YXR1cyc7XG5cbmNsYXNzIFNsaWRlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVsZW1lbnRzOiBbXSxcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrQWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgb25SZXNpemU6IG51bGwsXG4gICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogbnVsbCxcbiAgICAgICAgICAgIGVsZW1lbnRNaW5XaWR0aDoge1xuICAgICAgICAgICAgICAgIG1vYmlsZTogMCxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDAsXG4gICAgICAgICAgICAgICAgZGVza3RvcDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50TWluSGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgbW9iaWxlOiAwLFxuICAgICAgICAgICAgICAgIHRhYmxldDogMCxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNsaWRlckN1cnJlbnRQYWdlOiAwLFxuICAgICAgICAgICAgcmFuZG9tSWQ6ICcnLFxuICAgICAgICAgICAgcmVzaXplU3RhcnRlZDogZmFsc2UsXG4gICAgICAgICAgICBzbGlja1N0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGluaXQocHJvcHMpe1xuICAgICAgICB2YXIgeyBvbkVsZW1lbnRDbGlja0FjdGlvbiwgZWxlbWVudHMsIGNvbnRhaW5lclNlbGVjdG9yLCBlbGVtZW50TWluV2lkdGgsIGVsZW1lbnRNaW5IZWlnaHQsIG9uUmVzaXplIH0gPSBwcm9wcztcbiAgICAgICAgLy9UaXRsZVxuICAgICAgICB0aGlzLnN0YXRlLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgICAgIHRoaXMuc3RhdGUub25FbGVtZW50Q2xpY2tBY3Rpb24gPSBvbkVsZW1lbnRDbGlja0FjdGlvbjtcbiAgICAgICAgdGhpcy5zdGF0ZS5vblJlc2l6ZSA9IG9uUmVzaXplO1xuICAgICAgICB0aGlzLnN0YXRlLmNvbnRhaW5lclNlbGVjdG9yID0gY29udGFpbmVyU2VsZWN0b3I7XG4gICAgICAgIHRoaXMuc3RhdGUuZWxlbWVudE1pbldpZHRoID0gZWxlbWVudE1pbldpZHRoO1xuICAgICAgICB0aGlzLnN0YXRlLmVsZW1lbnRNaW5IZWlnaHQgPSBlbGVtZW50TWluSGVpZ2h0O1xuXG4gICAgICAgIGlmKGNvbmZpZy5kZXYpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTbGlkZXIuaW5pdCgpXCIpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLnJhbmRvbUlkID0gJ2lkXycgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqOTk5OTkpO1xuICAgICAgICAkKGNvbnRhaW5lclNlbGVjdG9yKS5hZGRDbGFzcygnb3VwX3NsaWRlcicpLmh0bWwoYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9zbGlkZXJfX2NvbnRlbnRfYW5kX2RvdHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLnN0YXRlLnJhbmRvbUlkfV9fY29udGVudFwiIGNsYXNzPVwib3VwX3NsaWRlcl9fY29udGVudFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfc2xpZGVyX19kb3RzXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfc2xpZGVyX19hcnJvd3NcIj48L2Rpdj5cbiAgICAgICAgYCk7XG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLnJlc2l6ZVN0YXJ0ZWQpe1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXNpemVTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUodGhpcy5lbGVtZW50c1JlZnJlc2guYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYob25SZXNpemUpe1xuICAgICAgICAgICAgc2V0VGltZW91dChvblJlc2l6ZSwgMCk7XG4gICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKG9uUmVzaXplKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93KCl7XG4gICAgICAgIC8vIHNldFRpbWVvdXQodGhpcy5lbGVtZW50c1JlZnJlc2guYmluZCh0aGlzKSwgMCk7XG4gICAgICAgIHRoaXMuZWxlbWVudHNSZWZyZXNoKCk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zdGF0ZS5vblJlc2l6ZSwgMCk7XG4gICAgfVxuICAgIFxuICAgIGVsZW1lbnRzUmVmcmVzaCgpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTbGlkZXIuZWxlbWVudHNSZWZyZXNoKClcIilcbiAgICAgICAgdmFyICRzbGlkZXIgPSAkKCcjJyArIHRoaXMuc3RhdGUucmFuZG9tSWQgKyAnX19jb250ZW50Jyk7IC8vJCh0aGlzLnN0YXRlLmNvbnRhaW5lclNlbGVjdG9yICsgJyAub3VwX3NsaWRlcl9fY29udGVudCcpO1xuICAgICAgICAvL0Rlc3Ryb3lcbiAgICAgICAgaWYoJHNsaWRlci5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSl7XG4gICAgICAgICAgICAkc2xpZGVyLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgJHNsaWRlci5odG1sKCcnKTtcbiAgICAgICAgJHNsaWRlci5jc3MoJ2hlaWdodCcsICgkKHRoaXMuc3RhdGUuY29udGFpbmVyU2VsZWN0b3IpLmZpbmQoJy5vdXBfc2xpZGVyX19jb250ZW50X2FuZF9kb3RzJykuaGVpZ2h0KCkgLSAkKHRoaXMuc3RhdGUuY29udGFpbmVyU2VsZWN0b3IpLmZpbmQoJy5vdXBfc2xpZGVyX19kb3RzJykuaGVpZ2h0KCkpICsgJ3B4Jyk7XG4gICAgICAgIHZhciBjb2xzID0gTWF0aC5mbG9vcigkc2xpZGVyLndpZHRoKCkgLyB0aGlzLnN0YXRlLmVsZW1lbnRNaW5XaWR0aFtyZXNwb25zaXZlU3RhdHVzKCldKSB8fCAxO1xuICAgICAgICB0aGlzLnN0YXRlLmVsZW1lbnRXaWR0aCA9IE1hdGguZmxvb3IoJHNsaWRlci53aWR0aCgpIC8gY29scyk7XG4gICAgICAgIHZhciByb3dzID0gTWF0aC5mbG9vcigkc2xpZGVyLmhlaWdodCgpIC8gdGhpcy5zdGF0ZS5lbGVtZW50TWluSGVpZ2h0W3Jlc3BvbnNpdmVTdGF0dXMoKV0pIHx8IDE7XG4gICAgICAgIHRoaXMuc3RhdGUuZWxlbWVudEhlaWdodCA9IE1hdGguZmxvb3IoJHNsaWRlci5oZWlnaHQoKSAvIHJvd3MpO1xuICAgICAgICBcbiAgICAgICAgdmFyIGVsZW1lbnRzUGVyUGFnZSA9IGNvbHMqcm93cztcbiAgICAgICAgdmFyIHBhZ2VzTnVtYmVyID0gTWF0aC5jZWlsKHRoaXMuc3RhdGUuZWxlbWVudHMubGVuZ3RoIC8gZWxlbWVudHNQZXJQYWdlKTtcbiAgICAgICAgLy8gaWYoY29uZmlnLmRldil7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlNsaWRlciBjYWxjdWxhdGlvbnM6XCIpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZXNwb25zaXZlU3RhdHVzOiBcIiwgcmVzcG9uc2l2ZVN0YXR1cygpKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicm93c1wiLCByb3dzKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY29sc1wiLCBjb2xzKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwidGhpcy5zdGF0ZS5lbGVtZW50SGVpZ2h0XCIsIHRoaXMuc3RhdGUuZWxlbWVudEhlaWdodFtyZXNwb25zaXZlU3RhdHVzKCldKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudHNQZXJQYWdlXCIsIGVsZW1lbnRzUGVyUGFnZSk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInRoaXMuc3RhdGUuZWxlbWVudHMubGVuZ3RoXCIsIHRoaXMuc3RhdGUuZWxlbWVudHMubGVuZ3RoKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicGFnZXNOdW1iZXJcIiwgcGFnZXNOdW1iZXIpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCIkc2xpZGVyLmhlaWdodCgpIC8gcm93c1wiLCAkc2xpZGVyLmhlaWdodCgpICsnLycgKyByb3dzLCAkc2xpZGVyLmhlaWdodCgpIC8gcm93cyk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJvd3MgKiB0aGlzLnN0YXRlLmVsZW1lbnRIZWlnaHRcIiwgcm93cyArJyonKyB0aGlzLnN0YXRlLmVsZW1lbnRIZWlnaHRbcmVzcG9uc2l2ZVN0YXR1cygpXSwgcm93cyAqIHRoaXMuc3RhdGUuZWxlbWVudEhlaWdodFtyZXNwb25zaXZlU3RhdHVzKCldKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgICAgdmFyIGh0bWxTdHJpbmcgPSAnJztcbiAgICAgICAgZm9yIChsZXQgcGFnZSA9IDA7IHBhZ2UgPCBwYWdlc051bWJlcjsgcGFnZSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZUh0bWxTdHJpbmcgPSAnPGRpdiBjbGFzcz1cIm91cF9fc2xpZGVyX19zbGlkZVwiPic7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHNQZXJQYWdlOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5lbGVtZW50c1twYWdlICogZWxlbWVudHNQZXJQYWdlICsgaW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUh0bWxTdHJpbmcgKz0gdGhpcy5zdGF0ZS5lbGVtZW50c1twYWdlICogZWxlbWVudHNQZXJQYWdlICsgaW5kZXhdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vcGFnZUh0bWxTdHJpbmcgKz0gYDxkaXYgY2xhc3M9XCJvdXBfX3NsaWRlcl9fc2xpZGVfX2l0ZW0tLW5vX2NvbnRlbnRcIj48L2Rpdj5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2VIdG1sU3RyaW5nICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGFnZUh0bWxTdHJpbmcpO1xuICAgICAgICAgICAgaHRtbFN0cmluZyArPSBwYWdlSHRtbFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICAkc2xpZGVyLmh0bWwoaHRtbFN0cmluZyk7XG4gICAgICAgICRzbGlkZXIuZmluZCgnLm91cF9fc2xpZGVyX19zbGlkZScpLmNoaWxkcmVuKCkuY2xpY2soKGVsZW1lbnQpID0+IHRoaXMuc3RhdGUub25FbGVtZW50Q2xpY2tBY3Rpb24oZWxlbWVudCkpO1xuICAgICAgICBpZighdGhpcy5zdGF0ZS5zbGlja1N0YXJ0ZWQpe1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zbGlja1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgJHNsaWRlci5vbignaW5pdCcsIHRoaXMuZWxlbWVudHNSZXNpemUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgJHNsaWRlci5vbignYWZ0ZXJDaGFuZ2UnLCBmdW5jdGlvbihldmVudCwgc2xpZGVyLCBjdXJyZW50U2xpZGUpe1xuICAgICAgICAgICAgICAgIF90aGlzLnN0YXRlLnNsaWRlckN1cnJlbnRQYWdlID0gY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBjdXJyZW50U2xpZGUgPSB0aGlzLnN0YXRlLnNsaWRlckN1cnJlbnRQYWdlIDwgcGFnZXNOdW1iZXIgPyB0aGlzLnN0YXRlLnNsaWRlckN1cnJlbnRQYWdlIDogcGFnZXNOdW1iZXItMTtcbiAgICAgICAgJHNsaWRlci5zbGljayh7XG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBhcHBlbmRBcnJvd3M6IHRoaXMuc3RhdGUuY29udGFpbmVyU2VsZWN0b3IgKyAnIC5vdXBfc2xpZGVyX19hcnJvd3MnLFxuICAgICAgICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cIm91cF9zbGlkZXJfX2Fycm93IG91cF9zbGlkZXJfX2Fycm93LS1sZWZ0XCI+PC9kaXY+JyxcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJvdXBfc2xpZGVyX19hcnJvdyBvdXBfc2xpZGVyX19hcnJvdy0tcmlnaHRcIj48L2Rpdj4nLFxuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFwcGVuZERvdHM6IHRoaXMuc3RhdGUuY29udGFpbmVyU2VsZWN0b3IgKyAnIC5vdXBfc2xpZGVyX19kb3RzJyxcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZTogY3VycmVudFNsaWRlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxlbWVudHNSZXNpemUoKXtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2xpZGVyLmVsZW1lbnRzUmVzaXplKClcIilcbiAgICAgICAgJCgnIycgKyB0aGlzLnN0YXRlLnJhbmRvbUlkICsgJ19fY29udGVudCAub3VwX19zbGlkZXJfX3NsaWRlJykuY2hpbGRyZW4oKS5jc3Moe1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUuZWxlbWVudFdpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5lbGVtZW50SGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3NsaWRlci5qcyIsIi8qKlxuICBzaGF2ZSAtIFNoYXZlIGlzIGEgamF2YXNjcmlwdCBwbHVnaW4gdGhhdCB0cnVuY2F0ZXMgbXVsdGktbGluZSB0ZXh0IHdpdGhpbiBhIGh0bWwgZWxlbWVudCBiYXNlZCBvbiBzZXQgbWF4IGhlaWdodFxuICBAdmVyc2lvbiB2Mi4yLjJcbiAgQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2RvbGxhcnNoYXZlY2x1Yi9zaGF2ZSNyZWFkbWVcbiAgQGF1dGhvciBKZWZmIFdhaW53cmlnaHQgPHlvd2FpbndyaWdodEBnbWFpbC5jb20+IChqZWZmcnkuaW4pXG4gIEBsaWNlbnNlIE1JVFxuKiovXG5mdW5jdGlvbiBzaGF2ZSh0YXJnZXQsIG1heEhlaWdodCkge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGlmICghbWF4SGVpZ2h0KSB0aHJvdyBFcnJvcignbWF4SGVpZ2h0IGlzIHJlcXVpcmVkJyk7XG4gIHZhciBlbHMgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KSA6IHRhcmdldDtcbiAgaWYgKCFlbHMpIHJldHVybjtcbiAgdmFyIGNoYXJhY3RlciA9IG9wdHMuY2hhcmFjdGVyIHx8ICfigKYnO1xuICB2YXIgY2xhc3NuYW1lID0gb3B0cy5jbGFzc25hbWUgfHwgJ2pzLXNoYXZlJztcbiAgdmFyIHNwYWNlcyA9IHR5cGVvZiBvcHRzLnNwYWNlcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5zcGFjZXMgOiB0cnVlO1xuICB2YXIgY2hhckh0bWwgPSBcIjxzcGFuIGNsYXNzPVxcXCJqcy1zaGF2ZS1jaGFyXFxcIj5cIi5jb25jYXQoY2hhcmFjdGVyLCBcIjwvc3Bhbj5cIik7XG4gIGlmICghKCdsZW5ndGgnIGluIGVscykpIGVscyA9IFtlbHNdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gZWxzW2ldO1xuICAgIHZhciBzdHlsZXMgPSBlbC5zdHlsZTtcbiAgICB2YXIgc3BhbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KGNsYXNzbmFtZSkpO1xuICAgIHZhciB0ZXh0UHJvcCA9IGVsLnRleHRDb250ZW50ID09PSB1bmRlZmluZWQgPyAnaW5uZXJUZXh0JyA6ICd0ZXh0Q29udGVudCc7IC8vIElmIGVsZW1lbnQgdGV4dCBoYXMgYWxyZWFkeSBiZWVuIHNoYXZlZFxuXG4gICAgaWYgKHNwYW4pIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgZWxsaXBzaXMgdG8gcmVjYXB0dXJlIHRoZSBvcmlnaW5hbCB0ZXh0XG4gICAgICBlbC5yZW1vdmVDaGlsZChlbC5xdWVyeVNlbGVjdG9yKCcuanMtc2hhdmUtY2hhcicpKTtcbiAgICAgIGVsW3RleHRQcm9wXSA9IGVsW3RleHRQcm9wXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgLy8gbnVrZSBzcGFuLCByZWNvbWJpbmUgdGV4dFxuICAgIH1cblxuICAgIHZhciBmdWxsVGV4dCA9IGVsW3RleHRQcm9wXTtcbiAgICB2YXIgd29yZHMgPSBzcGFjZXMgPyBmdWxsVGV4dC5zcGxpdCgnICcpIDogZnVsbFRleHQ7IC8vIElmIDAgb3IgMSB3b3Jkcywgd2UncmUgZG9uZVxuXG4gICAgaWYgKHdvcmRzLmxlbmd0aCA8IDIpIGNvbnRpbnVlOyAvLyBUZW1wb3JhcmlseSByZW1vdmUgYW55IENTUyBoZWlnaHQgZm9yIHRleHQgaGVpZ2h0IGNhbGN1bGF0aW9uXG5cbiAgICB2YXIgaGVpZ2h0U3R5bGUgPSBzdHlsZXMuaGVpZ2h0O1xuICAgIHN0eWxlcy5oZWlnaHQgPSAnYXV0byc7XG4gICAgdmFyIG1heEhlaWdodFN0eWxlID0gc3R5bGVzLm1heEhlaWdodDtcbiAgICBzdHlsZXMubWF4SGVpZ2h0ID0gJ25vbmUnOyAvLyBJZiBhbHJlYWR5IHNob3J0IGVub3VnaCwgd2UncmUgZG9uZVxuXG4gICAgaWYgKGVsLm9mZnNldEhlaWdodCA8PSBtYXhIZWlnaHQpIHtcbiAgICAgIHN0eWxlcy5oZWlnaHQgPSBoZWlnaHRTdHlsZTtcbiAgICAgIHN0eWxlcy5tYXhIZWlnaHQgPSBtYXhIZWlnaHRTdHlsZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gLy8gQmluYXJ5IHNlYXJjaCBmb3IgbnVtYmVyIG9mIHdvcmRzIHdoaWNoIGNhbiBmaXQgaW4gYWxsb3R0ZWQgaGVpZ2h0XG5cblxuICAgIHZhciBtYXggPSB3b3Jkcy5sZW5ndGggLSAxO1xuICAgIHZhciBtaW4gPSAwO1xuICAgIHZhciBwaXZvdCA9IHZvaWQgMDtcblxuICAgIHdoaWxlIChtaW4gPCBtYXgpIHtcbiAgICAgIHBpdm90ID0gbWluICsgbWF4ICsgMSA+PiAxOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWJpdHdpc2VcblxuICAgICAgZWxbdGV4dFByb3BdID0gc3BhY2VzID8gd29yZHMuc2xpY2UoMCwgcGl2b3QpLmpvaW4oJyAnKSA6IHdvcmRzLnNsaWNlKDAsIHBpdm90KTtcbiAgICAgIGVsLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY2hhckh0bWwpO1xuICAgICAgaWYgKGVsLm9mZnNldEhlaWdodCA+IG1heEhlaWdodCkgbWF4ID0gc3BhY2VzID8gcGl2b3QgLSAxIDogcGl2b3QgLSAyO2Vsc2UgbWluID0gcGl2b3Q7XG4gICAgfVxuXG4gICAgZWxbdGV4dFByb3BdID0gc3BhY2VzID8gd29yZHMuc2xpY2UoMCwgbWF4KS5qb2luKCcgJykgOiB3b3Jkcy5zbGljZSgwLCBtYXgpO1xuICAgIGVsLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY2hhckh0bWwpO1xuICAgIHZhciBkaWZmID0gc3BhY2VzID8gd29yZHMuc2xpY2UobWF4KS5qb2luKCcgJykgOiB3b3Jkcy5zbGljZShtYXgpO1xuICAgIGVsLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgXCI8c3BhbiBjbGFzcz1cXFwiXCIuY29uY2F0KGNsYXNzbmFtZSwgXCJcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cIikuY29uY2F0KGRpZmYsIFwiPC9zcGFuPlwiKSk7XG4gICAgc3R5bGVzLmhlaWdodCA9IGhlaWdodFN0eWxlO1xuICAgIHN0eWxlcy5tYXhIZWlnaHQgPSBtYXhIZWlnaHRTdHlsZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaGF2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zaGF2ZS9kaXN0L3NoYXZlLmVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzJztcbmltcG9ydCBPdXBUZGwgZnJvbSAnLi9hc3NldHMvanMvbWFpbic7XG5jb25zdCBvdXBUZGxBcHAgPSBuZXcgT3VwVGRsO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gc2hvd0xvYWRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgb3VwVGRsQXBwLnNob3dMb2FkaW5nKCk7XG4gICAgLy8gfSxcbiAgICBpbml0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBvdXBUZGxBcHAuaW5pdChkYXRhKTtcbiAgICB9XG59O1xuXG4vL011ZXN0cmEgZWwgbG9hZGluZyBzaSBubyBlcyB1biBsaWJyb1xuaWYod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignZWRpdGFyPTEnKSA9PSAtMSkge1xuICAgIGRvY3VtZW50LndyaXRlKCc8ZGl2IGlkPVwib3VwX3RkbF9sb2FkaW5nX3NjcmVlbi0tYmFzaWNcIj48L2Rpdj4nKTtcbn1cblxuLy9jb25zb2xlLmxvZyhcInVwZGF0ZV8yNlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGdldExlc3NvbkJ5SWQsIGdldFJlc291cmNlQnlJZCwgZ2V0UmVzb3VyY2VUeXBlLCBlbmNvZGVIdG1sLCBzZXRCb29rQ29sb3IgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IFVybEhlbHBlciBmcm9tICcuL3VybEhlbHBlcic7XG5pbXBvcnQgSW1hZ2VzUHJlbG9hZCBmcm9tICcuL2ltYWdlc1ByZWxvYWRIZWxwZXInO1xuXG4vLyBpbXBvcnQgbG9hZERhdGEgZnJvbSAnLi9sb2FkRGF0YSc7XG5cbi8vUGFudGFsbGFzXG4vL2ltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gJy4vX2xvYWRpbmdTY3JlZW4nO1xuaW1wb3J0IFNwbGFzaFNjcmVlbiBmcm9tICcuL19zcGxhc2hTY3JlZW4nO1xuaW1wb3J0IFVuaXRNZW51U2NyZWVuIGZyb20gJy4vX3VuaXRNZW51U2NyZWVuJztcbmltcG9ydCBMZXNzb25NZW51U2NyZWVuIGZyb20gJy4vX2xlc3Nvbk1lbnVTY3JlZW4nO1xuaW1wb3J0IFBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4gZnJvbSAnLi9fcGx1c1pvbmVDYXRlZ29yaWVzTWVudSc7XG5pbXBvcnQgUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuIGZyb20gJy4vX3BsdXNab25lUmVzb3VyY2VzTWVudSc7XG5cbmNsYXNzIE91cFRkbCB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1haW5EYXRhOiB7fSxcblx0XHRcdHNwbGFzaEJhY2tncm91bmQ6ICcnLFxuXHRcdFx0dW5pdE1lbnVCYWtncm91bmQ6ICcnLFxuXHRcdFx0bGVzc29uTWVudUJha2dyb3VuZDogJycsXG5cdFx0XHRwbHVzQ29uZUNhdGVnb3JpZXNCYWtncm91bmQ6ICcnLFxuXHRcdFx0cGx1c1pvbmVSZXNvdXJjZXNCYWtncm91bmQ6ICcnLFxuXHRcdH07XG5cdFx0dGhpcy5zY3JlZW5zID0ge307XG5cdH1cblx0XG5cdGluaXQoZGF0YSl7XG5cdFx0aWYoY29uZmlnLmRldil7XG5cdFx0XHRjb25zb2xlLmxvZygnRGF0b3MgQ2FyZ2Fkb3M6JywgZGF0YSk7XG5cdFx0XHRjb25zb2xlLmxvZygnVW5pdCAxOicsIGRhdGEudW5pdHNbMF0pO1xuXHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdH1cblx0XHQvL1F1aXRhbW9zIGxhIHByaW1lcmEgdW5pZGFkLCB5IGRlIGFow60gdG9tYW1vcyBsYSBwcmltZXJhIGltYWdlblxuXHRcdC8vTWlyYSBzaSBsYSBhY3RpdmlkYWQgYWN0dWFsIGVzIGxhIHByaW1lcmEgYW50ZXMgZGUgbGFuemFyIGVsIG1lbsO6XG5cdFx0aWYoaWRjbGFzZT09ZGF0YS51bml0c1swXS5zdWJ1bml0c1swXS5pZCl7XG5cdFx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0XHRjb25zb2xlLmxvZygnRXMgbGEgYWN0aXZpZGFkIFBvcnRhZGEnKTtcblx0XHRcdC8vTWlyYSBsb3MgZm9uZG9zXG5cdFx0XHRpZihkYXRhLnVuaXRzWzBdKXtcblx0XHRcdFx0aWYoZGF0YS51bml0c1swXS5pbWFnZSl7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5zcGxhc2hCYWNrZ3JvdW5kID0gZGF0YS51bml0c1swXS5pbWFnZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBcblx0XHRcdGlmKGRhdGEudW5pdHNbMF0uc3VidW5pdHMubGVuZ3RoPj0xKXtcblx0XHRcdFx0aWYoZGF0YS51bml0c1swXS5zdWJ1bml0c1swXS5pbWFnZSl7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS51bml0TWVudUJha2dyb3VuZCA9IGRhdGEudW5pdHNbMF0uc3VidW5pdHNbMF0uaW1hZ2U7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5sZXNzb25NZW51QmFrZ3JvdW5kID0gdGhpcy5zdGF0ZS51bml0TWVudUJha2dyb3VuZDtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLnBsdXNDb25lQ2F0ZWdvcmllc0Jha2dyb3VuZCA9IHRoaXMuc3RhdGUudW5pdE1lbnVCYWtncm91bmQ7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5wbHVzWm9uZVJlc291cmNlc0Jha2dyb3VuZCA9IHRoaXMuc3RhdGUudW5pdE1lbnVCYWtncm91bmQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vQm9yYSBsYSBwcmltZXJhIHVuaWRhZFxuXHRcdFx0ZGF0YS51bml0cy5zaGlmdCgpO1xuXHRcdFx0Ly9haG9yYSBhbGltaW5hbW9zIGxhcyBzdWJ1bmlkYWRlcyBxdWUgbm8gc2VhbiB2aXNpYmxlcyBwYXJhIGVsIGFsdW1ubywgc2kgZWwgdXN1YXJpbyBlcyBhbHVtbm9cblx0XHRcdGlmKHR5cGVvZiBibGluayA9PSAnb2JqZWN0Jyl7XG5cdFx0XHRcdGlmKGJsaW5rLnVzZXIuZXNBbHVtbm8oKSl7XG5cdFx0XHRcdFx0ZGF0YS51bml0cy5mb3JFYWNoKHVuaXQgPT4ge1xuXHRcdFx0XHRcdFx0dmFyIGkgPSB1bml0LnN1YnVuaXRzLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0XHRcdFx0aWYgKHVuaXQuc3VidW5pdHNbaV0ub25seVZpc2libGVUZWFjaGVycykgeyBcblx0XHRcdFx0XHRcdFx0XHR1bml0LnN1YnVuaXRzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0fSBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGkgPSB1bml0LnJlc291cmNlcy5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh1bml0LnJlc291cmNlc1tpXS5vbmx5VmlzaWJsZVRlYWNoZXJzKSB7IFxuXHRcdFx0XHRcdFx0XHRcdHVuaXQucmVzb3VyY2VzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0fSBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlLm1haW5EYXRhID0gZGF0YTtcblxuXHRcdFx0Ly9QcmVsb2FkSW1hZ2VzXG5cdFx0XHRjb25zdCBwcmVsb2FkSW1hZ2VzID0gbmV3IEltYWdlc1ByZWxvYWQoKTtcblx0XHRcdHByZWxvYWRJbWFnZXMuYWRkKHRoaXMuc3RhdGUudW5pdE1lbnVCYWtncm91bmQpO1xuXHRcdFx0cHJlbG9hZEltYWdlcy5hZGQodGhpcy5zdGF0ZS5sZXNzb25NZW51QmFrZ3JvdW5kKTtcblx0XHRcdGNvbnN0IHJlc291cmNlc0NhdGVnb3JpZXNTbHVnID0gWyd2aWRlbycsICdhY3RpdmlkYWRfaHRtbCcsICd1cmwnLCAnYWN0aXZpZGFkJywgJ211c2ljYScsICdsaWJybycsICdhcmNoaXZvJ107XG5cdFx0XHRjb25zdCBidXR0b25TdGF0ZXMgPSBbJycsICctLWhvdmVyJywgJy0tYWN0aXZlJ107XG5cdFx0XHRyZXNvdXJjZXNDYXRlZ29yaWVzU2x1Zy5mb3JFYWNoKGNhdGVnb3J5U2x1ZyA9PiB7XG5cdFx0XHRcdGJ1dHRvblN0YXRlcy5mb3JFYWNoKGJ1dHRvblN0YXRlID0+IHtcblx0XHRcdFx0XHRjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRkaXZFbGVtZW50LmNsYXNzTmFtZSA9IGByZXNvdXJjZS0ke2NhdGVnb3J5U2x1Z30tZm9yLWpzJHtidXR0b25TdGF0ZX1gO1xuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2RWxlbWVudCk7XG5cdFx0XHRcdFx0bGV0IGJhY2tJbWFnZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRpdkVsZW1lbnQsbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1pbWFnZScpO1xuXHRcdFx0XHRcdGJhY2tJbWFnZSA9IGJhY2tJbWFnZS5yZXBsYWNlKCd1cmwoJywnJykucmVwbGFjZSgnKScsJycpLnJlcGxhY2UoJ1xcJycsJycpLnJlcGxhY2UoJ1wiJywnJykucmVwbGFjZSgnXFwnJywnJykucmVwbGFjZSgnXCInLCcnKTtcblx0XHRcdFx0XHQvL2RpdkVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0XHRcdFx0ZGl2RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvL1BpbGxhIGxvcyBlc3RpbG9zIGRlbCBsaWJyb1xuXHRcdFx0c2V0Qm9va0NvbG9yKCk7XG5cdFx0XHR0aGlzLmluaXRNZW51KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKGNvbmZpZy5kZXYpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdOTyBlcyBsYSBhY3RpdmlkYWQgUG9ydGFkYScpO1xuXHRcdFx0Ly9WdWVsdmUgYSBhY3RpdmFyIGVsIGNvbnRlbmlkb1xuXHRcdH1cblx0XHQvL0JvcnJhIGxvYWRpbmdcblx0XHQkKCcjb3VwX3RkbF9sb2FkaW5nX3NjcmVlbi0tYmFzaWMnKS5yZW1vdmUoKTtcblx0fVxuXHRpbml0TWVudSgpe1xuXG5cdFx0bGV0IG94Zm9yZEJ1dHRvbnNIdG1sID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJfX291cF9idXR0b25zXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vaW5pY2lhLm91cGUuZXMvc2VydmljaW9zXCIgY2xhc3M9XCJvdXBfYnV0dG9ucy0tbnViZSBvdXB0ZGxfZXh0ZXJuYWxfbGlua1wiPjwvYT5gO1xuXHRcdGlmKHR5cGVvZiBibGluayA9PSAnb2JqZWN0Jyl7XG5cdFx0XHRpZihibGluay51c2VyLmVzUHJvZmVzb3IoKSl7XG5cdFx0XHRcdG94Zm9yZEJ1dHRvbnNIdG1sICs9IGA8YSBocmVmPVwiaHR0cDovL2luaWNpYS5vdXBlLmVzL29wcmVtaXVtXCIgY2xhc3M9XCJvdXBfYnV0dG9ucy0tcHJlbWl1bSBvdXB0ZGxfZXh0ZXJuYWxfbGlua1wiPjwvYT5gO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRveGZvcmRCdXR0b25zSHRtbCArPSBgPC9kaXY+YDtcblx0XHRcdFxuXG5cdFx0Y29uc3QgaHRtbERPTSA9IGBcblx0XHRcdDxkaXYgaWQ9XCJvdXBfdGRsX2NvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGlkPVwib3VwX3RkbF9zcGxhc2hfc2NyZWVuXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt0aGlzLnN0YXRlLnNwbGFzaEJhY2tncm91bmR9KVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfc3BsYXNoX19sb2dvX291cFwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfc3BsYXNoX19sb2dvX3RkbFwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfc3BsYXNoX19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3M9XCJvdXBfc3BsYXNoX19tYWluX3RpdGxlXCI+PC9oMT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfc3BsYXNoX19lbnRlclwiPjxzcGFuPkVudGVyPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfc3BsYXNoX19mb290ZXJcIj7CqSBPeGZvcmQgVW5pdmVyc2l0eSBQcmVzczwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGlkPVwib3VwX3RkbF91bml0X21lbnVfc2NyZWVuXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt0aGlzLnN0YXRlLnVuaXRNZW51QmFrZ3JvdW5kfSlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3VuaXRfbWVudV9fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJfX2JhY2tcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzPVwib3VwX3VuaXRfbWVudV9fbWFpbl90aXRsZVwiPjwvaDI+XG5cdFx0XHRcdFx0XHRcdCR7b3hmb3JkQnV0dG9uc0h0bWx9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfdW5pdF9tZW51X191bml0X3NsaWRlcl9jb250YWluZXJcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBpZD1cIm91cF90ZGxfbGVzc29uX21lbnVfc2NyZWVuXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt0aGlzLnN0YXRlLmxlc3Nvbk1lbnVCYWtncm91bmR9KVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfbGVzc29uX21lbnVfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDxoMiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJfX2JhY2tcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9sZXNzb25fbWVudV9fbWFpbl90aXRsZSBvdXBfdGRsX19icmVhZGNydW1iX19sZXZlbDFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz48L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCR7b3hmb3JkQnV0dG9uc0h0bWx9XG5cdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9sZXNzb25fbWVudV9fbGVzc29uX3NsaWRlcl9jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBpZD1cIm91cF90ZGxfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9zY3JlZW5cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3RoaXMuc3RhdGUucGx1c0NvbmVDYXRlZ29yaWVzQmFrZ3JvdW5kfSlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDxoMiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJfX2JhY2tcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19tYWluX3RpdGxlIG91cF90ZGxfX2JyZWFkY3J1bWJfX2xldmVsMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPjwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJfX2xldmVsMlwiPlBsdXMgWm9uZTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQke294Zm9yZEJ1dHRvbnNIdG1sfVxuXHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgaWQ9XCJvdXBfdGRsX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9zY3JlZW5cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3RoaXMuc3RhdGUucGx1c1pvbmVSZXNvdXJjZXNCYWtncm91bmR9KVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfdGRsX19icmVhZGNydW1iX19iYWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19tYWluX3RpdGxlIG91cF90ZGxfX2JyZWFkY3J1bWJfX2xldmVsMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPjwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm91cF90ZGxfX2JyZWFkY3J1bWJfX2xldmVsMlwiPlBsdXMgWm9uZTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQke294Zm9yZEJ1dHRvbnNIdG1sfVxuXHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19yZXNvdXJjZV9zbGlkZXJfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblx0XHRcblx0XHQkKCdib2R5JykuYXBwZW5kKCBodG1sRE9NICk7XG5cblx0XHQvL0NoZWNrIGlmIGlzIGRlc2t0b3Bcblx0XHRpZih0eXBlb2YgYmxpbmsgPT0gJ29iamVjdCcpe1xuXHRcdFx0aWYoIWJsaW5rLmlzQXBwIHx8IGJsaW5rLmlzT2ZmbGluZVBDKXtcblx0XHRcdFx0Ly9BY3RpdmF0ZSBiYXIgaG9sZSBpZiBpcyBub3QgQXBwXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXBfdGRsX2NvbnRhaW5lcicpLnN0eWxlLmJvdHRvbSA9ICc0NHB4Jztcblx0XHRcdFx0Ly9SZW1vdmUgdXNlbGVzcyBidXR0b25zIG9mIG5hdmJhclxuXHRcdFx0XHQvLyQoJy5uYXZiYXIgI2JvdG9uX3JlaW5pY2lhciwgLm5hdmJhciAjYm90b25fcm90dWxhZG9yLCAubmF2YmFyICNib3Rvbl9zdWJyYXlhZG9yLCAubmF2YmFyICNib3Rvbl9ib3JyYWRvciwgLm5hdmJhciAjYm90b25fbm90ZXMsIC5uYXZiYXIgI2JvdG9uX2J1c2NhciwgLm5hdmJhciAjZW50ZXItZWRpdC1tb2RlJykucmVtb3ZlKCk7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH1cblxuXG5cdFx0dGhpcy5zY3JlZW5zID0ge1xuXHRcdFx0Ly9sb2FkaW5nU2NyZWVuOiBuZXcgTG9hZGluZ1NjcmVlbixcblx0XHRcdHNwbGFzaFNjcmVlbjogbmV3IFNwbGFzaFNjcmVlbixcblx0XHRcdHVuaXRNZW51U2NyZWVuOiBuZXcgVW5pdE1lbnVTY3JlZW4sXG5cdFx0XHRsZXNzb25NZW51U2NyZWVuOiBuZXcgTGVzc29uTWVudVNjcmVlbixcblx0XHRcdHBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW46IG5ldyBQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLFxuXHRcdFx0cGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuOiBuZXcgUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLFxuXHRcdH0gXG5cblx0XHR0aGlzLnVybEhlbHBlciA9IG5ldyBVcmxIZWxwZXI7XG5cdFx0XG5cblx0XHQvL3RoaXMuc2NyZWVucy5sb2FkaW5nU2NyZWVuLnVwZGF0ZSh0aGlzLnN0YXRlLmxvYWRpbmcpO1xuXHRcdHRoaXMuc2NyZWVucy5zcGxhc2hTY3JlZW4uaW5pdCh7XG5cdFx0XHR0aXRsZTogZW5jb2RlSHRtbCh0aGlzLnN0YXRlLm1haW5EYXRhLnRpdGxlKSxcblx0XHRcdC8vIG9uRW50ZXJBY3Rpb246IHRoaXMuZ29Ub1VuaXRNZW51LmJpbmQodGhpcyksXG5cdFx0XHRvbkVudGVyQWN0aW9uOiAoKSA9PiB0aGlzLnVybEhlbHBlci51cGRhdGVVcmxIYXNoKHtcblx0XHRcdFx0c3RhdGVOYW1lOiAndW5pdG1lbnUnLFxuXHRcdFx0fSksXG5cdFx0XHRcblx0XHR9KTtcblx0XHR0aGlzLnNjcmVlbnMudW5pdE1lbnVTY3JlZW4uaW5pdCh7XG5cdFx0XHR0aXRsZTogZW5jb2RlSHRtbCh0aGlzLnN0YXRlLm1haW5EYXRhLnRpdGxlKSxcblx0XHRcdHVuaXRzOiB0aGlzLnN0YXRlLm1haW5EYXRhLnVuaXRzLFxuXHRcdFx0Ly8gb25Vbml0QWN0aW9uOiAodW5pdCkgPT4gdGhpcy5nb1RvTGVzc29uTWVudSh1bml0KSxcblx0XHRcdG9uVW5pdEFjdGlvbjogKHVuaXQpID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRzdGF0ZU5hbWU6ICd1bml0Jyxcblx0XHRcdFx0dW5pdFxuXHRcdFx0fSksXG5cdFx0XHQvLyBvbkJhY2tBY3Rpb246IHRoaXMuZ29Ub1NwbGFzaC5iaW5kKHRoaXMpLFxuXHRcdFx0b25CYWNrQWN0aW9uOiAodW5pdCkgPT4gdGhpcy51cmxIZWxwZXIudXBkYXRlVXJsSGFzaCh7XG5cdFx0XHRcdHN0YXRlTmFtZTogJ3NwbGFzaCcsXG5cdFx0XHR9KSxcblx0XHR9KTtcblx0XHR0aGlzLnNjcmVlbnMubGVzc29uTWVudVNjcmVlbi5pbml0KCk7XG5cdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uaW5pdCgpO1xuXHRcdHRoaXMuc2NyZWVucy5wbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4uaW5pdCgpO1xuXHRcdFxuXHRcdC8vQcOxYWRlIGxhIGZ1bmNpb24gb3BlblVSTCBhIGxvcyBlbmxhY2VzIGRlIE94Zm9yZFxuXHRcdCQoJ2Eub3VwdGRsX2V4dGVybmFsX2xpbmsnKS5jbGljayhmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGJsaW5rLnJlc3Qub3BlblVybCgndmlld2VyJywkKHRoaXMpLnByb3AoJ2hyZWYnKSwwKTtcblx0XHR9KVxuXG5cdFx0dGhpcy51cmxIZWxwZXIuaW5pdCh7XG5cdFx0XHRnb1RvU3BsYXNoOiB0aGlzLmdvVG9TcGxhc2guYmluZCh0aGlzKSxcblx0XHRcdGdvVG9Vbml0TWVudTogdGhpcy5nb1RvVW5pdE1lbnUuYmluZCh0aGlzKSxcblx0XHRcdGdvVG9MZXNzb25NZW51OiB0aGlzLmdvVG9MZXNzb25NZW51LmJpbmQodGhpcyksXG5cdFx0XHRnb1RvUGx1c1pvbmVDYXRlZ29yaWVzTWVudTogdGhpcy5nb1RvUGx1c1pvbmVDYXRlZ29yaWVzTWVudS5iaW5kKHRoaXMpLFxuXHRcdFx0Z29Ub1BsdXNab25lUmVzb3VyY2VzTWVudTogdGhpcy5nb1RvUGx1c1pvbmVSZXNvdXJjZXNNZW51LmJpbmQodGhpcyksXG5cblx0XHR9KTtcblx0fVxuXHRnb1RvU3BsYXNoKCl7XG5cdFx0aWYoY29uZmlnLmRldilcblx0XHRcdGNvbnNvbGUubG9nKCdPdXBUZGwuZ29Ub1NwbGFzaCgpJyk7XG5cdFx0dGhpcy5zY3JlZW5zLmxlc3Nvbk1lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdHRoaXMuc2NyZWVucy51bml0TWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdHRoaXMuc2NyZWVucy5wbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdHRoaXMuc2NyZWVucy5zcGxhc2hTY3JlZW4uc2hvdygpO1xuXHRcdCQoJy5uYXZiYXInKS5oaWRlKCk7XG5cdH1cblx0Z29Ub1VuaXRNZW51KCl7XG5cdFx0aWYoY29uZmlnLmRldilcblx0XHRcdGNvbnNvbGUubG9nKCdPdXBUZGwuZ29Ub1VuaXRNZW51KCknKTtcblx0XHR0aGlzLnNjcmVlbnMubGVzc29uTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdHRoaXMuc2NyZWVucy5wbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdHRoaXMuc2NyZWVucy5zcGxhc2hTY3JlZW4uaGlkZSgpO1xuXHRcdHRoaXMuc2NyZWVucy51bml0TWVudVNjcmVlbi5zaG93KCk7XG5cdFx0JCgnLm5hdmJhcicpLnNob3coKTtcblx0fVxuXHRnb1RvTGVzc29uTWVudSh1bml0TnVtYmVyKXtcblx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0Y29uc29sZS5sb2coJ091cFRkbC5nb1RvTGVzc29uTWVudSgpJywgdW5pdE51bWJlcik7XG5cdFx0bGV0IHNlbGVjdGVkVW5pdDtcblx0XHR0aGlzLnN0YXRlLm1haW5EYXRhLnVuaXRzLmZvckVhY2godW5pdCA9PiB7XG5cdFx0XHRpZih1bml0Lm51bWJlciA9PSB1bml0TnVtYmVyKXtcblx0XHRcdFx0c2VsZWN0ZWRVbml0ID0gdW5pdDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0pO1xuXHRcdGlmKHNlbGVjdGVkVW5pdCl7XG5cdFx0XHRsZXQgdW5pdFRpdGxlID0gc2VsZWN0ZWRVbml0LnRpdGxlO1xuXHRcdFx0bGV0IGltYWdlID0gc2VsZWN0ZWRVbml0LmltYWdlO1xuXHRcdFx0bGV0IGxlc3NvbnMgPSBzZWxlY3RlZFVuaXQuc3VidW5pdHM7XG5cdFx0XHRsZXQgaGFzTGVzc29ucyA9IGxlc3NvbnMubGVuZ3RoID4gMDtcblx0XHRcdGxldCBoYXNSZXNvdXJjZXMgPSBzZWxlY3RlZFVuaXQucmVzb3VyY2VzLmxlbmd0aCA+IDA7XG5cdFx0XHQvLyBTaSBubyB0aWVuZSBsZWNjaW9uZXMsIHBlcm8gc8OtIHJlY3Vyc29zLCB2YSBkaXJlY3RhbWVudGUgYSBsYSBwbHVzem9uZVxuXHRcdFx0aWYoIWhhc0xlc3NvbnMgJiYgaGFzUmVzb3VyY2VzKXtcblx0XHRcdFx0dGhpcy51cmxIZWxwZXIudXBkYXRlVXJsSGFzaCh7XG5cdFx0XHRcdFx0c3RhdGVOYW1lOiAncGx1c3pvbmUnLFxuXHRcdFx0XHRcdHVuaXQ6IHVuaXROdW1iZXJcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2NyZWVucy5sZXNzb25NZW51U2NyZWVuLnVwZGF0ZSh7XG5cdFx0XHRcdFx0dGl0bGU6IHVuaXRUaXRsZSxcblx0XHRcdFx0XHRudW1iZXI6IHVuaXROdW1iZXIsXG5cdFx0XHRcdFx0aW1hZ2U6IGltYWdlLFxuXHRcdFx0XHRcdGxlc3NvbnM6IGxlc3NvbnMsXG5cdFx0XHRcdFx0Ly8gb25QbHVzWm9uZUFjdGlvbjogKHVuaXQpID0+IHRoaXMuZ29Ub1BsdXNab25lQ2F0ZWdvcmllc01lbnUodW5pdCksXG5cdFx0XHRcdFx0Ly8gb25MZXNzb25BY3Rpb246IChkYXRhKSA9PiB0aGlzLmdvVG9MZXNzb24oZGF0YSksXG5cdFx0XHRcdFx0b25QbHVzWm9uZUFjdGlvbjogKHVuaXQpID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRcdFx0c3RhdGVOYW1lOiAncGx1c3pvbmUnLFxuXHRcdFx0XHRcdFx0dW5pdFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdG9uTGVzc29uQWN0aW9uOiAoZGF0YSkgPT4gdGhpcy5nb1RvTGVzc29uKGRhdGEpLFxuXHRcdFx0XHRcdC8vIG9uQmFja0FjdGlvbjogdGhpcy5nb1RvVW5pdE1lbnUuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvbkJhY2tBY3Rpb246ICgpID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRcdFx0c3RhdGVOYW1lOiAndW5pdG1lbnUnLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdGhhc1BsdXNab25lOiBoYXNSZXNvdXJjZXMsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuc2NyZWVucy5wbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnNjcmVlbnMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5zY3JlZW5zLnVuaXRNZW51U2NyZWVuLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5zY3JlZW5zLmxlc3Nvbk1lbnVTY3JlZW4uc2hvdygpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQkKCcubmF2YmFyJykuc2hvdygpO1xuXHR9XG5cdGdvVG9MZXNzb24oe3VuaXROdW1iZXIsIGxlc3NvbklkfSl7XG5cdFx0aWYoY29uZmlnLmRldilcblx0XHRcdGNvbnNvbGUubG9nKCdPdXBUZGwuZ29Ub0xlc3Nvbk1lbnUoKScsIHVuaXROdW1iZXIsIGxlc3NvbklkKTtcblx0XHR2YXIgc2VsZWN0ZWRMZXNzb24gPSBudWxsO1xuXHRcdHNlbGVjdGVkTGVzc29uID0gZ2V0TGVzc29uQnlJZCh7bGVzc29uSWQsIG1haW5EYXRhOiB0aGlzLnN0YXRlLm1haW5EYXRhfSk7XG5cdFx0aWYoc2VsZWN0ZWRMZXNzb24pe1xuXHRcdFx0ZXZhbChzZWxlY3RlZExlc3Nvbi5vbmNsaWNrVGl0bGUpO1xuXHRcdH1cblx0XHQkKCcubmF2YmFyJykuc2hvdygpO1xuXHR9XG5cdGdvVG9QbHVzWm9uZUNhdGVnb3JpZXNNZW51KHVuaXROdW1iZXIpe1xuXHRcdGlmKGNvbmZpZy5kZXYpXG5cdFx0XHRjb25zb2xlLmxvZygnT3VwVGRsLmdvVG9QbHVzWm9uZUNhdGVnb3JpZXNNZW51KCknLCB1bml0TnVtYmVyKTtcblx0XHRsZXQgc2VsZWN0ZWRVbml0O1xuXHRcdHRoaXMuc3RhdGUubWFpbkRhdGEudW5pdHMuZm9yRWFjaCh1bml0ID0+IHtcblx0XHRcdGlmKHVuaXQubnVtYmVyID09IHVuaXROdW1iZXIpe1xuXHRcdFx0XHRzZWxlY3RlZFVuaXQgPSB1bml0O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdFxuXHRcdC8vIGJ1c2NhciB0YWcgJ2ludGVyYWN0aXZlJ1xuXHRcdGlmKHNlbGVjdGVkVW5pdCl7XG5cdFx0XHRjb25zdCB1bml0VGl0bGUgPSBzZWxlY3RlZFVuaXQudGl0bGU7XG5cdFx0XHRjb25zdCBpbWFnZSA9IHNlbGVjdGVkVW5pdC5pbWFnZTtcblx0XHRcdGNvbnN0IGhhc0xlc3NvbnMgPSBzZWxlY3RlZFVuaXQuc3VidW5pdHMubGVuZ3RoID4gMDtcblx0XHRcdGNvbnN0IHJlc291cmNlcyA9IHNlbGVjdGVkVW5pdC5yZXNvdXJjZXM7XG5cdFx0XHRsZXQgY2F0ZWdvcmllcyA9IFtdO1xuXHRcdFx0cmVzb3VyY2VzLmZvckVhY2gocmVzb3VyY2UgPT4ge1xuXHRcdFx0XHQvL2V4Y2VwY2lvbiBkZSBjYXRlZ29yaWEgYWN0aXZpZGFkLT5pbnRlcmFjdGl2ZVxuXHRcdFx0XHRsZXQgdHlwZSA9IGdldFJlc291cmNlVHlwZShyZXNvdXJjZSk7XG5cdFx0XHRcdGlmKGNhdGVnb3JpZXMuaW5kZXhPZih0eXBlKTwwKXtcblx0XHRcdFx0XHRjYXRlZ29yaWVzLnB1c2godHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHRsZXQgYmFja0FjdGlvbjtcblx0XHRcdGlmKCFoYXNMZXNzb25zKXtcblx0XHRcdFx0YmFja0FjdGlvbiA9ICgpID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRcdHN0YXRlTmFtZTogJ3VuaXRtZW51Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRiYWNrQWN0aW9uID0gKCkgPT4gdGhpcy51cmxIZWxwZXIudXBkYXRlVXJsSGFzaCh7XG5cdFx0XHRcdFx0c3RhdGVOYW1lOiAndW5pdCcsXG5cdFx0XHRcdFx0dW5pdDogdW5pdE51bWJlclxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4udXBkYXRlKHtcblx0XHRcdFx0dGl0bGU6IHVuaXRUaXRsZSxcblx0XHRcdFx0aW1hZ2U6IGltYWdlLFxuXHRcdFx0XHRudW1iZXI6IHVuaXROdW1iZXIsXG5cdFx0XHRcdGNhdGVnb3JpZXM6IGNhdGVnb3JpZXMsXG5cdFx0XHRcdC8vb25DYXRlZ29yeUFjdGlvbjogKGRhdGEpID0+IHRoaXMuZ29Ub1BsdXNab25lUmVzb3VyY2VzTWVudShkYXRhKSxcblx0XHRcdFx0b25DYXRlZ29yeUFjdGlvbjogKHt1bml0TnVtYmVyLCBjYXRlZ29yeX0pID0+IHRoaXMudXJsSGVscGVyLnVwZGF0ZVVybEhhc2goe1xuXHRcdFx0XHRcdHN0YXRlTmFtZTogJ3BsdXNjYXRlZ29yeScsXG5cdFx0XHRcdFx0dW5pdDogdW5pdE51bWJlcixcblx0XHRcdFx0XHRjYXRlZ29yeVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0b25CYWNrQWN0aW9uOiBiYWNrQWN0aW9uLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuc2NyZWVucy5wbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0dGhpcy5zY3JlZW5zLnNwbGFzaFNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMudW5pdE1lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0dGhpcy5zY3JlZW5zLmxlc3Nvbk1lbnVTY3JlZW4uaGlkZSgpO1xuXHRcdFx0dGhpcy5zY3JlZW5zLnBsdXNab25lQ2F0ZWdvcmllc01lbnVTY3JlZW4uc2hvdygpO1xuXHRcdH1cblx0XHQvL0NpZXJyYSBlbCByZXByb2R1Y3RvciBkZSBibGlua1xuXHRcdGlmKGNvbmZpZy5kZXYpXG5cdFx0XHRjb25zb2xlLmxvZygnY2VycmFySWZyYW1lKCknKTtcblx0XHRpZih0eXBlb2YgY2VycmFySWZyYW1lID09ICdmdW5jdGlvbicpe1xuXHRcdFx0Y2VycmFySWZyYW1lKCk7XG5cdFx0fVxuXHRcdCQoJy5uYXZiYXInKS5zaG93KCk7XG5cdH1cblx0Z29Ub1BsdXNab25lUmVzb3VyY2VzTWVudSh7dW5pdE51bWJlciwgY2F0ZWdvcnl9KXtcblx0XHRpZihjb25maWcuZGV2KVxuXHRcdFx0Y29uc29sZS5sb2coJ091cFRkbC5nb1RvUGx1c1pvbmVSZXNvdXJjZXNNZW51KCknLCB1bml0TnVtYmVyLCBjYXRlZ29yeSk7XG5cdFx0bGV0IHNlbGVjdGVkVW5pdDtcblx0XHR0aGlzLnN0YXRlLm1haW5EYXRhLnVuaXRzLmZvckVhY2godW5pdCA9PiB7XG5cdFx0XHRpZih1bml0Lm51bWJlciA9PSB1bml0TnVtYmVyKXtcblx0XHRcdFx0c2VsZWN0ZWRVbml0ID0gdW5pdDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmKHNlbGVjdGVkVW5pdCl7XG5cdFx0XHRjb25zdCB1bml0VGl0bGUgPSBzZWxlY3RlZFVuaXQudGl0bGU7XG5cdFx0XHRjb25zdCBpbWFnZSA9IHNlbGVjdGVkVW5pdC5pbWFnZTtcblx0XHRcdGxldCByZXNvdXJjZXMgPSBbXTtcblx0XHRcdHNlbGVjdGVkVW5pdC5yZXNvdXJjZXMuZm9yRWFjaCgocmVzb3VyY2UpPT57XG5cdFx0XHRcdGlmKGdldFJlc291cmNlVHlwZShyZXNvdXJjZSkgPT0gY2F0ZWdvcnkpe1xuXHRcdFx0XHRcdHJlc291cmNlcy5wdXNoKHJlc291cmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLnVwZGF0ZSh7XG5cdFx0XHRcdHRpdGxlOiB1bml0VGl0bGUsXG5cdFx0XHRcdGltYWdlOiBpbWFnZSxcblx0XHRcdFx0bnVtYmVyOiB1bml0TnVtYmVyLFxuXHRcdFx0XHRyZXNvdXJjZXM6IHJlc291cmNlcyxcblx0XHRcdFx0b25SZXNvdXJjZUFjdGlvbjogKGRhdGEpID0+IHRoaXMuZ29Ub1BsdXNab25lUmVzb3VyY2UoZGF0YSksXG5cdFx0XHRcdC8vIG9uQmFja0FjdGlvbjogKG51bWJlcikgPT4gdGhpcy5nb1RvUGx1c1pvbmVDYXRlZ29yaWVzTWVudShudW1iZXIpLFxuXHRcdFx0XHRvbkJhY2tBY3Rpb246ICh1bml0KSA9PiB0aGlzLnVybEhlbHBlci51cGRhdGVVcmxIYXNoKHtcblx0XHRcdFx0XHRzdGF0ZU5hbWU6ICdwbHVzem9uZScsXG5cdFx0XHRcdFx0dW5pdFxuXHRcdFx0XHR9KSxcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnNjcmVlbnMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcblx0XHRcdHRoaXMuc2NyZWVucy51bml0TWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMubGVzc29uTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5oaWRlKCk7XG5cdFx0XHR0aGlzLnNjcmVlbnMucGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLnNob3coKTtcblx0XHR9XG5cdFx0JCgnLm5hdmJhcicpLnNob3coKTtcblx0fVxuXHRnb1RvUGx1c1pvbmVSZXNvdXJjZSh7dW5pdE51bWJlciwgcmVzb3VyY2VJZH0pe1xuXHRcdGlmKGNvbmZpZy5kZXYpXG5cdFx0XHRjb25zb2xlLmxvZygnT3VwVGRsLmdvVG9QbHVzWm9uZVJlc291cmNlKCknLCB1bml0TnVtYmVyLCByZXNvdXJjZUlkKTtcblxuXHRcdGxldCBzZWxlY3RlZFJlc291cmNlID0gZ2V0UmVzb3VyY2VCeUlkKHtyZXNvdXJjZUlkLCBtYWluRGF0YTogdGhpcy5zdGF0ZS5tYWluRGF0YX0pO1xuXHRcdGlmKHNlbGVjdGVkUmVzb3VyY2Upe1xuXG5cdFx0XHQvL0NpZXJyYSBlbCByZXByb2R1Y3RvciBkZSBibGlua1xuXHRcdFx0aWYoY29uZmlnLmRldilcblx0XHRcdFx0Y29uc29sZS5sb2coJ2NlcnJhcklmcmFtZSgpJyk7XG5cdFx0XHRpZih0eXBlb2YgY2VycmFySWZyYW1lID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRjZXJyYXJJZnJhbWUoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly9FamVjdXRhIGxhIGZ1bmNpw7NuIHF1ZSB2aWVuZSBlbiBlbCBvYmpldG8gZGUgbGlicm9cblx0XHRcdGV2YWwoc2VsZWN0ZWRSZXNvdXJjZS5vbmNsaWNrVGl0bGUpO1xuXHRcdH1cblx0XHQkKCcubmF2YmFyJykuc2hvdygpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE91cFRkbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbWFpbi5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG4vL0VzdGEgZnVuY2nDs24gc29sbyBzZSBkZWJlIGVqZWN1dGFyIGFsIGluaWNpb1xuXG5cblxuXG5jbGFzcyBVcmxIZWxwZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudXJsU3RhdGUgPSB7XG4gICAgICAgICAgICBzdGF0ZU5hbWU6ICcnLCAvLyAnc3BsYXNoJywgJ3VuaXRtZW51JywgJ3VuaXQnLCAncGx1c3pvbmUnLCAncGx1c2NhdGVnb3J5J1xuICAgICAgICAgICAgdW5pdDogLTEsXG4gICAgICAgICAgICBjYXRlZ29yeTogJycsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IHt9O1xuICAgICAgICBcbiAgICB9XG5cbiAgICBpbml0KGFjdGlvbnMpe1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcmxIZWxwZXIuaW5pdCgpXCIpO1xuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cub25oYXNoY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5nb1RvU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdvVG9TdGF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVDdXJyZW50U3RhdGUoKSB7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVybEhlbHBlci51cGRhdGVDdXJyZW50U3RhdGUoKVwiKTtcbiAgICAgICAgbGV0IHVybFN0YXRlID0ge307XG4gICAgICAgIGNvbnN0IGhhc2hOYW1lPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgY29uc3QgaGFzaFBhcnRzID0gaGFzaE5hbWUuc3BsaXQoJ18nLCAzKTsgLy9QYXJhIGRpdmlkaXIgbGFzIHBhcnRlcyBkZWwgaGFzaCBjb24gdW4gbcOheGltbyBkZSAzIHBhcnRlc1xuICAgICAgICAvL0VsIGhhc2ggcHVlZGUgc2VyXG4gICAgICAgIC8vIFwiI1wiIG8gXCIjXCIgPT4gU3BsYXNoXG4gICAgICAgIC8vIFwiI3VuaXRtZW51XCIgPT4gTWVuw7ogZGUgdW5pZGFkZXNcbiAgICAgICAgLy8gXCIjdW5pdF9YXCIgPT4gVW5pZGFkIFhcbiAgICAgICAgLy8gXCIjcGx1c3pvbmVfWFwiID0+IFBsdXN6b25lIGRlIHVuaWRhZCBYXG4gICAgICAgIC8vIFwiI3BsdXNjYXRlZ29yeV9YX0NBVEVHT1JZXCIgPT4gUGx1c3pvbmUgZW4gY2F0ZWdvcsOtYSBDQVRFR09SWSB5IHVuaWRhZCBYXG4gICAgICAgIGlmKGhhc2hQYXJ0c1swXSA9PSAnI3VuaXRtZW51JyAmJiBoYXNoUGFydHMubGVuZ3RoID09IDEpe1xuICAgICAgICAgICAgdXJsU3RhdGUuc3RhdGVOYW1lID0gJ3VuaXRtZW51JztcbiAgICAgICAgfSBlbHNlIGlmKGhhc2hQYXJ0c1swXSA9PSAnI3VuaXQnICYmIGhhc2hQYXJ0cy5sZW5ndGggPT0gMil7XG4gICAgICAgICAgICB1cmxTdGF0ZS5zdGF0ZU5hbWUgPSAndW5pdCc7XG4gICAgICAgICAgICB1cmxTdGF0ZS51bml0ID0gaGFzaFBhcnRzWzFdO1xuICAgICAgICB9IGVsc2UgaWYoaGFzaFBhcnRzWzBdID09ICcjcGx1c3pvbmUnICYmIGhhc2hQYXJ0cy5sZW5ndGggPT0gMil7XG4gICAgICAgICAgICB1cmxTdGF0ZS5zdGF0ZU5hbWUgPSAncGx1c3pvbmUnO1xuICAgICAgICAgICAgdXJsU3RhdGUudW5pdCA9IGhhc2hQYXJ0c1sxXTtcbiAgICAgICAgfSBlbHNlIGlmKGhhc2hQYXJ0c1swXSA9PSAnI3BsdXNjYXRlZ29yeScgJiYgaGFzaFBhcnRzLmxlbmd0aCA9PSAzKXtcbiAgICAgICAgICAgIHVybFN0YXRlLnN0YXRlTmFtZSA9ICdwbHVzY2F0ZWdvcnknO1xuICAgICAgICAgICAgdXJsU3RhdGUudW5pdCA9IGhhc2hQYXJ0c1sxXTtcbiAgICAgICAgICAgIHVybFN0YXRlLmNhdGVnb3J5ID0gaGFzaE5hbWUuc3Vic3RyaW5nKCgnI3BsdXNjYXRlZ29yeV8nICsgaGFzaFBhcnRzWzFdICsgJ18nICkubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybFN0YXRlLnN0YXRlTmFtZSA9ICdzcGxhc2gnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXJsU3RhdGUgPSB1cmxTdGF0ZTtcbiAgICB9XG5cbiAgICBnb1RvU3RhdGUoKXtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50U3RhdGUoKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnVybFN0YXRlLnN0YXRlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnc3BsYXNoJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMuZ29Ub1NwbGFzaCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ3VuaXRtZW51JzpcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMuZ29Ub1VuaXRNZW51KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FzZSAndW5pdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmdvVG9MZXNzb25NZW51KHRoaXMudXJsU3RhdGUudW5pdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FzZSAncGx1c3pvbmUnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5nb1RvUGx1c1pvbmVDYXRlZ29yaWVzTWVudSh0aGlzLnVybFN0YXRlLnVuaXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ3BsdXNjYXRlZ29yeSc6XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmdvVG9QbHVzWm9uZVJlc291cmNlc01lbnUoe3VuaXROdW1iZXI6IHRoaXMudXJsU3RhdGUudW5pdCwgY2F0ZWdvcnk6IHRoaXMudXJsU3RhdGUuY2F0ZWdvcnl9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVVybEhhc2godXJsU3RhdGUpe1xuICAgICAgICBsZXQgdXJsSGFzaCA9ICcnO1xuICAgICAgICBzd2l0Y2ggKHVybFN0YXRlLnN0YXRlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnc3BsYXNoJzpcbiAgICAgICAgICAgICAgICB1cmxIYXNoID0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3VuaXRtZW51JzpcbiAgICAgICAgICAgICAgICB1cmxIYXNoID0gYCN1bml0bWVudWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FzZSAndW5pdCc6XG4gICAgICAgICAgICAgICAgdXJsSGFzaCA9IGAjdW5pdF8ke3VybFN0YXRlLnVuaXR9YDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ3BsdXN6b25lJzpcbiAgICAgICAgICAgICAgICB1cmxIYXNoID0gYCNwbHVzem9uZV8ke3VybFN0YXRlLnVuaXR9YDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgICAgICBjYXNlICdwbHVzY2F0ZWdvcnknOlxuICAgICAgICAgICAgICAgIHVybEhhc2ggPSBgI3BsdXNjYXRlZ29yeV8ke3VybFN0YXRlLnVuaXR9XyR7dXJsU3RhdGUuY2F0ZWdvcnl9YDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsSGFzaDtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVybEhlbHBlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvdXJsSGVscGVyLmpzIiwiY2xhc3MgSW1hZ2VzUHJlbG9hZCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5pbWFnZSA9IFtdO1xuICAgIH1cbiAgICBhZGQoaW1hZ2VzVG9Mb2FkKXtcbiAgICAgICAgaWYodHlwZW9mIGltYWdlc1RvTG9hZCA9PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICBpbWFnZXNUb0xvYWQgPSBbaW1hZ2VzVG9Mb2FkXTtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZXNUb0xvYWQuZm9yRWFjaChpbWFnZVRvTG9hZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbmV3SW1hZ2Uuc3JjID0gaW1hZ2VUb0xvYWQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEltYWdlc1ByZWxvYWQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ltYWdlc1ByZWxvYWRIZWxwZXIuanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBBbmltYXRpb25zIGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbmNvbnN0IGFuaW1hdGlvbnMgPSBuZXcgQW5pbWF0aW9ucztcblxuLy9ET00gZWxlbWVudHNcblxuY2xhc3MgU3BsYXNoU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgc2NyZWVuRGl2OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3VwX3RkbF9zcGxhc2hfc2NyZWVuJyksXG4gICAgICAgICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3VwX3NwbGFzaF9fbWFpbl90aXRsZScpWzBdLFxuICAgICAgICAgICAgZW50ZXJCdG46IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF9zcGxhc2hfX2VudGVyJylbMF0sXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW5pdChwcm9wcyl7XG4gICAgICAgIHZhciB7IHRpdGxlLCBvbkVudGVyQWN0aW9uIH0gPSBwcm9wcztcbiAgICAgICAgLy9UaXRsZVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2Lm9uY2xpY2sgPSBvbkVudGVyQWN0aW9uO1xuICAgICAgICBcbiAgICAgICAgaWYoY29uZmlnLmRldil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNwbGFzaFNjcmVlbi5pbml0KClcIik7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTcGxhc2hTY3JlZW4uc2hvdygpXCIpXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFjdGl2ZSl7XG4gICAgICAgICAgICBhbmltYXRpb25zLnNob3dPcGFjaXR5U2NhbGUodGhpcy5kb21FbGVtZW50cy5zY3JlZW5EaXYpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBoaWRlKCl7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3BsYXNoU2NyZWVuLmhpZGUoKVwiKTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5oaWRlT3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwbGFzaFNjcmVlbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvX3NwbGFzaFNjcmVlbi5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IEFuaW1hdGlvbnMgZnJvbSAnLi9hbmltYXRpb25zJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuaW1wb3J0IHsgZW5jb2RlSHRtbCB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgc2hhdmUgZnJvbSAnc2hhdmUnO1xuXG5jb25zdCBhbmltYXRpb25zID0gbmV3IEFuaW1hdGlvbnM7XG5cbi8vRE9NIGVsZW1lbnRzXG5cbmNsYXNzIFVuaXRNZW51U2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyB0aGlzLnN0YXRlID0ge1xuICAgICAgICAvLyAgICAgdGl0bGU6ICcnLFxuICAgICAgICAvLyAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2xpZGVyOiBudWxsLFxuICAgICAgICAgICAgb25Vbml0QWN0aW9uOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgc2NyZWVuRGl2OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3VwX3RkbF91bml0X21lbnVfc2NyZWVuJyksXG4gICAgICAgICAgICBiYWNrQnV0dG9uOiAkKCcjb3VwX3RkbF91bml0X21lbnVfc2NyZWVuIC5vdXBfdGRsX19icmVhZGNydW1iX19iYWNrJykuZ2V0KDApLFxuICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF91bml0X21lbnVfX21haW5fdGl0bGUnKVswXSxcbiAgICAgICAgICAgIHNsaWRlckhpZGRlbkVsZW1lbnRzOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdXBfdW5pdF9tZW51X19zbGlkZXJfaGlkZGVuX2VsZW1lbnRzJylbMF0sXG4gICAgICAgICAgICBzbGlkZXI6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF91bml0X21lbnVfX3VuaXRfc2xpZGVyJylbMF0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bml0SHRtbEVsZW1lbnRzID0gW107XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuaXRNZW51U2NyZWVuLmNvbnN0cnVjdG9yKClcIilcbiAgICB9XG4gICAgXG4gICAgaW5pdChwcm9wcyl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbml0TWVudVNjcmVlbi5pbml0KClcIik7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB7IHRpdGxlLCBvblVuaXRBY3Rpb24sIHVuaXRzLCBvbkJhY2tBY3Rpb259ID0gcHJvcHM7XG4gICAgICAgIHRoaXMuc3RhdGUub25Vbml0QWN0aW9uID0gb25Vbml0QWN0aW9uO1xuICAgICAgICAvL1RpdGxlXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMudGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgdW5pdHMuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgICAgIHRoaXMudW5pdEh0bWxFbGVtZW50cy5wdXNoKHRoaXMuZ2V0TWVudVVuaXRFbGVtZW50U3RyaW5nSHRtbCh1bml0KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgJCh0aGlzLmRvbUVsZW1lbnRzLmJhY2tCdXR0b24pLnVuYmluZCgnY2xpY2snKS5vbignY2xpY2snLG9uQmFja0FjdGlvbik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlLnNsaWRlciA9IG5ldyBTbGlkZXI7XG4gICAgICAgIHRoaXMuc3RhdGUuc2xpZGVyLmluaXQoe1xuICAgICAgICAgICAgZWxlbWVudHM6IHRoaXMudW5pdEh0bWxFbGVtZW50cyxcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrQWN0aW9uOiAobnVtYmVyKSA9PiB0aGlzLm9uVW5pdENsaWNrKG51bWJlciksXG4gICAgICAgICAgICBjb250YWluZXJTZWxlY3RvcjogJy5vdXBfdW5pdF9tZW51X191bml0X3NsaWRlcl9jb250YWluZXInLFxuICAgICAgICAgICAgZWxlbWVudE1pbldpZHRoOiB7XG4gICAgICAgICAgICAgICAgbW9iaWxlOiAyNDAsXG4gICAgICAgICAgICAgICAgdGFibGV0OiAyNjAsXG4gICAgICAgICAgICAgICAgZGVza3RvcDogMzAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnRNaW5IZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDEwMCxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDExMCxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAxMjAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25SZXNpemU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc2hhdmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm91cF91bml0X21lbnVfX3VuaXRfX3RpdGxlIHNwYW4nKSwgNjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vICQod2luZG93KS5yZXNpemUodGhpcy5yZWZyZXNoU2xpZGVyU2l6ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbml0TWVudVNjcmVlbi5zaG93KClcIilcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYWN0aXZlKXtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMuc2hvd09wYWNpdHlTY2FsZSh0aGlzLmRvbUVsZW1lbnRzLnNjcmVlbkRpdik7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNsaWRlci5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGlkZSgpe1xuICAgICAgICAvL3RoaXMuc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5pdE1lbnVTY3JlZW4uaGlkZSgpXCIsIHRoaXMuc3RhdGUuYWN0aXZlKTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5oaWRlT3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWVudVVuaXRFbGVtZW50U3RyaW5nSHRtbCh1bml0KXtcbiAgICAgICAgdmFyIGh0bWxTdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3VuaXRfbWVudV9fdW5pdC1idG5cIiBudW1iZXI9XCIke3VuaXQubnVtYmVyfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfdW5pdF9tZW51X191bml0X19udW1iZXJcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3VuaXQuaW1hZ2V9KTtcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3VuaXRfbWVudV9fdW5pdF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtlbmNvZGVIdG1sKHVuaXQudGl0bGUpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIGh0bWxTdHJpbmc7XG4gICAgfVxuICAgIG9uVW5pdENsaWNrKGUpe1xuICAgICAgICB2YXIgbnVtYmVyID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ251bWJlcicpO1xuICAgICAgICB0aGlzLnN0YXRlLm9uVW5pdEFjdGlvbihudW1iZXIpO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5pdE1lbnVTY3JlZW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL191bml0TWVudVNjcmVlbi5qcyIsIi8qXG4gICAgIF8gXyAgICAgIF8gICAgICAgX1xuIF9fX3wgKF8pIF9fX3wgfCBfXyAgKF8pX19fXG4vIF9ffCB8IHwvIF9ffCB8LyAvICB8IC8gX198XG5cXF9fIFxcIHwgfCAoX198ICAgPCBfIHwgXFxfXyBcXFxufF9fXy9ffF98XFxfX198X3xcXF8oXykvIHxfX18vXG4gICAgICAgICAgICAgICAgICAgfF9fL1xuXG4gVmVyc2lvbjogMS44LjFcbiAgQXV0aG9yOiBLZW4gV2hlZWxlclxuIFdlYnNpdGU6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pb1xuICAgIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xuICAgIFJlcG86IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2tcbiAgSXNzdWVzOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrL2lzc3Vlc1xuXG4gKi9cbi8qIGdsb2JhbCB3aW5kb3csIGRvY3VtZW50LCBkZWZpbmUsIGpRdWVyeSwgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgKi9cbjsoZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG5cbn0oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgU2xpY2sgPSB3aW5kb3cuU2xpY2sgfHwge307XG5cbiAgICBTbGljayA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgaW5zdGFuY2VVaWQgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNsaWNrKGVsZW1lbnQsIHNldHRpbmdzKSB7XG5cbiAgICAgICAgICAgIHZhciBfID0gdGhpcywgZGF0YVNldHRpbmdzO1xuXG4gICAgICAgICAgICBfLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj5QcmV2aW91czwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXG4gICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oc2xpZGVyLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAvPicpLnRleHQoaSArIDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgZWRnZUZyaWN0aW9uOiAwLjM1LFxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25kVG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IG51bGwsXG4gICAgICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlOiAnJyxcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDUsXG4gICAgICAgICAgICAgICAgdXNlQ1NTOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF8uaW5pdGlhbHMgPSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlUaW1lcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgICAgICAgICAgJGRvdHM6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdFdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9hZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgICRuZXh0QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgJHByZXZBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlQ291bnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVUcmFjazogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzOiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHN3aXBlTGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBzd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAkbGlzdDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3VjaE9iamVjdDoge30sXG4gICAgICAgICAgICAgICAgdHJhbnNmb3Jtc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVuc2xpY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMpO1xuXG4gICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMgPSBbXTtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzID0gW107XG4gICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gZmFsc2U7XG4gICAgICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmhpZGRlbiA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgXy5wb3NpdGlvblByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBudWxsO1xuICAgICAgICAgICAgXy5yb3dDb3VudCA9IDE7XG4gICAgICAgICAgICBfLnNob3VsZENsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIF8uJHNsaWRlciA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gMDtcbiAgICAgICAgICAgIF8ud2luZG93VGltZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBkYXRhU2V0dGluZ3MgPSAkKGVsZW1lbnQpLmRhdGEoJ3NsaWNrJykgfHwge307XG5cbiAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLmRlZmF1bHRzLCBzZXR0aW5ncywgZGF0YVNldHRpbmdzKTtcblxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuXG4gICAgICAgICAgICBfLm9yaWdpbmFsU2V0dGluZ3MgPSBfLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ21vekhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ21venZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmF1dG9QbGF5ID0gJC5wcm94eShfLmF1dG9QbGF5LCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlDbGVhciA9ICQucHJveHkoXy5hdXRvUGxheUNsZWFyLCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlJdGVyYXRvciA9ICQucHJveHkoXy5hdXRvUGxheUl0ZXJhdG9yLCBfKTtcbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUgPSAkLnByb3h5KF8uY2hhbmdlU2xpZGUsIF8pO1xuICAgICAgICAgICAgXy5jbGlja0hhbmRsZXIgPSAkLnByb3h5KF8uY2xpY2tIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2VsZWN0SGFuZGxlciA9ICQucHJveHkoXy5zZWxlY3RIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2V0UG9zaXRpb24gPSAkLnByb3h5KF8uc2V0UG9zaXRpb24sIF8pO1xuICAgICAgICAgICAgXy5zd2lwZUhhbmRsZXIgPSAkLnByb3h5KF8uc3dpcGVIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uZHJhZ0hhbmRsZXIgPSAkLnByb3h5KF8uZHJhZ0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5rZXlIYW5kbGVyID0gJC5wcm94eShfLmtleUhhbmRsZXIsIF8pO1xuXG4gICAgICAgICAgICBfLmluc3RhbmNlVWlkID0gaW5zdGFuY2VVaWQrKztcblxuICAgICAgICAgICAgLy8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3NcbiAgICAgICAgICAgIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uIChtdXN0IHN0YXJ0IHdpdGggPClcbiAgICAgICAgICAgIC8vIEV4dHJhY3RlZCBmcm9tIGpRdWVyeSB2MS4xMSBzb3VyY2VcbiAgICAgICAgICAgIF8uaHRtbEV4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC87XG5cblxuICAgICAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG4gICAgICAgICAgICBfLmluaXQodHJ1ZSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbGljaztcblxuICAgIH0oKSk7XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWN0aXZhdGVBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWFjdGl2ZScpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWRkU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tBZGQgPSBmdW5jdGlvbihtYXJrdXAsIGluZGV4LCBhZGRCZWZvcmUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgYWRkQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwIHx8IChpbmRleCA+PSBfLnNsaWRlQ291bnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIF8uJHNsaWRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFkZEJlZm9yZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRCZWZvcmUoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRBZnRlcihfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhZGRCZWZvcmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHRcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVTbGlkZSA9IGZ1bmN0aW9uKHRhcmdldExlZnQsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIGFuaW1Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IC10YXJnZXRMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudExlZnQgPSAtKF8uY3VycmVudExlZnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiBfLmN1cnJlbnRMZWZ0XG4gICAgICAgICAgICAgICAgfSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IF8ub3B0aW9ucy5zcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBfLm9wdGlvbnMuZWFzaW5nLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdyA9IE1hdGguY2VpbChub3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoMHB4LCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IE1hdGguY2VpbCh0YXJnZXRMZWZ0KTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoMHB4LCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdlRhcmdldCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5vcHRpb25zLmFzTmF2Rm9yO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgJiYgYXNOYXZGb3IgIT09IG51bGwgKSB7XG4gICAgICAgICAgICBhc05hdkZvciA9ICQoYXNOYXZGb3IpLm5vdChfLiRzbGlkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzTmF2Rm9yO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hc05hdkZvciA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLmdldE5hdlRhcmdldCgpO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgIT09IG51bGwgJiYgdHlwZW9mIGFzTmF2Rm9yID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuc2xpY2soJ2dldFNsaWNrJyk7XG4gICAgICAgICAgICAgICAgaWYoIXRhcmdldC51bnNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNsaWRlSGFuZGxlcihpbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IF8udHJhbnNmb3JtVHlwZSArICcgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJ29wYWNpdHkgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlUaW1lciA9IHNldEludGVydmFsKCBfLmF1dG9QbGF5SXRlcmF0b3IsIF8ub3B0aW9ucy5hdXRvcGxheVNwZWVkICk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlDbGVhciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5hdXRvUGxheVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlJdGVyYXRvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBpZiAoICFfLnBhdXNlZCAmJiAhXy5pbnRlcnJ1cHRlZCAmJiAhXy5mb2N1c3NlZCApIHtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMSAmJiAoIF8uY3VycmVudFNsaWRlICsgMSApID09PSAoIF8uc2xpZGVDb3VudCAtIDEgKSkge1xuICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIF8uZGlyZWN0aW9uID09PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIF8uY3VycmVudFNsaWRlIC0gMSA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZVRvICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZEFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93ID0gJChfLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyA9ICQoXy5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG5cbiAgICAgICAgICAgIGlmKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnByZXBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZCggXy4kbmV4dEFycm93IClcblxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGREb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgZG90O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgICAgIGRvdCA9ICQoJzx1bCAvPicpLmFkZENsYXNzKF8ub3B0aW9ucy5kb3RzQ2xhc3MpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IF8uZ2V0RG90Q291bnQoKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZG90LmFwcGVuZCgkKCc8bGkgLz4nKS5hcHBlbmQoXy5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsIF8sIGkpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJGRvdHMgPSBkb3QuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZERvdHMpO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmZpbmQoJ2xpJykuZmlyc3QoKS5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZE91dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCBfLm9wdGlvbnMuc2xpZGUgKyAnOm5vdCguc2xpY2stY2xvbmVkKScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KVxuICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnLCAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJykgfHwgJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2sgPSAoXy5zbGlkZUNvdW50ID09PSAwKSA/XG4gICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oXy4kc2xpZGVyKSA6XG4gICAgICAgICAgICBfLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpO1xuXG4gICAgICAgIF8uJGxpc3QgPSBfLiRzbGlkZVRyYWNrLndyYXAoXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInNsaWNrLWxpc3RcIi8+JykucGFyZW50KCk7XG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlIHx8IF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlcikubm90KCdbc3JjXScpLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG5cbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG5cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5hZGRDbGFzcygnZHJhZ2dhYmxlJyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcyxzbGlkZXNQZXJTZWN0aW9uO1xuXG4gICAgICAgIG5ld1NsaWRlcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oKTtcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcblxuICAgICAgICAgICAgc2xpZGVzUGVyU2VjdGlvbiA9IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cgKiBfLm9wdGlvbnMucm93cztcbiAgICAgICAgICAgIG51bU9mU2xpZGVzID0gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvcihhID0gMDsgYSA8IG51bU9mU2xpZGVzOyBhKyspe1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvcihiID0gMDsgYiA8IF8ub3B0aW9ucy5yb3dzOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBmb3IoYyA9IDA7IGMgPCBfLm9wdGlvbnMuc2xpZGVzUGVyUm93OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoYSAqIHNsaWRlc1BlclNlY3Rpb24gKyAoKGIgKiBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArIGMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzooMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZSA9IGZ1bmN0aW9uKGluaXRpYWwsIGZvcmNlVXBkYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtwb2ludCwgdGFyZ2V0QnJlYWtwb2ludCwgcmVzcG9uZFRvV2lkdGgsIHRyaWdnZXJCcmVha3BvaW50ID0gZmFsc2U7XG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IF8uJHNsaWRlci53aWR0aCgpO1xuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICBpZiAoXy5yZXNwb25kVG8gPT09ICd3aW5kb3cnKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ21pbicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gTWF0aC5taW4od2luZG93V2lkdGgsIHNsaWRlcldpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnJlc3BvbnNpdmUgJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7XG5cbiAgICAgICAgICAgIGZvciAoYnJlYWtwb2ludCBpbiBfLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA8IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA+IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBfLmFjdGl2ZUJyZWFrcG9pbnQgfHwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9IF8ub3JpZ2luYWxTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9ubHkgdHJpZ2dlciBicmVha3BvaW50cyBkdXJpbmcgYW4gYWN0dWFsIGJyZWFrLiBub3Qgb24gaW5pdGlhbGl6ZS5cbiAgICAgICAgICAgIGlmKCAhaW5pdGlhbCAmJiB0cmlnZ2VyQnJlYWtwb2ludCAhPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JyZWFrcG9pbnQnLCBbXywgdHJpZ2dlckJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uKGV2ZW50LCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxuICAgICAgICAgICAgaW5kZXhPZmZzZXQsIHNsaWRlT2Zmc2V0LCB1bmV2ZW5PZmZzZXQ7XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgbGluaywgcHJldmVudCBkZWZhdWx0IGFjdGlvbi5cbiAgICAgICAgaWYoJHRhcmdldC5pcygnYScpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG5vdCB0aGUgPGxpPiBlbGVtZW50IChpZTogYSBjaGlsZCksIGZpbmQgdGhlIDxsaT4uXG4gICAgICAgIGlmKCEkdGFyZ2V0LmlzKCdsaScpKSB7XG4gICAgICAgICAgICAkdGFyZ2V0ID0gJHRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdW5ldmVuT2Zmc2V0ID0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCk7XG4gICAgICAgIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChfLnNsaWRlQ291bnQgLSBfLmN1cnJlbnRTbGlkZSkgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLm1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSArIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnaW5kZXgnOlxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmRhdGEuaW5kZXggPT09IDAgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleCB8fCAkdGFyZ2V0LmluZGV4KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmNoaWxkcmVuKCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG5hdmlnYWJsZXMsIHByZXZOYXZpZ2FibGU7XG5cbiAgICAgICAgbmF2aWdhYmxlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpO1xuICAgICAgICBwcmV2TmF2aWdhYmxlID0gMDtcbiAgICAgICAgaWYgKGluZGV4ID4gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gbmF2aWdhYmxlcykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5hdmlnYWJsZXNbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwcmV2TmF2aWdhYmxlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5hdmlnYWJsZSA9IG5hdmlnYWJsZXNbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyAmJiBfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9mZignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub2ZmKF8udmlzaWJpbGl0eUNoYW5nZSwgXy52aXNpYmlsaXR5KTtcblxuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub2ZmKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5vcmllbnRhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnJlc2l6ZSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vZmYoJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwU2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIG9yaWdpbmFsU2xpZGVzO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvcmlnaW5hbFNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uc2hvdWxkQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVmcmVzaCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgXy5jbGVhblVwRXZlbnRzKCk7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikuZGV0YWNoKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5wcmV2QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLm5leHRBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoXy4kc2xpZGVzKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKVxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3R5bGUnLCAkKHRoaXMpLmRhdGEoJ29yaWdpbmFsU3R5bGluZycpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRsaXN0LmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYXBwZW5kKF8uJHNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBfLmNsZWFuVXBSb3dzKCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZXInKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgIF8udW5zbGlja2VkID0gdHJ1ZTtcblxuICAgICAgICBpZighcmVmcmVzaCkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2Rlc3Ryb3knLCBbX10pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICcnO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGVPdXQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVyKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChmaWx0ZXIgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuZmlsdGVyKGZpbHRlcikuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mb2N1c0hhbmRsZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJylcbiAgICAgICAgICAgIC5vbignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycsICcqJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgJHNmID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucGF1c2VPbkZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvY3Vzc2VkID0gJHNmLmlzKCc6Zm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICByZXR1cm4gXy5jdXJyZW50U2xpZGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciBicmVha1BvaW50ID0gMDtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB2YXIgcGFnZXJRdHkgPSAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIGlmKCFfLm9wdGlvbnMuYXNOYXZGb3IpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gMSArIE1hdGguY2VpbCgoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFnZXJRdHkgLSAxO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQsXG4gICAgICAgICAgICB2ZXJ0aWNhbEhlaWdodCxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIHRhcmdldFNsaWRlLFxuICAgICAgICAgICAgY29lZjtcblxuICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgdmVydGljYWxIZWlnaHQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoXy5zbGlkZVdpZHRoICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiAtMTtcbiAgICAgICAgICAgICAgICBjb2VmID0gLTFcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMS41O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKHZlcnRpY2FsSGVpZ2h0ICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiBjb2VmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID4gXy5zbGlkZUNvdW50ICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiBfLnNsaWRlV2lkdGg7XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiB2ZXJ0aWNhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIC8gMikgLSAoKF8uc2xpZGVXaWR0aCAqIF8uc2xpZGVDb3VudCkgLyAyKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgLSBfLnNsaWRlV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogXy5zbGlkZVdpZHRoKSAqIC0xKSArIF8uc2xpZGVPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogdmVydGljYWxIZWlnaHQpICogLTEpICsgdmVydGljYWxPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgKz0gKF8uJGxpc3Qud2lkdGgoKSAtIHRhcmdldFNsaWRlLm91dGVyV2lkdGgoKSkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldExlZnQ7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE9wdGlvbiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICByZXR1cm4gXy5vcHRpb25zW29wdGlvbl07XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha1BvaW50ID0gMCxcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwLFxuICAgICAgICAgICAgaW5kZXhlcyA9IFtdLFxuICAgICAgICAgICAgbWF4O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBjb3VudGVyID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQgKiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBtYXgpIHtcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChicmVha1BvaW50KTtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXhlcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpZGVDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCwgc3dpcGVkU2xpZGUsIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSA/IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIDogMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBzbGlkZSkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5vZmZzZXRMZWZ0IC0gY2VudGVyT2Zmc2V0ICsgKCQoc2xpZGUpLm91dGVyV2lkdGgoKSAvIDIpID4gKF8uc3dpcGVMZWZ0ICogLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkID0gTWF0aC5hYnMoJChzd2lwZWRTbGlkZSkuYXR0cignZGF0YS1zbGljay1pbmRleCcpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7XG5cbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNUcmF2ZXJzZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ29UbyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dvVG8gPSBmdW5jdGlvbihzbGlkZSwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoc2xpZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRvbnRBbmltYXRlKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGNyZWF0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICghJChfLiRzbGlkZXIpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG5cbiAgICAgICAgICAgICQoXy4kc2xpZGVyKS5hZGRDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcblxuICAgICAgICAgICAgXy5idWlsZFJvd3MoKTtcbiAgICAgICAgICAgIF8uYnVpbGRPdXQoKTtcbiAgICAgICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgICAgIF8uc3RhcnRMb2FkKCk7XG4gICAgICAgICAgICBfLmxvYWRTbGlkZXIoKTtcbiAgICAgICAgICAgIF8uaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgICAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7XG4gICAgICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3JlYXRpb24pIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdpbml0JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5pbml0QURBKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgICAgIG51bURvdEdyb3VwcyA9IE1hdGguY2VpbChfLnNsaWRlQ291bnQgLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxcbiAgICAgICAgICAgICAgICB0YWJDb250cm9sSW5kZXhlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpLmZpbHRlcihmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWwgPj0gMCkgJiYgKHZhbCA8IF8uc2xpZGVDb3VudCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmFkZChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLm5vdChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlQ29udHJvbEluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXMuaW5kZXhPZihpKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYnBhbmVsJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAtMVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlQ29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgIHZhciBhcmlhQnV0dG9uQ29udHJvbCA9ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBzbGlkZUNvbnRyb2xJbmRleFxuICAgICAgICAgICAgICAgICAgIGlmICgkKCcjJyArIGFyaWFCdXR0b25Db250cm9sKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBhcmlhQnV0dG9uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZFNsaWRlSW5kZXggPSB0YWJDb250cm9sSW5kZXhlc1tpXTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykuZmlyc3QoKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFiJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBtYXBwZWRTbGlkZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6IChpICsgMSkgKyAnIG9mICcgKyBudW1Eb3RHcm91cHMsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KS5lcShfLmN1cnJlbnRTbGlkZSkuZmluZCgnYnV0dG9uJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgICAgICB9KS5lbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGk9Xy5jdXJyZW50U2xpZGUsIG1heD1pK18ub3B0aW9ucy5zbGlkZXNUb1Nob3c7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLmF0dHIoeyd0YWJpbmRleCc6ICcwJ30pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmFjdGl2YXRlQURBKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBcnJvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKS5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4J1xuICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8ub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucGF1c2VPbkhvdmVyICkge1xuXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG5cbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdzdGFydCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnbW92ZSdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihfLnZpc2liaWxpdHlDaGFuZ2UsICQucHJveHkoXy52aXNpYmlsaXR5LCBfKSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub24oJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ub3JpZW50YXRpb25DaGFuZ2UsIF8pKTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLnJlc2l6ZSwgXykpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub24oJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vbignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG4gICAgICAgICQoXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRVSSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5zaG93KCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmtleUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgIC8vRG9udCBzbGlkZSBpZiB0aGUgY3Vyc29yIGlzIGluc2lkZSB0aGUgZm9ybSBmaWVsZHMgYW5kIGFycm93IGtleXMgYXJlIHByZXNzZWRcbiAgICAgICAgaWYoIWV2ZW50LnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAnbmV4dCcgOiAgJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAncHJldmlvdXMnIDogJ25leHQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZEltYWdlcyhpbWFnZXNTY29wZSkge1xuXG4gICAgICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIGltYWdlc1Njb3BlKS5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGF6eScpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyY1NldCA9ICQodGhpcykuYXR0cignZGF0YS1zcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgaW1hZ2VTb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFtfLCBpbWFnZSwgaW1hZ2VTb3VyY2VdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5jdXJyZW50U2xpZGUgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IE1hdGgubWF4KDAsIF8uY3VycmVudFNsaWRlIC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gMiArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpICsgXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5vcHRpb25zLmluZmluaXRlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIF8uY3VycmVudFNsaWRlIDogXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICByYW5nZUVuZCA9IE1hdGguY2VpbChyYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VTdGFydCA+IDApIHJhbmdlU3RhcnQtLTtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VFbmQgPD0gXy5zbGlkZUNvdW50KSByYW5nZUVuZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZFJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpLnNsaWNlKHJhbmdlU3RhcnQsIHJhbmdlRW5kKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICB2YXIgcHJldlNsaWRlID0gcmFuZ2VTdGFydCAtIDEsXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcmFuZ2VFbmQsXG4gICAgICAgICAgICAgICAgJHNsaWRlcyA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUgPCAwKSBwcmV2U2xpZGUgPSBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShwcmV2U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEobmV4dFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLS07XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkSW1hZ2VzKGxvYWRSYW5nZSk7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5pbml0VUkoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAncHJvZ3Jlc3NpdmUnKSB7XG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5uZXh0ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrTmV4dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm9yaWVudGF0aW9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGF1c2UgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQYXVzZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcbiAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wbGF5ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIF8ub3B0aW9ucy5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wb3N0U2xpZGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWZ0ZXJDaGFuZ2UnLCBbXywgaW5kZXhdKTtcblxuICAgICAgICAgICAgXy5hbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmluaXRBREEoKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRTbGlkZSA9ICQoXy4kc2xpZGVzLmdldChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLmF0dHIoJ3RhYmluZGV4JywgMCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUHJldiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJvZ3Jlc3NpdmVMYXp5TG9hZCA9IGZ1bmN0aW9uKCB0cnlDb3VudCApIHtcblxuICAgICAgICB0cnlDb3VudCA9IHRyeUNvdW50IHx8IDE7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJGltZ3NUb0xvYWQgPSAkKCAnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIgKSxcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXG4gICAgICAgICAgICBpbWFnZVNyY1NldCxcbiAgICAgICAgICAgIGltYWdlU2l6ZXMsXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcblxuICAgICAgICBpZiAoICRpbWdzVG9Mb2FkLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgaW1hZ2UgPSAkaW1nc1RvTG9hZC5maXJzdCgpO1xuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBpbWFnZS5hdHRyKCdkYXRhLWxhenknKTtcbiAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gaW1hZ2UuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gaW1hZ2UuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyk7XG4gICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoICdzcmMnLCBpbWFnZVNvdXJjZSApXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRyeUNvdW50IDwgMyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogdHJ5IHRvIGxvYWQgdGhlIGltYWdlIDMgdGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxuICAgICAgICAgICAgICAgICAgICAgKiBzZXJ2ZXJzIGJsb2NraW5nIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoIHRyeUNvdW50ICsgMSApO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAgKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWxsSW1hZ2VzTG9hZGVkJywgWyBfIF0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCBpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBjdXJyZW50U2xpZGUsIGxhc3RWaXNpYmxlSW5kZXg7XG5cbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG5cbiAgICAgICAgLy8gaW4gbm9uLWluZmluaXRlIHNsaWRlcnMsIHdlIGRvbid0IHdhbnQgdG8gZ28gcGFzdCB0aGVcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxuICAgICAgICBpZiggIV8ub3B0aW9ucy5pbmZpbml0ZSAmJiAoIF8uY3VycmVudFNsaWRlID4gbGFzdFZpc2libGVJbmRleCApKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGxhc3RWaXNpYmxlSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBsZXNzIHNsaWRlcyB0aGFuIHRvIHNob3csIGdvIHRvIHN0YXJ0LlxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcblxuICAgICAgICBfLmRlc3Ryb3kodHJ1ZSk7XG5cbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcblxuICAgICAgICBfLmluaXQoKTtcblxuICAgICAgICBpZiggIWluaXRpYWxpemluZyApIHtcblxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYnJlYWtwb2ludCwgY3VycmVudEJyZWFrcG9pbnQsIGwsXG4gICAgICAgICAgICByZXNwb25zaXZlU2V0dGluZ3MgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZSB8fCBudWxsO1xuXG4gICAgICAgIGlmICggJC50eXBlKHJlc3BvbnNpdmVTZXR0aW5ncykgPT09ICdhcnJheScgJiYgcmVzcG9uc2l2ZVNldHRpbmdzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xuXG4gICAgICAgICAgICBmb3IgKCBicmVha3BvaW50IGluIHJlc3BvbnNpdmVTZXR0aW5ncyApIHtcblxuICAgICAgICAgICAgICAgIGwgPSBfLmJyZWFrcG9pbnRzLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5icmVha3BvaW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZXMgd2l0aCB0aGUgc2FtZSBicmVha3BvaW50IG51bWJlciwgd2UgZG9uJ3Qgd2FudCBkdXBlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc3BsaWNlKGwsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tjdXJyZW50QnJlYWtwb2ludF0gPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uc2V0dGluZ3M7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBfLm9wdGlvbnMubW9iaWxlRmlyc3QgKSA/IGEtYiA6IGItYTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50ICYmIF8uY3VycmVudFNsaWRlICE9PSAwKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcblxuICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZShmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICBfLnBhdXNlZCA9ICFfLm9wdGlvbnMuYXV0b3BsYXk7XG4gICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigncmVJbml0JywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF8ud2luZG93RGVsYXkpO1xuICAgICAgICAgICAgXy53aW5kb3dEZWxheSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICAgICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7IF8uc2V0UG9zaXRpb24oKTsgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZW1vdmVTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1JlbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCByZW1vdmVCZWZvcmUsIHJlbW92ZUFsbCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gMCA6IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIHgsIHk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gLXBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuICAgICAgICB5ID0gXy5wb3NpdGlvblByb3AgPT0gJ3RvcCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XG5cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJywgJyArIHkgKyAnKSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAnLCAnICsgeSArICcsIDBweCknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kbGlzdC5oZWlnaHQoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nICsgJyAwcHgnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XG4gICAgICAgIF8ubGlzdEhlaWdodCA9IF8uJGxpc3QuaGVpZ2h0KCk7XG5cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSAmJiBfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoKTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLndpZHRoKF8uc2xpZGVXaWR0aCAtIG9mZnNldCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEZhZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0O1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uc2xpZGVXaWR0aCAqIGluZGV4KSAqIC0xO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLmNzcyh7XG4gICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuY3NzKCdoZWlnaHQnLCB0YXJnZXRIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldE9wdGlvbiA9XG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjY2VwdHMgYXJndW1lbnRzIGluIGZvcm1hdCBvZjpcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2luZ2xlIG9wdGlvbidzIHZhbHVlOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzZXQgb2YgcmVzcG9uc2l2ZSBvcHRpb25zOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsICdyZXNwb25zaXZlJywgW3t9LCAuLi5dLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIHVwZGF0aW5nIG11bHRpcGxlIHZhbHVlcyBhdCBvbmNlIChub3QgcmVzcG9uc2l2ZSlcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCB7ICdvcHRpb24nOiB2YWx1ZSwgLi4uIH0sIHJlZnJlc2ggKVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGwsIGl0ZW0sIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggPSBmYWxzZSwgdHlwZTtcblxuICAgICAgICBpZiggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgdHlwZSA9ICdtdWx0aXBsZSc7XG5cbiAgICAgICAgfSBlbHNlIGlmICggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ3N0cmluZycgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgICAgIGlmICggYXJndW1lbnRzWzBdID09PSAncmVzcG9uc2l2ZScgJiYgJC50eXBlKCBhcmd1bWVudHNbMV0gKSA9PT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBhcmd1bWVudHNbMV0gIT09ICd1bmRlZmluZWQnICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdzaW5nbGUnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ3NpbmdsZScgKSB7XG5cbiAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnbXVsdGlwbGUnICkge1xuXG4gICAgICAgICAgICAkLmVhY2goIG9wdGlvbiAsIGZ1bmN0aW9uKCBvcHQsIHZhbCApIHtcblxuICAgICAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRdID0gdmFsO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdyZXNwb25zaXZlJyApIHtcblxuICAgICAgICAgICAgZm9yICggaXRlbSBpbiB2YWx1ZSApIHtcblxuICAgICAgICAgICAgICAgIGlmKCAkLnR5cGUoIF8ub3B0aW9ucy5yZXNwb25zaXZlICkgIT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgPSBbIHZhbHVlW2l0ZW1dIF07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGwgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFuZCBzcGxpY2Ugb3V0IGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucmVzcG9uc2l2ZVtsXS5icmVha3BvaW50ID09PSB2YWx1ZVtpdGVtXS5icmVha3BvaW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUuc3BsaWNlKGwsMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKCB2YWx1ZVtpdGVtXSApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggcmVmcmVzaCApIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldERpbWVuc2lvbnMoKTtcblxuICAgICAgICBfLnNldEhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zZXRGYWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc2V0UG9zaXRpb24nLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG5cbiAgICAgICAgXy5wb3NpdGlvblByb3AgPSBfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgPyAndG9wJyA6ICdsZWZ0JztcblxuICAgICAgICBpZiAoXy5wb3NpdGlvblByb3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLldlYmtpdFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLm1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnVzZUNTUyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuZmFkZSApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIF8ub3B0aW9ucy56SW5kZXggPT09ICdudW1iZXInICkge1xuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMuekluZGV4IDwgMyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gXy5kZWZhdWx0cy56SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLk9UcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdPVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctby10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdPVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUuTW96VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnTW96VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbW96LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ01velRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3dlYmtpdFRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLXdlYmtpdC10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd3ZWJraXRUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ21zVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbXMtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnbXNUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd0cmFuc2l0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSk7XG4gICAgfTtcblxuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0LCBhbGxTbGlkZXMsIGluZGV4T2Zmc2V0LCByZW1haW5kZXI7XG5cbiAgICAgICAgYWxsU2xpZGVzID0gXy4kc2xpZGVyXG4gICAgICAgICAgICAuZmluZCgnLnNsaWNrLXNsaWRlJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWN1cnJlbnQnKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgdmFyIGV2ZW5Db2VmID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAlIDIgPT09IDAgPyAxIDogMDtcblxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBjZW50ZXJPZmZzZXQgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIDEpIC0gY2VudGVyT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4IC0gY2VudGVyT2Zmc2V0ICsgZXZlbkNvZWYsIGluZGV4ICsgY2VudGVyT2Zmc2V0ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxICsgZXZlbkNvZWYsIGluZGV4T2Zmc2V0ICsgY2VudGVyT2Zmc2V0ICsgMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoYWxsU2xpZGVzLmxlbmd0aCAtIDEgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIHtcblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXgsIGluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxTbGlkZXMubGVuZ3RoIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleCA6IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICYmIChfLnNsaWRlQ291bnQgLSBpbmRleCkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIHJlbWFpbmRlciksIGluZGV4T2Zmc2V0ICsgcmVtYWluZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0LCBpbmRleE9mZnNldCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnb25kZW1hbmQnIHx8IF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgXy5sYXp5TG9hZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXR1cEluZmluaXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgc2xpZGVJbmRleCwgaW5maW5pdGVDb3VudDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5jZW50ZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlICYmIF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBzbGlkZUluZGV4ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gXy5zbGlkZUNvdW50OyBpID4gKF8uc2xpZGVDb3VudCAtXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50KTsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZmluaXRlQ291bnQgICsgXy5zbGlkZUNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignaWQnLCAnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmludGVycnVwdCA9IGZ1bmN0aW9uKCB0b2dnbGUgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhdG9nZ2xlICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0b2dnbGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9XG4gICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuaXMoJy5zbGljay1zbGlkZScpID9cbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XG5cbiAgICAgICAgaWYgKCFpbmRleCkgaW5kZXggPSAwO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWRlSGFuZGxlciA9IGZ1bmN0aW9uKGluZGV4LCBzeW5jLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciB0YXJnZXRTbGlkZSwgYW5pbVNsaWRlLCBvbGRTbGlkZSwgc2xpZGVMZWZ0LCB0YXJnZXRMZWZ0ID0gbnVsbCxcbiAgICAgICAgICAgIF8gPSB0aGlzLCBuYXZUYXJnZXQ7XG5cbiAgICAgICAgc3luYyA9IHN5bmMgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlICYmIF8ub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlICYmIF8uY3VycmVudFNsaWRlID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXg7XG4gICAgICAgIHRhcmdldExlZnQgPSBfLmdldExlZnQodGFyZ2V0U2xpZGUpO1xuICAgICAgICBzbGlkZUxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8uY3VycmVudExlZnQgPSBfLnN3aXBlTGVmdCA9PT0gbnVsbCA/IHNsaWRlTGVmdCA6IF8uc3dpcGVMZWZ0O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRTbGlkZSA8IDApIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50ICsgdGFyZ2V0U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2xpZGUgPj0gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGUgLSBfLnNsaWRlQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYmVmb3JlQ2hhbmdlJywgW18sIF8uY3VycmVudFNsaWRlLCBhbmltU2xpZGVdKTtcblxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGFuaW1TbGlkZTtcblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXNOYXZGb3IgKSB7XG5cbiAgICAgICAgICAgIG5hdlRhcmdldCA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBuYXZUYXJnZXQuc2xpY2soJ2dldFNsaWNrJyk7XG5cbiAgICAgICAgICAgIGlmICggbmF2VGFyZ2V0LnNsaWRlQ291bnQgPD0gbmF2VGFyZ2V0Lm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgICAgIG5hdlRhcmdldC5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGVPdXQob2xkU2xpZGUpO1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zdGFydExvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuaGlkZSgpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciB4RGlzdCwgeURpc3QsIHIsIHN3aXBlQW5nbGUsIF8gPSB0aGlzO1xuXG4gICAgICAgIHhEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFggLSBfLnRvdWNoT2JqZWN0LmN1clg7XG4gICAgICAgIHlEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFkgLSBfLnRvdWNoT2JqZWN0LmN1clk7XG4gICAgICAgIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XG5cbiAgICAgICAgc3dpcGVBbmdsZSA9IE1hdGgucm91bmQociAqIDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSA0NSkgJiYgKHN3aXBlQW5nbGUgPj0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gMzYwKSAmJiAoc3dpcGVBbmdsZSA+PSAzMTUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDEzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMjI1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdyaWdodCcgOiAnbGVmdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMzUpICYmIChzd2lwZUFuZ2xlIDw9IDEzNSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVDb3VudCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjtcblxuICAgICAgICBfLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIF8uc3dpcGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLnNjcm9sbGluZykge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgXy5zaG91bGRDbGljayA9ICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDEwICkgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5lZGdlSGl0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2VkZ2UnLCBbXywgXy5zd2lwZURpcmVjdGlvbigpIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID49IF8udG91Y2hPYmplY3QubWluU3dpcGUgKSB7XG5cbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICAgICAgc3dpdGNoICggZGlyZWN0aW9uICkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggZGlyZWN0aW9uICE9ICd2ZXJ0aWNhbCcgKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVDb3VudCApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc3dpcGUnLCBbXywgZGlyZWN0aW9uIF0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAhPT0gXy50b3VjaE9iamVjdC5jdXJYICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIF8uY3VycmVudFNsaWRlICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoKF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpIHx8ICgnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQgJiYgXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSBmYWxzZSAmJiBldmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0V2lkdGggLyBfLm9wdGlvbnNcbiAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdEhlaWdodCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5hY3Rpb24pIHtcblxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVTdGFydChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVNb3ZlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlRW5kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgZWRnZVdhc0hpdCA9IGZhbHNlLFxuICAgICAgICAgICAgY3VyTGVmdCwgc3dpcGVEaXJlY3Rpb24sIHN3aXBlTGVuZ3RoLCBwb3NpdGlvbk9mZnNldCwgdG91Y2hlcywgdmVydGljYWxTd2lwZUxlbmd0aDtcblxuICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkID8gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzIDogbnVsbDtcblxuICAgICAgICBpZiAoIV8uZHJhZ2dpbmcgfHwgXy5zY3JvbGxpbmcgfHwgdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWCAtIF8udG91Y2hPYmplY3Quc3RhcnRYLCAyKSkpO1xuXG4gICAgICAgIHZlcnRpY2FsU3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWSAtIF8udG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpO1xuXG4gICAgICAgIGlmICghXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyAmJiAhXy5zd2lwaW5nICYmIHZlcnRpY2FsU3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IHZlcnRpY2FsU3dpcGVMZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnN3aXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gMSA6IC0xKSAqIChfLnRvdWNoT2JqZWN0LmN1clggPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbk9mZnNldCA9IF8udG91Y2hPYmplY3QuY3VyWSA+IF8udG91Y2hPYmplY3Quc3RhcnRZID8gMSA6IC0xO1xuICAgICAgICB9XG5cblxuICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGg7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICgoXy5jdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdyaWdodCcpIHx8IChfLmN1cnJlbnRTbGlkZSA+PSBfLmdldERvdENvdW50KCkgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdsZWZ0JykpIHtcbiAgICAgICAgICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggKiBfLm9wdGlvbnMuZWRnZUZyaWN0aW9uO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIChzd2lwZUxlbmd0aCAqIChfLiRsaXN0LmhlaWdodCgpIC8gXy5saXN0V2lkdGgpKSAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlIHx8IF8ub3B0aW9ucy50b3VjaE1vdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0Q1NTKF8uc3dpcGVMZWZ0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdG91Y2hlcztcblxuICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCAhPT0gMSB8fCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRYID0gXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRZID0gXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrVW5maWx0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJHNsaWRlc0NhY2hlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikucmVtb3ZlKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kcHJldkFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJG5leHRBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgJycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bnNsaWNrID0gZnVuY3Rpb24oZnJvbUJyZWFrcG9pbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCd1bnNsaWNrJywgW18sIGZyb21CcmVha3BvaW50XSk7XG4gICAgICAgIF8uZGVzdHJveSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmXG4gICAgICAgICAgICBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmXG4gICAgICAgICAgICAhXy5vcHRpb25zLmluZmluaXRlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gMSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZURvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgpO1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnZpc2liaWxpdHkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIGlmICggZG9jdW1lbnRbXy5oaWRkZW5dICkge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJC5mbi5zbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBvcHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGwgPSBfLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByZXQ7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBvcHQgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldCA9IF9baV0uc2xpY2tbb3B0XS5hcHBseShfW2ldLnNsaWNrLCBhcmdzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ICE9ICd1bmRlZmluZWQnKSByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfO1xuICAgIH07XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIHJlc3BvbnNpdmVTdGF0dXMoKSB7XG4gICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgaWYod2lkdGggPCA3Njgpe1xuICAgICAgICByZXR1cm4gJ21vYmlsZSc7XG4gICAgfSBlbHNlIGlmKHdpZHRoIDwgMTAyNCl7XG4gICAgICAgIHJldHVybiAndGFibGV0JztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2Rlc2t0b3AnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzcG9uc2l2ZVN0YXR1cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcmVzcG9uc2l2ZVN0YXR1cy5qcyIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IEFuaW1hdGlvbnMgZnJvbSAnLi9hbmltYXRpb25zJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuaW1wb3J0IHsgZW5jb2RlSHRtbCB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgc2hhdmUgZnJvbSAnc2hhdmUnO1xuXG5jb25zdCBhbmltYXRpb25zID0gbmV3IEFuaW1hdGlvbnM7XG5cbi8vRE9NIGVsZW1lbnRzXG5cbmNsYXNzIExlc3Nvbk1lbnVTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC8vICAgICB0aXRsZTogJycsXG4gICAgICAgIC8vICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzbGlkZXI6IG51bGwsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbnVtYmVyOiAwLFxuICAgICAgICAgICAgb25MZXNzb25BY3Rpb246IG51bGwsXG4gICAgICAgICAgICBvblBsdXNab25lQWN0aW9uOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgc2NyZWVuRGl2OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3VwX3RkbF9sZXNzb25fbWVudV9zY3JlZW4nKSxcbiAgICAgICAgICAgIGJhY2tCdXR0b246ICQoJyNvdXBfdGRsX2xlc3Nvbl9tZW51X3NjcmVlbiAub3VwX3RkbF9fYnJlYWRjcnVtYl9fYmFjaycpLmdldCgwKSxcbiAgICAgICAgICAgIHRpdGxlOiAkKCcub3VwX2xlc3Nvbl9tZW51X19tYWluX3RpdGxlPnN0cm9uZycpLmdldCgwKSxcbiAgICAgICAgICAgIG51bWJlcjogJCgnLm91cF9sZXNzb25fbWVudV9fbWFpbl90aXRsZT5zcGFuJykuZ2V0KDApLFxuICAgICAgICAgICAgc2xpZGVySGlkZGVuRWxlbWVudHM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF9sZXNzb25fbWVudV9fc2xpZGVyX2hpZGRlbl9lbGVtZW50cycpWzBdLFxuICAgICAgICAgICAgc2xpZGVyOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdXBfbGVzc29uX21lbnVfX3VuaXRfc2xpZGVyJylbMF0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sZXNzb25IdG1sRWxlbWVudHMgPSBbXTtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVzc29uTWVudVNjcmVlbi5jb25zdHJ1Y3RvcigpXCIpXG4gICAgfVxuICAgIFxuICAgIGluaXQoKXtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVzc29uTWVudVNjcmVlbi5pbml0KClcIik7XG4gICAgfVxuICAgIHVwZGF0ZShwcm9wcyl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZXNzb25NZW51U2NyZWVuLnVwZGF0ZSgpXCIsIHByb3BzKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHsgdGl0bGUsIG51bWJlciwgaW1hZ2UsIG9uUGx1c1pvbmVBY3Rpb24sIG9uTGVzc29uQWN0aW9uLCBsZXNzb25zLCBvbkJhY2tBY3Rpb24sIGhhc1BsdXNab25lIH0gPSBwcm9wcztcbiAgICAgICAgLy9UaXRsZVxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzLnRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMubnVtYmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZX0pYDtcbiAgICAgICAgdGhpcy5zdGF0ZS5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgIHRoaXMuc3RhdGUub25QbHVzWm9uZUFjdGlvbiA9IG9uUGx1c1pvbmVBY3Rpb247XG4gICAgICAgIHRoaXMuc3RhdGUub25MZXNzb25BY3Rpb24gPSBvbkxlc3NvbkFjdGlvbjtcbiAgICAgICAgdGhpcy5sZXNzb25IdG1sRWxlbWVudHMgPSBbXTtcbiAgICAgICAgaWYoaGFzUGx1c1pvbmUpe1xuICAgICAgICAgICAgdGhpcy5sZXNzb25IdG1sRWxlbWVudHMucHVzaCh0aGlzLmdldE1lbnVQbHVzWm9uZUVsZW1lbnRTdHJpbmdIdG1sKCkpO1xuICAgICAgICB9XG4gICAgICAgIGxlc3NvbnMuZm9yRWFjaChsZXNzb24gPT4ge1xuICAgICAgICAgICAgaWYobGVzc29uLnR5cGUgPT0gJ2xpYnJvJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXNzb25IdG1sRWxlbWVudHMucHVzaCh0aGlzLmdldE1lbnVMZXNzb25FbGVtZW50U3RyaW5nSHRtbChsZXNzb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgXG4gICAgICAgICQodGhpcy5kb21FbGVtZW50cy5iYWNrQnV0dG9uKS51bmJpbmQoJ2NsaWNrJykub24oJ2NsaWNrJyxvbkJhY2tBY3Rpb24pO1xuICAgICAgICB0aGlzLnN0YXRlLnNsaWRlciA9IG5ldyBTbGlkZXI7XG4gICAgICAgIHRoaXMuc3RhdGUuc2xpZGVyLmluaXQoe1xuICAgICAgICAgICAgZWxlbWVudHM6IHRoaXMubGVzc29uSHRtbEVsZW1lbnRzLFxuICAgICAgICAgICAgb25FbGVtZW50Q2xpY2tBY3Rpb246IChlKSA9PiB0aGlzLm9uTGVzc29uQ2xpY2soZSksIC8vdGhpcy5vblVuaXRDbGljayxcbiAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiAnLm91cF9sZXNzb25fbWVudV9fbGVzc29uX3NsaWRlcl9jb250YWluZXInLFxuICAgICAgICAgICAgZWxlbWVudE1pbldpZHRoOiB7XG4gICAgICAgICAgICAgICAgbW9iaWxlOiAxNjAgKyA1ICsgNSxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDE3OCArIDggKyA4LFxuICAgICAgICAgICAgICAgIGRlc2t0b3A6IDE3OCArIDggKyA4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnRNaW5IZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDE2MCArIDUgKyA1LFxuICAgICAgICAgICAgICAgIHRhYmxldDogMTc4ICsgOCArIDgsXG4gICAgICAgICAgICAgICAgZGVza3RvcDogMTc4ICsgOCArIDgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25SZXNpemU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc2hhdmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm91cF9sZXNzb25fbWVudV9fbGVzc29uX190aXRsZSBzcGFuJyksIDU4KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gJCh3aW5kb3cpLnJlc2l6ZSh0aGlzLnJlZnJlc2hTbGlkZXJTaXplLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzaG93KCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlc3Nvbk1lbnVTY3JlZW4uc2hvdygpXCIpXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFjdGl2ZSl7XG4gICAgICAgICAgICBhbmltYXRpb25zLnNob3dPcGFjaXR5U2NhbGUodGhpcy5kb21FbGVtZW50cy5zY3JlZW5EaXYpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZXIuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhpZGUoKXtcbiAgICAgICAgLy90aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vc2NyZWVuRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZXNzb25NZW51U2NyZWVuLmhpZGUoKVwiKTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5oaWRlT3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWVudUxlc3NvbkVsZW1lbnRTdHJpbmdIdG1sKGxlc3Nvbil7XG4gICAgICAgIHZhciBiYWNrZ3JvdW5kU3R5bGUgPSAnJztcbiAgICAgICAgaWYobGVzc29uLmltYWdlLmxlbmd0aD4zKXtcbiAgICAgICAgICAgIGJhY2tncm91bmRTdHlsZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtsZXNzb24uaW1hZ2V9KWA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGh0bWxTdHJpbmcgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19sZXNzb24tYnRuXCIgaWQ9XCIke2xlc3Nvbi5pZH1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19sZXNzb25fX2ltYWdlXCIgc3R5bGU9XCIke2JhY2tncm91bmRTdHlsZX1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19sZXNzb25fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7ZW5jb2RlSHRtbChsZXNzb24udGl0bGUpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIGh0bWxTdHJpbmc7XG4gICAgfVxuICAgIGdldE1lbnVQbHVzWm9uZUVsZW1lbnRTdHJpbmdIdG1sKCl7XG4gICAgICAgIHZhciBodG1sU3RyaW5nID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9sZXNzb25fbWVudV9fbGVzc29uLWJ0biBvdXBfbGVzc29uX21lbnVfX2xlc3Nvbi0tcGx1cy16b25lLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfbGVzc29uX21lbnVfX2xlc3Nvbl9faW1hZ2VcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX2xlc3Nvbl9tZW51X19sZXNzb25fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsdXMgWm9uZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIGh0bWxTdHJpbmc7XG4gICAgfVxuICAgIG9uTGVzc29uQ2xpY2soZSl7XG4gICAgICAgIC8vSWYgaXMgK1pvbmVcbiAgICAgICAgaWYoJChlLmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdvdXBfbGVzc29uX21lbnVfX2xlc3Nvbi0tcGx1cy16b25lLWJ0bicpKXtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25QbHVzWm9uZUFjdGlvbih0aGlzLnN0YXRlLm51bWJlcik7XG4gICAgICAgIH0gZWxzZSB7IC8vSXMgaXMgbGVzc29uLCBvcGVuIGxlc3NvblxuICAgICAgICAgICAgdmFyIGlkID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uTGVzc29uQWN0aW9uKHt1bml0TnVtYmVyOiB0aGlzLnN0YXRlLm51bWJlciwgbGVzc29uSWQ6IGlkfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IExlc3Nvbk1lbnVTY3JlZW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL19sZXNzb25NZW51U2NyZWVuLmpzIiwiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgQW5pbWF0aW9ucyBmcm9tICcuL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQXNwZWNSYXRpb0JvZHlDbGFzcyB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IGFuaW1hdGlvbnMgPSBuZXcgQW5pbWF0aW9ucztcblxuLy9ET00gZWxlbWVudHNcblxuY2xhc3MgUGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLy8gICAgIHRpdGxlOiAnJyxcbiAgICAgICAgLy8gICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBudW1iZXI6IDAsXG4gICAgICAgICAgICBvbkNhdGVnb3J5QWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgb25CYWNrQWN0aW9uOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgc2NyZWVuRGl2OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3VwX3RkbF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X3NjcmVlbicpLFxuICAgICAgICAgICAgYmFja0J1dHRvbjogJCgnI291cF90ZGxfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9zY3JlZW4gLm91cF90ZGxfX2JyZWFkY3J1bWJfX2JhY2snKS5nZXQoMCksXG4gICAgICAgICAgICB0aXRsZTogJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19tYWluX3RpdGxlPnN0cm9uZycpLmdldCgwKSxcbiAgICAgICAgICAgIG51bWJlcjogJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19tYWluX3RpdGxlPnNwYW4nKS5nZXQoMCksXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5odG1sRWxlbWVudHMgPSAnJztcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5jb25zdHJ1Y3RvcigpXCIpXG4gICAgfVxuICAgIFxuICAgIGluaXQoKXtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5pbml0KClcIik7XG4gICAgICAgIFxuICAgICAgICAvL1RoaXMgYWRkIGEgY2xhc3MgdG8gYm9keSBvciBlbGVtZW50OiBvdXB0ZGwtcG9ydHJhaXQgb3Igb3VwdGRsLWxhbmRzY2FwZVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIHVwZGF0ZShwcm9wcyl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLmluaXQoKVwiKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHsgdGl0bGUsIG51bWJlciwgaW1hZ2UsIG9uQ2F0ZWdvcnlBY3Rpb24sIGNhdGVnb3JpZXMsIG9uQmFja0FjdGlvbiB9ID0gcHJvcHM7XG4gICAgICAgIC8vVGl0bGVcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cy50aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzLm51bWJlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2V9KWA7XG4gICAgICAgIHRoaXMuc3RhdGUubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICB0aGlzLnN0YXRlLm9uQ2F0ZWdvcnlBY3Rpb24gPSBvbkNhdGVnb3J5QWN0aW9uO1xuICAgICAgICB0aGlzLnN0YXRlLm9uQmFja0FjdGlvbiA9IG9uQmFja0FjdGlvbjtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudHMgPSAnJztcblxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudHMgKz0gdGhpcy5nZXRNZW51Q2F0ZWdvcnlTdHJpbmdIdG1sKGNhdGVnb3J5KTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY29udGFpbmVyJykuaHRtbCh0aGlzLmh0bWxFbGVtZW50cyk7XG4gICAgICAgICQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY29udGFpbmVyIC5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuJykuY2xpY2soKGVsZW1lbnQpID0+IHRoaXMub25DYXRlZ29yeUNsaWNrKGVsZW1lbnQpKTtcbiAgICAgICBcbiAgICAgICAgJCh0aGlzLmRvbUVsZW1lbnRzLmJhY2tCdXR0b24pLnVuYmluZCgnY2xpY2snKS5vbignY2xpY2snLHRoaXMub25CYWNrQ2xpY2suYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdmFyIGFzcGVjUmF0aW9Cb2R5Q2xhc3MgPSBuZXcgQXNwZWNSYXRpb0JvZHlDbGFzcygpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhc3BlY1JhdGlvQm9keUNsYXNzLmluaXQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKCcub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5LWJ0bj4qJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHZhciBhbmNobyA9ICQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuJykub3V0ZXJXaWR0aCgpIC0gcGFyc2VJbnQoJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG4nKS5jc3MoJ3BhZGRpbmctbGVmdCcpLCAxMCkgLSBwYXJzZUludCgkKCcub3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5LWJ0bicpLmNzcygncGFkZGluZy1yaWdodCcpLCAxMCksXG4gICAgICAgICAgICAgICAgYWx0byA9ICQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuJykub3V0ZXJIZWlnaHQoKSAtIHBhcnNlSW50KCQoJy5vdXBfcGx1c196b25lX2NhdGVnb3JpZXNfbWVudV9fY2F0ZWdvcnktYnRuJykuY3NzKCdwYWRkaW5nLXRvcCcpICwgMTApIC0gcGFyc2VJbnQoJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG4nKS5jc3MoJ3BhZGRpbmctYm90dG9tJyksIDEwKTtcbiAgICAgICAgICAgICAgICB2YXIgbWluID0gYW5jaG8gPCBhbHRvID8gYW5jaG8gOiBhbHRvO1xuICAgICAgICAgICAgICAgIHZhciBtYXJnaW5Ub3AgPSAwLjUgKiAoYWx0byAtIG1pbik7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wID0gbWFyZ2luVG9wID4gMCA/IG1hcmdpblRvcCA6IDA7XG4gICAgICAgICAgICAgICAgJCgnLm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG4+KicpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtaW4gKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG1pbiArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICdtYXJnaW4tdG9wJzogbWFyZ2luVG9wICsgJ3B4JyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLnNob3coKVwiKVxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5zaG93T3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxuICAgIGhpZGUoKXtcbiAgICAgICAgLy90aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vc2NyZWVuRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLmhpZGUoKVwiKTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5oaWRlT3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWVudUNhdGVnb3J5U3RyaW5nSHRtbChjYXRlZ29yeSl7XG4gICAgICAgIHZhciBiYWNrZ3JvdW5kU3R5bGUgPSAnJztcbiAgICAgICAgIHZhciBodG1sU3RyaW5nID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9wbHVzX3pvbmVfY2F0ZWdvcmllc19tZW51X19jYXRlZ29yeS1idG5cIiBkYXRhLWNhdGVnb3J5PVwiJHtjYXRlZ29yeX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3BsdXNfem9uZV9jYXRlZ29yaWVzX21lbnVfX2NhdGVnb3J5X19ib3ggcmVzb3VyY2UtJHtjYXRlZ29yeX1cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIGh0bWxTdHJpbmc7XG4gICAgfVxuICAgIFxuICAgIG9uQ2F0ZWdvcnlDbGljayhlKXtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbi5vbkNhdGVnb3J5Q2xpY2soKVwiLCB0aGlzLnN0YXRlLm51bWJlciwgJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhdGVnb3J5JykpO1xuICAgICAgICB0aGlzLnN0YXRlLm9uQ2F0ZWdvcnlBY3Rpb24oe3VuaXROdW1iZXI6IHRoaXMuc3RhdGUubnVtYmVyLCBjYXRlZ29yeTogJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhdGVnb3J5Jyl9KVxuICAgIH1cbiAgICBcbiAgICBvbkJhY2tDbGljaygpe1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZUNhdGVnb3JpZXNNZW51U2NyZWVuLm9uQmFja0NsaWNrKClcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkJhY2tBY3Rpb24odGhpcy5zdGF0ZS5udW1iZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1c1pvbmVDYXRlZ29yaWVzTWVudVNjcmVlbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvX3BsdXNab25lQ2F0ZWdvcmllc01lbnUuanMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBBbmltYXRpb25zIGZyb20gJy4vYW5pbWF0aW9ucyc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vc2xpZGVyJztcbmltcG9ydCB7IGdldFJlc291cmNlVHlwZSwgZW5jb2RlSHRtbCB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgc2hhdmUgZnJvbSAnc2hhdmUnO1xuXG5jb25zdCBhbmltYXRpb25zID0gbmV3IEFuaW1hdGlvbnM7XG5cbi8vRE9NIGVsZW1lbnRzXG5cbmNsYXNzIFBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLy8gICAgIHRpdGxlOiAnJyxcbiAgICAgICAgLy8gICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNsaWRlcjogbnVsbCxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBudW1iZXI6IDAsXG4gICAgICAgICAgICBvblJlc291cmNlQWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgb25CYWNrQWN0aW9uOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgc2NyZWVuRGl2OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3VwX3RkbF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfc2NyZWVuJyksXG4gICAgICAgICAgICBiYWNrQnV0dG9uOiAkKCcjb3VwX3RkbF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfc2NyZWVuIC5vdXBfdGRsX19icmVhZGNydW1iX19iYWNrJykuZ2V0KDApLFxuICAgICAgICAgICAgdGl0bGU6ICQoJy5vdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19tYWluX3RpdGxlPnN0cm9uZycpLmdldCgwKSxcbiAgICAgICAgICAgIG51bWJlcjogJCgnLm91cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX21haW5fdGl0bGU+c3BhbicpLmdldCgwKSxcbiAgICAgICAgICAgIHNsaWRlckhpZGRlbkVsZW1lbnRzOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19zbGlkZXJfaGlkZGVuX2VsZW1lbnRzJylbMF0sXG4gICAgICAgICAgICBzbGlkZXI6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX3VuaXRfc2xpZGVyJylbMF0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNvdXJjZUh0bWxFbGVtZW50cyA9IFtdO1xuICAgICAgICBpZihjb25maWcuZGV2KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4uY29uc3RydWN0b3IoKVwiKVxuICAgIH1cbiAgICBcbiAgICBpbml0KCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5pbml0KClcIik7XG4gICAgfVxuICAgIHVwZGF0ZShwcm9wcyl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbHVzWm9uZVJlc291cmNlc01lbnVTY3JlZW4uaW5pdCgpXCIpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeyB0aXRsZSwgbnVtYmVyLCBpbWFnZSwgb25SZXNvdXJjZUFjdGlvbiwgcmVzb3VyY2VzLCBvbkJhY2tBY3Rpb24gfSA9IHByb3BzO1xuICAgICAgICAvL1RpdGxlXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudHMudGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cy5udW1iZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlfSlgO1xuICAgICAgICB0aGlzLnN0YXRlLm51bWJlciA9IG51bWJlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS5vblJlc291cmNlQWN0aW9uID0gb25SZXNvdXJjZUFjdGlvbjtcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkJhY2tBY3Rpb24gPSBvbkJhY2tBY3Rpb247XG4gICAgICAgIHRoaXMucmVzb3VyY2VIdG1sRWxlbWVudHMgPSBbXTtcbiAgICAgICAgcmVzb3VyY2VzLmZvckVhY2gocmVzb3VyY2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUh0bWxFbGVtZW50cy5wdXNoKHRoaXMuZ2V0TWVudVJlc291cmNlU3RyaW5nSHRtbChyZXNvdXJjZSkpO1xuICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgJCh0aGlzLmRvbUVsZW1lbnRzLmJhY2tCdXR0b24pLnVuYmluZCgnY2xpY2snKS5vbignY2xpY2snLHRoaXMub25CYWNrQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3RhdGUuc2xpZGVyID0gbmV3IFNsaWRlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZXIuaW5pdCh7XG4gICAgICAgICAgICBlbGVtZW50czogdGhpcy5yZXNvdXJjZUh0bWxFbGVtZW50cyxcbiAgICAgICAgICAgIG9uRWxlbWVudENsaWNrQWN0aW9uOiAoZSkgPT4gdGhpcy5vblJlc291cmNlQ2xpY2soZSksIC8vdGhpcy5vblVuaXRDbGljayxcbiAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiAnLm91cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX3Jlc291cmNlX3NsaWRlcl9jb250YWluZXInLFxuICAgICAgICAgICAgZWxlbWVudE1pbldpZHRoOiB7XG4gICAgICAgICAgICAgICAgbW9iaWxlOiAxNjAgKyA1ICsgNSxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDE3OCArIDggKyA4LFxuICAgICAgICAgICAgICAgIGRlc2t0b3A6IDE3OCArIDggKyA4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnRNaW5IZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICBtb2JpbGU6IDE2MCArIDUgKyA1LFxuICAgICAgICAgICAgICAgIHRhYmxldDogMTc4ICsgOCArIDgsXG4gICAgICAgICAgICAgICAgZGVza3RvcDogMTc4ICsgOCArIDgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25SZXNpemU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc2hhdmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm91cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX3Jlc291cmNlX190aXRsZSBzcGFuJyksIDc2KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gJCh3aW5kb3cpLnJlc2l6ZSh0aGlzLnJlZnJlc2hTbGlkZXJTaXplLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzaG93KCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5zaG93KClcIilcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYWN0aXZlKXtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMuc2hvd09wYWNpdHlTY2FsZSh0aGlzLmRvbUVsZW1lbnRzLnNjcmVlbkRpdik7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNsaWRlci5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbiAgICBoaWRlKCl7XG4gICAgICAgIC8vdGhpcy5zdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvL3NjcmVlbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgaWYoY29uZmlnLmRldilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1c1pvbmVSZXNvdXJjZXNNZW51U2NyZWVuLmhpZGUoKVwiKTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5oaWRlT3BhY2l0eVNjYWxlKHRoaXMuZG9tRWxlbWVudHMuc2NyZWVuRGl2KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWVudVJlc291cmNlU3RyaW5nSHRtbChyZXNvdXJjZSl7XG4gICAgICAgIHZhciBiYWNrZ3JvdW5kU3R5bGUgPSAnJztcbiAgICAgICAgIHZhciBodG1sU3RyaW5nID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91cF9wbHVzX3pvbmVfcmVzb3VyY2VzX21lbnVfX3Jlc291cmNlLWJ0blwiIGlkPVwiJHtyZXNvdXJjZS5pZH1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VwX3BsdXNfem9uZV9yZXNvdXJjZXNfbWVudV9fcmVzb3VyY2VfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJyZXNvdXJjZS0ke2dldFJlc291cmNlVHlwZShyZXNvdXJjZSl9XCI+PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7ZW5jb2RlSHRtbChyZXNvdXJjZS50aXRsZSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXBfcGx1c196b25lX3Jlc291cmNlc19tZW51X19yZXNvdXJjZV9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtlbmNvZGVIdG1sKHJlc291cmNlLmRlc2NyaXB0aW9uKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIHJldHVybiBodG1sU3RyaW5nO1xuICAgIH1cbiAgICBcbiAgICBvblJlc291cmNlQ2xpY2soZSl7XG4gICAgICAgIC8vSWYgaXMgK1pvbmVcbiAgICAgICAgdmFyIGlkID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2lkJyk7XG4gICAgICAgIHRoaXMuc3RhdGUub25SZXNvdXJjZUFjdGlvbih7dW5pdE51bWJlcjogdGhpcy5zdGF0ZS5udW1iZXIsIHJlc291cmNlSWQ6IGlkfSk7XG4gICAgfVxuICAgIFxuICAgIG9uQmFja0NsaWNrKCl7XG4gICAgICAgIGlmKGNvbmZpZy5kZXYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbi5vbkJhY2tDbGljaygpXCIpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUub25CYWNrQWN0aW9uKHRoaXMuc3RhdGUubnVtYmVyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsdXNab25lUmVzb3VyY2VzTWVudVNjcmVlbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvX3BsdXNab25lUmVzb3VyY2VzTWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=