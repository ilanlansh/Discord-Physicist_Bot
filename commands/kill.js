module.exports = 
{
    name: 'kill',
    description: "this command kills 🙂.",
    execute(message, args)
    {
        killed = args[0];
        id = killed.replace("<!", "").replace(">", "");

        console.log(id);

        message.channel.send("command under development...");
    }
}