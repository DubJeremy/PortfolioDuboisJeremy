import React from 'react';

import Lines from './lines';

import styles from './header.module.scss';
import Circle from './circle';

const Header = ({ isSafari }: { isSafari: boolean }) => {
	return (
		<section className={styles.header} id='profil'>
			<div className={styles.name}>
				<p className={`${styles.lastName}  cursorScale`}>Dubois</p>
				<p className={`${styles.firstName}  cursorScale`}>Jérémy</p>
			</div>
			<Circle isSafari={isSafari} />
			<Lines />
		</section>
	);
};
export default Header;
