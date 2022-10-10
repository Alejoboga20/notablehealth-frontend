import { useContext } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { AppointmentsContext } from '../../context';
import { Appointments } from './Appointments';

export const AppointmentsList = () => {
	const { selectedPhysician } = useContext(AppointmentsContext);

	return (
		<>
			{selectedPhysician ? (
				<Appointments physicianId={selectedPhysician.id} />
			) : (
				<Box sx={{ padding: '2rem' }}>
					<Typography variant='h1' component='h1'>
						Select Physician
					</Typography>
				</Box>
			)}
		</>
	);
};
