import React from 'react';

import useTranslation from '@/translations/hooks';

import styles from './footer.module.scss';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer>
			<div className={styles.scrollText}>
				<p>© Dubois Jérémy</p>
				<p className={styles.credit}>{t('INSPIRED_BY')} Kazuki Noda</p>
			</div>
		</footer>
	);
};

export default Footer;
