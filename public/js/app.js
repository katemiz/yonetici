(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/Pages/IndexGuest.svelte":
/*!**********************************************!*\
  !*** ./resources/js/Pages/IndexGuest.svelte ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/config.js */ "./resources/js/config/config.js");
/* harmony import */ var _Pages_Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Shared/Layout.svelte */ "./resources/js/Pages/Shared/Layout.svelte");
/* harmony import */ var _Pages_Shared_Hero_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Shared/Hero.svelte */ "./resources/js/Pages/Shared/Hero.svelte");
/* harmony import */ var _Pages_Shared_Greet_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/Shared/Greet.svelte */ "./resources/js/Pages/Shared/Greet.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/IndexGuest.svelte generated by Svelte v3.46.4 */






function create_default_slot(ctx) {
  var hero;
  var t;
  var greet;
  var current;
  hero = new _Pages_Shared_Hero_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({});
  greet = new _Pages_Shared_Greet_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({});
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(hero.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(greet.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(hero, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(greet, target, anchor);
      current = true;
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(hero.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(greet.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(hero.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(greet.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(hero, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(greet, detaching);
    }
  };
}

function create_fragment(ctx) {
  var title_value;
  var t;
  var layout;
  var current;
  document.title = title_value = "" + (_config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.name + " - " + _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.title);
  layout = new _Pages_Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
    props: {
      $$slots: {
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(layout.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(layout, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*params*/
      0) && title_value !== (title_value = "" + (_config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.name + " - " + _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.title))) {
        document.title = title_value;
      }

      var layout_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        layout_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      layout.$set(layout_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(layout.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(layout.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(layout, detaching);
    }
  };
}

var IndexGuest = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(IndexGuest, _SvelteComponent);

  var _super = _createSuper(IndexGuest);

  function IndexGuest(options) {
    var _this;

    _classCallCheck(this, IndexGuest);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(IndexGuest);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexGuest);

/***/ }),

/***/ "./resources/js/Pages/Shared/Footer.svelte":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Shared/Footer.svelte ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/config.js */ "./resources/js/config/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Shared/Footer.svelte generated by Svelte v3.46.4 */



function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
} // (33:8) {#each params.stack as tech }


function create_each_block(ctx) {
  var li;
  var a;
  var t0_value =
  /*tech*/
  ctx[0].name + "";
  var t0;
  var a_href_value;
  var t1;
  return {
    c: function c() {
      li = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value =
      /*tech*/
      ctx[0].url);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, li, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li, a);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li, t1);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(li);
    }
  };
}

function create_fragment(ctx) {
  var footer;
  var div;
  var article0;
  var img0;
  var img0_src_value;
  var t0;
  var p0;
  var t2;
  var p1;
  var t4;
  var article1;
  var p2;
  var t6;
  var img1;
  var img1_src_value;
  var t7;
  var article2;
  var p3;
  var t9;
  var p4;
  var t11;
  var nav;
  var ul;
  var each_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.stack;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function c() {
      footer = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("footer");
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      article0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("article");
      img0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      p0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p0.textContent = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.company.name);
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      p1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p1.textContent = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.company.motto);
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      article1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("article");
      p2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p2.textContent = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.title);
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      img1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      article2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("article");
      p3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p3.textContent = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.copyright);
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      p4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p4.textContent = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.version);
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      nav = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("nav");
      ul = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img0.src, img0_src_value = "/images/" + _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.company.logo)) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img0, "src", img0_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img0, "width", "28px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img0, "alt", "Company Icon");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p0, "class", "has-text-weight-light");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p1, "class", "has-text-weight-light");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(article0, "class", "tile is-child notification has-text-centered-mobile");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p2, "class", "has-text-weight-light");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img1, "class", "mt-3 mt-1-mobile pt-3 pt-1-mobile");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img1.src, img1_src_value = "/images/" + _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.app_footer_logo)) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img1, "src", img1_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img1, "width", "80px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img1, "alt", "App Logo");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(article1, "class", "tile is-child notification has-text-centered my-6");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p3, "class", "has-text-weight-light has-text-right has-text-centered-mobile");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p4, "class", "has-text-weight-light has-text-right has-text-centered-mobile");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(article2, "class", "tile is-child notification");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "tile is-ancestor");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(footer, "class", "footer has-background-ligher");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(footer, "id", "footer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(nav, "class", "breadcrumb is-centered has-bullet-separator is-small");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(nav, "aria-label", "breadcrumbs");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, footer, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(footer, div);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, article0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(article0, img0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(article0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(article0, p0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(article0, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(article0, p1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, article1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(article1, p2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(article1, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(article1, img1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, article2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(article2, p3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(article2, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(article2, p4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t11, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, nav, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(ul, null);
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*params*/
      0) {
        each_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.stack;

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(ul, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(footer);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t11);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(nav);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
    }
  };
}

