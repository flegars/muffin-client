const UpdateRoles = require('./guild-management/update-guild-roles');
const RandomPerks = require('./games/dbd/random-perks');
const Game = require('./games/thiercelieux/game/game-creation/new-game-message');
const RegisterPlayer = require('./games/thiercelieux/players/player-registration/register-player-message');
const SendRoles = require('./games/thiercelieux/roles/roles-sending/send-roles-message');
const Help = require('./bot/help');

module.exports = class CommandSeparator {

  static identifyMessage(message) {
    const messageReceived = message.content.split(' ')[0];

    switch (messageReceived) {
      case '!update':
        UpdateRoles.parse(message);
        break;
      case '!random':
        RandomPerks.parse(message);
        break;
      case '!loupgarou':
        Game.parse(message);
        break;
      case '!register':
        RegisterPlayer.parse(message);
        break;
      case '!send-roles':
        SendRoles.parse(message);
        break;
      case '!help':
        Help.parse(message);
        break;
    }
  }
};