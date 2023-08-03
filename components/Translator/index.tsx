import React, { useEffect, useRef } from 'react';
import useTranslation from './hooks';
import styles from './translator.module.scss';

export default function Translator() {
	const { locale, handleLocaleChange } = useTranslation();
	const scrollPosition = useRef(0);

	const targetLanguage = locale === 'fr' ? 'en' : 'fr';

	useEffect(() => {
		window.scrollTo(0, scrollPosition.current);
	}, [targetLanguage]);

	return (
		<div className={styles.lang}>
			<button
				className={styles.language}
				onClick={() => handleLocaleChange(targetLanguage)}
			>
				{targetLanguage}
			</button>
		</div>
	);
}
