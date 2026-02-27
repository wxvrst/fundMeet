import { commentApi } from "./comment.api";
import type {
	Comment,
	CreateComment,
	UpdateComment,
	CommentParams, // TODO: дописать query параметры
} from "./comment.types";

export const commentStore = defineStore("comments", () => {
	// Состояния
	const comments = ref<Comment[]>([]);
	const currentComment = ref<Comment>();
	const error = ref<string | null>(null);
	const isLoading = ref<boolean>(false);
	// Проверка на пустой массив
	const isEmpty = computed(() => comments.value.length === 0);

	const fetchComments = async () => {
		try {
			isLoading.value = true;
			error.value = null;
			comments.value = await commentApi.getComments();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		} finally {
			isLoading.value = false;
		}
	};
	const fetchComment = async (id: number) => {
		try {
			isLoading.value = true;
			error.value = null;
			currentComment.value = await commentApi.getComment(id);
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		} finally {
			isLoading.value = false;
		}
	};
	const fetchCommentByPublication = async (publication_id: number) => {
		try {
			isLoading.value = true;
			error.value = null;
			currentComment.value =
				await commentApi.getCommentByPublication(publication_id);
		} catch (err) {
			error.value = (err as Error).message;

			console.error(error.value);
		}
	};

	const createComment = async (commentData: CreateComment) => {
		try {
			isLoading.value = true;
			error.value = null;
			await commentApi.postComments(commentData);
			await fetchComments();
		} catch (err) {
			error.value = (err as Error).message;

			console.error(error.value);
		}
	};
	const createCommentReply = async (id: number, commentData: CreateComment) => {
		try {
			isLoading.value = true;
			error.value = null;
			await commentApi.postCommentReply(id, commentData);
			await fetchComments();
		} catch (err) {
			error.value = (err as Error).message;

			console.error(error.value);
		}
	};
	const createCommentByPublication = async (
		publication_id: number,
		commentData: CreateComment,
	) => {
		try {
			isLoading.value = true;
			error.value = null;
			await commentApi.postCommentByPublication(publication_id, commentData);
			await fetchComments();
		} catch (err) {
			error.value = (err as Error).message;

			console.error(error.value);
		}
	};

	const replaceComment = async (id: number, commentData: UpdateComment) => {
		try {
			isLoading.value = true;
			error.value = null;
			await commentApi.putComment(id, commentData);
			await fetchComments();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};
	const replaceCommentByPublication = async (
		publication_id: number,
		id: number,
		commentData: UpdateComment,
	) => {
		try {
			isLoading.value = true;
			error.value = null;
			await commentApi.putCommentByPublication(publication_id, id, commentData);
			await fetchComments();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	const patchComment = async (id: number, commentData: UpdateComment) => {
		try {
			isLoading.value = true;
			error.value = null;
			await commentApi.patchComment(id, commentData);
			await fetchComments();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};
	const patchCommentByPublication = async (
		publication_id: number,
		id: number,
		commentData: UpdateComment,
	) => {
		try {
			isLoading.value = true;
			error.value = null;
			await commentApi.patchCommentByPublication(
				publication_id,
				id,
				commentData,
			);
			await fetchComments();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	const removeComment = async (id: number) => {
		try {
			isLoading.value = true;
			error.value = null;
			await commentApi.deleteComment(id);
			await fetchComments();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	return {
		// Состояния
		comments,
		currentComment,
		isLoading,
		error,
		// Computed
		isEmpty,
		// Методы
		// GET
		fetchComments,
		fetchComment,
		fetchCommentByPublication,
		// POST
		createComment,
		createCommentReply,
		createCommentByPublication,
		// PUT
		replaceComment,
		replaceCommentByPublication,
		// PATCH
		patchComment,
		patchCommentByPublication,
		// DELETE
		removeComment,
	};
});
