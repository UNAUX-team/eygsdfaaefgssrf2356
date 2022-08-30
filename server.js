let express = require('express')
let path = require('path')
let SocketIO = require('socket.io')

function connect(conn, PORT) {
    let app = global.app = express()
    let qr = 'invalid'
client.baileys.ev.on('connection.update', (conn) => {
  if (conn.qr) { // if the 'qr' property is available on 'conn'
    client.logger.info('QR Generated');
    qr.toFile(resolvePath(__dirname, '..', 'qr.png'), conn.qr); // generate the file
  } else if (conn.connection && conn.connection === 'close') { // when websocket is closed
    if (existsSync(resolvePath(__dirname, '..', 'qr.png'))) { // and, the QR file is exists
      unlinkSync(resolvePath(__dirname, '..', 'qr.png')); // delete it
    }
  }
});

let server = app.listen(PORT, () => console.log('App listened on port', PORT))

module.exports = connect
