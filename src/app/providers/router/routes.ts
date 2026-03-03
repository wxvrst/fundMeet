import type { RouteRecordRaw } from "vue-router";

const routes: readonly RouteRecordRaw[] = [
	{
		path: "/",
		name: "",
		component: () => import("@/pages/HomePage"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("@/pages/NoMatchPage"),
	},
	{
		path: "/user/:id",
		name: "user",
		component: () => import("@/pages/UserPage"),
		props: true,
	},
	{
		path: "/search/:query?",
		name: "search",
		component: () => import("@/pages/SearchPage"),
		props: true,
		// children: [
		// 	{
		// 		path: "/users",
		// 		component: () => import("@/widget/UserSearch"),
		// 	},
		// 	{
		// 		path: "/publications",
		// 		component: () => import("@/widgets/PublicationsSearch"),
		// 	},
		// ],
	},
];
export default routes;
