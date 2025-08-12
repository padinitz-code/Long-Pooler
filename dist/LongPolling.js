"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLongPolling = exports["default"] = exports.LongPollingClient = exports.LongPolling = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t4 in e) "default" !== _t4 && {}.hasOwnProperty.call(e, _t4) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t4)) && (i.get || i.set) ? o(f, _t4, i) : f[_t4] = e[_t4]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * LongPolling Client Component
 * Provides real-time data updates using long-polling technique
 */
var LongPollingClient = exports.LongPollingClient = function LongPollingClient(_ref) {
  var url = _ref.url,
    onDataUpdate = _ref.onDataUpdate,
    _ref$interval = _ref.interval,
    interval = _ref$interval === void 0 ? 1000 : _ref$interval,
    _ref$timeout = _ref.timeout,
    timeout = _ref$timeout === void 0 ? 25000 : _ref$timeout,
    children = _ref.children,
    _ref$render = _ref.render,
    render = _ref$render === void 0 ? children : _ref$render;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isConnected = _useState4[0],
    setIsConnected = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    timestamp = _useState8[0],
    setTimestamp = _useState8[1];
  var pollForChanges = (0, _react.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var requestUrl, controller, timeoutId, response, result, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          requestUrl = timestamp ? "".concat(url, "?timestamp=").concat(timestamp) : url;
          controller = new AbortController();
          timeoutId = setTimeout(function () {
            return controller.abort();
          }, timeout);
          _context.n = 1;
          return fetch(requestUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            },
            signal: controller.signal
          });
        case 1:
          response = _context.v;
          clearTimeout(timeoutId);
          if (response.ok) {
            _context.n = 2;
            break;
          }
          throw new Error("HTTP error! status: ".concat(response.status));
        case 2:
          _context.n = 3;
          return response.json();
        case 3:
          result = _context.v;
          // Check if data has changed or if it's the first request
          if (!timestamp || result.changed) {
            setData(result.content);
            onDataUpdate === null || onDataUpdate === void 0 || onDataUpdate(result.content);
          }

          // Update timestamp for next request
          setTimestamp(result.timestamp);
          setIsConnected(true);
          setError(null);

          // Schedule next poll
          setTimeout(pollForChanges, interval);
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          if (_t.name === 'AbortError') {
            // Request timed out, continue polling
            setTimeout(pollForChanges, interval);
          } else {
            setError(_t.message);
            setIsConnected(false);
            // Retry after error
            setTimeout(pollForChanges, interval * 2);
          }
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[0, 4]]);
  })), [url, timestamp, interval, timeout, onDataUpdate]);
  (0, _react.useEffect)(function () {
    pollForChanges();
    return function () {
      // Cleanup function
    };
  }, [pollForChanges]);

  // Render function pattern
  if (typeof render === 'function') {
    return render({
      data: data,
      isConnected: isConnected,
      error: error,
      timestamp: timestamp
    });
  }

  // Default render
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "long-polling-client",
    children: [error && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "error",
      children: ["Error: ", error]
    }), !isConnected && !error && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "connecting",
      children: "Connecting..."
    }), isConnected && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "connected",
      children: "Connected"
    }), data && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "data",
      children: JSON.stringify(data, null, 2)
    })]
  });
};

/**
 * Hook for using long-polling in functional components
 */
