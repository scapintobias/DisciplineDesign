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
import Case from './pages/Case.jsx';
import Servizi from './pages/Servizi.jsx';
import Contatti from './pages/Contatti.jsx';
import Footer from './components/footer.jsx';

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
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [location.pathname]);

	return null;
}

function Layout() {
	return (
		<>
			<ScrollToTop />
			<Nav />
			<Outlet />
			<Footer />
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
			},
			{
				path: 'servizi',
				element: <Servizi />,
			},
			{
				path: 'contatti',
				element: <Contatti />,
			},
			{
				path: 'case',
				element: <Case />,
			},
			{
				path: 'case/:caseId',
				element: <Case />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
