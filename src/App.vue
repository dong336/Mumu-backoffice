<template>
	<LoginPage
		v-if="state.admin.id == null"
		:admin="state.admin"
		@updateState="updateState"
	></LoginPage>
	<LayoutContainer v-else v-model="state"></LayoutContainer>
</template>

<script setup>
import { reactive, onMounted, provide } from 'vue';
import LoginPage from '@/pages/LoginPage.vue';
import LayoutContainer from '@/layout/LayoutContainer.vue';

const state = reactive({
	admin: {
		id: '',
		name: '',
	},
});

const updateState = data => {
	state.admin.id = data.id;
	state.admin.name = data.name;

	// 현재 시간에 30분을 더한 만료 날짜
	const expirationDate = new Date();
	expirationDate.setTime(expirationDate.getTime() + 30 * 60 * 1000);

	// 쿠키에 데이터 저장
	document.cookie = `admin=${JSON.stringify(
		state.admin,
	)}; expires=${expirationDate.toUTCString()}`;
};

provide('state', state);

onMounted(() => {
	// 쿠키에서 데이터 가져오기
	const cookies = document.cookie.split(';');
	const adminCookie = cookies.find(cookie =>
		cookie.trim().startsWith('admin='),
	);

	if (adminCookie) {
		const storedAdmin = adminCookie.split('=')[1];
		state.admin = JSON.parse(storedAdmin);
	}
});
</script>
