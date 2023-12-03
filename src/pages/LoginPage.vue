<template>
	<v-container>
		<v-sheet width="300" class="mx-auto">
			<v-form fast-fail @submit.prevent>
				<v-text-field label="ID" v-model="state.form.loginId"></v-text-field>

				<v-text-field
					type="password"
					label="Password"
					v-model="state.form.loginPw"
				></v-text-field>

				<v-btn @click="submit()" block class="mt-2">로그인</v-btn>
			</v-form>
		</v-sheet>
	</v-container>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
	form: {
		loginId: '',
		loginPw: '',
	},
});

const submit = () => {
	// const body = {
	// 	loginId: state.form.loginId,
	// 	loginPw: state.form.loginPw,
	// };
};
</script>

<style scoped>
form {
	width: 100%;
}

.custom-input {
	width: 300px;
}
</style>
