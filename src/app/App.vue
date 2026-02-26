<script setup lang="ts">
import { RouterView } from "vue-router";
import { WidgetHeader } from "@/widgets/Header";
import { WidgetFooter } from "@/widgets/Footer";

// TODO: Add init app
const isAppReady = ref<boolean>(true);
</script>

<template>
	<WidgetHeader />
	<main>
		<RouterView v-if="isAppReady" />
		<div
			v-else
			class="flex h-screen flex-col items-center justify-center gap-5"
		>
			<div
				v-loading="!isAppReady"
				class="w-50"
				element-loading-text="Загрузка приложения..."
			/>
		</div>
	</main>
	<WidgetFooter />
</template>
