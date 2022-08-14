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
