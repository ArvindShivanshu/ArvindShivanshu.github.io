/*CMD
  command: /sendinh
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: email

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("wow we sent the bot to your bot.business account instantly 😘")
