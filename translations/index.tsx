import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useTranslation from './hooks';

import styles from '../Navbar/Navbar.module.scss';

export default function Translator() {
	const [language, setLanguage] = useState('fr');
	const { setLocale } = useTranslation();
	const { pathname, push } = useRouter();

	useEffect(() => {
		const currentLanguage = localStorage.getItem('lang') || 'fr';

		setLanguage(currentLanguage);
		const options = {
			locale: currentLanguage,
		};
		push(pathname, pathname, options);
	}, [pathname, push]);

	function handleLocaleChange(targetLocale: string) {
		if (!window) {
			return;
		}

		localStorage.setItem('lang', targetLocale);
		if (setLocale === undefined) {
			return;
		}
		setLocale(targetLocale);

		if (targetLocale === 'en') {
			setLanguage('en');
		} else {
			setLanguage('fr');
		}

		const options = {
			locale: targetLocale,
		};
		push(pathname, pathname, options);
	}

	const targetLanguage = language === 'fr' ? 'en' : 'fr';

	return (
		<div className='lang'>
			<button
				className={styles.language}
				onClick={() => handleLocaleChange(targetLanguage)}
			>
				{targetLanguage}
			</button>
		</div>
	);
}
