import React from 'react';
import Image from 'next/image';

import useTranslation from '@/components/Translator/hooks';
import Lines from './lines';
import useMediaQuery from '@/tools/useMediaQuery';

import styles from './contact.module.scss';

const Contact = () => {
	const { t } = useTranslation();
	const [targetReached] = useMediaQuery(`(min-width: 768px)`);

	return (
		<section
			className={styles.contact}
			id='contact'
			// onSubmit={handleSubmit}
		>
			<div className={styles.title}>
				<h3>Contact</h3>
				<div className={styles.patternContainer}>
					<Image
						src={
							targetReached
								? '/img/patternShurikenXL.webp'
								: '/img/patternShurikenS.webp'
						}
						alt='pattern'
						fill
					/>
				</div>
			</div>
			<form className={`${styles.inputs} cursorScale`} method='post'>
				<a href='mailto:dubois.jeremy33@gmail.com'>dubois.jeremy33@gmail.com</a>
				<label className={styles.input} htmlFor='name'>
					<input type='text' name='name' placeholder={t('NAME')} required />
				</label>
				<label className={styles.input} htmlFor='mail'>
					<input type='email' name='mail' placeholder='Mail' required />
				</label>
				<label
					className={`${styles.input} ${styles.message}`}
					htmlFor='message'
				>
					<textarea name='message' placeholder='Message' required />
				</label>
				<div className={styles.btnContainer}>
					<button
						className={styles.btn}
						// onSubmit={() => setShowConfirmModal(true)}
					>
						{t('SEND')}
						<span>▶</span>
					</button>
				</div>
			</form>
			<Lines />
		</section>
	);
};

export default Contact;
