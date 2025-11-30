import { Link } from 'react-router-dom';
import { useLanguageFromLocation } from '@/lib/language';

const footerLinks = [
	{ to: '/work', key: 'work' },
	{ to: '/services', key: 'services' },
	{ to: '/method', key: 'method' },
	{ to: '/about', key: 'about' },
	{ to: '/contact', key: 'contact' },
];

/**
 * Footer - Site footer with links and info
 */
export default function Footer() {
	const lang = useLanguageFromLocation();
	const isItalian = lang === 'it';
	const basePath = isItalian ? '/it' : '';
	const labels = {
		en: {
			brandLine: 'Enterprise systems built from logic.',
			navigate: 'Navigate',
			work: 'Work',
			services: 'Services',
			method: 'Method',
			about: 'About',
			contact: 'Contact',
		},
		it: {
			brandLine: 'Sistemi enterprise costruiti sulla logica.',
			navigate: 'Navigazione',
			work: 'Lavori',
			services: 'Servizi',
			method: 'Metodo',
			about: 'Chi siamo',
			contact: 'Contatti',
		},
	}[lang] || {};
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-neutral-100 bg-white">
			<div className="container-default py-14">
				<div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
					{/* Brand */}
					<div className="max-w-sm space-y-3">
						<div className="text-sm font-semibold tracking-tight text-neutral-900">
							DisciplineDesign
						</div>
						<p className="text-sm leading-relaxed text-neutral-600">
							{labels.brandLine}
						</p>
					</div>

					{/* Navigation */}
					<div>
						<h4 className="text-xs uppercase tracking-[0.14em] text-neutral-500">
							{labels.navigate}
						</h4>
						<ul className="mt-4 space-y-2 text-sm text-neutral-600">
							{footerLinks.map((link) => (
								<li key={link.to}>
									<Link
										to={`${basePath}${link.to}`}
										className="inline-flex items-center gap-2 transition-transform duration-200 hover:translate-x-1 hover:text-accent-hover"
									>
										{labels[link.key]}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-10 text-xs uppercase tracking-[0.12em] text-neutral-500">
					© 2008–{currentYear} DisciplineDesign
				</div>
			</div>
		</footer>
	);
}
