const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'hug',
    description: 'Hug another user',
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710586567592378388/tenor_4.gif", "https://media.discordapp.net/attachments/701908621931315231/710586568892481657/tumblr_4b73c9ce37c2c8d34a97641f8fd97338_be4510db_500.gif", "https://media.discordapp.net/attachments/701908621931315231/710586574861238372/08de7ad3dcac4e10d27b2c203841a99f.gif", "https://media.discordapp.net/attachments/701908621931315231/710586575213297734/B7bp.gif", "https://media.discordapp.net/attachments/701908621931315231/710586584121999450/f2805f274471676c96aff2bc9fbedd70.gif", "https://media.discordapp.net/attachments/701908621931315231/710586584705007666/anime-tackle-hug-gif.gif", "https://media.discordapp.net/attachments/701908621931315231/710586595748610078/tenor_5.gif", "https://media.discordapp.net/attachments/701908621931315231/710588392760672356/8X6d.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        if(message.mentions.users.first()) {
        const embed = new Discord.MessageEmbed()
            .setColor('D896D6')
            .setAuthor(`${message.author.username} hugged ${message.mentions.users.first().username} tightly. So cute!`, message.author.displayAvatarURL())
            .setImage(random)
        message.channel.send(embed)
        } else {
            const embed = new Discord.MessageEmbed()
            .setColor('D896D6')
            .setAuthor(`Huh? Who are you hugging, ${message.author.username}? Don't worry, I'll hug you!`, message.author.displayAvatarURL())
            .setImage(random)
        message.channel.send(embed)
        }
    }
}