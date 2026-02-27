// Запросы для бэкенда
import { apiTag } from "@/shared/api/axios";
const tagApi = {
	getTags: async () => {
		const { data } = await apiTag.get("/");
		return data;
	},
	getTag: async (id: number) => {
		const { data } = await apiTag.get(`/${id}/`);
		return data;
	},
	
	postTag: async (tagData: string) => {
		const { data } = await apiTag.post("/", tagData);
		return data;
	},
	putTag: async (id: number, tagData: string) => {
		const { data } = await apiTag.put(`/${id}/`, tagData);
		return data;
	},
	patchTag: async (id: number, tagData: string) => {
		const { data } = await apiTag.patch(`/${id}/`, tagData);
		return data;
	},
	deleteTag: async (id: number) => {
		const { data } = await apiTag.delete(`/${id}/`);
		return data;
	},
};
export { tagApi };
