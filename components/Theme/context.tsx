import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import ThemePortal from '../../tools/themePortal';
// import ThemeContext from '../../tools/themeContext';

interface ThemeContextInterface {
	theme: string;
	setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
	theme: 'fr',
	setTheme: () => {},
});

type Props = {
	children?: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
	const [theme, setTheme] = useState('blue');

	// const handleThemeChange = (theme: string) => {
	// 	setTheme(theme);
	// };

	const Themes = {
		blue: {
			main: '#0070a2',
			light: '#bce4f6',
		},
		green: {
			main: '#00a24e',
			light: '#a6f6d3',
		},
		yellow: {
			main: '#f2b63d',
			light: '#f7e9c2',
		},
		purple: {
			main: '#7f00ff',
			light: '#c996ff',
		},
		pink: {
			main: '#ff1e75',
			light: '#ff9cc8',
		},
		white: {
			main: '#ffffff',
			light: '#f9f9f9',
		},
	};

	useEffect(() => {
		if (!window) {
			return;
		}

		const selectTheme = localStorage.getItem('thm') || theme;
		setTheme(selectTheme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{/* <ThemeContext.Provider value={theme}> */}
			{/* <ThemePortal>
				<div className='squares'>
					<div
						className='square'
						style={{ backgroundColor: Themes.blue.main }}
						onClick={() => handleThemeChange('blue')}
					></div>
					<div
						className='square'
						style={{ backgroundColor: Themes.yellow.main }}
						onClick={() => handleThemeChange('yellow')}
					></div>
					<div
						className='square'
						style={{ backgroundColor: Themes.purple.main }}
						onClick={() => handleThemeChange('purple')}
					></div>
					<div
						className='square'
						style={{ backgroundColor: Themes.pink.main }}
						onClick={() => handleThemeChange('pink')}
					></div>
					<div
						className='square'
						style={{ backgroundColor: Themes.white.main }}
						onClick={() => handleThemeChange('white')}
					></div>
				</div>
			</ThemePortal> */}
			{children}
		</ThemeContext.Provider>
	);
}
