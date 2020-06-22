const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'goodnight',
    description: 'Wish another user a good night',
    aliases: ['night', 'nini', 'gn'],
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710619311827451966/3fYL8i6Q-n-155t3dn_4hhRHm162zQlX8pA6cUDO_sPpNNVxc-m8TlTH7TOSO8R.gif", "https://media.discordapp.net/attachments/701908621931315231/710619312179904523/tenor.gif", "https://media.discordapp.net/attachments/701908621931315231/710619434263511070/tumblr_nsbjojTPDv1tmryloo1_540.gif", "https://media.discordapp.net/attachments/701908621931315231/710619434963697724/tenor_1.gif", "https://media.discordapp.net/attachments/701908621931315231/710619528505327626/tenor_2.gif", "https://media.discordapp.net/attachments/701908621931315231/710620558672265246/RawMeaslyGossamerwingedbutterfly-size_restricted.gif", "https://media.discordapp.net/attachments/701908621931315231/710620559448211476/179445705001202.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        if(message.mentions.users.first() && message.mentions.users.first().id !== '710559158780297298') {
            const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`${message.author.username} wishes ${message.mentions.users.first().username} a good night. Rest well and sleep tight~`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`Good night ${message.author.username}, make sure to rest well!`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            }
        }
}