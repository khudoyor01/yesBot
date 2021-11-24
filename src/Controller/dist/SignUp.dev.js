"use strict";

var users = require("../Model/Users");

var _require = require("./Texts"),
    reqCity = _require.reqCity,
    reqPhone = _require.reqPhone,
    reqCode = _require.reqCode,
    incorrectCode = _require.incorrectCode,
    finishReg = _require.finishReg;

var sms = require("./MessageSend");

module.exports = function _callee(bot, message, user) {
  var userId, text, langs, data, keyboard, i, newRow, _data, _keyboard, _i, _newRow, _data2, _keyboard2, _i2, _newRow2, msg, code, _msg, _data3, _keyboard3;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userId = message.from.id;
          text = message.text;
          _context.prev = 2;

          if (user) {
            _context.next = 14;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(users.create({
            user_id: userId,
            step: 1
          }));

        case 6:
          user = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(bot.sendMessage(userId, "\uD83C\uDDFA\uD83C\uDDFF Assalomu alaykum, Men eltib berish botiman\n\n\uD83C\uDDF7\uD83C\uDDFA Assalomu alaykum, Men eltib berish botiman\n\n\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F Assalomu alaykum, Men eltib berish botiman"));

        case 9:
          langs = {
            resize_keyboard: true,
            keyboard: [[{
              text: "🇺🇿 O'zbekcha"
            }], [{
              text: "ru Ruscha"
            }], [{
              text: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Ingglizcha"
            }]]
          };
          _context.next = 12;
          return regeneratorRuntime.awrap(bot.sendMessage(userId, "\uD83C\uDDFA\uD83C\uDDFF Tilni tanlang \n\n\uD83C\uDDF7\uD83C\uDDFA Tilni tanlang \n\n\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F Tilni tanlang", {
            reply_markup: langs
          }));

        case 12:
          _context.next = 83;
          break;

        case 14:
          if (!(user.step == 1)) {
            _context.next = 48;
            break;
          }

          if (!(text == "🇺🇿 O'zbekcha")) {
            _context.next = 26;
            break;
          }

          _context.next = 18;
          return regeneratorRuntime.awrap(users.findOneAndUpdate({
            user_id: userId
          }, {
            lang: "uz",
            step: 2
          }));

        case 18:
          user = _context.sent;
          data = reqCity("uz");
          keyboard = [];

          for (i = 0; i < data.cities.length; i += 2) {
            newRow = [{
              text: data.cities[i]
            }];

            if (data.cities[i + 1]) {
              newRow.push({
                text: data.cities[i + 1]
              });
            }

            keyboard.push(newRow);
          }

          _context.next = 24;
          return regeneratorRuntime.awrap(bot.sendMessage(userId, data.text, {
            reply_markup: {
              resize_keyboard: true,
              keyboard: keyboard
            }
          }));

        case 24:
          _context.next = 46;
          break;

        case 26:
          if (!"ru Ruscha") {
            _context.next = 37;
            break;
          }

          _context.next = 29;
          return regeneratorRuntime.awrap(users.findOneAndUpdate({
            user_id: userId
          }, {
            lang: "ru",
            step: 2
          }));

        case 29:
          user = _context.sent;
          _data = reqCity("ru");
          _keyboard = [];

          for (_i = 0; _i < _data.cities.length; _i += 2) {
            _newRow = [{
              text: _data.cities[_i]
            }];

            if (_data.cities[_i + 1]) {
              _newRow.push({
                text: _data.cities[_i + 1]
              });
            }

            _keyboard.push(_newRow);
          }

          _context.next = 35;
          return regeneratorRuntime.awrap(bot.sendMessage(userId, _data.text, {
            reply_markup: {
              resize_keyboard: true,
              keyboard: _keyboard
            }
          }));

        case 35:
          _context.next = 46;
          break;

        case 37:
          if (!"🏴󠁧󠁢󠁥󠁮󠁧󠁿 Ingglizcha") {
            _context.next = 46;
            break;
          }

          _context.next = 40;
          return regeneratorRuntime.awrap(users.findOneAndUpdate({
            user_id: userId
          }, {
            lang: "eng",
            step: 2
          }));

        case 40:
          user = _context.sent;
          _data2 = reqCity("eng");
          _keyboard2 = [];

          for (_i2 = 0; _i2 < _data2.cities.length; _i2 += 2) {
            _newRow2 = [{
              text: _data2.cities[_i2]
            }];

            if (_data2.cities[_i2 + 1]) {
              _newRow2.push({
                text: _data2.cities[_i2 + 1]
              });
            }

            _keyboard2.push(_newRow2);
          }

          _context.next = 46;
          return regeneratorRuntime.awrap(bot.sendMessage(userId, _data2.text, {
            reply_markup: {
              resize_keyboard: true,
              keyboard: _keyboard2
            }
          }));

        case 46:
          _context.next = 83;
          break;

        case 48:
          if (!(user.step == 2)) {
            _context.next = 56;
            break;
          }

          _context.next = 51;
          return regeneratorRuntime.awrap(users.findOneAndUpdate({
            user_id: userId
          }, {
            step: 3,
            city: text
          }));

        case 51:
          msg = reqPhone(user.lang);
          _context.next = 54;
          return regeneratorRuntime.awrap(bot.sendMessage(userId, msg));

        case 54:
          _context.next = 83;
          break;

        case 56:
          if (!(user.step == 3)) {
            _context.next = 73;
            break;
          }

          code = ("" + Math.random()).substring(2, 7);

          if (!(!Number(text) || !(Number(text) <= 998999999999) || !(Number(text) > 998000000000))) {
            _context.next = 63;
            break;
          }

          _msg = reqPhone(user.lang);
          _context.next = 62;
          return regeneratorRuntime.awrap(bot.sendMessage(userId, _msg));

        case 62:
          return _context.abrupt("return");

        case 63:
          _context.next = 65;
          return regeneratorRuntime.awrap(users.findOneAndUpdate({
            user_id: userId
          }, {
            step: 4,
            phone_number: Number(text),
            code: code
          }));

        case 65:
          _context.next = 67;
          return regeneratorRuntime.awrap(sms(Number(text), "QX Dostavka: ".concat(code)));

        case 67:
          _data3 = reqCode(user.lang);
          _keyboard3 = {
            inline_keyboard: [[{
              text: _data3.btn,
              callback_data: "code-again"
            }]]
          };
          _context.next = 71;
          return regeneratorRuntime.awrap(bot.sendMessage(userId, _data3.text, {
            reply_markup: _keyboard3
          }));

        case 71:
          _context.next = 83;
          break;

        case 73:
          if (!(user.step == 4)) {
            _context.next = 83;
            break;
          }

          if (!(text == user.code)) {
            _context.next = 81;
            break;
          }

          _context.next = 77;
          return regeneratorRuntime.awrap(users.findOneAndUpdate({
            user_id: userId
          }, {
            step: 5
          }));

        case 77:
          _context.next = 79;
          return regeneratorRuntime.awrap(bot.sendMessage(userId, finishReg(user.lang)));

        case 79:
          _context.next = 83;
          break;

        case 81:
          _context.next = 83;
          return regeneratorRuntime.awrap(bot.sendMessage(userId, incorrectCode(user.lang)));

        case 83:
          _context.next = 88;
          break;

        case 85:
          _context.prev = 85;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);

        case 88:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 85]]);
};