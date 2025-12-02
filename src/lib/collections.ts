const collator = new Intl.Collator('en', {
	sensitivity: 'base',
});

export const untitle = (s: string) =>
	s.replace(/^(the|a|an)\s(.+)$/i, '$2, $1');

export function sort<T>(
	transform: (value: T) => string,
): (left: T, right: T) => number {
	return (left, right) => {
		return collator.compare(transform(left), transform(right));
	};
}
