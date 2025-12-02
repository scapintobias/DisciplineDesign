/** @format */

/** @format */

import { Section, Heading, Body, Stack } from '../ui';
import { Link } from 'react-router-dom';

export function HomeContextSection({ lang = 'en' }) {
	const copy = {
		en: {
			methodHeading: 'How we work',
			methodParagraph:
				'Our method starts by making the system visible: roles, states, workflows and constraints. Only when the operational logic is clear do we rebuild the interface, designing tools that behave consistently under real-world load.',
			methodLink: 'Learn more about our method →',

			aboutHeading: 'Who we are',
			aboutParagraph:
				'We are a small team with a foundation in systems architecture and experience in human–machine interaction and complex workflows. We work alongside operators, domain experts and technical teams to understand how work actually happens — then rebuild the tools so responsibilities, data and decisions remain stable and unambiguous.',
			aboutLink: 'About DisciplineDesign →',
		},
		it: {
			methodHeading: 'Come lavoriamo',
			methodParagraph:
				'Il nostro metodo parte dalla visibilità del sistema: ruoli, stati, workflow e vincoli. Solo quando la logica operativa è chiara ricostruiamo l’interfaccia, progettando strumenti coerenti e affidabili sotto carico reale.',
			methodLink: 'Scopri il nostro metodo →',

			aboutHeading: 'Chi siamo',
			aboutParagraph:
				'Siamo un team con una base in architettura dei sistemi e esperienza in interazione uomo–macchina e workflow complessi. Lavoriamo insieme a operatori, esperti di dominio e team tecnici per capire come il lavoro avviene davvero — e ricostruiamo gli strumenti affinché responsabilità, dati e decisioni restino stabili e inequivocabili.',
			aboutLink: 'Informazioni su DisciplineDesign →',
		},
	}[lang];

	return (
		<Section
			spacing='3xl'
			className='bg-white border-t border-neutral-200'>
			<Stack
				gap='2xl'
				className='max-w-3xl'>
				{/* Method */}
				<div>
					<Heading
						level='h2'
						size='subsection'
						className='mb-3'>
						{copy.methodHeading}
					</Heading>
					<Body
						size='lg'
						className='mb-2 text-neutral-700'>
						{copy.methodParagraph}
					</Body>
					<Link
						to={lang === 'it' ? '/it/metodo' : '/method'}
						className='underline text-neutral-900 underline-offset-4'>
						{copy.methodLink}
					</Link>
				</div>

				{/* About */}
				<div>
					<Heading
						level='h2'
						size='subsection'
						className='mb-3'>
						{copy.aboutHeading}
					</Heading>
					<Body
						size='lg'
						className='mb-2 text-neutral-700'>
						{copy.aboutParagraph}
					</Body>
					<Link
						to={lang === 'it' ? '/it/chi-siamo' : '/about'}
						className='underline text-neutral-900 underline-offset-4'>
						{copy.aboutLink}
					</Link>
				</div>
			</Stack>
		</Section>
	);
}
