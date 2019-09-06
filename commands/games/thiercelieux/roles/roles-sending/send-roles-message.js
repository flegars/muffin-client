const Command = require("../../../../command");
const axios = require('axios');
const Discord = require('discord.js');
const Config = require('../../../../../config.json');
const RolesSending = require('./roles-sending');

const Client = new Discord.Client();

module.exports = class SendRoles extends Command {

    static match(message) {
        return message.content.startsWith('!send-roles');
    }

    static action(message) {
        let rolesSending = new RolesSending();
        rolesSending.lastGameOnGuild();
        return;
    }
}

Client.login(Config.token);