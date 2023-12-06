<template>
	<LoginPage
		v-if="state.admin.id == null"
		:admin="state.admin"
		@updateState="updateState"
	></LoginPage>
	<MainPage v-else v-model="state"></MainPage>
</template>

<script setup>
import { reactive } from 'vue';
import LoginPage from '@/pages/LoginPage.vue';
import MainPage from '@/pages/MainPage.vue';

const state = reactive({
	admin: {
		id: null,
		name: '',
	},
});

const updateState = data => {
	state.admin.id = data.id;
	state.admin.name = data.name;
};
</script>
