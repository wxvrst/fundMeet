// Запросы для бэкенда
import { apiContent } from "@/shared/api/axios";
import type { Content } from "./types";
const contentApi = {
	// getContent: async () => {
	// 	const { data } = await apiContent.get("/list/");
	// 	return data;
	// },
	createContent: async (contentData: Content) => {
		const { data } = await apiContent.post(`/create/`, contentData);
		return data;
	},

	putContent: async (
		publication_id: number,
		id: number,
		contentData: Content,
	) => {
		const { data } = await apiContent.put(
			`/${publication_id}/${id}/`,
			contentData,
		);
		return data;
	},
	patchContent: async (
		publication_id: number,
		id: number,
		contentData: Content,
	) => {
		const { data } = await apiContent.patch(
			`/${publication_id}/${id}/`,
			contentData,
		);
		return data;
	},
};
export { contentApi };
