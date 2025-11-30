import { Section, Heading, Body, Stack, Stat, Eyebrow } from '../ui';

/**
 * WhyDiscipline - Stats and positioning section
 */
export default function WhyDiscipline({ lang = 'en' }) {
	const copy = {
		en: {
			eyebrow: 'Why DisciplineDesign',
			heading: 'Built for complexity',
			body: 'We specialise in platforms where workflows, data models and roles collide. Our work exposes structure where none was visible, clarifies decision paths, and rebuilds enterprise systems around logic and operational truth.',
			stats: [
				{ value: '15+', label: 'Years designing enterprise software' },
				{
					value: '100%',
					label: 'Focus on multi-role, multi-workflow operational systems',
				},
				{
					value: '€50M+',
					label:
						"Annual business value processed through systems we've redesigned",
				},
			],
		},
		it: {
			eyebrow: 'Perché DisciplineDesign',
			heading: 'Costruito per la complessità',
			body: 'Siamo specializzati in piattaforme dove si incrociano workflow, modelli dati e ruoli. Il nostro lavoro rende visibile la struttura, chiarisce i percorsi decisionali e ricostruisce i sistemi enterprise intorno alla logica e alla verità operativa.',
			stats: [
				{ value: '15+', label: 'Anni di progettazione software enterprise' },
				{
					value: '100%',
					label: 'Focus su sistemi operativi multi-ruolo e multi-workflow',
				},
				{
					value: '€50M+',
					label:
						'Valore annuale gestito attraverso sistemi che abbiamo riprogettato',
				},
			],
		},
	}[lang] || {
		eyebrow: 'Why DisciplineDesign',
		heading: 'Built for complexity',
		body: 'We specialise in platforms where workflows, data models and roles collide. Our work exposes structure where none was visible, clarifies decision paths, and rebuilds enterprise systems around logic and operational truth.',
		stats: [
			{ value: '15+', label: 'Years designing enterprise software' },
			{
				value: '100%',
				label: 'Focus on multi-role, multi-workflow operational systems',
			},
			{
				value: '€50M+',
				label:
					"Annual business value processed through systems we've redesigned",
			},
		],
	};

	return (
		<Section spacing="xl" className="bg-white">
			<Stack gap="xl">
				{/* Intro */}
				<div className="max-w-2xl">
					<Eyebrow className="mb-3">{copy.eyebrow}</Eyebrow>
					<Heading level="h2" size="section" className="mb-4">
						{copy.heading}
					</Heading>
					<Body size="lg" className="text-neutral-700">
						{copy.body}
					</Body>
				</div>

				{/* Stats */}
				<dl className="mt-10 grid gap-10 md:grid-cols-3">
					{copy.stats.map((stat, index) => (
						<Stat
							key={index}
							value={stat.value}
							label={stat.label}
						/>
					))}
				</dl>
			</Stack>
		</Section>
	);
}
