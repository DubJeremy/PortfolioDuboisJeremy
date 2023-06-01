import React from 'react';

import useMediaQuery from '@/tools/useMediaQuery';

import styles from './lines.module.scss';

const Lines = () => {
	const [targetReached] = useMediaQuery(`(min-width: 500px)`);

	return (
		<div className={styles.lines}>
			<div className={styles.lineXL} />
			<div className={styles.lineXL} />
			<div className={styles.lineXL} />
			<div className={styles.lineXL} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineS} />
			<div className={styles.lineXL} />
			<div className={styles.lineXL} />
			<div className={styles.lineXL} />
			<div className={styles.lineXL} />
		</div>
	);
};

export default Lines;
