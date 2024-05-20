/*CMD
  command: VBMENUST
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

var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat=="creator"){

if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(50)
  Bot.sendMessageToChatWithId(refUser.chatId, "_You Have Received 50 Points From "+user.first_name+"_")
User.setProperty("referbonus", user.telegramid, "integer")}
}

var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("👥 Order Follower,➕ Refer Friends\n👤 Balance, ❤️ Free Likes\nBonus 🎁,", "*🏡 Our Official Channel /n https://t.me/+TsEZ3Lvczik0OTFl*")
}
if (userstat=="left"){
Bot.runCommand("/start");
}
