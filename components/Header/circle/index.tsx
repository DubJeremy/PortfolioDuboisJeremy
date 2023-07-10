import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

import styles from './circle.module.scss';

const Circle = () => {
	useEffect(() => {
		const circle = document.getElementById('circle');
		const tiltStrength = 40;

		const handleMouseMove = (e: { clientX: number; clientY: number }) => {
			const xPos = (e.clientX / window.innerWidth - 0.5) * tiltStrength;
			const yPos = (e.clientY / window.innerHeight - 0.5) * tiltStrength;

			gsap.to(circle, {
				rotationX: yPos,
				rotationY: -xPos,
				ease: 'power2.out',
			});
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div className={styles.circle}>
			<div className={styles.background} />
			<div id='circle' className={styles.img}>
				<Image src={'/img/ice.png'} alt='circle ice' fill />
			</div>
		</div>
	);
};

export default Circle;
