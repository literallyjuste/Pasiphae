const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'highfive',
    description: 'Highfive another user',
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710824459107565678/170922b20ee616f11629b43d92c45fa7.gif", "https://media.discordapp.net/attachments/701908621931315231/710824459526864896/tenor_4.gif", "https://media.discordapp.net/attachments/701908621931315231/710824537176014898/tenor_3.gif", "https://media.discordapp.net/attachments/701908621931315231/710824537864011786/tenor_2.gif", "https://media.discordapp.net/attachments/701908621931315231/710824548760551484/tenor_1.gif", "https://media.discordapp.net/attachments/701908621931315231/710824935999930459/6f73a918faf2c37dd2b501d65b4b010fba9bb091_00.gif", "https://media.discordapp.net/attachments/701908621931315231/710824936482013214/6978125c152c56070b3c6dd992f23395771ebf70_hq.gif", "https://media.discordapp.net/attachments/701908621931315231/710825078455271425/726.gif", "https://media.discordapp.net/attachments/701908621931315231/710825472426246174/tenor_5.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        if(message.mentions.users.first()) {
            const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`${message.author.username} highfives ${message.mentions.users.first().username}!`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`Highfiving the air is a bit strange, isn't it? It's fine, I won't leave you hanging!`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            }
    }
}