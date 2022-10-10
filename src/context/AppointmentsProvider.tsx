import { useEffect, useReducer } from 'react';
import { usePhysicians } from '../hooks';
import { Physician } from '../interfaces';
import { AppointmentsContext } from './AppointmentsContext';
import { AppointmentsReducer } from './appointmentsReducer';

export interface AppointmentsState {
	physicians: Physician[];
	selectedPhysician: Physician | null;
	isLoading: boolean;
}

const INITIAL_STATE: AppointmentsState = {
	physicians: [],
	selectedPhysician: null,
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
