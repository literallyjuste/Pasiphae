const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'poke',
    description: 'Poke another user',
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media1.tenor.com/images/48086974f33a3e0114b2e0387f812ae4/tenor.gif?itemid=12360399", "https://media1.tenor.com/images/e8b25e7d069c203ea7f01989f2a0af59/tenor.gif?itemid=12011027", "https://media1.tenor.com/images/01b264dc057eff2d0ee6869e9ed514c1/tenor.gif?itemid=14346763", "https://media.discordapp.net/attachments/701908621931315231/710849815298441226/b495fb19f4b9a1b04f48297b676c497b.gif", "https://media.discordapp.net/attachments/701908621931315231/710849592886951996/external-content.duckduckgo.com.gif", "https://media.discordapp.net/attachments/701908621931315231/710849189440913474/external-content.duckduckgo.com.gif", "http://giphy.com/gifs/poking-pWd3gD577gOqs", "https://media.discordapp.net/attachments/701908621931315231/710848967616757780/external-content.duckduckgo.com.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        if(message.mentions.users.first()) {
            const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`${message.author.username} poked ${message.mentions.users.first().username}, are you there?`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`Hmm? Whose attention are you trying to get, ${message.author.username}?`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            }
    }
}