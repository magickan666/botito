const TelegramBot = require('node-telegram-bot-api');

const token = '7201216867:AAGF5iAN4iPCvLwUUBJza0WSgvQHIVuXlKo'; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
const chatId = msg.chat.id;
const messageText = msg.text;

if (messageText === '/start') {
bot.sendMessage(chatId, 'Welcome to the bot!');
}
});