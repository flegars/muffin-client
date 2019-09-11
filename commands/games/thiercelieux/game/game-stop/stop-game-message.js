const Command = require('./../../../../command');

module.exports = class StopGame extends Command {
    static match(message) {
        return message.content.startsWith('!stop-game');
    }

    static action(message) {
        axios
            .post(`http://127.0.0.1/fake-url/${oneRunningGame}`)
            .then(function (response) {
                console.log(`${response.data.id} has stop`);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}