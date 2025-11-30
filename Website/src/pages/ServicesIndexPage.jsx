import { useDocumentTitle } from '@/lib/seo';
import { Section, Heading, Stack, Body } from '../components/ui';

/**
 * ServicesIndexPage - Services overview
 */
export default function ServicesIndexPage({ lang = 'en' }) {
	const copy = {
		en: {
			title: 'Services',
			intro:
				'We work on platforms where clarity is a functional requirement. Our services are designed to make complex systems predictable, structured and operationally coherent.',
			services: [
				{
					title: 'UX Design for Enterprise Systems',
					description:
						'We design interfaces for high-density workflows, multi-role environments and complex processes.',
				},
				{
					title: 'Information Architecture & Workflow Clarity',
					description:
						'We rebuild the underlying structure so actions, pages and data follow predictable logic.',
				},
				{
					title: 'Product & Service Design for Operations',
					description:
						'From dashboards to field tools, we design for speed, precision and clear decision paths.',
				},
				{
					title: 'Process & Workflow Redesign',
					description:
						'We formalise existing processes, expose friction and reshape them into defendable sequences.',
				},
				{
					title: 'Mobile Interfaces for Field Teams',
					description:
						'Compact, high-signal designs for technicians, inspectors, supervisors and distributed roles.',
				},
			],
		},
		it: {
			title: 'Servizi',
			intro:
				'Lavoriamo su piattaforme dove la chiarezza è un requisito funzionale. I nostri servizi rendono i sistemi complessi prevedibili, strutturati e coerenti operativamente.',
			services: [
				{
					title: 'UX Design per Sistemi Enterprise',
					description:
						'Progettiamo interfacce per workflow ad alta densità, ambienti multi-ruolo e processi complessi.',
				},
				{
					title: 'Information Architecture & Chiarezza dei Workflow',
					description:
						'Ricostruiamo la struttura di base affinché azioni, pagine e dati seguano una logica prevedibile.',
				},
				{
					title: 'Product & Service Design per le Operations',
					description:
						'Da dashboard a strumenti di campo, progettiamo per velocità, precisione e percorsi decisionali chiari.',
				},
				{
					title: 'Redesign di Processi e Workflow',
					description:
						'Formalizziamo i processi esistenti, evidenziamo le frizioni e li trasformiamo in sequenze difendibili.',
				},
				{
					title: 'Interfacce Mobile per Team sul Campo',
					description:
						'Design compatti e ad alto segnale per tecnici, ispettori, supervisori e ruoli distribuiti.',
				},
			],
		},
	}[lang] || {
		title: 'Services',
		intro:
			'We work on platforms where clarity is a functional requirement. Our services are designed to make complex systems predictable, structured and operationally coherent.',
		services: [
			{
				title: 'UX Design for Enterprise Systems',
				description:
					'We design interfaces for high-density workflows, multi-role environments and complex processes.',
			},
			{
				title: 'Information Architecture & Workflow Clarity',
				description:
					'We rebuild the underlying structure so actions, pages and data follow predictable logic.',
			},
			{
				title: 'Product & Service Design for Operations',
				description:
					'From dashboards to field tools, we design for speed, precision and clear decision paths.',
			},
			{
				title: 'Process & Workflow Redesign',
				description:
					'We formalise existing processes, expose friction and reshape them into defendable sequences.',
			},
			{
				title: 'Mobile Interfaces for Field Teams',
				description:
					'Compact, high-signal designs for technicians, inspectors, supervisors and distributed roles.',
			},
		],
	};

	useDocumentTitle(copy.title, copy.intro);

	return (
		<>
			<Section spacing="xl">
				<Stack gap="xl">
					<div>
						<Heading level="h1" size="hero">
							{copy.title}
						</Heading>
						<p className="mt-6 max-w-3xl text-lg text-neutral-600">
							{copy.intro}
						</p>
					</div>

					<div className="mt-10 space-y-8">
						{copy.services.map((service, index) => (
							<div
								key={index}
								className="border-t border-neutral-200 pt-8 md:grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-6"
							>
								<div className="flex items-start gap-3">
									<div className="mt-1 h-5 w-0.5 bg-accent" />
									<Heading level="h2" size="card">
										{service.title}
									</Heading>
								</div>
								<Body className="mt-4 text-neutral-700 md:mt-0">
									{service.description}
								</Body>
							</div>
						))}
					</div>
				</Stack>
			</Section>
		</>
	);
}
