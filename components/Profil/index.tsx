import React from 'react';
import Image from 'next/image';

import useTranslation from '@/translations/hooks';
import Circle from '../Header/circle';
import ProfilPicture from './ProfilPicture';

import styles from './profil.module.scss';
import { Canvas } from '@react-three/fiber';

const Profil = () => {
	const { t } = useTranslation();

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
				<div className={styles.photoContainer}>
					<Canvas>
						<ProfilPicture />
					</Canvas>
				</div>
			</div>
			<div className={styles.info}>
				<h3>Dubois Jérémy</h3>
				<h4>Portfolio | {t('WEB_DEV')}</h4>
				<div className={styles.profilContact}>
					<div className={styles.location}>
						<div className={styles.imgLogoLocation}>
							<Image src={'/img/icon/location.webp'} alt='logo location' fill />{' '}
						</div>

						<p>Bordeaux</p>
					</div>
					<div className={styles.mail}>
						<p className={styles.at}>@</p>
						<a href='mailto:dubois.jeremy33@gmail.com'>
							dubois.jeremy33@gmail.com
						</a>
					</div>
					<div className={styles.btns}>
						<button>{t('CV')}</button>
						<div className={styles.logoLinkedin}>
							<Image src={'/img/logo/linkedin.webp'} alt='logo Linkedin' fill />
						</div>
					</div>
				</div>
				<div className={styles.circle}>
					<Circle />
				</div>
			</div>
			<div className={styles.stripes}>
				<Image
					src={'/img/patternStripedS.webp'}
					alt='patterne striped'
					fill
					className={styles.imgStripes}
				/>
			</div>
			<div className={styles.techs}>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/next.webp'}
						alt='next.js logo'
						fill
						className={styles.imgTech}
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/react.webp'}
						alt='react logo'
						fill
						className={styles.imgTech}
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/reactNative.webp'}
						alt='React Native logo'
						fill
						className={styles.imgTech}
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/typeOrm.webp'}
						alt='typeOrm logo'
						fill
						className={styles.imgTech}
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/postgreSql.webp'}
						alt='postgreSql logo'
						fill
						className={styles.imgTech}
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/express.webp'}
						alt='express logo'
						fill
						className={styles.imgTech}
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/mongoose.webp'}
						alt='mongoose logo'
						fill
						className={styles.imgTech}
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/mongoDb.webp'}
						alt='mongoDb logo'
						fill
						className={styles.imgTech}
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/typescript.webp'}
						alt='typescript logo'
						fill
						className={styles.imgTech}
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/sass.webp'}
						alt='sass logo'
						fill
						className={styles.imgTech}
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/affinityDesigner.webp'}
						alt='Affinity Designer logo'
						fill
						className={styles.imgTech}
					/>
				</div>
				<div className={styles.logoTech}>
					<Image
						src={'/img/logo/figma.webp'}
						alt='figma logo'
						fill
						className={styles.imgTech}
					/>
				</div>
			</div>
		</section>
	);
};

export default Profil;
