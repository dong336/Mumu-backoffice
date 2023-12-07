<template>
	<v-layout class="rounded rounded-md">
		<GNB @toggle="updateDrawer"></GNB>
		<LNB v-model="drawer"></LNB>
		<MainContents></MainContents>
	</v-layout>
</template>

<script setup>
import GNB from '@/layout/GNB.vue';
import LNB from '@/layout/LNB.vue';
import MainContents from '@/layout/MainContents.vue';
import { ref } from 'vue';

const drawer = ref(true);

const updateDrawer = () => {
	drawer.value = !drawer.value;
};
</script>

<style scoped></style>
