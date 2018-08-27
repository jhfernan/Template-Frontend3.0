<template>
	<v-container>
		<v-jumbotron color="grey lighten-2">
			<v-container fill-height>
				<v-layout align-center>
					<v-flex class="px-5">
						<h1 class="display-3">You are in the backend!</h1>
						<span class="subheading">Welcome {{ user.name }}</span>
						<v-divider class="my-3"></v-divider>
						<div class="title mb-3">your id is {{ user.id }}</div>
						<v-layout>
							<v-btn class="mx-0" color="accent" nuxt router to="/home/secret">See Secret Page</v-btn>
							<v-spacer></v-spacer>
							<v-btn class="mx-0" color="primary" nuxt router to="/home/chat">Go to Chat Application Page</v-btn>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-container>
		</v-jumbotron>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
			user: this.$auth.user
		}
	},
	middleware: 'auth',
}
</script>
