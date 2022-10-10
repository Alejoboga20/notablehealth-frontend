import { CssBaseline, ThemeProvider } from '@mui/material';
import { SWRConfig } from 'swr';

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
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<AppRouter />
			</ThemeProvider>
		</SWRConfig>
	);
};
