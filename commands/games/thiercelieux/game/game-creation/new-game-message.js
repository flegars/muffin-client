const Command = require('../../../../command');
const axios = require('axios');
const gameCreation = require('./game-creation')

module.exports = class NewGame extends Command {

    static match(message) {
        return message.content.startsWith('!loupgarou');
    }

    static action(message) {
        let game = new gameCreation();

        var players = [];
        message.content.split('@').forEach((player, index) => {
            if (index > 0) {
                players.push(player.replace('<@', '').replace('>', '').replace('!', '').replace('<', '').trim());
            }
        }); 

        game.createGame(players);
    }
}