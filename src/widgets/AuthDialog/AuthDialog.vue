<script setup lang="ts">
import LoginForm from "./forms/LoginForm.vue";
import RegisterForm from "./forms/RegisterForm.vue";
// TODO: Add auth logic
const isLogin = ref<boolean>(false);
const handleToggleLogin=()=>{
	isLogin.value=!isLogin.value
}
</script>
<template>
	<form
		class="bg-black/90 backdrop-blur-sm flex flex-col gap-4 px-10 py-6 rounded-md border border-(--border) min-w-80"
	>
		<span className="text-xl">
			{{ isLogin ? "Log In" : "Sign Up" }}
		</span>
		<LoginForm v-if="isLogin" />
		<RegisterForm v-else />
		<div class="flex justify-center gap-6">
			<button
				class="px-4 py-2 bg-white text-black rounded-lg hover:bg-(--text) active:scale-90 transition-color duration-400"
				@click.prevent=""
			>
				Submit
			</button>
			<button
				class="px-4 py-2 bg-(--bg-primary)/40 rounded-lg border border-(--border) hover:bg-(--bg-primary-hover) hover:text-white active:scale-90 transition-color duration-400"
				@click.prevent=""
			>
				Cancel
			</button>
		</div>
	  <a
    	class="self-end cursor-pointer text-sm group hover:text-white transition-all duration-400"
      @click="handleToggleLogin""
    >
      {{isLogin ? "Want to Sign Up?" :"Want to Log In?" }}
      <div class="h-px bg-(--accent) w-0 group-hover:w-full transition-all duration-400" />
    </a>
	</form>
</template>
