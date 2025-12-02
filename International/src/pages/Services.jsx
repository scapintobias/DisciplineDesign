/** @format */

import { useDocumentTitle } from '@/lib/seo';
import { Section, Heading, Stack, Body } from '../components/ui';

/**
 * ServicesIndexPage - Industrial-grade services
 */
export default function ServicesIndexPage({ lang = 'en' }) {
	const copy = {
		en: {
			title: 'Services',
			intro: 'We work on critical systems where reliability is non-negotiable: internal platforms, operational tools, plant software, energy and logistics dashboards, ERP-style backbones and public-service systems. Most of our work is reconstructive — clarifying processes that have grown without structure — and when the foundations are stable we design new tools that inherit the same discipline.',
			services: [
				{
					title: (
						<>
							Interaction Design for Industrial,
							<br />
							Public-Service & Operational Systems
						</>
					),
					description:
						'We design how systems behave in manufacturing, energy, logistics, public services and high-density operational environments. Multi-role access, real-time data, constrained contexts and safety-critical actions require clarity that does not fail under pressure for operators and coordinators alike.',
				},
				{
					title: 'Workflow Architecture for Production & Field Operations',
					description:
						'We rebuild workflows used in factories, warehouses, maintenance operations, public-service delivery and distributed teams. Clear sequences reduce downtime, eliminate reinterpretation and make operational decisions repeatable across shifts, sites and agencies.',
				},
				{
					title: 'Information Architecture for Complex Platforms',
					description:
						'Operational and public-service platforms accumulate years of logic. We restructure roles, states, objects and lifecycle rules so ERP-style systems, back offices and shared portals behave like coherent systems instead of archives of exceptions.',
				},
				{
					title: 'Redesign of Legacy system interactions & Industrial Tools',
					description:
						'Legacy screens in manufacturing, plant controls, ERP suites or policy-driven portals often conceal critical workflows. We expose the real structure, stabilise the logic and rebuild the interface so operators, technicians and managers can rely on it without ambiguity.',
				},
				{
					title: 'Mobile Tools for Technicians & Field Teams',
					description:
						'We design compact, high-signal mobile system interactions for technicians, installers, inspectors and field engineers. Optimised for unstable environments and compliance-heavy contexts: poor connectivity, one-handed use, protective gear and the need to record events without interrupting work.',
				},
			],
		},
		it: {
			title: 'Servizi',
			intro: 'Lavoriamo su sistemi critici dove l’affidabilità non è negoziabile: piattaforme interne, strumenti operativi, software di stabilimento, dashboard energetiche e logistiche, dorsali tipo ERP e sistemi di servizio pubblico. Il nostro lavoro è per lo più ricostruttivo — chiarire processi cresciuti senza struttura — e quando le fondamenta sono stabili progettiamo nuovi strumenti che ereditano la stessa disciplina.',
			services: [
				{
					title: (
						<>
							Interaction Design per Sistemi Industriali,
							<br />
							di Servizio Pubblico e Operativi
						</>
					),
					description:
						'Progettiamo il comportamento dei sistemi in ambiti produttivi, energetici, logistici, nei servizi pubblici e negli ambienti operativi ad alta densità. Accessi multi-ruolo, dati in tempo reale, contesti vincolati e azioni critiche richiedono una chiarezza che non ceda sotto pressione per operatori e coordinatori.',
				},
				{
					title: 'Architettura dei Workflow per Produzione e Field Operations',
					description:
						'Ricostruiamo i workflow utilizzati in fabbrica, magazzino, manutenzione, erogazione di servizi pubblici e team distribuiti. Sequenze chiare riducono i fermi, eliminano le reinterpretazioni e rendono le decisioni operative ripetibili tra turni, sedi ed enti.',
				},
				{
					title: 'Information Architecture per Piattaforme Complesse',
					description:
						'Le piattaforme operative e di servizio pubblico accumulano logiche per anni. Ristrutturiamo ruoli, stati, oggetti e regole di ciclo di vita affinché suite ERP, back office e portali condivisi si comportino come sistemi coerenti, non come archivi di eccezioni.',
				},
				{
					title: 'Redesign di le interazioni operative di sistemi Legacy e Strumenti Industriali',
					description:
						'Le schermate legacy in produzione, nei controlli di stabilimento, nelle suite ERP o nei portali normativi spesso nascondono workflow critici. Esponiamo la struttura reale, stabilizziamo la logica e ricostruiamo l’interfaccia affinché operatori, tecnici e manager possano usarla senza ambiguità.',
				},
				{
					title: 'Strumenti Mobile per Tecnici e Team sul Campo',
					description:
						'Progettiamo le interazioni operative di sistemi mobile compatte e ad alto segnale per tecnici, installatori, ispettori e field engineer. Ottimizzate per ambienti instabili e contesti regolati: connettività scarsa, uso a una mano, DPI, necessità di registrare eventi senza interrompere il lavoro.',
				},
			],
		},
	}[lang] || {
		title: 'Services',
		intro: 'We work on systems where reliability is non-negotiable: industrial platforms, operational tools, plant software, energy dashboards, logistics workflows and enterprise infrastructure.',
		services: [],
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
						<p className='max-w-3xl mt-6 text-lg text-neutral-600'>
							{copy.intro}
						</p>
					</div>

					<div className='mt-10 space-y-8'>
						{copy.services.map((service, index) => (
							<div
								key={index}
								className={`border-t border-neutral-200 pt-8 md:grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-6 ${
									index === copy.services.length - 1
										? 'border-b pb-8 md:pb-10'
										: ''
								}`}>
								<div className='flex items-start gap-3'>
									<Heading
										level='h2'
										size='card'>
										{service.title}
									</Heading>
								</div>
								<Body className='mt-4 text-neutral-700 md:mt-0'>
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
