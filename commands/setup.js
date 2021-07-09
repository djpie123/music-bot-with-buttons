const { MessageButton, MessageActionRow } = require('discord-buttons'); 
const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
  message.delete()
  this.bot = bot
  const stop = new MessageButton()
.setLabel('stop')
.setStyle('red')
.setID('stop')
const pause = new MessageButton()
.setLabel('pause')
.setStyle('blurple')
.setID('pause')
const resume = new MessageButton()
.setLabel('resume')
.setStyle('green')
.setID('resume')
const skip = new MessageButton()
.setLabel('skip')
.setStyle('grey')
.setID('skip')
const que = new MessageButton()
.setLabel('Get que')
.setStyle('blurple')
.setID('que')
const row = new MessageActionRow()
.addComponent(stop)
.addComponent(pause)
.addComponent(resume)
.addComponent(skip)
.addComponent(que)
    const embed = new Discord.MessageEmbed()
    .setTitle('Not Playing')
    .setImage(`https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-260nw-1960131820.jpg`)
  bot.msg = await  message.channel.send(embed, row)
}
module.exports.config = {
    name: "setup",
    aliases: ["s"]
}