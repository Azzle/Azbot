// load up discord and commando library
const Commando = require('discord.js-commando');

// names the bot
const bot = new Commando.Client();

// loads json file with token and prefix value
const config = require("./config.json");

// old token method
// const TOKEN = 'test token'

// commands list
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


// Test Hello command
bot.on('message', function(message) {
    if(message.content == 'Hello')
    {
        message.channel.send('Hello ' + message.author + ', how are you?');
    }
});


// This will run if the bot runs and logs in successfully
bot.on('ready',function(){
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    // Set bot status to number of served discord servers
    // bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.login(config.token);
