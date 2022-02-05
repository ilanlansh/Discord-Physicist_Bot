
const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const format = require("./util/format.js");

const client = new Discord.Client();
 
const prefix = ';';

let embedArgs = { };

client.users.fetch(process.env.USERID).then(user => { embedArgs.avURL = user.displayAvatarURL() });
client.users.fetch(process.env.USERID).then(user => { embedArgs.creatorusername = user.username });
embedArgs.color = '#11f5de';

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once("ready", async () =>
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

    if(false) {  }

    else if(command === "donut")
    {
        client.commands.get('donut').execute(message);  // ;donut
    }
    else if(command === "help" || command === "info")
    {
        client.commands.get('help').execute(message, args, Discord, client, embedArgs, format);  // ;help || ;info
    }
    else if(command === "hi")
    {
        client.commands.get('hi').execute(message);  // ;hi
    }
    else if(command === "hug")
    {
        client.commands.get('hug').execute(message, Discord, embedArgs);  // ;hug
    }
    else if(command === "kill")
    {
        client.commands.get('kill').execute(message, Discord, embedArgs);  // ;kill
    }
    else if(command === "nick")
    {
        client.commands.get('nick').execute(message, args, process.env.OFFICERROLEID);  // ;nick
    }
    else if(command === "ping")
    {
        client.commands.get('ping').execute(message);  // ;ping
    }
    if(command === "sheesh")
    {
        client.commands.get('sheesh').execute(message, format);  // ;sheesh
    }
    else if(command in ["space", "launch", "dispatch"])
    {
        client.commands.get('space').execute(message, Discord, embedArgs);  // ;space || ;launch || ;dispatch
    }
    else if(command === "status")
    {
        client.commands.get('status').execute(message, args, client);  // ;status
    }
    else if(command === "wiki")
    {
        client.commands.get('wiki').execute(message, args);  // ;wiki
    }
    else if(command === "otter")
    {
        client.commands.get('otter').execute(message, Discord, embedArgs);  // ;otter
    }
    else if(command === "base")
    {
        client.commands.get('base').execute(message, args);
    }
});

client.login(process.env.TOKEN);