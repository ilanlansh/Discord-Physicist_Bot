module.exports = 
{
    name: 'sheesh',
    description: "SHEEEEEEEEEEEEESH",
    execute(message, args)
    {
        let url = "./resources/videos/sheesh.mp4";
        message.channel.send({files: [url]});
    }
};