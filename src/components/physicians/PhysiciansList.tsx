import { CircleOutlined } from '@mui/icons-material';
import { usePhysicians } from '../../hooks/usePhysicians';
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

export const PhysiciansList = () => {
	const { physicians, isLoading } = usePhysicians('physicians');

	if (isLoading) return <FullScreenLoading />;

	return (
		<Box sx={{ padding: '2rem' }}>
			<Box sx={{ mb: 8 }}>
				<Typography variant='h1' component='h1' color='secondary'>
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
							<ListItemButton>
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
