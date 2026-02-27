import { contentApi } from "./content.api";
import type { Content } from "./content.types";

export const contentStore = defineStore("contents", () => {
	// Состояния
	const contents = ref<Content[]>([]);
	const currentContent = ref<Content>();
	const error = ref<string | null>(null);
	const isLoading = ref<boolean>(false);
	// Проверка на пустой массив
	const isEmpty = computed(() => contents.value.length === 0);

	const fetchContents = async () => {
		try {
			// TODO: спросить у бэка за GET
			isLoading.value = true;
			error.value = null;
			// contents.value = await contentApi.getContents();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		} finally {
			isLoading.value = false;
		}
	};

	const createContent = async (contentData: Content) => {
		try {
			error.value = null;
			await contentApi.postContent(contentData);
			await fetchContents();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	const replaceContent = async (
		publication_id: number,
		id: number,
		contentData: Content,
	) => {
		try {
			error.value = null;
			await contentApi.putContent(publication_id, id, contentData);
			await fetchContents();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	const patchContent = async (
		publication_id: number,
		id: number,
		contentData: Content,
	) => {
		try {
			error.value = null;
			await contentApi.patchContent(publication_id, id, contentData);
			await fetchContents();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	return {
		// Состояния
		contents,
		currentContent,
		isLoading,
		error,
		// Computed
		isEmpty,
		// Методы
		// GET
		fetchContents,
		// POST
		createContent,
		// PUT
		replaceContent,
		// PATCH
		patchContent,
	};
});
