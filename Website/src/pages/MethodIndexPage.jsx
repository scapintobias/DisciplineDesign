import { useDocumentTitle } from '@/lib/seo';
import { Section, Heading, Stack, Body } from '../components/ui';

/**
 * MethodIndexPage - Method pillars index
 */
export default function MethodIndexPage({ lang = 'en' }) {
	const copy = {
		en: {
			title: 'Method',
			intro:
				'Our work is grounded in structure, not style. Every project follows the same disciplined approach to exposing systems, clarifying workflows and rebuilding interfaces around operational truth.',
			pillars: [
				{
					title: 'Systems First',
					description:
						'We map roles, data models and constraints before touching UI. The interface is the last layer, not the first.',
				},
				{
					title: 'Workflow Clarity',
					description:
						'Complex systems depend on repeatable decision paths. We rebuild the workflow logic so every action becomes predictable.',
				},
				{
					title: 'Information Architecture as Infrastructure',
					description:
						'Screens are endpoints. The work happens in the structure beneath them. We design the topology that holds everything together.',
				},
				{
					title: 'Interfaces as Operational Tools',
					description:
						'Interfaces reduce cognitive load and errors. They are instruments, not visual decorations.',
				},
			],
		},
		it: {
			title: 'Metodo',
			intro:
				'Il nostro lavoro è radicato nella struttura, non nello stile. Ogni progetto segue lo stesso approccio disciplinato: esporre i sistemi, chiarire i workflow e ricostruire le interfacce intorno alla verità operativa.',
			pillars: [
				{
					title: 'Systems First',
					description:
						'Mappiamo ruoli, modelli dati e vincoli prima di toccare l’UI. L’interfaccia è l’ultimo strato, non il primo.',
				},
				{
					title: 'Chiarezza dei Workflow',
					description:
						'I sistemi complessi dipendono da percorsi decisionali ripetibili. Ricostruiamo la logica dei workflow perché ogni azione sia prevedibile.',
				},
				{
					title: 'Information Architecture come Infrastruttura',
					description:
						'Gli schermi sono endpoint. Il lavoro avviene nella struttura sottostante. Progettiamo la topologia che tiene insieme tutto.',
				},
				{
					title: 'Interfacce come Strumenti Operativi',
					description:
						'Le interfacce riducono carico cognitivo ed errori. Sono strumenti, non decorazioni visive.',
				},
			],
		},
	}[lang] || {
		title: 'Method',
		intro:
			'Our work is grounded in structure, not style. Every project follows the same disciplined approach to exposing systems, clarifying workflows and rebuilding interfaces around operational truth.',
		pillars: [
			{
				title: 'Systems First',
				description:
					'We map roles, data models and constraints before touching UI. The interface is the last layer, not the first.',
			},
			{
				title: 'Workflow Clarity',
				description:
					'Complex systems depend on repeatable decision paths. We rebuild the workflow logic so every action becomes predictable.',
			},
			{
				title: 'Information Architecture as Infrastructure',
				description:
					'Screens are endpoints. The work happens in the structure beneath them. We design the topology that holds everything together.',
			},
			{
				title: 'Interfaces as Operational Tools',
				description:
					'Interfaces reduce cognitive load and errors. They are instruments, not visual decorations.',
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

					<Stack gap="md" className="mt-10 max-w-3xl">
						{copy.pillars.map((pillar, index) => (
							<div
								key={index}
								className="rounded-xl border border-neutral-200 bg-white p-6"
							>
								<Heading level="h2" size="card">
									{pillar.title}
								</Heading>
								<Body className="mt-3 text-neutral-700">
									{pillar.description}
								</Body>
							</div>
						))}
					</Stack>
				</Stack>
			</Section>
		</>
	);
}
