export default {
	dark: {
		'--background': '#fffff',
	},
	light: {
		'--background': '#00000',
	},
} as { [themeKey: string]: ThemeObject };

type ThemeObject = { [propertyKey: string]: string };
