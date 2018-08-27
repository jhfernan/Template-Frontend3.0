<template>
	<div>
		<ul class="pages">
			<li class="chat page">
				<div class="chatArea">
					<ul class="messages" ref="messages">
						<li class="message" :key="i" v-for="(message, i) in messages">
							<strong>{{ message.author }}</strong>: {{ message.text }}
						</li>
					</ul>
				</div>
				<input class="inputMessage" @keyup.enter="sendMessage" placeholder="Type here..." type="text" v-model="message" />
			</li>
		</ul>
	</div>
</template>

<script>
import socket from '~/plugins/socket.io.js'

export default {
	beforeMount() {
		socket.on('new-message', (message) => {
			this.messages.push(message)
		})
	},
	data () {
		return {
			user: this.$auth.user,
			messages: [],
			message: ''
		}
	},
	layout: 'empty',
	methods: {
		sendMessage() {
			if (!this.message.trim()) return
			let message = {
				author: this.user.name,
				text: this.message.trim()
			}
			this.messages.push(message)
			this.message = ''
			socket.emit('send-message', message)
		},
		// scrollToBottom() {
		// 	this.$nextTick(() => {
		// 		this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
		// 	})
		// }
	},
	middleware: 'auth',
	// mounted() {
	// 	this.scrollToBottom()
	// },
	// watch: {
	// 	'messages': 'scrollToBottom'
	// },
}
</script>

<style>
* {
	box-sizing: border-box;
}
html {
	font-weight: 300;
	-webkit-font-smoothing: antialiased;
}
html, input {
	font-family:
		"HelveticaNeue-Light",
		"Helvetica Neue Light",
		"Helvetica Neue",
		Helvetica,
		Arial,
		"Lucida Grande",
		sans-serif;
}
html, body {
	height: 100%;
	margin: 0;
	padding: 0;
}
ul {
	list-style: none;
	word-wrap: break-word;
}
/* Pages */
.pages {
	height: 100%;
	margin: 0;
	padding: 0;
	width: 100%;
}
.page {
	height: 100%;
	position: absolute;
	width: 100%;
}
/* Font */
.messages {
	font-size: 150%;
}
.inputMessage {
	font-size: 100%;
}
.log {
	color: gray;
	font-size: 70%;
	margin: 5px;
	text-align: center;
}
/* Messages */
.chatArea {
	height: 100%;
	padding-bottom: 60px;
}
.messages {
	height: 100%;
	margin: 0;
	overflow-y: scroll;
	padding: 10px 20px 10px 20px;
}
/* Input */
.inputMessage {
	border: 10px solid #3B8070;
	bottom: 0;
	height: 60px;
	left: 0;
	outline: none;
	padding-left: 10px;
	position: absolute;
	right: 0;
	width: 100%;
}
</style>
