export interface IRoute {
	path: string;
	Component: () => JSX.Element;
	isPrivateRoute: boolean;
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
