// server. js
const http = require('http')
const PORT = process.env.PORT || 9000
http
    .createServer((req, res) => {
        console.log('New connection')
        res.end('Hallo Cloud run')
    }
    )
    .listen(PORT, () => console.log('Listening on', PORT))