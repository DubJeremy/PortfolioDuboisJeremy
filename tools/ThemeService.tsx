import Themes from './themes';

const LOCAL_STORAGE_THEME_KEY = 'theme';

class ThemeService {
	private darkMode: boolean;

	constructor() {
		this.darkMode = false;
	}

	private loadTheme(themeName: string) {
		const selectedTheme = Themes[themeName];
		const html = document.getElementsByTagName('html')[0];

		Object.keys(selectedTheme).forEach((property: string) => {
			html.style.setProperty(property, selectedTheme[property]);
		});

		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeName);
	}

	public toggleTheme = () => {
		let nextTheme = 'light';

		if (this.darkMode) {
			this.darkMode = false;
		} else {
			this.darkMode = true;
			nextTheme = 'dark';
		}

		this.loadTheme(nextTheme);
	};

	public init = () => {
		const currentThemeName =
			localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? 'light';

		if (currentThemeName === 'dark') {
			this.darkMode = true;
		}

		this.loadTheme(currentThemeName);
	};
}

export default new ThemeService();
