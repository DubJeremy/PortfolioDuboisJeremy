import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

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

	useEffect(() => {
		if (!window) {
			return;
		}

		const selectTheme = localStorage.getItem('thm') || theme;
		setTheme(selectTheme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
