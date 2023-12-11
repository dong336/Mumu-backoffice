<template>
	<v-layout class="rounded rounded-md">
		<GlobalNavBar @toggle="updateDrawer"></GlobalNavBar>
		<LocalNavBar v-model="drawer"></LocalNavBar>
		<MainContents />
		<ContentsFooter />
	</v-layout>
</template>

<script setup>
import GlobalNavBar from '@/layout/nav/GlobalNavBar.vue';
import LocalNavBar from '@/layout/nav/LocalNavBar.vue';
import MainContents from '@/layout/MainContents.vue';
import ContentsFooter from '@/layout/ContentsFooter.vue';
import { ref } from 'vue';

const drawer = ref(true);

const updateDrawer = () => {
	drawer.value = !drawer.value;
};
</script>

<style scoped></style>
