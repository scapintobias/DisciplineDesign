import { Section, Heading, Body, Stack } from '../ui';

/**
 * Hero - Homepage hero section
 * Uses exact copy as specified
 */
export default function Hero({ lang = 'en' }) {
	const copy = {
		en: {
			title:
				'We design operational clarity for organisations whose software is too important to fail.',
			subtitle: 'Enterprise systems built from logic.',
		},
		it: {
			title:
				'Progettiamo chiarezza operativa per organizzazioni il cui software è troppo importante per fallire.',
			subtitle: 'Sistemi enterprise costruiti sulla logica.',
		},
	}[lang] || {
		title:
			'We design operational clarity for organisations whose software is too important to fail.',
		subtitle: 'Enterprise systems built from logic.',
	};

	return (
		<Section spacing="xl" className="bg-white pb-24 pt-28">
			<Stack gap="md">
				<Heading
					level="h1"
					size="display"
					tracking="tight"
					className="leading-[1.05]"
				>
					{copy.title}
				</Heading>
				<Body size="lg" className="max-w-3xl text-neutral-600">
					{copy.subtitle}
				</Body>
			</Stack>
		</Section>
	);
}
