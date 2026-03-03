import type { Content } from "@/entities/content";
import type { Publication } from "@/entities/publication";
import type { User } from "@/entities/user";

interface ExtendedPublication extends Omit<Publication, "author"> {
	content: Omit<Content, "publication">;
	comments?: Omit<Comment[], "publication">;
	author_info: User;
}
export type { ExtendedPublication };
