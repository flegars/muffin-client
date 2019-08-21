const Command = require('../command');
const Service = require('../../services');

module.exports = class RegisterPlayer extends Command {

  static match(message) {
    return message.content.startsWith('!register');
  }

  static action(message) {
    const msg = message.channel.send(`Tu as bien été ajouté, <@${message.member.id}>`);
    const params = {
      displayName: message.content.split(' ')[1],
      //id: parseInt(message.member.id.substr(-4)),
      id: message.member.id
    };
    let service = new Service();
    service.postAction('new-player', msg, params);
  }
};
