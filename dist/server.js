"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _url = require("url");
var _path = require("path");
var _promises = _interopRequireDefault(require("fs/promises"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = (0, _path.dirname)(_filename);
var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;

// Middleware
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"]["static"]((0, _path.join)(_dirname, '../public')));

// Store for tracking data changes
var dataStore = new Map();
var clients = new Map();

/**
 * LongPolling Server Class
 * Handles server-side long-polling logic
 */
var LongPollingServer = /*#__PURE__*/function () {
  function LongPollingServer() {
    _classCallCheck(this, LongPollingServer);
    this.dataCache = new Map();
    this.lastModified = new Map();
  }

  /**
   * Check for data changes and return appropriate response
   * @param {string} key - Data identifier
   * @param {Function} dataProvider - Function that provides current data
   * @param {number} checkInterval - How often to check for changes (ms)
   * @returns {Object} Response with data and change status
   */
  return _createClass(LongPollingServer, [{
    key: "check",
    value: (function () {
      var _check = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(key, dataProvider) {
        var checkInterval,
          currentData,
          currentHash,
          lastHash,
          lastModified,
          hasChanged,
          now,
          _args = arguments,
          _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              checkInterval = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1000;
              _context.p = 1;
              _context.n = 2;
              return dataProvider();
            case 2:
              currentData = _context.v;
              currentHash = JSON.stringify(currentData);
              lastHash = this.dataCache.get(key);
              lastModified = this.lastModified.get(key) || 0;
              hasChanged = currentHash !== lastHash;
              now = Date.now();
              if (hasChanged) {
                this.dataCache.set(key, currentHash);
                this.lastModified.set(key, now);
              }
              return _context.a(2, {
                content: currentData,
                changed: hasChanged,
                timestamp: now,
                lastModified: lastModified
              });
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('LongPolling check error:', _t);
              return _context.a(2, {
                content: null,
                changed: false,
                timestamp: Date.now(),
                error: _t.message
              });
          }
        }, _callee, this, [[1, 3]]);
      }));
      function check(_x, _x2) {
        return _check.apply(this, arguments);
      }
      return check;
    }()
    /**
     * Get data for a specific key
     * @param {string} key - Data identifier
     * @returns {Object} Current data state
     */
    )
  }, {
    key: "getData",
    value: function getData(key) {
      return {
        content: this.dataCache.get(key),
        lastModified: this.lastModified.get(key) || 0
      };
    }

    /**
     * Force update for a specific key
     * @param {string} key - Data identifier
     * @param {any} newData - New data to set
     */
  }, {
    key: "forceUpdate",
    value: function forceUpdate(key, newData) {
      this.dataCache.set(key, JSON.stringify(newData));
      this.lastModified.set(key, Date.now());
    }
  }]);
}(); // Initialize LongPolling server
var longPollingServer = new LongPollingServer();

// Routes
app.get('/', function (req, res) {
  res.sendFile((0, _path.join)(_dirname, '../public/demo.html'));
});

// API Routes
app.get('/api/recipes', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var timestamp, dataProvider, result, _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          timestamp = req.query.timestamp ? parseInt(req.query.timestamp) : 0;
          _context3.p = 1;
          // Simulate data provider function
          dataProvider = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
              var recipes;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    // In a real app, this could be a database query
                    recipes = [{
                      name: 'Pasta Carbonara',
                      price: 12.99
                    }, {
                      name: 'Margherita Pizza',
                      price: 15.99
                    }, {
                      name: 'Caesar Salad',
                      price: 8.99
                    }]; // Simulate occasional price changes
                    if (Math.random() > 0.7) {
                      recipes.forEach(function (recipe) {
                        recipe.price = (recipe.price + (Math.random() - 0.5) * 2).toFixed(2);
                      });
                    }
                    return _context2.a(2, recipes);
                }
              }, _callee2);
            }));
            return function dataProvider() {
              return _ref2.apply(this, arguments);
            };
          }();
          _context3.n = 2;
          return longPollingServer.check('recipes', dataProvider, 1000);
        case 2:
          result = _context3.v;
          res.json(result);
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t2 = _context3.v;
          console.error('Error fetching recipes:', _t2);
          res.status(500).json({
            error: 'Failed to fetch recipes'
          });
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[1, 3]]);
  }));
  return function (_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());

// Custom data endpoint
app.get('/api/data/:key', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var key, timestamp, dataProvider, result, _t3;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          key = req.params.key;
          timestamp = req.query.timestamp ? parseInt(req.query.timestamp) : 0;
          _context5.p = 1;
          dataProvider = /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    return _context4.a(2, {
                      id: key,
                      value: Math.random() * 100,
                      timestamp: Date.now()
                    });
                }
              }, _callee4);
            }));
            return function dataProvider() {
              return _ref4.apply(this, arguments);
            };
          }();
          _context5.n = 2;
          return longPollingServer.check(key, dataProvider, 1000);
        case 2:
          result = _context5.v;
          res.json(result);
          _context5.n = 4;
          break;
        case 3:
          _context5.p = 3;
          _t3 = _context5.v;
          console.error("Error fetching data for key ".concat(key, ":"), _t3);
          res.status(500).json({
            error: 'Failed to fetch data'
          });
        case 4:
          return _context5.a(2);
      }
    }, _callee5, null, [[1, 3]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// Health check endpoint
app.get('/health', function (req, res) {
  res.json({
    status: 'healthy',
    timestamp: Date.now(),
    uptime: process.uptime()
  });
});

// Start server
app.listen(PORT, function () {
  console.log("\uD83D\uDE80 Long-Polling JSX Server running on http://localhost:".concat(PORT));
  console.log("\uD83D\uDCCA Health check: http://localhost:".concat(PORT, "/health"));
  console.log("\uD83C\uDF55 Recipes API: http://localhost:".concat(PORT, "/api/recipes"));
});
var _default = exports["default"] = app;