This repo uses slackjs and cron to automatically send a message at a certain time.

Example:
You can set it to send a message "Hello World", at 3AM (because everyone is avaliable at 3am)

Setup on Slack:
1. Create an app on slack:
https://api.slack.com/custom-integrations
2. Click set up an incoming webhook
3. Add configuration
4. Choose a channel
5. You should be given a webhook URL:
    Example: https://hooks.slack.com/services/TWELKFJSLFP/LKJRL23KJLK/KDGJALKJ3LKJLASJDFLKJA

Setup on github:
1. clone this repo:
    $ git clone git@github.com:leon-do/slackJS.git
2. cd slackjs
3. open the folder slackjs
4. open the file app.js
5. replace SLACK_URL_HERE with the webhook URL
    Example: https://hooks.slack.com/services/TWELKFJSLFP/LKJRL23KJLK/KDGJALKJ3LKJLASJDFLKJA

Run in terminal:
1. (make sure node is installed)
2. $ node app.js
3. you should see a message in your slack channel