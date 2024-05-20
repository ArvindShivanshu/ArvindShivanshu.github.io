/*CMD
  command: CHECK BALANCE
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send User I'd Jiska Balance Dekhna Hai

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

const admin = 5122882808
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
var b = 
Libs.ResourcesLib.anotherUserRes("balance",message)
Bot.sendMessage("*Balance Of User "+message+" is* "+b.value())
}else{
Bot.sendMessage("You Are Not An Admin")
}
