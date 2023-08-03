import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
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
	const router = useRouter();
	const [theme, setTheme] = useState<ThemeKey>('blue');

	useEffect(() => {
		const selectTheme = localStorage.getItem('thm') as ThemeKey | null;
		if (selectTheme && themes.hasOwnProperty(selectTheme)) {
			setTheme(selectTheme);
		} else {
			setTheme('blue');
		}
		const options = { locale: selectTheme };
		router.push({ pathname: router.pathname, query: options }, undefined, {
			shallow: true,
		});
	}, [router]);

	function handleThemeChange(targetTheme: ThemeKey) {
		localStorage.setItem('thm', targetTheme);
		setTheme(targetTheme);
		const options = { locale: targetTheme };
		router.push({ pathname: router.pathname, query: options });
	}

	function c(key: string) {
		return themes[theme][key];
	}

	return { c, theme, handleThemeChange };
}
