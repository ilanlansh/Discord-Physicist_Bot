module.exports = 
{
    name: 'sheesh',
    description: "SHEEEEEEEEEEEEESH",
    execute(message, args)
    {
        let urls = ["./resources/videos/sheesh_sinatraa.mp4", "./resources/videos/sheesh_kyedae.mp4"];
        let url = urls[Math.floor(Math.random()*urls.length)];
        message.channel.send({files: [url]});
    }
};