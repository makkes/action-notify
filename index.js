const core = require('@actions/core');
const github = require('@actions/github');

try {
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
    console.log('The environment: ')
    console.log(process.env)
    console.log('The Slack URL: ', core.getInput('slack-url'))
} catch (error) {
    core.setFailed(error.message);
}