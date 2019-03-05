const DISCORD =  require('discord.js');
const FS = require('fs');

const BOT = new DISCORD.Client();
const DATA = FS.readFileSync('./token.txt')

BOT.on('ready', () => {
    console.log(`Logged in as ${BOT.user.tag}!`);
  });

BOT.on("message", message => {
    if(message.content == '!ancien') {
        message.guild.members.forEach( member => {
            let userJoined = new Date(Date.now() - new Date(member.joinedTimestamp).getTime());
            let age = Math.abs(userJoined.getFullYear() - 1970);
            if(age > 1) { 
                try {
                    member.addRole('551210548914683908'); 
                } catch (error) {
                    console.error(error);
                } 
            }
        });
        commandUsed(message.content);
    }  
});

function commandUsed(message) {
    console.log(`Command ${message} used`);
}

BOT.login(DATA.toString());