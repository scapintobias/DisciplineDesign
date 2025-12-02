import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function getLanguageFromPath(pathname) {
	return pathname.startsWith('/it') ? 'it' : 'en';
}

export function useLanguageFromLocation() {
	const { pathname } = useLocation();
	return getLanguageFromPath(pathname);
}

/**
 * Redirect to /it on first visit to root if browser language is Italian.
 * Respects stored preference in localStorage.
 */
export function useLanguageRedirectOnRoot() {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		// Only on root path
		if (location.pathname !== '/') return;

		// Skip if a preference is already stored
		const stored = localStorage.getItem('preferredLang');
		if (stored === 'en' || stored === 'it') return;

		// Detect browser language
		const browserLang =
			(navigator.languages && navigator.languages[0]) ||
			navigator.language ||
			'';
		const isIt = browserLang.toLowerCase().startsWith('it');

		if (isIt) {
			localStorage.setItem('preferredLang', 'it');
			navigate('/it', { replace: true });
		} else {
			localStorage.setItem('preferredLang', 'en');
		}
	}, [location.pathname, navigate]);
}
