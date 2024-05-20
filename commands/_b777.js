/*CMD
  command: /b777
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: amt

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "5122882808"
if (user.telegramid == key){
let amount = parseFloat(message);
let tgid = User.getProperty("id");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*Succesfully Added Balance* \n*👤 User = "+tgid+"\n💰 Amount= "+amount+"*");
}else{
return
}
