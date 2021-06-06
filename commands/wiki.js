const fetch = require("node-fetch");

module.exports =
{
    name: 'wiki',
    description: "This command lets you look up wikipedia pages.",
    async execute(message, args)
    {

        let query = args.join(" ");
        if(!query)
        {
            message.channel.send("Please provide a term to search");
            return;
        }
        message.channel.send(`🔍 searching **${query}** on wikipedia...`);

        let url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query.replace(" ", "_")}`;
        let response = await fetch(url);
        let json = await response.json();

        if(!(json[1].length > 0))
        {
            message.channel.send(`❌ couldn't find **${query}** on wikipedia.`);
            return;
        }

        if(json[3].length >= 5)
        {
            message.channel.send(`✅ top 5 results for **${query}** on wikipedia:
            🔗1️⃣ **${json[1][0]}:**  ${json[3][0]}
            🔗2️⃣ **${json[1][1]}:**  ${json[3][1]}
            🔗3️⃣ **${json[1][2]}:**  ${json[3][2]}
            🔗4️⃣ **${json[1][3]}:**  ${json[3][3]}
            🔗5️⃣ **${json[1][4]}:**  ${json[3][4]}`);
        }
        else
        {
            message.channel.send(`✅ top result for **${query}** on wikipedia:
            🔗 **${json[1][0]}:**  ${json[3][0]}`);
        }
    }
};