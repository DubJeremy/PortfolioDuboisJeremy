import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import { TranslatorProvider } from '@/components/Translator/context';
import { ThemeProvider } from '@/components/Theme/context';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
	const [isSafari, setIsSafari] = useState(false);

	useEffect(() => {
		const userAgent = navigator.userAgent;
		setIsSafari(
			userAgent.indexOf('Safari') !== -1 && userAgent.indexOf('Chrome') === -1
		);
	}, []);

	return (
		<TranslatorProvider>
			<ThemeProvider>
				<Component {...pageProps} isSafari={isSafari} />
			</ThemeProvider>
		</TranslatorProvider>
	);
}
