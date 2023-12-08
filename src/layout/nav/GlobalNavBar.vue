<template>
	<v-app-bar color="black">
		<v-app-bar-nav-icon @click.stop="$emit('toggle')"
			><v-icon icon="mdi-menu"></v-icon
		></v-app-bar-nav-icon>

		<v-toolbar-title class="ml-2">
			<v-btn>
				<RouterLink class="router-link-custom" active-class="active" to="/"
					>Backoffice</RouterLink
				>
			</v-btn>
		</v-toolbar-title>

		<v-app-bar-title>
			<v-btn
				><RouterLink
					class="router-link-custom"
					active-class="active"
					to="/members"
					>회원관리</RouterLink
				></v-btn
			>
		</v-app-bar-title>

		<v-app-bar-title>
			<v-btn>...</v-btn>
		</v-app-bar-title>

		<v-app-bar-title>
			<v-btn>...</v-btn>
		</v-app-bar-title>

		<v-app-bar-title>
			<v-btn>...</v-btn>
		</v-app-bar-title>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
		<DropDownMember></DropDownMember>
	</v-app-bar>
</template>

<script setup>
import DropDownMember from '@/components/DropDownMember.vue';
</script>

<style scoped>
/* RouterLink의 기본 스타일 무효화 */
.router-link-custom {
	text-decoration: none; /* 밑줄 제거 */
	color: inherit; /* 기본 링크 색상 사용 */
	cursor: pointer; /* 커서 모양 변경 (선택 사항) */
}
</style>
