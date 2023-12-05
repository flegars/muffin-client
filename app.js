const Discord = require('discord.js');
const Config = require('./config.json');
const CommandSeparator = require('./commands/comand-separator');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Muffin robot inc !');
    client.user.setActivity('MUFFIN', { type: 'PLAYING'});
});

client.on('message', message => {
    CommandSeparator.identifyMessage(message);
});

client.login(Config.token);
