var Slack = require('slack-node');
var CronJob = require('cron').CronJob;

// ===== the questions ====


var myQA = [
    {
        question: "hello1?",
        answer:"Hi1"
    }
    ,
    {
        question:"hello2?",
        answer:"hi2"
    }
]


// ===== the brains =======
var myIndex;

// at 3:02:01 AM, do this
new CronJob('1 2 3 * * *', function() {

    //get a random question
    myIndex = Math.floor(Math.random()*myQA.length)

    webhookUri = "SLACK_URL_HERE";

    slack = new Slack();
    slack.setWebhook(webhookUri);

    slack.webhook({
      channel: "web_hooks2",
      username: "slackJS",
      text: myQA[myIndex].question,
    }, function(err, response) {
      console.log(response);
    });

}, null, true, 'America/New_York');





// at 06:05:04 PM, do this
new CronJob('4 5 18 * * *', function() {

    webhookUri = "https://hooks.slack.com/services/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";

    slack = new Slack();
    slack.setWebhook(webhookUri);

    slack.webhook({
      channel: "web_hooks2",
      username: "slackJS",
      text: myQA[myIndex].answer,
    }, function(err, response) {
      console.log(response);
    });


}, null, true, 'America/New_York');
