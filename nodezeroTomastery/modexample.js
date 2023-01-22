// const { request } = require("http")

const request = require('./request')
const response = require('./response')



function makereq(url, data) {
    request.send('www', 'data module');
    return response.read('readnow', 'data read')
}

const mak = makereq('data', 'now');
console.log(mak);