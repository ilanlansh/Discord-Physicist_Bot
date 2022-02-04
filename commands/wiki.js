const fetch = require("node-fetch");

module.exports =
{
    name: 'wiki',
    description: "This command lets you look up wikipedia pages.",
    /**
     * @param {Discord.message} message 
     * @param {string[]} args 
     */
    async execute(message, args)
    {

        let query = args.join(" ");
        if(!query)
        {
            message.channel.send("Please provide a term to search.");
            return;
        }
        if(!/^[A-Z0-9 ]+$/gi.test(query))
        {
            message.channel.send("Query can only contain alphanumeric characters.");
            return;
        }

        message.channel.send(`🔍 searching **${query}** on wikipedia...`);

        let url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query.replace(" ", "_")}`;
        let response = await fetch(url);
        let json = await response.json();

        let queries = json[1];
        let urls = json[3];

        if(!(queries.length > 0))
        {
            message.channel.send(`❌ couldn't find **${query}** on wikipedia.`);
            return;
        }

        if(urls.length >= 5)
        {
            message.channel.send([`✅ top 5 results for **${query}** on wikipedia:`,
                `\t🔗1️⃣ **${queries[0]}:**  ${urls[0]}`,
                `\t🔗2️⃣ **${queries[1]}:**  ${urls[1]}`,
                `\t🔗3️⃣ **${queries[2]}:**  ${urls[2]}`,
                `\t🔗4️⃣ **${queries[3]}:**  ${urls[3]}`,
                `\t🔗5️⃣ **${queries[4]}:**  ${urls[4]}`
            ].join('\n'));
        }
        else
        {
            message.channel.send(`✅ top result for **${query}** on wikipedia:
            🔗 **${json[1][0]}:**  ${json[3][0]}`);
        }
    }
};