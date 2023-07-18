import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

import useTranslation from '@/components/Translator/hooks';
import useMediaQuery from '@/tools/useMediaQuery';
import { contentProjects } from '@/constants/contentProjects';
import Loader from './loader';
import Screens from './screens';
import useTheme from '../Theme/hooks';

import styles from './projects.module.scss';

const Projects = () => {
	const { c, theme } = useTheme();
	const { t } = useTranslation();
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
			const sectionTop = section.offsetTop - window.innerHeight * 0.1;
			window.scrollTo({ top: sectionTop, behavior: 'smooth' });
		}
		setEndAnim(true);

		setTimeout(() => {
			setEndAnim(false);
			nextProject();
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
							targetReached
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
							<Link
								key={content.id}
								href={`${content.link}`}
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
											src={`/img/icon/arrowD${imgTheme}.webp`}
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
							</Link>
						))}
					</div>
					<div
						className={styles.screensContainer}
						style={{ borderBottom: `3px solid ${c('MAIN')}` }}
					>
						<div className={styles.screens}>
							{/* <Screens
								paths={contentProjects[hoveredIndex - 1].screens}
								endAnimation={endAnim}
							/> */}

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
														src={`/img/logo/${tech}.webp`}
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
					<div className={styles.screensContainer}>
						<Screens paths={project.screens} endAnimation={endAnim} />
					</div>
					<div
						className={styles.descProject}
						style={
							targetReachedL
								? { borderBottom: `3px solid ${c('MAIN')}` }
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
								? { borderBottom: `3px solid ${c('MAIN')}` }
								: { borderBottom: `2px solid ${c('MAIN')}` }
						}
					>
						<a href={project.link} className={styles.viewProject}>
							<p>{t('VIEW_PROJECT')}</p>
							<div
								className={`${styles.arrowD} ${
									transition ? styles.transition : ''
								}`}
							>
								<Image
									src={`/img/icon/arrowD${imgTheme}.webp`}
									alt='arrow'
									fill
								/>
							</div>
						</a>
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
									targetReached
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
									src={`/img/icon/arrow${imgTheme}.webp`}
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
