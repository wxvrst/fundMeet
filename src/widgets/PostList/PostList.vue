<script setup lang="ts">
import {
	PublicationCard,
	type ExtendedPublication,
} from "@/features/extended-publication";
// TODO: fetch
const publications = ref<ExtendedPublication[]>([]);
</script>
<template>
	<PublicationCard
		v-for="(item, index) in publications"
		:key="index"
		:publication="item"
	/>
</template>
