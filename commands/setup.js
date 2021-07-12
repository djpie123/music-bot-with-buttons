const { MessageButton, MessageActionRow } = require('discord-buttons'); 
const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
bot.buttube.setup(message);
}
module.exports.config = {
    name: "setup",
    aliases: ["s"]
}