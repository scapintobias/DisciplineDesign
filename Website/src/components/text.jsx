export default function Text({ type = 'body', className = '', children }) {
	let base = '';

	switch (type) {
		case 'title':
			base =
				'mb-12 font-bold tracking-tight text-black lg:text-5xl md:text-4xl sm:text-2xl';
			break;
		case 'subtitle':
			base = 'font-semibold tracking-tight text-black lg:text-4xl md:text-2xl';
			break;
		case 'lead':
			base =
				'font-normal leading-snug text-gray-600 lg:text-4xl md:text-3xl sm:text-lg';
			break;

		case 'label':
			base =
				'pb-5 font-medium tracking-widest text-slate-600 uppercase lg:text-lg sm:text-base';
			break;

		case 'subsection':
			base = 'text-gray-600  leading-snug md:text-2xl sm:text-xl';
			break;
		case 'small':
			base = 'text-lg text-gray-500 font-light tracking-normal leading-relaxed';
			break;
		case 'custom':
			base = '';
			break;

		default:
			base =
				'font-normal text-gray-600 leading-snug lg:text-4xl md:text-3xl sm:text-lg';
			break;
	}

	return <p className={`${base} ${className}`}>{children}</p>;
}
