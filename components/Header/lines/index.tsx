import React from 'react';

import useMediaQuery from '@/tools/useMediaQuery';

import styles from './lines.module.scss';

const Lines = () => {
	const [targetReached] = useMediaQuery(`(min-width: 768px)`);
	const [targetReachedXL] = useMediaQuery(`(min-width: 1140px)`);

	return (
		<div className={styles.lines}>
			{targetReachedXL && (
				<>
					<div className={styles.lineXL} />
					<div className={styles.lineXL} />
					<div className={styles.lineXL} />
					<div className={styles.lineXL} />
					<div className={styles.lineXL} />
				</>
			)}
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
			{targetReached && (
				<>
					<div className={styles.lineXL} />
					<div className={styles.lineXL} />
					<div className={styles.lineXL} />
					<div className={styles.lineXL} />
					<div className={styles.lineXL} />
				</>
			)}
		</div>
	);
};

export default Lines;
