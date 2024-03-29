import React from 'react';
import Image from 'next/image';

import useTranslation from '@/components/Translator/hooks';
import { useIsSafari } from '../IsSafariContext';

import styles from './turnMobile.module.scss';

const TurnMobile = () => {
	const { t } = useTranslation();
	const isSafari = useIsSafari();

	return (
		<div className={styles.turnMobile}>
			<p>
				Pour une meilleure expérience veillée a ce que votre appareil reste en
				mode portrait
			</p>
			<div className={styles.imgContainer}>
				<Image
					src={
						isSafari
							? '/img/safari/icon/turnmobile.svg'
							: '/img/icon/turnmobile.webp'
					}
					alt='Tournez le portable'
					fill
					className={styles.imgTurnMobile}
				/>
			</div>
		</div>
	);
};

export default TurnMobile;
