const useBaseApiStore = () => {
	// const default_per_page
	const items = ref([]) 
	
	const error = ref<string | null>(null)
	
	// Loadings, можно сделать несколько под разные методы
	const isLoading = ref<boolean>(false)
	
	
}
export {useBaseApiStore}