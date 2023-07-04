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

	function t(key: string) {
		switch (theme) {
			case 'blue': {
				blue[key];
				break;
			}
			case 'green': {
				green[key];
				break;
			}
			case 'yellow': {
				yellow[key];
				break;
			}
			case 'purple': {
				purple[key];
				break;
			}
			case 'pink': {
				pink[key];
				break;
			}
			case 'white': {
				white[key];
				break;
			}
		}
		return;
	}

	return { t, theme, setTheme };
}
