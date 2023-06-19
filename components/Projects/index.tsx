import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import useTranslation from '@/components/Translator/hooks';
import useMediaQuery from '@/tools/useMediaQuery';
import { contentProjects } from '@/constants/contentProjects';
import Lines from './lines';

import styles from './projects.module.scss';

const Projects = () => {
	const { t } = useTranslation();
	const [targetReached] = useMediaQuery(`(min-width: 768px)`);
	const [targetReachedL] = useMediaQuery(`(min-width: 992px)`);
	const [isInLandscape, setIsInLandscape] = useState<boolean | null>(null);
	const [isVisible, setIsVisible] = useState(false);

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
		<section className={styles.projects} id='projects'>
			<div className={styles.title}>
				<h3>{t('PROJECT')}</h3>
				<div className={styles.patternContainer}>
					<Image
						src={
							targetReached
								? '/img/patternShurikenXL.webp'
								: '/img/patternShurikenS.webp'
						}
						alt='pattern'
						fill
					/>
				</div>
			</div>
			{targetReachedL && isInLandscape ? (
				<>
					{contentProjects.map((content: ProjectTypes.Content) => (
						<div
							className={`${styles.content} ${
								content.footer ? styles.footer : styles.noFooter
							}`}
							key={content.id}
						>
							<div className={styles.descProject}>
								<p>{t(`${content.desc}`)}</p>
								<div className={styles.techs}>
									{content.techs.map((tech, index) => (
										<div key={index} className={styles.logoTech}>
											<Image
												src={`/img/logo/${tech}.webp`}
												alt={`${tech} logo`}
												fill
											/>
										</div>
									))}
								</div>
							</div>
							<div className={styles.screensContainer}>
								{isVisible ? (
									<div className={styles.showProject}>
										<h4>{content.title}</h4>
										<div className={styles.screens}></div>
									</div>
								) : (
									<div className={styles.project}>
										<h4>{content.title}</h4>
										<Lines />
									</div>
								)}
							</div>
							{content.footer && (
								<div className={styles.btns}>
									<div className={styles.viewProject}>
										<p>{t('VIEW_PROJECT')}</p>
										<div className={styles.arrowD}>
											<Image src={'/img/icon/arrowD.webp'} alt='arrow' fill />
										</div>
									</div>
									<div className={styles.pattern}>
										<Image
											src={'/img/patternStripedXL.webp'}
											alt='pattern striped'
											fill
										/>
									</div>
								</div>
							)}
						</div>
					))}
				</>
			) : (
				<>
					<div className={styles.screens}></div>
					<div className={styles.descProject}>
						<h4>KBDev Website</h4>
						<p>{t('KBDEV')}</p>
						<div className={styles.techs}>
							<div className={styles.logoTech}>
								<Image src={'/img/logo/next.webp'} alt='Next.js logo' fill />
							</div>
							<div className={styles.logoTech}>
								<Image src={'/img/logo/react.webp'} alt='react logo' fill />
							</div>
							<div className={styles.logoTech}>
								<Image
									src={'/img/logo/typescript.webp'}
									alt='typescript logo'
									fill
								/>
							</div>
							<div className={styles.logoTech}>
								<Image src={'/img/logo/sass.webp'} alt='sass logo' fill />
							</div>
							<div className={styles.logoTech}>
								<Image
									src={'/img/logo/nodeMailer.webp'}
									alt='nodeMailer logo'
									fill
								/>
							</div>
							<div className={styles.logoTech}>
								<Image
									src={'/img/logo/affinityDesigner.webp'}
									alt='Affinity Designer logo'
									fill
								/>
							</div>
							<div className={styles.logoTech}>
								<Image
									src={'/img/logo/framerMotion.webp'}
									alt='Framer Motion logo'
									fill
								/>
							</div>
						</div>
					</div>
					<div className={styles.btns}>
						<div className={styles.viewProject}>
							<p>{t('VIEW_PROJECT')}</p>
							<div className={styles.arrowD}>
								<Image src={'/img/icon/arrowD.webp'} alt='arrow' fill />
							</div>
						</div>
						<div className={styles.logoStriped}>
							<Image
								src={
									targetReached
										? '/img/patternStripedS.webp'
										: '/img/patternStripedXL.webp'
								}
								alt='pattern striped'
								fill
							/>
						</div>
						<div className={styles.next}>
							<p>{t('NEXT')}</p>
							<div className={styles.arrowH}>
								<Image src={'/img/icon/arrow.webp'} alt='arrow' fill />
							</div>
						</div>
					</div>
					<div className={styles.scrollText}>
						<p>
							{t('PROJECT')} {t('BY')} Dubois Jérémy
						</p>
					</div>
				</>
			)}
		</section>
	);
};

export default Projects;
