const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'pat',
    description: 'Pat a user',
    aliases: ['pet'],
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710895757271760956/tenor_13.gif", "https://media.discordapp.net/attachments/701908621931315231/710849910995419166/tenor_7.gif", "https://media.discordapp.net/attachments/701908621931315231/710823313051746426/220babfd5f8b629cc16399497ed9dd96.gif", "https://media.discordapp.net/attachments/701908621931315231/710895757774815252/tenor_12.gif", "https://media.discordapp.net/attachments/701908621931315231/710895773453123584/BothVacantAmericansaddlebred-size_restricted.gif", "https://media.discordapp.net/attachments/701908621931315231/710895773964828702/tenor_10.gif", "https://media.discordapp.net/attachments/701908621931315231/710895779962945556/tenor_11.gif", "https://media.discordapp.net/attachments/701908621931315231/710896113976082482/tumblr_af9b7c5d320b0a7bacaf38a69dc7e9c6_9cf3c090_500.gif", "https://media.discordapp.net/attachments/701908621931315231/710896114680856576/anime-pat-gif-8.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        if(message.mentions.users.first()) {
            const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`${message.mentions.users.first().username} got a pat from ${message.author.username}! There there~`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`${message.author.username} pats... me! Because patting the air would be a little strange.`, message.author.displayAvatarURL())
                .setImage(random)
            message.channel.send(embed)
            }
    }
}