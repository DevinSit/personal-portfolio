export function debounceWithLeading(func, wait) {
	/* A special case of debounce that fires immediately _and_ 
	 * after the series of events has exceeded the wait time. */
	let timeout;

	return function() {
		const context = this, args = arguments;

		const later = function() {
			timeout = null;
			func.apply(context, args);
		};

		const callNow = !timeout;

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (callNow) func.apply(context, args);
	};
};
