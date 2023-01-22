

function encrypt(data) {
    return 'encrypt data';

}


function send(url, data) {
    const encryptdata = encrypt(data);
    console.log(`sending ${encryptdata}`);
}

module.exports = {
    send,
}

console.log("request js page");

function test() {
    return 'hello '
}