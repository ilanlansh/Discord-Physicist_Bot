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
                    value: format.codeblock('txt', require("../help.js").description)
                },
                {
                    name: ';hi',
                    value: format.codeblock('txt', require("../hi.js").description)
                },
                {
                    name: ';sheesh',
                    value: format.codeblock('txt', require("../sheesh.js").description)
                },
                {
                    name: ';ping',
                    value: format.codeblock('txt', require("../ping.js").description)
                },
                {
                    name: ';donut',
                    value: format.codeblock('txt', require("../donut.js").description)
                },
                {
                    name: ';kill <@user>',
                    value: format.codeblock('txt', require("../kill.js").description)
                },
                {
                    name: ';hug <@user>',
                    value: format.codeblock('txt', require("../hug.js").description)
                },
                {
                    name: ';space <@user> / ;launch <@user> / ;dispatch <@user>',
                    value: format.codeblock('txt', require("../space.js").description)
                },
                {
                    name: ';wiki <query>',
                    value: format.codeblock('txt', require("../wiki.js").description)
                },
                {
                    name: ';otter',
                    value: format.codeblock('txt', require("../otter.js").description)
                }
            )
            .setFooter(`Made by ${embedArgs.creatorusername}`, embedArgs.avURL);
        message.channel.send(embed);
    }
};