const Command = require('../command');

module.exports = class UpdateRoles extends Command {

    static match(message) {
        return message.content.startsWith('!update');
    }

    static action(message) {
        var guildMembers = message.guild.members;
        var members = [];
        guildMembers.forEach( user => {
            var roles = [];
            user.roles.forEach( role => {
                roles.push(role.id);
            });
            members.push([
                user.id,
                user.joinedTimestamp,
                roles
                ]);
        });

        for(let i = 0; i < members.length; i++) {
            var roles = members[i][2];
            var user = message.guild.member(members[i][0]);
            var date = Date.now() - members[i][1];
            var daysDifference =  Math.floor(date/1000/60/60/24);
            if(roles.indexOf('522755961765494785') > 0 && daysDifference > 180) {
                user.addRole('138713754102661120')
                .then(console.log)
                .catch(console.error);
            }
        }
    }
}