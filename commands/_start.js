/*CMD
  command: /start
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

Api.sendPhoto({
  photo: "https://telegra.ph/file/ea3468e1caf0703ae8962.jpg", // it is picture!
  caption: " *• This Is Free Instagram Follower Bot, Hurry Up..!*",
parse_mode : "Markdown" ,







  reply_markup: { inline_keyboard: [
    [
      { text: "", callback_data: "✅ Joined" },{text: "", callback_data: "Help" }
    ]]}
});
var button = [
  [
    
    { title: "Channel", url: "https://t.me/+TsEZ3Lvczik0OTFl" },
    { title: "Channel", url: "https://t.me/Yash_hacking_1" }
  ],
  [
    { title: "Channel", url: "https://t.me/+Vxftw0W9wiJhOGNl" },
    { title: "Channel", url: "https://t.me/khatri_loots" }
  ],
  [
    { title: "Check ✅", command: "✅ Joined" }
    
  ]

]




Bot.sendInlineKeyboard(button, "*➡️ Aꜰᴛᴇʀ ᴊᴏɪɴɪɴɢ All Channel, ᴄʟɪᴄᴋ ᴏɴ 'Check ✅'*")
function hello(message) {
var greetings = ""





Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
hello("")
var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
balance.add(0)
Bot.sendMessageToChatWithId(refUser.chatId, "*🏧 New Referral : +50 Point*");
}

function doAlreadyAttracted(){
Bot.sendMessage("**");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAttracted: doAttracted,
onAtractedByUser: doAtractedByUser,
onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
