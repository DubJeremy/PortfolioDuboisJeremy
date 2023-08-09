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

type ThemeKey = 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'white';

const themes: { [key in ThemeKey]: { [key: string]: string } } = {
	blue,
	green,
	yellow,
	purple,
	pink,
	white,
};

export default function useTheme() {
	const context = useContext(ThemeContext);
	const { theme, setTheme } = context;

	function c(key: string) {
		switch (theme) {
			case 'blue': {
				return blue[key];
				break;
			}
			case 'green': {
				return green[key];
				break;
			}
			case 'yellow': {
				return yellow[key];
				break;
			}
			case 'purple': {
				return purple[key];
				break;
			}
			case 'pink': {
				return pink[key];
				break;
			}
			case 'white': {
				return white[key];
				break;
			}
		}
	}
	return { c, theme, setTheme };
}
