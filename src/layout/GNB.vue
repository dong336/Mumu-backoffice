<template>
	<v-app-bar color="black">
		<v-app-bar-nav-icon @click.stop="$emit('toggle')"
			><v-icon icon="mdi-menu"></v-icon
		></v-app-bar-nav-icon>
		<v-toolbar-title class="ml-2">Backoffice</v-toolbar-title>

		<DropDownMember></DropDownMember>
	</v-app-bar>
</template>

<script setup>
import DropDownMember from '@/components/DropDownMember.vue';
</script>

<style scoped></style>
