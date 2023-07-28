import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import Picture from './Picture';
import useTranslation from '@/components/Translator/hooks';
import useTheme from '../Theme/hooks';
import useMediaQuery from '@/tools/useMediaQuery';

import styles from './footer.module.scss';

const Footer = () => {
	const { c } = useTheme();
	const [targetReached] = useMediaQuery(`(min-width: 992px)`);
	const { t } = useTranslation();
	const [hovered, setHovered] = useState(false);

	const ref = useRef<HTMLDivElement>(null);
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const element = ref.current;
		if (element) {
			gsap.fromTo(
				element.querySelector('#scrollText2') as HTMLElement,
				{
					x: 0,
				},
				{
					x: -150,
					scrollTrigger: {
						trigger: element.querySelector(
							'#scrollTextContainer2'
						) as HTMLElement,
						start: 'top bottom',
						end: 'bottom top',
						scrub: true,
						onUpdate: (self) => {
							gsap.ticker.fps(120);
							self.scroll();
						},
					},
				}
			);
		}
	}, []);

	return (
		<footer className={styles.footer} ref={ref}>
			<div
				id='scrollTextContainer2'
				className={styles.scrollText}
				style={
					targetReached
						? { borderBottom: `3px solid ${c('MAIN')}` }
						: { borderBottom: `2px solid ${c('MAIN')}` }
				}
			>
				<p
					id='scrollText2'
					style={
						targetReached
							? { WebkitTextStroke: `1.5px ${c('MAIN')}` }
							: { WebkitTextStroke: `1px ${c('MAIN')}` }
					}
				>
					Portfolio Dubois Jérémy
				</p>
			</div>
			<div className={styles.container} style={{ color: `${c('MAIN')}` }}>
				<div
					className={`${styles.credit} cursorScale`}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					{t('INSPIRED_BY')} Kazuki Noda Portfolio
				</div>
				<p>©Dubois Jérémy</p>
				<div
					className={`${styles.photoContainer} ${
						hovered ? styles.showPhoto : ''
					}`}
				>
					<Canvas>
						<Picture />
					</Canvas>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
