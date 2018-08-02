let config = {
	auth: {
		cookie: {
			options: {
				path: '/',
				secure: false
			},
			prefix: 'auth'
		},
		localStorage: false,
		redirect: {
			login: '/',
			logout: '/',
			home: '/home',
		},
		resetOnError: true,
		strategies: {
			local: {
				endpoints: {
					login: { url: '/api/authenticate', method: 'post', propertyName: 'token' },
					logout: false,
					user: { url: '/api/authenticate', method: 'get', propertyName: 'user' }
				},
				tokenRequired: true,
			}
		}
	},
	axios: {
		baseURL: 'http://localhost:8000',
		progress: true,
	}
}

if (process.env.NODE_ENV == 'production') {
	config.auth.cookie.options.secure = true
	config.axios.baseURL = process.env.BASE_URL
}

module.exports = config
