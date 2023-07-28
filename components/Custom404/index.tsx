import React from 'react';
import Link from 'next/link';

import useTheme from '../Theme/hooks';

import styles from './custom404.module.scss';

function Custom404({ isSafari }: { isSafari: boolean }) {
	const { c } = useTheme();
	return (
		<div className={styles.custom404}>
			<div className={styles.container}>
				<p className={styles.error}>
					<span>error</span> 404
				</p>
				<div className={styles.splitter}></div>
				<Link href={'/'} className={styles.logoContainer}>
					<div className={styles.logo} style={{ color: ` ${c('MAIN')}` }}>
						<p>D</p>
					</div>
				</Link>
				<div className={styles.coverError}></div>
				<div className={styles.coverLogo}></div>
			</div>
		</div>
	);
}

export default Custom404;
