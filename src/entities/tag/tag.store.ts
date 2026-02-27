import { tagApi } from "./tag.api";
import type { Tag } from "./tag.types";

export const tagStore = defineStore("tags", () => {
	// Состояния
	const tags = ref<Tag[]>([]);
	const currentTag = ref<Tag>();
	const error = ref<string | null>(null);
	const isLoading = ref<boolean>(false);
	// Проверка на пустой массив
	const isEmpty = computed(() => tags.value.length === 0);

	const fetchTags = async () => {
		try {
			isLoading.value = true;
			error.value = null;
			tags.value = await tagApi.getTags();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		} finally {
			isLoading.value = false;
		}
	};
	const fetchTag = async (id: number) => {
		try {
			isLoading.value = true;
			error.value = null;
			currentTag.value = await tagApi.getTag(id);
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		} finally {
			isLoading.value = false;
		}
	};

	const createTag = async (tagData: string) => {
		try {
			error.value = null;
			await tagApi.postTag(tagData);
			await fetchTags();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	const replaceTag = async (id: number, tagData: string) => {
		try {
			error.value = null;
			await tagApi.putTag(id, tagData);
			await fetchTags();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	const patchTag = async (id: number, tagData: string) => {
		try {
			error.value = null;
			await tagApi.patchTag(id, tagData);
			await fetchTags();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	const removeTag = async (id: number) => {
		try {
			error.value = null;
			await tagApi.deleteTag(id);
			await fetchTags();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	return {
		// Состояния
		tags,
		currentTag,
		isLoading,
		error,
		// Computed
		isEmpty,
		// Методы
		// GET
		fetchTags,
		fetchTag,
		// POST
		createTag,
		// PUT
		replaceTag,
		// PATCH
		patchTag,
		// DELETE
		removeTag,
	};
});
