"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _ExpScreenReducer = require("./reducers/ExpScreenReducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// every reducers in the project
var reducers = (0, _redux.combineReducers)({
  ExpScreen: _ExpScreenReducer.ExpScreenReducer
}); // middleware thunk => helps to handle  asynchronous actions as redux is only familiar
//with synchronous functions   

var store = (0, _redux.createStore)(reducers, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk["default"])));
exports.store = store;