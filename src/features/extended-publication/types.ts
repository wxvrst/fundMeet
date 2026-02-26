import type { Content } from "@/entities/content";
import type { Publication } from "@/entities/publication";
import type { User } from "@/entities/user";

interface ExtendedPublication extends Publication {
	content: Content;
	comments: Comment[];
	author_info: User;
}
export type { ExtendedPublication };
