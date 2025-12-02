/** @format */

import { useDocumentTitle } from '@/lib/seo';
import { Section, Heading, Stack, Body } from '../components/ui';

/**
 * MethodIndexPage - Method pillars index
 */
export default function MethodIndexPage({ lang = 'en' }) {
	const copy = {
		en: {
			title: 'Method',
			intro: 'Our work is grounded in structure, not style. We expose how complex, multi-role systems behave across public-sector and enterprise software, make their workflows explicit, then rebuild the interface around that operational truth.',
			pillars: [
				{
					title: 'Systems First',
					description:
						'We start from the system, not the screen. Roles, responsibilities, permissions, states, data models and constraints are mapped—often in legacy environments—before any UI decision. This exposes contradictions, gaps and risky shortcuts so redesign rests on stable ground instead of habits.',
				},
				{
					title: 'Workflow Clarity',
					description:
						'Complex platforms live or die on decision paths. We reconstruct workflows step by step, define who does what and in which order, then remove detours and dead ends so operators can actually follow the flow without relying on tribal knowledge.',
				},
				{
					title: 'Information Architecture as Infrastructure',
					description:
						'Screens are just endpoints in a network of concepts, relationships and rules. We design that network—objects, states, lifecycle rules and integrations—so the product behaves like a coherent system instead of an archive of exceptions.',
				},
				{
					title: 'Interfaces as Operational Tools',
					description:
						'Once the structure is sound, the interface becomes an instrument, not decoration. We design layouts, interactions and states that lower cognitive load, surface risk early and keep the next step obvious—whether taming legacy UIs or creating new tools born from the same operational logic.',
				},
			],
		},
		it: {
			title: 'Metodo',
			intro: 'Il nostro lavoro è radicato nella struttura, non nello stile. Rendiamo visibile come si comportano i sistemi complessi e multi-ruolo — nel software pubblico e enterprise — esplicitiamo i workflow e ricostruiamo le interfacce intorno a quella verità operativa.',
			pillars: [
				{
					title: 'Systems First',
					description:
						'Partiamo dal sistema, non dallo schermo. Ruoli, responsabilità, permessi, stati, modelli dati e vincoli vengono mappati — spesso in contesti legacy — prima di ogni scelta di UI. Questo fa emergere contraddizioni, vuoti e scorciatoie rischiose, così il prodotto può essere riprogettato su basi stabili invece che su abitudini.',
				},
				{
					title: 'Chiarezza dei Workflow',
					description:
						'I sistemi complessi vivono o crollano sui percorsi decisionali. Ricostruiamo i workflow passo dopo passo, definiamo chi fa cosa e in quale ordine, poi eliminiamo deviazioni e vicoli ciechi così che gli operatori possano seguirli senza affidarsi a conoscenze implicite.',
				},
				{
					title: 'Information Architecture come Infrastruttura',
					description:
						'Gli schermi sono endpoint in una rete di concetti, relazioni e regole. Progettiamo quella rete — oggetti, stati, regole di ciclo di vita e integrazioni — affinché il prodotto si comporti come un sistema coerente e non come un archivio di eccezioni.',
				},
				{
					title: 'Interfacce come Strumenti Operativi',
					description:
						'Quando la struttura è solida, l’interfaccia diventa uno strumento, non un ornamento. Progettiamo layout, interazioni e stati che riducono il carico cognitivo, fanno emergere il rischio in anticipo e rendono ovvio il passo successivo — sia domando interfacce legacy sia creando strumenti nuovi basati sulla stessa logica operativa.',
				},
			],
		},
	}[lang] || {
		title: 'Method',
		intro: 'Our work is grounded in structure, not style. We expose how a system really behaves, make its workflows explicit, then rebuild the interface around that operational truth. Most projects start from existing platforms, but when the foundations are finally clear we also design new tools that inherit the same discipline.',
		pillars: [
			{
				title: 'Systems First',
				description:
					'We start from the system, not the screen. Roles, permissions, states, data models and constraints are mapped before any UI decision, so redesign happens on stable ground rather than habits.',
			},
			{
				title: 'Workflow Clarity',
				description:
					'We reconstruct workflows step by step, define who does what and in which order, then remove detours and dead ends so every action becomes predictable.',
			},
			{
				title: 'Information Architecture as Infrastructure',
				description:
					'We design the network of concepts, relationships and rules that sits under the screens, so the product can evolve without losing coherence.',
			},
			{
				title: 'Interfaces as Operational Tools',
				description:
					'Interfaces are treated as instruments that reduce cognitive load and errors. In rebuilt systems they correct legacy screens, in new ones they express the same operational logic from day one.',
			},
		],
	};

	useDocumentTitle(copy.title, copy.intro);

	return (
		<>
			<Section spacing='xl'>
				<Stack gap='xl'>
					<div>
						<Heading
							level='h1'
							size='hero'>
							{copy.title}
						</Heading>
						<Body
							size='lg'
							className='max-w-3xl mt-6 text-neutral-600'>
							{copy.intro}
						</Body>
					</div>

					<div className='mt-10 space-y-8'>
						{copy.pillars.map((pillar, index) => (
							<div
								key={index}
								className={`border-t border-neutral-200 pt-8 md:grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-6 ${
									index === copy.pillars.length - 1
										? 'border-b pb-8'
										: ''
								}`}>
								<div className='flex items-start gap-3'>
									<Heading
										level='h2'
										size='card'>
										{pillar.title}
									</Heading>
								</div>
								<Body className='mt-4 text-neutral-700 md:mt-0'>
									{pillar.description}
								</Body>
							</div>
						))}
					</div>
				</Stack>
			</Section>
		</>
	);
}
