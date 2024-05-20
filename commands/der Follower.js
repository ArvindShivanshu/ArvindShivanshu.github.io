/*CMD
  command: der Follower
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: * Send Profile Link Where You Want To Get Followers (Make Sure Your Account Is Public 🚨)*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let Link = User.getProperty("Link")
User.setProperty("Link" , data.message ,"string")
Bot.runCommand("autor")
