"use strict";

var TelegramBot = require("node-telegram-bot-api");

var _require = require("../config"),
    TOKEN = _require.TOKEN;

var mongo = require("./Model/mongo");

var users = require("./Model/Users");

var SignUp = require("./Controller/SignUp");

var bot = new TelegramBot(TOKEN, {
  polling: true
});
mongo();
bot.on("message", function _callee(message) {
  var userId, user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userId = message.from.id;
          _context.next = 3;
          return regeneratorRuntime.awrap(users.findOne({
            user_id: userId
          }));

        case 3:
          user = _context.sent;
          console.log(user);

          if (!(!user || Number(user.step) && Number(user.step) < 5)) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(SignUp(bot, message, user));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});