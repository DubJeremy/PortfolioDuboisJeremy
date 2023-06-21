import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import styles from './cursor.module.scss';

const Cursor = () => {
	const [isGrow, setIsGrow] = useState(false);
	const [isGrowSmall, setIsGrowSmall] = useState(false);

	useEffect(() => {
		const cursor = document.getElementById('cursor');

		const handleMouseMove = (e) => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;
			gsap.to(cursor, { left: `${mouseX}px`, top: `${mouseY}px` });
		};

		const handleMouseEnter = (event) => {
			setIsGrow(true);
			setIsGrowSmall(event.target.classList.contains('growSmall'));
		};

		const handleMouseLeave = () => {
			setIsGrow(false);
		};

		window.addEventListener('mousemove', handleMouseMove);

		document.querySelectorAll('.cursorScale').forEach((link) => {
			link.addEventListener('mouseenter', handleMouseEnter);
			link.addEventListener('mouseleave', handleMouseLeave);
		});

		// document.querySelectorAll('.cursorScaleSmall').forEach((link) => {
		// 	link.addEventListener('mouseenter', handleMouseEnter);
		// 	link.addEventListener('mouseleave', handleMouseLeave);
		// });

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);

			// document.querySelectorAll('.cursorScale').forEach((link) => {
			// 	link.removeEventListener('mouseenter', handleMouseEnter);
			// 	link.removeEventListener('mouseleave', handleMouseLeave);
			// });
		};
	}, []);

	const cursorClassName = `${styles.cursor} ${isGrow ? styles.grow : ''} ${
		isGrowSmall ? styles['growSmall'] : ''
	}`;

	return <div id='cursor' className={cursorClassName} />;
};

export default Cursor;
