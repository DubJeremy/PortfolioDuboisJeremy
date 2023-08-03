import Link from 'next/link';

import useTranslation from '@/components/Translator/hooks';
import useMediaQuery from '@/tools/useMediaQuery';
import useTheme from '@/components/Theme/hooks';

import styles from './modal.module.scss';

const Modal = ({ success }: { success: boolean | null }) => {
	const { t } = useTranslation();
	const { c } = useTheme();
	const [targetReached] = useMediaQuery(`(min-width: 992px)`);

	return (
		<div
			className={
				success === true
					? `${styles.modal} ${styles.success}`
					: `${styles.modal} ${styles.error}`
			}
			style={
				targetReached && success === true
					? { border: `3px solid ${c('MAIN')}`, color: `${c('MAIN')}` }
					: !targetReached && success === true
					? { border: `2px solid ${c('MAIN')}`, color: `${c('MAIN')}` }
					: { opacity: 1 }
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
					<div className={styles.contact} style={{ color: `${c('MAIN')}` }}>
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
