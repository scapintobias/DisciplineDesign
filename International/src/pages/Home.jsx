import { useDocumentTitle } from '@/lib/seo';
import Hero from '../components/home/Hero';
import FeaturedCaseStudy from '../components/home/FeaturedCaseStudy';
import WhyDiscipline from '../components/home/WhyDiscipline';
import ClientsSectors from '../components/home/ClientsSectors';
import { HomeContextSection } from '../components/home/HomeContextSection';
import SelectedWork from '../components/home/SelectedWork';
import { useLanguageRedirectOnRoot } from '@/lib/language';

/**
 * HomePage - Landing page with hero, featured work, and case studies
 */
export default function HomePage({ lang = 'en' }) {
	const description =
		lang === 'it'
			? 'Progettiamo chiarezza operativa per organizzazioni il cui software è troppo importante per fallire.'
			: 'We design operational clarity for organisations whose software is too important to fail.';

	useDocumentTitle(null, description);
	useLanguageRedirectOnRoot();

	return (
		<>
			<Hero lang={lang} />
			<FeaturedCaseStudy lang={lang} />
			<WhyDiscipline lang={lang} />
			<ClientsSectors lang={lang} />
			<HomeContextSection lang={lang} />
			<SelectedWork lang={lang} />
		</>
	);
}
