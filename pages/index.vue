<template>
	<v-container>
		<v-jumbotron color="grey lighten-2" light>
			<v-container fill-height>
				<v-layout align-center>
					<v-flex text-xs-center>
						<h3 class="display-3">Welcome to My Chat and Auth App</h3>
						<span class="subheading">I built this app as an example of using nuxt for a frontend and an external api built with express for the backend</span>
						<v-divider class="my-3"></v-divider>
						<div class="title mb-3">For now, login and check it out!</div>
						<v-btn router to="/login" large color="primary" class="mx-0" exact>To the Login Page</v-btn>
					</v-flex>
				</v-layout>
			</v-container>
		</v-jumbotron>
	</v-container>
</template>

<script>
export default {
	head: {
		title: 'My Home'
	},
	middleware: 'guest',
}
</script>
