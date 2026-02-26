import type { Tag } from "@/entities/tag/types";
// Базовый тип
interface Publication {
	id: number;
	header: string;
	likes_count: number;
	date_added: Date;
	author: number;
	tags: Tag[];
}
// Для создания
interface CreatePublication {
	header: string;
	author: number;
	tags?: Tag[];
}
// Для изменения
interface UpdatePublication {
	header?: string;
	tags?: Tag[];
}
// Query параметры
interface PublicationParams {
	author?: string;
	order?: string;
	search?: string;
}

export type {
	Publication,
	CreatePublication,
	UpdatePublication,
	PublicationParams,
};
