import { useState, useCallback, useEffect } from 'react';

export default function useMediaQuery(
	mediaQuery: string,
	onTargetReached?: () => void
) {
	const [targetReached, setTargetReached] = useState(false);
	const updateTarget = useCallback(
		(e: any) => {
			if (e.matches) {
				setTargetReached(true);

				if (onTargetReached) {
					onTargetReached();
				}
			} else {
				setTargetReached(false);
			}
		},
		[onTargetReached]
	);

	useEffect(() => {
		const media = window.matchMedia(mediaQuery);

		media.addEventListener('change', updateTarget);
		updateTarget(media);

		return () => media.removeEventListener('change', updateTarget);
	}, [updateTarget]);
	return [targetReached];
}
