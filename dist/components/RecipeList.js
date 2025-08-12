"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RecipeListWithHook = exports.RecipeListWithComponent = exports.DataMonitor = exports.App = void 0;
var _react = _interopRequireWildcard(require("react"));
var _LongPolling = require("../LongPolling.jsx");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * Recipe List Component using LongPollingClient
 */
var RecipeListWithComponent = exports.RecipeListWithComponent = function RecipeListWithComponent() {
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    lastUpdate = _useState2[0],
    setLastUpdate = _useState2[1];
  var handleDataUpdate = function handleDataUpdate(recipes) {
    setLastUpdate(new Date().toLocaleTimeString());
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "recipe-list",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      children: "Recipe List (Component-based)"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: ["Last updated: ", lastUpdate || 'Never']
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LongPolling.LongPollingClient, {
      url: "/api/recipes",
      onDataUpdate: handleDataUpdate,
      interval: 1000,
      render: function render(_ref) {
        var data = _ref.data,
          isConnected = _ref.isConnected,
          error = _ref.error;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [error && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "error",
            children: ["Error: ", error]
          }), !isConnected && !error && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: "Connecting..."
          }), isConnected && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "status connected",
            children: "Connected"
          }), data && /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
            className: "recipes",
            children: data.map(function (recipe, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
                  children: recipe.name
                }), " - $", recipe.price]
              }, index);
            })
          })]
        });
      }
    })]
  });
};

/**
 * Recipe List Component using useLongPolling hook
 */
var RecipeListWithHook = exports.RecipeListWithHook = function RecipeListWithHook() {
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    lastUpdate = _useState4[0],
    setLastUpdate = _useState4[1];
  var _useLongPolling = (0, _LongPolling.useLongPolling)('/api/recipes', {
      interval: 1000,
      onDataUpdate: function onDataUpdate(recipes) {
        setLastUpdate(new Date().toLocaleTimeString());
      }
    }),
    data = _useLongPolling.data,
    isConnected = _useLongPolling.isConnected,
    error = _useLongPolling.error;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "recipe-list",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      children: "Recipe List (Hook-based)"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: ["Last updated: ", lastUpdate || 'Never']
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "error",
      children: ["Error: ", error]
    }), !isConnected && !error && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: "Connecting..."
    }), isConnected && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "status connected",
      children: "Connected"
    }), data && /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      className: "recipes",
      children: data.map(function (recipe, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: recipe.name
          }), " - $", recipe.price]
        }, index);
      })
    })]
  });
};

/**
 * Custom Data Monitor Component
 */
var DataMonitor = exports.DataMonitor = function DataMonitor(_ref2) {
  var dataKey = _ref2.dataKey;
  var _useLongPolling2 = (0, _LongPolling.useLongPolling)("/api/data/".concat(dataKey), {
      interval: 2000
    }),
    data = _useLongPolling2.data,
    isConnected = _useLongPolling2.isConnected,
    error = _useLongPolling2.error;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "data-monitor",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
      children: ["Data Monitor: ", dataKey]
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "error",
      children: ["Error: ", error]
    }), !isConnected && !error && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: "Connecting..."
    }), isConnected && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "status connected",
      children: "Connected"
    }), data && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "data",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: ["ID: ", data.id]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: ["Value: ", data.value.toFixed(2)]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: ["Timestamp: ", new Date(data.timestamp).toLocaleTimeString()]
      })]
    })]
  });
};

/**
 * Main App Component
 */
var App = exports.App = function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "app",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Long-Polling JSX Demo"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: "This demo shows real-time updates using long-polling with React components."
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "components",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(RecipeListWithComponent, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(RecipeListWithHook, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "monitors",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(DataMonitor, {
          dataKey: "temperature"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(DataMonitor, {
          dataKey: "humidity"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(DataMonitor, {
          dataKey: "pressure"
        })]
      })]
    })]
  });
};
var _default = exports["default"] = App;