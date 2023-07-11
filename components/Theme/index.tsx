import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import useTheme from './hooks';

import styles from './theme.module.scss';

export default function Theme() {
	const { theme, setTheme } = useTheme();
	const { pathname, push } = useRouter();
	const scrollPosition = useRef(0);

	useEffect(() => {
		const currentTheme = localStorage.getItem('thm') || 'blue';

		setTheme(currentTheme);
		const options = {
			locale: currentTheme,
		};
		push({ pathname, query: options });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		window.scrollTo(0, scrollPosition.current);
	}, [theme]);

	function handleLocaleChange(
		targetTheme: string,
		event: React.MouseEvent<HTMLButtonElement>
	) {
		event.preventDefault();
		if (!window) {
			return;
		}

		localStorage.setItem('thm', targetTheme);

		switch (targetTheme) {
			case 'blue': {
				setTheme('blue');
				break;
			}
			case 'green': {
				setTheme('green');
				break;
			}
			case 'yellow': {
				setTheme('yellow');
				break;
			}
			case 'purple': {
				setTheme('purple');
				break;
			}
			case 'pink': {
				setTheme('pink');
				break;
			}
			case 'white': {
				setTheme('white');
				break;
			}
		}

		const options = {
			locale: targetTheme,
		};
		push({ pathname, query: options });
		scrollPosition.current = window.scrollY;
	}

	return (
		<div className={styles.themes}>
			<button
				className={`${styles.theme} ${styles.blue} ${
					theme === 'blue' ? styles.selected : ''
				}`}
				onClick={(event) => handleLocaleChange('blue', event)}
			/>
			<button
				className={`${styles.theme} ${styles.green} ${
					theme === 'green' ? styles.selected : ''
				}`}
				onClick={(event) => handleLocaleChange('green', event)}
			/>
			<button
				className={`${styles.theme} ${styles.yellow} ${
					theme === 'yellow' ? styles.selected : ''
				}`}
				onClick={(event) => handleLocaleChange('yellow', event)}
			/>
			<button
				className={`${styles.theme} ${styles.purple} ${
					theme === 'purple' ? styles.selected : ''
				}`}
				onClick={(event) => handleLocaleChange('purple', event)}
			/>
			<button
				className={`${styles.theme} ${styles.pink} ${
					theme === 'pink' ? styles.selected : ''
				}`}
				onClick={(event) => handleLocaleChange('pink', event)}
			/>
			<button
				className={`${styles.theme} ${styles.white} ${
					theme === 'white' ? styles.selected : ''
				}`}
				onClick={(event) => handleLocaleChange('white', event)}
			/>
		</div>
	);
}