var useLongPolling = exports.useLongPolling = function useLongPolling(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$interval = options.interval,
    interval = _options$interval === void 0 ? 1000 : _options$interval,
    _options$timeout = options.timeout,
    timeout = _options$timeout === void 0 ? 25000 : _options$timeout,
    onDataUpdate = options.onDataUpdate;
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    data = _useState0[0],
    setData = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isConnected = _useState10[0],
    setIsConnected = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    error = _useState12[0],
    setError = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    timestamp = _useState14[0],
    setTimestamp = _useState14[1];
  var pollForChanges = (0, _react.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var requestUrl, controller, timeoutId, response, result, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          requestUrl = timestamp ? "".concat(url, "?timestamp=").concat(timestamp) : url;
          controller = new AbortController();
          timeoutId = setTimeout(function () {
            return controller.abort();
          }, timeout);
          _context2.n = 1;
          return fetch(requestUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            },
            signal: controller.signal
          });
        case 1:
          response = _context2.v;
          clearTimeout(timeoutId);
          if (response.ok) {
            _context2.n = 2;
            break;
          }
          throw new Error("HTTP error! status: ".concat(response.status));
        case 2:
          _context2.n = 3;
          return response.json();
        case 3:
          result = _context2.v;
          if (!timestamp || result.changed) {
            setData(result.content);
            onDataUpdate === null || onDataUpdate === void 0 || onDataUpdate(result.content);
          }
          setTimestamp(result.timestamp);
          setIsConnected(true);
          setError(null);
          setTimeout(pollForChanges, interval);
          _context2.n = 5;
          break;
        case 4:
          _context2.p = 4;
          _t2 = _context2.v;
          if (_t2.name === 'AbortError') {
            setTimeout(pollForChanges, interval);
          } else {
            setError(_t2.message);
            setIsConnected(false);
            setTimeout(pollForChanges, interval * 2);
          }
        case 5:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 4]]);
  })), [url, timestamp, interval, timeout, onDataUpdate]);
  (0, _react.useEffect)(function () {
    pollForChanges();
  }, [pollForChanges]);
  return {
    data: data,
    isConnected: isConnected,
    error: error,
    timestamp: timestamp
  };
};

/**
 * Standalone LongPolling class for non-React usage
 */
var LongPolling = exports.LongPolling = /*#__PURE__*/function () {
  function LongPolling(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, LongPolling);
    this.url = url;
    this.options = _objectSpread({
      interval: 1000,
      timeout: 25000
    }, options);
    this.timestamp = null;
    this.isPolling = false;
    this.listeners = [];
  }
  return _createClass(LongPolling, [{
    key: "subscribe",
    value: function subscribe(callback) {
      var _this = this;
      this.listeners.push(callback);
      return function () {
        var index = _this.listeners.indexOf(callback);
        if (index > -1) {
          _this.listeners.splice(index, 1);
        }
      };
    }
  }, {
    key: "start",
    value: function start() {
      if (this.isPolling) return;
      this.isPolling = true;
      this.poll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isPolling = false;
    }
  }, {
    key: "poll",
    value: function () {
      var _poll = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _this2 = this;
        var requestUrl, controller, timeoutId, response, result, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (this.isPolling) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              _context3.p = 1;
              requestUrl = this.timestamp ? "".concat(this.url, "?timestamp=").concat(this.timestamp) : this.url;
              controller = new AbortController();
              timeoutId = setTimeout(function () {
                return controller.abort();
              }, this.options.timeout);
              _context3.n = 2;
              return fetch(requestUrl, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'X-Requested-With': 'XMLHttpRequest'
                },
                signal: controller.signal
              });
            case 2:
              response = _context3.v;
              clearTimeout(timeoutId);
              if (response.ok) {
                _context3.n = 3;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 3:
              _context3.n = 4;
              return response.json();
            case 4:
              result = _context3.v;
              if (!this.timestamp || result.changed) {
                this.listeners.forEach(function (listener) {
                  return listener(result.content);
                });
              }
              this.timestamp = result.timestamp;
              setTimeout(function () {
                return _this2.poll();
              }, this.options.interval);
              _context3.n = 6;
              break;
            case 5:
              _context3.p = 5;
              _t3 = _context3.v;
              if (_t3.name === 'AbortError') {
                setTimeout(function () {
                  return _this2.poll();
                }, this.options.interval);
              } else {
                console.error('LongPolling error:', _t3);
                setTimeout(function () {
                  return _this2.poll();
                }, this.options.interval * 2);
              }
            case 6:
              return _context3.a(2);
          }
        }, _callee3, this, [[1, 5]]);
      }));
      function poll() {
        return _poll.apply(this, arguments);
      }
      return poll;
    }()
  }]);
}();
var _default = exports["default"] = LongPolling;