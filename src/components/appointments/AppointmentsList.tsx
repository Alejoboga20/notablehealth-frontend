import { useContext } from 'react';
import { AppointmentsContext } from '../../context';
import { Appointments } from './Appointments';

export const AppointmentsList = () => {
	const { selectedPhysician } = useContext(AppointmentsContext);

	if (!selectedPhysician) return <p>Select Physician</p>;

	return <Appointments physicianId={selectedPhysician.id} />;
};
