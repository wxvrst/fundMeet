<script setup lang="ts">
import type { User } from "./user.types";

const props = defineProps<{
	author: User;
}>();
</script>
<template>
	<!-- <ProfileIcon /> -->
	<div className="">
		<RouterLink :to="{ name: 'user', params: { id: author.id } }">
			{{ author.username }}
		</RouterLink>
	</div>
</template>
