import useSWR, { SWRConfiguration } from 'swr';

export const useFetch = (url: string, config: SWRConfiguration = {}) => {
	const { data, error } = useSWR(`${import.meta.env.VITE_BASE_URL}${url}`, config);
	const isLoading = !error && !data;

	return { data, isLoading, error };
};
