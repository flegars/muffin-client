const discord =  require('discord.js');
const fs = require('fs');

const bot = new discord.Client();
const data = fs.readFileSync('./token.txt')

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });

bot.on("message", message => {
    if(message.content == 'hello') {
        message.reply('world');
    }  
});

bot.login(data.toString());