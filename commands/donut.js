module.exports = 
{
    name: 'donut',
    description: "donut.\n// (cr: @𝓛𝓘𝓕𝓔-𝓚 𝓖𝓞𝓛𝓓𝓔𝓝#9621)",
    execute(message)
    {
        let url = "./resources/GIFs/spinning_dount.gif";
        message.channel.send({files: [url]});
    }
};