const readlineSync = require('readline-sync');

console.log("Welcome to the Fake News detector Tool");

const news = readlineSync.question("Enter Your News that you want to check ");

const newsList = ['Instagram', 'Facebook', 'Telegram', 'Whatsapp', 'others'];

var index = readlineSync.keyInSelect(newsList, 'Enter The source of the news');

if (index==0 || index==1 || index==2 || index==3) {
  console.log(news, "is fake")
}
else if (index==4) {
  console.log(news, "is absolutely true")
}