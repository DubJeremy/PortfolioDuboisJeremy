import Link from 'next/link';

import useTranslation from '@/components/Translator/hooks';

import styles from 'components/Generic/Modal/modal.module.scss';

interface messageModal {
	message?: string;
	success: boolean | null;
	showModal: boolean;
}

const Modal = (props: messageModal) => {
	const { t } = useTranslation();
	const { message, success, showModal } = props;

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
					<p>{message}</p>
					<div>✓</div>
				</>
			) : (
				<>
					<p>{t('MESSAGE_ERROR')}</p>
					<div>⚠</div>
					<div className={styles.contact}>
						{t('MESSAGE_CONTACT')}
						<Link href='mailto:contact@kbdev.io?subject=Contact' passHref>
							<div>{t('MAIL')}</div>
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default Modal;
