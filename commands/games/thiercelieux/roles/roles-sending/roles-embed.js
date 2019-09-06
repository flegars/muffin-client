const Discord = require('discord.js');

module.exports = class RolesEmbed {

    /**
     * @param {String} role 
     */
    embedRole(role) {
        const embed = new Discord.RichEmbed();
        embed
            .setTitle(`**${role}**`)
            .setDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada mattis nisi, eu pretium velit ultrices vel. Donec eleifend mi sed augue porta, ut lobortis lorem vehicula.')
            .setThumbnail('http://ekladata.com/mt54Wfy4_dQa4psyNvoIHG7-QJ8.jpg')
        return embed;
    }
}