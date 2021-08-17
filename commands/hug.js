const fetch = require("node-fetch");

module.exports = 
{
    name: 'hug',
    description: "This command lets you hug someone! \n// (cr: @L1ghtMare#9051)",
    async execute(message, Discord, embedArgs)
    {
        let query = "hug";
        let url = `https://api.tenor.com/v1/search?q=${query}&key=${process.env.TENORKEY}&limit=50`;
        let response = await fetch(url);
        let json = await response.json();

        let gif = json.results[Math.floor(Math.random() * json.results.length)].media[0].gif.url;
        
        let hugged = message.mentions.members.first();

        if(!hugged)
        {
            message.channel.send("please provide a valid user mention.");
            return;
        }

        const embed = new Discord.MessageEmbed()
            .setColor(embedArgs.color)
            .setTitle(`User   ${message.member.displayName}   just hugged   ${hugged.displayName} !`)
            .setImage(gif)
            .setFooter(`Made by ${embedArgs.creatorusername}`, embedArgs.avURL);

        message.channel.send(embed);
    }
};