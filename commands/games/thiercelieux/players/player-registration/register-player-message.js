const Command = require('../../../../command');
const axios = require('axios');


module.exports = class RegisterPlayer extends Command {

  static match(message) {
    return message.content.startsWith('!register');
  }

  static action(message) {
    axios.post('http://127.0.0.1:8080/api/new-player', ({
        display_name: message.content.split(' ')[1],
        id: message.member.id
      }))
      .then(function () {
        message.channel.send(`Tu as bien été ajouté , <@${message.member.id}>`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}