import Head from 'next/head';
import { useEffect, useState } from 'react';

import Navbar from '@/components/Navbar';
import ScreenFrame from '@/components/ScreenFrame';
import Header from '@/components/Header';
import Profil from '@/components/Profil';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import useMediaQuery from '@/tools/useMediaQuery';
import TurnMobile from '@/components/TurnMobile';

export default function Home() {
	const [targetReachedH] = useMediaQuery(`(max-height: 500px)`);
	const [targetReached] = useMediaQuery(`(max-width: 992px)`);
	const [isInLandscape, setIsInLandscape] = useState<boolean | null>(null);

	useEffect(() => {
		heightFunction();
		window.addEventListener('resize', heightFunction, false);
	}, []);

	const heightFunction = () => {
		if (typeof window !== 'undefined') {
			if (window.innerHeight < window.innerWidth) {
				setIsInLandscape(true);
			} else {
				setIsInLandscape(false);
			}
		}
	};

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
				{isInLandscape && targetReachedH && targetReached ? (
					<TurnMobile />
				) : (
					<>
						<ScreenFrame />
						{/* <Navbar /> */}
						<Header />
						<Profil />
						<Projects />
						<Contact />
						<Footer />
					</>
				)}
			</main>
		</>
	);
}
