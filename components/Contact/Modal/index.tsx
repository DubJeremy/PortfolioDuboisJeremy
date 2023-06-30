import Link from 'next/link';

import useTranslation from '@/components/Translator/hooks';

import styles from './modal.module.scss';

const Modal = ({ success }: { success: boolean | null }) => {
	const { t } = useTranslation();

	return (
		<div
			className={
				success === true
					? `${styles.modal} ${styles.success}`
					: `${styles.modal} ${styles.error}`
			}
		>
			{success === true ? (
				<>
					<p>{t('MESSAGE_SENDED')}</p>
					<div>✓</div>
				</>
			) : (
				<>
					<p>{t('MESSAGE_ERROR')}</p>
					<div>⚠</div>
					<div className={styles.contact}>
						{t('MESSAGE_CONTACT')}
						<Link
							href='mailto:dubois.jeremy33@gmail.com?subject=Contact'
							passHref
						>
							<div>dubois.jeremy33@gmail.com</div>
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default Modal;
