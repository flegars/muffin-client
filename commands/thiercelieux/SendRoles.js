const Command = require("../command");
const axios = require('axios');

module.exports = class SendRoles extends Command {

    static match(message) {
        return message.content.startsWith('!send-roles');
    }

    static action(message) {
        axios.get('http://127.0.0.1:8080/api/last-game')
        .then( function (response) {
            axios.get(`http://127.0.0.1:8080/api/game-players/${response.data[0].id}`)
            .then( function (response) {
                response.data.forEach( player => {
                    axios.post('http://127.0.0.1:8080/api/send-roles', ({
                        playerId : player.id
                    }))
                    .then( function (response) {
                        console.log(response);
                    })
                    .catch( function (error) {
                        console.log(error);
                    })
                });
            })
            .catch( function (error) {
                console.log(error);
            })
        })
        .catch( function (error) {
            console.log(error);
        });
    }

}