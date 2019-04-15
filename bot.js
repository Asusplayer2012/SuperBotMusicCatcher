const Discord = require('discord.js');
const client = new Discord.Client();

Client.on('message', () = {
    if (message.content === 'ping' ) {
      message.reply('pong');
    }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
