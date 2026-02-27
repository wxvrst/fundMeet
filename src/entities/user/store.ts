import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import type { User, UpdateUser } from "./types";

export const userStore = defineStore("users", () => {
	// Состояния
	const users = ref<User[]>([]);
	const currentUser = ref<User>();
	const error = ref<string | null>(null);
	const isLoading = ref<boolean>(false);
	// Проверка на пустой массив
	const isEmpty = computed(() => users.value.length === 0);

	// Методы userApi
	const fetchUsers = async () => {
		try {
			isLoading.value = true;
			error.value = null;
			users.value = await userApi.getUsers();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		} finally {
			isLoading.value = false;
		}
	};
	const fetchUser = async (id: number) => {
		try {
			isLoading.value = true;
			error.value = null;
			users.value = await userApi.getUser(id);
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		} finally {
			isLoading.value = false;
		}
	};
	const fetchCurrentUser = async () => {
		try {
			isLoading.value = true;
			error.value = null;
			users.value = await userApi.getCurrentUser();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		} finally {
			isLoading.value = false;
		}
	};

	const replaceUser = async (id: number, userData: UpdateUser) => {
		try {
			error.value = null;
			await userApi.putUser(id, userData);
			await fetchUsers();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	const patchUser = async (id: number, userData: UpdateUser) => {
		try {
			error.value = null;
			await userApi.patchUser(id, userData);
			await fetchUsers();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	// Методы authApi
	// ???????
	const login = async () => {
		try {
			error.value = null;
			await authApi.login();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};
	const logout = async () => {
		try {
			error.value = null;
			await authApi.logout();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};
	const register = async () => {
		try {
			error.value = null;
			await authApi.register();
		} catch (err) {
			error.value = (err as Error).message;
			console.error(error.value);
		}
	};

	return {
		// Состояния
		users,
		currentUser,
		isLoading,
		error,
		// Computed
		isEmpty,
		// Методы
		// Auth
		login,
		logout,
		register,
		// GET
		fetchUsers,
		fetchUser,
		fetchCurrentUser,
		// PUT
		replaceUser,
		// PATCH
		patchUser,
	};
});
