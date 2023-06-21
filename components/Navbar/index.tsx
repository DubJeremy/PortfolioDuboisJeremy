import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import useMediaQuery from '@/tools/useMediaQuery';
import useTranslation from '@/components/Translator/hooks';
import Translator from '../Translator';

import styles from './navbar.module.scss';

const Navbar = () => {
	const [targetReached] = useMediaQuery(`(min-width: 992px)`);
	const [isToggled, setToggle] = useState(false);
	const [activeSection, setActiveSection] = useState('profil');
	const { t } = useTranslation();
	const [scrollTarget, setScrollTaget] = useState(false);

	const toggleMenu = () => {
		setToggle(!isToggled);
	};

	const handleClick = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		sectionId: string
	) => {
		event.preventDefault();
		const section = document.getElementById(sectionId);

		if (section) {
			const sectionTop = section.offsetTop - window.innerHeight * 0.16;
			window.scrollTo({ top: sectionTop, behavior: 'smooth' });
		}
		setActiveSection(sectionId);
		if (!targetReached) {
			toggleMenu();
		}
	};

	useEffect(() => {
		if (isToggled) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	}, [isToggled]);

	useEffect(() => {
		const handleScroll = () => {
			const sections = Array.from(
				document.querySelectorAll('section')
			) as HTMLElement[];
			const scrollPosition = window.scrollY;

			sections.forEach((section: HTMLElement) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				const sectionId = section.getAttribute('id');

				if (
					scrollPosition >= sectionTop - sectionHeight * 0.25 &&
					scrollPosition < sectionTop + sectionHeight - sectionHeight * 0.25 &&
					sectionId !== null
				) {
					setActiveSection(sectionId);
				}
				if (scrollPosition >= sectionHeight) {
					setScrollTaget(true);
				} else {
					setScrollTaget(false);
				}
			});
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div className={`${styles.navbar} ${isToggled ? styles.navToggled : ''}`}>
				<div className={styles.logo}>
					<p className={scrollTarget ? styles.showLogo : ''}>
						<Image src={'/img/logo/logo.webp'} alt='logo D' fill />
					</p>

					<div className={styles.logoStriped}>
						<Image
							src={'/img/logoStriped.webp'}
							alt='stripes'
							fill
							className={styles.imgLogoStriped}
						/>
					</div>
				</div>
				{targetReached ? (
					<div className={`${styles.nav}  cursorScale small`}>
						<ul>
							<li className={activeSection === 'profil' ? styles.activeLi : ''}>
								<a
									href='#profil'
									className={activeSection === 'profil' ? styles.active : ''}
									onClick={(e) => handleClick(e, 'profil')}
								>
									Profil
								</a>
							</li>
							<li
								className={activeSection === 'projects' ? styles.activeLi : ''}
							>
								<a
									href='#projects'
									className={activeSection === 'projects' ? styles.active : ''}
									onClick={(e) => handleClick(e, 'projects')}
								>
									{t('PROJECT')}
								</a>
							</li>
							<li
								className={activeSection === 'contact' ? styles.activeLi : ''}
							>
								<a
									href='#contact'
									className={activeSection === 'contact' ? styles.active : ''}
									onClick={(e) => handleClick(e, 'contact')}
								>
									Contact
								</a>
							</li>
						</ul>
						<div className={styles.language}>
							<Translator />
						</div>
					</div>
				) : (
					<button
						className={`${styles.menuBurger} ${isToggled ? styles.opened : ''}`}
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
			<div
				className={`${styles.menuToggled} ${
					isToggled
						? `${styles.expanded} ${styles['fade-out']}`
						: `${styles.expanded} ${styles['slide-down']}`
				}`}
			>
				<div className={styles.navContainer}>
					<ul>
						<li>
							<a
								href='#profil'
								className={activeSection === 'profil' ? styles.active : ''}
								onClick={(e) => handleClick(e, 'profil')}
							>
								Profil
							</a>
						</li>
						<li>
							<a
								href='#projects'
								className={activeSection === 'projects' ? styles.active : ''}
								onClick={(e) => handleClick(e, 'projects')}
							>
								{t('PROJECT')}
							</a>
						</li>
						<li>
							<a
								href='#contact'
								className={`${
									activeSection === 'contact' ? styles.active : ''
								} ${styles.contact}`}
								onClick={(e) => handleClick(e, 'contact')}
							>
								Contact
							</a>
						</li>
					</ul>
					<div className={styles.languageToggle} onClick={() => toggleMenu()}>
						<Translator />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
