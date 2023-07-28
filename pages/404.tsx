import C404 from '@/components/Custom404';

const Custom404 = ({ isSafari }: { isSafari: boolean }) => {
	return (
		<>
			<C404 isSafari={isSafari} />
		</>
	);
};

export default Custom404;
