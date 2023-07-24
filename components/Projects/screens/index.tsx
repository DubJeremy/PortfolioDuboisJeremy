import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

import useMediaQuery from '@/tools/useMediaQuery';

import styles from './screens.module.scss';
import Link from 'next/link';

const Screens = ({
	paths,
	endAnimation,
	mobileApp,
	id,
	done,
	link,
}: {
	paths: string[];
	endAnimation: boolean;
	mobileApp: boolean;
	id?: number;
	done?: boolean;
	link?: string;
}) => {
	const [targetReached] = useMediaQuery(`(max-width: 992px)`);
	const [targetReachedL] = useMediaQuery(`(min-width: 992px)`);
	const [isInLandscape, setIsInLandscape] = useState<boolean | null>(null);

	useEffect(() => {
		heightFunction();
		window.addEventListener('resize', heightFunction, false);
	}, []);
	const heightFunction = () => {
		if (typeof window !== 'undefined') {
			if (window.innerHeight < window.innerWidth) {
				setIsInLandscape(true);
			} else {
				setIsInLandscape(false);
			}
		}
	};

	const [hovered, setHovered] = useState<boolean>(false);

	useEffect(() => {
		const screens = document.getElementById('screens');
		const tiltStrength = 40;

		const handleMouseMove = (e: { clientX: number; clientY: number }) => {
			const xPos = (e.clientX / window.innerWidth - 0.5) * tiltStrength;
			const yPos = (e.clientY / window.innerHeight - 0.5) * tiltStrength;

			gsap.to(screens, {
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

	const handleClick = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		sectionId: string
	) => {
		event.preventDefault();
		const section = document.getElementById(sectionId);

		if (section) {
			const sectionTop = targetReached
				? section.offsetTop - parseInt('100px')
				: section.offsetTop - parseInt('80px');
			window.scrollTo({ top: sectionTop, behavior: 'smooth' });
		}
	};

	return (
		<div id='screens' className={styles.screens}>
			<Link
				href={link ? link : '/#projects'}
				onClick={(e) => {
					if (!link) handleClick(e, 'projects');
				}}
				className={`${styles.screen} ${styles[paths[0]]} ${
					endAnimation ? styles.endAnimFi : ''
				} ${mobileApp ? styles.mobile : styles.desk} cursorScale small ${
					done ? 'link' : ''
				}`}
				onMouseEnter={() => {
					setHovered(true);
				}}
				onMouseLeave={() => {
					setHovered(false);
				}}
			>
				<Image
					src={`/img/screen/${paths[0]}.webp`}
					alt={`${paths[0]} screenshot`}
					fill
				/>
			</Link>
			<Link
				href={link ? link : '/#projects'}
				onClick={(e) => handleClick(e, 'projects')}
				className={`${styles.screen} ${styles[paths[1]]} ${
					endAnimation ? styles.endAnimS : ''
				} ${styles.mobile} cursorScale small ${done ? 'link' : ''}`}
				onMouseEnter={() => {
					setHovered(true);
				}}
				onMouseLeave={() => {
					setHovered(false);
				}}
			>
				<Image
					src={`/img/screen/${paths[1]}.webp`}
					alt={`${paths[1]} screenshot`}
					fill
				/>
			</Link>

			<div
				className={`${styles.screen} ${
					(!targetReachedL && !isInLandscape) || hovered ? styles[paths[2]] : ''
				} ${endAnimation ? styles.endAnimT : ''} ${
					mobileApp ? styles.mobile : styles.desk
				} ${
					id === 1
						? styles.KBDevPositionD
						: id === 2
						? styles.PetPositionD
						: id === 3
						? styles.TCGPositionM
						: ''
				}`}
			>
				<Image
					src={`/img/screen/${paths[2]}.webp`}
					alt={`${paths[2]} screenshot`}
					fill
				/>
			</div>
			<div
				className={`${styles.screen} ${
					(!targetReachedL && !isInLandscape) || hovered ? styles[paths[3]] : ''
				} ${endAnimation ? styles.endAnimFo : ''} ${styles.mobile} ${
					targetReached && isInLandscape && hovered ? styles[paths[3]] : ''
				} ${
					id === 1
						? styles.KBDevPositionM
						: id === 2
						? styles.PetPositionM
						: id === 3
						? styles.TCGPositionM
						: ''
				}`}
			>
				<Image
					src={`/img/screen/${paths[3]}.webp`}
					alt={`${paths[3]} screenshot`}
					fill
				/>
			</div>
			<div
				className={`${styles.screen} ${
					(!targetReachedL && !isInLandscape) || hovered ? styles[paths[4]] : ''
				} ${endAnimation ? styles.endAnimFif : ''} ${
					mobileApp ? styles.mobile : styles.desk
				} ${
					id === 1
						? styles.KBDevPositionD
						: id === 2
						? styles.PetPositionD
						: id === 3
						? styles.TCGPositionM
						: ''
				}`}
			>
				<Image
					src={`/img/screen/${paths[4]}.webp`}
					alt={`${paths[4]} screenshot`}
					fill
				/>
			</div>
		</div>
	);
};

export default Screens;
