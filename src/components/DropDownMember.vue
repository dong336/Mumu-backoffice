<template>
	<div class="mr-5">
		<v-menu>
			<template v-slot:activator="{ props: activatorProps }">
				<v-btn
					class="text-center"
					text="관리자 정보"
					v-bind="activatorProps"
				></v-btn>
			</template>

			<v-list>
				<v-list-item disabled>
					<v-list-item-title class="text-center" title="Option1"
						>{{ state.admin.name }} 님</v-list-item-title
					>
				</v-list-item>

				<v-list-item @click="onClick">
					<v-list-item-title class="text-center" title="Option2"
						>상세조회</v-list-item-title
					>
				</v-list-item>

				<v-list-item @click="logout">
					<v-list-item-title class="text-center" title="Option3"
						>로그아웃</v-list-item-title
					>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script setup>
import { inject } from 'vue';

const state = inject('state');

const onClick = () => {
	// Do something on click
};

const logout = () => {
	localStorage.clear();

	// 모든 쿠키 제거
	document.cookie.split(';').map(cookie => {
		const [name] = cookie.trim().split('=');
		document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
	});

	window.location.href = '/';
};
</script>

<style scoped></style>
