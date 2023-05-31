import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio | Dubois Jérémy</title>
				<meta charSet='UTF-8' />
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta property='og:title' content='' />
				<meta property='og:description' content='' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://www.portfolio.dubj.com' />
				<meta
					property='og:image'
					content='https://www.portfolio.dubj/images/og-image.jpg'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Navbar />
			</main>
		</>
	);
}
