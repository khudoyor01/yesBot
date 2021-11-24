"use strict";

var fetch = require("node-fetch")["default"];

var FormData = require("form-data");

function login() {
  var formdata, email, password, response, data;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          formdata = new FormData();
          email = "test@eskiz.uz";
          password = "j6DWtQjjpLDNjWEk74Sx";
          formdata.append("email", email);
          formdata.append("password", password);
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch("https://notify.eskiz.uz/api/auth/login", {
            method: "POST",
            body: formdata
          }));

        case 8:
          response = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          data = _context.sent;

          if (!(response.status >= 200 && response.status < 300)) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", data.data.token);

        case 16:
          return _context.abrupt("return", false);

        case 17:
          _context.next = 23;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", false);

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
}

function sms(phone_number, message) {
  var token, formdata, response, data;
  return regeneratorRuntime.async(function sms$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(login());

        case 3:
          token = _context2.sent;
          formdata = new FormData();
          formdata.append("mobile_phone", phone_number);
          formdata.append("message", message);
          formdata.append("from", 4546);
          _context2.next = 10;
          return regeneratorRuntime.awrap(fetch("https://notify.eskiz.uz/api/message/sms/send", {
            method: "POST",
            body: formdata,
            headers: {
              Authorization: "Bearer ".concat(token)
            }
          }));

        case 10:
          response = _context2.sent;
          _context2.next = 13;
          return regeneratorRuntime.awrap(response.json());

        case 13:
          data = _context2.sent;
          console.log(data);

          if (!(response.status >= 200 && response.status < 300)) {
            _context2.next = 19;
            break;
          }

          return _context2.abrupt("return", true);

        case 19:
          return _context2.abrupt("return", false);

        case 20:
          _context2.next = 26;
          break;

        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", false);

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 22]]);
}

module.exports = sms;