const UpdateRoles = require('./updateRoles');
const FunCommands = require('./funCommands');
const RandomPerks = require('./dbd/RandomPerks');

module.exports = class CommandSeparator {

    static identifyMessage(message) {
        let messageReceived = message.content.split(' ')[0];
        console.log(messageReceived);
        switch (messageReceived) {
            case '!join':
                console.log(`funCommand used by ${message.member.displayName}`);
                FunCommands.parse(message);             
                break;
            case '!update':
                console.log(`UpdateRoles used by ${message.member.displayName}`);
                UpdateRoles.parse(message);              
                break;
            case '!random':
                console.log(`RandomPerks used by ${message.member.displayName}`);
                RandomPerks.parse(message);
                break;
        }

    }

}