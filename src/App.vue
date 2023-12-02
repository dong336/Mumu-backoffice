<template>
	<LoginPage v-if="!isLogin"></LoginPage>
	<MainPage v-else></MainPage>
</template>

<script setup>
import LoginPage from './pages/LoginPage.vue';
import MainPage from './pages/MainPage.vue';

const isLogin = true;
</script>
