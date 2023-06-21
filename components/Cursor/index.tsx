import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import styles from './cursor.module.scss';

const Cursor = () => {
	useEffect(() => {
		let cursor = document.getElementById('cursor');

		const handleMouseMoveTwo = (e: { clientX: number; clientY: number }) => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;
			gsap.to(cursor, { left: `${mouseX}px`, top: `${mouseY}px ` });
		};

		window.addEventListener('mousemove', handleMouseMoveTwo);

		return () => {
			window.removeEventListener('mousemove', handleMouseMoveTwo);
		};
	}, []);

	return <div id='cursor' className={styles.cursor} />;
};

export default Cursor;
