import React from 'react';
import Image from 'next/image';

import styles from './screens.module.scss';

const Screens = ({
	paths,
	endAnimation,
	mobileApp,
}: {
	paths: string[];
	endAnimation: boolean;
	mobileApp: boolean;
}) => {
	return (
		<div className={styles.screens}>
			<div
				className={`${styles.screen} ${styles[paths[0]]} ${
					endAnimation ? styles.endAnimFi : ''
				} ${mobileApp ? styles.mobile : styles.desk}`}
			>
				<Image
					src={`/img/screen/${paths[0]}.webp`}
					alt={`${paths[0]} screenshot`}
					fill
				/>
			</div>
			<div
				className={`${styles.screen} ${styles[paths[1]]} ${
					endAnimation ? styles.endAnimS : ''
				} ${styles.mobile}`}
			>
				<Image
					src={`/img/screen/${paths[1]}.webp`}
					alt={`${paths[1]} screenshot`}
					fill
				/>
			</div>
			<div
				className={`${styles.screen} ${styles[paths[2]]} ${
					endAnimation ? styles.endAnimT : ''
				} ${mobileApp ? styles.mobile : styles.desk}`}
			>
				<Image
					src={`/img/screen/${paths[2]}.webp`}
					alt={`${paths[2]} screenshot`}
					fill
				/>
			</div>
			<div
				className={`${styles.screen} ${styles[paths[3]]} ${
					endAnimation ? styles.endAnimFo : ''
				} ${styles.mobile}`}
			>
				<Image
					src={`/img/screen/${paths[3]}.webp`}
					alt={`${paths[3]} screenshot`}
					fill
				/>
			</div>
			<div
				className={`${styles.screen} ${styles[paths[4]]} ${
					endAnimation ? styles.endAnimFif : ''
				} ${mobileApp ? styles.mobile : styles.desk}`}
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
