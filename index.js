const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NDY3NDM3NDU0Mjc0ODU0OTEy.Diqs4w.t31VJD86CDdggCNpYjoVxxTRrY4'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message) {
    if(message.content == 'Hello')
    {
        message.channel.send('Hello ' + message.author + ', how are you?');
    }
});

bot.on('ready',function(){
    console.log("Ready");
})
bot.login(TOKEN);
