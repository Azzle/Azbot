const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn a little more about me!'
        });
    }

    async run(message, args)
    {
        var MyInfo = new discord.RichEmbed()
        .addField("About Me", "Hello, my name is Azbot")
        // .setDescription("Hello, my name is Azbot.")
        .setColor(0xFF0000)
        .setThumbnail(message.author.avatarURL)
        .setFooter("Thanks for reading")

    message.channel.send(MyInfo);
    }
}

module.exports = InfoAboutMeCommand;