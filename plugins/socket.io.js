import io from 'socket.io-client'
const config = require('../app.config')

const socket = io.connect(config.socket, {
	secure: true,
	rejectUnauthorized: false
})

export default socket
