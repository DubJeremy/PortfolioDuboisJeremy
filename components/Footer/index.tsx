import React, { useState } from 'react';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Marquee from 'react-gsap-marquee';

import useTranslation from '@/components/Translator/hooks';
import useTheme from '../Theme/hooks';
import useMediaQuery from '@/tools/useMediaQuery';
import TermsComponent from '../Terms';
import Portal from '../Portal';

import styles from './footer.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
	const { c } = useTheme();
	const [targetReached] = useMediaQuery(`(min-width: 992px)`);
	const { t } = useTranslation();

	const currentYear = new Date().getFullYear();
	const [isToggled, setToggle] = useState(false);

	const showModal = () => {
		setToggle(!isToggled);
	};

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
			>
				<Marquee className={styles.marquee} speed={20} velocityFactor={1.5}>
					<p
						id='scrollTextS'
						style={
							targetReached
								? { WebkitTextStroke: `1.5px ${c('MAIN')}` }
								: { WebkitTextStroke: `1px ${c('MAIN')}` }
						}
					>
						Portfolio Dubois Jérémy <span>-</span>
					</p>
				</Marquee>
			</div>
			<div className={styles.container} style={{ color: `${c('MAIN')}` }}>
				<h5
					className={`${styles.terms}  cursorScale small`}
					onClick={() => showModal()}
				>
					{t('TERMS')}
				</h5>
				<div className={`${styles.credit} cursorScale`}>
					{t('INSPIRED_BY')}
					Kazuki Noda Portfolio
				</div>
				<p>©Dubois Jérémy {currentYear}</p>
			</div>
			<Portal selector='termsportal'>
				<TermsComponent showModal={() => showModal()} isToggled={isToggled} />
			</Portal>
		</footer>
	);
};

export default Footer;
