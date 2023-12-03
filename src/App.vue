<template>
	<LoginPage v-if="state.admin.id == null"></LoginPage>
	<MainPage v-else v-model="state.admin"></MainPage>
</template>

<script setup>
import { reactive } from 'vue';
import LoginPage from '@/pages/LoginPage.vue';
import MainPage from '@/pages/MainPage.vue';
import { fetchGet, fetchPost } from '@/util/fetchUtil';

const state = reactive({
	admin: {
		id: null,
		name: '',
	},
});

fetchGet('/api/v1/admin/login');
fetchPost('/api/v1/admin/login', { code: '야 좋냐?' });
</script>
