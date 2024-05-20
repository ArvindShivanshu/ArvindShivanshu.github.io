/*CMD
  command: addba
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("admin" + user.telegramid)
var button1 = [[{title:"Add Admins",command:"add|a|new|admin"}]]
if (admin == "ADMIN"){
let amount = parseFloat(message);
let tgid = User.getProperty("id");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("✅ Successfully Added Balance \n\n💰 Balance Of "+amount+" Views ADDED\n\n⛔ For User ["+tgid+"](tg://user?id="+tgid+")\n✅ Updated balance : "+res.value().toFixed(2)+" Points");
Bot.sendMessageToChatWithId(tgid,"* 😻Your Deposit Successful \n\n🥰Increase Balance Of "+amount+" Coins*")
}else{
Bot.sendInlineKeyboard(button1,"⚠️ *You need to be an admin to do this.*")
}
