<script setup lang="ts">
import type { Publication } from "./types";
const props = defineProps<{
	publication: Publication;
	content: string; // TODO: не знаю можно ли сюда просто так типы пихать, или разбить на блоки и использовать типы там
}>();
</script>
<template>
	<article
		className="flex flex-col gap-2 items-center p-2 w-6/10 rounded-md hover:bg-(--bg-post) cursor-pointer
             transition-color duration-200"
	>
		<span>{{ publication.date_added }}</span>

		<header className="flex flex-col self-start">
			<div className="flex items-center gap-1"></div>
			<div class="flex gap-1">
				<RouterLink
					v-for="(item, index) in publication.tags"
					:key="index"
					to="/"
				>
					{{ item }}
				</RouterLink>
			</div>
		</header>
		<div class="flex flex-col gap-2 items-center">
			<div class="text-left">
				{{ publication.header }}
			</div>
			<div>{{ content }}</div>
		</div>
	</article>
</template>
