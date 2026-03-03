<script setup lang="ts">
import ProfileIcon from "@/shared/assets/icons/ProfileIcon.vue";
import type { ExtendedPublication } from "./types";
import LikeIcon from "@/shared/assets/icons/LikeIcon.vue";
import DotsIcon from "@/shared/assets/icons/DotsIcon.vue";
import CommentIcon from "@/shared/assets/icons/CommentIcon.vue";
import ShareIcon from "@/shared/assets/icons/ShareIcon.vue";
const props = defineProps<{
	publication: ExtendedPublication;
}>();
// TODO: Add functions, and add methods to store
const handleLikeClick = () => {};
const handleCommentClick = () => {};
const handleShareClick = () => {};
const handleDotsClick = () => {};
</script>
<template>
	<article
		className="flex flex-col gap-2 items-center p-2 w-4/10 rounded-md cursor-pointer"
	>
		<header class="flex justify-between w-full self-start">
			<div class="flex flex-col">
				<div class="flex items-center gap-1">
					<ProfileIcon width="48" />
					<div class="flex flex-col items-start">
						<RouterLink
							:to="{ name: 'user', params: { id: publication.author_info.id } }"
							class="text-2xl hover:underline"
						>
							{{ publication.author_info.username }}
						</RouterLink>
					</div>
				</div>
				<!-- tags -->
				<div v-if="publication.tags" class="flex gap-1">
					<RouterLink
						v-for="(item, index) in publication.tags"
						:key="index"
						to="/search"
						class="cursor-pointer hover:underline"
					>
						#{{ item.name }}
					</RouterLink>
				</div>
			</div>
			<button
				class="hover:bg-(--bg-primary) rounded-full w-fit h-fit p-3 transition-colors duration-400"
				@click="handleDotsClick"
			>
				<DotsIcon />
			</button>
		</header>
		<!-- content -->
		<div class="flex flex-col gap-2 items-start text-left">
			<span class="text-2xl"> {{ publication.header }} </span>
			<img
				v-if="publication.content.image_content"
				:src="publication.content.image_content"
				:alt="publication.header"
				class="w-full object-contait object-center overflow-hidden rounded-md"
			/>
			<span class="leading-relaxed tracking-wide">
				{{ publication.content.text_content }}
			</span>
		</div>
		<!-- actions -->
		<footer class="flex self-start w-full justify-between items-center">
			<div class="flex gap-2">
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
					{{ publication.comments?.length }}
				</button>
				<button
					key="{button.id}"
					@click="handleShareClick"
					className="flex gap-1 items-center justify-center cursor-pointer py-1 px-2 bg-(--post-button) rounded-md
                        hover:bg-(--post-button-hover)"
				>
					<component :is="ShareIcon" />
				</button>
			</div>
			<div class="">
				{{ publication.date_added.getDay() }}.{{
					publication.date_added.getMonth()
				}}.{{ publication.date_added.getFullYear() }}
				{{ publication.date_added.getHours() }}:{{
					publication.date_added.getMinutes()
				}}
			</div>
		</footer>
		<div class="border-b border-(--border) w-full my-2" />
	</article>
</template>
