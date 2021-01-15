
const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');

const client = new Discord.Client();
 
const prefix = ';';

const creatorAvatarUrl = client.guilds.cache.find(guild => guild.id === "775377823753568277").members.cache.find(user => user.id === "381379655665713155").user.displayAvatarURL();
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once("ready", () =>
{
    console.log(`Logged in as ${client.user.tag}!\n`);
    
    client.user.setStatus("Online");
    client.user.setActivity("a Flying Rocket", { type: 'WATCHING' });
});

client.on("message", message =>
{
    if(!message.content.startsWith(prefix) || message.author.bot) { return; }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "hi")
    {
        client.commands.get('hi').execute(message, args);
    }
    else if(command === "ping")
    {
        client.commands.get('ping').execute(message, args);
    }
    else if(command === "info" || command === "help")
    {
        client.commands.get('help').execute(message, args, Discord, creatorAvatarUrl);
    }
    else if(command === "kill")
    {
        client.commands.get('kill').execute(message, args, Discord, client, creatorAvatarUrl);
    }
    else if(command === "status")
    {
        client.commands.get('status').execute(message, args, client);
    }
    else if(command === "space" || command === "launch" || command === "dispatch")
    {
        client.commands.get('space').execute(message, args, Discord, client, creatorAvatarUrl);
    }
});

client.login(process.env.TOKEN);
