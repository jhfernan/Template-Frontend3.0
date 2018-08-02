let config = {
	auth: {
		cookie: {
			options: { path: '/' },
			prefix: 'auth.',
			secure: false
		},
		localStorage: false,
		redirect: {
			login: '/',
			logout: '/',
			home: '/home',
		},
		// resetOnError: true,
		strategies: {
			local: {
				endpoints: {
					login: { url: '/api/authenticate', method: 'post', propertyName: 'data.token' },
					logout: false,
					user: { url: '/api/authenticate', method: 'get', propertyName: 'data.user' }
				},
				tokenRequired: true,
				tokenType: 'bearer'
			}
		}
	},
	axios: {
		baseURL: 'http://localhost:8000',
		progress: true,
	}
}

if (process.env.NODE_ENV == 'production') {
	config.auth.secure = true
	config.axios.baseURL = process.env.BASE_URL
}

module.exports = config
