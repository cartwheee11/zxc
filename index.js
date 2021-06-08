const Discord = require('discord.js');
const config = require('./config.json');

let client = new Discord.Client();
client.login(config.BOT_TOKEN);

const PREFIX = '-zxc'

function getText(number) {
    return 'game is pausing in ' + number;
}

client.on("message", message => {
    if(!message.content.startsWith(PREFIX)) return;
	if(message.author.bot) return;
    let count = 3;
    for(let i = 3; i > 0; i--) {
        setTimeout(function() {
            message.channel.send(getText(count - i + 1));
        }, i * 1000);
       
    }

    setTimeout(function() {
        message.channel.send('game is paused')
    }, 4000);
    setTimeout(function() {
        message.channel.send('?')
    }, 4500)

})
