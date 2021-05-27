class ChatBot {
  constructor() {
    this.chatlog = "";
    this.wordCount = {};
  }

  handleUserMessage(message) {
    // Use only text after Username in message.  ASSUMPTION: Username must exist and cannot contain ":"
    const usernameIndex = message.search(": ");
    const messageText = message.slice(usernameIndex + 2, message.length);
    // remove punctuation from string and add to chatlog
    const adjustedMessage = messageText
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "")
      .replace(/s{2,}/g, " ");
    if (this.chatlog) {
      this.chatlog += " " + adjustedMessage;
    } else {
      this.chatlog += adjustedMessage;
    }
  }

  generateTopTenMessage() {
    // Create word bank array
    let outputString = "";
    const messageArray = this.chatlog.split(" ");
    for (var i = 0; i < messageArray.length; i++) {
      this.wordCount[messageArray[i]] =
        (this.wordCount[messageArray[i]] || 0) + 1;
    }
    // Sort by most occuring words
    const sortable = Object.fromEntries(
      Object.entries(this.wordCount).sort(([, a], [, b]) => b - a)
    );
    // Return 10 most occuring words and count in string
    const sortedArray = Object.entries(sortable).slice(0, 10);
    for (var x in sortedArray) {
      outputString += sortedArray[x][0] + ": " + sortedArray[x][1] + ", ";
    }
    // clear chatlog and wordCount so words only show from between function runs
    this.chatlog = "";
    this.wordCount = {};
    // console.log(outputString.slice(0, -2))
    return outputString.slice(0, -2);
  }
}

module.exports = ChatBot