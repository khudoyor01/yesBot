module.exports = class Texts {
  static reqCity(lang) {
    if (lang == "uz") {
      return {
        text: `Shaxarni tanlang`,
        cities: ["Toshkent", "Xorazm", "Xonqa","Gurlan"],
      };
    } else if (lang == "ru") {
      return {
        text: `Выберите город`,
        cities: ["Ташкент"],
      };
    } else if (lang == "eng") {
      return {
        text: `Select city`,
        cities: ["Tashkent"],
      };
    }
  }
  static reqPhone(lang) {
    if (lang == "uz") {
      return `Ro'yxatga olish uchun telefon raqaminggizni kiriting!\n masalan:+9989x xxx xx xx`;
    } else if (lang == "ru") {
      return `Введите свой номер телефона для регистрации! \ N например: + 9989x xxx xx xx`;
    } else if (lang == "eng") {
      return `Enter your phone number to register! \ N for example: + 9989x xxx xx xx`;
    }
  }
  static reqCode(lang) {
    if (lang == "uz") {
      return {
        text: `Telefo'ninggizga tasdiqlash kodi yuborildi.Tasdiqlash kodini kiriting`,
        btn: "Qayta kod so'rash uchun",
      };
    } else if (lang == "ru") {
      return {
        text: `На ваш телефон отправлен код подтверждения. Введите код подтверждения.`,
        btn: "Чтобы запросить код еще раз",
      };
    } else if (lang == "eng") {
      return {
        text: `A confirmation code has been sent to your phone. Enter the confirmation code`,
        btn: "To request the code again",
      };
    }
  }
  static incorrectCode(lang) {
    if (lang == "uz") {
      return `xato kod`;
    } else if (lang == "ru") {
      return `lorem`;
    } else if (lang == "eng") {
      return `incorrect code`;
    }
  }
  static finishReg(lang) {
    if (lang == "uz") {
      return `registratsiya qilindi`;
    } else if (lang == "ru") {
      return `succes registration`;
    } else if (lang == "eng") {
      return `lorem`;
    }
  }
};
