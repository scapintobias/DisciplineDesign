// Shared design tokens to centralize typography, spacing, and interactions
export const headingSizes = {
	display: 'text-[3rem] md:text-[3.25rem] font-semibold leading-[1.05]',
	hero: 'text-3xl md:text-4xl font-semibold leading-[1.1]',
	section: 'text-2xl md:text-3xl font-semibold leading-tight',
	card: 'text-lg font-semibold leading-tight',
	small: 'text-base font-medium leading-tight',
};

export const headingTracking = {
	tight: 'tracking-tight',
	normal: 'tracking-normal',
	relaxed: 'tracking-wide',
};

export const bodySizes = {
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
};

export const bodyWeights = {
	light: 'font-light',
	normal: 'font-normal',
	medium: 'font-medium',
};

export const containerWidths = {
	default: 'container-default',
	wide: 'container-wide',
	full: 'w-full px-6',
};

export const sectionSpacing = {
	sm: 'py-12',
	md: 'py-16',
	lg: 'py-20',
	xl: 'py-24 lg:py-32',
};

export const stackGaps = {
	xs: 'space-y-2',
	sm: 'space-y-4',
	md: 'space-y-6',
	lg: 'space-y-8',
	xl: 'space-y-12',
	'2xl': 'space-y-16',
};

export const cardStyles = {
	base: 'block rounded-xl p-6 transition-transform transition-colors duration-200',
	bordered: 'border border-neutral-200',
	interactive: 'transform hover:-translate-y-1 hover:border-neutral-400',
};

export const buttonVariants = {
	primary:
		'bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950',
	secondary:
		'bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50',
	ghost: 'text-neutral-900 hover:bg-neutral-100',
};

export const buttonSizes = {
	sm: 'px-4 py-2 text-sm rounded-lg',
	md: 'px-6 py-3 text-base rounded-xl',
	lg: 'px-8 py-4 text-lg rounded-xl',
};
