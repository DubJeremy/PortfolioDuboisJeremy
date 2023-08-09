import type { AppProps } from 'next/app';

import { IsSafariProvider } from '@/components/IsSafariContext';

import '@/styles/globals.scss';
import { ThemeProvider } from '@/components/Theme/context';
import { TranslatorProvider } from '@/components/Translator/context';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<TranslatorProvider>
			<ThemeProvider>
				<IsSafariProvider>
					<Component {...pageProps} />
				</IsSafariProvider>
			</ThemeProvider>
		</TranslatorProvider>
	);
}
