import io from 'socket.io-client'
const config = require('../app.config')

const socket = io.connect(config.socket)

export default socket
