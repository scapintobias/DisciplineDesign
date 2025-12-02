/** @format */

import { Link } from 'react-router-dom';
import { useLanguageFromLocation } from '@/lib/language';

const primaryLinks = [
	{ to: '/work', key: 'work' },
	{ to: '/services', key: 'services' },
];

const secondaryLinks = [
	{ to: '/method', key: 'method' },
	{ to: '/about', key: 'about' },
	{ to: '/contact', key: 'contact' },
];

const legalLinks = [{ to: '/privacy', key: 'privacy' }];

/**
 * Footer - Site footer with links and info
 */
export default function Footer() {
	const lang = useLanguageFromLocation();
	const isItalian = lang === 'it';
	const basePath = isItalian ? '/it' : '';
	const labels =
		{
			en: {
				brandLine: 'Enterprise systems rebuilt from logic.',
				navigate: 'Navigate',
				work: 'Work',
				services: 'Services',
				method: 'Method',
				about: 'About',
				contact: 'Contact',
				privacy: 'Privacy',
				legal: 'Legal',
			},
			it: {
				brandLine:
					'Sistemi enterprise ricostruiti a partire dalla logica.',
				navigate: 'Navigazione',
				work: 'Lavori',
				services: 'Servizi',
				method: 'Metodo',
				about: 'Chi siamo',
				contact: 'Contatti',
				privacy: 'Privacy',
				legal: 'Legale',
			},
		}[lang] || {};
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-white border-t border-neutral-100'>
			<div className='container-default py-14'>
				<div className='grid gap-8 md:grid-cols-2 lg:[grid-template-columns:2fr_.8fr_.8fr_1fr] md:items-start'>
					{/* Brand */}
					<div className='space-y-4'>
						<div className='text-base font-semibold tracking-tight text-swr'>
							DisciplineDesign
						</div>
						<p className='text-sm leading-relaxed text-neutral-600'>
							{labels.brandLine}
						</p>
					</div>

					{/* Work column */}
					<div className='space-y-4'>
						<h4 className='text-sm font-semibold text-neutral-900'>
							{labels.work}
						</h4>
						<ul className='space-y-2 text-sm text-neutral-600'>
							{primaryLinks.map((link) => (
								<li key={link.to}>
									<Link
										to={`${basePath}${link.to}`}
										className='transition-colors duration-200 hover:text-accent-hover'>
										{labels[link.key]}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company column */}
					<div className='space-y-4'>
						<h4 className='text-sm font-semibold text-neutral-900'>
							{labels.about}
						</h4>
						<ul className='space-y-2 text-sm text-neutral-600'>
							{secondaryLinks.map((link) => (
								<li key={link.to}>
									<Link
										to={`${basePath}${link.to}`}
										className='transition-colors duration-200 hover:text-accent-hover'>
										{labels[link.key]}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal column */}
					<div className='space-y-4'>
						<h4 className='text-sm font-semibold text-neutral-900'>
							{labels.legal}
						</h4>
						<ul className='space-y-2 text-sm text-neutral-600'>
							{legalLinks.map((link) => (
								<li key={link.to}>
									<Link
										to={`${basePath}${link.to}`}
										className='transition-colors duration-200 hover:text-accent-hover'>
										{labels[link.key]}
									</Link>
								</li>
							))}
						</ul>
						<div className='pt-2 text-sm text-neutral-500'>
							© 2008–{currentYear} DisciplineDesign
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
