<script setup lang="ts">
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
</script>
<template>
	<button
		class="fixed bottom-6 right-6 border cursor-pointer rounded-4xl w-10 h-10 text-2xl hover:bg-(--bg-primary-hover) active:border-(--accent) active:text-(--accent) transition-color duration-400"
		@click="scrollToTop"
	>
		↑
	</button>
</template>
