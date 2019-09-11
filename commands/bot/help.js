const Command = require('../command');
const Discord = require('discord.js');

module.exports = class Help extends Command {

        static match(message) {
            return message.content.startsWith('!help');
        }

        static action(message) {
            let embed = new Discord.RichEmbed();
            embed
                .setTitle('Contribute to this muffin')
                .setColor(0x64e2ff)
                .setDescription('The prefix used by the bot is : **!**')
                .setThumbnail('https://cdn.discordapp.com/app-icons/452173918124638223/3acfbdce9c60fb9dbdea525c71da1102.png?size=256')
                .setURL('https://github.com/Florian-lg/muffin-client')
                .addField('!new-game **[@players...]**', 'Lance une nouvelle partie de loup-garou')
                .addField('!register **your_name**', 'Pour t\'enregistrer dans le jeu')
                .addField('!send-roles', 'Envoie les rôles des différents joueurs');
            return message.channel.send(embed);           
        }
}