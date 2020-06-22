const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
module.exports = {
    name: 'blush',
    description: "",
    execute(message, args, prefix, commandName, client, command, altprefix) {
        var gifs = Array("https://media.discordapp.net/attachments/701908621931315231/710617040875946065/f3b5c99bc54a6c7e21576d8b54d4bdbf.gif?width=1211&height=681", "https://media.discordapp.net/attachments/701908621931315231/710617076028538880/051.gif", "https://media.discordapp.net/attachments/701908621931315231/710617080889737246/tenor_17.gif", "https://media.discordapp.net/attachments/701908621931315231/710617847579017276/15906d3886ab1e14afa1da583cc63953.gif", "https://media.discordapp.net/attachments/701908621931315231/710617848082464868/ece9d5a204201bc429cb15bdd6e480bb31a32209_hq.gif", "https://cdn.discordapp.com/attachments/701908621931315231/710617083796258826/tumblr_fb5cd9a6d7942be9069277b8e6f8b961_3f73dbe0_400.webp", "https://media.discordapp.net/attachments/701908621931315231/710619990809641010/e2ccaa166f02dc682b1bda52908eb43c.gif");
        var random = gifs[Math.floor(Math.random() * gifs.length)];

        const embed = new Discord.MessageEmbed()
            .setColor('D896D6')
            .setAuthor(`${message.author.username} is blushing, how cute!`, message.author.displayAvatarURL())
            .setImage(random)
        message.channel.send(embed)
}
}