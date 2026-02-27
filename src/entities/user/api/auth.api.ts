// Запросы для бэкенда
import { apiLogin, apiLogout, apiRegister } from "@/shared/api/axios";
const authApi = {
	login: async () => {
		const { data } = await apiLogin.post("/");
		return data;
	},

	logout: async () => {
		const { data } = await apiLogout.post("/");
		return data;
	},

	register: async () => {
		const { data } = await apiRegister.post("/");
		return data;
	},
};
export { authApi };
