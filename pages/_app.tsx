import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

import { TranslatorProvider } from '@/components/Translator/context';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<TranslatorProvider>
			<Component {...pageProps} />
		</TranslatorProvider>
	);
}
