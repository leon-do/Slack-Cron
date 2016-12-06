<h1> This repo uses slack-node and cronJob to automatically send a message at a certain time. </h1>

Example:
Slack the message "hello world", at 3AM (because everyone is avaliable at 3am)

<h2>Setup on Slack: </h2>
1. Create an app on slack: https://api.slack.com/custom-integrations

2. Click set up an incoming webhook

3. Add configuration

4. Choose a channel

5. You should be given a webhook URL:

    Example:
    https://hooks.slack.com/services/TWELKFJSLFP/LKJRL23KJLK/KDGJALKJ3LKJLASJDFLKJA




<h2> Setup on github:</h2>

1. clone this repo:
    <code> $ git clone git@github.com:leon-do/slackJS.git </code>

2. <code> $ cd slackjs </code>

3. open the folder slackjs

4. open the file app.js

5. replace SLACK_URL_HERE with the webhook URL

    Example:
    https://hooks.slack.com/services/TWELKFJSLFP/LKJRL23KJLK/KDGJALKJ3LKJLASJDFLKJA




<h2> Run in terminal:</h2>

1. (make sure node is installed)

2. <code> $ node app.js </code>

3. you should see a message in your slack channel
