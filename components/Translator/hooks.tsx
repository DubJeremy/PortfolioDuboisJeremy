import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { en } from '../../translations/en';
import { fr } from '../../translations/fr';

export default function useTranslation() {
	const router = useRouter();
	const [locale, setLocale] = useState('fr');

	useEffect(() => {
		const language = localStorage.getItem('lang') || 'fr';
		setLocale(language);
		const options = { locale: language };
		router.push({ pathname: router.pathname, query: options }, undefined, {
			shallow: true,
		});
	}, [router]);

	function handleLocaleChange(targetLocale: string) {
		localStorage.setItem('lang', targetLocale);
		setLocale(targetLocale);
		const options = { locale: targetLocale };
		router.push({ pathname: router.pathname, query: options });
	}

	function t(key: string) {
		return locale === 'en' ? en[key] : fr[key];
	}

	return { t, locale, handleLocaleChange };
}