var Footer = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Footer, _SvelteComponent);

  var _super = _createSuper(Footer);

  function Footer(options) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Footer);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./resources/js/Pages/Shared/Greet.svelte":
/*!************************************************!*\
  !*** ./resources/js/Pages/Shared/Greet.svelte ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Shared/Greet.svelte generated by Svelte v3.46.4 */


function create_fragment(ctx) {
  var section;
  var h1;
  var t1;
  var p0;
  var t3;
  var div2;
  var div0;
  var t9;
  var div1;
  var figure;
  var img0;
  var img0_src_value;
  var t10;
  var div5;
  var div3;
  var t11;
  var div4;
  var t12;
  var button;
  var mounted;
  var dispose;
  return {
    c: function c() {
      section = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      h1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h1");
      h1.textContent = "Akıllı Yönetici / Akıllı Uygulama";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      p0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p0.textContent = "Competency is a set of skills, related knowledge and attributes that allow an individual to perform a task or an activity within a specific function or job. Therefore it is important for the success of the Organization in achieving its strategic goals, as well as the success of individual employee. Any function in the Organization requires a set of essential managerial/generic and technical/functional competencies to be performed effectively.";
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0.innerHTML = "<p class=\"mb-3\">It is crucial to link competencies with the strategic objectives, plans and capabilities of the Organization. Thus, competencies will increasingly be used as a basis for identifying individual and organizational needs and planning for development.</p> \n\n            <p class=\"mb-3\">Competency or skill management focusing on using the employee potential effectively to develop the necessary competencies and skills in order to run the organization smoothly and optimize the potential for profit and growth.</p> \n\n            <p class=\"mb-3\">With the help of proper skill management techniques, it is possible to combine project management and human resource management in an effective and efficient manner. The active management of competency and skill portfolio ensures the long-term competitiveness of company.</p>";
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      figure = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("figure");
      img0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div4.innerHTML = "<p class=\"image\"><img src=\"\" alt=\"Greet descriptions\" id=\"modalImg\"/></p>";
      t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h1, "class", "title my-6 has-text-weight-light is-size-1 has-text-left");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p0, "class", "mb-3");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "column is-half");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img0.src, img0_src_value = "images/hero.svg")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img0, "src", img0_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img0, "alt", "The Process Flow");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(figure, "class", "image is-1by1");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "column is-half");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "columns");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "modal-background ");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "modal-content has-background-light");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "modal-close is-large");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "aria-label", "close");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "id", "imgModal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section, "class", "section container");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section, h1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section, p0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, figure);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(figure, img0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t12);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, button);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(img0, "click", showImg), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div3, "click", closeModal), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", closeModal)];
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

function showImg(el) {
  console.log(el.target);
  document.getElementById('modalImg').src = el.target.src;
  document.getElementById('imgModal').classList.add('is-active');
}

function closeModal() {
  document.getElementById('imgModal').classList.remove('is-active');
}

var Greet = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Greet, _SvelteComponent);

  var _super = _createSuper(Greet);

  function Greet(options) {
    var _this;

    _classCallCheck(this, Greet);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Greet);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Greet);

/***/ }),

/***/ "./resources/js/Pages/Shared/Hero.svelte":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Shared/Hero.svelte ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Shared/Hero.svelte generated by Svelte v3.46.4 */


function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-1xj39ux", ".ortala.svelte-1xj39ux{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.golge.svelte-1xj39ux{text-shadow:2px 2px grey}");
}

function create_fragment(ctx) {
  var section;
  return {
    c: function c() {
      section = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      section.innerHTML = "<img alt=\"TheLook\" class=\"hero-background\" src=\"images/hero.svg\"/> \n\n    <div class=\"ortala p-3 is-transparent svelte-1xj39ux\"><p class=\"title has-text-centered golge svelte-1xj39ux\">Manage Power</p> \n        <p class=\"subtitle has-text-weight-light has-text-centered has-text-link \">With great power comes great responsibility</p></div>";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section, "class", "hero is-medium is-dark has-background");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section);
    }
  };
}

var Hero = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Hero, _SvelteComponent);

  var _super = _createSuper(Hero);

  function Hero(options) {
    var _this;

    _classCallCheck(this, Hero);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {}, add_css);
    return _this;
  }

  return _createClass(Hero);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icon.svelte":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Shared/Icon.svelte ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Pages_Shared_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Shared/Colors */ "./resources/js/Pages/Shared/Colors.js");
