/*CMD
  command: /POP777
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

var button = [[{title:"Check User's Balance ", command: "CHECK BALANCE"}],[{title:"Top Refer User", command: "/Top"}],[{title:"Add Balance", command: "/abd"}],[{title:"Set Refer Amount", command: "/SET_REFER"}]]
Bot.sendInlineKeyboard(button," 👤 Admin Panel")

