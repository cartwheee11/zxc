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

    let zxcMessage = getText(count);
    message.channel.send(zxcMessage).then(message => {

        (async function rec() {

            if( count > 1) {
                setTimeout(function () {
                    message.edit(zxcMessage += ('\n' + getText(--count)));
                    rec();
                }, 1000);
            } else {
                setTimeout(function () {
                    message.edit(zxcMessage + '\n?');
                }, 500);
            }
            
            
        })();
        
    });

})
