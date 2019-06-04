const Command = require('./command');

module.exports = class FunCommands extends Command {
    static match(message) {
        return message.content.startsWith('!join');
    }

    static action(message) {
        message.channel.send(`Yo, ** ${message.member.displayName} **. Tu as rejoins le discord le ** ${message.member.joinedAt} **.`);
    }
}