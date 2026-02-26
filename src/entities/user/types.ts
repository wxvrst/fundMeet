interface User {
	id: number;
	username: string;
	email: string;
}
interface UpdateUser {
	username: string;
	email: string;
}
export type { User, UpdateUser };
