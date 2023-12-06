<template>
	<v-container>
		<v-sheet width="300" class="mx-auto">
			<v-form fast-fail @submit.prevent @keyup="onKeyUp">
				<v-text-field label="ID" v-model="state.form.userId"></v-text-field>

				<v-text-field
					type="password"
					label="Password"
					v-model="state.form.userPw"
				></v-text-field>

				<v-btn v-on="{ click: login }" block class="mt-2">로그인</v-btn>
			</v-form>
		</v-sheet>
	</v-container>
</template>

<script setup>
import { reactive } from 'vue';
import { fetchPost } from '@/util/fetchUtil';

const emits = defineEmits(['updateState']);

const state = reactive({
	form: {
		userId: '',
		userPw: '',
	},
});

const login = () => {
	const form = {
		username: state.form.userId,
		password: state.form.userPw,
	};

	fetchPost('/api/auth/admin-login', form)
		.then(body => {
			if (body.code == 2000) {
				emits('updateState', body.data);
			}
		})
		.catch(e => {
			console.log(e);
		});
};

const onKeyUp = event => {
	if (event.key.toLowerCase() === 'enter') {
		login(); // 엔터 키 눌렀을 때 로그인 메서드 호출
	}
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
