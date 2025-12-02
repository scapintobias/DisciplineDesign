import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieNotice from './CookieNotice';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
	}, [pathname]);

	return null;
}

/**
 * AppLayout - Main application layout wrapper
 * Provides consistent header and footer across all pages
 */
export default function AppLayout() {
	return (
		<div className="flex min-h-screen flex-col">
			<ScrollToTop />
			<Header />
			<main className="flex-grow">
				<Outlet />
			</main>
			<Footer />
			<CookieNotice />
		</div>
	);
}
