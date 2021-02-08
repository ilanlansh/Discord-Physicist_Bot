module.exports =
{
    /**
     * Returns the discord codeblock versrion of a string.
     * @param {string} message A string that is meant to be sent as a message.
     * @return {string} A codeblock version of that messgae string.
     */
    codeblock: (message) =>
    {
        return `\`\`\`${message}\`\`\``;
    }
}