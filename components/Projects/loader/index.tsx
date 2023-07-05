import React from 'react';

import useTheme from '@/components/Theme/hooks';

import styles from './loader.module.scss';

const Loader = () => {
	const { c } = useTheme();
	return (
		<div
			className={styles.hourglass}
			style={{
				backgroundImage: `linear-gradient(${c('MAIN')} 0.05em,
			#737a8c55 0.05em 0.85em,
			${c('MAIN')} 0.85em) `,
			}}
		></div>
	);
};

export default Loader;
