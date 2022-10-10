import { Grid } from '@mui/material';
import { PhysiciansList } from '../components';

const HomePage = () => {
	return (
		<Grid container sx={{ height: '100vh' }}>
			<Grid item xs={12} sm={4} sx={{ backgroundColor: 'lightGray' }}>
				<PhysiciansList />
			</Grid>
			<Grid item xs={12} sm={8}>
				Appointment List
			</Grid>
		</Grid>
	);
};

export default HomePage;
