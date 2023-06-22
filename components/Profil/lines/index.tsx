import React, { useEffect } from 'react';

import styles from './lines.module.scss';

const Lines = () => {
	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight / 1.5;
			const scrollPosition = window.scrollY;

			if (scrollPosition > windowHeight) {
				const linesElement = document.getElementById('lines');
				if (linesElement) {
					linesElement.classList.add(styles.linesAnimate);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div id='lines' className={styles.lines}>
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
		</div>
	);
};

export default Lines;
