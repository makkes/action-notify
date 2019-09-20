const core = require('@actions/core');
const github = require('@actions/github');
const slack = require('./slack.js')

try {
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`Payload: ${payload['issue']}`)
    slack.sendMessage(core.getInput('slack-url'), `Issue <'${payload.issue.html_url}'|'"${payload.issue.title}"'> has been '${payload.action}'`, err => {
        core.setFailed(err)
    })
} catch (error) {
    core.setFailed(error.message);
}