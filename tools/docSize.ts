export function getDocHeight(): string {
	if (typeof window !== 'undefined') {
		return ` calc(${window.innerHeight}px - 95px)`;
	}
	return ' 100%';
}
