import React from 'react';
import Image from 'next/image';

import useTranslation from '@/components/Translator/hooks';

import styles from './turnMobile.module.scss';

const TurnMobile = ({ isSafari }: { isSafari: boolean }) => {
	const { t } = useTranslation();
	return (
		<div className={styles.turnMobile}>
			<p>
				Pour une meilleure expérience veillée a ce que votre appareil reste en
				mode portrait
			</p>
			<div className={styles.imgContainer}>
				<Image
					src='/img/icon/turnmobile.webp'
					alt='Tournez le portable'
					fill
					className={styles.imgTurnMobile}
				/>
			</div>
		</div>
	);
};

export default TurnMobile;
