import { Link as RouterLink } from 'react-router-dom';
import {
	headingSizes,
	headingTracking,
	bodySizes,
	bodyWeights,
	containerWidths,
	sectionSpacing,
	stackGaps,
	cardStyles,
	buttonVariants,
	buttonSizes,
} from '@/styles/tokens';

export function Heading({
	level = 'h2',
	size = 'section',
	tracking = 'normal',
	className = '',
	children,
	...props
}) {
	const Component = level;
	const sizeClass = headingSizes[size];
	const trackingClass = headingTracking[tracking];

	return (
		<Component
			className={`${sizeClass} ${trackingClass} text-neutral-900 ${className}`}
			{...props}
		>
			{children}
		</Component>
	);
}

export function Body({
	size = 'base',
	weight = 'normal',
	className = '',
	children,
	...props
}) {
	const sizeClass = bodySizes[size];
	const weightClass = bodyWeights[weight];

	return (
		<p
			className={`${sizeClass} ${weightClass} leading-relaxed text-neutral-700 ${className}`}
			{...props}
		>
			{children}
		</p>
	);
}

export function Eyebrow({ className = '', children, ...props }) {
	return (
		<div
			className={`text-xs font-medium uppercase tracking-wider text-neutral-600 ${className}`}
			{...props}
		>
			{children}
		</div>
	);
}

export function Meta({ className = '', children, ...props }) {
	return (
		<div className={`text-xs uppercase text-neutral-500 ${className}`} {...props}>
			{children}
		</div>
	);
}

export function Section({
	width = 'default',
	spacing = 'lg',
	className = '',
	children,
	...props
}) {
	const containerClass = containerWidths[width];
	const spacingClass = sectionSpacing[spacing];

	return (
		<section className={`${spacingClass} ${className}`} {...props}>
			<div className={containerClass}>{children}</div>
		</section>
	);
}

export function Stack({ gap = 'md', className = '', children, ...props }) {
	const gapClass = stackGaps[gap];

	return (
		<div className={`${gapClass} ${className}`} {...props}>
			{children}
		</div>
	);
}

export function Grid({
	cols = 3,
	gap = 'lg',
	className = '',
	children,
	...props
}) {
	const colsClass = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
		6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
	}[cols];

	const gapClass = {
		xs: 'gap-4',
		sm: 'gap-6',
		md: 'gap-8',
		lg: 'gap-12',
		xl: 'gap-16',
	}[gap];

	return (
		<div
			className={`grid ${colsClass} ${gapClass} ${className}`}
			{...props}
		>
			{children}
		</div>
	);
}

export function Card({
	to,
	href,
	border = true,
	className = '',
	children,
	...props
}) {
	const baseClass = `${cardStyles.base} ${
		border ? cardStyles.bordered : ''
	} group`;
	const interactiveClass = to || href ? cardStyles.interactive : '';
	const classes = `${baseClass} ${interactiveClass} ${className}`;

	if (to) {
		return (
			<RouterLink to={to} className={classes} {...props}>
				{children}
			</RouterLink>
		);
	}

	if (href) {
		return (
			<a href={href} className={classes} {...props}>
				{children}
			</a>
		);
	}

	return (
		<div className={classes} {...props}>
			{children}
		</div>
	);
}

export function Button({
	variant = 'primary',
	size = 'md',
	href,
	to,
	className = '',
	children,
	...props
}) {
	const baseClass =
		'inline-flex items-center justify-center font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

	const variantClass = buttonVariants[variant];
	const sizeClass = buttonSizes[size];
	const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`;

	if (to) {
		return (
			<RouterLink to={to} className={classes} {...props}>
				{children}
			</RouterLink>
		);
	}

	if (href) {
		return (
			<a href={href} className={classes} {...props}>
				{children}
			</a>
		);
	}

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
}

export function Link({
	variant = 'inline',
	href,
	to,
	className = '',
	children,
	...props
}) {
	const variantClass = {
		inline: 'text-accent hover:text-accent-hover underline-offset-2 hover:underline',
		standalone:
			'text-neutral-900 hover:text-accent-hover transition-colors duration-200',
	}[variant];

	const classes = `${variantClass} ${className}`;

	if (to) {
		return (
			<RouterLink to={to} className={classes} {...props}>
				{children}
			</RouterLink>
		);
	}

	return (
		<a
			href={href}
			className={classes}
			{...(href?.startsWith('http') && {
				target: '_blank',
				rel: 'noopener noreferrer',
			})}
			{...props}
		>
			{children}
		</a>
	);
}

export function Tag({
	variant = 'neutral',
	className = '',
	children,
	...props
}) {
	const variantClass = {
		neutral: 'bg-neutral-100 text-neutral-700',
		accent: 'bg-accent/10 text-accent',
	}[variant];

	return (
		<span
			className={`inline-block rounded-xl px-3 py-1 text-xs font-medium ${variantClass} ${className}`}
			{...props}
		>
			{children}
		</span>
	);
}

export function Stat({ value, label, className = '', ...props }) {
	return (
		<div className={`space-y-2 ${className}`} {...props}>
			<dd className="text-3xl font-semibold tracking-tight text-neutral-900">
				{value}
			</dd>
			<dt className="text-sm leading-relaxed text-neutral-600">
				{label}
			</dt>
		</div>
	);
}
