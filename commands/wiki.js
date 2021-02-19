const fetch = require("node-fetch");

module.exports =
{
    name: 'wiki',
    description: "This command lets you look up wikipedia pages.",
    async execute(message, args)
    {

        let query = args.join(" ");
        if(!query)
        {
            message.channel.send("Please provide a term to search");
            return;
        }
        message.channel.send(`🔍 searching **${query}** on wikipedia...`);

        let url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query.replace(" ", "_")}`;
        let response = await fetch(url);
        let json = await response.json();

        if(!(json[1].length > 0))
        {
            message.channel.send(`❌ couldn't find **${query}** on wikipedia.`);
            return;
        }

        message.channel.send(`✅ found **${json[1][0]}** on wikipedia.\n${json[3][0]}`);

        // const embed = new Discord.MessageEmbed()
        //     .setColor(embedArgs.color)
        //     .setThumbnail("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
        //     .setTitle(json[1][0])
        //     .setURL(json[3][0])
        //     .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', embedArgs.avURL);

        // message.channel.send(embed);
    }
};