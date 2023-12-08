<template>
	<v-navigation-drawer v-model="drawer">
		<v-list>
			<v-list-item title="Navigation drawer"></v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';

const props = defineProps(['modelValue']);
const drawer = ref(props.modelValue);

watch(
	() => props.modelValue,
	toggle => {
		drawer.value = toggle;
	},
);
</script>

<style scoped></style>
