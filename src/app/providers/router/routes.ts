import type { RouteRecordRaw } from "vue-router";

const routes: readonly RouteRecordRaw[] = [
	{
		path: "/",
		name: "",
		component: () => import("@/pages/"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("@/pages/"),
	},
];
export default routes;
