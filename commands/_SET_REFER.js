/*CMD
  command: /SET_REFER
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: How Many Points You Want Per Refer 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("admin" + user.telegramid)
var button1 = [[{title:"Add Admins",command:"addba"}]]
if (admin == "ADMIN")
{
Bot.sendMessage("*✅ Per Refer Set To :* "+message+" *Point*")
var refe = Bot.setProperty("refe",message, "string")}else{
Bot.sendInlineKeyboard(button1,"⚠️ *You need to be an admin to do this.*")
}
