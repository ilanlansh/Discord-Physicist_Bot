const fetch = require("node-fetch");

module.exports = 
{
    name: 'otter',
    description: "This command sends a random otter GIF!",
    async execute(message, Discord, embedArgs)
    {
        let query = "otter";
        let url = `https://api.tenor.com/v1/search?q=${query}&key=${process.env.TENORKEY}&limit=50`;
        let response = await fetch(url);
        let json = await response.json();

        let gif = json.results[Math.floor(Math.random() * json.results.length)].media[0].gif.url;

        const embed = new Discord.MessageEmbed()
            .setColor(embedArgs.color)
            .setTitle(`Otters are the best!`)
            .setImage(gif)
            .setFooter(`Made by ${embedArgs.creatorusername}`, embedArgs.avURL);

        message.channel.send(embed);
    }
};