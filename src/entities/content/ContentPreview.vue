<script setup lang="ts">
import type { Content } from "../types/content";

const props = defineProps<{
	content: Content;
}>();
</script>
<template>
	<div class="flex flex-col gap-2 items-center">
		<div class="text-left">
			{{ content.text_content }}
		</div>
		<div class="w-full">
			<img
				:src="content.image_content"
				class="w-full object-contait object-center overflow-hidden rounded-md"
				alt="publication image"
			/>
		</div>
	</div>
</template>
