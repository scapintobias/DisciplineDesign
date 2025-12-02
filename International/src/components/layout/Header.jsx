import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLanguageFromLocation } from '@/lib/language';

/**
 * Navigation links configuration
 */
const navigationLinks = [
	{ to: '/work', key: 'work' },
	{ to: '/services', key: 'services' },
	{ to: '/method', key: 'method' },
	{ to: '/about', key: 'about' },
	{ to: '/contact', key: 'contact' },
];

/**
 * Header - Site navigation
 */
export default function Header() {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleHomeClick = () =>
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
	const lang = useLanguageFromLocation();
	const isItalian = lang === 'it';
	const basePath = isItalian ? '/it' : '';
	const setPreference = (value) => {
		try {
			localStorage.setItem('preferredLang', value);
		} catch (e) {
			// ignore storage failures
		}
	};
	const labels = {
		en: {
			work: 'Work',
			services: 'Services',
			method: 'Method',
			about: 'About',
			contact: 'Contact',
		},
		it: {
			work: 'Lavori',
			services: 'Servizi',
			method: 'Metodo',
			about: 'Chi siamo',
			contact: 'Contatti',
		},
	}[lang] || {};
	const normalizedPath =
		isItalian && location.pathname.startsWith('/it')
			? location.pathname.replace(/^\/it/, '') || '/'
			: location.pathname;
	const englishPath =
		isItalian && location.pathname.startsWith('/it')
			? location.pathname.replace(/^\/it/, '') || '/'
			: location.pathname || '/';
	const italianPath =
		!isItalian && location.pathname === '/'
			? '/it'
			: !isItalian
			? `/it${location.pathname}`
			: location.pathname;

	const isActive = (path) => {
		if (path === '/') return normalizedPath === '/';
		return normalizedPath.startsWith(path);
	};

	useEffect(() => {
		// Close mobile menu on route change
		setIsMenuOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		// Lock body scroll when menu is open and prevent layout shift from scrollbar removal
		if (isMenuOpen) {
			const scrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${scrollbarWidth}px`;
		} else {
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';
		}

		return () => {
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';
		};
	}, [isMenuOpen]);

	return (
		<>
			<header className="sticky top-0 z-50 border-b border-neutral-100 bg-white">
				<nav className="container-default flex h-16 items-center">
					<div className="flex w-full items-center justify-between">
						{/* Logo */}
						<Link
							to={basePath || '/'}
							onClick={handleHomeClick}
							className="text-lg font-bold tracking-tight text-swr transition-colors hover:text-accent-hover"
						>
							DisciplineDesign
						</Link>

						{/* Navigation */}
						<ul className="hidden items-center gap-7 md:flex">
							{navigationLinks.map((link) => (
								<li key={link.to}>
									<Link
										to={`${basePath}${link.to}`}
										className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
											isActive(link.to)
												? 'text-accent'
												: 'text-neutral-500 hover:text-accent-hover'
										}`}
									>
										{labels[link.key]}
									</Link>
								</li>
							))}
						</ul>

						{/* Language toggle */}
							<div className="hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] md:flex">
								<Link
									to={englishPath}
									onClick={() => setPreference('en')}
									className={
										!isItalian
											? 'text-neutral-900'
											: 'text-neutral-500 hover:text-neutral-900'
									}
							>
								EN
							</Link>
							<span className="text-neutral-300">/</span>
								<Link
									to={italianPath}
									onClick={() => setPreference('it')}
									className={
										isItalian
											? 'text-neutral-900'
											: 'text-neutral-500 hover:text-neutral-900'
								}
							>
								IT
							</Link>
						</div>

						{/* Mobile menu button */}
						<button
							type="button"
							className="inline-flex h-5 w-5 items-center justify-center md:hidden"
							aria-expanded={isMenuOpen}
							aria-controls="mobile-nav"
							onClick={() => setIsMenuOpen((open) => !open)}
						>
							<span className="sr-only">Toggle navigation</span>
							<div className="relative h-5 w-5">
								<img
									src="/burger_icon.svg"
									alt=""
									className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ${
										isMenuOpen ? 'opacity-0' : 'opacity-100'
									}`}
								/>
								<img
									src="/burger_close.svg"
									alt=""
									className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ${
										isMenuOpen ? 'opacity-100' : 'opacity-0'
									}`}
								/>
							</div>
						</button>
					</div>
				</nav>
			</header>

			{/* Mobile navigation overlay */}
			<div
				id="mobile-nav"
				className={`fixed inset-0 z-[90] bg-white transition-opacity duration-200 ${
					isMenuOpen
						? 'pointer-events-auto opacity-100'
						: 'pointer-events-none opacity-0'
				}`}
			>
				<div className="flex h-full flex-col justify-start">
					<div className="flex items-center justify-end px-6 py-5">
						<button
							type="button"
							aria-label="Close navigation"
							onClick={() => setIsMenuOpen(false)}
							className="inline-flex h-5 w-5 items-center justify-center"
						>
							<img
								src="/burger_close.svg"
								alt="Close navigation"
								className="h-5 w-5"
							/>
						</button>
					</div>

					<div className="flex flex-col items-end gap-6 px-6 pb-12 pt-2">
							<div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
								<Link
									to={englishPath}
									onClick={() => {
										setPreference('en');
										setIsMenuOpen(false);
									}}
									className={
										!isItalian
											? 'text-neutral-900'
											: 'text-neutral-500 hover:text-neutral-900'
									}
							>
								EN
							</Link>
							<span className="text-neutral-300">/</span>
								<Link
									to={italianPath}
									onClick={() => {
										setPreference('it');
										setIsMenuOpen(false);
									}}
									className={
										isItalian
											? 'text-neutral-900'
										: 'text-neutral-500 hover:text-neutral-900'
								}
							>
								IT
							</Link>
						</div>
						<ul className="w-full space-y-5 text-right">
							{navigationLinks.map((link) => (
								<li key={link.to}>
									<Link
										to={`${basePath}${link.to}`}
										className={`block py-2 text-lg font-semibold uppercase tracking-[0.14em] ${
											isActive(link.to)
												? 'text-accent'
												: 'text-neutral-600 hover:text-accent-hover'
										}`}
									>
										{labels[link.key]}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
