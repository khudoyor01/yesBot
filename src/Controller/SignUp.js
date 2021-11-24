const users = require("../Model/Users");
const {
  reqCity,
  reqPhone,
  reqCode,
  incorrectCode,
  finishReg,
} = require("./Texts");
const sms = require("./MessageSend");

module.exports = async function (bot, message, user) {
  const userId = message.from.id;
  const text = message.text;
  try {
    if (!user) {
      user = await users.create({
        user_id: userId,
        step: 1,
      });

      await bot.sendMessage(
        userId,
        `🇺🇿 Assalomu alaykum, Men eltib berish botiman\n\n🇷🇺 Assalomu alaykum, Men eltib berish botiman\n\n🏴󠁧󠁢󠁥󠁮󠁧󠁿 Assalomu alaykum, Men eltib berish botiman`
      );
      let langs = {
        resize_keyboard: true,
        keyboard: [
          [
            {
              text: "🇺🇿 O'zbekcha",
            },
          ],
          [
            {
              text: "ru Ruscha",
            },
          ],
          [
            {
              text: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Ingglizcha",
            },
          ],
        ],
      };
      await bot.sendMessage(
        userId,
        `🇺🇿 Tilni tanlang \n\n🇷🇺 Tilni tanlang \n\n🏴󠁧󠁢󠁥󠁮󠁧󠁿 Tilni tanlang`,
        {
          reply_markup: langs,
        }
      );
    } else if (user.step == 1) {
      if (text == "🇺🇿 O'zbekcha") {
        user = await users.findOneAndUpdate(
          {
            user_id: userId,
          },
          {
            lang: "uz",
            step: 2,
          }
        );
        let data = reqCity("uz");
        let keyboard = [];
        for (let i = 0; i < data.cities.length; i += 2) {
          let newRow = [
            {
              text: data.cities[i],
            },
          ];
          if (data.cities[i + 1]) {
            newRow.push({
              text: data.cities[i + 1],
            });
          }
          keyboard.push(newRow);
        }
        await bot.sendMessage(userId, data.text, {
          reply_markup: {
            resize_keyboard: true,
            keyboard,
          },
        });
      } else if ("ru Ruscha") {
        user = await users.findOneAndUpdate(
          {
            user_id: userId,
          },
          {
            lang: "ru",
            step: 2,
          }
        );
        let data = reqCity("ru");
        let keyboard = [];
        for (let i = 0; i < data.cities.length; i += 2) {
          let newRow = [
            {
              text: data.cities[i],
            },
          ];
          if (data.cities[i + 1]) {
            newRow.push({
              text: data.cities[i + 1],
            });
          }
          keyboard.push(newRow);
        }
        await bot.sendMessage(userId, data.text, {
          reply_markup: {
            resize_keyboard: true,
            keyboard,
          },
        });
      } else if ("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Ingglizcha") {
        user = await users.findOneAndUpdate(
          {
            user_id: userId,
          },
          {
            lang: "eng",
            step: 2,
          }
        );
        let data = reqCity("eng");
        let keyboard = [];
        for (let i = 0; i < data.cities.length; i += 2) {
          let newRow = [
            {
              text: data.cities[i],
            },
          ];
          if (data.cities[i + 1]) {
            newRow.push({
              text: data.cities[i + 1],
            });
          }
          keyboard.push(newRow);
        }
        await bot.sendMessage(userId, data.text, {
          reply_markup: {
            resize_keyboard: true,
            keyboard,
          },
        });
      }
    } else if (user.step == 2) {
      await users.findOneAndUpdate(
        {
          user_id: userId,
        },
        {
          step: 3,
          city: text,
        }
      );
      let msg = reqPhone(user.lang);
      await bot.sendMessage(userId, msg);
    } else if (user.step == 3) {
      let code = ("" + Math.random()).substring(2, 7);

      if (
        !Number(text) ||
        !(Number(text) <= 998999999999) ||
        !(Number(text) > 998000000000)
      ) {
        let msg = reqPhone(user.lang);
        await bot.sendMessage(userId, msg);
        return;
      }
      await users.findOneAndUpdate(
        {
          user_id: userId,
        },
        {
          step: 4,
          phone_number: Number(text),
          code: code,
        }
      );
      await sms(Number(text), `QX Dostavka: ${code}`);
      let data = reqCode(user.lang);
      let keyboard = {
        inline_keyboard: [
          [
            {
              text: data.btn,
              callback_data: `code-again`,
            },
          ],
        ],
      };
      await bot.sendMessage(userId, data.text, {
        reply_markup: keyboard,
      });
    } else if (user.step == 4) {
      if (text == user.code) {
        await users.findOneAndUpdate(
          {
            user_id: userId,
          },
          {
            step: 5,
          }
        );
        await bot.sendMessage(userId, finishReg(user.lang));
      } else {
        await bot.sendMessage(userId, incorrectCode(user.lang));
      }
    }
  } catch (e) {
    console.log(e);
  }
};
