/*CMD
  command: ➕ Refer Friends
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

Api.sendChatAction({ 
  chat_id: chat.chatid, 
  action: "typing" 
}) 
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink("InstagramFollowRoBot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*🙌🏻 User = : "+user.first_name+"\n\n♨️ Rᴇꜰᴇʀ Aɴᴅ Gᴇᴛ 25 Follower Fᴏʀ Eᴠᴇʀʏ Usᴇʀ Yᴏᴜ Iɴᴠɪᴛᴇ\\n\n 🗃️ Your Invite Link ="+reflink+"*");

}
