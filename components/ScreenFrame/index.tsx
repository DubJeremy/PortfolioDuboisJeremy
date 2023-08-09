import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import useTheme from '../Theme/hooks';
import useMediaQuery from '@/tools/useMediaQuery';
import { contentProjects } from '@/constants/contentProjects';
import { useIsSafari } from '../IsSafariContext';

import styles from './screenFrame.module.scss';

const ScreenFrame = () => {
	const { c } = useTheme();
	const isSafari = useIsSafari();
	const [targetReached] = useMediaQuery(`(min-width: 992px)`);

	const [imageUrls, setImageUrls] = useState<string[]>([]);

	useEffect(() => {
		const urls: string[] = [];
		for (const project of contentProjects) {
			for (const screen of project.screens) {
				const imageUrl = isSafari
					? `/img/safari/screen/${screen}.svg`
					: `/img/screen/${screen}.webp`;
				urls.push(imageUrl);
			}
		}
		setImageUrls(urls);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSafari]);

	return (
		<>
			<div
				className={`${styles.top} ${styles.sideFrame} `}
				style={
					targetReached
						? { borderBottom: `3px solid ${c('MAIN')}` }
						: { borderBottom: `2px solid ${c('MAIN')}` }
				}
			/>

			<div
				className={`${styles.right} ${styles.sideFrame}`}
				style={
					targetReached
						? { borderLeft: `3px solid ${c('MAIN')}` }
						: { borderLeft: `2px solid ${c('MAIN')}` }
				}
			/>
			<div
				className={`${styles.bottom} ${styles.sideFrame}`}
				style={
					targetReached
						? { borderTop: `3px solid ${c('MAIN')}` }
						: { borderTop: `2px solid ${c('MAIN')}` }
				}
			/>

			<div
				className={`${styles.left} ${styles.sideFrame}`}
				style={
					targetReached
						? { borderRight: `3px solid ${c('MAIN')}` }
						: { borderRight: `2px solid ${c('MAIN')}` }
				}
			/>
			<div
				className={` ${styles.sideFrame} ${styles.corner} ${styles.rightBottom}`}
			/>
			<div
				className={` ${styles.sideFrame} ${styles.corner} ${styles.leftBottom}`}
			/>
			<div
				className={` ${styles.sideFrame} ${styles.corner} ${styles.leftTop}`}
			/>
			<div
				className={` ${styles.sideFrame} ${styles.corner} ${styles.rightTop}`}
			/>
			{imageUrls.map((url, index) => (
				<div key={index} className={styles.screenLoader}>
					<Image src={url} fill sizes='1vw, 1vw' alt={url} />
				</div>
			))}
		</>
	);
};

export default ScreenFrame;
