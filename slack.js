const request = require('request')

module.exports.sendMessage = (url, message, cb) => {
    request.post(url).form(JSON.stringify({ text: message }))
        .on('response', resp => {
            if (resp.statusCode !== 200) {
                return cb(`Got unexpected status code ${resp.statusCode}`)
            }
            cb()
        }).on('error', err => {
            return cb(err)
        });
}