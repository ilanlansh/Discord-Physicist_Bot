module.exports = 
{
    name: 'help',
    description: "This command sends info and instructions about the bot.",
    execute(message, args, Discord, client, embedArgs, format)
    {
        arg = args.join(" ");
        if(!arg)
        {
            const embed = new Discord.MessageEmbed()
            .setColor(embedArgs.color)
            .setTitle("Help / Info")
            .setDescription("This bot was made for Yaakov Hameiri's school Discord server. Made by [𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉#6214](http://github.com/ilanlansh/Discord-Physicist_Bot).")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields
            (
                {
                    name: 'For a list of commands',
                    value: 'type `;help commands`',
                },
                {
                    name: 'For a list of administrator commands',
                    value: 'type `;help admin`',
                }
            )
            .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', embedArgs.avURL);
            message.channel.send(embed);
        }
        else if(arg === 'admin')
        {
            require("./help/admin.js").execute(message, Discord, client, embedArgs, format);
        }
        else if(arg === 'commands')
        {
            require("./help/commands.js").execute(message, Discord, client, embedArgs, format);
        }
        else
        {
            message.channel.send("Invalid argument. Type ;help or ;info for more information.");
        }
    }
};