const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'goodmorning',
    description: 'Wish another user a good morning',
    aliases: ['morning', 'gm'],
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710613483346984960/tenor_9.gif", "https://media.discordapp.net/attachments/701908621931315231/710613483745574943/tenor_10.gif", "https://media.discordapp.net/attachments/701908621931315231/710613484051890176/tenor_11.gif", "https://media.discordapp.net/attachments/701908621931315231/710613484345229312/tenor_12.gif", "https://media.discordapp.net/attachments/701908621931315231/710613503702204542/tenor_13.gif", "https://media.discordapp.net/attachments/701908621931315231/710614419708575784/9cef52ce27ab97e0fa9cfac1cdc1007f.gif", "https://media.discordapp.net/attachments/701908621931315231/710614816837861457/tenor_15.gif", "https://media.discordapp.net/attachments/701908621931315231/710621637007114340/original.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        if(message.mentions.users.first() && message.mentions.users.first().id !== '710559158780297298') {
            const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`${message.author.username} says good morning to you, ${message.mentions.users.first().username}! Hope you slept well!`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`Good morning to you too, ${message.author.username}!`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            }
        }
}