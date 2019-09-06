const axios = require('axios');
const Discord = require('discord.js');
const RoleEmbed = require('./roles-embed');
const Config = require('../../../../../config.json');

const Client = new Discord.Client();

module.exports = class RolesSending {
    
    lastGameOnGuild() {
        axios.get('http://127.0.0.1:8080/api/last-game')
        .then(response => {
            this.playersInGame(response.data[0].id);          
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    /**
     * @param {String} gameId 
     */
    playersInGame(gameId) {
        axios.get(`http://127.0.0.1:8080/api/game-players/${gameId}`)
        .then(response => {
            var players = [];
            response.data.forEach(player => {
                players.push(player.id)
            });
            this.sendRoles(players);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    /**
     * @param {Array<Number>} players 
     */
    sendRoles(players) {
        players.forEach(player => {
            axios.post('http://127.0.0.1:8080/api/send-roles', ({
                player_id: player
            }))
            .then(function (response) {
                Client.fetchUser(player)
                    .then(function (user) {
                        var roleEmbed = new RoleEmbed()
                        user.createDM()
                            .then(function (DMchannel) {
                                DMchannel.send(roleEmbed.embedRole(response.data.role.name));
                            })
                            .catch(function (error) { 
                                console.log(error);
                            })
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            })
            .catch(function (error) {
                console.log(error);
            })
        })
    }
}

Client.login(Config.token);