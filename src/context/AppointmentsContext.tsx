import { createContext } from 'react';
import { AppointmentsState } from './AppointmentsProvider';

export interface AppointmentsContextProps extends AppointmentsState {
	selectPhysician: (id: number) => void;
}

export const AppointmentsContext = createContext({} as AppointmentsContextProps);
