import { publicationApi } from "./publication.api";
import type {
	CreatePublication,
	Publication,
	PublicationParams, //TODO: дописать query параметры
	UpdatePublication,
} from "./publication.types";

export const publicationStore = defineStore("publications", () => {
	// Состояния
	const publications = ref<Publication[]>([]);
	const currentPublication = ref<Publication>();
	const error = ref<string | null>(null);
	const isLoading = ref<boolean>(false);
	// Проверка на пустой массив
	const isEmpty = computed(() => publications.value.length === 0);

	const fetchPublications = async () => {
		try {
			isLoading.value = true;
			error.value = null;
			publications.value = await publicationApi.getPublications();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		} finally {
			isLoading.value = false;
		}
	};
	const fetchPublication = async (id: number) => {
		try {
			isLoading.value = true;
			error.value = null;
			currentPublication.value = await publicationApi.getPublication(id);
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		} finally {
			isLoading.value = false;
		}
	};

	const createPublication = async (publicationData: CreatePublication) => {
		try {
			isLoading.value = true;
			error.value = null;
			await publicationApi.postPublications(publicationData);
			await fetchPublications();
		} catch (err) {
			error.value = (err as Error).message;

			console.error(error.value);
		}
	};

	const replacePublication = async (
		id: number,
		publicationData: UpdatePublication,
	) => {
		try {
			isLoading.value = true;
			error.value = null;
			await publicationApi.putPublication(id, publicationData);
			await fetchPublications();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	const updatePublication = async (
		id: number,
		publicationData: UpdatePublication,
	) => {
		try {
			isLoading.value = true;
			error.value = null;
			await publicationApi.patchPublication(id, publicationData);
			await fetchPublications();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	const removePublication = async (id: number) => {
		try {
			isLoading.value = true;
			error.value = null;
			await publicationApi.deletePublication(id);
			await fetchPublications();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};
	return {
		// Состояния
		publications,
		currentPublication,
		isLoading,
		error,
		// Computed
		isEmpty,
		// Методы
		// GET
		fetchPublications,
		fetchPublication,
		// POST
		createPublication,
		// PUT
		replacePublication,
		// PATCH
		updatePublication,
		// DELETE
		removePublication,
	};
});
