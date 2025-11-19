export default function Text({ type = 'body', className = '', children }) {
	let base = '';

	switch (type) {
		case 'title':
			base =
				'font-bold tracking-tight text-black lg:text-5xl md:text-4xl sm:text-2xl';
			break;
		case 'subtitle':
			base =
				'font-semibold tracking-tight text-gray-900 lg:text-3xl md:text-2xl';
			break;
		case 'lead':
			base = 'text-h2';
			break;

		case 'label':
			base = 'uppercase tracking-wider text-sm text-gray-500';
			break;

		case 'body':
		default:
			base = 'text-base text-gray-700 leading-relaxed';
			break;
	}

	return <p className={`${base} ${className}`}>{children}</p>;
}
