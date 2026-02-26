<script setup lang="ts">
import LogoutIcon from "@/shared/assets/icons/LogoutIcon.vue";
import ProfileIcon from "@/shared/assets/icons/ProfileIcon.vue";
import SearchIcon from "@/shared/assets/icons/SearchIcon.vue";
import SettingIcon from "@/shared/assets/icons/SettingIcon.vue";
import Modal from "@/shared/ui/Modal.vue";
import AuthDialog from "../AuthDialog/AuthDialog.vue";

const router = useRouter();
// Search input
const searchValue = ref<string>("");
// Search addition field
const isSearchOpen = ref<boolean>(false);
// Is user authorized
const isAuth = ref<boolean>(false);
// Dropdown
const isDropdownOpen = ref<boolean>(false);
// Modal
const isModalOpen = ref<boolean>(false);

const handleToggleDropdown = () => {
	isDropdownOpen.value = !isDropdownOpen.value;
};
const handleCloseDropdown = () => {
	isDropdownOpen.value = false;
};
const handleToggleSearch = () => {
	isSearchOpen.value = !isSearchOpen.value;
};

const handleOpenModal = () => {
	isModalOpen.value = true;
};

const handleCloseModal = () => {
	isModalOpen.value = false;
};

const handleSearch = (query: string) => {
	searchValue.value = query;
};
// Для перехода на отдельную страницу поиска при клике на Enter
const handleEnterKeyDown = () => {
	// TODO: переделать как настрою, и добавить параметры
	router.push("/searchpage");
};

const dropdownItems = [
	{
		to: `/profile/`,
		icon: ProfileIcon,
		label: "Viev Profile",
	},
	{
		to: "#",
		icon: LogoutIcon,
		label: isAuth ? "Log out" : "Log in",
		onClick: handleOpenModal,
	},
	{
		to: "/settings",
		icon: SettingIcon,
		label: "Settings",
	},
];
</script>
<template>
	<header class="w-full py-1 px-2 border-b border-(--border)">
		<nav class="flex justify-between items-center">
			<RouterLink
				to="/"
				class="bg-transparent text-xl font-semibold inline hover:text-white transition-colors duration-400"
			>
				FundMeet
			</RouterLink>
			<div class="relative">
				<SearchIcon class="absolute top-2 left-2" />
				<input
					type="search"
					placeholder="Search"
					:class="{
						'bg-(--bg-primary) border border-(--border) pl-10 py-2 px-4 hover:border-(--border-hover) flex w-120 outline-0 transition-all duration-200 rounded-md focus:border-(--accent)': true,
						'rounded-b-none border-b-transparent!': isSearchOpen,
					}"
					v-model="searchValue"
					@focus="handleToggleSearch"
					@blur="handleToggleSearch"
					@input="handleSearch(searchValue)"
					@keyup.enter="handleEnterKeyDown"
				/>
				<div
					:class="`absolute w-full h-120 group bg-(--bg-primary) border border-t-transparent rounded-b-md transition-all duration-400 top-full overflow-hidden ease-out
          ${isSearchOpen ? 'max-h-80 border-(--accent)' : 'max-h-0 border-0 border-(--border)'}`"
				/>
			</div>

			<div>
				<button
					@click="handleToggleDropdown"
					@blur="handleCloseDropdown"
					class="hover:text-white w-32 text-center hover:bg-(--bg-primary-hover) transition-colors duration-400 py-2 px-6 rounded-md cursor-pointer self-center focus:outline-none"
				>
					My profile
				</button>
				<div
					class="absolute flex flex-col bg-(--bg-primary) rounded-md p-2 gap-1 mt-2 right-0 min-w-40 transition-all duration-400"
					:class="{
						'opacity-0 -translate-y-2 invisible': !isDropdownOpen,
						'opacity-100 translate-y-0': isDropdownOpen,
					}"
				>
					<div
						v-for="(item, index) in dropdownItems"
						:key="index"
						class="flex flex-col gap-1"
					>
						<RouterLink
							:to="item.to"
							class="hover:text-white hover:bg-(--bg-primary-hover) py-2 rounded-md flex gap-4 justify-start px-2 items-center transition-colors duration-400"
							@click="item.onClick"
						>
							<component :is="item.icon" />
							{{ item.label }}
						</RouterLink>
						<div class="border-b border-(--border)" />
					</div>
				</div>
			</div>
		</nav>
	</header>
	<Modal :isOpen="isModalOpen" @close="handleCloseModal">
		<AuthDialog />
	</Modal>
</template>
