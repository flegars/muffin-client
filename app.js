const Discord = require('discord.js');
const fs = require('fs');

//Commands
const UpdateRoles = require('./commands/updateRoles');
const FunCommands = require('./commands/funCommands');

const client = new Discord.Client();
const token = fs.readFileSync('./token.txt')

client.on('ready', () => {
    console.log('Muffin robot inc !');
});

client.on('message', message => {
    UpdateRoles.parse(message);
    FunCommands.parse(message);
});

client.login(token.toString());