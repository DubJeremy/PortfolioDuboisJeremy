import React, { useEffect } from 'react';

import styles from './lines.module.scss';

const Lines = ({ idName }: { idName: string }) => {
	useEffect(() => {
		const handleScroll = () => {
			const contactElement = document.getElementById(idName);

			if (contactElement) {
				const contactPosition = contactElement.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;

				if (contactPosition < windowHeight * 0.8) {
					const linesElement = document.getElementById(idName);
					if (linesElement) {
						linesElement.classList.add(styles.linesAnimate);
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [idName]);

	return (
		<div id={idName} className={styles.lines}>
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
