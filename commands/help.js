module.exports = 
{
    name: 'help',
    description: "this command gives a list of commands.",
    execute(message, args, Discord)
    {
        const embed = new Discord.MessageEmbed()
            .setColor('#11f5de')
            .setTitle("Help (1/1)")
            .setDescription("A list of commands")
            .setThumbnail('https://cdn.discordapp.com/avatars/793219092017840139/6d9a10d29263aea4e9a511e250673d32.png?size=128')
            .addFields
            (
                { name: '**;help** or **;info**', value: 'Shows this list.' },
                { name: '**;hi**', value: 'Hello! 😃' },
                { name: '**;kill**', value: 'Command under development...' }
            )
	        .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', "https://cdn.discordapp.com/avatars/381379655665713155/72a78d2d4e892bb0ac00be2e75e9c891.png?size=128");

        message.channel.send(embed);
    }
}