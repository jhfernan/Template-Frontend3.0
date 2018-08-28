import socketClient from 'socket.io-client'
const config = require('../app.config')

const socket = socketClient(config.socket)

export default socket
