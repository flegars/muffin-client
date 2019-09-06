const axios = require('axios');
const Discord = require('discord.js');
const Config = require('../../../../../config.json');

const Client = new Discord.Client();

module.exports = class gameCreation {

    /**
     * @param {Array} players 
     */
    createGame(players) {
        axios.post('http://127.0.0.1:8080/api/new-game', ({
                nb_players: players.length
            }))
            .then(response => {
                this.addplayer(response.data.id, players)
            });
    }

    /**
     * @param {String} gameId 
     * @param {Array} players 
     */
    addplayer(gameId, players) {
        players.forEach(player => {
            axios.post(`http://127.0.0.1:8080/api/game-add-player/${gameId}`, ({
                    player_id: player
                }))
                .then(() => {
                    this.sendMessage(players, player)
                })
                .catch(function (error) {
                    console.log(error)
                });
        });
    }

    /**
     * @param {Array} playersIds 
     * @param {Number} playerId 
     */
    sendMessage(playersIds, playerId) {
        if (playersIds.indexOf(playerId) >= 0) {
            Client.fetchUser(playerId)
            .then(function (user) {
                user.createDM()
                .then(DMChannel => {
                    DMChannel.send(`Hello, je suis le narrateur de cette partie. Reste attentif au rôle qui va-t-être attribué, ${user.username}`);
                })
                .catch(function (error) {
                    console.log(error);
                })
            })
            .catch(function (error) {
                console.log(error);
            })
            
        }
    }
}

Client.login(Config.token);