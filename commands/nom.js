const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'nom',
    description: 'Nom on another user',
    aliases: ['bite'],
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710826992924098580/giphy.gif", "https://media.discordapp.net/attachments/701908621931315231/710826993452711936/50a80161b612c2fffb53c553e92fa371457d3d11_hq.gif", "https://media.discordapp.net/attachments/701908621931315231/710827000381702184/172135282004202.gif", "https://media.discordapp.net/attachments/701908621931315231/710828486293454902/nom-anime-gif-2.gif", "https://media.discordapp.net/attachments/701908621931315231/710828486729924657/pIt4eRf.gif", "https://media.discordapp.net/attachments/701908621931315231/710828487048691732/UvcSpZ6.gif", "https://media.discordapp.net/attachments/701908621931315231/710828541155213352/tenor_6.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        if(message.mentions.users.first()) {
            const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`${message.author.username} noms on ${message.mentions.users.first().username}, are they tasty?`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`${message.author.username} noms on... nothing? Or did you want to nom me?`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            }
    }
}