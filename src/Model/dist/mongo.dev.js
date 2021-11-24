"use strict";

var mongoose = require("mongoose");

var _require = require("../../config"),
    MONGO_URL = _require.MONGO_URL;

require("./Users");

module.exports = function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(MONGO_URL));

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.log("MONGO ERROR: ", _context.t0);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 5]]);
};