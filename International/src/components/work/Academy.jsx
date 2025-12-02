/** @format */

export const meta = {
	title: 'Academy — Training Management System',
	slug: 'academy-training',
	client: 'Veneto Lavoro',
	summary:
		'Replacing fragmented spreadsheets, emails and manual steps with a coherent, verifiable training management system.',
	sector: 'Public Sector / HR',
	featured: false,
	publishedAt: '2024-01-20',
	lang: 'en',
	metrics: [
		{ label: 'Validated roles', value: '5' },
		{ label: 'Process reduction', value: '27%' },
	],
	coverImage: '/cases/academy.png',
};

export default function CaseStudy() {
	return (
		<div className='max-w-3xl mx-auto space-y-10'>
			<header className='space-y-3'>
				<h1 className='text-2xl font-medium tracking-tight text-neutral-900'>
					{meta.title}
				</h1>
				<p className='text-xs font-medium tracking-wide uppercase text-neutral-500'>
					End-to-end architecture for mandatory training
				</p>
				<p className='mt-6 text-lg leading-relaxed text-neutral-800'>
					Public-sector training was scattered across Excel sheets,
					Word templates, emails and manual updates. Academy replaces
					this fragmented landscape with an integrated management
					system governed by clear states, roles and flows.
				</p>
			</header>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Architecture
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					The project started by defining the full lifecycle of a
					course: creation, publication, assignment, delivery,
					validation and reporting. Each step was explicitly modelled,
					including entry conditions, transitions and dependencies.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					The system is not a document repository but an operational
					backbone: courses, budgets, participants and outcomes all
					live in the same structure, instead of being distributed
					across files and inboxes.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Systems
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					At the centre of Academy lies a continuous end-to-end flow:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>budget definition and allocation;</li>
					<li>course creation and publishing;</li>
					<li>assignment and enrolment;</li>
					<li>attendance and completion tracking;</li>
					<li>validation and reporting.</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					Each phase produces complete data for the next. Nothing has
					to be reconstructed manually at the end of the year: the
					system accumulates the required information as the process
					runs.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					Notifications are not an accessory; they are safeguards. The
					platform alerts users about expiring courses, missing
					attendance, residual hours, required justifications and
					incomplete reporting. The goal is not convenience but
					systemic coherence.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Interface
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					Two dashboards govern the everyday experience:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>
						<span className='font-medium'>Employee dashboard</span>{' '}
						– clear view of completed hours, remaining hours,
						available courses and mandatory assignments. No manual
						calculations, no guesswork.
					</li>
					<li>
						<span className='font-medium'>
							Administrator dashboard
						</span>{' '}
						– budgets, active courses, enrolments, attendance,
						outcomes and reporting status, all aligned with the same
						lifecycle.
					</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					Interfaces share a consistent visual and interaction
					language: predictable hierarchies, stable components,
					explicit states. The system prefers clarity over ornament.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Conclusion
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					Academy does not simply digitise existing spreadsheets. It
					gives structure to a process that previously lived in tools
					never designed to hold it. The result is a stable, readable
					management system built to last, supporting public-sector
					training through design instead of improvisation.
				</p>
			</section>
		</div>
	);
}
