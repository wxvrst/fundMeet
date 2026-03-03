<script setup lang="ts">
const props = defineProps<{
	query: string;
}>();
// IN PLANS: вывод результатов по разным табам категорий:
// Посты и юзеры пока, вывод с подгрузкой
// Селектор категорий выше поиска, не знаю нужны ли фильтры пока
// select по цвету лучше под акцент сделать
const selectedSearch = ref<"User" | "Publication">("Publication");
const setSelectedSearch = (search: "User" | "Publication") => {
	selectedSearch.value = search;
};
</script>
<template>
	<div class="flex gap-4 my-2">
		<button
			@click.prevent="setSelectedSearch('User')"
			class="border border-(--border) py-2 px-4 rounded-2xl"
			:class="{ 'selected-liquid-glass': selectedSearch == 'User' }"
		>
			User
		</button>
		<button
			@click.prevent="setSelectedSearch('Publication')"
			class="border border-(--border) py-2 px-4 rounded-2xl"
			:class="{ 'selected-liquid-glass': selectedSearch == 'Publication' }"
		>
			Publication
		</button>
	</div>
</template>
