// Запросы для бэкенда
import { apiComment } from "@/shared/api/axios";
import type { CreateComment, UpdateComment } from "./types";
const commentApi = {
	getComments: async () => {
		const { data } = await apiComment.get("/");
		return data;
	},
	getComment: async (id: number) => {
		const { data } = await apiComment.get(`/${id}/`);
		return data;
	},
	getCommentByPublication: async (publication_id: number) => {
		const { data } = await apiComment.get(`/by-publication/${publication_id}/`);
		return data;
	},

	postComments: async (CommentData: UpdateComment) => {
		const { data } = await apiComment.post("/", CommentData);
		return data;
	},
	postCommentReply: async (id: number, CommentData: CreateComment) => {
		const { data } = await apiComment.post(`/${id}/reply/`, CommentData);
		return data;
	},
	postCommentByPublication: async (
		publication_id: number,
		CommentData: CreateComment,
	) => {
		const { data } = await apiComment.post(
			`/by-publication/${publication_id}/`,
			CommentData,
		);
		return data;
	},

	putComment: async (id: number, CommentData: UpdateComment) => {
		const { data } = await apiComment.put(`/${id}/`, CommentData);
		return data;
	},
	putCommentByPublication: async (
		publication_id: number,
		comment_id: number,
		CommentData: UpdateComment,
	) => {
		const { data } = await apiComment.put(
			`/by-publication/${publication_id}/${comment_id}/`,
			CommentData,
		);
		return data;
	},

	patchComment: async (id: number, CommentData: UpdateComment) => {
		const { data } = await apiComment.patch(`/${id}/`, CommentData);
		return data;
	},
	patchCommentByPublication: async (
		publication_id: number,
		comment_id: number,
		CommentData: UpdateComment,
	) => {
		const { data } = await apiComment.patch(
			`/by-publication/${publication_id}/${comment_id}/`,
			CommentData,
		);
		return data;
	},

	deleteComment: async (id: number) => {
		const { data } = await apiComment.delete(`/${id}/`);
		return data;
	},
};
export { commentApi };
