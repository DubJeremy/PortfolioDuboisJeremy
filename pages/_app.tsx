import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

import { TranslatorProvider } from '@/components/Translator/context';
import { ThemeProvider } from '@/components/Theme/context';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<TranslatorProvider>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</TranslatorProvider>
	);
}
