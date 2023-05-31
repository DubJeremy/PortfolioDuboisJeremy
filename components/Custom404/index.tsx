import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './custom404.module.scss';

function Custom404() {
	return (
		<div className={styles.custom404}>
			<div className={styles.container}>
				<p className={styles.error}>
					<span>error</span> 404
				</p>
				<div className={styles.splitter}></div>
				<Link href={'/'} className={styles.imgContainer}>
					<div className={styles.logo}>
						<p>Portfolio | Dubois Jérémy</p>
					</div>
				</Link>
				<div className={styles.coverError}></div>
				<div className={styles.coverLogo}></div>
			</div>
		</div>
	);
}

export default Custom404;
