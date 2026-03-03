<script setup lang="ts">
import {
	PublicationCard,
	type ExtendedPublication,
} from "@/features/extended-publication";
// TODO: fetch
const publications = ref<ExtendedPublication[]>([]);
// Пока не настроил получение публикаций
const mockPublications = ref<ExtendedPublication[]>([
	{
		id: 1,
		header: "Some Header",
		likes_count: 12,
		date_added: new Date(),
		tags: [
			{ id: 1, name: "smth" },
			{ id: 2, name: "tag" },
		],
		content: {
			text_content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image_content:
				"https://compote.slate.com/images/5294e6d0-53ed-4a4a-a350-7eaeab72ac93.jpeg?crop=1560%2C1040%2Cx0%2Cy0",
		},
		author_info: {
			id: 2,
			username: "username",
		},
	},
	{
		id: 2,
		header: "Some Header",
		likes_count: 12,
		date_added: new Date(),
		tags: [
			{ id: 1, name: "smth" },
			{ id: 2, name: "tag" },
		],
		content: {
			text_content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image_content:
				"https://compote.slate.com/images/5294e6d0-53ed-4a4a-a350-7eaeab72ac93.jpeg?crop=1560%2C1040%2Cx0%2Cy0",
		},
		author_info: {
			id: 2,
			username: "username",
		},
	},
]);
</script>
<template>
	<div class="flex flex-col justify-center items-center my-8">
		<PublicationCard
			v-for="(item, index) in mockPublications"
			:key="index"
			:publication="item"
		/>
	</div>
</template>
