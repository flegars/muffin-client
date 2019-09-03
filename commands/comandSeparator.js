const UpdateRoles = require('./updateRoles');
const RandomPerks = require('./dbd/RandomPerks');
const Game = require('./thiercelieux/Game');
const RegisterPlayer = require('./thiercelieux/RegisterPlayer');
const SendRoles = require('./thiercelieux/SendRoles');

module.exports = class CommandSeparator {

  static identifyMessage(message) {

    const messageReceived = message.content.split(' ')[0];
    console.log(messageReceived);
    switch (messageReceived) {
      case '!update':
        console.log(`UpdateRoles used by ${message.member.displayName}`);
        UpdateRoles.parse(message);
        break;
      case '!random':
        console.log(`RandomPerks used by ${message.member.displayName}`);
        RandomPerks.parse(message);
        break;
      case '!loupgarou':
        console.log(`Game used by ${message.member.displayName}`);
        Game.parse(message);
        break;
      case '!register':
        console.log(`Register used by ${message.member.displayName}`);
        RegisterPlayer.parse(message);
        break;
      case '!send-roles':
        SendRoles.parse(message);
        break;
    }
  }
};