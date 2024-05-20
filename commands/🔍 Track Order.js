/*CMD
  command: 🔍 Track Order
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Order I'd 💳

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "15b24eaf5f1a50cc1f639b6bec7d20ce"
var numb = ""+message+""

HTTP.post({
  url:
    "https://imperialsmm.in/api/v2?key="+key+"&action=status&order="+message+"",
success:"/done"});

