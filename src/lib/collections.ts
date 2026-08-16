const collator = new Intl.Collator('en', {
	sensitivity: 'base',
});

export function untitle(s: string): string {
	return s.replace(/^(the|a|an)\s/i, '');
}

export type CompareFn<T> = (left: T, right: T) => number;

export function sortString<T>(transform: (value: T) => string): CompareFn<T> {
	return (left, right) => {
		return collator.compare(transform(left), transform(right));
	};
}

/**
 * Sort an array by multiple conditions
 */
export function multisort<T>(sorters: CompareFn<T>[]): CompareFn<T> {
	return (a, b) => {
		for (const fn of sorters) {
			const result = fn(a, b);
			if (result !== 0) {
				return result;
			}
		}

		return 0;
	};
}
