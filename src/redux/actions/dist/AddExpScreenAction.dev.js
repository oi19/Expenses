"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = void 0;

var _types = require("../types");

var add = function add(amount, name) {
  var date = new Date();
  var day = date.toDateString();
  var time = date.toLocaleDateString();
  return function (dispatch) {
    dispatch({
      type: _types.Add_EXPENSES,
      payload: {
        name: name,
        amount: amount,
        day: day,
        time: time
      }
    });
  };
};

exports.add = add;