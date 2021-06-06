
const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const format = require("./util/format.js")

const client = new Discord.Client();
 
const prefix = ';';

let embedArgs = { };

client.users.fetch(process.env.USERID).then(user => { embedArgs.avURL = user.displayAvatarURL() });
embedArgs.color = '#11f5de';

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
    client.user.setActivity(";help | ;info", { type: 'PLAYING' });
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
        client.commands.get('help').execute(message, args, Discord, client, embedArgs, format);
    }
    else if(command === "kill")
    {
        client.commands.get('kill').execute(message, args, Discord, client, embedArgs);
    }
    else if(command === "status")
    {
        client.commands.get('status').execute(message, args, client);
    }
    else if(command === "space" || command === "launch" || command === "dispatch")
    {
        client.commands.get('space').execute(message, args, Discord, embedArgs);
    }
    else if(command === "nick")
    {
        client.commands.get('nick').execute(message, args, process.env.OFFICERROLEID);
    }
    else if(command === "wiki")
    {
        client.commands.get('wiki').execute(message, args);
    }
    // else if(command === "say")
    // {
    //     message.channel.send(args.join(" "));
    // }
});

client.login(process.env.TOKEN);
