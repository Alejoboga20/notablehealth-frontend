import { CssBaseline, ThemeProvider } from '@mui/material';
import { SWRConfig } from 'swr';
import { AppointmentsProvider } from './context';

import { AppRouter } from './router';
import { lightTheme } from './themes';

const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json());

export const App = () => {
	return (
		<SWRConfig
			value={{
				refreshInterval: 0,
				fetcher,
			}}
		>
			<AppointmentsProvider>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<AppRouter />
				</ThemeProvider>
			</AppointmentsProvider>
		</SWRConfig>
	);
};
