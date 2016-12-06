var Slack = require('slack-node');
var CronJob = require('cron').CronJob;



//every second, do this
new CronJob('* * * * * *', function() {

    webhookUri = "SLACK_URL_HERE";

    slack = new Slack();
    slack.setWebhook(webhookUri);

    slack.webhook({
      channel: "#general",
      username: "slackJS",
      text: "hello world",
    }, function(err, response) {
      console.log(response);
    });

}, null, true, 'America/New_York');
