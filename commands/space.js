const fetch = require("node-fetch");

module.exports = 
{
    name: 'space',
    description: "This command lets you launch someone into space.",
    async execute(message, Discord, embedArgs)
    {
        let url = `https://api.tenor.com/v1/search?q=rocket&key=${process.env.TENORKEY}&limit=50`;
        let response = await fetch(url);
        let json = await response.json();

        let gif = json.results[Math.floor(Math.random() * json.results.length)].media[0].gif.url;
        
        let launched = message.mentions.members.first();

        if(!launched)
        {
            message.channel.send("please provide a valid user mention.");
            return;
        }

        const embed = new Discord.MessageEmbed()
            .setColor(embedArgs.color)
            .setTitle(`User   ${message.member.displayName}   just launched   ${launched.displayName}   into space!`)
            .setImage(gif)
            .setFooter(`Made by ${embedArgs.creatorusername}`, embedArgs.avURL);

        message.channel.send(embed);
    }
};