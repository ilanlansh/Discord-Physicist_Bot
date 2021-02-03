const fetch = require("node-fetch");

module.exports = 
{
    name: 'kill',
    description: "this command kills. 🙂",
    async execute(message, args, Discord, client, embedArgs)
    {
        let url = `https://api.tenor.com/v1/search?q=kill&key=${process.env.TENORKEY}&limit=50`;
        let response = await fetch(url);
        let json = await response.json();

        let gif = json.results[Math.floor(Math.random() * json.results.length)].media[0].gif.url;
        
        let killed = message.mentions.users.first();

        if(!killed)
        {
            message.channel.send("please provide a valid user mention.");
            return;
        }

        const embed = new Discord.MessageEmbed()
            .setColor(embedArgs.color)
            .setTitle(`User   ${embedArgs.guild.member(message.author).displayName}   just killed   ${embedArgs.guild.member(killed).displayName} !`)
            .setImage(gif)
            .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', embedArgs.avURL);

        message.channel.send(embed);
    }
}