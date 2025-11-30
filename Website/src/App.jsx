import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

// Pages
import HomePage from './pages/HomePage';
import WorkIndexPage from './pages/WorkIndexPage';
import WorkDetailPage from './pages/WorkDetailPage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import MethodIndexPage from './pages/MethodIndexPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

/**
 * App - Main application component with routing
 */
export default function App() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<HomePage lang="en" />} />
				<Route path="work" element={<WorkIndexPage lang="en" />} />
				<Route
					path="work/:slug"
					element={<WorkDetailPage lang="en" />}
				/>
				<Route
					path="services"
					element={<ServicesIndexPage lang="en" />}
				/>
				<Route path="method" element={<MethodIndexPage lang="en" />} />
				<Route path="about" element={<AboutPage lang="en" />} />
				<Route path="contact" element={<ContactPage lang="en" />} />
			</Route>
			<Route path="/it" element={<AppLayout />}>
				<Route index element={<HomePage lang="it" />} />
				<Route path="work" element={<WorkIndexPage lang="it" />} />
				<Route
					path="work/:slug"
					element={<WorkDetailPage lang="it" />}
				/>
				<Route
					path="services"
					element={<ServicesIndexPage lang="it" />}
				/>
				<Route path="method" element={<MethodIndexPage lang="it" />} />
				<Route path="about" element={<AboutPage lang="it" />} />
				<Route path="contact" element={<ContactPage lang="it" />} />
			</Route>
		</Routes>
	);
}
