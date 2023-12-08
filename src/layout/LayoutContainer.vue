<template>
	<v-layout class="rounded rounded-md">
		<GlobalNavBar @toggle="updateDrawer"></GlobalNavBar>
		<LeftNavBar v-model="drawer"></LeftNavBar>
		<MainContents></MainContents>
	</v-layout>
</template>

<script setup>
import GlobalNavBar from '@/layout/nav/GlobalNavBar.vue';
import LeftNavBar from '@/layout/nav/LeftNavBar.vue';
import MainContents from '@/layout/MainContents.vue';
import { ref } from 'vue';

const drawer = ref(true);

const updateDrawer = () => {
	drawer.value = !drawer.value;
};
</script>

<style scoped></style>
