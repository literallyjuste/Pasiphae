const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'pinch',
    description: 'Pinch a user',
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710851095974641674/tenor_8.gif", "https://media.discordapp.net/attachments/701908621931315231/710851096767103036/6743b1f4587b5b7f28c8312f1b4d2898013db757_hq.gif", "https://media.discordapp.net/attachments/701908621931315231/710851168665993216/tenor_9.gif", "https://media.discordapp.net/attachments/701908621931315231/710851168867319838/fluffy-cheeks.gif", "https://media.discordapp.net/attachments/701908621931315231/710851707768406036/New.Danganronpa.V3.full.2869198.gif", "https://media.discordapp.net/attachments/701908621931315231/710851708917514271/original.gif", "https://media.discordapp.net/attachments/701908621931315231/710851715913744404/AggressiveFeminineHoneybee-size_restricted.gif", "https://media.discordapp.net/attachments/701908621931315231/710852035788013598/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif", "https://media.discordapp.net/attachments/701908621931315231/710852041265905794/1534082793_AE565B31D7E2C6880D4F3C27366F70BB.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        if(message.mentions.users.first()) {
        const embed = new Discord.MessageEmbed()
            .setColor('D896D6')
            .setAuthor(`${message.author.username} piched ${message.mentions.users.first().username}'s cheeks! It's super effective!`, message.author.displayAvatarURL())
            .setImage(random)
        message.channel.send(embed)
        } else {
            const embed = new Discord.MessageEmbed()
            .setColor('D896D6')
            .setAuthor(`${message.author.username}, who is it that you're pinching? Hey, not me!`, message.author.displayAvatarURL())
            .setImage(random)
        message.channel.send(embed)
        }
    }
}