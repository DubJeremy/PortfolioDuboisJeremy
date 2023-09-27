import React, { useEffect, useRef } from 'react';

import Lines from './lines';

import styles from './header.module.scss';
import Circle from './circle';
import { getDocHeight } from '@/tools/docSize';

const Header = () => {
	const refHeader = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		heightFunction();
		window.addEventListener('resize', heightFunction, false);
		return () => {
			window.removeEventListener('resize', heightFunction, true);
		};
	}, []);

	const heightFunction = () => {
		if (refHeader.current) {
			refHeader.current.style.height = getDocHeight();
		}
	};
	return (
		<section
			className={`${styles.header} ${styles.component}`}
			id='profil'
			ref={refHeader}
		>
			<div className={styles.name}>
				<p className={`${styles.lastName}  cursorScale`}>Dubois</p>
				<p className={`${styles.firstName}  cursorScale`}>Jérémy</p>
			</div>
			<Circle />
			<Lines />
		</section>
	);
};
export default Header;
