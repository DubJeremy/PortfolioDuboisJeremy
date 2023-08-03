import React, { useEffect, useRef } from 'react';
import useTheme from './hooks';

import styles from './theme.module.scss';

export default function Theme() {
	const scrollPosition = useRef(0);
	const { theme, handleThemeChange } = useTheme();

	useEffect(() => {
		window.scrollTo(0, scrollPosition.current);
	}, [theme]);

	return (
		<div className={styles.themes}>
			<button
				aria-label='theme blue'
				className={`${styles.theme} ${styles.blue} ${
					theme === 'blue' ? styles.selected : ''
				}`}
				onClick={() => handleThemeChange('blue')}
			/>
			<button
				aria-label='theme green'
				className={`${styles.theme} ${styles.green} ${
					theme === 'green' ? styles.selected : ''
				}`}
				onClick={() => handleThemeChange('green')}
			/>
			<button
				aria-label='theme yellow'
				className={`${styles.theme} ${styles.yellow} ${
					theme === 'yellow' ? styles.selected : ''
				}`}
				onClick={() => handleThemeChange('yellow')}
			/>
			<button
				aria-label='theme purple'
				className={`${styles.theme} ${styles.purple} ${
					theme === 'purple' ? styles.selected : ''
				}`}
				onClick={() => handleThemeChange('purple')}
			/>
			<button
				aria-label='theme pink'
				className={`${styles.theme} ${styles.pink} ${
					theme === 'pink' ? styles.selected : ''
				}`}
				onClick={() => handleThemeChange('pink')}
			/>
			<button
				aria-label='theme white'
				className={`${styles.theme} ${styles.white} ${
					theme === 'white' ? styles.selected : ''
				}`}
				onClick={() => handleThemeChange('white')}
			/>
		</div>
	);
}
