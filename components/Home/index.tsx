import React from 'react';

import Lines from './lines';

import styles from './blank.module.scss';

const Home = () => {
	return (
		<section className={styles.home} id='profil'>
			<div className={styles.name}>
				<p className={styles.lastName}>Dubois</p>
				<p className={styles.firstName}>Jérémy</p>
			</div>
			<div className={styles.circle}></div>
			<Lines />
		</section>
	);
};
export default Home;
