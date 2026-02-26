/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,ts}"],
	safelist: [
		"vfm",
		"vfm--overlay",
		"vfm__overlay",
		"vfm--fixed",
		"vfm--inset",
		"vfm__content",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
