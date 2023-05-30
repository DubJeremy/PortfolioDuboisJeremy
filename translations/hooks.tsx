import { useContext } from 'react';
import { TranslatorContext } from './context';
import { en } from './en';
import { fr } from './fr';

export default function useTranslation() {
	const context = useContext(TranslatorContext);

	const { locale, setLocale } = context;

	function t(key: string) {
		if (locale === 'en') {
			return en[key];
		} else if (locale === 'fr') {
			return fr[key];
		} else {
			return;
		}
	}

	return { t, locale, setLocale };
}
