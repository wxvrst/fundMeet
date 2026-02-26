interface Comment {
	id: number;
	text: string;
	date_added: Date;
	author: number;
	parent_comment?: number;
	publication: number;
}
interface CreateComment {
	text: string;
	author: number;
	parent_comment: number;
	publication: number;
}
interface UpdateComment {
	text?: string;
	author?: number;
	parent_comment?: number;
	publication?: number;
}
interface CommentParams {
	order?: string;
	search?: string;
}
export type { Comment, CreateComment, UpdateComment, CommentParams };
