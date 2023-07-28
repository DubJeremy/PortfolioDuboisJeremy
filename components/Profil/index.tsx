import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';

import useTranslation from '@/components/Translator/hooks';
import ProfilPicture from './ProfilPicture';
import Circle from './circle';
import useMediaQuery from '@/tools/useMediaQuery';
import Lines from './lines';
import useTheme from '../Theme/hooks';
import { useRouter } from 'next/router';

import styles from './profil.module.scss';

const Profil = ({ isSafari }: { isSafari: boolean }) => {
	const { c, theme } = useTheme();
	const { t } = useTranslation();
	const [targetReached] = useMediaQuery(`(min-width: 768px)`);
	const [targetReachedL] = useMediaQuery(`(min-width: 992px)`);
	const [isInLandscape, setIsInLandscape] = useState<boolean | null>(null);

	const [imgTheme, setImgTheme] = useState('');
	const [transition, setTransition] = useState(false);

	useEffect(() => {
		setTransition(true);
		setTimeout(() => {
			switch (theme) {
				case 'blue': {
					setImgTheme('');
					break;
				}
				case 'green': {
					setImgTheme('G');
					break;
				}
				case 'yellow': {
					setImgTheme('Y');
					break;
				}
				case 'purple': {
					setImgTheme('Pu');
					break;
				}
				case 'pink': {
					setImgTheme('Pi');
					break;
				}
				case 'white': {
					setImgTheme('W');
					break;
				}
			}
			setTransition(false);
		}, 500);
	}, [theme]);

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

	const router = useRouter();
	const handleDownload = () => {
		router.push('/img/DuboisJeremyCV.pdf');
	};

	return (
		<section
			className={styles.profil}
			id='profil'
			style={
				targetReached
					? {
							borderTop: `3px solid ${c('MAIN')}`,
							borderBottom: `3px solid ${c('MAIN')}`,
					  }
					: { borderTop: `2px solid ${c('MAIN')}` }
			}
		>
			<div
				className={styles.desc}
				style={
					targetReached
						? { borderBottom: `3px solid ${c('MAIN')}` }
						: { borderBottom: `2px solid ${c('MAIN')}` }
				}
			>
				<div className={styles.txt}>
					<h2>{t('DESC_TITLE_F')}</h2>
					<h2>{t('DESC_TITLE_S')}</h2>
					<p>{t('DESC_F')}</p>
					<p>{t('DESC_S')}</p>
					<p>{t('DESC_T')}</p>
				</div>

				{targetReachedL && isInLandscape ? (
					<div className={styles.container}>
						<div className={styles.photoContainer}>
							<Canvas>
								<ProfilPicture />
							</Canvas>
						</div>
						<div className={styles.linesContainer}>
							<Lines />
						</div>
					</div>
				) : (
					<div className={`${styles.photoContainer}  cursorScale`}>
						<Canvas>
							<ProfilPicture />
						</Canvas>
					</div>
				)}
			</div>
			<div
				className={`${styles.info} cursorScale small`}
				style={
					targetReachedL && isInLandscape
						? {
								borderBottom: `3px solid ${c('MAIN')}`,
								color: `${c('MAIN')}`,
								borderRight: `3px solid ${c('MAIN')}`,
						  }
						: targetReached && !isInLandscape
						? { borderBottom: `3px solid ${c('MAIN')}`, color: `${c('MAIN')}` }
						: { borderBottom: `2px solid ${c('MAIN')}`, color: `${c('MAIN')}` }
				}
			>
				<h3>Dubois Jérémy</h3>
				<h4>Portfolio | {t('WEB_DEV')}</h4>
				<div className={styles.profilContact}>
					<div className={styles.location}>
						<div
							className={`${styles.imgLogoLocation} ${
								transition ? styles.transition : ''
							}`}
						>
							<Image
								src={
									isSafari
										? `/img/safari/icon/location${imgTheme}.svg`
										: `/img/icon/location${imgTheme}.webp`
								}
								alt='logo location'
								fill
							/>{' '}
						</div>
						<p>Bordeaux, France</p>
					</div>
					<div className={styles.mail}>
						<p className={styles.at}>@</p>
						<a href='mailto:dubois.jeremy33@gmail.com'>
							dubois.jeremy33@gmail.com
						</a>
					</div>
					<div className={styles.btns}>
						<button
							onClick={handleDownload}
							style={
								c('MAIN') === '#ffffff'
									? {
											border: `2px solid ${c('MAIN')}`,
											boxSizing: 'border-box',
									  }
									: { backgroundColor: `${c('MAIN')}` }
							}
						>
							{t('CV')}
						</button>
						<a
							href='https://www.linkedin.com/in/jeremy-dubois-dev
							'
							className={`${styles.logoLinkedin} ${
								transition ? styles.transition : ''
							}`}
						>
							<Image
								src={
									isSafari
										? `/img/safari/logo/linkedin${imgTheme}.svg`
										: `/img/logo/linkedin${imgTheme}.webp`
								}
								alt='logo Linkedin'
								fill
							/>
						</a>
					</div>
				</div>
				<Circle />
			</div>
			<div
				className={`${styles.stripes} ${transition ? styles.transition : ''}`}
				style={
					targetReached && !isInLandscape
						? { borderBottom: `3px solid ${c('MAIN')}` }
						: targetReached && isInLandscape
						? { borderRight: `3px solid  ${c('MAIN')}` }
						: { borderBottom: `2px solid ${c('MAIN')}` }
				}
			>
				<Image
					src={
						isSafari
							? targetReached
								? `/img/safari/patternStripedS${imgTheme}.svg`
								: `/img/safari/patternStripedXL${imgTheme}.svg`
							: targetReached
							? `/img/patternStripedS${imgTheme}.webp`
							: `/img/patternStripedXL${imgTheme}.webp`
					}
					alt='patterne striped'
					fill
				/>
			</div>
			<div
				className={styles.techs}
				style={
					targetReached
						? { opacity: 1 }
						: { borderBottom: `2px solid ${c('MAIN')}` }
				}
			>
				<div className={styles.logoTech}>
					<Image
						src={isSafari ? '/img/safari/logo/next.svg' : '/img/logo/next.webp'}
						alt='next.js logo'
						fill
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={
							isSafari ? '/img/safari/logo/react.svg' : '/img/logo/react.webp'
						}
						alt='react logo'
						fill
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={
							isSafari
								? '/img/safari/logo/reactNative.svg'
								: '/img/logo/reactNative.webp'
						}
						alt='React Native logo'
						fill
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={
							isSafari
								? '/img/safari/logo/typeOrm.svg'
								: '/img/logo/typeOrm.webp'
						}
						alt='typeOrm logo'
						fill
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={
							isSafari
								? '/img/safari/logo/postgreSql.svg'
								: '/img/logo/postgreSql.webp'
						}
						alt='postgreSql logo'
						fill
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={
							isSafari
								? '/img/safari/logo/express.svg'
								: '/img/logo/express.webp'
						}
						alt='express logo'
						fill
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={
							isSafari
								? '/img/safari/logo/mongoose.svg'
								: '/img/logo/mongoose.webp'
						}
						alt='mongoose logo'
						fill
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={
							isSafari
								? '/img/safari/logo/mongoDb.svg'
								: '/img/logo/mongoDb.webp'
						}
						alt='mongoDb logo'
						fill
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={
							isSafari
								? '/img/safari/logo/typescript.svg'
								: '/img/logo/typescript.webp'
						}
						alt='typescript logo'
						fill
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={isSafari ? '/img/safari/logo/sass.svg' : '/img/logo/sass.webp'}
						alt='sass logo'
						fill
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={
							isSafari ? '/img/safari/logo/docker.svg' : '/img/logo/docker.webp'
						}
						alt='Docker logo'
						fill
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={
							isSafari ? '/img/safari/logo/figma.svg' : '/img/logo/figma.webp'
						}
						alt='figma logo'
						fill
					/>
				</div>
			</div>
		</section>
	);
};

export default Profil;
