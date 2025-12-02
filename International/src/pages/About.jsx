/** @format */

import { useDocumentTitle } from '@/lib/seo';
import { Section, Heading, Stack, Body } from '../components/ui';

/**
 * AboutPage - Studio philosophy and approach
 */
export default function AboutPage({ lang = 'en' }) {
	const copy = {
		en: {
			title: 'About',
			description: 'Clarity, structure and operational precision.',
			paragraphs: [
				'DisciplineDesign is a studio focused on clarity, structure and operational precision. We work on systems where ambiguity creates operational risk: industrial platforms, manufacturing tools, energy-management interfaces, public-service portals, field-team applications and multi-role organisational workflows — including the layered ecosystems of Italian public administration.',
				'The studio was founded by designers trained at Politecnico di Milano, with a foundation in systems architecture and experience in human–machine interaction and complex workflows. That background informs our approach to software: we start from how the system behaves across roles, agencies and services, then design the interface that makes those behaviours legible.',
				'We are a small team of humans, not a feature factory. We listen, analyse and map how organisations truly operate — from factory floors to regional agencies and inter-institutional projects — before proposing solutions. The goal is not to “add a screen”, but to make the system readable, reliable and defensible for the people who depend on it.',
				'Our process is slow, deliberate and documented. We work through workshops, domain interviews, diagrams and prototypes that technical teams can actually build from, paying attention to organisational constraints, regulations and cross-entity collaboration. We leave behind clear artefacts — the kind that survive turnover, audits and new releases.',
				'Most of our work happens inside complex organisations: public employment services, training platforms, enterprise software vendors, industrial and logistics operations. The interfaces we design usually sit behind logins, inside day-to-day work.',
				'Based in Verona, we work with industrial organisations, manufacturers, energy companies, public institutions and enterprise teams across Italy and beyond. A significant part of our work happens inside the stratified reality of Italian public administration — agencies, consortia and authorities with overlapping systems and regulations — where clarity and operational discipline become a concrete form of public service.',
			],
		},
		it: {
			title: 'Chi siamo',
			description: 'Chiarezza, struttura e precisione operativa.',
			paragraphs: [
				'DisciplineDesign è uno studio focalizzato su chiarezza, struttura e precisione operativa. Lavoriamo su sistemi in cui l’ambiguità genera rischio operativo: piattaforme industriali, strumenti per la produzione, interfacce per la gestione dell’energia, portali di servizio pubblico, applicazioni per team sul campo e workflow organizzativi multi-ruolo — compresi gli ecosistemi stratificati della Pubblica Amministrazione italiana.',
				'Lo studio è stato fondato da designer formati al Politecnico di Milano, con una base in architettura dei sistemi e esperienza in interazione uomo–macchina e workflow complessi. Questo background guida il nostro modo di affrontare il software: partiamo dal comportamento del sistema tra ruoli, enti e servizi, poi progettiamo l’interfaccia che rende leggibili queste dinamiche.',
				'Siamo un team di persone, non una catena di montaggio di funzionalità. Ascoltiamo, analizziamo e mappiamo come le organizzazioni operano davvero — dai reparti produttivi alle agenzie regionali e ai progetti inter-istituzionali — prima di proporre soluzioni. L’obiettivo non è “aggiungere una schermata”, ma rendere il sistema leggibile, affidabile e difendibile per chi ci lavora ogni giorno.',
				'Il nostro processo è lento, deliberato e documentato. Lavoriamo con workshop, interviste di dominio, diagrammi e prototipi che i team tecnici possono usare come base reale di implementazione, tenendo conto di vincoli organizzativi, normative e collaborazioni tra enti. Lasciamo in eredità artefatti chiari — quelli che resistono a turnover, audit e nuove release.',
				'Gran parte del nostro lavoro avviene dentro organizzazioni complesse: servizi pubblici per l’impiego, piattaforme formative, software house enterprise, operazioni industriali e logistiche. Le interfacce che progettiamo stanno quasi sempre dietro login, dentro il lavoro quotidiano.',
				'Con base a Verona, lavoriamo con organizzazioni industriali, aziende manifatturiere, realtà dell’energia, enti pubblici e team enterprise in Italia e all’estero. Una parte importante del nostro lavoro avviene all’interno della realtà stratificata della Pubblica Amministrazione italiana — tra enti, agenzie e consorzi con sistemi e normative sovrapposte — dove chiarezza e disciplina operativa diventano una forma concreta di servizio pubblico.',
			],
		},
	}[lang] || {
		title: 'About',
		description: 'Clarity, structure and operational precision.',
		paragraphs: [
			'DisciplineDesign is a studio focused on clarity, structure and operational precision for complex operational systems.',
			'We rebuild workflows, information architecture and interfaces so organisations can rely on tools that behave predictably under real-world load.',
		],
	};

	useDocumentTitle(copy.title, copy.description);

	return (
		<>
			<Section spacing='xl'>
				<Stack
					gap='md'
					className='max-w-4xl'>
					<Heading
						level='h1'
						size='hero'>
						{copy.title}
					</Heading>
					<div className='space-y-6 text-neutral-600'>
						{copy.paragraphs.map((paragraph, index) => (
							<Body
								key={index}
								size='lg'>
								{paragraph}
							</Body>
						))}
					</div>
				</Stack>
			</Section>
		</>
	);
}
