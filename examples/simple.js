webpackJsonp([0],{

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_rc_color_picker_assets_index_less__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_rc_color_picker_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_material_ui_rc_color_picker_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_rc_color_picker__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_rc_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_rc_color_picker__);





function changeHandler(colors) {
  console.log(colors);
}

function closeHandler(colors) {
  console.log(colors);
}

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  'div',
  { style: { margin: '20px 20px 20px', textAlign: 'center' } },
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'h4',
    null,
    'topLeft'
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_material_ui_rc_color_picker___default.a,
    {
      color: '#36c',
      alpha: 30,
      onChange: changeHandler,
      onClose: closeHandler,
      placement: 'topLeft',
      className: 'some-class' },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'material-ui-rc-color-picker-trigger' })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'h4',
    null,
    'topRight'
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_rc_color_picker___default.a, { color: '#F10', onChange: changeHandler, placement: 'topRight' }),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'h4',
    null,
    'bottomLeft'
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_rc_color_picker___default.a, { color: '#0ad', alpha: 50, onChange: changeHandler, placement: 'bottomLeft' }),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'h4',
    null,
    'bottomRight'
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_rc_color_picker___default.a, { color: '#0F0', onChange: changeHandler, placement: 'bottomRight' })
), document.getElementById('__react-content'));

/***/ })

},[344]);
//# sourceMappingURL=simple.js.map