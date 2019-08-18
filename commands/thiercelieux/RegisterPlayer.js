const Command = require('../command');
const Service = require('../../services');

module.exports = class RegisterPlayer extends Command {

    static match(message) {
        return message.content.startsWith('!register');
    }

    static action(message) {
        let msg = message.channel.send(`Tu as bien été ajouté, <@${message.member.id}>`);
        let params = {
            displayName: message.content.split(' ')[1],
            id: parseInt(message.member.id.substr(-4))
        }
        var service = new Service();
        service.postAction("new-player", msg, params);
    }
}
