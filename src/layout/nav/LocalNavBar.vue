<template>
	<v-navigation-drawer
		:disable-resize-watcher="true"
		permanent
		nav
		color="amber-lighten-5"
	>
		<!-- <v-list v-model:opened="open">
			<v-list-group value="Users">
				<template v-slot:activator="{ data }">
					<v-list-item
						v-bind="data"
						prepend-icon="mdi-account-circle"
						title="Users"
					></v-list-item>
				</template>

				<v-list-group value="Admin">
					<template v-slot:activator="{ data }">
						<v-list-item v-bind="data" title="Admin"></v-list-item>
					</template>

					<v-list-item
						v-for="([title, icon], i) in admins"
						:key="i"
						:title="title"
						:prepend-icon="icon"
						:value="title"
					></v-list-item>
				</v-list-group>

				<v-list-group value="Actions">
					<template v-slot:activator="{ data }">
						<v-list-item v-bind="data" title="Actions"></v-list-item>
					</template>

					<v-list-item
						v-for="([title, icon], i) in cruds"
						:key="i"
						:value="title"
						:title="title"
						:prepend-icon="icon"
					></v-list-item>
				</v-list-group>
			</v-list-group>
		</v-list> -->
	</v-navigation-drawer>
</template>

<script setup></script>

<style scoped></style>
