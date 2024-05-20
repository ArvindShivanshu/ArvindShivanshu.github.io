/*CMD
  command: auto2
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

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("_You're Ban_")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var link = User.getProperty("Link")
  var totalPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  totalPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")

  if (message < 100) {
    Bot.sendMessage("_❌ Minimum Order Is 100 Follower_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Withdraw " + balance.value().toFixed(6) + " 100_"
      )
    } else {
      var url = "https://makemecelebrity.in/api/v2?action=add&service=1&link=" + link + "&quantity=" + message "&key=yourKey"
       

      HTTP.get({
        url: url,
        success: "/onSuccess"
      })

      balance.add(-message)
      Api.sendMessage({
        chat_id: "@joinxyza",
        text:
          "*📄 New Order Submitted  \n\n✅ Status = Done\n🆔 User ID = " +
          user.telegramid +
          "\n❤‍🔥 Amount = " +
          message +
          " Follower\n\n🔗 Profile Link =\n " +
          link +
          "\n\n👮🏻‍♂ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown",
        disable_web_page_preview: true
      })
    }
  }
}

