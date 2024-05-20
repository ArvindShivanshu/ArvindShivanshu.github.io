/*CMD
  command: 👥 Order Follower
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*➡️ Send Instagram Profile Link Where You Want To Get Followers 🔗

 ⚠️ Make Sure Your Account Is Public *
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let Link = User.getProperty("Link")
User.setProperty("Link" , data.message ,"string")
Bot.runCommand("auto")
