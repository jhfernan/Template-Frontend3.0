export default function ({ $axios, app, store, redirect }) {
	$axios.onRequest(config => {
		console.log('Making request to ' + config.url)
	})

	$axios.onResponseError(err => {
		console.error('Response Error', err)
	})
}
