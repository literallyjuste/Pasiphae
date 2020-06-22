const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'cry',
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710823402012672090/b4c969cecddb8e7d28446dc8efa14142.gif", "https://media.discordapp.net/attachments/701908621931315231/710581589486207116/tenor.gif", "https://media.discordapp.net/attachments/701908621931315231/710581588534100018/tenor_1.gif", "https://media.discordapp.net/attachments/701908621931315231/710581589045936148/9b2.gif", "https://media.discordapp.net/attachments/701908621931315231/710581589909962792/1453262358-7ee823222f52b5ba7f7adaa1b886db8b.gif", "https://media.discordapp.net/attachments/701908621931315231/710582805196832859/tenor_2.gif", "https://media.discordapp.net/attachments/701908621931315231/710582805788229652/179867753002202.gif", "https://media.discordapp.net/attachments/701908621931315231/710583488604012634/8305c3a012e448cb409d12e5db3ac179.gif?width=1211&height=681", "https://media.discordapp.net/attachments/701908621931315231/710583730271420426/tenor_3.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        const embed = new Discord.MessageEmbed()
            .setColor('D896D6')
            .setAuthor(`${message.author.username} is crying! Aww, there there!`, message.author.displayAvatarURL())
            .setImage(random)
        message.channel.send(embed)
}
}