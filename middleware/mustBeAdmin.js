export default function ({ error, store }) {
	if (!store.state.auth.user.admin) {
		error({ status: 403, message: 'Access Denied' })
	}
}
