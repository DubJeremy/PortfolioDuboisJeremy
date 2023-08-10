import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import useTranslation from '@/components/Translator/hooks';
import useTheme from '../Theme/hooks';
import useMediaQuery from '@/tools/useMediaQuery';

import styles from './footer.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
	const { c } = useTheme();
	const [targetReached] = useMediaQuery(`(min-width: 992px)`);
	const { t } = useTranslation();

	const ref = useRef<HTMLDivElement>(null);

	// 	const element = ref.current;
	// 	if (element) {
	// 		gsap.fromTo(
	// 			element.querySelector('#scrollText2') as HTMLElement,
	// 			{
	// 				x: 0,
	// 			},
	// 			{
	// 				x: -150,
	// 				scrollTrigger: {
	// 					trigger: element.querySelector(
	// 						'#scrollTextContainer2'
	// 					) as HTMLElement,
	// 					start: 'top bottom',
	// 					end: 'bottom top',
	// 					scrub: true,
	// 					onUpdate: (self) => {
	// 						gsap.ticker.fps(120);
	// 						self.scroll();
	// 					},
	// 				},
	// 			}
	// 		);
	// 	}
	// }, []);

	useLayoutEffect(() => {
		const ctx = gsap.context((self) => {
			if (self.selector) {
				const scrollText = self.selector('#scrollTextS');
				scrollText.forEach((text: HTMLParagraphElement | null) => {
					gsap.to(text, {
						x: -250,
						scrollTrigger: {
							trigger: text,
							start: 'bottom bottom',
							end: 'top 20%',
							scrub: true,
						},
					});
				});
			}
		}, ref);
		return () => ctx.revert();
	}, []);

	return (
		<footer className={`${styles.footer} ${styles.component}`}>
			<div
				id='scrollTextContainer2'
				className={styles.scrollText}
				style={
					targetReached
						? { borderBottom: `3px solid ${c('MAIN')}` }
						: { borderBottom: `2px solid ${c('MAIN')}` }
				}
				ref={ref}
			>
				<p
					id='scrollTextS'
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
				<div className={`${styles.credit} cursorScale`}>
					{t('INSPIRED_BY')}
					Kazuki Noda Portfolio
				</div>
				<p>©Dubois Jérémy</p>
			</div>
		</footer>
	);
};

export default Footer;
