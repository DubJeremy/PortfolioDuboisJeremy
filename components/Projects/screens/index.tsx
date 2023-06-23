import React from 'react';
import Image from 'next/image';

import styles from './screens.module.scss';

const Screens = ({ paths }: { paths: string[] }) => {
	return (
		<div className={styles.screens}>
			<div className={`${styles.screen} ${styles[paths[0]]}`}>
				<Image
					src={`/img/screen/${paths[0]}.webp`}
					alt={`${paths[0]} screenshot`}
					fill
				/>
			</div>
			<div className={`${styles.screen} ${styles[paths[1]]}`}>
				<Image
					src={`/img/screen/${paths[1]}.webp`}
					alt={`${paths[1]} screenshot`}
					fill
				/>
			</div>
			<div className={`${styles.screen} ${styles[paths[2]]}`}>
				<Image
					src={`/img/screen/${paths[2]}.webp`}
					alt={`${paths[2]} screenshot`}
					fill
				/>
			</div>
			<div className={`${styles.screen} ${styles[paths[3]]}`}>
				<Image
					src={`/img/screen/${paths[3]}.webp`}
					alt={`${paths[3]} screenshot`}
					fill
				/>
			</div>
			<div className={`${styles.screen} ${styles[paths[4]]}`}>
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
