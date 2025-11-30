import { useDocumentTitle } from '@/lib/seo';
import { Section, Heading, Stack } from '../components/ui';

/**
 * AboutPage - Studio philosophy and approach
 */
export default function AboutPage({ lang = 'en' }) {
	const copy = {
		en: {
			title: 'About',
			description: 'Clarity, structure and operational precision.',
			paragraphs: [
				'DisciplineDesign is a studio focused on clarity, structure and operational precision. We work on systems where ambiguity creates cost: enterprise platforms, internal tools, mobile interfaces for field teams and multi-role workflows.',
				'Our process is slow, deliberate and documented. We map how organisations actually operate, expose the friction, and redesign the product from the inside out.',
				'Based in Padova. Working across Italy and beyond.',
			],
		},
		it: {
			title: 'Chi siamo',
			description: 'Chiarezza, struttura e precisione operativa.',
			paragraphs: [
				'DisciplineDesign è uno studio focalizzato su chiarezza, struttura e precisione operativa. Lavoriamo su sistemi dove l’ambiguità ha un costo: piattaforme enterprise, strumenti interni, interfacce mobile per team sul campo e workflow multi-ruolo.',
				'Il nostro processo è lento, deliberato e documentato. Mappiamo come operano davvero le organizzazioni, esponiamo le frizioni e riprogettiamo il prodotto dall’interno.',
				'Base a Padova. Lavoriamo in Italia e oltre.',
			],
		},
	}[lang] || {
		title: 'About',
		description: 'Clarity, structure and operational precision.',
		paragraphs: [],
	};

	useDocumentTitle(copy.title, copy.description);

	return (
		<>
			<Section spacing="xl">
				<Stack gap="lg" className="max-w-4xl">
					<Heading level="h1" size="hero">
						{copy.title}
					</Heading>
					{copy.paragraphs.map((paragraph, index) => (
						<p
							key={index}
							className="text-xl leading-relaxed text-neutral-600"
						>
							{paragraph}
						</p>
					))}
				</Stack>
			</Section>
		</>
	);
}
