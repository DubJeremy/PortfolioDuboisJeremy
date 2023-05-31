import React from 'react';

import useTranslation from '@/translations/hooks';

import styles from './projects.module.scss';
import Image from 'next/image';

const Projects = () => {
	const { t } = useTranslation();

	return (
		<section className={styles.projects} id='projects'>
			<div className={styles.header}>
				<div className={styles.title}>
					<h3>{t('PROJECT')}</h3>
					<div className={styles.patternContainer}>
						<Image
							src={'/img/patternShurikenS.webp'}
							alt='pattern'
							fill
							className={styles.imgPattern}
						/>
					</div>
				</div>
			</div>
			<div className={styles.screens}></div>
			<div className={styles.descProject}>
				<h4>KBDev Website</h4>
				<p>{t('KBDEV')}</p>
				<div className={styles.techs}>
					<div className={styles.logoTech}>
						<Image
							src={'/img/logo/next.webp'}
							alt='Next.js logo'
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
							src={'/img/logo/nodeMailer.webp'}
							alt='nodeMailer logo'
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
							src={'/img/logo/nodeMailer.webp'}
							alt='nodeMailer logo'
							fill
							className={styles.imgTech}
						/>
					</div>
				</div>
			</div>
			<div className={styles.btns}>
				<div className={styles.viewProject}>
					<p>{t('VIEW_PROJECT')}</p>
				</div>
				<div className={styles.logoStriped}>
					<Image
						src={'/img/patternStripedS.webp'}
						alt='pattern striped'
						fill
						className={styles.logoStriped}
					/>
				</div>
				<div className={styles.next}>
					<p>{t('NEXT')}</p>
					<div className={styles.logoTech}>
						<Image
							src={'/img/icon/arrow.webp'}
							alt='arrow'
							fill
							className={styles.arrow}
						/>
					</div>
				</div>
			</div>
			<div className={styles.scrollText}>
				<p>
					{t('PROJECT')} {t('BY')} Dubois Jérémy
				</p>
			</div>
		</section>
	);
};

export default Projects;
