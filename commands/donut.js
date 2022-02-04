module.exports = 
{
    name: 'donut',
    description: "donut.",
    execute(message)
    {
        let url = "./resources/GIFs/spinning_dount.gif";
        message.channel.send({files: [url]});
    }
};