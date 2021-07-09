const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const disbut = require('discord-buttons')(bot);
const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');
const DisTube = require('distube')
bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
 .on("playSong", (message, queue, song) =>{
 const embed1 = new Discord.MessageEmbed()
    .setTitle(`Now Playing ${song.name}`)
    .setImage(`${song.thumbnail}`)  
  bot.msg.edit(embed1)
    })
	.on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ).then(m => m.delete({ timeout: 5000 })
    ))
.on("finish", (message, que, song) =>{
const embed = new Discord.MessageEmbed()
    .setTitle('Not Playing')
    .setImage(`https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-260nw-1960131820.jpg`)
    bot.msg.edit(embed)
    });
bot.on('clickButton', async(button) => {
 const embed = new Discord.MessageEmbed()
    .setTitle('Not Playing')
    .setImage(`https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-260nw-1960131820.jpg`)
  const message = button.message;
  if(button.id == 'stop'){
    bot.distube.stop(message)
    button.message.edit(embed)
    button.reply.send('Stopped', true)
  }else if(button.id == 'pause'){
    bot.distube.pause(message)
    button.reply.send('Paused', true)
  }else if(button.id == 'resume'){
    bot.distube.resume(message)
    button.reply.send('Resumed', true)
  }else if(button.id == 'que'){
    let queue = bot.distube.getQueue(message);
        let curqueue = queue.songs.map((song, id) =>
        `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).join("\n");
    button.reply.send(curqueue).then(m => m.delete({ timeout: 300000 }))
  }else if(button.id == 'skip'){
    bot.distube.skip(message)
    button.reply.send('Skipped', true)
}
})
require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

bot.login(config.token);
