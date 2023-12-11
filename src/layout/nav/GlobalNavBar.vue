<template>
	<v-app-bar color="amber-lighten-3">
		<v-app-bar-nav-icon @click.stop="$emit('toggle')">
			<v-icon icon="mdi-menu"></v-icon>
		</v-app-bar-nav-icon>

		<v-toolbar-title class="ml-2">
			<v-btn @click="handleMenuClick('MainPage')">Backoffice</v-btn>
		</v-toolbar-title>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
		<DropDownMember></DropDownMember>

		<template v-slot:extension>
			<div class="bg-amber-lighten-4">
				<v-tabs>
					<v-tab value="tab-1" @click="handleMenuClick('MembersIndexPage')"
						>회원관리</v-tab
					>

					<v-tab value="tab-2" @click="handleMenuClick('ExhibitIndexPage')"
						>전시관리</v-tab
					>

					<v-tab value="tab-3" @click="handleMenuClick('ProductIndexPage')"
						>상품관리</v-tab
					>
				</v-tabs>
			</div>
		</template>
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

<style scoped></style>
