/** @format */

import { Section, Heading, Body, Stack, Stat, Eyebrow } from '../ui';

/**
 * WhyDiscipline - Stats and positioning section
 */
export default function WhyDiscipline({ lang = 'en' }) {
	const copy = {
		en: {
			eyebrow: 'Why choose DisciplineDesign',
			heading: 'Built for complex operations',
			body: 'We work where software is part of the infrastructure: industrial platforms, internal tools, public services and the overlapping layers of Italian public administration. We sit with operators, caseworkers, coordinators, domain experts and technical teams to understand how work really happens, then rebuild systems so responsibilities, states and decisions are unambiguous — even under regulatory and organisational pressure.',
			stats: [
				{
					value: '15+',
					label: 'Years designing operational and enterprise software',
				},
				{
					value: '100%',
					label: 'Work focused on multi-role, multi-workflow systems',
				},
				{
					value: '€50M+',
					label: 'Annual value flowing through systems we’ve redesigned',
				},
			],
		},
		it: {
			eyebrow: 'Perché scegliere DisciplineDesign',
			heading: 'Costruito per operazioni complesse',
			body: 'Lavoriamo dove il software fa parte dell’infrastruttura: piattaforme industriali, strumenti interni, servizi pubblici e i livelli sovrapposti della Pubblica Amministrazione italiana. Ci sediamo con operatori, funzionari, coordinatori, esperti di dominio e team tecnici per capire come il lavoro avviene davvero, poi ricostruiamo i sistemi affinché responsabilità, stati e decisioni siano inequivocabili — anche sotto pressione normativa e organizzativa.',
			stats: [
				{
					value: '15+',
					label: 'Anni di progettazione software operativo ed enterprise',
				},
				{
					value: '100%',
					label: 'Lavoro dedicato a sistemi multi-ruolo e multi-workflow',
				},
				{
					value: '€50M+',
					label: 'Valore annuo che transita in sistemi che abbiamo riprogettato',
				},
			],
		},
	}[lang] || {
		eyebrow: 'Why choose DisciplineDesign',
		heading: 'Built for complex operations',
		body: 'We work where software is part of the infrastructure: industrial platforms, internal tools, public services and multi-role workflows.',
		stats: [
			{
				value: '15+',
				label: 'Years designing operational and enterprise software',
			},
			{
				value: '100%',
				label: 'Work focused on multi-role, multi-workflow systems',
			},
			{
				value: '€50M+',
				label: 'Annual value flowing through systems we’ve redesigned',
			},
		],
	};

	return (
		<Section
			spacing='3xl'
			className='bg-white'>
			<Stack gap='xl'>
				{/* Intro */}
				<div className='max-w-2xl'>
					<Eyebrow className='mb-3'>{copy.eyebrow}</Eyebrow>
					<Heading
						level='h2'
						size='section'
						className='mb-4'>
						{copy.heading}
					</Heading>
					<Body
						size='lg'
						className='text-neutral-700'>
						{copy.body}
					</Body>
				</div>

				{/* Stats */}
				<dl className='grid gap-10 mt-10 md:grid-cols-3'>
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
