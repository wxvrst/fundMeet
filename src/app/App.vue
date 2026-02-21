<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";
import { RouterView } from "vue-router";

// TODO: Add init app
const isAppReady = ref<boolean>(true);

</script>

<template>
	<RouterView v-if="isAppReady" />
	<div v-else class="flex h-screen flex-col items-center justify-center gap-5">
		<div
			v-loading="!isAppReady"
			class="w-50"
			element-loading-text="Загрузка приложения..."
		/>
	</div>

	<ModalsContainer />
</template>
