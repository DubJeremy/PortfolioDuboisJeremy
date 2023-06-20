import React from 'react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface TranslatorContextInterface {
	locale: string;
	setLocale: Dispatch<SetStateAction<string>>;
}

export const TranslatorContext =
	React.createContext<TranslatorContextInterface>({
		locale: 'fr',
		setLocale: () => {},
	});

type Props = {
	children?: React.ReactNode;
};

export function TranslatorProvider({ children }: Props) {
	const [locale, setLocale] = useState('fr');

	useEffect(() => {
		if (!window) {
			return;
		}

		const language = localStorage.getItem('lang') || locale;
		setLocale(language);
	}, [locale]);

	return (
		<TranslatorContext.Provider value={{ locale, setLocale }}>
			{children}
		</TranslatorContext.Provider>
	);
}
