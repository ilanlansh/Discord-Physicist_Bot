const Discord = require("discord.js");

module.exports = 
{
    name: 'base',
    description: "This command lets you convert between bases",
    /**
     * Base conversion command
     * @param {Discord.Message} message The message
     * @param {string[]} args array of args
     */
    execute(message, args)
    {
        if (args.length < 3)
        {
            message.channel.send(
                "Too few arguments.\n" +
                "Usage:   `;base <src> <dst> <number>`\n" +
                "The `<number>` will be converted from base `<src>` to base `<dst>`"
            );
            return;
        }

        let src = args[0];
        let dst = args[1];
    }
};