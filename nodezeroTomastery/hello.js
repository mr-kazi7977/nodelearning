const http = require('https');


const requets = http.request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk ${chunk}`);
    });

    res.on('end', () => {
        console.log(`no more data`);
    })
})
requets.end();

