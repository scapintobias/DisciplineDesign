/** @format */

export const meta = {
	title: 'UnderControl — Mobile Interface Design',
	slug: 'undercontrol-mobile',
	client: 'UnderControl',
	summary:
		'Designing a clear, predictable mobile experience derived from a complex desktop management system.',
	sector: 'Enterprise Management',
	featured: false,
	publishedAt: '2024-02-01',
	lang: 'en',
	metrics: [
		{ label: 'Screens reduced', value: '35%' },
		{ label: 'Primary workflows covered', value: '3' },
	],
	coverImage: '/cases/undercontrol.png',
};

export default function CaseStudy() {
	return (
		<div className='max-w-3xl mx-auto space-y-10'>
			<header className='space-y-3'>
				<h1 className='text-2xl font-medium tracking-tight text-neutral-900'>
					{meta.title}
				</h1>
				<p className='text-xs font-medium tracking-wide uppercase text-neutral-500'>
					Mobile interface for enterprise project management
				</p>
				<p className='mt-6 text-lg leading-relaxed text-neutral-800'>
					A mobile interface cannot be a shrunken replica of a desktop
					ERP. It needs its own architecture, its own hierarchy, and a
					clear operational focus. UnderControl’s mobile experience
					was redesigned to deliver only the information that is
					meaningful on the move, without sacrificing coherence with
					the full system.
				</p>
			</header>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Architecture
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					UnderControl is a complex management system for projects,
					costs and activities. The desktop platform includes
					dashboards, marginality analysis, Gantt views, procedures
					and detailed consultations. Simply shrinking this onto a
					phone would have produced noise, not clarity.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					The mobile experience required an architectural reframing:
					not reducing complexity, but selecting the parts strictly
					relevant to mobility. We defined a concise top-level
					structure around three recurring use cases:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>Expenses</li>
					<li>Activities</li>
					<li>Project log</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					Each section corresponds to tasks that actually happen away
					from the desk. Non-essential routes, rarely used reports and
					configuration screens are deliberately excluded from the
					mobile scope.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Systems
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					The redesign established a predictable internal logic across
					screens: shared patterns for navigation, consistent input
					structures and uniform states for records. Users learn the
					system once and reuse the same mental model in every
					section.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					The colour system reinforces domain clarity:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>Blue maintains continuity with the main platform.</li>
					<li>Yellow identifies the Expenses area.</li>
					<li>
						Neutral tones support high-density, text-heavy sections.
					</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					Typography, spacing and component behaviour were
					consolidated into a coherent language designed for
					sub-optimal conditions: construction sites, field visits,
					poor lighting, one-handed use. The system prioritises
					legibility, not decoration.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Interface
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					The interface reduces interpretation effort to zero. Core
					screens make essential data immediately visible; details are
					progressively revealed only when necessary. Lists, detail
					views and input flows share the same layout logic, so users
					are never forced to re-learn patterns.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					The project log was rebuilt as an operational tool rather
					than a passive archive: guided input, chronological
					structure and visual continuity with the rest of the app.
					Entries feel like part of a living system, not isolated
					notes.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Outcome
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					The new mobile interface is clearer, faster and more
					coherent with the desktop ecosystem. Navigation remains
					reliable even in poor working conditions, and every section
					feels like part of a unified product rather than a
					simplified copy.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					The app does not replace the management platform; it
					completes it. It provides a focused, well-structured access
					point designed specifically for mobile use, aligned with the
					logic of the ERP instead of competing with it.
				</p>
			</section>
		</div>
	);
}
