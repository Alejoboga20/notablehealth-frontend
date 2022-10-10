import { useContext } from 'react';
import { CircleOutlined } from '@mui/icons-material';
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { FullScreenLoading } from '../ui';
import { AppointmentsContext } from '../../context/AppointmentsContext';

export const PhysiciansList = () => {
	const { isLoading, physicians, selectPhysician } = useContext(AppointmentsContext);

	if (isLoading) return <FullScreenLoading />;

	return (
		<Box sx={{ padding: '2rem' }}>
			<Box sx={{ mb: 8 }}>
				<Typography variant='h1' component='h2' color='secondary'>
					notable
				</Typography>
			</Box>

			<Box>
				<Typography
					textTransform='uppercase'
					variant='h2'
					component='h2'
					color='black'
					fontWeight='bold'
				>
					Physicians
				</Typography>
			</Box>

			<Box>
				<List>
					{physicians.map((physician) => (
						<ListItem key={physician.id}>
							<ListItemButton onClick={() => selectPhysician(physician.id)}>
								<ListItemIcon>
									<CircleOutlined fontSize='small' />
								</ListItemIcon>
								<ListItemText primary={physician.name} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</Box>
	);
};
