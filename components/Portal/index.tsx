import { PropsWithChildren, useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

export interface IPortal {
	selector: string;
}

const Portal = (props: PropsWithChildren<IPortal>) => {
	const { selector, children } = props;
	const ref = useRef<Element | null>();
	const [mounted, setMounted] = useState(false);

	const selectorPrefixed = '#' + selector.replace(/^#/, '');

	useEffect(() => {
		ref.current = document.querySelector(selectorPrefixed);

		if (!ref.current) {
			const div = document.createElement('div');
			div.setAttribute('id', selector);
			document.body.appendChild(div);
			ref.current = div;
		}

		setMounted(true);
	}, [selector, selectorPrefixed]);

	return mounted && ref.current
		? createPortal(<>{children}</>, ref.current)
		: null;
};

export default Portal;
