import React, { createContext, useState, useEffect, useContext } from 'react';

const IsSafariContext = createContext<boolean>(false);

export const IsSafariProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isSafari, setIsSafari] = useState(false);

	useEffect(() => {
		const userAgent = navigator.userAgent;
		setIsSafari(
			userAgent.indexOf('Safari') !== -1 && userAgent.indexOf('Chrome') === -1
		);
	}, []);

	return (
		<IsSafariContext.Provider value={isSafari}>
			{children}
		</IsSafariContext.Provider>
	);
};

export const useIsSafari = () => {
	return useContext(IsSafariContext);
};
