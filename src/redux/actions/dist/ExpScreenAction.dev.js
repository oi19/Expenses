"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanFormData = exports.changeExpProp = exports.updateExpense = exports.deleteExpense = exports.getExpensesList = exports.addExpenses = exports.fetchExpensesList = void 0;

var _types = require("../types");

var _axios = _interopRequireDefault(require("axios"));

var _http = require("../../util/http");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formatDate = function formatDate() {
  var date = new Date();
  return "".concat(date.getDate(), " / ").concat(date.getMonth() + 1, " / ").concat(date.getFullYear());
};

var fetchExpensesList = function fetchExpensesList() {
  return function _callee(dispatch) {
    var expensesResponse;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get(_http.BACKEND_URL + '/expenses.json'));

          case 3:
            expensesResponse = _context.sent;
            expenses = Object.entries(expensesResponse.data).map(function (item) {
              return _objectSpread({}, item[1], {
                id: item[0]
              });
            });

            if (expenses) {
              dispatch({
                type: _types.FETCH_EXPENSES_SUCCESS,
                payload: expenses
              });
            } else {
              dispatch({
                type: _types.FETCH_EXPENSES_FAILED
              });
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _types.FETCH_EXPENSES_FAILED
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.fetchExpensesList = fetchExpensesList;

var addExpenses = function addExpenses(expenseTitle, expenseAmount) {
  return function _callee2(dispatch) {
    var date;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            console.log(expenseTitle, expenseAmount);

            if (!(!!expenseTitle && !!expenseAmount)) {
              _context2.next = 9;
              break;
            }

            date = formatDate();
            _context2.next = 6;
            return regeneratorRuntime.awrap(_axios["default"].post(_http.BACKEND_URL + '/expenses.json', {
              id: id,
              expenseTitle: expenseTitle,
              expenseAmount: expenseAmount,
              date: date
            }));

          case 6:
            dispatch(fetchExpensesList());
            _context2.next = 10;
            break;

          case 9:
            dispatch({
              type: _types.EXPENSES_EMPTY_ENTRY
            });

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            dispatch({
              type: _types.FETCH_EXPENSES_FAILED
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
};

exports.addExpenses = addExpenses;

var getExpensesList = function getExpensesList() {
  return function (dispatch) {
    dispatch({
      type: _types.FETCH_EXPENSES_STARTED
    });
    dispatch(fetchExpensesList());
  };
};

exports.getExpensesList = getExpensesList;

var deleteExpense = function deleteExpense(id) {
  console.log(id);
  return function () {
    _axios["default"]["delete"](_http.BACKEND_URL + "/expenses/".concat(id, ".json"));
  };
};

exports.deleteExpense = deleteExpense;

var updateExpense = function updateExpense(updatedData) {
  return function _callee3(dispatch, getState) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].put(_http.BACKEND_URL + "/expenses/".concat(updatedData.id, ".json"), updatedData));

          case 3:
            _context3.next = 8;
            break;

          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3["catch"](0);
            dispatch({
              type: _types.FETCH_EXPENSES_FAILED
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 5]]);
  };
};

exports.updateExpense = updateExpense;

var changeExpProp = function changeExpProp(payload) {
  return function (dispatch) {
    dispatch({
      type: _types.EXPENSES_CHANGE_PROP,
      payload: payload
    });
  };
};

exports.changeExpProp = changeExpProp;

var cleanFormData = function cleanFormData() {
  return function (dispatch) {
    dispatch({
      type: _types.CLEAN_FORM_DATA
    });
  };
};

exports.cleanFormData = cleanFormData;