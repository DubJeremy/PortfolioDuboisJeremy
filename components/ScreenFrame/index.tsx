import React from 'react';

import useTheme from '../Theme/hooks';
import useMediaQuery from '@/tools/useMediaQuery';

import styles from './screenFrame.module.scss';

const ScreenFrame = ({ isSafari }: { isSafari: boolean }) => {
	const { c } = useTheme();
	const [targetReached] = useMediaQuery(`(min-width: 992px)`);

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
		</>
	);
};

export default ScreenFrame;
