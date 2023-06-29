import React, { useState } from 'react';
import Image from 'next/image';

import useTranslation from '@/components/Translator/hooks';
import Lines from './lines';
import useMediaQuery from '@/tools/useMediaQuery';

import styles from './contact.module.scss';

const Contact = () => {
	const { t } = useTranslation();
	const [targetReached] = useMediaQuery(`(min-width: 768px)`);
	const [showConfirmModal, setShowConfirmModal] = useState(false);
	const [submittedSuccess, setSubmittedSuccess] = useState<boolean | null>(
		null
	);

	const popupSubmit = () => {
		setShowConfirmModal(true);
		const timer = setTimeout(() => {
			setShowConfirmModal(false);
		}, 6000);
		return () => clearTimeout(timer);
	};

	async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
		e.preventDefault();

		const formData: { [K: string]: string | null } = {};
		const formElements = e.currentTarget.elements;
		let castedField: HTMLInputElement;

		if (formElements) {
			Array.from(e.currentTarget.elements).forEach((field) => {
				castedField = field as HTMLInputElement;
				if (!castedField.name) return;
				formData[castedField.name] = castedField.value;
			});
		}

		fetch('/api/mail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		}).then((response) => {
			if (response.status === 200) {
				setSubmittedSuccess(true);
			} else {
				setSubmittedSuccess(false);
			}
			popupSubmit();
		});
	}
	console.log(submittedSuccess);

	return (
		<section className={styles.contact} id='contact'>
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
			<form className={styles.inputs} method='post' onSubmit={handleSubmit}>
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
						onSubmit={() => setShowConfirmModal(true)}
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
