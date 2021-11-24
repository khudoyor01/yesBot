"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports =
/*#__PURE__*/
function () {
  function Texts() {
    _classCallCheck(this, Texts);
  }

  _createClass(Texts, null, [{
    key: "reqCity",
    value: function reqCity(lang) {
      if (lang == "uz") {
        return {
          text: "Shaxarni tanlang",
          cities: ["Toshkent", "Xorazm", "Xonqa", "Gurlan"]
        };
      } else if (lang == "ru") {
        return {
          text: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434",
          cities: ["Ташкент"]
        };
      } else if (lang == "eng") {
        return {
          text: "Select city",
          cities: ["Tashkent"]
        };
      }
    }
  }, {
    key: "reqPhone",
    value: function reqPhone(lang) {
      if (lang == "uz") {
        return "Ro'yxatga olish uchun telefon raqaminggizni kiriting!\n masalan:+9989x xxx xx xx";
      } else if (lang == "ru") {
        return "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438!  N \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: + 9989x xxx xx xx";
      } else if (lang == "eng") {
        return "Enter your phone number to register!  N for example: + 9989x xxx xx xx";
      }
    }
  }, {
    key: "reqCode",
    value: function reqCode(lang) {
      if (lang == "uz") {
        return {
          text: "Telefo'ninggizga tasdiqlash kodi yuborildi.Tasdiqlash kodini kiriting",
          btn: "Qayta kod so'rash uchun"
        };
      } else if (lang == "ru") {
        return {
          text: "\u041D\u0430 \u0432\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F.",
          btn: "Чтобы запросить код еще раз"
        };
      } else if (lang == "eng") {
        return {
          text: "A confirmation code has been sent to your phone. Enter the confirmation code",
          btn: "To request the code again"
        };
      }
    }
  }, {
    key: "incorrectCode",
    value: function incorrectCode(lang) {
      if (lang == "uz") {
        return "xato kod";
      } else if (lang == "ru") {
        return "lorem";
      } else if (lang == "eng") {
        return "incorrect code";
      }
    }
  }, {
    key: "finishReg",
    value: function finishReg(lang) {
      if (lang == "uz") {
        return "registratsiya qilindi";
      } else if (lang == "ru") {
        return "succes registration";
      } else if (lang == "eng") {
        return "lorem";
      }
    }
  }]);

  return Texts;
}();