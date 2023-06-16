import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import useTranslation from '@/components/Translator/hooks';
import ProfilPicture from './ProfilPicture';

import styles from './profil.module.scss';
import { Canvas } from '@react-three/fiber';
import Circle from './circle';
import useMediaQuery from '@/tools/useMediaQuery';
import Lines from './lines';

const Profil = () => {
	const { t } = useTranslation();
	const [targetReached] = useMediaQuery(`(min-width: 768px)`);
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

	return (
		<section className={styles.profil} id='profil'>
			<div className={styles.desc}>
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
					<div className={styles.photoContainer}>
						<Canvas>
							<ProfilPicture />
						</Canvas>
					</div>
				)}
			</div>
			<div className={styles.info}>
				<h3>Dubois Jérémy</h3>
				<h4>Portfolio | {t('WEB_DEV')}</h4>
				<div className={styles.profilContact}>
					<div className={styles.location}>
						<div className={styles.imgLogoLocation}>
							<Image src={'/img/icon/location.webp'} alt='logo location' fill />{' '}
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
						<button>{t('CV')}</button>
						<a
							href='https://www.linkedin.com/in/jeremy-dubois-dev
							'
							className={styles.logoLinkedin}
						>
							<Image src={'/img/logo/linkedin.webp'} alt='logo Linkedin' fill />
						</a>
					</div>
				</div>
				<Circle />
			</div>
			<div className={styles.stripes}>
				<Image
					src={
						targetReached
							? '/img/patternStripedS.webp'
							: '/img/patternStripedXL.webp'
					}
					alt='patterne striped'
					fill
				/>
			</div>
			<div className={styles.techs}>
				<div className={`${styles.logoTech} ${styles.long}`}>
					<Image src={'/img/logo/next.webp'} alt='next.js logo' fill />
				</div>
				<div className={`${styles.logoTech} ${styles.square}`}>
					<Image src={'/img/logo/react.webp'} alt='react logo' fill />
				</div>
				<div className={`${styles.logoTech} ${styles.square}`}>
					<Image
						src={'/img/logo/reactNative.webp'}
						alt='React Native logo'
						fill
					/>
				</div>
				<div className={`${styles.logoTech} ${styles.square}`}>
					<Image src={'/img/logo/typeOrm.webp'} alt='typeOrm logo' fill />
				</div>
				<div className={`${styles.logoTech} ${styles.square}`}>
					<Image src={'/img/logo/postgreSql.webp'} alt='postgreSql logo' fill />
				</div>
				<div className={`${styles.logoTech} ${styles.long}`}>
					<Image src={'/img/logo/express.webp'} alt='express logo' fill />
				</div>
				<div className={`${styles.logoTech} ${styles.long}`}>
					<Image src={'/img/logo/mongoose.webp'} alt='mongoose logo' fill />
				</div>
				<div className={`${styles.logoTech} ${styles.thin}`}>
					<Image src={'/img/logo/mongoDb.webp'} alt='mongoDb logo' fill />
				</div>
				<div className={`${styles.logoTech} ${styles.square}`}>
					<Image src={'/img/logo/typescript.webp'} alt='typescript logo' fill />
				</div>
				<div className={`${styles.logoTech} ${styles.square}`}>
					<Image src={'/img/logo/sass.webp'} alt='sass logo' fill />
				</div>
				<div className={`${styles.logoTech} ${styles.square}`}>
					<Image
						src={'/img/logo/affinityDesigner.webp'}
						alt='Affinity Designer logo'
						fill
					/>
				</div>
				<div className={`${styles.logoTech} ${styles.thin}`}>
					<Image src={'/img/logo/figma.webp'} alt='figma logo' fill />
				</div>
			</div>
		</section>
	);
};

export default Profil;
