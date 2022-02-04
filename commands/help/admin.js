module.exports = 
{
    execute(message, Discord, client, embedArgs, format)
    {
        const embed = new Discord.MessageEmbed()
            .setColor(embedArgs.color)
            .setTitle("Administrator Commands (1/1)")
            .setDescription("These commands are only available for members with administrator permission.")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields
            (
                {
                    name: ';nick <@user> <(nickname)|reset>',
                    value: format.codeblock('txt', require("../nick.js").description)
                },
                {
                    name: ';status <type> <status>',
                    value: format.codeblock('txt', require("../status.js").description)
                }
            )
            .setFooter(`Made by ${embedArgs.creatorusername}`, embedArgs.avURL);
        message.channel.send(embed);
    }
};