import { useEffect, useReducer } from 'react';
import { usePhysicians } from '../hooks';
import { AppointmentsContext } from './AppointmentsContext';
import { AppointmentsReducer } from './appointmentsReducer';
import { useAppointments } from '../hooks/useAppointments';

export interface AppointmentsState {
	physicians: Physician[];
	selectedPhysician: Physician | null;
	appointments: Appointment[];
	isLoading: boolean;
}

const INITIAL_STATE: AppointmentsState = {
	physicians: [],
	selectedPhysician: null,
	appointments: [],
	isLoading: true,
};
export const AppointmentsProvider = ({ children }: AppointmentsProviderProps) => {
	const { physicians, isLoading } = usePhysicians('physicians');
	const [state, dispatch] = useReducer(AppointmentsReducer, INITIAL_STATE);

	const loadPhysicians = () => {
		dispatch({ type: '[Appointments] - Load Physicians', payload: physicians });
	};

	const selectPhysician = (id: number) => {
		const physicianToSelect = physicians.find((physician) => physician.id === id);

		dispatch({ type: '[Appointments] - Select Physician', payload: physicianToSelect! });
	};

	useEffect(() => {
		loadPhysicians();
	}, [isLoading]);

	return (
		<AppointmentsContext.Provider value={{ ...state, isLoading, selectPhysician }}>
			{children}
		</AppointmentsContext.Provider>
	);
};

interface AppointmentsProviderProps {
	children: JSX.Element | JSX.Element[];
}

export interface Physician {
	id: number;
	name: string;
	email: string;
}

export interface Appointment {
	patientName: string;
	time: string;
	kind: string;
}
