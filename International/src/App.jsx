import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

// Pages
import HomePage from './pages/Home';
import WorkIndexPage from './pages/Work';
import WorkDetailPage from './pages/Case_Study';
import ServicesIndexPage from './pages/Services';
import MethodIndexPage from './pages/Method';
import AboutPage from './pages/About';
import ContactPage from './pages/Contacts';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFound';

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
				<Route path="privacy" element={<PrivacyPage lang="en" />} />
				<Route path="*" element={<NotFoundPage lang="en" />} />
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
				<Route path="privacy" element={<PrivacyPage lang="it" />} />
				<Route path="*" element={<NotFoundPage lang="it" />} />
			</Route>
		</Routes>
	);
}
