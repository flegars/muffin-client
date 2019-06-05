const Discord = require('discord.js');
const fs = require('fs');

//Commands
const UpdateRoles = require('./commands/updateRoles');
const FunCommands = require('./commands/funCommands');
const RandomPerks = require('./commands/dbd/RandomPerks');

const client = new Discord.Client();
const token = fs.readFileSync('./token.txt')

client.on('ready', () => {
    console.log('Muffin robot inc !');
});

client.on('message', message => {
    UpdateRoles.parse(message);
    FunCommands.parse(message);
    RandomPerks.parse(message);
});

client.login(token.toString());