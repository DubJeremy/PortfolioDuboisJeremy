import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';

import useTranslation from '@/components/Translator/hooks';
import Picture from './Picture';

import styles from './footer.module.scss';

const Footer = () => {
	const { t } = useTranslation();
	const [hovered, setHovered] = useState(false);

	return (
		<footer className={styles.footer}>
			<div className={styles.scrollText}>
				<p>Portfolio Dubois Jérémy</p>
			</div>
			<div className={styles.container}>
				<a
					className={`${styles.credit} cursorScale`}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					{t('INSPIRED_BY')} Kazuki Noda Portfolio
				</a>
				<p>©Dubois Jérémy</p>
				<div
					className={`${styles.photoContainer} ${
						hovered ? styles.showPhoto : ''
					}`}
				>
					<Canvas>
						<Picture />
					</Canvas>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
