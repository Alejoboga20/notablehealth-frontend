import useSWR, { SWRConfiguration } from 'swr';
import { Appointment, Physician } from '../interfaces';

export const useAppointments = (url: string, config: SWRConfiguration = {}) => {
	const { data, error } = useSWR<AppointmentsResponse>(
		`${import.meta.env.VITE_BASE_URL}${url}`,
		config
	);
	const isLoading = !error && !data;

	const appointments = data?.appoinments || [];

	return { appointments, isLoading, error };
};

interface AppointmentsResponse {
	ok: boolean;
	physician: Physician;
	appoinments: Appointment[];
}
