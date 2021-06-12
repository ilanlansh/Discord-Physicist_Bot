module.exports = 
{
    name: 'sheesh',
    description: "SHEEEEEEEEEEEEESH",
    execute(message, format)
    {
        let videos = [
            {
                title: "Sinatraa Sheesh Out Of Existance.",
                name: "sheesh_sinatraa.mp4",
                // path : "./resources/videos/sheesh_sinatraa.mp4"
            },
            {
                title: "Kyedae Sheesh Out Of Existance.",
                name: "sheesh_kyedae.mp4",
                // path: "./resources/videos/sheesh_kyedae.mp4"
            }
        ];
        let video = videos[Math.floor(Math.random() * videos.length)];
        message.channel.send(format.bold(video.title), {files: [`./resources/videos/${video.name}`]});
    }
};