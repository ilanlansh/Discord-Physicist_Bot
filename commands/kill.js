const fetch = require("node-fetch");

module.exports = 
{
    name: 'kill',
    description: "This command lets you kill someone!",
    async execute(message, args, Discord, client, embedArgs)
    {
        let query = "kill";
        let url = `https://api.tenor.com/v1/search?q=${query}&key=${process.env.TENORKEY}&limit=50`;
        let response = await fetch(url);
        let json = await response.json();

        let gif = json.results[Math.floor(Math.random() * json.results.length)].media[0].gif.url;
        
        let killed = message.mentions.members.first();

        if(!killed)
        {
            message.channel.send("please provide a valid user mention.");
            return;
        }

        const embed = new Discord.MessageEmbed()
            .setColor(embedArgs.color)
            .setTitle(`User   ${message.member.displayName}   just killed   ${killed.displayName} !`)
            .setImage(gif)
            .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', embedArgs.avURL);

        message.channel.send(embed);
    }
};