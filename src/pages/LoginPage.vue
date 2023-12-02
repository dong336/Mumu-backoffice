<template>
	<div class="container p-5">
		<p class="fs-4 text-center">관리자 로그인 페이지</p>
		<form class="d-flex flex-column align-items-center">
			<div class="form-floating mb-3 custom-input">
				<input
					type="email"
					class="form-control custom-input"
					id="floatingInput"
					placeholder="ID"
				/>
				<label for="floatingInput">ID</label>
			</div>
			<div class="form-floating mb-3 custom-input">
				<input
					type="password"
					class="form-control custom-input"
					id="floatingPassword"
					placeholder="Password"
				/>
				<label for="floatingPassword">Password</label>
			</div>
			<button type="submit" class="btn btn-primary">로그인</button>
		</form>
	</div>
</template>

<script setup></script>

<style scoped>
form {
	width: 100%;
}

.custom-input {
	width: 300px;
}
</style>
