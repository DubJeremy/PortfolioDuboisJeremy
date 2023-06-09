import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import styles from './circle.module.scss';
import Image from 'next/image';

const Circle = () => {
	useEffect(() => {
		const circle = document.getElementById('circle2');
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
		<div id='circle2' className={styles.circle}>
			<Image src={'/img/ice.png'} alt='circle ice' fill />
		</div>
	);
};

export default Circle;
