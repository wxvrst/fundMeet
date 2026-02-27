<script setup lang="ts">
import ProfileIcon from "@/shared/assets/icons/ProfileIcon.vue";
import type { ExtendedPublication } from "./types";
import LikeIcon from "@/shared/assets/icons/LikeIcon.vue";
import CommentIcon from "@/shared/assets/icons/CommentIcon.vue";
import ShareIcon from "@/shared/assets/icons/ShareIcon.vue";
const props = defineProps<{
	publication: ExtendedPublication;
}>();
const handleLikeClick = () => {};
const handleCommentClick = () => {};
const handleShareClick = () => {};
</script>
<template>
	<article
		className="flex flex-col gap-2 items-center p-2 w-6/10 rounded-md hover:bg-(--bg-post) cursor-pointer
            transition-color duration-200"
	>
		<header class="flex flex-col self-start">
			<div class="flex items-center gap-1">
				<ProfileIcon />
				<div class="flex flex-col items-start">
					<RouterLink to="" class="text-2xl hover:underline">
						{{ publication.author_info.username }}
					</RouterLink>
					<span>{{ publication.date_added }}</span>
				</div>
			</div>
			<!-- tags -->
			<div class="flex gap-1">
				<RouterLink
					v-for="(item, index) in publication.tags"
					:key="index"
					to="/"
				>
					{{ item.name }}
				</RouterLink>
			</div>
		</header>
		<!-- content -->l
		<div class="flex flex-col gap-2 items-center text-left">
			<span> {{ publication.header }} </span>
			<img :src="publication.content.image_content" :alt="publication.header" />
			<span>
				{{ publication.content.text_content }}
			</span>
		</div>
		<!-- actions -->
		<footer class="flex gap-2 self-start">
			<button
				key="{button.id}"
				@click="handleLikeClick"
				className="flex gap-1 items-center justify-center cursor-pointer py-1 px-2 bg-(--post-button) rounded-md
                        hover:bg-(--post-button-hover)"
			>
				<component :is="LikeIcon" />
				{{ publication.likes_count }}
			</button>
			<button
				key="{button.id}"
				@click="handleCommentClick"
				className="flex gap-1 items-center justify-center cursor-pointer py-1 px-2 bg-(--post-button) rounded-md
                        hover:bg-(--post-button-hover)"
			>
				<component :is="CommentIcon" />
				{{ publication.comments.length }}
			</button>
			<button
				key="{button.id}"
				@click="handleShareClick"
				className="flex gap-1 items-center justify-center cursor-pointer py-1 px-2 bg-(--post-button) rounded-md
                        hover:bg-(--post-button-hover)"
			>
				<component :is="ShareIcon" />
			</button>
		</footer>
	</article>
</template>
