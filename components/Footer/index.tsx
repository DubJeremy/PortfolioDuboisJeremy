import React from 'react';
import Image from 'next/image';

import useTranslation from '@/translations/hooks';

import styles from './footer.module.scss';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className={styles.footer}>
			<div className={styles.scrollText}>
				<p>Portfolio Dubois Jérémy</p>
			</div>
			<div className={styles.container}>
				<a className={styles.credit}>{t('INSPIRED_BY')} Kazuki Noda</a>
				<p>©Dubois Jérémy</p>
			</div>
			{/* <div className={styles.picture}>
				{' '}
				<Image src={'/img/icon/kazukiNoda.webp'} alt='Kazuki Noda' fill />
			</div> */}
		</footer>
	);
};

export default Footer;
