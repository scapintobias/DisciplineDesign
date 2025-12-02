/** @format */

import { Section, Heading, Body, Stack, Eyebrow } from '../ui';

const copy = {
	en: {
		eyebrow: 'Who we work with',
		heading:
			'We focus on organisations where software behaves like infrastructure: systems that coordinate people, decisions and operations over time.',
		items: [
			{
				label: 'Public sector & infrastructure',
				text: 'Labour agencies, public employment services, training platforms and other services where policy, regulation and real people meet in software.',
			},
			{
				label: 'Enterprise & software vendors',
				text: 'Teams that build ERP-style platforms, management systems and complex back-office tools used every day by operators, not just managers.',
			},
			{
				label: 'Industrial & field operations',
				text: 'Factories, warehouses, construction and field maintenance where workflows, checks and handovers need to be unambiguous across shifts and sites.',
			},
		],
	},
	it: {
		eyebrow: 'Con chi lavoriamo',

		heading:
			'Ci concentriamo su organizzazioni in cui il software si comporta come un’infrastruttura: sistemi che coordinano persone, decisioni e operazioni nel tempo.',
		items: [
			{
				label: 'Settore pubblico e infrastrutture',
				text: 'Agenzie per il lavoro, servizi pubblici per l’impiego, piattaforme formative e altri servizi in cui norme, politiche e persone reali si incontrano dentro il software.',
			},
			{
				label: 'Impresa e software house',
				text: 'Team che progettano piattaforme tipo ERP, gestionali e strumenti di back-office complessi usati ogni giorno dagli operatori, non solo dai dirigenti.',
			},
			{
				label: 'Industria e operazioni sul campo',
				text: 'Stabilimenti, magazzini, cantieri e manutenzione sul campo in cui flussi, controlli e passaggi devono restare chiari e univoci tra turni e sedi.',
			},
		],
	},
};

export default function ClientsSectors({ lang = 'en' }) {
	const localized = copy[lang] || copy.en;

	return (
		<Section
			spacing='3xl'
			className='bg-white border-t border-neutral-200'>
			<Stack gap='xl'>
				<div className='max-w-3xl space-y-3'>
					<Eyebrow>{localized.eyebrow}</Eyebrow>
					<Heading
						level='h2'
						size='section'>
						{localized.heading}
					</Heading>
					<Body
						size='lg'
						className='text-neutral-700'>
						{localized.body}
					</Body>
				</div>

				<div className='mt-6 space-y-6'>
					{localized.items.map((item, index) => (
						<div
							key={index}
							className={`border-t border-neutral-200 pt-6 md:grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-6 ${
								index === localized.items.length - 1
									? 'border-b pb-6'
									: ''
							}`}>
							<Heading
								level='h3'
								size='card'>
								{item.label}
							</Heading>
							<Body className='mt-3 text-neutral-700 md:mt-0'>
								{item.text}
							</Body>
						</div>
					))}
				</div>
			</Stack>
		</Section>
	);
}
