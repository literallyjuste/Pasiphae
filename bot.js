const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
let config = require('./config.json');
const prefix = config.prefix;
const altprefix = config.altprefix;
client.commands = new Discord.Collection();
const commandsFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandsFiles) {
	const commands = require(`./commands/${file}`);
	client.commands.set(commands.name, commands);
}

client.once('ready', () => {
	console.log(`Ready!`);
	client.user.setPresence({ game: { name: 'this Server', type: 3 } });
});

client.on('error', error => {
    console.error('The websocket connection encountered an error:', error);
});

client.on('disconnect', disconnect => {
   console.error('The websocket has been disconnected: ', disconnect)
})

client.on('messageReactionAdd', messageReaction => {
    //console.log(messageReaction);
    var reactions = Array("Wow, this looks amazing!", "Lovely piece~", "Excellent work there!", "Such a nice artwork!", "Oh, that is fantastic!")
    const message = messageReaction.message;
    const featureChannel = client.channels.cache.get('701910686946558073');
    const filter = response => {
        return response.content;
    }
    //who needs && if you can just have an if chain
    if(messageReaction.message.channel.id === '701915632941400155'){
     if(message.attachments.first()) {
      if(messageReaction._emoji.name === '⭐'){
       if(messageReaction.count === 1) {  
            const embed = new Discord.MessageEmbed()
                .setColor('D896D6')
                .setAuthor(`Made by ${messageReaction.message.author.username}`, messageReaction.message.author.displayAvatarURL())
                .setImage(messageReaction.message.attachments.first().url)
            featureChannel.send('<@&701908388933664839>')  
            client.channels.cache.get('701910686946558073').send(embed).then(() => {
                featureChannel.awaitMessages(filter, { max: 1, time: 120000, errors: ['time']})
                    .then(feature => {
                        console.log(feature)
                        if(feature.first().content.startsWith('psay')) {
                            const embed2 = new Discord.MessageEmbed()
                                .setColor('D896D6')
                                .setAuthor(`Made by ${messageReaction.message.author.username}`, messageReaction.message.author.displayAvatarURL())
                                .setImage(messageReaction.message.attachments.first().url)                  
                            client.channels.cache.get('711594727035633724').send(feature.first().content.substr(5), { embed: embed2 })
                        }
                    })
                    .catch(feature => {
                    const embed2 = new Discord.MessageEmbed()
                        .setColor('D896D6')
                        .setAuthor(`Made by ${messageReaction.message.author.username}`, messageReaction.message.author.displayAvatarURL())
                        .setImage(messageReaction.message.attachments.first().url)                   
                    client.channels.cache.get('711594727035633724').send(reactions, embed2)                       
                    })
            })
        }
    }}}
})

client.on('message', async  message => {
    console.log(`"${message.content}" in ${message.channel.name}`);
    if(message.content.startsWith(prefix)){
        const args = message.content.slice(prefix.length).split(' ');
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if(!command) return;

        try {
		    command.execute(message, args, prefix, commandName, client, command, altprefix)
	    } catch (error) {
		    console.error(error);
        };
    };
    
    if(message.content.startsWith(altprefix)) {
        const args = message.content.slice(altprefix.length).split(' ');
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if(!command) return;

        try {
		    command.execute(message, args, prefix, commandName, client, command, altprefix)
	    } catch (error) {
		    console.error(error);
        };
    }
})

client.on("messageDelete", (messageDelete) => {
	console.log(`"${messageDelete.content}" by ${messageDelete.author.username} was deleted.`);
});

client.on('messageUpdate', (oldMessage, newMessage, messageUpdate) => {
    if(newMessage.channel.id === '701911025603182603') {
        return;
    } else {
    console.log(`Message "${oldMessage}" edited to "${newMessage}" in ${newMessage.channel.name}`)
    };
});

client.login(config.token)