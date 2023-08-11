import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useIsSafari } from '../IsSafariContext';
import useTranslation from '../Translator/hooks';

import styles from './terms.module.scss';

const TermsComponent = ({
	isToggled,
	showModal,
}: {
	isToggled: boolean;
	showModal: () => void;
}) => {
	const currentYear = new Date().getFullYear();
	const [isExpanded, setIsExpanded] = useState(false);
	const isSafari = useIsSafari();
	const { t } = useTranslation();

	useEffect(() => {
		if (isExpanded) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	}, [isExpanded]);

	useEffect(() => {
		if (isToggled) {
			setIsExpanded(true);
		}
	}, [isToggled]);

	return (
		<div
			className={`${styles.terms} ${
				isExpanded
					? `${styles.expanded} ${styles['slide-up']}`
					: `${styles.expanded} ${styles['fade-out']}`
			}`}
		>
			<div className={styles.container}>
				<h3 className={styles.title}>{t('TERMS')}</h3>
				<button
					onClick={() => {
						showModal();
						setIsExpanded(false);
					}}
					className={`${styles.close}  cursorScale small`}
					aria-label={t('CLOSE_TERMS')}
				>
					<Image
						src={
							isSafari
								? '/img/safari/icon/closetermsicon.svg'
								: '/img/icon/closetermsicon.webp'
						}
						alt='Close legal information'
						fill
						className={styles.imgClose}
					/>
				</button>
			</div>
			<div className={styles.category}>
				<h4 className={styles.titleCategory}>Editeur du Site :</h4>
				<p className={styles.textCategory}>
					Dubois Jérémy – 33200 Bordeaux Cauderan – France Mail :
					dubois.jeremy.co@gmail.com
				</p>
			</div>
			<div className={styles.category}>
				<h4 className={styles.titleCategory}>{t('HOSTING')} :</h4>
				<p className={styles.textCategory}>
					o2switch - Chem. des Pardiaux - 63000 Clermont-Ferrand – France{' '}
					{t('WEBSITE')}
					Web: www.o2switch.fr
				</p>
			</div>
			<div className={styles.category}>
				<h4 className={styles.titleCategory}>{t('PERSONAL_DATA')} :</h4>
				<p className={styles.textCategory}>{t('PERSONAL_DATA_TXT')}</p>
			</div>
			<div className={styles.category}>
				<h4 className={styles.titleCategory}>{t('CNIL_DECLARATION')} :</h4>
				<p className={styles.textCategory}>{t('CNIL_DECLARATION_TXT')}</p>
			</div>
			<div className={styles.category}>
				<h4 className={styles.titleCategory}>{t('INTEL_PROPERTY')} :</h4>
				<p className={styles.textCategory}>{t('INTEL_PROPERTY_TXT')}</p>
			</div>
			<div className={styles.category}>
				<h4 className={styles.titleCategory}>{t('DISPUTES')} :</h4>
				<p className={styles.textCategory}>{t('DISPUTES_TXT')}</p>
			</div>
			<div className={styles.category}>
				<h4 className={styles.titleCategory}>{t('TERMS_OF_USE')} :</h4>
				<p className={styles.textCategory}>{t('TERMS_OF_USE_TXT')}</p>
			</div>
			<div className={styles.category}>
				<h4 className={styles.titleCategory}>{t('HYPERLINKS')} :</h4>
				<p className={styles.textCategory}>{t('HYPERLINKS_TXT')}</p>
			</div>
			<div className={styles.category}>
				<h4 className={styles.titleCategory}>{t('SERVICES')} :</h4>
				<p className={styles.textCategory}>{t('SERVICES_TXT')}</p>
			</div>
			<div className={styles.category}>
				<h4 className={styles.titleCategory}>{t('DATA_LIMIT')} :</h4>
				<p className={styles.textCategory}>{t('DATA_LIMIT_TXT')}</p>
			</div>
			<div className={styles.category}>
				<p className={styles.textCategory}>©Dubois Jérémy {currentYear} </p>
			</div>
		</div>
	);
};
export default TermsComponent;
