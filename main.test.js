const ChatBot = require('./main')


// Testing using first verse and chorus lyrics to Andrew WK - "Party Hard" as message text
var testLyric = new ChatBot();
testLyric.handleUserMessage(
  "User1: You, you work all night (all night!) And when you work you just feel all right And when, when things stop feeling all right (all right!) And everything is all right"
);
testLyric.handleUserMessage(
  "User2: 'Cause we will never listen to your rules (No!) We will never do as others do (No!) Know what we want and we get it from you Do what we like and we like what we do"
);
testLyric.handleUserMessage(
  "User3: So let's get a party going (Let's get a party going!) Now it's time to party and we'll party hard (party hard!) Let's get a party going (Let's get a party going!) When it's time to party, we will always party hard"
);
testLyric.handleUserMessage(
  "Chorus: Party hard! (Party hard, party hard, party hard, party hard, party hard, party hard, party hard) Party hard! (Party hard, party hard, party hard, party hard, party hard, party party, party hard) Party hard!"
);
console.log(testLyric.generateTopTenMessage())

// Testing that output resets every time generateTopTenMessage runs
testLyric.handleUserMessage(
    "Chorus: Party hard! (Party hard, party hard, party hard, party hard, party hard, party hard, party hard) Party hard! (Party hard, party hard, party hard, party hard, party hard, party party, party hard) Party hard!"
  );
console.log(testLyric.generateTopTenMessage())