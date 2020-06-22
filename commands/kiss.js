const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'kiss',
    description: 'Do the lewd act of kissing with another user',
    aliases: ['smooch'],
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710822497209155685/tenor.gif", "https://media.discordapp.net/attachments/701908621931315231/710822497792294933/Anime-Kiss-On-The-Cheek-Gif.gif", "https://media.discordapp.net/attachments/701908621931315231/710822609436016650/1542572493_original.gif", "https://media.discordapp.net/attachments/701908621931315231/710822610098847764/e0ep0v3.gif", "https://media.discordapp.net/attachments/701908621931315231/710822642575474728/199892504002202.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        if(message.mentions.users.first()) {
            const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`Woah! ${message.author.username} kissed ${message.mentions.users.first().username}, so brave!`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`H-hey ${message.author.username}, don't forget to ping someone else when doing that!`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            }
    }
}