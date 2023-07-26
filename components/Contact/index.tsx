import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useTranslation from '@/components/Translator/hooks';

import Lines from './lines';
import useMediaQuery from '@/tools/useMediaQuery';
import Modal from './Modal';
import useTheme from '../Theme/hooks';

import styles from './contact.module.scss';

const Contact = ({ isSafari }: { isSafari: boolean }) => {
	const { c, theme } = useTheme();
	const { t } = useTranslation();
	const [targetReached] = useMediaQuery(`(min-width: 768px)`);
	const [showConfirmModal, setShowConfirmModal] = useState(false);
	const [submittedSuccess, setSubmittedSuccess] = useState<boolean | null>(
		true
	);
	const [formValues, setFormValues] = useState({
		name: '',
		mail: '',
		message: '',
	});

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
			setFormValues({
				name: '',
				mail: '',
				message: '',
			});
		});
	}

	const [imgTheme, setImgTheme] = useState('');
	const [transition, setTransition] = useState(false);

	useEffect(() => {
		setTransition(true);
		setTimeout(() => {
			switch (theme) {
				case 'blue': {
					setImgTheme('');
					break;
				}
				case 'green': {
					setImgTheme('G');
					break;
				}
				case 'yellow': {
					setImgTheme('Y');
					break;
				}
				case 'purple': {
					setImgTheme('Pu');
					break;
				}
				case 'pink': {
					setImgTheme('Pi');
					break;
				}
				case 'white': {
					setImgTheme('W');
					break;
				}
			}
			setTransition(false);
		}, 500);
	}, [theme]);

	return (
		<section
			className={styles.contact}
			id='contact'
			style={
				targetReached
					? { borderBottom: `3px solid ${c('MAIN')}`, color: `${c('MAIN')}` }
					: { borderBottom: `2px solid ${c('MAIN')}`, color: `${c('MAIN')}` }
			}
		>
			<div
				className={styles.title}
				style={
					targetReached
						? { borderBottom: `3px solid ${c('MAIN')}` }
						: { borderBottom: `2px solid ${c('MAIN')}` }
				}
			>
				<h3>Contact</h3>
				<div
					className={`${styles.patternContainer} ${
						transition ? styles.transition : ''
					}`}
					style={
						targetReached
							? { borderLeft: `3px solid ${c('MAIN')}` }
							: { borderLeft: `2px solid ${c('MAIN')}` }
					}
				>
					<Image
						src={
							targetReached
								? `/img/patternShurikenXL${imgTheme}.webp`
								: `/img/patternShurikenS${imgTheme}.webp`
						}
						alt='pattern'
						fill
					/>
				</div>
			</div>
			<form className={styles.inputs} method='post' onSubmit={handleSubmit}>
				<a href='mailto:dubois.jeremy33@gmail.com'>dubois.jeremy33@gmail.com</a>
				<label
					className={styles.input}
					htmlFor='name'
					style={{ color: `${c('MAIN')}` }}
				>
					<input
						type='text'
						name='name'
						placeholder={t('NAME')}
						value={formValues.name}
						onChange={(e) =>
							setFormValues({ ...formValues, name: e.target.value })
						}
						required
						style={{
							border: `1px solid ${c('MAIN')}`,
							color: `${c('MAIN')}`,
						}}
					/>
				</label>
				<label className={styles.input} htmlFor='mail'>
					<input
						type='email'
						name='mail'
						placeholder='Mail'
						value={formValues.mail}
						onChange={(e) =>
							setFormValues({ ...formValues, mail: e.target.value })
						}
						required
						style={{
							border: `1px solid ${c('MAIN')}`,
							color: `${c('MAIN')}`,
						}}
					/>
				</label>
				<label
					className={`${styles.input} ${styles.message}`}
					htmlFor='message'
				>
					<textarea
						name='message'
						placeholder='Message'
						value={formValues.message}
						onChange={(e) =>
							setFormValues({ ...formValues, message: e.target.value })
						}
						required
						style={{
							border: `1px solid ${c('MAIN')}`,
							color: `${c('MAIN')}`,
						}}
					/>
				</label>
				<div className={styles.btnContainer}>
					<button
						className={styles.btn}
						onSubmit={() => setShowConfirmModal(true)}
						style={
							c('MAIN') === '#ffffff'
								? {
										border: `2px solid ${c('MAIN')}`,
										boxSizing: 'border-box',
								  }
								: { backgroundColor: `${c('MAIN')}` }
						}
					>
						{t('SEND')}
						<span>▶</span>
					</button>
				</div>
			</form>
			<Lines />
			<div
				className={`${styles.modalContainer} ${
					showConfirmModal ? styles.showContainer : ''
				}`}
			>
				<Modal success={submittedSuccess} isSafari={isSafari} />
			</div>
		</section>
	);
};

export default Contact;
