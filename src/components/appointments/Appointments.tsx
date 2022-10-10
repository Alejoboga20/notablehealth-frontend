import { useContext } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { AppointmentsContext } from '../../context';
import { useAppointments } from '../../hooks/useAppointments';
import { FullScreenLoading } from '../ui';

export const Appointments = ({ physicianId }: Props) => {
	const { selectedPhysician } = useContext(AppointmentsContext);
	const { appointments, isLoading } = useAppointments(`physicians/${physicianId}`);

	if (!selectedPhysician) return <p>Select Physician</p>;
	if (isLoading) return <FullScreenLoading />;

	return (
		<Box sx={{ padding: '2rem' }}>
			<Box sx={{ mb: 8 }}>
				<Typography variant='h1' component='h1'>
					Dr. {selectedPhysician.name}
				</Typography>
				<Typography variant='body1' component='p'>
					{selectedPhysician.email}
				</Typography>
			</Box>

			<Grid
				container
				sx={{
					backgroundColor: 'secondary.main',
					color: 'white',
					padding: '0.5rem',
					fontWeight: 'bold',
				}}
			>
				<Grid item xs={1}>
					#
				</Grid>
				<Grid item xs={4}>
					Name
				</Grid>
				<Grid item xs={3}>
					Time
				</Grid>
				<Grid item xs={4}>
					Kind
				</Grid>
			</Grid>

			{appointments.length > 0 ? (
				appointments.map((appointment, index) => (
					<Grid
						container
						sx={{
							padding: '0.5rem',
							border: 'solid 0.01rem lightGray',
						}}
						key={`${appointment.patientName} ${appointment.time}`}
					>
						<Grid item xs={1}>
							{index + 1}
						</Grid>
						<Grid item xs={4}>
							{appointment.patientName}
						</Grid>
						<Grid item xs={3}>
							{appointment.time}
						</Grid>
						<Grid item xs={4}>
							{appointment.kind}
						</Grid>
					</Grid>
				))
			) : (
				<Typography variant='body1' color='error'>
					No Appointments
				</Typography>
			)}
		</Box>
	);
};

interface Props {
	physicianId: number;
}
