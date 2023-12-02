<template>
	<v-layout class="rounded rounded-md">
		<v-app-bar>
			<v-app-bar-nav-icon><v-icon icon="$vuetify"></v-icon></v-app-bar-nav-icon>
			<v-toolbar-title class="ml-2"> Page title </v-toolbar-title>
		</v-app-bar>

		<v-navigation-drawer>
			<v-list>
				<v-list-item title="Navigation drawer"></v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main class="d-flex align-center justify-center" style="min-height: 300px"
			><v-icon icon="$vuetify"></v-icon>
			Main Content
		</v-main>
	</v-layout>
</template>

<script setup></script>

<style scoped></style>
