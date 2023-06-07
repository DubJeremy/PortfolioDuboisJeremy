import React from 'react';

import useMediaQuery from '@/tools/useMediaQuery';

import styles from './lines.module.scss';

const Lines = () => {
	const [targetReached] = useMediaQuery(`(min-width: 500px)`);

	return (
		<div className={styles.lines}>
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
			<div className={`${styles.line} ${styles.line}`} />
		</div>
	);
};

export default Lines;
