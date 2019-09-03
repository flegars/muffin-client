const Command = require('../command');
const axios = require('axios');

module.exports = class NewGame extends Command {

    static match(message) {
        return message.content.startsWith('!loupgarou');
    }

    static action(message) {
        var players = [];
        message.content.split('@').forEach((player, index) => {
            if (index > 0) {
                players.push(player.replace('<@', '').replace('>', '').replace('!', '').replace('<', '').trim());
            }
        });
        axios.post('http://127.0.0.1:8080/api/new-game', ({
                nb_players: players.length
            }))
            .then(response => {
                message.mentions.users.forEach(user => {
                    axios.post('http://127.0.0.1:8080/api/game-add-player/' + response.data.id, ({
                            player_id: user.id
                        }))
                        .then(function () {
                            if (players.indexOf(user.id) >= 0) {
                                user.createDM()
                                    .then(DMChannel => {
                                        DMChannel.send(`Hello, je suis le narrateur de cette partie. Reste attentif au rôle qui va-t-être attribué, ${user.username}`);
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    })
                            }
                        })
                        .catch(function (error) {
                            console.log(error)
                        });
                });
            });
    }
}