/* harmony import */ var _Pages_Shared_Sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Shared/Sizes */ "./resources/js/Pages/Shared/Sizes.js");
/* harmony import */ var _Pages_Shared_Svgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Shared/Svgs */ "./resources/js/Pages/Shared/Svgs.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Shared/Icon.svelte generated by Svelte v3.46.4 */





function create_fragment(ctx) {
  var html_tag;
  var html_anchor;
  return {
    c: function c() {
      html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__.HtmlTag();
      html_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
      html_tag.a = html_anchor;
    },
    m: function m(target, anchor) {
      html_tag.m(
      /*svg*/
      ctx[0], target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, html_anchor, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(html_anchor);
      if (detaching) html_tag.d();
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var name = $$props.name;
  var size = $$props.size;
  var color = $$props.color;
  var boyut, renk, path;

  if (size != null && size != undefined) {
    boyut = _Pages_Shared_Sizes__WEBPACK_IMPORTED_MODULE_2__.Sizes[size];
  } else {
    boyut = _Pages_Shared_Sizes__WEBPACK_IMPORTED_MODULE_2__.Sizes.XS;
  }

  if (color != null && color != undefined) {
    renk = _Pages_Shared_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors[color];
  } else {
    renk = _Pages_Shared_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.black;
  }

  if (name != null && name != undefined) {
    path = _Pages_Shared_Svgs__WEBPACK_IMPORTED_MODULE_3__.SVGS[name];
  } else {
    path = _Pages_Shared_Svgs__WEBPACK_IMPORTED_MODULE_3__.SVGS.home;
  }

  var svg = "\n    <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        height=\"".concat(boyut, "\"\n        viewBox=\"0 0 24 24\"\n        width=\"").concat(boyut, "\"\n        fill=\"").concat(renk, "\">\n        ").concat(path, "\n    </svg>");

  $$self.$$set = function ($$props) {
    if ('name' in $$props) $$invalidate(1, name = $$props.name);
    if ('size' in $$props) $$invalidate(2, size = $$props.size);
    if ('color' in $$props) $$invalidate(3, color = $$props.color);
  };

  return [svg, name, size, color];
}

var Icon = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Icon, _SvelteComponent);

  var _super = _createSuper(Icon);

  function Icon(options) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      name: 1,
      size: 2,
      color: 3
    });
    return _this;
  }

  return _createClass(Icon);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./resources/js/Pages/Shared/Layout.svelte":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Shared/Layout.svelte ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Pages_Shared_Nav_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Shared/Nav.svelte */ "./resources/js/Pages/Shared/Nav.svelte");
/* harmony import */ var _Pages_Shared_Footer_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Shared/Footer.svelte */ "./resources/js/Pages/Shared/Footer.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Shared/Layout.svelte generated by Svelte v3.46.4 */




function create_fragment(ctx) {
  var nav;
  var t0;
  var t1;
  var footer;
  var current;
  nav = new _Pages_Shared_Nav_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({});
  var default_slot_template =
  /*#slots*/
  ctx[1]["default"];
  var default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], null);
  footer = new _Pages_Shared_Footer_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({});
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(nav.$$.fragment);
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (default_slot) default_slot.c();
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(footer.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(nav, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);

      if (default_slot) {
        default_slot.m(target, anchor);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(footer, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && (!current || dirty &
        /*$$scope*/
        1)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[0], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[0]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[0], dirty, null), null);
        }
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(nav.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(footer.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(nav.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(footer.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(nav, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
      if (default_slot) default_slot.d(detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(footer, detaching);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$$set = function ($$props) {
    if ('$$scope' in $$props) $$invalidate(0, $$scope = $$props.$$scope);
  };

  return [$$scope, slots];
}

var Layout = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Layout, _SvelteComponent);

  var _super = _createSuper(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Layout);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./resources/js/Pages/Shared/Nav.svelte":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Shared/Nav.svelte ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/config.js */ "./resources/js/config/config.js");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _Pages_Shared_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Shared/Icon.svelte */ "./resources/js/Pages/Shared/Icon.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Shared/Nav.svelte generated by Svelte v3.46.4 */





function create_default_slot_19(ctx) {
  var img;
  var img_src_value;
  return {
    c: function c() {
      img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = "/images/" + _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.app_header_logo)) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "alt", "Skill Management Logo");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "width", "112");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "height", "28");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, img, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(img);
    }
  };
} // (30:8) <Link href="/" class="navbar-item has-text-white">


