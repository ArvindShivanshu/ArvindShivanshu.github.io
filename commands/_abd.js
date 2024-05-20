/*CMD
  command: /abd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: UID

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "5122882808"
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/b777");
}else{
return
}
