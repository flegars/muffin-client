const Discord = require('discord.js');
const fs = require('fs');
const CommandSeparator = require('./commands/comandSeparator');

//Commands


const client = new Discord.Client();
const token = fs.readFileSync('./token.txt')

client.on('ready', () => {
    console.log('Muffin robot inc !');
});

client.on('message', message => {
    CommandSeparator.identifyMessage(message);
});

client.login(token.toString());