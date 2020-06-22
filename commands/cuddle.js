const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'cuddle',
    description: 'Cuddle another user(or me)',
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710589662439407727/867.gif", "https://media.discordapp.net/attachments/701908621931315231/710589663064359062/Omake_Gif_Anime_-_Kobayashi-san_Chi_no_Maid_Dragon_-_Specials_2_BD_-_Neko_Dragons_Nuzzle.gif", "https://media.discordapp.net/attachments/701908621931315231/710589663458492496/tenor_7.gif", "https://media.discordapp.net/attachments/701908621931315231/710589664016203816/4275fbf9635050b4ef897a585577eeff.gif", "https://media.discordapp.net/attachments/701908621931315231/710589664360267816/tenor_6.gif", "https://media.discordapp.net/attachments/701908621931315231/710589972998127716/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif", "https://media.discordapp.net/attachments/701908621931315231/710589973677604864/tumblr_m5l64wIi601rn95k2o1_500.gif", "https://media.discordapp.net/attachments/701908621931315231/710589974403350538/tenor_8.gif", "https://media.discordapp.net/attachments/701908621931315231/710620876487393451/tenor_3.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        if(message.mentions.users.first()) {
        const embed = new Discord.MessageEmbed()
            .setColor('D896D6')
            .setAuthor(`${message.mentions.users.first().username} was cuddled by ${message.author.username}, so sweet!`, message.author.displayAvatarURL())
            .setImage(random)
        message.channel.send(embed)
        } else {
            const embed = new Discord.MessageEmbed()
            .setColor('D896D6')
            .setAuthor(`${message.author.username}, who are you cuddling with? Well, you can cuddle with me if you want ^^`, message.author.displayAvatarURL())
            .setImage(random)
        message.channel.send(embed)
        }
    }
}