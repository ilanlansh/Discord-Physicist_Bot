module.exports = 
{
    execute(message, Discord, client, embedArgs, format)
    {
        const embed = new Discord.MessageEmbed()
            .setColor(embedArgs.color)
            .setTitle("Commands (1/1)")
            .setDescription("A list of commands:")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields
            (
                {
                    name: ';help / ;info',
                    value: format.codeblock(require("../help.js").description)
                },
                {
                    name: ';hi',
                    value: format.codeblock(require("../hi.js").description)
                },
                {
                    name: ';ping',
                    value: format.codeblock(require("../ping.js").description)
                },
                {
                    name: ';kill <@user>',
                    value: format.codeblock(require("../kill.js").description)
                },
                {
                    name: ';space <@user> / ;launch <@user> / ;dispatch <@user>',
                    value: format.codeblock(require("../space.js").description)
                },
                {
                    name: ';wiki <query>',
                    value: format.codeblock(require("../wiki.js").description)
                }
            )
            .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', embedArgs.avURL);
        message.channel.send(embed);
    }
};