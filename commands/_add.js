/*CMD
  command: /add
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: User I'd Jisko Admin Bnana Hai

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Command : if (user.telegramid == "5122882808") {
  Bot.setProperty("admin" + message + "", "ADMIN", "string")
  Bot.sendMessage(
    "*✅ Successfully Added " + message + " As Admin Of This* [Bot](https://t.me"+bot.name+")"
  )
  Bot.sendMessageToChatWithId(
    message,
    "✅ You Are Now An Admin Of This [Bot](https://t.me"+bot.name+") !\n\n💡 Get Acess To Admin Panel By Sending /panel"
  )
} else {
  Bot.sendMessage("⚠️*You are missing the following rights to use this command:\nCanPromoteMembers*")
}
