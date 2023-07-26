import type { AppProps } from 'next/app';
import ProgressBar from 'nextjs-progressbar';

import { TranslatorProvider } from '@/components/Translator/context';
import { ThemeProvider } from '@/components/Theme/context';

import '@/styles/globals.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [isSafari, setIsSafari] = useState(false);

	useEffect(() => {
		const userAgent = navigator.userAgent;
		setIsSafari(
			userAgent.indexOf('Safari') !== -1 && userAgent.indexOf('Chrome') === -1
		);
	}, []);

	console.log('isSafarioriginal', isSafari);

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
