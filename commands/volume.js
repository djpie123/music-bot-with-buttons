module.exports.run = async (bot, message, args) => {
   
  
    bot.buttube.volume(message, args[0]);
}

module.exports.config = {
    name: "volume",
    aliases: ['vol']
}
