import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import useTheme from '../Theme/hooks';

import styles from './cursor.module.scss';

const Cursor = () => {
	const { c } = useTheme();
	const [isGrow, setIsGrow] = useState(false);
	const [isGrowSmall, setIsGrowSmall] = useState(false);

	useEffect(() => {
		const cursor = document.getElementById('cursor');

		const handleMouseMove = (e: MouseEvent) => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;
			gsap.to(cursor, { left: `${mouseX}px`, top: `${mouseY}px` });
		};

		const handleMouseEnter = () => {
			setIsGrow(true);
			setIsGrowSmall(true);
		};

		const handleMouseLeave = () => {
			setIsGrow(false);
		};

		window.addEventListener('mousemove', handleMouseMove);

		document.querySelectorAll('.cursorScale').forEach((link) => {
			link.addEventListener('mousemove', () => {
				if (link.classList.contains('small')) {
					setIsGrowSmall(true);
				} else {
					setIsGrow(true);
				}
			});

			link.addEventListener('mouseleave', () => {
				setIsGrow(false);
				setIsGrowSmall(false);
			});
		});

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	const cursorClassName = `${styles.cursor} ${isGrow ? styles.grow : ''} ${
		isGrowSmall ? styles['growSmall'] : ''
	}`;

	return (
		<div
			id='cursor'
			className={cursorClassName}
			style={{ border: `2px solid ${c('MAIN')}` }}
		/>
	);
};

export default Cursor;
