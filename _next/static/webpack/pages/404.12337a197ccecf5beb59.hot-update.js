/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Article; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/request */ \"./src/utils/request.js\");\n/* harmony import */ var _config_globalUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/globalUrl */ \"./src/config/globalUrl.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/yogesh/Desktop/wiki_views/src/pages/404.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Article(_ref) {\n  _s();\n\n  var params = _ref.params;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      Views = _useState[0],\n      setViews = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      summary = _useState2[0],\n      setSummary = _useState2[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  console.log(router.asPath);\n\n  if (router.asPath.indexOf(\"/insights/\") != 0 && router.asPath.split(\"/\").length != 3) {\n    return \"\";\n  } // console.log(params)\n\n\n  if (!params) return \"\";\n  var today = new Date();\n  var dd = String(today.getDate() - 1).padStart(2, '0');\n  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\n\n  var yyyy = today.getFullYear();\n  var d = yyyy + mm + dd;\n  _utils_request__WEBPACK_IMPORTED_MODULE_3__.default.request('GET', _config_globalUrl__WEBPACK_IMPORTED_MODULE_4__.default.viewsUrl + \"\".concat(params.id, \"/daily/\").concat(d, \"/\").concat(d)).then(function (res) {\n    console.log(res);\n\n    if (res.items) {\n      setViews(res.items[0].views);\n      _utils_request__WEBPACK_IMPORTED_MODULE_3__.default.request('GET', _config_globalUrl__WEBPACK_IMPORTED_MODULE_4__.default.summaryUrl + \"\\\\\".concat(params.id)).then(function (res) {\n        console.log(res);\n        setSummary(res.extract_html);\n        console.log(summary);\n      });\n    } else {\n      setViews(\"Not Found\");\n    }\n  });\n\n  if (Views == \"Not Found\") {\n    return \"Not Found\";\n  } else if (Views == \"\") {\n    return '';\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          textAlign: 'center',\n          margin: 'auto 10px'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: params ? params.id : ''\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        dangerouslySetInnerHTML: {\n          __html: summary\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"stats\",\n        style: {\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          height: '400px'\n        },\n        children: [\"This Article got\\xA0 \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n          children: [\" \", Views]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 40\n        }, this), \" \\xA0 Views\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\n_s(Article, \"UnTW9gqngrO3Rg9vWXW5itp1DNU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = Article;\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzLzQwNC5qcz9jMzY5Il0sIm5hbWVzIjpbIkFydGljbGUiLCJwYXJhbXMiLCJ1c2VTdGF0ZSIsIlZpZXdzIiwic2V0Vmlld3MiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJhc1BhdGgiLCJpbmRleE9mIiwic3BsaXQiLCJsZW5ndGgiLCJ0b2RheSIsIkRhdGUiLCJkZCIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJkIiwiUmVxdWVzdCIsImdsb2JhbFVybCIsImlkIiwidGhlbiIsInJlcyIsIml0ZW1zIiwidmlld3MiLCJleHRyYWN0X2h0bWwiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJfX2h0bWwiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTOztBQUFBLGtCQUNkQywrQ0FBUSxDQUFDLEVBQUQsQ0FETTtBQUFBLE1BQ2hDQyxLQURnQztBQUFBLE1BQzFCQyxRQUQwQjs7QUFBQSxtQkFFUkYsK0NBQVEsQ0FBQyxFQUFELENBRkE7QUFBQSxNQUVoQ0csT0FGZ0M7QUFBQSxNQUV2QkMsVUFGdUI7O0FBR3ZDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0ksTUFBbkI7O0FBQ0EsTUFBR0osTUFBTSxDQUFDSSxNQUFQLENBQWNDLE9BQWQsQ0FBc0IsWUFBdEIsS0FBdUMsQ0FBdkMsSUFBNENMLE1BQU0sQ0FBQ0ksTUFBUCxDQUFjRSxLQUFkLENBQW9CLEdBQXBCLEVBQXlCQyxNQUF6QixJQUFtQyxDQUFsRixFQUFvRjtBQUNoRixXQUFPLEVBQVA7QUFDSCxHQVBzQyxDQVF2Qzs7O0FBQ0EsTUFBRyxDQUFDYixNQUFKLEVBQVcsT0FBTSxFQUFOO0FBQ1gsTUFBSWMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBWjtBQUNBLE1BQUlDLEVBQUUsR0FBR0MsTUFBTSxDQUFDSCxLQUFLLENBQUNJLE9BQU4sS0FBZ0IsQ0FBakIsQ0FBTixDQUEwQkMsUUFBMUIsQ0FBbUMsQ0FBbkMsRUFBc0MsR0FBdEMsQ0FBVDtBQUNBLE1BQUlDLEVBQUUsR0FBR0gsTUFBTSxDQUFDSCxLQUFLLENBQUNPLFFBQU4sS0FBbUIsQ0FBcEIsQ0FBTixDQUE2QkYsUUFBN0IsQ0FBc0MsQ0FBdEMsRUFBeUMsR0FBekMsQ0FBVCxDQVp1QyxDQVlpQjs7QUFDeEQsTUFBSUcsSUFBSSxHQUFHUixLQUFLLENBQUNTLFdBQU4sRUFBWDtBQUNBLE1BQUlDLENBQUMsR0FBRUYsSUFBSSxHQUFDRixFQUFMLEdBQVFKLEVBQWY7QUFDQVMsNkRBQUEsQ0FBZ0IsS0FBaEIsRUFBc0JDLCtEQUFBLGFBQXNCMUIsTUFBTSxDQUFDMkIsRUFBN0Isb0JBQXlDSCxDQUF6QyxjQUE4Q0EsQ0FBOUMsQ0FBdEIsRUFDQ0ksSUFERCxDQUNNLFVBQUNDLEdBQUQsRUFBUTtBQUNackIsV0FBTyxDQUFDQyxHQUFSLENBQVlvQixHQUFaOztBQUNBLFFBQUdBLEdBQUcsQ0FBQ0MsS0FBUCxFQUFhO0FBQ1gzQixjQUFRLENBQUMwQixHQUFHLENBQUNDLEtBQUosQ0FBVSxDQUFWLEVBQWFDLEtBQWQsQ0FBUjtBQUNBTixpRUFBQSxDQUFnQixLQUFoQixFQUFzQkMsaUVBQUEsZUFBMEIxQixNQUFNLENBQUMyQixFQUFqQyxDQUF0QixFQUNDQyxJQURELENBQ00sVUFBQ0MsR0FBRCxFQUFTO0FBQ1hyQixlQUFPLENBQUNDLEdBQVIsQ0FBWW9CLEdBQVo7QUFDQXhCLGtCQUFVLENBQUN3QixHQUFHLENBQUNHLFlBQUwsQ0FBVjtBQUNBeEIsZUFBTyxDQUFDQyxHQUFSLENBQVlMLE9BQVo7QUFDSCxPQUxEO0FBTUQsS0FSRCxNQVNJO0FBQ0ZELGNBQVEsQ0FBQyxXQUFELENBQVI7QUFDRDtBQUNGLEdBZkQ7O0FBZ0JBLE1BQUdELEtBQUssSUFBSSxXQUFaLEVBQXdCO0FBQ3BCLFdBQU8sV0FBUDtBQUNILEdBRkQsTUFHSyxJQUFHQSxLQUFLLElBQUksRUFBWixFQUFlO0FBQ2hCLFdBQU8sRUFBUDtBQUNIOztBQUNELHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsdURBQUQ7QUFBQSw4QkFDQTtBQUFLLGFBQUssRUFBRTtBQUFDK0IsbUJBQVMsRUFBQyxRQUFYO0FBQW9CQyxnQkFBTSxFQUFDO0FBQTNCLFNBQVo7QUFBQSwrQkFDSTtBQUFBLG9CQUFLbEMsTUFBTSxHQUFHQSxNQUFNLENBQUMyQixFQUFWLEdBQWM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUlBO0FBQUssK0JBQXVCLEVBQUU7QUFBQ1EsZ0JBQU0sRUFBQy9CO0FBQVI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpBLGVBU0E7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBdUIsYUFBSyxFQUFFO0FBQUNnQyxpQkFBTyxFQUFFLE1BQVY7QUFBa0JDLHdCQUFjLEVBQUUsUUFBbEM7QUFBNENDLG9CQUFVLEVBQUUsUUFBeEQ7QUFBa0VDLGdCQUFNLEVBQUU7QUFBMUUsU0FBOUI7QUFBQSx5REFDMkI7QUFBQSwwQkFBS3JDLEtBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWtCSDs7R0F2RHVCSCxPO1VBR0xRLGtEOzs7S0FIS1IsTyIsImZpbGUiOiIuL3NyYy9wYWdlcy80MDQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xuaW1wb3J0IGdsb2JhbFVybCBmcm9tIFwiLi4vY29uZmlnL2dsb2JhbFVybFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aWNsZSh7IHBhcmFtcyB9KXtcbiAgICBjb25zdCBbVmlld3Msc2V0Vmlld3NdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnkgXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnNvbGUubG9nKHJvdXRlci5hc1BhdGgpXG4gICAgaWYocm91dGVyLmFzUGF0aC5pbmRleE9mKFwiL2luc2lnaHRzL1wiKSAhPSAwICYmIHJvdXRlci5hc1BhdGguc3BsaXQoXCIvXCIpLmxlbmd0aCAhPSAzKXtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2cocGFyYW1zKVxuICAgIGlmKCFwYXJhbXMpcmV0dXJuXCJcIlxuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKS0xKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgdmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIHZhciBkPSB5eXl5K21tK2RkXG4gICAgUmVxdWVzdC5yZXF1ZXN0KCdHRVQnLGdsb2JhbFVybC52aWV3c1VybCtgJHtwYXJhbXMuaWR9L2RhaWx5LyR7ZH0vJHtkfWApXG4gICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICBpZihyZXMuaXRlbXMpe1xuICAgICAgICBzZXRWaWV3cyhyZXMuaXRlbXNbMF0udmlld3MpXG4gICAgICAgIFJlcXVlc3QucmVxdWVzdCgnR0VUJyxnbG9iYWxVcmwuc3VtbWFyeVVybCtgXFxcXCR7cGFyYW1zLmlkfWApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIHNldFN1bW1hcnkocmVzLmV4dHJhY3RfaHRtbClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBzZXRWaWV3cyhcIk5vdCBGb3VuZFwiKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYoVmlld3MgPT0gXCJOb3QgRm91bmRcIil7XG4gICAgICAgIHJldHVybiBcIk5vdCBGb3VuZFwiXG4gICAgfVxuICAgIGVsc2UgaWYoVmlld3MgPT0gXCJcIil7XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsbWFyZ2luOidhdXRvIDEwcHgnfX0+XG4gICAgICAgICAgICAgICAgPGgyPntwYXJhbXMgPyBwYXJhbXMuaWQgOicnfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6c3VtbWFyeX19ID5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGhlaWdodDogJzQwMHB4J319PlxuICAgICAgICAgICAgICAgIFRoaXMgQXJ0aWNsZSBnb3QmbmJzcDsgPGI+IHtWaWV3c308L2I+ICZuYnNwOyBWaWV3c1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/404.js\n");

/***/ })

});