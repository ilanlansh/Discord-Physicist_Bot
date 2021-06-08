module.exports =
{
    /**
     * Returns the discord codeblock versrion of a string. (not to be confused with code)
     * @param {string} lang The programming language that the codeblock will be formatted according to. (eg: js / py / php etc..)
     * @param {string} message A string that is meant to be sent as a message.
     * @return {string} A codeblock version of that messgae string.
     */
    codeblock(lang = "txt", message)
    {
        return `\`\`\`${lang}\n${message}\`\`\``;
    },

    /**
     * Returns the discord bold versrion of a string.
     * @param {string} message A string that is meant to be sent as a message.
     * @return {string} A bold version of that messgae string.
     */
    bold(message)
    {
        return `**${message}**`;
    },

    /**
     * Returns the discord italic versrion of a string.
     * @param {string} message A string that is meant to be sent as a message.
     * @return {string} An italic version of that messgae string.
     */
    italic(message)
    {
        return `*${message}*`;
    },

    /**
     * Returns the discord bold & italic versrion of a string.
     * @param {string} message A string that is meant to be sent as a message.
     * @return {string} A bold & italic version of that messgae string.
     */
    bolditalic(message)
    {
        return `***${message}***`;
    },
    
    /**
     * Returns the discord underlined versrion of a string.
     * @param {string} message A string that is meant to be sent as a message.
     * @return {string} An underlined version of that messgae string.
     */
    underline(message)
    {
        return `__${message}__`;
    },

    /**
     * Returns the discord strikethrough versrion of a string.
     * @param {string} message A string that is meant to be sent as a message.
     * @return {string} A strikethrough version of that messgae string.
     */
    strikethrough(message)
    {
        return `~~${message}~~`;
    },

    /**
     * Returns the discord spolier versrion of a string.
     * @param {string} message A string that is meant to be sent as a message.
     * @return {string} A spoiler version of that messgae string.
     */
    spoiler(message)
    {
        return `||${message}||`;
    },

    /**
     * Returns the discord code versrion of a string. (not to be confused with codeblock)
     * @param {string} message A string that is meant to be sent as a message.
     * @return {string} A code version of that messgae string.
     */
    code(message)
    {
        return `\`${message}\``;
    },
}