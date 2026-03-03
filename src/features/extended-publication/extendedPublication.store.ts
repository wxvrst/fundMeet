import { type Publication, usePublicationStore } from "@/entities/publication";
import { type Content, useContentStore } from "@/entities/content";
import { type Comment, useCommentStore } from "@/entities/comment";
import { type Tag, useTagStore } from "@/entities/tag";
import { type User, useUserStore } from "@/entities/user";

import { type ExtendedPublication } from "./types";
// TODO: Придумать как это организовать
// Связаться с бэкендом, лучше всего будет попросить его переделать
export const extendedPublcicationStore = defineStore(
	"extendedPublications",
	() => {
		const publicationStore = usePublicationStore();
		const contentStore = useContentStore();
		const commentStore = useCommentStore();
		const tagStore = useTagStore();
		const userStore = useUserStore();

		const fetchExtendedPublications = async () => {
			publicationStore.fetchPublications();
			contentStore.fetchContents();
			commentStore.fetchComments();
			tagStore.fetchTags();
			userStore.fetchUsers();
		};
		return {
			// extendedPublications,
			fetchExtendedPublications,
		};
	},
);
