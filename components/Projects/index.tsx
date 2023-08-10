import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import useTranslation from '@/components/Translator/hooks';
import useMediaQuery from '@/tools/useMediaQuery';
import { contentProjects } from '@/constants/contentProjects';
import Loader from './loader';
import Screens from './screens';
import useTheme from '../Theme/hooks';
import { useIsSafari } from '../IsSafariContext';

import styles from './projects.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	const { c, theme } = useTheme();
	const { t } = useTranslation();
	const isSafari = useIsSafari();
	const [targetReached] = useMediaQuery(`(min-width: 768px)`);
	const [targetReachedL] = useMediaQuery(`(min-width: 992px)`);
	const [isInLandscape, setIsInLandscape] = useState<boolean | null>(null);
	const [hoveredIndex, setHoveredIndex] = useState(1);
	const [hoveredTitleIndex, setHoveredTitleIndex] = useState(1);
	const [projectId, setProjectId] = useState(1);
	const project = contentProjects[projectId - 1];
	const [endAnim, setEndAnim] = useState(false);
	const [show, setShow] = useState(true);
	const [showLatency, setShowLatency] = useState(true);

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
			const sectionTop = section.offsetTop - parseInt('80px');
			window.scrollTo({ top: sectionTop, behavior: 'smooth' });
		}
		setEndAnim(true);

		setTimeout(() => {
			setEndAnim(false);
			nextProject();
		}, 500);
	};

	const ref = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context((self) => {
			if (self.selector) {
				const scrollText = self.selector('#scrollText');
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

	const nbProject = contentProjects.length;

	return (
		<section
			className={`${styles.projects} ${styles.component}`}
			id='projects'
			style={{ color: ` ${c('MAIN')}` }}
		>
			<div
				className={styles.title}
				style={
					targetReached
						? { borderBottom: `3px solid ${c('MAIN')}` }
						: { borderBottom: `2px solid ${c('MAIN')}` }
				}
			>
				<h3>{t('PROJECT')}</h3>
				<div
					className={`${styles.patternContainer} ${
						transition ? styles.transition : ''
					}`}
					style={
						targetReached
							? { borderLeft: `3px solid ${c('MAIN')}` }
							: { borderLeft: `2px solid ${c('MAIN')}` }
					}
				>
					<Image
						src={
							isSafari
								? targetReached
									? `/img/safari/patternShurikenXL${imgTheme}.svg`
									: `/img/safari/patternShurikenS${imgTheme}.svg`
								: targetReached
								? `/img/patternShurikenXL${imgTheme}.webp`
								: `/img/patternShurikenS${imgTheme}.webp`
						}
						alt='pattern'
						fill
					/>
				</div>
			</div>
			{targetReachedL && isInLandscape ? (
				<div className={styles.projectContainer}>
					<div
						className={styles.descContainer}
						style={{ borderRight: `3px solid ${c('MAIN')}` }}
					>
						{contentProjects.map((content: ProjectTypes.Content) => (
							<div
								key={content.id}
								className={`${styles.desc} ${
									hoveredIndex === content.id
										? styles.selected
										: styles.notSelected
								} cursorScale small`}
								style={{ borderBottom: `3px solid ${c('MAIN')}` }}
								onMouseEnter={() => {
									if (hoveredIndex !== content.id) {
										setEndAnim(true);
										setShow(false);
										setShowLatency(false);
										setHoveredTitleIndex(content.id);
										setTimeout(() => {
											setHoveredIndex(content.id);
											setEndAnim(false);
											setShow(true);
										}, 1500);
										setTimeout(() => {
											setShowLatency(true);
										}, 3000);
									}
								}}
							>
								<h4
									className={styles.title}
									style={
										hoveredTitleIndex === content.id
											? {
													color: `${c('MAIN')}`,
													WebkitTextStroke: `0.85px ${c('MAIN')}`,
													fontSize: '3.5vw',
											  }
											: {
													color: `transparent`,
													WebkitTextStroke: `0.85px ${c('MAIN')}`,
											  }
									}
								>
									{content.title}
								</h4>
								{content.done ? (
									<div
										className={`${styles.arrowD} ${
											hoveredTitleIndex === content.id && content.done
												? styles.showArrow
												: ''
										}`}
									>
										<Image
											src={
												isSafari
													? `/img/safari/icon/arrowD${imgTheme}.svg`
													: `/img/icon/arrowD${imgTheme}.webp`
											}
											alt='arrow'
											fill
										/>
									</div>
								) : (
									<div
										className={`${styles.inDevelopment} ${
											hoveredTitleIndex === content.id ? styles.showLoader : ''
										}`}
									>
										<p>{t('IN_DEVELOPMENT')}</p>
										<div className={styles.loader}>
											<Loader />
										</div>
									</div>
								)}
							</div>
						))}
					</div>
					<div
						className={styles.screensContainer}
						style={{ borderBottom: `3px solid ${c('MAIN')}` }}
					>
						<div className={styles.screens}>
							<Screens
								paths={contentProjects[hoveredIndex - 1].screens}
								endAnimation={endAnim}
								mobileApp={contentProjects[hoveredIndex - 1].mobileApp}
								id={contentProjects[hoveredIndex - 1].id}
								done={contentProjects[hoveredIndex - 1].done}
								link={contentProjects[hoveredIndex - 1].link}
							/>
							<div
								className={`${styles.showProject} ${
									show ? styles.visible : ''
								}`}
								style={{ backgroundColor: ` ${c('LIGHT')}` }}
							>
								<h4 className={show ? styles.showTitle : ''}>
									{contentProjects[hoveredIndex - 1].title}
								</h4>
								<div
									className={`${styles.contentProject} ${
										showLatency ? styles.showContentProject : ''
									}`}
								>
									<p className={styles.desc}>
										{t(`${contentProjects[hoveredIndex - 1].desc}`)}
									</p>
									<div className={styles.techs}>
										{contentProjects[hoveredIndex - 1].techs.map(
											(tech, index) => (
												<div key={index} className={styles.logoTech}>
													<Image
														src={
															isSafari
																? `/img/safari/logo/${tech}.svg`
																: `/img/logo/${tech}.webp`
														}
														alt={`${tech} logo`}
														fill
													/>
												</div>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<>
					{targetReached && (
						<div className={styles.projectCounter}>
							<p
								className={`${styles.projectId}  ${
									endAnim ? styles.idAnim : ''
								}`}
							>
								{project.id}
							</p>
							<p>/</p>
							<p>{nbProject}</p>
						</div>
					)}
					<div className={styles.screensContainer}>
						<Screens
							paths={project.screens}
							endAnimation={endAnim}
							mobileApp={project.mobileApp}
						/>
					</div>
					<div
						className={styles.descProject}
						style={
							targetReachedL
								? { borderBottom: `3px solid ${c('MAIN')}` }
								: targetReached
								? { borderBottom: `2px solid ${c('MAIN')}` }
								: { borderBottom: `none` }
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
										src={
											isSafari
												? `/img/safari/logo/${tech}.svg`
												: `/img/logo/${tech}.webp`
										}
										alt={`${tech} logo`}
										fill
									/>
								</div>
							))}
						</div>
					</div>
					{!targetReached && (
						<div
							className={styles.projectCounter}
							style={{ borderBottom: `2px solid ${c('MAIN')}` }}
						>
							<p
								className={`${styles.projectId}  ${
									endAnim ? styles.idAnim : ''
								}`}
							>
								{project.id}
							</p>
							<p>/</p>
							<p>{nbProject}</p>
						</div>
					)}
					<div
						className={styles.btns}
						style={
							targetReachedL
								? { borderBottom: `3px solid ${c('MAIN')}` }
								: { borderBottom: `2px solid ${c('MAIN')}` }
						}
					>
						{project.done ? (
							<a href={project.link} className={styles.viewProject}>
								<p>{t('VIEW_PROJECT')}</p>
								<div
									className={`${styles.arrowD} ${
										transition ? styles.transition : ''
									}`}
								>
									<Image
										src={
											isSafari
												? `/img/safari/icon/arrowD${imgTheme}.svg`
												: `/img/icon/arrowD${imgTheme}.webp`
										}
										alt='arrow'
										fill
									/>
								</div>
							</a>
						) : (
							<div className={styles.inDevelopment}>
								<p>{t('IN_DEVELOPMENT')}</p>
								<div className={styles.loader}>
									<Loader />
								</div>
							</div>
						)}

						<div
							className={`${styles.logoStriped} ${
								transition ? styles.transition : ''
							}`}
							style={
								targetReachedL
									? {
											borderBottom: `3px solid ${c('MAIN')}`,
											borderLeft: `3px solid ${c('MAIN')}`,
									  }
									: {
											borderBottom: `2px solid ${c('MAIN')}`,
											borderLeft: `2px solid ${c('MAIN')}`,
									  }
							}
						>
							<Image
								src={
									isSafari
										? targetReachedL
											? `/img/safari/patternStripedS${imgTheme}.svg`
											: `/img/safari/patternStripedXL${imgTheme}.svg`
										: targetReachedL
										? `/img/patternStripedS${imgTheme}.webp`
										: `/img/patternStripedXL${imgTheme}.webp`
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
											borderBottom: `3px solid ${c('MAIN')}`,
											borderLeft: `3px solid ${c('MAIN')}`,
									  }
									: {
											borderBottom: `2px solid ${c('MAIN')}`,
											borderLeft: `2px solid ${c('MAIN')}`,
									  }
							}
						>
							<p>{t('NEXT')}</p>
							<div
								className={`${styles.arrowH} ${
									transition ? styles.transition : ''
								}`}
							>
								<Image
									src={
										isSafari
											? `/img/safari/icon/arrow${imgTheme}.svg`
											: `/img/icon/arrow${imgTheme}.webp`
									}
									alt='arrow'
									fill
								/>
							</div>
						</div>
					</div>
					<div
						id='scrollTextContainer'
						className={styles.scrollText}
						style={
							targetReachedL
								? { borderBottom: `3px solid ${c('MAIN')}` }
								: { borderBottom: `2px solid ${c('MAIN')}` }
						}
						ref={ref}
					>
						<div
							id='scrollText'
							style={{ WebkitTextStroke: `1px ${c('MAIN')}` }}
						>
							{t('PROJECT')} {t('PROJECT')}
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Projects;
