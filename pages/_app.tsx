import type { AppProps } from 'next/app';

import { IsSafariProvider } from '@/components/IsSafariContext';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<IsSafariProvider>
			<Component {...pageProps} />
		</IsSafariProvider>
	);
}
