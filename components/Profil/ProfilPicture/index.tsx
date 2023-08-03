import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

import styles from './profilPicture.module.scss';

const ProfilPicture = () => {
	useEffect(() => {
		const pp = document.getElementById('pp');
		const tiltStrength = 40;

		const handleMouseMove = (e: { clientX: number; clientY: number }) => {
			const xPos = (e.clientX / window.innerWidth - 0.5) * tiltStrength;
			const yPos = (e.clientY / window.innerHeight - 0.5) * tiltStrength;

			gsap.to(pp, {
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
		<div id='pp' className={`${styles.pp} cursorScale small`}>
			<Image src={`/img/pp.png`} alt={'Profil picture'} fill />
		</div>
	);
};

export default ProfilPicture;
