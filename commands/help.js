module.exports = 
{
    name: 'help',
    description: "this command gives a list of commands.",
    execute(message, args, Discord, client, data)
    {
        const embed = new Discord.MessageEmbed()
            .setColor(data.color)
            .setTitle("Help (1/1)")
            .setDescription("This is a bot originally made for yaakov3h's physics Discord server. The bot was made by [𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉#6214](http://ilan.shrir.net/).\nHere's a list of commands:")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields
            (
                {
                    name: ';help / ;info',
                    value: 'Shows this message.'
                },
                {
                    name: ';hi',
                    value: 'This command simply answers "hello! 😃"'
                },
                {
                    name: ';kill <@user>',
                    value: 'This command lets you "kill" someone.'
                },
                {
                    name: ';status <type> <status>',
                    value: 'This command lets the bot\'s creator to change the bot\'s status!'
                },
                {
                    name: ';ping',
                    value: 'This command lets you check the bot\'s ping!'
                },
                {
                    name: ';space <@user> / ;launch <@user> / ;dispatch <@user>',
                    value: 'This command lets you launch someone into space.'
                }
            )
	        .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', data.avURL);
        message.channel.send(embed);
    }
}