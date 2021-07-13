const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
require('discord-buttons')(bot);
const {buttube} = require('buttube')
bot.buttube = new buttube(bot, "mongodb url")
const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');
bot.on('clickButton', async(button) => {
  bot.buttube.button(button)
})
require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

bot.login(config.token);