function create_default_slot_18(ctx) {
  var span0;
  var t0;
  var span1;
  var t1;
  var span2;
  return {
    c: function c() {
      span0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      span2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span0, "aria-hidden", "true");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span1, "aria-hidden", "true");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span2, "aria-hidden", "true");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span2, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span0);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span1);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span2);
    }
  };
} // (42:12) {#if user }


function create_if_block_1(ctx) {
  var link0;
  var t0;
  var link1;
  var t1;
  var link2;
  var t2;
  var link3;
  var t3;
  var link4;
  var t4;
  var div1;
  var p0;
  var t6;
  var div0;
  var link5;
  var t7;
  var hr0;
  var t8;
  var link6;
  var t9;
  var link7;
  var t10;
  var link8;
  var t11;
  var link9;
  var t12;
  var link10;
  var t13;
  var hr1;
  var t14;
  var link11;
  var t15;
  var div3;
  var p1;
  var t17;
  var div2;
  var link12;
  var t18;
  var link13;
  var current;
  link0 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      "class": "navbar-item",
      href: "/",
      $$slots: {
        "default": [create_default_slot_17]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link1 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      "class": "navbar-item",
      href: "/roles",
      $$slots: {
        "default": [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link2 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      "class": "navbar-item",
      href: "/skills",
      $$slots: {
        "default": [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link3 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      "class": "navbar-item",
      href: "/",
      $$slots: {
        "default": [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link4 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      "class": "navbar-item",
      href: "/",
      $$slots: {
        "default": [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link5 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/simpleitem/project",
      "class": "navbar-item",
      $$slots: {
        "default": [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link6 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/bcategory",
      "class": "navbar-item",
      $$slots: {
        "default": [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link7 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/",
      "class": "navbar-item",
      $$slots: {
        "default": [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link8 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/simpleitem/profession",
      "class": "navbar-item",
      $$slots: {
        "default": [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link9 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/simpleitem/diploma",
      "class": "navbar-item",
      $$slots: {
        "default": [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link10 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/simpleitem/language",
      "class": "navbar-item",
      $$slots: {
        "default": [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link11 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/slevels",
      "class": "navbar-item",
      $$slots: {
        "default": [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link12 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/aboutus",
      "class": "navbar-item",
      $$slots: {
        "default": [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link13 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/services",
      "class": "navbar-item",
      $$slots: {
        "default": [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link0.$$.fragment);
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link1.$$.fragment);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link2.$$.fragment);
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link3.$$.fragment);
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link4.$$.fragment);
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      p0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p0.textContent = "Admin";
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link5.$$.fragment);
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      hr0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("hr");
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link6.$$.fragment);
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link7.$$.fragment);
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link8.$$.fragment);
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link9.$$.fragment);
      t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link10.$$.fragment);
      t13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      hr1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("hr");
      t14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link11.$$.fragment);
      t15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      p1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p1.textContent = "About Us";
      t17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link12.$$.fragment);
      t18 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link13.$$.fragment);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p0, "class", "navbar-link");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p0, "href", "/Admin");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(hr0, "class", "navbar-divider");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(hr1, "class", "navbar-divider");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "navbar-dropdown");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "navbar-item has-dropdown is-hoverable");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p1, "class", "navbar-link");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p1, "href", "/Admin");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "navbar-dropdown");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "navbar-item has-dropdown is-hoverable");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link0, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link1, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link2, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t2, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link3, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t3, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link4, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t4, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, p0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link5, div0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, hr0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link6, div0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link7, div0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link8, div0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link9, div0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t12);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link10, div0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t13);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, hr1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t14);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link11, div0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t15, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div3, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, p1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t17);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link12, div2, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t18);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link13, div2, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var link0_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link0.$set(link0_changes);
      var link1_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link1.$set(link1_changes);
      var link2_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link2.$set(link2_changes);
      var link3_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link3.$set(link3_changes);
      var link4_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link4.$set(link4_changes);
      var link5_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link5.$set(link5_changes);
      var link6_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link6.$set(link6_changes);
      var link7_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link7_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link7.$set(link7_changes);
      var link8_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link8_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link8.$set(link8_changes);
      var link9_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link9_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link9.$set(link9_changes);
      var link10_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link10_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link10.$set(link10_changes);
      var link11_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link11_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link11.$set(link11_changes);
      var link12_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link12_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link12.$set(link12_changes);
      var link13_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link13_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link13.$set(link13_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link0.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link1.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link2.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link3.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link4.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link5.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link6.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link7.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link8.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link9.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link10.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link11.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link12.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link13.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link0.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link1.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link2.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link3.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link4.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link5.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link6.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link7.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link8.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link9.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link10.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link11.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link12.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link13.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link0, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link1, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link2, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link3, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link4, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t4);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link11);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t15);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link12);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link13);
    }
  };
} // (44:12) <Link class="navbar-item" href="/">


