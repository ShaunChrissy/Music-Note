const embeds = require("../handlers/embeds.js")
const keywords = require("../handlers/keywords.js")
const emotes = require("../handlers/emotes.js")
const getQueue = require("../utils/getQueue.js")
const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription('Skip the currently playing song'),
    async execute(client, interaction) {
        const queue = await getQueue(client, interaction)
        if (!queue) return

        await queue.skip()
        return interaction.reply({ embeds: [embeds.SuccessEmbed(keywords.SkipSong, emotes.ForwardTrack)] })
    }
}