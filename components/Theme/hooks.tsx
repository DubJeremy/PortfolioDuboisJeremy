import { useContext } from 'react';

import { ThemeContext } from './context';
import {
	blue,
	green,
	yellow,
	purple,
	pink,
	white,
} from '@/styles/colorsThemes';

export default function useTheme() {
	const context = useContext(ThemeContext);

	const { theme, setTheme } = context;

	function c(key: string) {
		switch (theme) {
			case 'blue': {
				return blue[key];
			}
			case 'green': {
				return green[key];
			}
			case 'yellow': {
				return yellow[key];
			}
			case 'purple': {
				return purple[key];
			}
			case 'pink': {
				return pink[key];
			}
			case 'white': {
				return white[key];
			}
		}
	}

	return { c, theme, setTheme };
}
