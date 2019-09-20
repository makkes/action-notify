const request = require('request')

module.exports.sendMessage = (url, message, cb) => {
    console.log(JSON.stringify({ text: message }))
    request({
        url: url,
        method: 'POST',
        body: JSON.stringify({ text: message }),
        headers: {
            'content-type': 'x/www-form-urlencoded'
        }
    }).on('response', resp => {
        if (resp.statusCode !== 200) {
            return cb(`Got unexpected status code ${resp.statusCode}`)
        }
        cb()
    }).on('error', err => {
        return cb(err)
    });
}