const TelegramBot = require('node-telegram-bot-api');
const token = "1992385432:AAGrZVZcuf1cjuL_hmnjuO0CYaWoVr__Rs8";
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === '/start') {
    bot.sendMessage(chatId, 'Assalomu alaykum')
  }
})