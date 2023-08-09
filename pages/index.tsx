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
import Cursor from '@/components/Cursor';
import Theme from '@/components/Theme';
import useTheme from '@/components/Theme/hooks';

export default function Home() {
	const [targetReachedH] = useMediaQuery(`(max-height: 500px)`);
	const [targetReached] = useMediaQuery(`(max-width: 992px)`);
	const [targetReachedL] = useMediaQuery(`(min-width: 992px)`);
	const [targetReachedXL] = useMediaQuery(`(min-width: 1140px)`);
	const [isInLandscape, setIsInLandscape] = useState<boolean | null>(null);
	const { theme } = useTheme();
	const [icoTheme, setIcoTheme] = useState('');

	useEffect(() => {
		heightFunction();
		window.addEventListener('resize', heightFunction, false);
	}, [targetReachedH, targetReached]);

	const heightFunction = () => {
		if (typeof window !== 'undefined') {
			if (window.innerHeight < window.innerWidth) {
				setIsInLandscape(true);
			} else {
				setIsInLandscape(false);
			}
		}
	};

	useEffect(() => {
		switch (theme) {
			case 'blue': {
				setIcoTheme('');
				break;
			}
			case 'green': {
				setIcoTheme('G');
				break;
			}
			case 'yellow': {
				setIcoTheme('Y');
				break;
			}
			case 'purple': {
				setIcoTheme('Pu');
				break;
			}
			case 'pink': {
				setIcoTheme('Pi');
				break;
			}
			case 'white': {
				setIcoTheme('W');
				break;
			}
		}
	}, [theme]);

	useEffect(() => {
		const timer = setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	const metaDescription =
		'Développeur Web FullStack Javascript | React, Node js | Passionné par les projets innovants et stimulants | Prêt à contribuer à des projets techniques et collaboratifs.';

	return (
		<>
			<Head>
				<title>Portfolio | Dubois Jérémy</title>
				<meta charSet='UTF-8' />
				<meta name='description' content={metaDescription} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta property='og:title' content='Portfolio Dubois Jeremy' />
				<meta property='og:description' content={metaDescription} />
				<meta property='og:type' content='website portfolio' />
				<meta property='og:url' content='https://www.portfolio.dubj.fr' />
				<meta
					property='og:image'
					content='https://www.portfolio.dubj.fr/public/img/safari/logo/logo.svg'
				/>
				<link rel='icon' href={`/favicon${icoTheme}.ico`} />
			</Head>
			<main>
				{isInLandscape && targetReachedH && targetReached ? (
					<TurnMobile />
				) : (
					<>
						{targetReachedXL && <Cursor />}
						{targetReachedL && <Theme />}

						<ScreenFrame />

						<Navbar />
						<Header />
						<Profil />
						<Projects />
						<Contact />
						<Footer />

						<Theme />
					</>
				)}
			</main>
		</>
	);
}
