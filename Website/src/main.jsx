import ReactDOM from 'react-dom/client';
import { useEffect } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	useLocation,
	Outlet,
} from 'react-router-dom';
import './index.css';
import Nav from './components/navbar.jsx';
import Home from './pages/Home.jsx';

// Force scroll to top on reload before React mounts
if (typeof window !== 'undefined') {
	if ('scrollRestoration' in window.history) {
		window.history.scrollRestoration = 'manual';
	}
	window.scrollTo(0, 0);
}

function ScrollToTop() {
	const location = useLocation();

	useEffect(() => {
		// Map some route paths to element IDs to support direct URL entry like '/servizi'
		const pathToId = {
			'/servizi': 'servizi',
			'/services': 'servizi',
			'/contatti': 'contatti',
			'/contact': 'contatti',
		};

		const doScrollTo = (id, replaceOnUserScroll = false) => {
			if (!id) return;
			// small delay so DOM is ready
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) el.scrollIntoView({ behavior: 'smooth' });

				if (replaceOnUserScroll) {
					// attach a temporary scroll handler that replaces the URL to '/'
					// after the user scrolls (not the programmatic scroll).
					let handled = false;
					const onUserScroll = () => {
						if (handled) return;
						handled = true;
						// replace the current history entry so URL becomes '/'
						try {
							window.history.replaceState(null, '', '/');
						} catch (e) {
							/* ignore */
						}
						window.removeEventListener('scroll', onUserScroll, {
							passive: true,
						});
					};

					// wait a moment before listening to avoid catching the programmatic scroll
					setTimeout(() => {
						window.addEventListener('scroll', onUserScroll, { passive: true });
					}, 350);
				}
			}, 0);
		};
		// If location has a hash, prefer that.
		if (location.hash) {
			const id = location.hash.replace('#', '');
			doScrollTo(id);
			return;
		}

		// Otherwise, map pathname to an ID if present
		const mapped = pathToId[location.pathname];
		if (mapped) {
			// when navigating directly to the localized route, after initial scroll
			// replace the URL to '/' when the user scrolls away to avoid staying on /servizi
			doScrollTo(mapped, true);
			return;
		}

		// Default: scroll to top
		window.scrollTo({ top: 0, left: 0 });
	}, [location.pathname, location.hash]);

	return null;
}

function Layout() {
	return (
		<>
			<ScrollToTop />
			<Nav />
			<Outlet />
		</>
	);
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: () => {
					setTimeout(() => {
						window.scrollTo(0, 0);
					}, 0);
				},
			},
			{
				path: 'servizi',
				element: <Home />,
				loader: () => {
					// Render Home and scroll to the #servizi section
					setTimeout(() => {
						const el = document.getElementById('servizi');
						if (el) el.scrollIntoView({ behavior: 'smooth' });
					}, 0);
					return null;
				},
			},
			{
				path: 'contatti',
				// Render Home and scroll to the #contatti section
				element: <Home />,
				loader: () => {
					setTimeout(() => {
						const el = document.getElementById('contatti');
						if (el) el.scrollIntoView({ behavior: 'smooth' });
					}, 0);
					return null;
				},
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
