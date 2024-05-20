/*CMD
  command: YADAV
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

var userstat = User.getProperty("status")
var refe = Bot.getProperty("refe")
var referred = User.getProperty("referred")
if (
  (userstat == "member") |
  (userstat == "administrator") |
  (userstat == "creator")
) {}
Bot.sendKeyboard(
    "👥 Order Follower,➕ Refer Friends\n👤 Balance,❤️ Free Likes\nBonus 🎁",
    "*🏡 Our Official Channel \n  https://t.me/+TsEZ3Lvczik0OTFl*"
  )
  if (referred == undefined) {
    let refUser = Libs.ReferralLib.currentUser.attractedByUser()
    if (refUser) {
      var balanceref = Libs.ResourcesLib.anotherUserRes(
        "balance",
        refUser.telegramid
      )
      balanceref.add(+refe)





Bot.sendInlineKeyboard([[{title:"✅ Check",command:"checkr "+refUser.chatId+""}]],"*💹 To Check Who Invited You, Click On '✅ Check'*")





      Bot.sendMessageToChatWithId(
        refUser.chatId,
        "*😍 Refer "+refe+" Points Added To Your Balance*"
      )
      User.setProperty("referred", user.telegramid, "integer")
    }
  }
  var balance = Libs.ResourcesLib.userRes("balance")
var ref = Libs.ResourcesLib.userRes("referral")
  var msgid = User.getProperty("msgid")
  Api.deleteMessage({
    message_id: msgid
  })
