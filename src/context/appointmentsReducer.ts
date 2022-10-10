import { AppointmentsState, Physician } from './';

type AppointmentsActionType =
	| { type: '[Appointments] - Load Physicians'; payload: Physician[] }
	| { type: '[Appointments] - Select Physician'; payload: Physician };

export const AppointmentsReducer = (
	state: AppointmentsState,
	action: AppointmentsActionType
): AppointmentsState => {
	switch (action.type) {
		case '[Appointments] - Load Physicians':
			return {
				...state,
				physicians: action.payload,
			};

		case '[Appointments] - Select Physician':
			return {
				...state,
				selectedPhysician: action.payload,
			};

		default:
			return state;
	}
};
