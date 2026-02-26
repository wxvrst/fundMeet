<script setup lang="ts">
const props = defineProps<{
	isOpen: boolean;
	image?: string;
}>();
const emit = defineEmits<{
	close: [];
}>();
// TODO: Add animation
</script>
<template>
	<div
		v-if="isOpen"
		class="fixed w-full h-full top-0 left-0 inset-0 liquid-glass flex items-center justify-center"
		@click.self="emit('close')"
	>
		<slot />
	</div>
</template>
