const fetch = require("node-fetch");

module.exports = 
{
    name: 'kill',
    description: "this command kills. 🙂",
    async execute(message, args, Discord, client)
    {
        let url = `https://api.tenor.com/v1/search?q=kill&key=${process.env.TENORKEY}&limit=25`;
        let response = await fetch(url);
        let json = await response.json();

        let gif = json.results[Math.floor(Math.random() * json.results.length)].url;
        
        try
        {
            let killed = client.users.cache.find(user => user.id === (args[0].replace("<@!", "").replace(">", "")));
            var killedtag = killed.tag;
        }
        catch(e)
        {
            message.channel.send("please provide a valid user mention.");
            return;
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#11f5de')
            .setTitle(`${message.author.tag}   just killed   ${killedtag} !`)
            .setImage(gif)
            .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', "https://cdn.discordapp.com/avatars/381379655665713155/72a78d2d4e892bb0ac00be2e75e9c891.png?size=128");

        message.channel.send(embed);
    }
}