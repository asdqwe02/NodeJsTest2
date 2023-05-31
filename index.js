var http = require('http')
const { EventEmitter } = require('events');
const { readFile, readFileSync } = require('fs').promises;
const { testExport } = require('./testExport')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('hello world!')
})

server.listen(8080, 'localhost', (err) => {
    if (err)
        console.log(err)
    else
        console.log('server is listenting to localhost:8080')

})

const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yummer');
})
eventEmitter.emit('lunch')

// const txt = readFile('./hello.txt', 'utf-8', (err, txt) => {
//     console.log(txt);
// })

async function hello() {
    console.log('waiting for file to read')
    const file = await readFile('./hello.txt', 'utf-8');
    console.log(file)
}

hello()
testExport()
