// Запросы для бэкенда
import { apiUser } from "@/shared/api/axios";
import type { UpdateUser } from "../types";
const userApi = {
	getUserList: async () => {
		const { data } = await apiUser.get("/list/");
		return data;
	},
	
	getCurrentUser: async () => {
		const { data } = await apiUser.get("/currentuser/");
		return data;
	},

	getUser: async (id: number) => {
		const { data } = await apiUser.get(`/${id}/`);
		return data;
	},
	
	putUser: async (id: number, userData: UpdateUser) => {
		const { data } = await apiUser.put(`/${id}/`, userData);
		return data;
	},
	
	patchUser: async (id: number, userData: UpdateUser) => {
		const { data } = await apiUser.patch(`/${id}/`, userData);
		return data;
	},
};
export { userApi };
