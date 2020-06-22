const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'slap',
    description: 'Slap another user',
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710624299999821864/176878170001202.gif", "https://media.discordapp.net/attachments/701908621931315231/710624300415189002/1LA4.gif", "https://media.discordapp.net/attachments/701908621931315231/710624321831305256/tenor_6.gif", "https://media.discordapp.net/attachments/701908621931315231/710624322552725514/tenor_5.gif", "https://media.discordapp.net/attachments/701908621931315231/710624337023074424/edf098d22b93cff200cd518cb1297e8e.gif", "https://media.discordapp.net/attachments/701908621931315231/710624337765466202/giphy.gif", "https://media.discordapp.net/attachments/701908621931315231/710624338042290247/tenor_4.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        if(message.mentions.users.first()) {
            const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`${message.author.username} slaps ${message.mentions.users.first().username}! Ouch, that must've hurt.`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`${message.author.username} slaps without aim! I wonder where it landed.`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            }
    }
}