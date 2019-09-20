const core = require('@actions/core');
const github = require('@actions/github');
const slack = require('./slack.js')

messages = {
    'issue': issueAction
}

function issueAction(payload) {
    return `Issue <${payload.issue.html_url}|${payload.issue.title}> has been ${payload.action}`
}

try {
    console.log('Context: ', github.context)
    const payload = github.context.payload
    slack.sendMessage(core.getInput('slack-url'), 'test', err => {
        if (typeof err !== 'undefined') {
            core.setFailed(err)
        }
    })
} catch (error) {
    core.setFailed(error.message);
}