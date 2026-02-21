import type { RouteLocationNormalized } from "vue-router";
import routes from "./routes";

export const previousRoute = ref<RouteLocationNormalized | null>(null);

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
