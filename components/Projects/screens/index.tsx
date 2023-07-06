import React from 'react';
import Image from 'next/image';

import styles from './screens.module.scss';

const Screens = ({
	paths,
	endAnimation,
	id,
	show,
}: {
	paths: string[];
	endAnimation: boolean;
	id?: number;
	show?: boolean;
}) => {
	console.log(show);

	return (
		<div className={styles.screens}>
			<div
				className={`${styles.screen} ${styles[paths[0]]} ${
					endAnimation && !show ? styles.endAnimFi : ''
				}`}
			>
				<Image
					src={`/img/screen/${paths[0]}.webp`}
					alt={`${paths[0]} screenshot`}
					fill
				/>
			</div>
			<div
				className={`${styles.screen} ${styles[paths[1]]} ${
					endAnimation && !show ? styles.endAnimS : ''
				}`}
			>
				<Image
					src={`/img/screen/${paths[1]}.webp`}
					alt={`${paths[1]} screenshot`}
					fill
				/>
			</div>
			<div
				className={`${styles.screen} ${styles[paths[2]]} ${
					endAnimation && !show ? styles.endAnimT : ''
				}`}
			>
				<Image
					src={`/img/screen/${paths[2]}.webp`}
					alt={`${paths[2]} screenshot`}
					fill
				/>
			</div>
			<div
				className={`${styles.screen} ${styles[paths[3]]} ${
					endAnimation && !show ? styles.endAnimFo : ''
				}`}
			>
				<Image
					src={`/img/screen/${paths[3]}.webp`}
					alt={`${paths[3]} screenshot`}
					fill
				/>
			</div>
			<div
				className={`${styles.screen} ${styles[paths[4]]} ${
					endAnimation && !show ? styles.endAnimFif : ''
				}`}
			>
				<Image
					src={`/img/screen/${paths[4]}.webp`}
					alt={`${paths[4]} screenshot`}
					fill
				/>
			</div>
		</div>
	);
};

export default Screens;
