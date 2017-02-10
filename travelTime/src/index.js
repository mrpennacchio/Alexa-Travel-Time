//initiate Alexa object and node alexa modules

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
};





//card
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"Here is your expected travel time."},
    "card": {
      "type": "Simple",
      "title": "Travel time from "+ startCity + " to " + endCity ".",
      "content": "Your approximate travel time from "+ startCity + " to " + endCity "\nis " + travelDuration + "."
    }
  }
}