function create_default_slot_17(ctx) {
  var icon;
  var current;
  icon = new _Pages_Shared_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      name: "home",
      size: iconSize,
      color: iconColor
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(icon.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(icon, target, anchor);
      current = true;
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(icon.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(icon.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(icon, detaching);
    }
  };
} // (45:12) <Link class="navbar-item" href="/roles">


function create_default_slot_16(ctx) {
  var icon;
  var t;
  var current;
  icon = new _Pages_Shared_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      name: "role",
      size: iconSize,
      color: iconColor
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(icon.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" Roles");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(icon, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      current = true;
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(icon.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(icon.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(icon, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (46:12) <Link class="navbar-item" href="/skills">


function create_default_slot_15(ctx) {
  var icon;
  var t;
  var current;
  icon = new _Pages_Shared_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      name: "skill",
      size: iconSize,
      color: iconColor
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(icon.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" Skills");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(icon, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      current = true;
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(icon.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(icon.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(icon, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (47:12) <Link class="navbar-item" href="/">


function create_default_slot_14(ctx) {
  var icon;
  var t;
  var current;
  icon = new _Pages_Shared_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      name: "training",
      size: iconSize,
      color: iconColor
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(icon.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" Trainings");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(icon, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      current = true;
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(icon.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(icon.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(icon, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (48:12) <Link class="navbar-item" href="/">


function create_default_slot_13(ctx) {
  var icon;
  var t;
  var current;
  icon = new _Pages_Shared_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      name: "measurement",
      size: iconSize,
      color: iconColor
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(icon.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" measurement");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(icon, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      current = true;
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(icon.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(icon.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(icon, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (56:20) <Link href="/simpleitem/project" class="navbar-item">


function create_default_slot_12(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Projects");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (60:20) <Link href="/bcategory" class="navbar-item">


function create_default_slot_11(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Business Categories");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (61:20) <Link href="/" class="navbar-item">


function create_default_slot_10(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Training Categories");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (62:20) <Link href="/simpleitem/profession" class="navbar-item">


function create_default_slot_9(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Professions");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (63:20) <Link href="/simpleitem/diploma" class="navbar-item">


function create_default_slot_8(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Diploma");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (64:20) <Link href="/simpleitem/language" class="navbar-item">


function create_default_slot_7(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Language");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (68:20) <Link href="/slevels" class="navbar-item">


function create_default_slot_6(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Skill Levels");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (79:20) <Link href="/aboutus" class="navbar-item">


function create_default_slot_5(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Who are we?");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (80:20) <Link href="/services" class="navbar-item">


function create_default_slot_4(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Services we provide");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (112:16) {:else}


function create_else_block(ctx) {
  var link0;
  var t;
  var link1;
  var current;
  link0 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/login",
      "class": "button is-ghost",
      as: "button",
      preserveScroll: true,
      $$slots: {
        "default": [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link1 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/register",
      "class": "button is-ghost",
      as: "button",
      preserveScroll: true,
      $$slots: {
        "default": [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link0.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link1.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link0, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link1, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var link0_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link0.$set(link0_changes);
      var link1_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link1.$set(link1_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link0.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link0.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link0, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link1, detaching);
    }
  };
} // (95:16) {#if user}


function create_if_block(ctx) {
  var div1;
  var p0;
  var icon;
  var t0;
  var t1_value =
  /*user*/
  ctx[0].lastname.toUpperCase() + "";
  var t1;
  var t2;
  var div0;
  var p1;
  var t3_value =
  /*user*/
  ctx[0].name + "";
  var t3;
  var t4;
  var t5_value =
  /*user*/
  ctx[0].lastname + "";
  var t5;
  var t6;
  var link0;
  var t7;
  var link1;
  var current;
  icon = new _Pages_Shared_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      name: "user",
      size: iconSize,
      color: iconColor
    }
  });
  link0 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/projects",
      "class": "navbar-item",
      $$slots: {
        "default": [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link1 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/logout",
      "class": "navbar-item",
      method: "post",
      $$slots: {
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      p0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(icon.$$.fragment);
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" ");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      p1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t3_value);
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t5_value);
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link0.$$.fragment);
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link1.$$.fragment);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p0, "class", "navbar-link");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p1, "class", "navbar-item");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "navbar-dropdown");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "navbar-item has-dropdown is-hoverable");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, p0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(icon, p0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p0, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, p1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p1, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p1, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p1, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link0, div0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link1, div0, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      if ((!current || dirty &
      /*user*/
      1) && t1_value !== (t1_value =
      /*user*/
      ctx[0].lastname.toUpperCase() + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);
      if ((!current || dirty &
      /*user*/
      1) && t3_value !== (t3_value =
      /*user*/
      ctx[0].name + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t3, t3_value);
      if ((!current || dirty &
      /*user*/
      1) && t5_value !== (t5_value =
      /*user*/
      ctx[0].lastname + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t5, t5_value);
      var link0_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link0.$set(link0_changes);
      var link1_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link1.$set(link1_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(icon.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link0.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(icon.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link0.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(icon);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link1);
    }
  };
} // (114:20) <Link href="/login" class="button is-ghost" as="button" preserveScroll>


function create_default_slot_3(ctx) {
  var icon;
  var t;
  var current;
  icon = new _Pages_Shared_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      name: "user",
      size: iconSize,
      color: iconColor
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(icon.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" Giriş");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(icon, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      current = true;
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(icon.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(icon.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(icon, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (118:20) <Link href="/register" class="button is-ghost" as="button" preserveScroll>


function create_default_slot_2(ctx) {
  var icon;
  var t;
  var current;
  icon = new _Pages_Shared_Icon_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      name: "register",
      size: iconSize,
      color: iconColor
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(icon.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" Kaydolun");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(icon, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      current = true;
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(icon.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(icon.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(icon, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (106:28) <Link href="/projects" class="navbar-item">


function create_default_slot_1(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Projects");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (107:28) <Link href="/logout" class="navbar-item" method="post">


function create_default_slot(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Logout");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
}

function create_fragment(ctx) {
  var nav;
  var div0;
  var link0;
  var t0;
  var link1;
  var t1;
  var div5;
  var div1;
  var t2;
  var div4;
  var div3;
  var div2;
  var current_block_type_index;
  var if_block1;
  var current;
  link0 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/",
      "class": "navbar-item has-text-white",
      $$slots: {
        "default": [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  link1 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.Link({
    props: {
      href: "/",
      "class": "navbar-item has-text-white",
      $$slots: {
        "default": [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  var if_block0 =
  /*user*/
  ctx[0] && create_if_block_1(ctx);
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*user*/
    ctx[0]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      nav = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("nav");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link0.$$.fragment);
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link1.$$.fragment);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      if (if_block0) if_block0.c();
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      if_block1.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "navbar-brand");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "navbar-start");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "id", "navstart");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "buttons");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "navbar-item");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "navbar-end");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "id", "navbar_ana");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "navbar-menu");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(nav, "class", "navbar is-light is-transparent");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, nav, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link0, div0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link1, div0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div1);
      if (if_block0) if_block0.m(div1, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
      if_blocks[current_block_type_index].m(div2, null);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var link0_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link0.$set(link0_changes);
      var link1_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        link1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link1.$set(link1_changes);

      if (
      /*user*/
      ctx[0]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*user*/
          1) {
            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0, 1);
          if_block0.m(div1, null);
        }
      } else if (if_block0) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
      }

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
        if_block1 = if_blocks[current_block_type_index];

        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block1.c();
        } else {
          if_block1.p(ctx, dirty);
        }

        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
        if_block1.m(div2, null);
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link0.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link1.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link0.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link1.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(nav);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link1);
      if (if_block0) if_block0.d();
      if_blocks[current_block_type_index].d();
    }
  };
}

var iconColor = 'link';
var iconSize = 'S';

function instance($$self, $$props, $$invalidate) {
  var $page;
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.page, function ($$value) {
    return $$invalidate(1, $page = $$value);
  });
  var user = false;

  if ($page.props.auth) {
    user = $page.props.auth.user;
  }

  console.log($page.props);
  return [user];
}

var Nav = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Nav, _SvelteComponent);

  var _super = _createSuper(Nav);

  function Nav(options) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Nav);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./resources/js/Pages/Shared/Colors.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Shared/Colors.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colors": () => (/* binding */ Colors)
/* harmony export */ });
var Colors = {
  white: '#FFFFFF',
  black: '#0A0A0A',
  light: '#F5F5F5',
  dark: '#363636',
  primary: '#00D1B2',
  link: '#3273DC',
  info: '#209CEE',
  success: '#48C774',
  warning: '#FFDD57',
  danger: '#FF3860',
  lightgrey: '#b5b5b5'
};

/***/ }),

/***/ "./resources/js/Pages/Shared/Sizes.js":
/*!********************************************!*\
  !*** ./resources/js/Pages/Shared/Sizes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sizes": () => (/* binding */ Sizes)
/* harmony export */ });
var Sizes = {
  XS: 24,
  S: 28,
  M: 32,
  L: 48,
  XL: 64,
  XXL: 128
};

/***/ }),

/***/ "./resources/js/Pages/Shared/Svgs.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Shared/Svgs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGS": () => (/* binding */ SVGS)
/* harmony export */ });
var _SVGS;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SVGS = (_SVGS = {
  home: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>',
  user: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>',
  register: '<g><rect fill="none" height="24" width="24"/></g><g><path d="M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z"/></g>',
  logout: '<g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g>',
  edit: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>',
  "delete": '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>',
  cancel: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>',
  role: '<g><rect fill="none" height="24" width="24" y="0"/></g><g><g><rect height="1.5" width="4" x="14" y="12"/><rect height="1.5" width="4" x="14" y="15"/><path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M11,7V4h2v3v2h-2V7z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20z"/><circle cx="9" cy="13.5" r="1.5"/><path d="M11.08,16.18C10.44,15.9,9.74,15.75,9,15.75s-1.44,0.15-2.08,0.43C6.36,16.42,6,16.96,6,17.57V18h6v-0.43 C12,16.96,11.64,16.42,11.08,16.18z"/></g></g>',
  skill: '<path d="M21,23c-1.03,0-2.06-0.25-3-0.75h0c-1.89,1-4.11,1-6,0c-1.89,1-4.11,1-6,0C5.05,22.75,4.03,23,3,23H2l0-2h1 c1.04,0,2.08-0.35,3-1c1.83,1.3,4.17,1.3,6,0c1.83,1.3,4.17,1.3,6,0c0.91,0.65,1.96,1,3,1h1v2H21z M17,1.5c-1.1,0-2,0.9-2,2 s0.9,2,2,2s2-0.9,2-2S18.1,1.5,17,1.5z M14.43,8.48L12.18,10L16,13v3.84c0.53,0.38,1.03,0.78,1.49,1.17C16.81,18.59,15.94,19,15,19 c-1.2,0-2.27-0.66-3-1.5c-0.73,0.84-1.8,1.5-3,1.5c-0.33,0-0.65-0.05-0.96-0.14C5.19,16.9,3,14.72,3,13.28C3,12.25,4.01,12,4.85,12 c0.98,0,2.28,0.31,3.7,0.83l-0.53-3.1C7.91,9.06,8.2,8.35,8.8,7.94l2.15-1.45l-2-0.37L6.13,8.05L5,6.4L8.5,4l5.55,1.03 c0.45,0.09,0.93,0.37,1.22,0.89l0.88,1.55C17.01,8.98,18.64,10,20.5,10v2C17.91,12,15.64,10.58,14.43,8.48z M10.3,11.1l0.44,2.65 c0.92,0.42,2.48,1.27,3.26,1.75V14L10.3,11.1z"/>',
  training: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>',
  measurement: '<g><rect fill="none" height="24" width="24"/></g><g><g><path d="M6.36,18.78L6.61,21l1.62-1.54l2.77-7.6c-0.68-0.17-1.28-0.51-1.77-0.98L6.36,18.78z"/><path d="M14.77,10.88c-0.49,0.47-1.1,0.81-1.77,0.98l2.77,7.6L17.39,21l0.26-2.22L14.77,10.88z"/><path d="M15,8c0-1.3-0.84-2.4-2-2.82V3h-2v2.18C9.84,5.6,9,6.7,9,8c0,1.66,1.34,3,3,3S15,9.66,15,8z M12,9c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C13,8.55,12.55,9,12,9z"/></g></g>',
  eye: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/>',
  list: '<g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>',
  add: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>',
  arrow_fwd: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>',
  arrow_up: '<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/>',
  arrow_down: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>',
  li_child: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/>',
  add_to_list: '<rect fill="none" height="24" width="24"/><path d="M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-2v2h-2V7h-2V5h2V3h2v2h2V7z"/>',
  remove_from_list: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>',
  add_child: '<g><rect fill="none" height="24" width="24"/></g><g><path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z"/></g>',
  back_to_list: '<path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"/>',
  search: '<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',
  tree: '<path d="M0,0h24v24H0V0z" fill="none"/><path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8. 41L19.59,7l-5,5l5,5L21,15.59z"/>',
  dirOpen: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>',
  dirClosed: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>',
  treeNode: '<path d="m 12,8.96875 c -1.395,0 -2.53125,1.13625 -2.53125,2.53125 0,1.395 1.13625,2.53125 2.53125,2.53125 1.395,0 2.53125,-1.13625 2.53125,-2.53125 C 14.53125,10.105 13.395,8.96875 12,8.96875 Z" />',
  fold: '<path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"/>',
  unfold: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/>',
  expand: '<g><g><rect height="2" width="16" x="4" y="20"/><rect height="2" width="16" x="4" y="2"/><polygon points="9.41,13.59 8,15 12,19 16,15 14.59,13.59 13,15.17 13,8.83 14.59,10.41 16,9 12,5 8,9 9.41,10.41 11,8.83 11,15.17"/></g></g>',
  compress: '<path d="M4,9v2h16V9H4z M16,4l-1.41-1.41L13,4.17V1h-2v3.19L9.39,2.61L8,4l4,4L16,4z M4,14h16v-2H4V14z M8,19l1.39,1.39L11,18.81 V22h2v-3.17l1.59,1.59L16,19l-4-4L8,19z"/>',
  mail: '<path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>',
  next: '<path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/>',
  filter: '<path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/>',
  password: '<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>',
  previous: '<path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/>',
  stats: '<g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><rect height="5" width="2" x="7" y="12"/><rect height="10" width="2" x="15" y="7"/><rect height="3" width="2" x="11" y="14"/><rect height="2" width="2" x="11" y="10"/></g></g>',
  info: '<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>',
  toggle_on: '<path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',
  toggle_off: '<path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',
  save: '<path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/>',
  live_help: '<path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-8-3h2v2h-2zm1-8c1.1 0 2 .9 2 2 0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4S8 6.79 8 9h2c0-1.1.9-2 2-2z"/>'
}, _defineProperty(_SVGS, "info", '<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>'), _defineProperty(_SVGS, "people", '<path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"/>'), _defineProperty(_SVGS, "service", '<path d="M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13c1.03-2.58 3.55-4.41 6.5-4.41z"/>'), _SVGS);

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start(); */


_inertiajs_progress__WEBPACK_IMPORTED_MODULE_1__.InertiaProgress.init({
  color: 'red',
  showSpinner: true
});
(0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_0__.createInertiaApp)({
  resolve: function resolve(name) {
    return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*\\.svelte$")("./".concat(name, ".svelte"));
  },
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props;
    new App({
      target: el,
      props: props
    });
  }
});

/***/ }),

/***/ "./resources/js/config/config.js":
/*!***************************************!*\
  !*** ./resources/js/config/config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gui": () => (/* binding */ gui),
/* harmony export */   "params": () => (/* binding */ params)
/* harmony export */ });
var params = {
  company: {
    name: 'kapkara',
    logo: 'kapkara.svg',
    motto: 'simplicity in action',
    title: 'web technologies | design house'
  },
  app: {
    name: 'Tensor',
    title: 'Yöneticinin Akıllı Uygulaması',
    description: 'Description here',
    app_header_logo: 'app_header_logo.svg',
    app_footer_logo: 'app_footer_logo.svg',
    version: '2022.03.26',
    copyright: '© 2022 All Rights Reserved'
  },
  stack: [{
    name: 'Laravel',
    url: 'https://laravel.com'
  }, {
    name: 'InertiaJS',
    url: 'https://inertiajs.comm'
  }, {
    name: 'Svelte',
    url: 'https://svelte.dev'
  }, {
    name: 'Bulma',
    url: 'https://bulma.io'
  }]
};
var gui = {
  icons: {
    size: 'S',
    color: 'link'
  }
};

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*\\.svelte$":
/*!***************************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*\.svelte$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./IndexGuest.svelte": "./resources/js/Pages/IndexGuest.svelte",
	"./Shared/Footer.svelte": "./resources/js/Pages/Shared/Footer.svelte",
	"./Shared/Greet.svelte": "./resources/js/Pages/Shared/Greet.svelte",
	"./Shared/Hero.svelte": "./resources/js/Pages/Shared/Hero.svelte",
	"./Shared/Icon.svelte": "./resources/js/Pages/Shared/Icon.svelte",
	"./Shared/Layout.svelte": "./resources/js/Pages/Shared/Layout.svelte",
	"./Shared/Nav.svelte": "./resources/js/Pages/Shared/Nav.svelte"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*\\.svelte$";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","css/bulma","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./node_modules/bulma/bulma.sass"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);