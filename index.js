const core = require('@actions/core');
const github = require('@actions/github');
const slack = require('./slack.js')

const messages = context => {
    switch (context.eventName) {
        case 'issues':
            return issueAction
        default:
            throw `unknown event: ${context.eventName}`
    }
}

const issueAction = (payload) => {
    return `Issue <${payload.issue.html_url}|${payload.issue.title}> has been ${payload.action}`
}

try {
    slack.sendMessage(core.getInput('slack-url'), messages(github.context)(github.context.payload), err => {
        if (typeof err !== 'undefined') {
            core.setFailed(err)
        }
    })
} catch (error) {
    core.setFailed(error);
}