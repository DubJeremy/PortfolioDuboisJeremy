import React, { useState } from 'react';
import Image from 'next/image';

import useMediaQuery from '@/tools/useMediaQuery';
import useTranslation from '@/translations/hooks';

import styles from './navbar.module.scss';

const Navbar = () => {
	const [targetReached] = useMediaQuery(`(min-width: 500px)`);
	const [isToggled, setToggle] = useState(false);
	const [activeSection, setActiveSection] = useState('');
	const { t } = useTranslation();

	const handleClick = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		sectionId: string
	) => {
		event.preventDefault();
		const section = document.getElementById(sectionId);

		if (section) {
			const sectionTop = section.offsetTop - window.innerHeight * 0.1;
			window.scrollTo({ top: sectionTop, behavior: 'smooth' });
		}
		setToggle(false);
	};

	const toggleMenu = () => {
		setToggle(!isToggled);
	};

	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.logo}>
					<div className={styles.logoStriped}>
						<Image
							src={'/img/logoStriped.webp'}
							alt='stripes'
							fill
							className={styles.imgLogoStriped}
						/>
					</div>
					{/* <a href='#home'>D</a> */}
				</div>
				{targetReached ? (
					<div className={styles.nav}>
						<ul>
							<li>Profil</li>
							<li>{t('PROJECT')}</li>
							<li>Contact</li>
						</ul>
						<div className={styles.language}>FR</div>
					</div>
				) : (
					<button
						// className={styles.menuBurger}
						className={`${styles.menuBurger} ${isToggled ? styles.opened : ''}`}
						// onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
						onClick={toggleMenu}
						aria-label='Main Menu'
					>
						<svg width='50' height='50' viewBox='0 0 100 100'>
							<path
								className={`${styles.line} ${styles.line1}`}
								d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
							/>
							<path
								className={`${styles.line} ${styles.line2}`}
								d='M 20,50 H 80'
							/>
							<path
								className={`${styles.line} ${styles.line3}`}
								d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
							/>
						</svg>
					</button>
				)}
			</div>
			{isToggled && (
				<div className={styles.menuToggled}>
					<div className={styles.navContainer}>
						<ul>
							<li>
								<a
									href='#profil'
									className={activeSection === 'profilNav' ? styles.active : ''}
									onClick={(e) => handleClick(e, 'profil')}
								>
									Bien-être
								</a>
								<div
									className={`${styles.activeIndicator} ${
										activeSection === 'profil' ? styles.activeIndicatorOn : ''
									}`}
								></div>
							</li>
							<li>
								<a
									href='#works'
									className={activeSection === 'worksNav' ? styles.active : ''}
									onClick={(e) => handleClick(e, 'works')}
								>
									Bien-être
								</a>
								<div
									className={`${styles.activeIndicator} ${
										activeSection === 'works' ? styles.activeIndicatorOn : ''
									}`}
								></div>
							</li>
							<li>
								<a
									href='#contact'
									className={
										activeSection === 'contactNav' ? styles.active : ''
									}
									onClick={(e) => handleClick(e, 'contact')}
								>
									Bien-être
								</a>
								<div
									className={`${styles.activeIndicator} ${
										activeSection === 'contact' ? styles.activeIndicatorOn : ''
									}`}
								></div>
							</li>
						</ul>
						<div className={styles.languageToggle}>FR</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
