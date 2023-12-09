<template>
	<v-app-bar color="black">
		<v-app-bar-nav-icon @click.stop="$emit('toggle')">
			<v-icon icon="mdi-menu"></v-icon>
		</v-app-bar-nav-icon>

		<v-toolbar-title class="ml-2">
			<v-btn
				@click="handleMenuClick('MainPage')"
				:class="{ active: currentMenu === 'MainPage' }"
				>Backoffice</v-btn
			>
		</v-toolbar-title>

		<v-app-bar-title>
			<v-btn
				@click="handleMenuClick('MembersIndexPage')"
				:class="{ active: currentMenu === 'MembersIndexPage' }"
				>회원관리</v-btn
			>
		</v-app-bar-title>

		<v-app-bar-title>
			<v-btn
				@click="handleMenuClick('ExhibitIndexPage')"
				:class="{ active: currentMenu === 'ExhibitIndexPage' }"
				>전시관리</v-btn
			>
		</v-app-bar-title>

		<v-app-bar-title>
			<v-btn
				@click="handleMenuClick('ProductIndexPage')"
				:class="{ active: currentMenu === 'ProductIndexPage' }"
				>상품관리</v-btn
			>
		</v-app-bar-title>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
		<DropDownMember></DropDownMember>
	</v-app-bar>
</template>

<script setup>
import DropDownMember from '@/components/DropDownMember.vue';
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const handleMenuClick = name => {
	router.push({ name });
};

const currentMenu = ref(route.name);

// 라우트 변경감지
watchEffect(() => {
	currentMenu.value = route.name;
});
</script>

<style scoped>
.active {
	font-weight: bold; /* 또는 다른 스타일을 원하는 대로 지정 */
	color: gold; /* 활성화된 상태의 색상을 지정 */
}
</style>
