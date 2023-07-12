import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import useTranslation from './hooks';

import styles from './translator.module.scss';

export default function Translator() {
	const [language, setLanguage] = useState('fr');
	const { setLocale } = useTranslation();
	const { pathname, push } = useRouter();
	const scrollPosition = useRef(0);

	useEffect(() => {
		const currentLanguage = localStorage.getItem('lang') || 'fr';

		setLanguage(currentLanguage);
		const options = {
			locale: currentLanguage,
		};
		push({ pathname, query: options });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		window.scrollTo(0, scrollPosition.current);
	}, [language]);

	function handleLocaleChange(
		targetLocale: string,
		event: React.MouseEvent<HTMLButtonElement>
	) {
		event.preventDefault();
		if (!window) {
			return;
		}

		localStorage.setItem('lang', targetLocale);
		if (setLocale === undefined) {
			return;
		}

		if (targetLocale === 'en') {
			setLanguage('en');
		} else {
			setLanguage('fr');
		}
		setLocale(targetLocale);

		const options = {
			locale: targetLocale,
		};
		push(pathname, pathname, options);
	}

	const targetLanguage = language === 'fr' ? 'en' : 'fr';

	return (
		<div className={styles.lang}>
			<button
				className={styles.language}
				onClick={(event) => handleLocaleChange(targetLanguage, event)}
			>
				{targetLanguage}
			</button>
		</div>
	);
}
