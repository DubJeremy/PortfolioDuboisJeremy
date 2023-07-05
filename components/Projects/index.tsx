import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import useTranslation from '@/components/Translator/hooks';
import useMediaQuery from '@/tools/useMediaQuery';
import { contentProjects } from '@/constants/contentProjects';
import Lines from './lines';
import Loader from './loader';
import Screens from './screens';
import useTheme from '../Theme/hooks';

import styles from './projects.module.scss';

const Projects = () => {
	const { c } = useTheme();
	const { t } = useTranslation();
	const [targetReached] = useMediaQuery(`(min-width: 768px)`);
	const [targetReachedL] = useMediaQuery(`(min-width: 992px)`);
	const [isInLandscape, setIsInLandscape] = useState<boolean | null>(null);
	const [hoveredIndex, setHoveredIndex] = useState(-1);
	const [projectId, setProjectId] = useState(1);
	const project = contentProjects[projectId - 1];
	const [endAnim, setEndAnim] = useState(false);

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

	const nextProject = () => {
		switch (projectId) {
			case 1: {
				setProjectId(2);
				break;
			}
			case 2: {
				setProjectId(3);
				break;
			}
			case 3: {
				setProjectId(1);
				break;
			}
		}
	};

	const handleClick = (event: React.MouseEvent, sectionId: string) => {
		event.preventDefault();
		const section = document.getElementById(sectionId);

		if (section) {
			const sectionTop = section.offsetTop - window.innerHeight * 0.1;
			window.scrollTo({ top: sectionTop, behavior: 'smooth' });
		}
		setEndAnim(true);

		setTimeout(() => {
			setEndAnim(false);
			nextProject();
		}, 500);
	};

	const activAnim = () => {
		setEndAnim(true);

		setTimeout(() => {
			setEndAnim(false);
		}, 500);
	};

	const ref = useRef<HTMLDivElement>(null);
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const element = ref.current;
		if (element) {
			gsap.fromTo(
				element.querySelector('#scrollText') as HTMLElement,
				{
					x: 0,
				},
				{
					x: -100,
					scrollTrigger: {
						trigger: element.querySelector(
							'#scrollTextContainer'
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
		<section
			className={styles.projects}
			id='projects'
			ref={ref}
			style={{ color: ` ${c('MAIN')}` }}
		>
			<div
				className={styles.title}
				style={
					targetReached
						? { borderBottom: `4px solid ${c('MAIN')}` }
						: { borderBottom: `2px solid ${c('MAIN')}` }
				}
			>
				<h3>{t('PROJECT')}</h3>
				<div
					className={styles.patternContainer}
					style={
						targetReached
							? { borderLeft: `4px solid ${c('MAIN')}` }
							: { borderLeft: `2px solid ${c('MAIN')}` }
					}
				>
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
							className={styles.content}
							key={content.id}
							style={{ borderBottom: `4px solid ${c('MAIN')}` }}
						>
							<div
								className={styles.descProject}
								style={{ borderRight: `4px solid ${c('MAIN')}` }}
							>
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
							<div className={`${styles.screensContainer} cursorScale small`}>
								{hoveredIndex && (
									<>
										<div
											className={`${styles.showProject} ${
												hoveredIndex === content.id ? styles.visible : ''
											}`}
											onMouseEnter={() => {
												activAnim();
											}}
											onMouseLeave={() => setHoveredIndex(-1)}
											style={{ backgroundColor: ` ${c('LIGHT')}` }}
										>
											<h4
												className={
													hoveredIndex === content.id ? styles.showTitle : ''
												}
											>
												{content.title}
											</h4>
										</div>
										<div
											className={`${styles.screens} ${
												hoveredIndex === content.id ? styles.screensVisible : ''
											}`}
											onMouseEnter={() => setHoveredIndex(content.id)}
										>
											<Screens paths={content.screens} endAnimation={endAnim} />
										</div>
									</>
								)}
								<div
									className={styles.project}
									onMouseEnter={() => setHoveredIndex(content.id)}
									onMouseLeave={() => setHoveredIndex(-1)}
									style={{ WebkitTextStroke: `0.01px ${c('MAIN')}` }}
								>
									<h4>{content.title}</h4>
									<div className={styles.linesContainer}>
										<Lines idName={content.desc} />
									</div>
								</div>
							</div>
							{content.done ? (
								<div
									className={styles.btns}
									style={{ borderTop: `4px solid ${c('MAIN')}` }}
								>
									<a
										href={content.link}
										className={`${styles.viewProject}  cursorScale small`}
										style={{ borderRight: `4px solid ${c('MAIN')}` }}
									>
										<p>{t('VIEW_PROJECT')}</p>
										<div className={styles.arrowD}>
											<Image src={'/img/icon/arrowD.webp'} alt='arrow' fill />
										</div>
									</a>
									<div className={styles.pattern}>
										<Image
											src={'/img/patternStripedXL.webp'}
											alt='pattern striped'
											fill
										/>
									</div>
								</div>
							) : (
								<div
									className={styles.btns}
									style={{
										borderTop: `4px solid ${c('MAIN')}`,
									}}
								>
									<div
										className={styles.inDevelopment}
										style={{
											borderRight: `4px solid ${c('MAIN')}`,
										}}
									>
										<p>{t('IN_DEVELOPMENT')}</p>
										<div className={styles.loader}>
											<Loader />
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
					<div className={styles.screensContainer}>
						<Screens paths={project.screens} endAnimation={endAnim} />
					</div>
					<div
						className={styles.descProject}
						style={
							targetReachedL
								? { borderBottom: `4px solid ${c('MAIN')}` }
								: { borderBottom: `2px solid ${c('MAIN')}` }
						}
					>
						<h4
							className={endAnim ? styles.titleEndAnim : ''}
							style={{ WebkitTextStroke: `0.85px ${c('MAIN')}` }}
						>
							{project.title}
						</h4>
						<p className={endAnim ? styles.descEndAnim : ''}>
							{t(`${project.desc}`)}
						</p>
						<div className={styles.techs}>
							{project.techs.map((tech, index) => (
								<div
									key={index}
									className={`${styles.logoTech} ${
										endAnim ? styles.techAnim : ''
									}`}
								>
									<Image
										src={`/img/logo/${tech}.webp`}
										alt={`${tech} logo`}
										fill
									/>
								</div>
							))}
						</div>
					</div>
					<div
						className={styles.btns}
						style={
							targetReachedL
								? { borderBottom: `4px solid ${c('MAIN')}` }
								: { borderBottom: `2px solid ${c('MAIN')}` }
						}
					>
						<a href={project.link} className={styles.viewProject}>
							<p>{t('VIEW_PROJECT')}</p>
							<div className={styles.arrowD}>
								<Image src={'/img/icon/arrowD.webp'} alt='arrow' fill />
							</div>
						</a>
						<div
							className={styles.logoStriped}
							style={
								targetReachedL
									? {
											borderBottom: `4px solid ${c('MAIN')}`,
											borderLeft: `4px solid ${c('MAIN')}`,
									  }
									: {
											borderBottom: `2px solid ${c('MAIN')}`,
											borderLeft: `2px solid ${c('MAIN')}`,
									  }
							}
						>
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
						<div
							className={styles.next}
							onClick={(e) => handleClick(e, 'projects')}
							style={
								targetReachedL
									? {
											borderBottom: `4px solid ${c('MAIN')}`,
											borderLeft: `4px solid ${c('MAIN')}`,
									  }
									: {
											borderBottom: `2px solid ${c('MAIN')}`,
											borderLeft: `2px solid ${c('MAIN')}`,
									  }
							}
						>
							<p>{t('NEXT')}</p>
							<div className={styles.arrowH}>
								<Image src={'/img/icon/arrow.webp'} alt='arrow' fill />
							</div>
						</div>
					</div>
					<div
						id='scrollTextContainer'
						className={styles.scrollText}
						style={
							targetReachedL
								? { borderBottom: `4px solid ${c('MAIN')}` }
								: { borderBottom: `2px solid ${c('MAIN')}` }
						}
					>
						<div
							id='scrollText'
							style={{ WebkitTextStroke: `4px ${c('MAIN')}` }}
						>
							{t('PROJECT')} {t('PROJECT')}
							{/* {t('BY')} Dubois Jérémy */}
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Projects;
