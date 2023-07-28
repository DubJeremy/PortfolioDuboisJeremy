import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import ProgressBar from 'nextjs-progressbar';

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
				<ProgressBar
					color='#ffffff'
					startPosition={0.3}
					stopDelayMs={400}
					height={5}
				/>
				<Component {...pageProps} isSafari={isSafari} />
			</ThemeProvider>
		</TranslatorProvider>
	);
}
