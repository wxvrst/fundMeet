// Запросы для бэкенда
import { apiPublication } from "@/shared/api/axios";
import type { CreatePublication, UpdatePublication } from "./types";
const publicationApi = {
	getPublications: async () => {
		const { data } = await apiPublication.get("/");
		return data;
	},
	getPublication: async (id: number) => {
		const { data } = await apiPublication.get(`/${id}/`);
		return data;
	},
	
	postPublications: async (publicationData: CreatePublication) => {
		const { data } = await apiPublication.post("/", publicationData);
		return data;
	},
	putPublication: async (id: number, publicationData: UpdatePublication) => {
		const { data } = await apiPublication.put(`/${id}/`, publicationData);
		return data;
	},
	patchPublication: async (id: number, publicationData: UpdatePublication) => {
		const { data } = await apiPublication.patch(`/${id}/`, publicationData);
		return data;
	},
	deletePublication: async (id: number) => {
		const { data } = await apiPublication.delete(`/${id}/`);
		return data;
	},
};
export { publicationApi };
