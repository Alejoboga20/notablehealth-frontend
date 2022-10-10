import useSWR, { SWRConfiguration } from 'swr';

export const usePhysicians = (url: string, config: SWRConfiguration = {}) => {
	const { data, error } = useSWR<PhysiciansResponse>(
		`${import.meta.env.VITE_BASE_URL}${url}`,
		config
	);
	const isLoading = !error && !data;

	const physicians = data?.physicians || [];

	return { physicians, isLoading, error };
};

interface PhysiciansResponse {
	ok: boolean;
	physicians: Physician[];
}

interface Physician {
	id: number;
	name: string;
	email: string;
}
