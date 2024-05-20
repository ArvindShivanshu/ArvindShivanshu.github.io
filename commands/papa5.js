/*CMD
  command: papa5
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

  var stat =
    "*📊 Total members : " +
    status +
    " Users\n\n👁️‍🗨️ Total successful orders : " +
    userPayment.value().toFixed(0) +
    " Follower*"

  Bot.sendMessage(stat)
}
