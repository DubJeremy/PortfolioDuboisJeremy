import React from 'react';

import styles from './screenFrame.module.scss';

const ScreenFrame = () => {
	return (
		<>
			<div className={`${styles.top} ${styles.sideFrame}`} />

			<div className={`${styles.right} ${styles.sideFrame}`} />
			<div className={`${styles.bottom} ${styles.sideFrame}`} />

			<div className={`${styles.left} ${styles.sideFrame}`} />
			<div
				className={`${styles.sideFrame} ${styles.corner} ${styles.rightTop}`}
			/>
			<div
				className={` ${styles.sideFrame} ${styles.corner} ${styles.rightBottom}`}
			/>
		</>
	);
};

export default ScreenFrame;
