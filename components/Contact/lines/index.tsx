import React, { useEffect } from 'react';

import useMediaQuery from '@/tools/useMediaQuery';

import styles from './lines.module.scss';

const Lines = () => {
	const [targetReached] = useMediaQuery(`(min-width: 768px)`);

	useEffect(() => {
		const handleScroll = () => {
			const contactElement = document.getElementById('contact');

			if (contactElement) {
				const contactPosition = contactElement.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;

				if (contactPosition < windowHeight * 0.8) {
					const linesElement = document.getElementById('lines');
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
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			{targetReached && (
				<>
					<div className={styles.line} />
					<div className={styles.line} />
					<div className={styles.line} />
					<div className={styles.line} />
					<div className={styles.line} />
					<div className={styles.line} />
					<div className={styles.line} />
					<div className={styles.line} />
					<div className={styles.line} />
					<div className={styles.line} />
				</>
			)}
		</div>
	);
};

export default Lines;
