import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
		plugins: { js },
		extends: ["js/recommended"],
		languageOptions: { globals: globals.browser },
	},

	tseslint.configs.recommended,
	pluginVue.configs["flat/essential"],

	{
		files: ["**/*.vue"],
		languageOptions: {
			parserOptions: { parser: tseslint.parser },
		},
	},

	{
		rules: {
			"no-undef": "off",

			"no-restricted-imports": [
				"error",
				"src/entities/*/ui/*",
				"src/entities/*/model/*",
				"src/features/*/ui/*",
				"src/features/*/model/*",
				"../",

				{
					name: "src/app/model",
					message: "Используйте src/app (index.ts)",
				},
			],

			"vue/multi-word-component-names": [
				"warn",
				{ ignores: ["App", "RouterView"] },
			],
		},
	},
]);
